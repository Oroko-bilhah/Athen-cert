export const ciscoLessons = [
  {
    id: 1,
    title: "Introduction to Networking & the OSI / TCP-IP Models",
    category: "Networking Fundamentals",
    duration: "9 min",
    intro:
      "Modern computer networking allows devices across the globe to communicate through standardized protocols. The OSI 7-Layer Model and the TCP/IP 4-Layer Suite form the conceptual foundation for all enterprise networking.",
    keyIdea:
      "The OSI model breaks network communication into 7 distinct layers (Physical, Data Link, Network, Transport, Session, Presentation, Application), while TCP/IP maps these to 4 practical layers.",
    sections: [
      {
        heading: "The OSI 7-Layer Reference Model",
        paragraphs: [
          "Layer 1 (Physical): Binary transmission over cables, optical fiber, and wireless radio signals (bits).",
          "Layer 2 (Data Link): Framing, physical MAC addressing, and switch forwarding (frames).",
          "Layer 3 (Network): Logical IP addressing and path determination across routers (packets).",
          "Layer 4 (Transport): End-to-end communication, reliability (TCP vs UDP), and port numbers (segments).",
          "Layers 5-7 (Session, Presentation, Application): Session management, data formatting/encryption, and user-facing protocols (HTTP, SSH, DNS)."
        ]
      },
      {
        heading: "Data Encapsulation and De-encapsulation",
        paragraphs: [
          "As data travels down the stack, each layer prepends a header containing control metadata: Data → Segment (L4 header) → Packet (L3 IP header) → Frame (L2 MAC header + trailer) → Bits (L1 encoding)."
        ]
      }
    ],
    example: {
      title: "PROTOCOL DATA UNITS (PDUs)",
      traditional: "Viewing network traffic as an indivisible stream of electrical impulses",
      cloud: "Layer 4 (Segment with Port 443) → Layer 3 (Packet with Source/Dest IP) → Layer 2 (Frame with Source/Dest MAC)"
    },
    concepts: [
      {
        number: "01",
        title: "Layer 2 vs Layer 3",
        description: "Switches forward frames using MAC addresses; Routers forward packets using IP addresses."
      },
      {
        number: "02",
        title: "TCP vs. UDP",
        description: "TCP is connection-oriented with guaranteed delivery; UDP is connectionless and low-latency."
      },
      {
        number: "03",
        title: "Encapsulation",
        description: "Wrapping upper-layer data with headers and trailers as it moves down the network stack."
      }
    ],
    quiz: {
      question: "At which layer of the OSI model does a standard network switch operate by inspecting destination MAC addresses?",
      answers: [
        { id: "A", text: "Layer 2 (Data Link Layer)", correct: true },
        { id: "B", text: "Layer 3 (Network Layer)", correct: false },
        { id: "C", text: "Layer 7 (Application Layer)", correct: false },
        { id: "D", text: "Layer 1 (Physical Layer)", correct: false }
      ]
    }
  },
  {
    id: 2,
    title: "IPv4 Addressing & Subnetting (VLSM)",
    category: "Networking Fundamentals",
    duration: "11 min",
    intro:
      "IPv4 uses 32-bit logical addresses divided into network and host portions. Subnetting and Variable Length Subnet Masking (VLSM) divide large address blocks into efficient subnets.",
    keyIdea:
      "A subnet mask defines where the network prefix ends and the host portion begins. Subnetting prevents IP address exhaustion and optimizes broadcast domains.",
    sections: [
      {
        heading: "IPv4 Address Classes and CIDR",
        paragraphs: [
          "IPv4 is written in dotted-decimal format (4 octets of 8 bits, e.g. `192.168.1.1`).",
          "CIDR Notation: `/24` represents `255.255.255.0` (24 network bits, 8 host bits). Usable hosts = `2^(host bits) - 2` (subtracting Network ID and Broadcast address).",
          "Private IP Ranges (RFC 1918): Class A `10.0.0.0/8`, Class B `172.16.0.0/12`, Class C `192.168.0.0/16`."
        ]
      },
      {
        heading: "VLSM Subnet Calculations",
        paragraphs: [
          "VLSM allows engineers to allocate subnets of differing sizes based on exact host requirements (e.g. `/26` for 60 users, `/30` for point-to-point router links).",
          "Magic Number Method: Subtract the interesting octet subnet mask value from 256 to find the block size."
        ]
      }
    ],
    example: {
      title: "CALCULATING USABLE HOSTS",
      traditional: "Assign an entire /24 network (254 hosts) to a 2-node point-to-point link, wasting 252 IP addresses",
      cloud: "Assign a /30 subnet (255.255.255.252) giving exactly 2 usable host IPs, wasting 0 addresses"
    },
    concepts: [
      {
        number: "01",
        title: "2^n - 2 Formula",
        description: "Calculates usable host addresses by subtracting network ID and broadcast address."
      },
      {
        number: "02",
        title: "RFC 1918 Private IPs",
        description: "Non-routable internal IP blocks used inside corporate LANs and cloud VPCs."
      },
      {
        number: "03",
        title: "VLSM Efficiency",
        description: "Allocates precisely sized subnet masks to avoid wasting valuable IP space."
      }
    ],
    quiz: {
      question: "How many usable host IP addresses are available on a subnet with a /28 prefix (255.255.255.240)?",
      answers: [
        { id: "A", text: "14 usable hosts (16 total minus Network ID and Broadcast)", correct: true },
        { id: "B", text: "28 usable hosts", correct: false },
        { id: "C", text: "30 usable hosts", correct: false },
        { id: "D", text: "6 usable hosts", correct: false }
      ]
    }
  },
  {
    id: 3,
    title: "IPv6 Addressing Architecture & SLAAC",
    category: "Networking Fundamentals",
    duration: "10 min",
    intro:
      "IPv6 provides a massive 128-bit address space (3.4 × 10^38 addresses) to solve IPv4 exhaustion, featuring simplified headers and built-in stateless auto-configuration.",
    keyIdea:
      "IPv6 addresses are written in 8 groups of 4 hexadecimal digits separated by colons; leading zeros can be omitted and consecutive zero blocks compressed with `::` once.",
    sections: [
      {
        heading: "IPv6 Address Types",
        paragraphs: [
          "Global Unicast Address (GUA): Publicly routable on the internet (starts with `2000::/3`). Equivalent to public IPv4.",
          "Link-Local Address (LLA): Required on every IPv6 interface for local segment communication (starts with `fe80::/10`). Does not route beyond the local router.",
          "Unique Local Address (ULA): Private enterprise addressing (starts with `fc00::/7` or `fd00::/8`).",
          "Multicast (`ff00::/8`) and Loopback (`::1/128`). Note: IPv6 eliminates broadcast addresses completely!"
        ]
      },
      {
        heading: "SLAAC & Neighbor Discovery Protocol (NDP)",
        paragraphs: [
          "Stateless Address Autoconfiguration (SLAAC): Hosts configure their own IPv6 address using Router Advertisement (RA) ICMPv6 messages without needing a DHCP server.",
          "NDP replaces ARP: Uses Neighbor Solicitation (NS) and Neighbor Advertisement (NA) to resolve MAC addresses."
        ]
      }
    ],
    example: {
      title: "IPV6 COMPRESSION EXAMPLE",
      traditional: "`2001:0db8:0000:0000:0000:ff00:0042:8329` (uncompressed 39 characters)",
      cloud: "`2001:db8::ff00:42:8329` (compressed using leading zero rule and double colon compression)"
    },
    concepts: [
      {
        number: "01",
        title: "128-Bit Hexadecimal",
        description: "Massive address space eliminating the need for NAT in modern enterprise deployments."
      },
      {
        number: "02",
        title: "Link-Local (fe80::/10)",
        description: "Auto-generated interface address used for next-hop routing and neighbor discovery."
      },
      {
        number: "03",
        title: "No Broadcasts",
        description: "Replaces noisy broadcast storms with targeted multicast groups."
      }
    ],
    quiz: {
      question: "Which IPv6 address type is automatically configured on every active interface and starts with the prefix fe80::/10?",
      answers: [
        { id: "A", text: "Link-Local Address (LLA)", correct: true },
        { id: "B", text: "Global Unicast Address (GUA)", correct: false },
        { id: "C", text: "Multicast Address", correct: false },
        { id: "D", text: "Loopback Address", correct: false }
      ]
    }
  },
  {
    id: 4,
    title: "Ethernet Switching & MAC Address Tables",
    category: "Network Access",
    duration: "8 min",
    intro:
      "Layer 2 Ethernet switches forward frames within a Local Area Network (LAN) by building and maintaining a dynamically learned MAC address table (CAM table).",
    keyIdea:
      "Switches learn source MAC addresses from incoming frames and selectively forward frames to destination ports to eliminate collision domains.",
    sections: [
      {
        heading: "Switch Frame Forwarding Logic",
        paragraphs: [
          "1. Learn: Inspect incoming frame's Source MAC. Record `[MAC, Port, VLAN]` in the MAC table.",
          "2. Lookup: Inspect Destination MAC in the table.",
          "3. Forward / Filter: If known unicast, forward out specific destination port only. If unknown unicast, broadcast, or multicast, flood frame out all ports except the receiving port."
        ]
      }
    ],
    example: {
      title: "SWITCH VS HUB",
      traditional: "Hubs repeat electrical signals out all ports, causing collisions whenever two hosts speak simultaneously",
      cloud: "Switches create dedicated point-to-point micro-segments on every port, providing full-duplex collision-free transmission"
    },
    concepts: [
      {
        number: "01",
        title: "MAC Learning",
        description: "Dynamic population of CAM table by reading source MAC addresses on arrival."
      },
      {
        number: "02",
        title: "Unknown Unicast Flooding",
        description: "Frames with unknown destinations are flooded to all ports within the VLAN."
      },
      {
        number: "03",
        title: "Aging Time",
        description: "MAC table entries expire (typically after 300 seconds of inactivity) to keep tables clean."
      }
    ],
    quiz: {
      question: "What action does a switch take when it receives a frame with a destination MAC address that is not in its MAC address table?",
      answers: [
        { id: "A", text: "It floods the frame out all ports in the VLAN except the port on which it was received", correct: true },
        { id: "B", text: "It immediately drops the frame silently", correct: false },
        { id: "C", text: "It reboots the switch operating system", correct: false },
        { id: "D", text: "It sends an error message to the default gateway", correct: false }
      ]
    }
  },
  {
    id: 5,
    title: "VLANs, 802.1Q Trunking & Inter-VLAN Routing",
    category: "Network Access",
    duration: "10 min",
    intro:
      "Virtual Local Area Networks (VLANs) logically partition a single physical switch into multiple isolated broadcast domains, improving security, organization, and performance.",
    keyIdea:
      "Trunk links carry traffic for multiple VLANs using IEEE 802.1Q tags; routers or Layer 3 switches route traffic between different VLANs.",
    sections: [
      {
        heading: "Access Ports vs. Trunk Ports",
        paragraphs: [
          "Access Port: Belongs to a single VLAN and connects to end devices (PCs, printers). Frames are untagged.",
          "Trunk Port: Connects switch-to-switch or switch-to-router. Uses IEEE 802.1Q to insert a 4-byte tag (VLAN ID 1-4094) into the Ethernet header.",
          "Native VLAN: 802.1Q specifies one VLAN (default VLAN 1) whose frames traverse trunk links untagged."
        ]
      },
      {
        heading: "Inter-VLAN Routing Methods",
        paragraphs: [
          "Router-on-a-Stick (ROAS): A single router physical interface divided into logical subinterfaces (e.g. `Gig0/0.10`, `Gig0/0.20`), each acting as the default gateway for its VLAN.",
          "Layer 3 Multilayer Switch: Uses Switch Virtual Interfaces (SVIs, e.g. `interface vlan 10`) for wirespeed hardware-based routing."
        ]
      }
    ],
    example: {
      title: "INTER-VLAN ROUTING",
      traditional: "Physically run separate switches and cables for Finance, HR, and Engineering departments",
      cloud: "Configure VLAN 10 (Finance) and VLAN 20 (HR) on shared switches with 802.1Q trunking to an SVI gateway"
    },
    concepts: [
      {
        number: "01",
        title: "802.1Q Tagging",
        description: "Inserts a 12-bit VLAN ID tag into the Ethernet frame header across trunk connections."
      },
      {
        number: "02",
        title: "Router-on-a-Stick",
        description: "Uses router subinterfaces with `encapsulation dot1q <vlan-id>` for Inter-VLAN routing."
      },
      {
        number: "03",
        title: "Switch Virtual Interface (SVI)",
        description: "Logical Layer 3 interface on a multilayer switch providing default gateway functionality."
      }
    ],
    quiz: {
      question: "Which IEEE standard defines the VLAN tagging method used to carry multi-VLAN traffic across switch trunk links?",
      answers: [
        { id: "A", text: "IEEE 802.1Q", correct: true },
        { id: "B", text: "IEEE 802.11ax", correct: false },
        { id: "C", text: "IEEE 802.3u", correct: false },
        { id: "D", text: "RFC 1918", correct: false }
      ]
    }
  },
  {
    id: 6,
    title: "Spanning Tree Protocol (STP, RSTP) & Loop Prevention",
    category: "Network Access",
    duration: "10 min",
    intro:
      "Redundant switch links prevent network outages from cable failures, but without protection they create catastrophic Layer 2 broadcast storms. Spanning Tree Protocol eliminates loops while maintaining redundancy.",
    keyIdea:
      "STP/RSTP elects a Root Bridge and places redundant backup ports into a Blocking/Discarding state, unblocking them immediately if a primary link fails.",
    sections: [
      {
        heading: "The Root Bridge Election & Port Roles",
        paragraphs: [
          "Bridge Protocol Data Units (BPDUs): Switches exchange BPDUs containing Bridge ID (Bridge Priority + MAC address).",
          "Root Bridge Election: The switch with the LOWEST Bridge ID becomes the Root Bridge of the spanning tree.",
          "Root Port (RP): The single port on a non-root switch with the lowest cost path to the Root Bridge.",
          "Designated Port (DP): The port forwarding traffic onto a network segment (all Root Bridge ports are DPs).",
          "Blocking / Alternate Port: Redundant ports blocked to break the Layer 2 loop."
        ]
      },
      {
        heading: "Rapid STP (802.1w) & PortFast",
        paragraphs: [
          "RSTP (802.1w) converges in under 1 second using proposal/agreement handshakes.",
          "PortFast: Configured on edge access ports connecting to PCs to bypass listening/learning states and transition immediately to forwarding.",
          "BPDU Guard: Shuts down (`err-disable`) a PortFast port if an unauthorized switch sends BPDUs into it."
        ]
      }
    ],
    example: {
      title: "BROADCAST STORM PREVENTION",
      traditional: "Plug 3 switches together in a triangle; endless looping frames consume 100% bandwidth in seconds",
      cloud: "STP elects Switch 1 as Root Bridge, sets port on Switch 3 to Blocking, breaking loop while providing failover"
    },
    concepts: [
      {
        number: "01",
        title: "Lowest Bridge ID",
        description: "Determines which switch wins the Root Bridge election."
      },
      {
        number: "02",
        title: "PortFast & BPDU Guard",
        description: "Enables instant connection for end hosts while protecting against rogue switches."
      },
      {
        number: "03",
        title: "RSTP (802.1w)",
        description: "High-speed spanning tree convergence reducing failover time from 50s down to sub-second."
      }
    ],
    quiz: {
      question: "Which Cisco switch feature transitions an edge port immediately to the forwarding state while bypassing STP listening and learning delays?",
      answers: [
        { id: "A", text: "PortFast", correct: true },
        { id: "B", text: "VTP Pruning", correct: false },
        { id: "C", text: "Dynamic Trunking", correct: false },
        { id: "D", text: "DHCP Snooping", correct: false }
      ]
    }
  },
  {
    id: 7,
    title: "EtherChannel (LACP) & First Hop Redundancy (HSRP)",
    category: "Network Access & Redundancy",
    duration: "9 min",
    intro:
      "Enterprise networks combine multiple physical links into a single logical channel with EtherChannel and provide default gateway failover with HSRP.",
    keyIdea:
      "EtherChannel (802.3ad LACP) bundles up to 8 physical links for higher bandwidth and redundancy; HSRP shares a virtual IP between dual routers for gateway failover.",
    sections: [
      {
        heading: "EtherChannel Link Aggregation",
        paragraphs: [
          "Combines 2 to 8 parallel physical Ethernet links into a single logical Port-Channel interface.",
          "Prevents STP from blocking redundant parallel cables and provides aggregated bandwidth with load balancing.",
          "Protocols: LACP (IEEE 802.3ad open standard - active/passive modes) and PAgP (Cisco proprietary - desirable/auto modes)."
        ]
      },
      {
        heading: "First Hop Redundancy Protocols (FHRP / HSRP)",
        paragraphs: [
          "Host endpoints can only configure a single default gateway IP address. If that physical router dies, hosts lose connectivity.",
          "HSRP (Hot Standby Router Protocol): Two routers share a Virtual IP and Virtual MAC. One router is Active; the other is Standby. If Active fails, Standby takes over the virtual IP seamlessly in seconds."
        ]
      }
    ],
    example: {
      title: "GATEWAY FAILOVER",
      traditional: "When Core Router 1 fails, reconfigure default gateway on 200 client PCs manually",
      cloud: "HSRP Active router fails → Standby router takes over virtual IP 192.168.1.1 immediately with 0 client reconfiguration"
    },
    concepts: [
      {
        number: "01",
        title: "LACP (802.3ad)",
        description: "Standards-based link aggregation protocol for bundling switch uplinks."
      },
      {
        number: "02",
        title: "HSRP Active/Standby",
        description: "Cisco gateway redundancy protocol sharing a virtual IP address and MAC address."
      },
      {
        number: "03",
        title: "Load Distribution",
        description: "Distributes frames across EtherChannel member links using IP and MAC hash algorithms."
      }
    ],
    quiz: {
      question: "What is the open-standard link aggregation protocol used to bundle multiple physical Ethernet interfaces into a single EtherChannel?",
      answers: [
        { id: "A", text: "Link Aggregation Control Protocol (LACP / 802.3ad)", correct: true },
        { id: "B", text: "Port Aggregation Protocol (PAgP)", correct: false },
        { id: "C", text: "High-Level Data Link Control (HDLC)", correct: false },
        { id: "D", text: "Spanning Tree Protocol (STP)", correct: false }
      ]
    }
  },
  {
    id: 8,
    title: "IP Routing Fundamentals & Static Routes",
    category: "IP Connectivity",
    duration: "10 min",
    intro:
      "Routers operate at Layer 3 to forward packets across networks by consulting their Routing Table and determining the best path based on Longest Prefix Match.",
    keyIdea:
      "When multiple routes to a destination exist, the router selects the one with the longest prefix match (most specific mask), breaking ties with Administrative Distance.",
    sections: [
      {
        heading: "The Routing Table & Longest Prefix Match",
        paragraphs: [
          "Directly Connected (`C`) and Local (`L`): Routes created automatically when interfaces are configured with IP and up/up.",
          "Static Routes (`S`): Manually defined by administrator (`ip route <dest-network> <mask> <next-hop-ip>`).",
          "Default Route (`S* 0.0.0.0/0`): 'Gateway of Last Resort' matching all destination IPs not explicitly listed in the routing table.",
          "Administrative Distance (AD): Trustworthiness ranking (Connected=0, Static=1, eBGP=20, EIGRP=90, OSPF=110, RIP=120). Lower is preferred."
        ]
      },
      {
        heading: "Floating Static Routes",
        paragraphs: [
          "A backup static route configured with a higher Administrative Distance (e.g. AD 120) than the primary routing protocol. It only enters the routing table if the primary route fails."
        ]
      }
    ],
    example: {
      title: "LONGEST PREFIX MATCH",
      traditional: "Router has routes for `10.0.0.0/8` and `10.1.2.0/24`. A packet arrives for `10.1.2.5`",
      cloud: "The router forwards using `10.1.2.0/24` because `/24` is a longer, more specific prefix match than `/8`"
    },
    concepts: [
      {
        number: "01",
        title: "Longest Prefix Match",
        description: "The golden rule of routing: the most specific subnet mask always wins."
      },
      {
        number: "02",
        title: "Administrative Distance",
        description: "Defines route trustworthiness when learned from different routing protocols."
      },
      {
        number: "03",
        title: "Default Route (0.0.0.0/0)",
        description: "Catches all unknown destination internet traffic and forwards to the upstream ISP."
      }
    ],
    quiz: {
      question: "What is the default Administrative Distance (AD) of a manually configured static route on a Cisco router?",
      answers: [
        { id: "A", text: "1", correct: true },
        { id: "B", text: "90", correct: false },
        { id: "C", text: "110", correct: false },
        { id: "D", text: "120", correct: false }
      ]
    }
  },
  {
    id: 9,
    title: "Dynamic Routing with OSPFv2 (Single-Area)",
    category: "IP Connectivity",
    duration: "10 min",
    intro:
      "Open Shortest Path First (OSPF) is the industry standard Link-State dynamic routing protocol, using Dijkstra's SPF algorithm to calculate loop-free shortest paths.",
    keyIdea:
      "OSPF routers form neighbor adjacencies using Hello packets and build an identical Link-State Database (LSDB), calculating route cost based on bandwidth.",
    sections: [
      {
        heading: "OSPF Concepts & Neighbor States",
        paragraphs: [
          "Link-State Advertisements (LSAs): Routers flood information about their links and states to synchronize their LSDB.",
          "Single-Area OSPF: All routers reside in Backbone Area 0 (`area 0`).",
          "Hello Packets: Exchanged every 10 seconds to discover neighbors and maintain adjacencies. Must match: Area ID, Subnet Mask, Hello/Dead intervals, and Authentication.",
          "Neighbor States: Down → Init → 2-Way (DR/BDR election) → ExStart → Exchange → Loading → Full (fully converged)."
        ]
      },
      {
        heading: "DR / BDR Election and Metric Cost",
        paragraphs: [
          "On multi-access broadcast networks, routers elect a Designated Router (DR) and Backup Designated Router (BDR) using highest OSPF Priority (default 1) or highest Router ID.",
          "Cost Formula: `Cost = Reference Bandwidth (default 100 Mbps) / Interface Bandwidth`."
        ]
      }
    ],
    example: {
      title: "DYNAMIC ADAPTATION",
      traditional: "A primary fiber cable is severed; an engineer must manually rewrite static routes across 15 routers",
      cloud: "OSPF detects dead neighbor in 40 seconds, recalculates shortest path through backup link, and updates routing tables automatically"
    },
    concepts: [
      {
        number: "01",
        title: "Area 0 (Backbone)",
        description: "The core transit area required for all OSPF deployments."
      },
      {
        number: "02",
        title: "Full State",
        description: "The final converged neighbor adjacency state with synchronized LSDBs."
      },
      {
        number: "03",
        title: "Bandwidth-Based Cost",
        description: "OSPF chooses paths with higher bandwidth and lower cumulative cost."
      }
    ],
    quiz: {
      question: "Which criteria must match between two Cisco routers before an OSPF neighbor adjacency can reach the Full state?",
      answers: [
        { id: "A", text: "Area ID, Subnet Mask, Hello and Dead intervals, and Authentication", correct: true },
        { id: "B", text: "Hostnames and serial numbers", correct: false },
        { id: "C", text: "Physical chassis color", correct: false },
        { id: "D", text: "Number of switch ports", correct: false }
      ]
    }
  },
  {
    id: 10,
    title: "Network Services: DHCP, DNS & NTP",
    category: "IP Services",
    duration: "8 min",
    intro:
      "Core infrastructure IP services automate client address assignment (DHCP), resolve hostnames (DNS), and synchronize device clocks for security logging (NTP).",
    keyIdea:
      "DHCP uses the 4-step DORA process; DHCP Relay (`ip helper-address`) forwards client broadcasts across routers to centralized DHCP servers.",
    sections: [
      {
        heading: "DHCP & The DORA Process",
        paragraphs: [
          "1. Discover (Client broadcast) → 2. Offer (Server unicast/broadcast) → 3. Request (Client broadcast) → 4. Acknowledge (Server unicast/broadcast). Uses UDP ports 67 (server) and 68 (client).",
          "DHCP Relay Agent: Routers drop client DHCP Discover broadcasts by default. The command `ip helper-address <server-ip>` converts broadcast to unicast forwarding."
        ]
      },
      {
        heading: "DNS & NTP Services",
        paragraphs: [
          "DNS (UDP/TCP 53): Translates human-friendly names (`cisco.com`) to IP addresses (`72.163.4.161`).",
          "NTP (UDP 123): Synchronizes router and switch system clocks against Stratum time servers to ensure accurate Syslog security audit timestamps."
        ]
      }
    ],
    example: {
      title: "DHCP RELAY EXAMPLE",
      traditional: "Place a physical DHCP server appliance in every single branch office subnet",
      cloud: "Configure `ip helper-address 10.0.0.50` on the branch router interface to route DHCP requests to centralized datacenter servers"
    },
    concepts: [
      {
        number: "01",
        title: "DORA Exchange",
        description: "Discover, Offer, Request, Acknowledge sequence for dynamic IP leases."
      },
      {
        number: "02",
        title: "ip helper-address",
        description: "Cisco router command that relays Layer 2 UDP broadcast requests to unicast servers."
      },
      {
        number: "03",
        title: "NTP Synchronization",
        description: "Guarantees accurate timestamps across all network devices for security event correlation."
      }
    ],
    quiz: {
      question: "Which Cisco IOS interface command is required on a router to forward client DHCP Discover broadcasts to a centralized DHCP server on another subnet?",
      answers: [
        { id: "A", text: "ip helper-address <server-ip>", correct: true },
        { id: "B", text: "switchport mode access", correct: false },
        { id: "C", text: "spanning-tree portfast", correct: false },
        { id: "D", text: "ip route 0.0.0.0 0.0.0.0", correct: false }
      ]
    }
  },
  {
    id: 11,
    title: "Network Security & Access Control Lists (ACLs)",
    category: "Security Fundamentals",
    duration: "9 min",
    intro:
      "Access Control Lists (ACLs) are sequential filters of permit and deny statements that inspect packet headers to enforce network security boundaries.",
    keyIdea:
      "Standard ACLs filter based only on Source IP; Extended ACLs filter on Source IP, Destination IP, Protocol, and Port Numbers.",
    sections: [
      {
        heading: "Standard vs Extended ACLs",
        paragraphs: [
          "Standard ACLs (Numbered 1-99 & 1300-1999): Inspect ONLY source IP address. Rule of thumb: Place Standard ACLs as close to the DESTINATION as possible.",
          "Extended ACLs (Numbered 100-199 & 2000-2699): Inspect Source IP, Destination IP, Protocol (TCP/UDP/ICMP), and Port (eq 80, eq 443, eq 22). Place Extended ACLs as close to the SOURCE as possible."
        ]
      },
      {
        heading: "The Implicit Deny Rule",
        paragraphs: [
          "Every ACL has an unwritten, invisible `deny any` statement at the very end. An ACL that contains only `deny` statements will drop all traffic. You must include at least one `permit` statement."
        ]
      }
    ],
    example: {
      title: "BLOCKING UNSECURE TELNET",
      traditional: "Allow all traffic between subnets without firewall filtering",
      cloud: "Apply Extended ACL inbound on interface: `access-list 101 deny tcp any host 10.0.0.5 eq 23` followed by `access-list 101 permit ip any any`"
    },
    concepts: [
      {
        number: "01",
        title: "Sequential Processing",
        description: "ACL rules are evaluated top-down; processing stops immediately on first matching statement."
      },
      {
        number: "02",
        title: "Implicit Deny All",
        description: "Packets not matching any permit rule hit the invisible default deny at the bottom."
      },
      {
        number: "03",
        title: "Wildcard Masks",
        description: "Inverse masks where 0 means 'must match' and 1 means 'ignore bit' (e.g., `0.0.0.255`)."
      }
    ],
    quiz: {
      question: "Where is the best practice location to place an Extended Access Control List on a network?",
      answers: [
        { id: "A", text: "As close to the traffic SOURCE as possible to save bandwidth", correct: true },
        { id: "B", text: "As close to the destination as possible", correct: false },
        { id: "C", text: "On the physical access point antenna", correct: false },
        { id: "D", text: "On the client web browser only", correct: false }
      ]
    }
  },
  {
    id: 12,
    title: "NAT & PAT (Network Address Translation)",
    category: "IP Services",
    duration: "8 min",
    intro:
      "Network Address Translation (NAT) allows private RFC 1918 internal networks to share public IPv4 addresses when communicating on the global internet.",
    keyIdea:
      "Port Address Translation (PAT / NAT Overload) maps thousands of internal private IP addresses to a single public IP address using unique source port numbers.",
    sections: [
      {
        heading: "Types of NAT",
        paragraphs: [
          "Static NAT: One-to-one mapping between private IP and public IP (typically used for internal web/mail servers).",
          "Dynamic NAT: Many-to-many mapping from a pool of public IP addresses (first-come, first-served).",
          "PAT (NAT Overload): Many-to-one mapping using source port numbers to track individual conversation sessions (used in virtually all home and enterprise internet gateways)."
        ]
      },
      {
        heading: "NAT Terminology",
        paragraphs: [
          "Inside Local: Private IP address of the internal host.",
          "Inside Global: Public IP address assigned to internal host as seen on the public internet.",
          "Outside Local & Outside Global: The IP address of the external remote server."
        ]
      }
    ],
    example: {
      title: "PAT SESSION TRACKING",
      traditional: "Require 500 expensive public IPv4 addresses for 500 office employees to browse the web",
      cloud: "PAT translates all 500 employees to 1 public IP (203.0.113.1), tracking connections using source ports (e.g. :50101, :50102)"
    },
    concepts: [
      {
        number: "01",
        title: "PAT (NAT Overload)",
        description: "Uses Layer 4 source ports to map thousands of private IPs to one public IP."
      },
      {
        number: "02",
        title: "Inside Local vs Global",
        description: "Inside Local is private LAN IP; Inside Global is public WAN-facing IP."
      },
      {
        number: "03",
        title: "IPv4 Preservation",
        description: "The primary technology that extended IPv4 lifespan for decades."
      }
    ],
    quiz: {
      question: "Which form of NAT allows thousands of internal private IP devices to share a single public IP address using unique Layer 4 port numbers?",
      answers: [
        { id: "A", text: "Port Address Translation (PAT / NAT Overload)", correct: true },
        { id: "B", text: "Static 1-to-1 NAT", correct: false },
        { id: "C", text: "Dynamic Non-Overloaded NAT", correct: false },
        { id: "D", text: "ARP Proxy", correct: false }
      ]
    }
  },
  {
    id: 13,
    title: "Switch Security: Port Security, DHCP Snooping & DAI",
    category: "Security Fundamentals",
    duration: "9 min",
    intro:
      "Enterprise Layer 2 networks must be hardened against physical tampering, rogue DHCP servers, and ARP poisoning attacks.",
    keyIdea:
      "Port Security restricts MAC addresses on switch ports; DHCP Snooping blocks rogue DHCP servers; Dynamic ARP Inspection (DAI) prevents man-in-the-middle ARP spoofing.",
    sections: [
      {
        heading: "Layer 2 Attack Mitigations",
        paragraphs: [
          "Port Security: Limits the number of valid MAC addresses permitted on an access port. Sticky MAC learning saves dynamically learned MACs to running-config. Violation modes: `protect` (drop), `restrict` (drop + log), `shutdown` (err-disable port).",
          "DHCP Snooping: Designates switch ports as 'Trusted' (uplink to legitimate DHCP server) or 'Untrusted' (client ports). Drops unauthorized DHCP server replies (DHCPOFFER) on untrusted ports.",
          "Dynamic ARP Inspection (DAI): Validates ARP packets against the DHCP Snooping Binding Table to prevent ARP Cache Poisoning."
        ]
      }
    ],
    example: {
      title: "ROGUE DHCP ATTACK PREVENTION",
      traditional: "An attacker plugs a rogue Wi-Fi router into an office wall jack, handing out malicious default gateways to coworkers",
      cloud: "DHCP Snooping blocks rogue DHCPOFFER packets on untrusted access ports and disables the attacker's port immediately"
    },
    concepts: [
      {
        number: "01",
        title: "Port Security Violation",
        description: "Shutdown mode puts interface into err-disable upon unauthorized MAC detection."
      },
      {
        number: "02",
        title: "DHCP Snooping",
        description: "Builds a binding database of IP-to-MAC mappings and blocks rogue DHCP servers."
      },
      {
        number: "03",
        title: "Dynamic ARP Inspection",
        description: "Inspects ARP replies against the snooping database to prevent MITM attacks."
      }
    ],
    quiz: {
      question: "Which switch security feature prevents an unauthorized rogue DHCP server from issuing false IP addresses to clients on access ports?",
      answers: [
        { id: "A", text: "DHCP Snooping", correct: true },
        { id: "B", text: "PortFast", correct: false },
        { id: "C", text: "VLAN Trunking", correct: false },
        { id: "D", text: "OSPF Passive Interface", correct: false }
      ]
    }
  },
  {
    id: 14,
    title: "Wireless LAN (WLAN) Architectures & WPA3",
    category: "Network Access",
    duration: "9 min",
    intro:
      "Enterprise wireless networks provide secure, high-speed mobile connectivity using centralized Wireless LAN Controllers (WLC) and modern 802.11 standards.",
    keyIdea:
      "Lightweight Access Points (LAP) handle real-time RF frames while Wireless LAN Controllers (WLC) manage encryption, authentication, and roaming via CAPWAP tunnels.",
    sections: [
      {
        heading: "Autonomous APs vs. Split-MAC Architecture",
        paragraphs: [
          "Autonomous (Standalone) APs: Each AP manages its own configuration, RF channels, and security settings independently (difficult to scale).",
          "Split-MAC Architecture: Uses Lightweight Access Points (LAPs) communicating with a central Wireless LAN Controller (WLC) over CAPWAP (Control and Provisioning of Wireless Access Points) tunnels.",
          "CAPWAP Control (UDP 5246) and CAPWAP Data (UDP 5247) tunnels."
        ]
      },
      {
        heading: "Wireless Security: WPA2 vs. WPA3",
        paragraphs: [
          "WPA2-Personal (Pre-Shared Key PSK) is vulnerable to offline dictionary password cracking.",
          "WPA3-Personal: Uses Simultaneous Authentication of Equals (SAE) to provide forward secrecy and prevent offline dictionary attacks.",
          "WPA2/WPA3-Enterprise: Uses 802.1X authentication with a centralized RADIUS server (Cisco ISE) for individual employee credentials."
        ]
      }
    ],
    example: {
      title: "CAMPUS ROAMING",
      traditional: "A user walks down a hallway and gets disconnected because each AP requires a new manual Wi-Fi login",
      cloud: "Centralized WLC manages seamless Layer 2 roaming as client moves between lightweight APs without dropped VoIP calls"
    },
    concepts: [
      {
        number: "01",
        title: "Split-MAC & CAPWAP",
        description: "Centralizes wireless management on the WLC while LAPs handle physical radio signals."
      },
      {
        number: "02",
        title: "WPA3 Simultaneous Auth (SAE)",
        description: "Eliminates offline dictionary brute force attacks on wireless passwords."
      },
      {
        number: "03",
        title: "802.1X Enterprise",
        description: "Individual user authentication against a backend RADIUS/TACACS+ identity server."
      }
    ],
    quiz: {
      question: "Which protocol is used by Lightweight Access Points (LAPs) to communicate with and receive configurations from a central Wireless LAN Controller (WLC)?",
      answers: [
        { id: "A", text: "CAPWAP (Control and Provisioning of Wireless Access Points)", correct: true },
        { id: "B", text: "Telnet", correct: false },
        { id: "C", text: "HTTP", correct: false },
        { id: "D", text: "BGP", correct: false }
      ]
    }
  },
  {
    id: 15,
    title: "WAN Technologies, IPsec VPNs & Quality of Service (QoS)",
    category: "IP Connectivity",
    duration: "10 min",
    intro:
      "Enterprise Wide Area Networks (WANs) securely connect branch offices across the internet using IPsec Site-to-Site VPNs and prioritize voice/video traffic using QoS.",
    keyIdea:
      "IPsec encrypts and authenticates packets over public internet; Quality of Service (QoS) prevents packet loss and jitter on time-sensitive voice and video streams.",
    sections: [
      {
        heading: "IPsec Site-to-Site VPNs",
        paragraphs: [
          "Confidentiality (Encryption): AES-256 or 3DES.",
          "Integrity (Hashing): SHA-256 or MD5 to ensure data was not altered in transit.",
          "Authentication: Pre-Shared Key (PSK) or RSA digital certificates.",
          "Anti-Replay Protection: Uses sequence numbers to prevent captured packets from being re-transmitted.",
          "Encapsulating Security Payload (ESP - IP Protocol 50) provides encryption and authentication."
        ]
      },
      {
        heading: "Quality of Service (QoS) Mechanisms",
        paragraphs: [
          "Classification & Marking: Identify traffic types at the ingress switch port using Differentiated Services Code Point (DSCP) Layer 3 bits (e.g. EF / Expedited Forwarding for VoIP Voice).",
          "Queuing: Priority Queuing (PQ) ensures voice packets skip ahead of large bulk file downloads during link congestion."
        ]
      }
    ],
    example: {
      title: "VOIP CALL QUALITY DURING CONGESTION",
      traditional: "When someone downloads a 20 GB file, executive VoIP calls break up with severe stutter and jitter",
      cloud: "QoS marks voice packets with DSCP EF (Expedited Forwarding); router prioritizes voice queue, giving crystal clear calls"
    },
    concepts: [
      {
        number: "01",
        title: "IPsec ESP",
        description: "Provides both encryption and data integrity across untrusted public WAN links."
      },
      {
        number: "02",
        title: "QoS Classification & DSCP",
        description: "Marks packets at ingress with priority values to dictate queuing behavior."
      },
      {
        number: "03",
        title: "Expedited Forwarding (EF)",
        description: "The highest priority DSCP marking reserved exclusively for real-time voice traffic."
      }
    ],
    quiz: {
      question: "Which QoS DSCP marking is the industry best-practice standard for real-time interactive VoIP voice traffic?",
      answers: [
        { id: "A", text: "Expedited Forwarding (EF / DSCP 46)", correct: true },
        { id: "B", text: "Best Effort (BE / DSCP 0)", correct: false },
        { id: "C", text: "Class Selector 1 (CS1)", correct: false },
        { id: "D", text: "Discard Eligible", correct: false }
      ]
    }
  },
  {
    id: 16,
    title: "Network Automation, SDN & Cisco DNA Center",
    category: "Automation & Programmability",
    duration: "10 min",
    intro:
      "Modern network engineering combines traditional CLI management with software-defined networking (SDN), controller architectures, REST APIs, and automated configuration management.",
    keyIdea:
      "Software-Defined Networking separates the Control Plane from the Data Plane, enabling centralized programming via Cisco DNA Center and Python REST APIs.",
    sections: [
      {
        heading: "Traditional vs. Controller-Based Networking",
        paragraphs: [
          "Traditional Networking: Distributed control plane where every router/switch independently makes routing and forwarding decisions configured via manual CLI.",
          "SDN Architecture: Centralized controller (Cisco DNA Center, SD-WAN vManage) manages the Control Plane; network devices execute the Data Plane (forwarding bits).",
          "Southbound APIs (OpenFlow, NETCONF, RESTCONF): Connects controller to physical switches/routers.",
          "Northbound APIs (REST / JSON): Connects controller to business applications, orchestrators, and automated Python scripts."
        ]
      },
      {
        heading: "Data Formats & Configuration Management",
        paragraphs: [
          "Data Formats: JSON (key-value pairs, objects in `{}`), YAML (human-readable indentation), XML (tags `<>`).",
          "Configuration Management Tools: Ansible (agentless over SSH), Puppet (agent-based, Ruby), Chef (agent-based)."
        ]
      }
    ],
    example: {
      title: "UPDATING 1,000 SWITCHES",
      traditional: "Engineers SSH into 1,000 switches individually to update NTP server IP addresses (takes weeks)",
      cloud: "Run an Ansible playbook that pushes the NTP configuration change across all 1,000 switches via REST APIs in 2 minutes"
    },
    concepts: [
      {
        number: "01",
        title: "Separation of Planes",
        description: "Control plane centralized in software controller; Data plane distributed on hardware switches."
      },
      {
        number: "02",
        title: "REST APIs & JSON",
        description: "Programmatic HTTP-based management of network infrastructure using structured data."
      },
      {
        number: "03",
        title: "Ansible Automation",
        description: "Agentless configuration automation using declarative YAML playbooks over SSH."
      }
    ],
    quiz: {
      question: "In Software-Defined Networking (SDN), what is the primary role of Northbound APIs?",
      answers: [
        { id: "A", text: "Connecting the centralized SDN controller to upper-layer business applications and automation scripts", correct: true },
        { id: "B", text: "Connecting switches to physical Ethernet cables", correct: false },
        { id: "C", text: "Powering on backup diesel generators", correct: false },
        { id: "D", text: "Formatting hard drives on routers", correct: false }
      ]
    }
  }
];
