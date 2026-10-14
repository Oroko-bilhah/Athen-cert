
import CertificationTemplate from "../components/CertificationTemplate";

const topics = [
  {
    number: "01",
    title: "Networking Fundamentals, OSI & IPv4 Subnetting",
    description:
      "Learn the 7-layer OSI model, TCP/IP, binary subnet math, VLSM calculations, and RFC 1918 private ranges.",
    status: "completed",
    path: "/certifications/cisco/networking/lesson/1"
  },
  {
    number: "02",
    title: "IPv6 Architecture & Ethernet Switching",
    description:
      "Master IPv6 Global Unicast/Link-Local addresses, SLAAC, MAC address tables, and frame forwarding.",
    status: "current",
    path: "/certifications/cisco/networking/lesson/3"
  },
  {
    number: "03",
    title: "VLANs, Trunking, STP & EtherChannel",
    description:
      "Explore 802.1Q trunking, Inter-VLAN routing, Rapid STP (802.1w), BPDU Guard, and LACP EtherChannel.",
    status: "available",
    path: "/certifications/cisco/networking/lesson/5"
  },
  {
    number: "04",
    title: "IP Routing, Static Routes & OSPFv2",
    description:
      "Understand longest prefix match, Administrative Distance, and single-area OSPF link-state routing.",
    status: "available",
    path: "/certifications/cisco/networking/lesson/8"
  },
  {
    number: "05",
    title: "IP Services, NAT/PAT & Switch Security",
    description:
      "Cover DHCP Relay, DNS, NTP, Extended ACLs, PAT, Port Security, DHCP Snooping, and Dynamic ARP Inspection.",
    status: "available",
    path: "/certifications/cisco/networking/lesson/10"
  },
  {
    number: "06",
    title: "Wireless WLAN, IPsec VPNs & SDN Automation",
    description:
      "Master WLC architectures, WPA3, IPsec site-to-site tunnels, QoS, Cisco DNA Center, REST APIs, and Ansible.",
    status: "available",
    path: "/certifications/cisco/networking/lesson/14"
  }
];

const practiceCards = [
  {
    icon: "",
    title: "Packet & Protocol Quiz",
    description: "Test your understanding of packet flow, protocol behavior, and routing logic.",
    button: "Launch Quiz"
  },
  {
    icon: "",
    title: "CCNA Flashcards",
    description: "Review port numbers, administrative distances, and protocol headers.",
    button: "Flip Cards"
  },
  {
    icon: "⏱️",
    title: "CCNA 200-301 Mock Exam",
    description: "Practice scenario-based networking questions with a timed exam simulator.",
    button: "Start Mock Exam"
  },
  {
    icon: "",
    title: "Subnet Calculator & Lab",
    description: "Interactive VLSM subnet partitioner, network ID, and broadcast address exercises.",
    button: "Launch Lab"
  }
];

function CiscoNetworking() {
  return (
    <CertificationTemplate
      provider="cisco"
      title="Cisco Certified Network Associate"
      shortTitle="CCNA 200-301"
      description="Build a deep, practical understanding of networking essentials, enterprise routing & switching, IP services, and the diagnostics needed to operate resilient networks."
      icon=""
      heroColor="green"
      maxLessons={16}
      topics={topics}
      practiceCards={practiceCards}
      onStartLearning="/certifications/cisco/networking/lesson/1"
      examDetails={{
        code: "CCNA 200-301",
        duration: "120 minutes",
        questions: "100-120 questions",
        passingScore: "825 / 1000 (82.5%)",
        format: "Multiple choice, drag-and-drop, and performance-based items"
      }}
    />
  );
}

export default CiscoNetworking;
