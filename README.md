# 🛡️ Mahi Al Jaber — Security Analyst & Detection Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-0ea5e9?style=for-the-badge&logo=github)](https://mahialjaber.github.io/My-Portfolio_Website/)
[![Detection Lab](https://img.shields.io/badge/SIEM-Splunk_%26_Wazuh-059669?style=for-the-badge&logo=splunk)](https://github.com/mahialjaber/threat-detection-soc-lab)
[![Datasets](https://img.shields.io/badge/Datasets-35%2B_Stars-f59e0b?style=for-the-badge&logo=star)](https://github.com/mahialjaber/SOC-Log-Analysis-Datasets)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Open_to_Roles-10b981?style=for-the-badge)](#contact)

> **"Detection. Response. Evidence."**  
> An evidence-first, industrial-styled security portfolio demonstrating hands-on Security Analysis, incident investigation, cloud & endpoint telemetry correlation, adversary emulation, and custom detection engineering.

---

## 🧭 Overview

This repository hosts the personal portfolio of **Mahi Al Jaber** — a Security Analyst and Detection Engineer. Rather than displaying generic course completions, every project presented here links directly to reproducible laboratory environments, raw telemetry evidence, ATT&CK-mapped adversary emulation, and custom detection queries.

Hosted live on GitHub Pages: **[mahialjaber.github.io/My-Portfolio_Website/](https://mahialjaber.github.io/My-Portfolio_Website/)**

---

## 📂 Featured Case Files & Repositories

| Project | Environment / Stack | Focus & Highlights | Status |
|:---|:---|:---|:---:|
| [**SOC Log Analysis Datasets**](https://github.com/mahialjaber/SOC-Log-Analysis-Datasets) | Plain text · JSONL · Splunk SPL · Sentinel KQL | **35+ ⭐ Stars** — Curated synthetic log files across 5 security domains (App, Cloud, Email, Endpoints, Network) with embedded attack vectors and a hunting playbook. | Public · MIT |
| [**SOC Investigation Case Files**](https://github.com/mahialjaber/soc-investigation-casefiles) | Splunk · Sysmon · Brim/Wireshark · PCAP | Structured 6-step alert triage and incident investigation case files: evidence timelines, disproving benign hypotheses, IOC extraction, and containment playbooks. | Public · MIT |
| [**Threat Detection Lab**](https://github.com/mahialjaber/threat-detection-soc-lab) | AWS EC2 · Kali Linux · Windows Server · Splunk | End-to-end AWS & Windows detection lab: Universal Forwarder over TCP 9997, Hydra RDP brute force, Atomic Red Team execution, and custom SPL correlation searches. | Public |
| [**Wazuh SIEM Setup, Lab & Detection Tasks**](https://github.com/mahialjaber/wazuh-setup-and-lab-tasks) | Wazuh v4.14.8 · OpenSearch · Sysmon · CloudTrail | 10 hands-on detection engineering & threat hunting challenges: AWS CloudTrail, real-time FIM diffing, custom PCRE2 rules, VirusTotal CTI, active response, and Dev Tools REST querying. | Public · Active Lab |
| [**MiCode**](https://github.com/mahialjaber/MiCode) | Vanilla JS · Offline PWA · Strict CSP | Tiny offline PowerShell & Base64 decoder for security analysts, live on [GitHub Pages](https://mahialjaber.github.io/MiCode/) — runs 100% locally in the browser with zero data uploads. | Public · Live |

---

## ✨ Key Portfolio Features

### 1. 💡 Interactive Light-Switch Pull Cord
A handcrafted physics-based light cord widget inspired by classic lamps:
- **Real Drag Physics**: Pull downwards with cursor or touch; rope dynamically stretches with realistic exponential damping.
- **Spring Elastic Snap-Back**: Realistic spring overshoot animation upon release (`@keyframes cordReleaseSnap`).
- **Tactile Sound Feedback**: Synthesized realistic acoustic switch click using the browser's native **Web Audio API** (zero external audio files).
- **Persistent Theme Sync**: Toggles between Dark Mode and Light Mode, updating the anchor fixture's status bulb and syncing with `localStorage`.

### 2. 📐 Blueprint / Industrial Design Language
- Clean wireframe blueprint aesthetics with technical corner registration marks.
- Precision typography (`Barlow Condensed` for headings, `ui-monospace` for metadata and telemetry).
- Fully responsive across mobile, tablet, and widescreen monitors.
- Full accessibility support (reduced-motion queries, keyboard navigation, high-contrast OKLCH tonal scales).

---

## 🛠️ Tech Stack & Architecture

- **Markup & Styling**: Semantic HTML5, CSS3 Custom Properties (`OKLCH` tonal ramps), responsive grid & flexbox layouts.
- **Frontend Architecture**: Standalone DesignCraft (`<x-dc>`) reactive component architecture with React UMD runtime.
- **Backend API (Optional)**: Node.js Express server located in [`server/`](server/) with Nodemailer for handling contact submissions.

---

## 🚀 Running Locally

You do not need complicated build tools or bundlers to run the frontend:

```bash
# Clone the repository
git clone https://github.com/mahialjaber/My-Portfolio_Website.git
cd My-Portfolio_Website

# Run using Python built-in HTTP server
python -m http.server 8000

# Open your browser at
# http://localhost:8000/
```

### Running the Contact API (Optional)

```bash
cd server
npm install
cp .env.example .env   # Configure SMTP credentials
npm start
```

---

## 📬 Contact & Connect

- **Portfolio**: [mahialjaber.github.io/My-Portfolio_Website/](https://mahialjaber.github.io/My-Portfolio_Website/)
- **GitHub**: [@mahialjaber](https://github.com/mahialjaber)
- **Email**: [mahialjaber.dev@gmail.com](mailto:mahialjaber.dev@gmail.com)
- **X (Twitter)**: [@mahialjaber](https://x.com/mahialjaber)
- **Discord**: `mahialjaber`

---

<p align="center">
  <sub>Designed &amp; engineered by Mahi Al Jaber · 100% Evidence-Backed Security Engineering</sub>
</p>
