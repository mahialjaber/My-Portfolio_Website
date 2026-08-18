# Alert Report — <short descriptive title>

**Analyst:** Mahi Al Jaber
**Date:** YYYY-MM-DD
**Source:** LetsDefend SOC Alert #<id>

---

## 1. Verdict

> **True Positive — Confirmed Malicious.** Assessed with **high confidence**.
> A phishing email delivered a macro-enabled document to one user; the macro
> executed and established outbound C2. No lateral movement observed.
> Host isolated. Recommend password reset and mailbox rule review.

<!-- Rules for this box:
     - Verdict is one of: True Positive / False Positive / Benign True Positive
     - Confidence is one of: high / moderate / low
     - Maximum 4 sentences. If your manager reads only this box,
       they should be able to act.
     - Write this section LAST, but put it FIRST. -->

---

## 2. Alert details

| Field | Value |
|---|---|
| Alert ID | |
| Rule / detection name | |
| Triggered (UTC) | |
| Severity | |
| Affected host | |
| Affected user | |
| Data source | (EDR / SIEM / mail gateway / firewall) |

---

## 3. Timeline

All times UTC. Only events you can prove from a log.

| Time (UTC) | Event | Source |
|---|---|---|
| 09:14:02 | Email received from `sender@example[.]com` | Mail gateway |
| 09:16:41 | `WINWORD.EXE` spawned `powershell.exe` | Sysmon EID 1 |
| 09:16:43 | Outbound TLS to `185.x.x.x:443` | Firewall |

---

## 4. Evidence

Raw artifacts only. No opinions in this section.

```
<paste the actual log line, command line, or query output>
```

- **Query used:** `<the exact search you ran, so someone can reproduce it>`
- **File hash:** `<sha256>`
- **Screenshots:** attach if the tool output can't be pasted as text

---

## 5. Analysis

What the evidence in section 4 *means*. This is the only section where
you are allowed to interpret.

Structure each point as: observation → what it indicates → how confident.

> Observation: `WINWORD.EXE` spawned `powershell.exe` with an encoded command.
> Indicates: macro execution leading to a stage-2 download.
> Confidence: high — the parent-child relationship is not produced by
> legitimate Office behaviour in this environment.

**Alternatives I ruled out:**
<!-- Name at least one benign explanation you considered and why you rejected it.
     Skipping this is the single biggest tell of a junior analyst. -->

---

## 6. Scope and impact

- Hosts affected: 1 of N checked
- **Negative findings:** what you checked and found clean.
  ("Reviewed authentication logs for the same user across all hosts, 24h
  window — no anomalous logons.") Negative findings are real findings.
  Write them down.

---

## 7. Actions taken

1.
2.

## 8. Recommendations

1.
2.

---

## 9. IOCs

| Type | Value | Notes |
|---|---|---|
| IP | `185.x.x.x` | defang with brackets |
| Domain | `evil[.]com` | |
| SHA256 | | |

## 10. MITRE ATT&CK mapping

| Tactic | Technique | ID |
|---|---|---|
| Initial Access | Phishing: Spearphishing Attachment | T1566.001 |
| Execution | Command and Scripting Interpreter: PowerShell | T1059.001 |