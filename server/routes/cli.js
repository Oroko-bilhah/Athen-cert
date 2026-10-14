import express from "express";

const router = express.Router();

router.post("/execute", (req, res) => {
  const { command = "", cwd = "/home/developer" } = req.body;
  const trimmed = command.trim();

  if (!trimmed) {
    return res.json({ stdout: "", stderr: "", exitCode: 0, cwd });
  }

  const parts = trimmed.split(/\s+/);
  const root = parts[0].toLowerCase();
  const sub = parts[1]?.toLowerCase() || "";
  const sub2 = parts[2]?.toLowerCase() || "";

  let stdout = "";
  let stderr = "";
  let exitCode = 0;

  if (root === "kubectl") {
    if (sub === "version" || sub === "--version") {
      stdout = "Client Version: v1.30.2\nKustomize Version: v5.0.4-0.20230601165947-6ce0bd390ce3\nServer Version: v1.30.2 (Kubernetes Control Plane)";
    } else if (sub === "get" && (sub2 === "pods" || sub2 === "pod" || sub2 === "po")) {
      stdout = 
`NAME                                          READY   STATUS    RESTARTS   AGE     IP            NODE
athencert-api-deployment-7b98d4957f-k2l9p     1/1     Running   0          42m     10.244.1.42   node-worker-01
athencert-api-deployment-7b98d4957f-m8x3q     1/1     Running   0          42m     10.244.2.19   node-worker-02
athencert-api-deployment-7b98d4957f-r5w1z     1/1     Running   0          42m     10.244.1.45   node-worker-01
athencert-frontend-deployment-559db6c4-b6n8t  1/1     Running   0          2d      10.244.2.88   node-worker-02
athencert-frontend-deployment-559db6c4-j4v7y  1/1     Running   0          2d      10.244.1.91   node-worker-01
athencert-frontend-deployment-559db6c4-z9k1q  1/1     Running   0          2d      10.244.2.93   node-worker-02
redis-cache-cluster-0                         1/1     Running   0          5d      10.244.1.12   node-worker-01`;
    } else if (sub === "get" && (sub2 === "nodes" || sub2 === "node" || sub2 === "no")) {
      stdout =
`NAME                 STATUS   ROLES           AGE   VERSION
node-control-plane   Ready    control-plane   18d   v1.30.2
node-worker-01       Ready    worker          18d   v1.30.2
node-worker-02       Ready    worker          18d   v1.30.2`;
    } else if (sub === "get" && (sub2 === "services" || sub2 === "svc")) {
      stdout =
`NAME                        TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE
athencert-service           ClusterIP      10.96.142.88    <none>          80:5000/TCP                  4d
ingress-nginx-controller    LoadBalancer   10.96.0.1       34.120.55.19    80:30080/TCP,443:30443/TCP   18d
kubernetes                  ClusterIP      10.96.0.1       <none>          443/TCP                      18d
redis-service               ClusterIP      10.96.201.14    <none>          6379/TCP                     12d`;
    } else if (sub === "get" && (sub2 === "deployments" || sub2 === "deploy")) {
      stdout =
`NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
athencert-api-deployment         3/3     3            3           4d12h
athencert-frontend-deployment    3/3     3            3           4d12h
redis-cache-cluster              1/1     1            1           12d`;
    } else if (sub === "get" && sub2 === "hpa") {
      stdout =
`NAME            REFERENCE                                 TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
athencert-hpa   Deployment/athencert-api-deployment       24%/70%   3         10        3          4d`;
    } else if (sub === "get" && (sub2 === "namespaces" || sub2 === "ns")) {
      stdout =
`NAME              STATUS   AGE
athencert         Active   18d
default           Active   18d
kube-system       Active   18d
kube-public       Active   18d
ingress-nginx     Active   18d`;
    } else if (sub === "describe" && (sub2 === "pod" || sub2 === "deployment")) {
      stdout =
`Name:         athencert-api-deployment-7b98d4957f-k2l9p
Namespace:    athencert
Priority:     0
Node:         node-worker-01/192.168.1.10
Start Time:   ${new Date(Date.now() - 3600000).toUTCString()}
Labels:       app=athencert-api, pod-template-hash=7b98d4957f
Status:       Running
IP:           10.244.1.42
Containers:
  athencert-express-server:
    Image:          athencert/api:v1.0.0
    Port:           5000/TCP
    Host Port:      0/TCP
    State:          Running
    Ready:          True
    Restart Count:  0
    Liveness:       http-get http://:5000/api/health delay=15s timeout=1s period=10s #success=1 #failure=3
    Readiness:      http-get http://:5000/api/health delay=5s timeout=1s period=5s #success=1 #failure=3
    Environment:
      NODE_ENV:     production
      PORT:         5000
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  42m   default-scheduler  Successfully assigned athencert/athencert-api to node-worker-01
  Normal  Pulled     42m   kubelet            Container image "athencert/api:v1.0.0" already present on machine
  Normal  Created    42m   kubelet            Created container athencert-express-server
  Normal  Started    42m   kubelet            Started container athencert-express-server`;
    } else if (sub === "cluster-info") {
      stdout = 
`Kubernetes control plane is running at https://192.168.49.2:8443
CoreDNS is running at https://192.168.49.2:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
Metrics-server is running at https://192.168.49.2:8443/api/v1/namespaces/kube-system/services/metrics-server:https/proxy`;
    } else if (sub === "scale") {
      stdout = "deployment.apps/athencert-api-deployment scaled";
    } else {
      stdout = 
`kubectl controls the Kubernetes cluster manager.

Basic Commands:
  kubectl get pods               List all active pods in current namespace
  kubectl get nodes              Display cluster nodes and statuses
  kubectl get services           List exposed cluster services
  kubectl get deployments        List workload deployments
  kubectl describe pod <name>    Show deep diagnostic details for a pod
  kubectl cluster-info           Display cluster master and service endpoints`;
    }
  }

  else if (root === "docker") {
    if (sub === "ps") {
      stdout =
`CONTAINER ID   IMAGE                    COMMAND                  CREATED        STATUS        PORTS                    NAMES
9a8e2b1c4f01   athencert/api:v1.0.0     "node server/index.js"   2 hours ago    Up 2 hours    0.0.0.0:5000->5000/tcp   athencert-backend-1
8b7c6d5e4a32   athencert/client:v1.0.0  "nginx -g 'daemon of…"   2 hours ago    Up 2 hours    0.0.0.0:80->80/tcp       athencert-frontend-1
2f1a3b4c5d6e   redis:7.2-alpine         "docker-entrypoint.s…"   4 days ago     Up 4 days     0.0.0.0:6379->6379/tcp   athencert-redis-1`;
    } else if (sub === "build") {
      stdout = 
`[+] Building 3.8s (12/12) FINISHED
 => [internal] load build definition from Dockerfile
 => => transferring dockerfile: 520B
 => [builder 1/4] FROM docker.io/library/node:20-alpine
 => [builder 2/4] WORKDIR /app
 => [builder 3/4] COPY package*.json ./
 => [builder 4/4] RUN npm run build
 => [production 1/3] COPY --from=builder /app/dist ./dist
 => exporting to image
 => => naming to docker.io/library/athencert:v1.0.0`;
    } else {
      stdout = "Docker engine 26.1.1 running. Try 'docker ps' or 'docker images'.";
    }
  }

  else if (root === "aws") {
    if (sub === "s3" && (sub2 === "ls" || !sub2)) {
      stdout =
`2026-08-14 09:21:40 athencert-production-media-assets
2026-08-18 14:02:11 athencert-terraform-state-backend
2026-09-01 18:45:00 athencert-audit-logs-us-east-1`;
    } else if (sub === "ec2" && (sub2 === "describe-instances" || sub2 === "describe")) {
      stdout =
`INSTANCES  i-09f1a8b2c4e5d6f7a  t3.medium  running  10.0.1.42  3.84.19.22  us-east-1a
TAGS       Name   athencert-k8s-worker-01
INSTANCES  i-0a2b4c6d8e0f1a3b5  t3.medium  running  10.0.2.18  3.84.19.23  us-east-1b
TAGS       Name   athencert-k8s-worker-02`;
    } else {
      stdout = "AWS CLI v2.15.30 configured for region us-east-1. Try 'aws s3 ls' or 'aws ec2 describe-instances'.";
    }
  }

  else if (root === "uname" || (root === "uname" && sub === "-a")) {
    stdout = "Linux athencert-k8s-worker-01 5.15.0-1060-aws #66-Ubuntu SMP x86_64 GNU/Linux";
  } else if (root === "whoami") {
    stdout = "cloud-architect@athencert";
  } else if (root === "hostname") {
    stdout = process.env.POD_NAME || "athencert-api-7b98d4957f-k2l9p";
  } else if (root === "pwd") {
    stdout = cwd;
  } else if (root === "help") {
    stdout = 
`Available CLI Tools in Athencert Sandbox:
  - kubectl: Full Kubernetes management (pods, deployments, services, nodes)
  - docker:  Container runtime commands (ps, build, images)
  - aws:     AWS Cloud Provider CLI (s3, ec2, sts, iam)
  - az:      Microsoft Azure CLI (group, vm, aks)
  - gcloud:  Google Cloud SDK (compute, container, storage)`;
  } else {
    stdout = `[athencert-server: executing command] ${trimmed}\nCommand executed successfully with status 0.`;
  }

  res.json({
    command: trimmed,
    stdout,
    stderr,
    exitCode,
    cwd
  });
});

export default router;
