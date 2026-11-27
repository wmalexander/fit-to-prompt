/**
 * Fit to Patch issue data. Newest first. This file is the source of truth for the
 * /security/ archive and is updated by /build-security-issue on every run.
 */
const PATCH_DATA = {
    meta: {
        title: "Fit to Patch",
        subtitle: "The daily web security briefing",
        buttondownUsername: "fittopatch",
        lastUpdated: "2026-11-27"
    },
    issues: [
        {
            date: "2026-11-27",
            issueNumber: 24,
            title: "Cacti has an unpatched login-free code execution bug",
            summary: "Cacti 1.2.31 can be taken over in four requests when its guest account is on, with a public exploit and no patch. Also critical bugs in Ultimate Member and FunnelKit Automations, a @fastify/express authentication bypass, and the PolinRider loader hiding in GitHub repos.",
            url: "https://fittoprompt.com/security/issues/2026-11-27.html",
            pressure: "elevated",
            itemCount: 13
        },
        {
            date: "2026-11-26",
            issueNumber: 23,
            title: "Drupal's installer fix had a gap, and WP Rocket needs 3.24.2",
            summary: "Drupal says last week's installer patch left some sites open and attackers are using it, WP Rocket has a critical file-path bug fixed in 3.24.2, and the VirtueMart and ChronoForms Joomla extensions need updates.",
            url: "https://fittoprompt.com/security/issues/2026-11-26.html",
            pressure: "high",
            itemCount: 10
        },
        {
            date: "2026-11-25",
            issueNumber: 22,
            title: "Drupal's installer bug is being used to take over sites",
            summary: "CISA says attackers are exploiting a Drupal core installer flaw fixed in 11.4.13, 11.3.22 and 10.6.22. Also a login-free WHMCS SQL injection, a Joomla remote code execution fix, and Unit 42 on AI-driven attackers that start with web shells.",
            url: "https://fittoprompt.com/security/issues/2026-11-25.html",
            pressure: "high",
            itemCount: 11
        },
        {
            date: "2026-11-24",
            issueNumber: 21,
            title: "Six WordPress plugins were backdoored, and an exploited ASP.NET library has no fix",
            summary: "Six WP connect WordPress plugins carried a hidden backdoor, attackers are using the abandoned Idunno.AntiCsrf ASP.NET library with no patch available, and MONAI Label and Xen Orchestra have exploited bugs with fixes.",
            url: "https://fittoprompt.com/security/issues/2026-11-24.html",
            pressure: "elevated",
            itemCount: 12
        },
        {
            date: "2026-11-23",
            issueNumber: 20,
            title: "Cisco Expressway flaw exploited; simple-git needs 4.1.0",
            summary: "CISA says a critical Cisco Expressway bug is being exploited, simple-git has a critical command-injection fix in 4.1.0, and the Members, Simple Shopping Cart and APCu Manager WordPress plugins need updates.",
            url: "https://fittoprompt.com/security/issues/2026-11-23.html",
            pressure: "elevated",
            itemCount: 11
        },
        {
            date: "2026-11-22",
            issueNumber: 19,
            title: "A file upload can run code through Ghostscript, and Fastify login checks can be skipped",
            summary: "A Ghostscript flaw can turn an ordinary file upload into code running on the server, five Fastify add-on bugs can skip login checks, and the Nexter Blocks Pro WordPress plugin can make a visitor an administrator.",
            url: "https://fittoprompt.com/security/issues/2026-11-22.html",
            pressure: "high",
            itemCount: 11
        },
        {
            date: "2026-11-21",
            issueNumber: 18,
            title: "Attackers are using an Apache Roller bug; nginx and PHP need updates too",
            summary: "CISA says attackers are exploiting an Apache Roller bug that needs no login, nginx has a public exploit for its HTTP/2 bug, PHP's phpAfterShell fix is out, and a WordPress plugin can be hit with a single web request.",
            url: "https://fittoprompt.com/security/issues/2026-11-21.html",
            pressure: "high",
            itemCount: 14
        },
        {
            date: "2026-11-20",
            issueNumber: 17,
            title: "Drupal installer bug can let strangers take over sites; PHP fixes seven critical flaws",
            summary: "Drupal fixed a critical installer bug that can let a stranger take over a site, PHP's new releases fix seven critical flaws, and a VMware vCenter bug has been used in attacks since September.",
            url: "https://fittoprompt.com/security/issues/2026-11-20.html",
            pressure: "high",
            itemCount: 12
        },
        {
            date: "2026-11-19",
            issueNumber: 16,
            title: "NGINX with HTTP/2 can let strangers run code on your server; update to 1.30.7 or 1.31.9",
            summary: "NGINX with HTTP/2 turned on can let a stranger run code, WordPress 7.1.5 fixes 20 security issues, PHP ships critical fixes today, and CISA lists REDCap and Apache Axis 1.x as exploited.",
            url: "https://fittoprompt.com/security/issues/2026-11-19.html",
            pressure: "high",
            itemCount: 16
        },
        {
            date: "2026-11-18",
            issueNumber: 15,
            title: "Java4Shell can let strangers run code on Jenkins, Jira and Keycloak; update Java now",
            summary: "Java4Shell can let strangers run code on Jenkins, Jira and Keycloak, Apache Roller is being exploited, and Microsoft's agent-framework Python package shipped two credential stealers.",
            url: "https://fittoprompt.com/security/issues/2026-11-18.html",
            pressure: "high",
            itemCount: 14
        },
        {
            date: "2026-11-17",
            issueNumber: 14,
            title: "Hijacked Optimizely scripts hit 178 sites; WordPress Soledad theme has a no-login bug",
            summary: "Optimizely scripts on 178 organizations' sites carried a card skimmer, Soledad 8.7.7 and earlier has a no-login code bug, phpMyFAQ needs 4.1.12, and attackers are chaining LiteLLM and Starlette bugs.",
            url: "https://fittoprompt.com/security/issues/2026-11-17.html",
            pressure: "high",
            itemCount: 15
        },
        {
            date: "2026-11-16",
            issueNumber: 13,
            title: "Four WordPress plugins have critical bugs, and attackers are using AI agents to steal AI keys",
            summary: "Document Library Pro, Advanced Form Integration, Estatik and Give Peer-to-Peer need updates, Apache Shiro can let anyone log in as a known user, and Amazon describes AI agents hunting for AI keys.",
            url: "https://fittoprompt.com/security/issues/2026-11-16.html",
            pressure: "elevated",
            itemCount: 12
        },
        {
            date: "2026-11-15",
            issueNumber: 12,
            title: "Fake Claude Code extension traced to a stolen key; WordPress plugins need updates",
            summary: "Cursor says a stolen Fireworks AI key led to a trojan Claude Code extension, four WordPress plugins have takeover or code-running bugs, and UnrealIRCd 6.2.7.1 fixes a bug attackers are exploiting.",
            url: "https://fittoprompt.com/security/issues/2026-11-15.html",
            pressure: "elevated",
            itemCount: 12
        },
        {
            date: "2026-11-14",
            issueNumber: 11,
            title: "PostgreSQL fixes a 22-year-old code-running bug, and an AI hacking tool gets an FBI alert",
            summary: "PostgreSQL 18.7, 17.12, 16.16, 15.20 and 14.25 fix a 22-year-old bug that can run code on the server, OpenMage and FrankenPHP have critical fixes, and the FBI warns about the AI hacking tool ARTEX.",
            url: "https://fittoprompt.com/security/issues/2026-11-14.html",
            pressure: "elevated",
            itemCount: 16
        },
        {
            date: "2026-11-13",
            issueNumber: 10,
            title: "PHP's code-running bugs are now exploited, and CISA lists two Barracuda flaws",
            summary: "PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35 fix two remote code execution bugs that CISA lists as exploited, Barracuda gateways are being attacked through two chained bugs, and MongoDB has a critical crash bug.",
            url: "https://fittoprompt.com/security/issues/2026-11-13.html",
            pressure: "critical",
            itemCount: 18
        },
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
