import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

import healthRouter from "./routes/health.js";
import k8sRouter from "./routes/k8s.js";
import cliRouter from "./routes/cli.js";
import certificationsRouter from "./routes/certifications.js";
import examRouter from "./routes/exam.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (!req.path.startsWith("/api/health")) {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} (${duration}ms)`);
    }
  });
  next();
});

app.use("/api", healthRouter);
app.use("/api/k8s", k8sRouter);
app.use("/api/cli", cliRouter);
app.use("/api/certifications", certificationsRouter);
app.use("/api/practice/exam", examRouter);

app.get("/api", (req, res) => {
  res.json({
    name: "Athencert API Engine",
    status: "running",
    version: "1.0.0",
    cluster: process.env.POD_NAME ? "Kubernetes" : "Local Development",
    endpoints: [
      "/api/health (Kubernetes Liveness & Readiness Probes)",
      "/api/k8s/status (Cluster Nodes, Deployments, and HPA status)",
      "/api/certifications (Full certification curriculum catalog)",
      "/api/practice/exam/grade (Server-side mock exam grading)",
      "/api/cli/execute (Terminal execution simulator for kubectl, aws, docker)"
    ]
  });
});

const distPath = path.resolve(__dirname, "../dist");
if (fs.existsSync(distPath)) {
  console.log(`[Athencert Server] Serving static build from: ${distPath}`);
  app.use(express.static(distPath));

  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api/")) return next();
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.use((err, req, res, next) => {
  console.error("[Athencert Server Error]", err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined
  });
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`====================================================`);
  console.log(` Athencert Node.js/Express Server is running!`);
  console.log(` URL:        http://0.0.0.0:${PORT}`);
  console.log(`  Kubernetes: Pod: ${process.env.POD_NAME || "local-pod"} | Namespace: ${process.env.POD_NAMESPACE || "athencert"}`);
  console.log(` Health:     http://localhost:${PORT}/api/health`);
  console.log(`====================================================`);
});

const handleGracefulShutdown = (signal) => {
  console.log(`\n[Athencert Server] Received ${signal}. Initiating graceful container shutdown...`);
  server.close(() => {
    console.log("[Athencert Server] HTTP server closed cleanly. Exiting process.");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("[Athencert Server] Forced termination due to timeout.");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", () => handleGracefulShutdown("SIGTERM"));
process.on("SIGINT", () => handleGracefulShutdown("SIGINT"));

export default app;
