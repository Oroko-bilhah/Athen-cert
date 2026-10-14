import { useState, useMemo } from "react";
import "./PracticeModals.css";

const PORTS_DATA = [
  { port: "20 / 21", proto: "TCP", service: "FTP", desc: "File Transfer Protocol (unencrypted file transfer)", cert: "CompTIA / CCNA / Cloud" },
  { port: "22", proto: "TCP", service: "SSH / SFTP", desc: "Secure Shell for encrypted remote CLI administration and SFTP file transfer", cert: "AWS / Azure / CCNA / Linux" },
  { port: "23", proto: "TCP", service: "Telnet", desc: "Unencrypted remote terminal protocol; insecure and replaced by SSH", cert: "CompTIA / CCNA" },
  { port: "25", proto: "TCP", service: "SMTP", desc: "Simple Mail Transfer Protocol for sending email between mail servers", cert: "CompTIA / CCNA" },
  { port: "53", proto: "UDP / TCP", service: "DNS", desc: "Domain Name System; resolves hostnames (e.g. example.com) to IP addresses", cert: "All Exams" },
  { port: "67 / 68", proto: "UDP", service: "DHCP", desc: "Dynamic Host Configuration Protocol; automatically leases IP addresses to clients", cert: "CompTIA / CCNA" },
  { port: "80", proto: "TCP", service: "HTTP", desc: "Hypertext Transfer Protocol for standard unencrypted web traffic", cert: "All Exams" },
  { port: "110", proto: "TCP", service: "POP3", desc: "Post Office Protocol v3 for downloading email to local client", cert: "CompTIA" },
  { port: "123", proto: "UDP", service: "NTP", desc: "Network Time Protocol for synchronizing system clocks across servers", cert: "CCNA / AWS" },
  { port: "143", proto: "TCP", service: "IMAP", desc: "Internet Message Access Protocol for reading email synced across devices", cert: "CompTIA" },
  { port: "443", proto: "TCP", service: "HTTPS", desc: "Hypertext Transfer Protocol Secure; encrypted web traffic over TLS/SSL", cert: "All Exams" },
  { port: "445", proto: "TCP", service: "SMB", desc: "Server Message Block for Windows file sharing and network printers", cert: "CompTIA / Azure" },
  { port: "1433", proto: "TCP", service: "MS SQL", desc: "Microsoft SQL Server database default listener port", cert: "Azure / AWS RDS" },
  { port: "3306", proto: "TCP", service: "MySQL", desc: "MySQL and MariaDB default relational database listener port", cert: "AWS RDS / Cloud" },
  { port: "3389", proto: "TCP / UDP", service: "RDP", desc: "Remote Desktop Protocol for Windows graphical remote desktop access", cert: "Azure / AWS / CompTIA" },
  { port: "5432", proto: "TCP", service: "PostgreSQL", desc: "PostgreSQL relational database default listener port", cert: "AWS RDS / Cloud" },
  { port: "6443", proto: "TCP", service: "K8s API", desc: "Kubernetes API Server default HTTPS secure port on control plane", cert: "Kubernetes CKA" },
  { port: "8080", proto: "TCP", service: "HTTP Alt", desc: "Common alternative HTTP port for development web proxies and container apps", cert: "Cloud / Dev" }
];

