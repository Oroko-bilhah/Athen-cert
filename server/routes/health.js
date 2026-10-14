import express from "express";

const router = express.Router();

router.get("/health", (req, res) => {
  const podName = process.env.POD_NAME || "athencert-local-dev-pod";
  const podIp = process.env.POD_IP || "127.0.0.1";
  const nodeName = process.env.NODE_NAME || "local-minikube-worker";
  const namespace = process.env.POD_NAMESPACE || "athencert";

  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    service: "athencert-api",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    kubernetes: {
      podName,
      podIp,
      nodeName,
      namespace,
      probeType: "HTTP-GET",
      probePort: process.env.PORT || 5000,
      readiness: "READY",
      liveness: "LIVE"
    },
    memoryUsage: {
      rssMb: Math.round(process.memoryUsage().rss / (1024 * 1024)),
      heapUsedMb: Math.round(process.memoryUsage().heapUsed / (1024 * 1024)),
      heapTotalMb: Math.round(process.memoryUsage().heapTotal / (1024 * 1024))
    }
  });
});

export default router;
