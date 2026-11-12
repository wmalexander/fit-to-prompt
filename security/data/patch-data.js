/**
 * Fit to Patch issue data. Newest first. This file is the source of truth for the
 * /security/ archive and is updated by /build-security-issue on every run.
 */
const PATCH_DATA = {
    meta: {
        title: "Fit to Patch",
        subtitle: "The daily web security briefing",
        buttondownUsername: "fittopatch",
        lastUpdated: "2026-11-12"
    },
    issues: [
        {
            date: "2026-11-12",
            issueNumber: 9,
            title: "Apache's HTTP/2 module has a code-running bug, and Node.js fixes key-leaking flaws",
            summary: "Apache HTTP Server 2.4.71 fixes a critical HTTP/2 bug that can let strangers run code, Node.js fixes flaws that can leak TLS keys, and a GitHub Actions secret stealer is hitting thousands of repositories.",
            url: "https://fittoprompt.com/security/issues/2026-11-12.html",
            pressure: "high",
            itemCount: 14
        },
        {
            date: "2026-11-11",
            issueNumber: 8,
            title: "React, Rails and Git all have serious bugs to patch before you clone anything",
            summary: "React Server Components has a critical remote code execution bug fixed in 19.0.9 and later, Rails Active Storage can leak secrets, and Git fixes a submodule clone attack.",
            url: "https://fittoprompt.com/security/issues/2026-11-11.html",
            pressure: "high",
            itemCount: 15
        },
        {
            date: "2026-11-10",
            issueNumber: 7,
            title: "Chrome fixes an exploited zero-day, and CISA lists the OpenSSH login bug",
            summary: "Chrome patches an exploited zero-day in its XML code, CISA adds the OpenSSH SSHole bug to its exploited list, and a German web host says attackers got in through its AI assistant connector.",
            url: "https://fittoprompt.com/security/issues/2026-11-10.html",
            pressure: "high",
            itemCount: 16
        },
        {
            date: "2026-11-09",
            issueNumber: 6,
            title: "Attackers are testing a long-password bug in OpenSSH on Alpine Linux",
            summary: "Attackers are trying very long passwords against OpenSSH on Alpine-style Linux, Contact Form 7 before 6.2.4 allows risky file uploads, and a poisoned npm release steals wallet data.",
            url: "https://fittoprompt.com/security/issues/2026-11-09.html",
            pressure: "high",
            itemCount: 10
        },
        {
            date: "2026-11-08",
            issueNumber: 5,
            title: "SonicWall is patching a VPN bug that lets attackers skip two-step login",
            summary: "SonicWall's firewall VPN has an exploited bug that can skip two-step login, a LatePoint booking plugin bug can let strangers take over accounts, and Node.js security releases arrive Wednesday.",
            url: "https://fittoprompt.com/security/issues/2026-11-08.html",
            pressure: "elevated",
            itemCount: 8
        },
        {
            date: "2026-11-07",
            issueNumber: 4,
            title: "Installing the WordPress security fix can still expose a site while it updates",
            summary: "Installing the WordPress core fix can still expose a site for a moment, attackers are trying the OpenSSH *sshole bug on Alpine, and Claude Code's saved approvals have leaked secrets into public repositories.",
            url: "https://fittoprompt.com/security/issues/2026-11-07.html",
            pressure: "critical",
            itemCount: 12
        },
        {
            date: "2026-11-06",
            issueNumber: 3,
            title: "WordPress Core Upgrade Bug: Attackers Are Probing, Federal Deadline Is Today",
            summary: "Attackers are probing the WordPress core upgrade bug as the federal deadline arrives, OpenSSH fixes a login bypass on Alpine Linux, and fake cPGuard updates and a trojanized Control Web Panel put backdoors on hosting servers.",
            url: "https://fittoprompt.com/security/issues/2026-11-06.html",
            pressure: "critical",
            itemCount: 14
        },
        {
            date: "2026-11-05",
            issueNumber: 2,
            title: "A Rails Upload Bug Can Leak Your App's Secret Keys",
            summary: "Rails Active Storage can leak secret keys through crafted uploads, Debian and Ubuntu fix a root-level APT flaw, a WooCommerce security plugin lets anyone create admin accounts, and a poisoned analytics script served iPhone exploits.",
            url: "https://fittoprompt.com/security/issues/2026-11-05.html",
            pressure: "elevated",
            itemCount: 15
        },
        {
            date: "2026-11-04",
            issueNumber: 1,
            title: "Attackers Are Now Exploiting the WordPress Core Upgrade Bug",
            summary: "CISA confirms attacks on a WordPress core upgrade flaw, HTTP2Shell needs host-level Brotli patching, Next.js fixes two critical RCE bugs, Node.js security releases land November 11, and Tomcat fixes three critical bugs.",
            url: "https://fittoprompt.com/security/issues/2026-11-04.html",
            pressure: "critical",
            itemCount: 19
        }
    ]
};

function getAllPatchIssues() {
    return PATCH_DATA.issues.slice();
}