const ACRONYMS_DATA = [
  { term: "IAM", full: "Identity and Access Management", provider: "AWS / Cloud", desc: "Centrally manages identities, credentials, permissions policies, and roles." },
  { term: "S3", full: "Simple Storage Service", provider: "AWS", desc: "High-durability (99.999999999% 11 9s) object storage service with global unique bucket names." },
  { term: "EC2", full: "Elastic Compute Cloud", provider: "AWS", desc: "Scalable virtual servers (instances) with configurable CPU, RAM, and attached EBS storage." },
  { term: "VPC", full: "Virtual Private Cloud", provider: "AWS / Cloud", desc: "Logically isolated software-defined virtual network for launching cloud resources." },
  { term: "EBS", full: "Elastic Block Store", provider: "AWS", desc: "Persistent block storage volume attached to a single EC2 instance in the same AZ." },
  { term: "EFS", full: "Elastic File System", provider: "AWS", desc: "Managed NFS file system that can be mounted concurrently by hundreds of EC2 instances." },
  { term: "RDS", full: "Relational Database Service", provider: "AWS", desc: "Managed database engine for Postgres, MySQL, MariaDB, Oracle, and SQL Server with Multi-AZ HA." },
  { term: "RBAC", full: "Role-Based Access Control", provider: "Azure / K8s", desc: "Security model that assigns fine-grained permissions to roles rather than direct users." },
  { term: "CIDR", full: "Classless Inter-Domain Routing", provider: "Networking", desc: "IP addressing methodology allocating IP addresses and subnet masks flexibly (e.g. /24)." },
  { term: "HPA", full: "Horizontal Pod Autoscaler", provider: "Kubernetes", desc: "Automatically scales the number of Pod replicas based on observed CPU/memory utilization." },
  { term: "PVC", full: "Persistent Volume Claim", provider: "Kubernetes", desc: "A request for storage resources by a user or Pod, bound to a matching Persistent Volume." },
  { term: "OSPF", full: "Open Shortest Path First", provider: "Cisco CCNA", desc: "Link-state interior gateway routing protocol (IGP) using Dijkstra algorithm, AD of 110." },
  { term: "VLSM", full: "Variable Length Subnet Masking", provider: "Networking", desc: "Subnetting technique allowing different subnets to have different mask sizes to prevent waste." },
  { term: "SLA", full: "Service Level Agreement", provider: "All Providers", desc: "Commitment between a service provider and customer detailing guaranteed uptime percentage." }
];

const CIDR_DATA = [
  { prefix: "/16", mask: "255.255.0.0", totalIPs: "65,536", usableAWS: "65,531", standardUsable: "65,534", notes: "Largest allowed VPC block in AWS" },
  { prefix: "/20", mask: "255.255.240.0", totalIPs: "4,096", usableAWS: "4,091", standardUsable: "4,094", notes: "Common mid-tier VPC/Subnet" },
  { prefix: "/24", mask: "255.255.255.0", totalIPs: "256", usableAWS: "251", standardUsable: "254", notes: "Standard Class C subnet size" },
  { prefix: "/25", mask: "255.255.255.128", totalIPs: "128", usableAWS: "123", standardUsable: "126", notes: "Subnet halved" },
  { prefix: "/26", mask: "255.255.255.192", totalIPs: "64", usableAWS: "59", standardUsable: "62", notes: "Quarter subnet" },
  { prefix: "/27", mask: "255.255.255.224", totalIPs: "32", usableAWS: "27", standardUsable: "30", notes: "Small production tier" },
  { prefix: "/28", mask: "255.255.255.240", totalIPs: "16", usableAWS: "11", standardUsable: "14", notes: "Smallest allowed VPC/Subnet in AWS" },
  { prefix: "/30", mask: "255.255.255.252", totalIPs: "4", usableAWS: "0 (Not allowed)", standardUsable: "2", notes: "Point-to-point WAN links in Cisco" },
  { prefix: "/32", mask: "255.255.255.255", totalIPs: "1", usableAWS: "1 (Host route)", standardUsable: "1", notes: "Single specific host IP address" }
];

