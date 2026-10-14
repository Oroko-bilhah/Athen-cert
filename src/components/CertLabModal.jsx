import { useState, useEffect } from "react";
import "./PracticeModals.css";

const PRESETS = {
  aws: [
    {
      id: "ec2-list",
      label: "List Running EC2 Instances",
      cmd: "aws ec2 describe-instances --filters \"Name=instance-state-name,Values=running\" --output table",
      output: `--------------------------------------------------------------------------------------------------------
|                                           DescribeInstances                                          |
+------------------------------------------------------------------------------------------------------+
||                                              Reservations                                          ||
|+------------------------------------+---------------------------------------------------------------+|
|||  OwnerId                          |  123456789012                                                 |||
|||  ReservationId                    |  r-0a1b2c3d4e5f67890                                          |||
|+------------------------------------+---------------------------------------------------------------+|
||||                                             Instances                                           ||||
|+-------------------------+--------------------+---------------+-------------------+-----------------+|
|||| AvailabilityZone      | ImageId            | InstanceId    | InstanceType      | State           ||||
|+-------------------------+--------------------+---------------+-------------------+-----------------+|
|||| us-east-1a            | ami-0c55b159cbfafe | i-09f8e7d6c5b | t3.micro          | running         ||||
|||| us-east-1b            | ami-0c55b159cbfafe | i-08a7b6c5d4e | t3.micro          | running         ||||
|+-------------------------+--------------------+---------------+-------------------+-----------------+|
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "Notice the multi-AZ deployment (us-east-1a and us-east-1b). On the AWS CLF-C02 exam, distributing EC2 instances across multiple Availability Zones in the same Region is the fundamental pattern for High Availability (HA) and fault tolerance."
    },
    {
      id: "s3-ls",
      label: "Inspect S3 Buckets & Encryption",
      cmd: "aws s3 ls && aws s3api get-bucket-encryption --bucket athencert-finance-records",
      output: `2026-08-10 14:22:01 athencert-public-assets
2026-08-12 09:15:30 athencert-finance-records
2026-08-14 11:45:12 athencert-logs-us-east-1

{
    "ServerSideEncryptionConfiguration": {
        "Rules": [
            {
                "ApplyServerSideEncryptionByDefault": {
                    "SSEAlgorithm": "aws:kms",
                    "KMSMasterKeyId": "arn:aws:kms:us-east-1:123456789012:key/3c5b9a8e-..."
                },
                "BucketKeyEnabled": true
            }
        ]
    }
}
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "S3 buckets have globally unique names across all AWS accounts. Default encryption (SSE-S3 or SSE-KMS) applies to all new objects automatically without impacting application code."
    },
    {
      id: "iam-caller",
      label: "Verify Caller Identity & Least Privilege",
      cmd: "aws sts get-caller-identity",
      output: `{
    "UserId": "AIDASAMPLESYSTEM987:engineer-alex",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/engineer-alex"
}
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "The AWS Security Token Service (STS) 'get-caller-identity' is the primary diagnostic command to confirm which IAM identity and 12-digit AWS account you are authenticated against."
    }
  ],
  "aws-saa": [
    {
      id: "alb-describe",
      label: "Describe Application Load Balancers",
      cmd: "aws elbv2 describe-load-balancers --output table",
      output: `----------------------------------------------------------------------------------------------------------------------
|                                                DescribeLoadBalancers                                               |
+--------------------------------------------------------------------------------------------------------------------+
||                                                   LoadBalancers                                                   ||
|+------------------+----------------------------------------------------------------+--------------+----------------+|
||  DNSName         | app-prod-alb-198273645.us-east-1.elb.amazonaws.com             | Scheme       | internet-facing||
||  State           | active                                                         | Type         | application    ||
||  VpcId           | vpc-0a1b2c3d4e5f67890                                          | IpAddressType| ipv4           ||
|+------------------+----------------------------------------------------------------+--------------+----------------+|
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "Application Load Balancers (ALBs) operate at Layer 7 and distribute incoming HTTP/HTTPS traffic across target groups in multiple Availability Zones."
    },
    {
      id: "asg-describe",
      label: "Inspect Auto Scaling Group Health",
      cmd: "aws autoscaling describe-auto-scaling-groups --auto-scaling-group-names web-tier-asg --output table",
      output: `-------------------------------------------------------------------------------------------------
|                                   DescribeAutoScalingGroups                                   |
+--------------------+--------------+--------------+-----------------+--------------------------+
| AutoScalingGroupName| MinSize      | MaxSize      | DesiredCapacity | HealthCheckType          |
+--------------------+--------------+--------------+-----------------+--------------------------+
| web-tier-asg       | 2            | 10           | 4               | ELB                      |
+--------------------+--------------+--------------+-----------------+--------------------------+
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "Notice HealthCheckType is set to 'ELB'. Using ELB health checks ensures the ASG replaces instances that fail HTTP application health checks, not just EC2 hardware checks."
    },
    {
      id: "tgw-describe",
      label: "Describe AWS Transit Gateway Attachments",
      cmd: 'aws ec2 describe-transit-gateway-vpc-attachments --filters "Name=state,Values=available" --output table',
      output: `-------------------------------------------------------------------------------------------
|                           DescribeTransitGatewayVpcAttachments                          |
+-----------------------+-----------------------+-------------------------+----------------+
| TransitGatewayId      | VpcId                 | TransitGatewayAttachment| State          |
+-----------------------+-----------------------+-------------------------+----------------+
| tgw-0987654321fedcba0 | vpc-01prod23456789a   | tgwa-01112223334445556  | available      |
| tgw-0987654321fedcba0 | vpc-02sharedservices  | tgwa-02223334445556667  | available      |
| tgw-0987654321fedcba0 | vpc-03securityinspect | tgwa-03334445556667778  | available      |
+-----------------------+-----------------------+-------------------------+----------------+
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "AWS Transit Gateway acts as a central cloud router connecting multiple VPCs and on-premises networks in a hub-and-spoke topology, supporting transitive routing."
    }
  ],
  kubernetes: [
    {
      id: "k8s-pods",
      label: "List Pods in Namespace",
      cmd: "kubectl get pods -n production -o wide",
      output: `NAME                                READY   STATUS    RESTARTS   AGE   IP             NODE           NOMINATED NODE
payment-service-67b84d94b4-4k9lp   1/1     Running   0          4d    10.244.1.42    worker-node-01 <none>
payment-service-67b84d94b4-8s2mq   1/1     Running   0          4d    10.244.2.18    worker-node-02 <none>
web-frontend-5df68b5774-2x7zc      1/1     Running   0          2d    10.244.1.43    worker-node-01 <none>
web-frontend-5df68b5774-h4l9t      1/1     Running   0          2d    10.244.3.11    worker-node-03 <none>
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "Pods are scheduled across different worker nodes automatically by the kube-scheduler to maintain resilience. Each Pod receives its own unique cluster-internal IP address."
    },
    {
      id: "k8s-service",
      label: "Describe ClusterIP Service",
      cmd: "kubectl describe svc payment-service -n production",
      output: `Name:              payment-service
Namespace:         production
Labels:            app=payment-service
Annotations:       <none>
Selector:          app=payment-service
Type:              ClusterIP
IP Family Policy:  SingleStack
IP Families:       IPv4
IP:                10.96.124.55
Port:              http  8080/TCP
TargetPort:        8080/TCP
Endpoints:         10.244.1.42:8080,10.244.2.18:8080
Session Affinity:  None
Events:            <none>
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "ClusterIP is the default Kubernetes Service type. It creates a stable virtual internal IP that load balances traffic across all healthy Pod endpoints matching the selector label."
    }
  ],
  azure: [
    {
      id: "az-vm",
      label: "List Virtual Machines in Resource Group",
      cmd: "az vm list --resource-group ProductionRG --query \"[].{Name:name, ResourceGroup:resourceGroup, Location:location, Status:provisioningState}\" --output table",
      output: `Name        ResourceGroup    Location    Status
----------  ---------------  ----------  ---------
vm-web-01   ProductionRG     eastus2     Succeeded
vm-web-02   ProductionRG     eastus2     Succeeded
vm-db-01    ProductionRG     eastus2     Succeeded
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "In Azure AZ-900, all Azure resources must reside inside exactly one Resource Group. Resource Groups act as logical containers for lifecycle management, billing, and Azure Role-Based Access Control (RBAC)."
    },
    {
      id: "az-account",
      label: "Check Active Azure Subscription",
      cmd: "az account show --output json",
      output: `{
  "environmentName": "AzureCloud",
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "isDefault": true,
  "name": "Athencert-Enterprise-Production",
  "state": "Enabled",
  "tenantId": "8f7e6d5c-4b3a-2109-8765-4321fedcba09",
  "user": {
    "name": "cloud-architect@athencert.io",
    "type": "user"
  }
}
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "Subscriptions provide both an administrative billing boundary and a security boundary for managing resources within Microsoft Entra ID (formerly Azure AD) tenants."
    }
  ],
  cisco: [
    {
      id: "cisco-route",
      label: "Show IPv4 Routing Table",
      cmd: "Router# show ip route",
      output: `Codes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area

Gateway of last resort is 192.168.1.1 to network 0.0.0.0

S*    0.0.0.0/0 [1/0] via 192.168.1.1
C     192.168.1.0/24 is directly connected, GigabitEthernet0/0/0
L     192.168.1.254/32 is directly connected, GigabitEthernet0/0/0
O     10.10.20.0/24 [110/2] via 192.168.1.2, 00:14:32, GigabitEthernet0/0/0
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "On CCNA 200-301, remember the Administrative Distances: Connected (0), Static (1), eBGP (20), EIGRP (90), OSPF (110), RIP (120). Lower AD indicates higher protocol trustworthiness."
    },
    {
      id: "cisco-int",
      label: "Show IP Interface Brief",
      cmd: "Router# show ip interface brief",
      output: `Interface              IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0/0   192.168.1.254   YES manual up                    up      
GigabitEthernet0/0/1   10.0.0.1        YES manual up                    up      
GigabitEthernet0/0/2   unassigned      YES unset  administratively down down    
Loopback0              1.1.1.1         YES manual up                    up      
[Execution Status: SUCCESS (Exit Code: 0)]`,
      explanation: "'Status up / Protocol up' means Layer 1 (Physical) and Layer 2 (Data Link framing/clocking) are both operational. 'Administratively down' means the port has the 'shutdown' command applied."
    }
  ]
};

export default function CertLabModal({ provider = "aws", initialCommand = "", onClose }) {
  const [activeTab, setActiveTab] = useState(
    ["aws", "kubernetes", "azure", "cisco"].includes(provider.toLowerCase())
      ? provider.toLowerCase()
      : "aws"
  );

  const currentPresets = PRESETS[activeTab] || PRESETS.aws;
  const [selectedPresetId, setSelectedPresetId] = useState(currentPresets[0].id);
  const [inputCommand, setInputCommand] = useState(initialCommand || currentPresets[0].cmd);
  const [terminalOutput, setTerminalOutput] = useState(currentPresets[0].output);
  const [explanation, setExplanation] = useState(currentPresets[0].explanation);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    const presets = PRESETS[tabKey];
    if (presets && presets.length > 0) {
      setSelectedPresetId(presets[0].id);
      setInputCommand(presets[0].cmd);
      setTerminalOutput(presets[0].output);
      setExplanation(presets[0].explanation);
    }
  };

  const handleSelectPreset = (preset) => {
    setSelectedPresetId(preset.id);
    setInputCommand(preset.cmd);
    setTerminalOutput(preset.output);
    setExplanation(preset.explanation);
  };

  const handleRunCommand = () => {
    setIsRunning(true);
    setTerminalOutput("Executing in virtual cloud sandbox...\nConnecting to control plane...");

    setTimeout(() => {
      setIsRunning(false);
      const matched = currentPresets.find((p) => p.id === selectedPresetId);
      if (matched && matched.cmd.trim() === inputCommand.trim()) {
        setTerminalOutput(matched.output);
        setExplanation(matched.explanation);
      } else {
        setTerminalOutput(
          `$ ${inputCommand}\n\n[SIMULATED CLOUD CONSOLE RESPONSE]\nCommand recognized: ${inputCommand.split(" ")[0] || "exec"}\nAPI Status: 200 OK\nLatency: 38ms\nTarget Region: us-east-1\nExecution Verified: Syntax and credentials valid for ${activeTab.toUpperCase()}.\n\n[Execution Status: SUCCESS (Exit Code: 0)]`
        );
        setExplanation(
          "Custom command execution completed. In production, parameter validation ensures that flags and permissions meet enterprise IAM requirements."
        );
      }
    }, 400);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleRunCommand();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content certlab-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "980px" }}
      >
        
        <div className="modal-header">
          <div className="certlab-header-title">
            <span className="certlab-badge"> CERTLAB • INTERACTIVE CLOUD CONSOLE</span>
            <h2>Cloud & Infrastructure Sandbox</h2>
            <p className="certlab-subtitle">
              Practice real CLI commands, inspect responses, and test architecture scenarios hands-on.
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            
          </button>
        </div>

        
        <div className="certlab-env-tabs">
          <button
            className={`certlab-tab ${activeTab === "aws" ? "active" : ""}`}
            onClick={() => handleTabChange("aws")}
          >
             AWS CLI
          </button>
          <button
            className={`certlab-tab ${activeTab === "kubernetes" ? "active" : ""}`}
            onClick={() => handleTabChange("kubernetes")}
          >
             Kubernetes (kubectl)
          </button>
          <button
            className={`certlab-tab ${activeTab === "azure" ? "active" : ""}`}
            onClick={() => handleTabChange("azure")}
          >
             Azure CLI (az)
          </button>
          <button
            className={`certlab-tab ${activeTab === "cisco" ? "active" : ""}`}
            onClick={() => handleTabChange("cisco")}
          >
             Cisco IOS (CCNA)
          </button>
        </div>

        
        <div className="certlab-scenarios-bar">
          <span className="certlab-scenarios-label">Preset Scenarios:</span>
          <div className="certlab-scenario-pills">
            {currentPresets.map((preset) => (
              <button
                key={preset.id}
                className={`certlab-pill ${selectedPresetId === preset.id ? "active" : ""}`}
                onClick={() => handleSelectPreset(preset)}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        
        <div className="certlab-workspace">
          
          <div className="certlab-pane certlab-editor-pane">
            <div className="certlab-pane-header">
              <span>Terminal Input</span>
              <button
                className="certlab-action-link"
                onClick={() => handleCopy(inputCommand)}
              >
                {copied ? " Copied" : " Copy Command"}
              </button>
            </div>

            <textarea
              className="certlab-input-textarea"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              placeholder="Enter cloud command here..."
              rows={5}
              spellCheck={false}
              aria-label="Cloud CLI command input"
            />

            <div className="certlab-editor-actions">
              <button
                className="certlab-run-btn"
                onClick={handleRunCommand}
                disabled={isRunning}
              >
                {isRunning ? "⏳ Executing..." : "▶ Run Command (Ctrl+Enter)"}
              </button>
              <button
                className="certlab-reset-btn"
                onClick={() => {
                  const matched = currentPresets.find((p) => p.id === selectedPresetId);
                  if (matched) {
                    setInputCommand(matched.cmd);
                    setTerminalOutput(matched.output);
                    setExplanation(matched.explanation);
                  }
                }}
              >
                ↺ Reset
              </button>
            </div>
          </div>

          
          <div className="certlab-pane certlab-terminal-pane">
            <div className="certlab-pane-header terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">cloud-sandbox@athencert-terminal</span>
              <button
                className="certlab-action-link"
                onClick={() => handleCopy(terminalOutput)}
              >
                 Copy Output
              </button>
            </div>

            <pre className="certlab-terminal-screen">
              <code>{terminalOutput}</code>
            </pre>
          </div>
        </div>

        
        {explanation && (
          <div className="certlab-explanation-card">
            <div className="explanation-title-row">
              <span className="explanation-icon"></span>
              <strong>Exam Blueprint & Architecture Insight</strong>
            </div>
            <p>{explanation}</p>
          </div>
        )}

        
        <div className="modal-footer-bar certlab-footer">
          <div className="certlab-footer-note">
            <span>Tip: Press <strong>Ctrl+Enter</strong> to instantly execute commands.</span>
          </div>
          <button className="primary-action-btn" onClick={onClose}>
            Close Console
          </button>
        </div>
      </div>
    </div>
  );
}
