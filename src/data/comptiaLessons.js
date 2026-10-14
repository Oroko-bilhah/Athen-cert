export const comptiaLessons = [
  {
    id: 1,
    title: "IT Foundations, Notational Systems & Architecture",
    category: "IT Foundations",
    duration: "8 min",
    intro:
      "Information Technology relies on binary logic, computational architectures, and notational systems to store, process, and transmit digital information.",
    keyIdea:
      "Computers process binary digits (0 and 1); 8 bits form 1 byte. Hexadecimal (base 16) provides human-friendly representation for memory addresses and MAC addresses.",
    sections: [
      {
        heading: "Notational Systems and Data Units",
        paragraphs: [
          "Decimal (Base 10): Digits 0-9 used in daily human arithmetic.",
          "Binary (Base 2): Digits 0 and 1 representing electrical switch states (on/off).",
          "Hexadecimal (Base 16): Digits 0-9 and letters A-F (where A=10, F=15). Used to compress 8-bit binary bytes into 2 hex digits (e.g. binary `11111111` = hex `FF`).",
          "Units of Measure: 1 Byte = 8 bits. 1 Kilobyte (KB) = 1,000 bytes; 1 Megabyte (MB) = 1,000,000 bytes; 1 Gigabyte (GB) = 1,000,000,000 bytes; 1 Terabyte (TB) = 1,000 GB."
        ]
      },
      {
        heading: "The Information Processing Cycle",
        paragraphs: [
          "The four stages of computing: Input (keyboard, mouse) → Processing (CPU) → Output (display, speakers) → Storage (SSD, NVMe, RAM)."
        ]
      }
    ],
    example: {
      title: "NOTATIONAL CONVERSION",
      traditional: "Reading raw 32-bit binary memory dumps: `11000000 10101000 00000001 00000001`",
      cloud: "Converted to dotted-decimal IPv4: `192.168.1.1` or hexadecimal MAC address notation: `C0-A8-01-01`"
    },
    concepts: [
      {
        number: "01",
        title: "Bit vs Byte",
        description: "A bit is a single 0 or 1; a byte is 8 bits (stores one ASCII character)."
      },
      {
        number: "02",
        title: "Hexadecimal (0-9, A-F)",
        description: "Compact base-16 notation for MAC addresses, IPv6, and error memory dumps."
      },
      {
        number: "03",
        title: "Processing Cycle",
        description: "Input → Processing (CPU) → Storage (RAM/SSD) → Output (Monitor)."
      }
    ],
    quiz: {
      question: "In the hexadecimal numbering system, which letter represents the decimal value 15?",
      answers: [
        { id: "A", text: "F", correct: true },
        { id: "B", text: "A", correct: false },
        { id: "C", text: "E", correct: false },
        { id: "D", text: "Z", correct: false }
      ]
    }
  },
  {
    id: 2,
    title: "Internal Hardware: CPU, RAM, Motherboards & PCIe",
    category: "Hardware & Devices",
    duration: "10 min",
    intro:
      "The physical computer chassis houses the motherboard, central processing unit, volatile memory, and expansion bus systems that power computation.",
    keyIdea:
      "The CPU executes program instructions, RAM holds active runtime working data, and the Motherboard's PCIe buses connect high-speed expansion cards.",
    sections: [
      {
        heading: "Core Processing Components",
        paragraphs: [
          "Central Processing Unit (CPU): The brain of the computer. Rated in Clock Speed (GHz), core count (e.g. 8-core / 16-thread), and cache (L1, L2, L3). Sockets: Intel (LGA - pins on motherboard) vs AMD (PGA - pins on CPU / AM5 LGA).",
          "Random Access Memory (RAM): High-speed volatile memory. Generations: DDR4 vs DDR5 (higher bandwidth, lower voltage, dual 32-bit subchannels). Form factors: DIMM for desktops; SO-DIMM for laptops."
        ]
      },
      {
        heading: "Motherboard Form Factors & PCIe Slots",
        paragraphs: [
          "Form Factors: ATX (standard full-size 12x9.6 in), Micro-ATX (compact 9.6x9.6 in), Mini-ITX (small form factor 6.7x6.7 in).",
          "PCI Express (PCIe): Serial expansion bus in x1, x4, x8, and x16 lane widths (x16 used for dedicated graphics cards)."
        ]
      }
    ],
    example: {
      title: "VOLATILE VS NON-VOLATILE",
      traditional: "Assuming that data stored in RAM remains safe after turning off the computer",
      cloud: "RAM loses all data immediately on power loss (volatile); SSDs and hard drives persist data permanently (non-volatile)"
    },
    concepts: [
      {
        number: "01",
        title: "RAM (Volatile)",
        description: "Temporary high-speed memory that requires power to retain information."
      },
      {
        number: "02",
        title: "Motherboard Form Factors",
        description: "ATX, Micro-ATX, and Mini-ITX dictate case compatibility and expansion slots."
      },
      {
        number: "03",
        title: "PCIe x16",
        description: "High-bandwidth expansion slot designed for dedicated GPUs and fast capture cards."
      }
    ],
    quiz: {
      question: "Which form factor of RAM is specifically designed for use in laptops and small form factor PCs?",
      answers: [
        { id: "A", text: "SO-DIMM (Small Outline DIMM)", correct: true },
        { id: "B", text: "Full-Size ATX DIMM", correct: false },
        { id: "C", text: "PCIe x16", correct: false },
        { id: "D", text: "NVMe M.2", correct: false }
      ]
    }
  },
  {
    id: 3,
    title: "Storage Technologies: HDD, SSD, NVMe & RAID",
    category: "Hardware & Devices",
    duration: "9 min",
    intro:
      "Non-volatile storage devices hold the operating system, applications, and permanent user data. Modern systems use solid-state flash memory and RAID arrays for speed and redundancy.",
    keyIdea:
      "NVMe M.2 SSDs communicate directly over the high-speed PCIe bus (3,500-7,000 MB/s), far outpacing legacy mechanical HDDs and SATA SSDs (550 MB/s).",
    sections: [
      {
        heading: "Storage Drive Types",
        paragraphs: [
          "Hard Disk Drive (HDD): Magnetic spinning platters (5400/7200 RPM) with mechanical actuator arm. Vulnerable to physical shock.",
          "SATA Solid State Drive (SSD): NAND flash memory in a 2.5-inch enclosure limited by the SATA 3 interface (max 6 Gbps / ~550 MB/s).",
          "NVMe M.2 SSD: Plugs directly into the motherboard PCIe lanes, delivering multi-gigabyte per second throughput with minimal latency."
        ]
      },
      {
        heading: "RAID Configurations (Redundant Array of Independent Disks)",
        paragraphs: [
          "RAID 0 (Striping): High performance, 0 fault tolerance. If 1 drive fails, all data is lost.",
          "RAID 1 (Mirroring): Exact copy on 2 drives. High redundancy, 50% storage capacity penalty.",
          "RAID 5 (Striping with Parity): Minimum 3 drives. Can survive 1 drive failure with distributed parity.",
          "RAID 10 (1+0 Striped Mirrors): Minimum 4 drives. Combines speed of RAID 0 with redundancy of RAID 1."
        ]
      }
    ],
    example: {
      title: "RAID FAULT TOLERANCE",
      traditional: "Single 4 TB hard drive fails in a business server, causing complete data loss and days of downtime",
      cloud: "RAID 1 or RAID 5 array allows the server to continue running without interruption while the failed drive is swapped"
    },
    concepts: [
      {
        number: "01",
        title: "NVMe over PCIe",
        description: "Direct memory bus access providing 10x the speed of legacy SATA interfaces."
      },
      {
        number: "02",
        title: "RAID 0 vs RAID 1",
        description: "RAID 0 is striping for speed (no safety); RAID 1 is mirroring for redundancy."
      },
      {
        number: "03",
        title: "RAID 5 Parity",
        description: "Requires minimum 3 drives; tolerates single drive failure with distributed parity."
      }
    ],
    quiz: {
      question: "Which RAID configuration requires a minimum of 3 drives and provides fault tolerance using distributed parity?",
      answers: [
        { id: "A", text: "RAID 5", correct: true },
        { id: "B", text: "RAID 0", correct: false },
        { id: "C", text: "RAID 1", correct: false },
        { id: "D", text: "JBOD", correct: false }
      ]
    }
  },
  {
    id: 4,
    title: "Power Supplies, Cooling & Peripheral Interfaces",
    category: "Hardware & Devices",
    duration: "9 min",
    intro:
      "Power Supply Units (PSUs) convert high-voltage AC mains power to low-voltage DC power for computer components, while modern peripheral cables connect displays and external accessories.",
    keyIdea:
      "PSUs convert 110V/220V AC to +3.3V, +5V, and +12V DC; USB-C and Thunderbolt provide universal high-speed data, video, and Power Delivery.",
    sections: [
      {
        heading: "Power Supplies and Wattage Ratings",
        paragraphs: [
          "Converts wall AC (Alternating Current) to component DC (Direct Current).",
          "Voltage Rails: +12V (powers CPU, GPU, motors), +5V and +3.3V (logic boards, M.2 SSDs).",
          "Efficiency Ratings: 80 PLUS certification (Bronze, Silver, Gold, Platinum, Titanium) guaranteeing 80%+ energy efficiency under load."
        ]
      },
      {
        heading: "Display and Peripheral Cable Standards",
        paragraphs: [
          "USB-C / USB4: Reversible connector supporting up to 40 Gbps data, DisplayPort Alt Mode video, and 100W-240W USB Power Delivery.",
          "Thunderbolt 3/4: Intel/Apple standard using USB-C connector delivering 40 Gbps PCIe daisy-chaining.",
          "Video Interfaces: HDMI (audio + video for TVs/monitors) and DisplayPort (supports high refresh rates, adaptive sync G-Sync/FreeSync, and daisy-chaining)."
        ]
      }
    ],
    example: {
      title: "SINGLE CABLE DOCKING",
      traditional: "Connect separate power cable, VGA video cable, audio jack, and 3 USB cables to a laptop",
      cloud: "Plug a single Thunderbolt/USB-C cable to supply power, dual 4K monitors, gigabit Ethernet, and keyboard/mouse"
    },
    concepts: [
      {
        number: "01",
        title: "AC to DC Conversion",
        description: "PSUs step down 120V/240V AC to stable +12V, +5V, and +3.3V DC rails."
      },
      {
        number: "02",
        title: "USB-C & Thunderbolt",
        description: "Universal reversible connector carrying high-speed data, video, and power."
      },
      {
        number: "03",
        title: "DisplayPort vs HDMI",
        description: "DisplayPort is optimal for PC multi-monitor setups; HDMI is standard for consumer media."
      }
    ],
    quiz: {
      question: "Which reversible peripheral cable standard supports 40 Gbps data transfer, multi-display video output, and bidirectional Power Delivery over a single port?",
      answers: [
        { id: "A", text: "Thunderbolt 4 / USB-C", correct: true },
        { id: "B", text: "VGA analog connector", correct: false },
        { id: "C", text: "PS/2 keyboard port", correct: false },
        { id: "D", text: "SATA internal cable", correct: false }
      ]
    }
  },
  {
    id: 5,
    title: "Operating Systems & File Systems",
    category: "Software & OS",
    duration: "9 min",
    intro:
      "Operating Systems (OS) act as the software interface between physical computer hardware and user application software, managing processes, memory, and storage file systems.",
    keyIdea:
      "Windows, macOS, Linux, and ChromeOS manage hardware resources; File systems (NTFS, FAT32, exFAT, ext4, APFS) dictate file permissions and storage limits.",
    sections: [
      {
        heading: "Major Operating System Families",
        paragraphs: [
          "Windows: Dominated by desktop enterprise environments; features Active Directory, Registry, and NTFS.",
          "macOS: Built on Unix (Darwin kernel); uses APFS file system and strict sandboxed permissions.",
          "Linux: Open-source Unix-like OS (Ubuntu, Debian, RHEL) used across 90%+ of cloud servers and supercomputers.",
          "Mobile OS: Android (Linux-based open ecosystem) and iOS (sandboxed Apple ecosystem)."
        ]
      },
      {
        heading: "File System Comparison",
        paragraphs: [
          "NTFS: Standard for Windows. Supports file permissions (ACLs), compression, encryption (EFS), and large files.",
          "FAT32: High universal compatibility across OSs, but maximum individual file size is strictly limited to 4 GB.",
          "exFAT: Modern replacement for FAT32 on flash drives; supports files > 4 GB across Windows and macOS.",
          "ext4: Standard journaling file system for Linux distributions.",
          "APFS: Apple File System optimized for solid-state storage and snapshot encryption."
        ]
      }
    ],
    example: {
      title: "FILE SIZE LIMITATIONS",
      traditional: "Attempt to copy an 8 GB 4K video file onto a FAT32 USB drive and receive an error: 'File too large for the destination filesystem'",
      cloud: "Format the flash drive with exFAT or NTFS, allowing files of virtually unlimited size to copy seamlessly"
    },
    concepts: [
      {
        number: "01",
        title: "FAT32 4GB Limit",
        description: "Legacy filesystem unable to store individual files larger than 4 GB."
      },
      {
        number: "02",
        title: "NTFS Features",
        description: "Enterprise Windows filesystem with granular file permissions, compression, and encryption."
      },
      {
        number: "03",
        title: "Linux Kernel",
        description: "Open-source, highly modular core powering servers, Android phones, and containers."
      }
    ],
    quiz: {
      question: "What is the maximum individual file size that can be stored on a drive formatted with the FAT32 file system?",
      answers: [
        { id: "A", text: "4 GB", correct: true },
        { id: "B", text: "16 TB", correct: false },
        { id: "C", text: "700 MB", correct: false },
        { id: "D", text: "Unlimited", correct: false }
      ]
    }
  },
  {
    id: 6,
    title: "Command-Line Administration & Diagnostics",
    category: "Software & OS",
    duration: "9 min",
    intro:
      "A core skill for IT support technicians is navigating and troubleshooting operating systems using Command Prompt, PowerShell, and the Linux terminal.",
    keyIdea:
      "CLI tools provide fast, scriptable access to system diagnostics, network reachability, disk integrity, and permission management.",
    sections: [
      {
        heading: "Essential Windows CLI Commands",
        paragraphs: [
          "`ipconfig /all`: Displays all network adapter IP addresses, MAC addresses, DHCP lease times, and DNS servers. (`/release` and `/renew` refresh DHCP).",
          "`ping <target>`: Tests basic ICMP Layer 3 connectivity and packet loss.",
          "`tracert <target>`: Traces each router hop along the path to determine where connection failure occurs.",
          "`sfc /scannow`: System File Checker scans and repairs corrupted Windows core OS system files.",
          "`chkdsk /f /r`: Scans hard drive file system integrity and locates bad sectors."
        ]
      },
      {
        heading: "Essential Linux Terminal Commands",
        paragraphs: [
          "`ls -la` (list files with permissions), `cd` (change directory), `pwd` (print working directory).",
          "`sudo` (execute as root superuser), `chmod` (change file permissions, e.g. `chmod 755`), `chown` (change owner).",
          "`grep` (search text inside files), `top`/`htop` (view running processes and CPU usage), `ps aux` (process list)."
        ]
      }
    ],
    example: {
      title: "DIAGNOSING NETWORK DROPOUTS",
      traditional: "Guess whether the internet outage is caused by the local PC, the router, or the remote website",
      cloud: "Run `tracert google.com`; see hop 1 (local gateway) responds in 1ms, hop 2 fails → pinpoint ISP gateway failure instantly"
    },
    concepts: [
      {
        number: "01",
        title: "ipconfig /all",
        description: "Reveals detailed network adapter settings, DHCP server IP, and DNS servers."
      },
      {
        number: "02",
        title: "sfc /scannow",
        description: "Scans and replaces damaged or missing Windows system files."
      },
      {
        number: "03",
        title: "Linux chmod",
        description: "Modifies read (4), write (2), and execute (1) permissions for user, group, and others."
      }
    ],
    quiz: {
      question: "Which Windows command-line utility scans the integrity of all protected system files and repairs corrupted files automatically?",
      answers: [
        { id: "A", text: "sfc /scannow", correct: true },
        { id: "B", text: "format C:", correct: false },
        { id: "C", text: "ping localhost", correct: false },
        { id: "D", text: "tracert 8.8.8.8", correct: false }
      ]
    }
  },
  {
    id: 7,
    title: "Networking Concepts, Cabling & Common Ports",
    category: "Networking & Connectivity",
    duration: "9 min",
    intro:
      "IT technicians must understand twisted-pair copper Ethernet cabling, network topology layouts, and standardized Layer 4 transport port numbers.",
    keyIdea:
      "Ethernet cabling categories (Cat5e, Cat6, Cat6a) dictate speed and bandwidth limits; Well-known port numbers identify target network services.",
    sections: [
      {
        heading: "Ethernet Cabling Categories",
        paragraphs: [
          "Cat5e: 1 Gbps up to 100 meters (100 MHz bandwidth).",
          "Cat6: 1 Gbps up to 100 meters, or 10 Gbps up to 55 meters in low-crosstalk environments (250 MHz).",
          "Cat6a: 10 Gbps up to a full 100 meters (500 MHz with improved shielding).",
          "Connectors: RJ-45 for copper Ethernet; LC/SC/ST for optical fiber cables."
        ]
      },
      {
        heading: "Must-Know Common Port Numbers",
        paragraphs: [
          "Port 20/21: FTP (File Transfer Protocol) | Port 22: SSH (Secure Shell) & SFTP",
          "Port 23: Telnet (unencrypted, legacy) | Port 25: SMTP (email sending)",
          "Port 53: DNS | Port 67/68: DHCP | Port 80: HTTP (unencrypted web)",
          "Port 110: POP3 | Port 143: IMAP | Port 443: HTTPS (TLS encrypted web)",
          "Port 445: SMB (Windows file sharing) | Port 3389: RDP (Remote Desktop Protocol)"
        ]
      }
    ],
    example: {
      title: "SECURITY PORT BLOCKING",
      traditional: "Allow all ports open to the public internet, exposing insecure Telnet password traffic",
      cloud: "Block Port 23 (Telnet) and Port 80 (HTTP) at the firewall, requiring secure Port 22 (SSH) and Port 443 (HTTPS)"
    },
    concepts: [
      {
        number: "01",
        title: "Port 443 (HTTPS)",
        description: "Secure, encrypted web communication utilizing SSL/TLS."
      },
      {
        number: "02",
        title: "Port 3389 (RDP)",
        description: "Microsoft Remote Desktop Protocol for remote desktop administration."
      },
      {
        number: "03",
        title: "Cat6a (10 Gbps)",
        description: "Shielded twisted pair cabling supporting 10 Gigabit speeds at 100 meters."
      }
    ],
    quiz: {
      question: "Which port number is used by Microsoft Remote Desktop Protocol (RDP) for remote GUI desktop access?",
      answers: [
        { id: "A", text: "Port 3389", correct: true },
        { id: "B", text: "Port 22", correct: false },
        { id: "C", text: "Port 80", correct: false },
        { id: "D", text: "Port 53", correct: false }
      ]
    }
  },
  {
    id: 8,
    title: "Wireless Standards (Wi-Fi 6), Bluetooth & SOHO Routers",
    category: "Networking & Connectivity",
    duration: "9 min",
    intro:
      "Small Office / Home Office (SOHO) networks rely on wireless IEEE 802.11 standards, short-range Bluetooth/NFC connections, and multi-function router gateways.",
    keyIdea:
      "Wi-Fi 6 (802.11ax) delivers high throughput and multi-user efficiency; SOHO routers combine a router, switch, firewall, and wireless access point in one device.",
    sections: [
      {
        heading: "IEEE 802.11 Wi-Fi Standards",
        paragraphs: [
          "802.11n (Wi-Fi 4): 2.4 GHz and 5 GHz bands up to 600 Mbps with MIMO (Multiple-Input Multiple-Output).",
          "802.11ac (Wi-Fi 5): 5 GHz band up to 6.9 Gbps with MU-MIMO.",
          "802.11ax (Wi-Fi 6 / 6E): 2.4 GHz, 5 GHz, and 6 GHz bands up to 9.6 Gbps with OFDMA (Orthogonal Frequency-Division Multiple Access) for crowded environments."
        ]
      },
      {
        heading: "Short-Range Wireless & SOHO Configuration",
        paragraphs: [
          "Bluetooth: 2.4 GHz PAN (Personal Area Network) up to 10-100 meters for headsets, mice, and keyboards.",
          "NFC (Near Field Communication): 13.56 MHz ultra short-range (~4 cm) for contactless payments (Apple Pay, Google Pay).",
          "SOHO Router Best Practices: Change default admin password, update firmware, disable WPS, enable WPA3-Personal, and configure separate guest Wi-Fi."
        ]
      }
    ],
    example: {
      title: "SOHO ROUTER HARDENING",
      traditional: "Leave factory admin password as 'admin' and run unencrypted Wi-Fi",
      cloud: "Log into 192.168.1.1, set strong admin password, disable remote management, and enable WPA3-SAE encryption"
    },
    concepts: [
      {
        number: "01",
        title: "Wi-Fi 6 (802.11ax)",
        description: "Modern standard supporting 2.4, 5, and 6 GHz bands with OFDMA for high-density environments."
      },
      {
        number: "02",
        title: "NFC (~4 cm)",
        description: "Ultra-short range contactless technology used in tap-to-pay mobile transactions."
      },
      {
        number: "03",
        title: "SOHO Gateway",
        description: "Combines modem connection, routing, NAT, DHCP server, switch, and Wi-Fi access point."
      }
    ],
    quiz: {
      question: "Which IEEE wireless standard operates on the 2.4 GHz, 5 GHz, and 6 GHz frequency bands and is branded as Wi-Fi 6 / 6E?",
      answers: [
        { id: "A", text: "IEEE 802.11ax", correct: true },
        { id: "B", text: "IEEE 802.11b", correct: false },
        { id: "C", text: "IEEE 802.11ac", correct: false },
        { id: "D", text: "IEEE 802.3", correct: false }
      ]
    }
  },
  {
    id: 9,
    title: "Cybersecurity Threats: Malware, Phishing & Social Engineering",
    category: "Security Awareness",
    duration: "10 min",
    intro:
      "IT professionals must defend systems against malicious software, human-targeted social engineering attacks, and zero-day vulnerabilities.",
    keyIdea:
      "Malware compromises software and data; Social engineering exploits human psychology through phishing, pretexting, and shoulder surfing.",
    sections: [
      {
        heading: "Malware Classifications",
        paragraphs: [
          "Virus: Malicious code attached to a legitimate file that requires user interaction to execute and spread.",
          "Worm: Self-replicating malware that spreads across network vulnerabilities automatically without user action.",
          "Ransomware: Encrypts user files with military-grade crypto and demands cryptocurrency payment for decryption keys.",
          "Trojan: Disguised as useful software (e.g. game, free utility) but delivers a hidden malicious payload (backdoor/keylogger).",
          "Spyware & Keyloggers: Secretly monitors user keystrokes, passwords, and browsing habits."
        ]
      },
      {
        heading: "Social Engineering Tactics",
        paragraphs: [
          "Phishing: Deceptive emails impersonating trusted brands (banks, IT support) to trick users into revealing passwords.",
          "Spear Phishing: Highly customized phishing emails targeting specific individuals or executives (Whaling).",
          "Vishing (Voice) & Smishing (SMS): Phone call and text message phishing scams.",
          "Tailgating & Shoulder Surfing: Physical security breaches following authorized staff into secure rooms or watching screen inputs."
        ]
      }
    ],
    example: {
      title: "RANSOMWARE ATTACK PREVENTION",
      traditional: "An employee clicks an email attachment invoice.exe; entire network drives are encrypted in minutes",
      cloud: "Email gateway filters malicious attachments, antivirus endpoint protection isolates execution, and immutable 3-2-1 backups restore files"
    },
    concepts: [
      {
        number: "01",
        title: "Ransomware",
        description: "Extortion malware encrypting corporate data and demanding ransom payment."
      },
      {
        number: "02",
        title: "Spear Phishing",
        description: "Targeted, customized email attacks designed to steal executive or administrator credentials."
      },
      {
        number: "03",
        title: "Zero-Day Exploit",
        description: "Vulnerability exploited by attackers before the software vendor has created and released a security patch."
      }
    ],
    quiz: {
      question: "Which type of malware self-replicates and spreads across network vulnerabilities automatically without requiring any user action?",
      answers: [
        { id: "A", text: "Worm", correct: true },
        { id: "B", text: "Trojan", correct: false },
        { id: "C", text: "Adware", correct: false },
        { id: "D", text: "Macro virus", correct: false }
      ]
    }
  },
  {
    id: 10,
    title: "Security Controls: Authentication, MFA & Encryption",
    category: "Security Awareness",
    duration: "9 min",
    intro:
      "Securing IT environments requires the AAA security framework (Authentication, Authorization, Accounting), Multi-Factor Authentication (MFA), and robust encryption.",
    keyIdea:
      "Multi-Factor Authentication requires two or more distinct authentication factors: Something you know, Something you have, Something you are.",
    sections: [
      {
        heading: "The Three MFA Authentication Factors",
        paragraphs: [
          "1. Something You Know: Passwords, PINs, security question answers.",
          "2. Something You Have: Smartphone authenticator app (TOTP), hardware security key (YubiKey), smart card.",
          "3. Something You Are (Biometrics): Fingerprint scan, facial recognition (Face ID), retina/iris scan.",
          "Note: Entering a password AND a PIN is only 1 factor (two things you know), not MFA!"
        ]
      },
      {
        heading: "Encryption and Data Protection",
        paragraphs: [
          "Symmetric Encryption: Uses a single shared secret key for encryption and decryption (AES-256 - fast, bulk data).",
          "Asymmetric Encryption: Uses a public key (to encrypt) and private key (to decrypt) pair (RSA, ECC - used in SSL/TLS certificates).",
          "Full Disk Encryption (BitLocker / FileVault): Protects data at rest if a laptop is lost or stolen."
        ]
      }
    ],
    example: {
      title: "MFA ACCOUNT PROTECTION",
      traditional: "A hacker discovers a user's password in a breached credential database and gains full access to email",
      cloud: "The hacker is blocked because the login requires an instant 6-digit TOTP code generated on the user's physical phone"
    },
    concepts: [
      {
        number: "01",
        title: "MFA 3 Factors",
        description: "Knowledge (password), Possession (authenticator app/smart card), Inherence (biometrics)."
      },
      {
        number: "02",
        title: "BitLocker (FDE)",
        description: "Full disk encryption leveraging the motherboard TPM chip to protect data at rest."
      },
      {
        number: "03",
        title: "Symmetric vs Asymmetric",
        description: "Symmetric uses 1 secret key; Asymmetric uses a mathematically linked public/private key pair."
      }
    ],
    quiz: {
      question: "Which of the following combinations represents true Multi-Factor Authentication (MFA)?",
      answers: [
        { id: "A", text: "A password (something you know) and an authenticator app code on a smartphone (something you have)", correct: true },
        { id: "B", text: "A password and your mother's maiden name", correct: false },
        { id: "C", text: "A 4-digit PIN and a 6-digit backup PIN", correct: false },
        { id: "D", text: "Two different password guesses", correct: false }
      ]
    }
  },
  {
    id: 11,
    title: "Database Fundamentals & Basic SQL Syntax",
    category: "Software & Data",
    duration: "8 min",
    intro:
      "Databases store structured, semi-structured, and unstructured data. Relational databases use tables with rows and columns queried with Structured Query Language (SQL).",
    keyIdea:
      "Relational databases (RDBMS) enforce schemas with Primary Keys and Foreign Keys, queried using SQL commands (SELECT, INSERT, UPDATE, DELETE).",
    sections: [
      {
        heading: "Relational (RDBMS) vs. Non-Relational (NoSQL)",
        paragraphs: [
          "RDBMS (MySQL, PostgreSQL, Oracle, SQL Server): Data organized in tables. Primary Key uniquely identifies a row; Foreign Key creates relationships between tables.",
          "NoSQL (MongoDB, DynamoDB, Redis): Schema-less databases storing JSON documents, key-value pairs, or graphs."
        ]
      },
      {
        heading: "Core SQL Data Manipulation Commands",
        paragraphs: [
          "`SELECT * FROM Employees WHERE Department = 'Engineering';` (retrieve records).",
          "`INSERT INTO Products (Name, Price) VALUES ('Laptop', 999.00);` (add new record).",
          "`UPDATE Users SET Active = 1 WHERE UserID = 42;` (modify existing records).",
          "`DELETE FROM Orders WHERE OrderID = 1001;` (remove records)."
        ]
      }
    ],
    example: {
      title: "DATABASE QUERYING",
      traditional: "Search through thousands of unindexed CSV spreadsheet files manually with Excel",
      cloud: "Execute a SQL query in 5ms: `SELECT CustomerName, Total FROM Orders WHERE Status = 'Shipped'`"
    },
    concepts: [
      {
        number: "01",
        title: "Primary Key",
        description: "Unique identifier for every individual record in a database table."
      },
      {
        number: "02",
        title: "Foreign Key",
        description: "A column that points to the Primary Key of another table to establish relationships."
      },
      {
        number: "03",
        title: "CRUD / SQL Operations",
        description: "Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE)."
      }
    ],
    quiz: {
      question: "Which SQL command is used to retrieve specific data records from a database table?",
      answers: [
        { id: "A", text: "SELECT", correct: true },
        { id: "B", text: "INSERT", correct: false },
        { id: "C", text: "DROP", correct: false },
        { id: "D", text: "CREATE", correct: false }
      ]
    }
  },
  {
    id: 12,
    title: "Software Development Concepts & Scripting Basics",
    category: "Software & Data",
    duration: "8 min",
    intro:
      "Understanding fundamental programming logic, variables, data types, conditional branching, and automation scripting enables IT staff to automate administrative tasks.",
    keyIdea:
      "Compiled languages (C++, Rust) convert to machine code; Interpreted scripting languages (Python, PowerShell, Bash) execute line-by-line for automation.",
    sections: [
      {
        heading: "Data Types & Programming Logic",
        paragraphs: [
          "Data Types: Integer (whole numbers `42`), Float/Double (decimals `3.14`), String (text `\"Hello\"`), Boolean (`true`/`false`).",
          "Control Structures: Conditionals (`if/else` branching), Loops (`for`, `while` iterations).",
          "Functions: Reusable blocks of code that accept parameters and return values."
        ]
      },
      {
        heading: "System Administration Scripting Languages",
        paragraphs: [
          "PowerShell (`.ps1`): Object-oriented shell and scripting for Windows/cross-platform automation.",
          "Bash (`.sh`): Standard command shell scripting for Linux and macOS environments.",
          "Python (`.py`): General-purpose high-level language used extensively in cloud and automation."
        ]
      }
    ],
    example: {
      title: "AUTOMATED USER CREATION",
      traditional: "Manually click through 20 GUI dialog boxes to create 50 new company user accounts",
      cloud: "Run a 10-line PowerShell script that reads employee names from a CSV and creates all 50 accounts in Active Directory in 5 seconds"
    },
    concepts: [
      {
        number: "01",
        title: "Data Types",
        description: "Integer, Float, String, and Boolean define how values are stored in memory."
      },
      {
        number: "02",
        title: "Conditionals & Loops",
        description: "If/Else decision logic and For/While repetition constructs."
      },
      {
        number: "03",
        title: "PowerShell & Bash",
        description: "Scripting languages that eliminate tedious manual IT administration."
      }
    ],
    quiz: {
      question: "Which programming data type is specifically designed to store text characters (such as an employee's name)?",
      answers: [
        { id: "A", text: "String", correct: true },
        { id: "B", text: "Integer", correct: false },
        { id: "C", text: "Boolean", correct: false },
        { id: "D", text: "Float", correct: false }
      ]
    }
  },
  {
    id: 13,
    title: "Virtualization, Hypervisors & Cloud Computing",
    category: "Cloud & Virtualization",
    duration: "9 min",
    intro:
      "Virtualization separates operating systems and applications from underlying physical hardware using software layers known as Hypervisors.",
    keyIdea:
      "Type 1 (Bare-Metal) hypervisors run directly on server hardware for enterprise efficiency; Type 2 (Hosted) hypervisors run on top of a host OS for desktop testing.",
    sections: [
      {
        heading: "Type 1 vs Type 2 Hypervisors",
        paragraphs: [
          "Type 1 Hypervisor (Bare-Metal): Runs directly on the physical server hardware without a host OS (VMware ESXi, Microsoft Hyper-V Server, KVM). Delivers maximum speed and direct hardware control for datacenters.",
          "Type 2 Hypervisor (Hosted): Runs as an application inside an existing host OS (Oracle VirtualBox, VMware Workstation). Ideal for developers and testing."
        ]
      },
      {
        heading: "Cloud Service Models (NIST Definitions)",
        paragraphs: [
          "IaaS (Infrastructure as a Service): Rent raw VMs, storage, and networking (AWS EC2, Azure VMs).",
          "PaaS (Platform as a Service): Deploy code onto managed runtimes without OS management (AWS Elastic Beanstalk, Heroku).",
          "SaaS (Software as a Service): End-user cloud applications (Microsoft 365, Google Workspace, Salesforce)."
        ]
      }
    ],
    example: {
      title: "SERVER CONSOLIDATION",
      traditional: "Buy 10 physical rack servers that each run at only 10% CPU capacity",
      cloud: "Install a Type 1 Hypervisor on 1 physical server and run all 10 virtual machines concurrently on shared hardware"
    },
    concepts: [
      {
        number: "01",
        title: "Type 1 Hypervisor",
        description: "Bare-metal virtualization layer with direct hardware access (VMware ESXi, KVM)."
      },
      {
        number: "02",
        title: "Type 2 Hypervisor",
        description: "Application-level virtualization running inside Windows/macOS (VirtualBox)."
      },
      {
        number: "03",
        title: "IaaS, PaaS, SaaS",
        description: "Cloud service tiers spanning raw infrastructure to fully turnkey applications."
      }
    ],
    quiz: {
      question: "Which type of hypervisor runs directly on the physical computer hardware without requiring a underlying host operating system?",
      answers: [
        { id: "A", text: "Type 1 (Bare-Metal) Hypervisor", correct: true },
        { id: "B", text: "Type 2 (Hosted) Hypervisor", correct: false },
        { id: "C", text: "SaaS application", correct: false },
        { id: "D", text: "Browser plugin", correct: false }
      ]
    }
  },
  {
    id: 14,
    title: "CompTIA 6-Step Troubleshooting Methodology",
    category: "Troubleshooting & Support",
    duration: "10 min",
    intro:
      "The official CompTIA 6-Step Troubleshooting Methodology provides a logical, repeatable process for diagnosing and resolving any hardware, software, or network failure.",
    keyIdea:
      "Always identify the problem first, establish and test theories of probable cause, implement a plan of action, verify full functionality, and document findings.",
    sections: [
      {
        heading: "The Official 6-Step CompTIA Model",
        paragraphs: [
          "Step 1: Identify the Problem. Gather information, question users, identify symptoms, determine recent changes, and back up data before making changes.",
          "Step 2: Establish a Theory of Probable Cause. Question the obvious (cables plugged in? power on?). Consider multiple approaches (top-down, bottom-up, divide-and-conquer).",
          "Step 3: Test the Theory to Determine Cause. Once confirmed, determine next steps. If theory is disproven, establish a new theory or escalate.",
          "Step 4: Establish a Plan of Action to resolve the problem and implement the solution.",
          "Step 5: Verify Full System Functionality and, if applicable, implement preventive measures.",
          "Step 6: Document Findings, Actions, and Outcomes. Record ticket history, root cause, and steps taken for future reference."
        ]
      }
    ],
    example: {
      title: "APPLYING THE 6 STEPS",
      traditional: "A user says 'My PC is slow' → Immediately wipe the hard drive and reinstall Windows without checking anything",
      cloud: "Question user → Check Task Manager (CPU at 100% from print spooler) → Kill spooler → Verify normal speed → Document in helpdesk ticket"
    },
    concepts: [
      {
        number: "01",
        title: "Step 1: Inquire & Backup",
        description: "Always back up user data before applying fixes to prevent accidental data loss."
      },
      {
        number: "02",
        title: "Step 2: Question the Obvious",
        description: "Check power switches, network cables, and basic settings before replacing hardware."
      },
      {
        number: "03",
        title: "Step 6: Documentation",
        description: "Knowledge base documentation prevents wasted time when identical issues reoccur."
      }
    ],
    quiz: {
      question: "According to the CompTIA Troubleshooting Methodology, what is the final step in the troubleshooting process?",
      answers: [
        { id: "A", text: "Document findings, actions, and outcomes", correct: true },
        { id: "B", text: "Establish a theory of probable cause", correct: false },
        { id: "C", text: "Replace the motherboard immediately", correct: false },
        { id: "D", text: "Verify full system functionality", correct: false }
      ]
    }
  },
  {
    id: 15,
    title: "Printers, Imaging Process & Maintenance",
    category: "Hardware & Devices",
    duration: "9 min",
    intro:
      "Printers and multi-function devices (MFDs) are common IT support tickets. Technicians must understand laser printer imaging cycles, inkjets, thermal printers, and common jams.",
    keyIdea:
      "Laser printers follow the 7-step electrophotographic imaging process: Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning.",
    sections: [
      {
        heading: "The 7-Step Laser Printer Imaging Process",
        paragraphs: [
          "1. Processing: Raster Image Processor (RIP) builds the page in printer memory.",
          "2. Charging: Primary Corona / Charge Roller applies uniform high negative charge (~ -600V) to photosensitive drum.",
          "3. Exposing: Laser beam discharges selected areas on the drum where toner should stick (~ -100V latent image).",
          "4. Developing: Developing roller applies negatively charged toner particles to discharged laser areas.",
          "5. Transferring: Transfer roller with positive charge attracts toner from drum onto paper.",
          "6. Fusing: Heat (up to 400°F) and pressure rollers permanently melt toner powder into paper fibers.",
          "7. Cleaning: Rubber blade scrapes residual toner from drum into waste reservoir."
        ]
      },
      {
        heading: "Other Printer Technologies",
        paragraphs: [
          "Inkjet: Liquid ink nozzles (piezoelectric/thermal) spray ink droplets.",
          "Thermal Printers: Direct Thermal (uses heat-sensitive paper that turns black, used for receipts) vs Thermal Transfer (uses heated ribbon for barcode labels).",
          "Impact (Dot Matrix): Uses pins striking an ink ribbon (required for carbon copy multi-part forms)."
        ]
      }
    ],
    example: {
      title: "DIAGNOSING SMUDGED TONER",
      traditional: "Customer complains printed text rubs off paper like black dust on their fingers",
      cloud: "Identify failed Fuser Assembly (heat roller is not reaching melting temperature) and replace fuser unit"
    },
    concepts: [
      {
        number: "01",
        title: "Fusing Step",
        description: "Heat and pressure melt toner into paper; failure results in smudged, rubbing-off powder."
      },
      {
        number: "02",
        title: "Direct Thermal",
        description: "Uses heat-reactive paper for cash register receipts (sensitive to heat and light)."
      },
      {
        number: "03",
        title: "Impact Printers",
        description: "Mechanical pins strike ribbon; exclusively used for multi-part carbon copies."
      }
    ],
    quiz: {
      question: "If black toner powder rubs off printed pages easily when touched, which component of a laser printer has failed?",
      answers: [
        { id: "A", text: "Fuser Assembly (fails to supply heat and pressure)", correct: true },
        { id: "B", text: "Pickup rollers", correct: false },
        { id: "C", text: "Primary corona wire", correct: false },
        { id: "D", text: "Print spooler service", correct: false }
      ]
    }
  },
  {
    id: 16,
    title: "Operational Procedures, Backups & Safety",
    category: "Operations & Best Practices",
    duration: "8 min",
    intro:
      "Professional IT operations require robust 3-2-1 backup strategies, Electrostatic Discharge (ESD) safety protocols, environmental recycling, and clear customer communication.",
    keyIdea:
      "Follow the 3-2-1 backup rule: 3 copies of data, across 2 different media types, with 1 copy stored offsite or in the cloud.",
    sections: [
      {
        heading: "The 3-2-1 Backup Strategy",
        paragraphs: [
          "3 Total Copies: One production primary copy + two backup copies.",
          "2 Different Media Types: Store on local NAS/SSD and magnetic LTO tape or external drive.",
          "1 Offsite Copy: Keep one copy in cloud storage or a remote location to protect against local fire, flood, or physical disaster."
        ]
      },
      {
        heading: "Safety & Environmental Procedures",
        paragraphs: [
          "Electrostatic Discharge (ESD): Static electricity (as little as 100V) can silently destroy microchips. Always wear an antistatic wrist strap connected to unpainted chassis metal and use antistatic mats.",
          "Safety Data Sheets (SDS): Documents handling, storage, and emergency first-aid for hazardous materials (printer toner, battery acids, cleaning solvents).",
          "Customer Service Professionalism: Maintain eye contact, avoid technical jargon with non-technical users, actively listen without interrupting, and set clear expectations."
        ]
      }
    ],
    example: {
      title: "DISASTER RECOVERY READINESS",
      traditional: "Back up server to a USB hard drive that sits on top of the server rack in the same room",
      cloud: "Automate daily backups following 3-2-1 rule with encrypted offsite replication to cloud object storage"
    },
    concepts: [
      {
        number: "01",
        title: "3-2-1 Rule",
        description: "3 copies of data, on 2 different media types, with 1 copy stored offsite."
      },
      {
        number: "02",
        title: "ESD Protection",
        description: "Antistatic wrist straps and mats protect sensitive circuitry from static voltage damage."
      },
      {
        number: "03",
        title: "Safety Data Sheets (SDS)",
        description: "OSHA-mandated chemical safety, disposal, and emergency first-aid documentation."
      }
    ],
    quiz: {
      question: "According to the industry-standard 3-2-1 backup strategy, where should at least one copy of your backup data be stored?",
      answers: [
        { id: "A", text: "Offsite in a geographically separate facility or cloud storage", correct: true },
        { id: "B", text: "On the same physical hard drive as the operating system", correct: false },
        { id: "C", text: "In the computer's volatile RAM memory", correct: false },
        { id: "D", text: "On a paper printout in the server room", correct: false }
      ]
    }
  }
];