export default function CheatSheetModal({ defaultTab = "ports", onClose }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1800);
  };

  const filteredPorts = useMemo(() => {
    if (!searchQuery.trim()) return PORTS_DATA;
    const q = searchQuery.toLowerCase();
    return PORTS_DATA.filter(
      (p) =>
        p.port.includes(q) ||
        p.service.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.cert.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredAcronyms = useMemo(() => {
    if (!searchQuery.trim()) return ACRONYMS_DATA;
    const q = searchQuery.toLowerCase();
    return ACRONYMS_DATA.filter(
      (a) =>
        a.term.toLowerCase().includes(q) ||
        a.full.toLowerCase().includes(q) ||
        a.desc.toLowerCase().includes(q) ||
        a.provider.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredCidr = useMemo(() => {
    if (!searchQuery.trim()) return CIDR_DATA;
    const q = searchQuery.toLowerCase();
    return CIDR_DATA.filter(
      (c) =>
        c.prefix.includes(q) ||
        c.mask.includes(q) ||
        c.totalIPs.includes(q) ||
        c.notes.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content cheatsheet-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "940px" }}
      >
        
        <div className="modal-header">
          <div>
            <span className="certlab-badge"> ATHENCERT REFERENCE • DEVELOPER CHEAT SHEETS</span>
            <h2>Certification Fast Reference & Cheat Sheets</h2>
            <p className="certlab-subtitle">
              High-yield tables for ports, cloud acronyms, and CIDR subnet math frequently tested on exams.
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            
          </button>
        </div>

        
        <div className="cheatsheet-toolbar">
          <div className="cheatsheet-tabs">
            <button
              className={`cheatsheet-tab-btn ${activeTab === "ports" ? "active" : ""}`}
              onClick={() => setActiveTab("ports")}
            >
               Ports & Protocols ({filteredPorts.length})
            </button>
            <button
              className={`cheatsheet-tab-btn ${activeTab === "acronyms" ? "active" : ""}`}
              onClick={() => setActiveTab("acronyms")}
            >
               Cloud Acronyms ({filteredAcronyms.length})
            </button>
            <button
              className={`cheatsheet-tab-btn ${activeTab === "cidr" ? "active" : ""}`}
              onClick={() => setActiveTab("cidr")}
            >
               CIDR & Subnetting ({filteredCidr.length})
            </button>
          </div>

          <div className="cheatsheet-search-box">
            <input
              type="text"
              className="cheatsheet-search-input"
              placeholder={`Search ${activeTab}... (e.g. 443, IAM, /28)`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Filter reference items"
            />
            {searchQuery && (
              <button
                className="cheatsheet-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
              >
                
              </button>
            )}
          </div>
        </div>

        
        <div className="cheatsheet-table-container">
          {activeTab === "ports" && (
            <table className="cheatsheet-table">
              <thead>
                <tr>
                  <th>Port</th>
                  <th>Transport</th>
                  <th>Service</th>
                  <th>Description & Purpose</th>
                  <th>Relevant Certs</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPorts.map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong className="port-badge">{row.port}</strong>
                    </td>
                    <td><span className="proto-pill">{row.proto}</span></td>
                    <td><strong>{row.service}</strong></td>
                    <td className="desc-cell">{row.desc}</td>
                    <td><small className="cert-tag">{row.cert}</small></td>
                    <td>
                      <button
                        className="table-copy-btn"
                        onClick={() => handleCopy(row.port)}
                        title="Copy Port"
                      >
                        {copiedText === row.port ? "" : ""}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          
          {activeTab === "acronyms" && (
            <table className="cheatsheet-table">
              <thead>
                <tr>
                  <th>Acronym</th>
                  <th>Full Name</th>
                  <th>Ecosystem</th>
                  <th>Description & Architectural Purpose</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAcronyms.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong className="acronym-badge">{row.term}</strong></td>
                    <td><strong>{row.full}</strong></td>
                    <td><span className="proto-pill">{row.provider}</span></td>
                    <td className="desc-cell">{row.desc}</td>
                    <td>
                      <button
                        className="table-copy-btn"
                        onClick={() => handleCopy(`${row.term} - ${row.full}`)}
                        title="Copy term"
                      >
                        {copiedText === `${row.term} - ${row.full}` ? "" : ""}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          
          {activeTab === "cidr" && (
            <div>
              <div className="cidr-exam-note">
                <strong> AWS 5 Reserved IP Rule:</strong> In any AWS VPC subnet, 5 IP addresses are always reserved by AWS:
                <code>.0</code> (Network), <code>.1</code> (VPC Router), <code>.2</code> (VPC DNS), <code>.3</code> (Future reserve), and <code>.255</code> (Broadcast). Therefore, AWS Usable = Total - 5.
              </div>
              <table className="cheatsheet-table">
                <thead>
                  <tr>
                    <th>Prefix</th>
                    <th>Subnet Mask</th>
                    <th>Total IPs</th>
                    <th>AWS Usable (-5)</th>
                    <th>Standard Usable (-2)</th>
                    <th>Exam Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCidr.map((row, idx) => (
                    <tr key={idx}>
                      <td><strong className="port-badge">{row.prefix}</strong></td>
                      <td><code>{row.mask}</code></td>
                      <td><strong>{row.totalIPs}</strong></td>
                      <td><span className="aws-usable-badge">{row.usableAWS}</span></td>
                      <td>{row.standardUsable}</td>
                      <td className="desc-cell">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        
        <div className="modal-footer-bar">
          <small className="cheatsheet-tip">
             Quick Tip: Use this cheat sheet while doing practice quizzes to verify port numbers and subnet sizes.
          </small>
          <button className="primary-action-btn" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
