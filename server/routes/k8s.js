import express from "express";

const router = express.Router();

let clusterState = {
  namespace: process.env.POD_NAMESPACE || "athencert",
  clusterVersion: "v1.30.2",
  nodes: [
    { name: "node-worker-01", status: "Ready", roles: "worker", cpuCapacity: "8 cores", memCapacity: "32Gi" },
    { name: "node-worker-02", status: "Ready", roles: "worker", cpuCapacity: "8 cores", memCapacity: "32Gi" },
    { name: "node-control-plane", status: "Ready", roles: "control-plane", cpuCapacity: "4 cores", memCapacity: "16Gi" }
  ],
  deployments: [
    {
      name: "athencert-api-deployment",
      namespace: "athencert",
      replicasDesired: 3,
      replicasReady: 3,
      image: "athencert/api:v1.0.0",
      strategy: "RollingUpdate",
      age: "4d12h"
    },
    {
      name: "athencert-frontend-deployment",
      namespace: "athencert",
      replicasDesired: 3,
      replicasReady: 3,
      image: "athencert/frontend:v1.0.0",
      strategy: "RollingUpdate",
      age: "4d12h"
    },
    {
      name: "redis-cache-cluster",
      namespace: "athencert",
      replicasDesired: 1,
      replicasReady: 1,
      image: "redis:7.2-alpine",
      strategy: "Recreate",
      age: "12d"
    }
  ],
  services: [
    { name: "athencert-service", type: "ClusterIP", clusterIp: "10.96.142.88", ports: "80:5000/TCP" },
    { name: "redis-service", type: "ClusterIP", clusterIp: "10.96.201.14", ports: "6379:6379/TCP" },
    { name: "ingress-nginx-controller", type: "LoadBalancer", clusterIp: "10.96.0.1", ports: "80:30080/TCP, 443:30443/TCP" }
  ],
  hpa: {
    name: "athencert-hpa",
    reference: "Deployment/athencert-api-deployment",
    minReplicas: 3,
    maxReplicas: 10,
    currentCpuPct: 24,
    targetCpuPct: 70
  }
};

router.get("/status", (req, res) => {
  const currentPod = process.env.POD_NAME || `athencert-api-${Math.random().toString(36).substring(2, 7)}`;
  
  res.json({
    success: true,
    cluster: {
      name: "athencert-prod-cluster",
      provider: "Kubernetes (EKS / GKE / Kind / Minikube Compatible)",
      status: "HEALTHY",
      activeNamespace: clusterState.namespace,
      currentPod: {
        name: currentPod,
        ip: process.env.POD_IP || "10.244.1.42",
        node: process.env.NODE_NAME || "node-worker-01",
        container: "athencert-express-api",
        uptimeSeconds: Math.floor(process.uptime())
      },
      workloadSummary: {
        nodesTotal: clusterState.nodes.length,
        deploymentsTotal: clusterState.deployments.length,
        servicesTotal: clusterState.services.length,
        totalReplicas: clusterState.deployments.reduce((acc, d) => acc + d.replicasReady, 0)
      },
      nodes: clusterState.nodes,
      deployments: clusterState.deployments,
      services: clusterState.services,
      hpa: clusterState.hpa
    }
  });
});

router.post("/scale", (req, res) => {
  const { deploymentName, replicas } = req.body;
  const count = parseInt(replicas, 10);

  if (!deploymentName || isNaN(count) || count < 1 || count > 20) {
    return res.status(400).json({
      success: false,
      message: "Invalid scale request. Specify deploymentName and replicas between 1 and 20."
    });
  }

  const dep = clusterState.deployments.find((d) => d.name === deploymentName);
  if (!dep) {
    return res.status(404).json({ success: false, message: `Deployment '${deploymentName}' not found.` });
  }

  dep.replicasDesired = count;
  dep.replicasReady = count;

  res.json({
    success: true,
    message: `deployment.apps/${deploymentName} scaled to ${count} replicas.`,
    deployment: dep
  });
});

export default router;
