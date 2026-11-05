/**
 * Fit to Patch issue data. Newest first. This file is the source of truth for the
 * /security/ archive and is updated by /build-security-issue on every run.
 */
const PATCH_DATA = {
    meta: {
        title: "Fit to Patch",
        subtitle: "The daily web security briefing",
        buttondownUsername: "fittopatch",
        lastUpdated: "2026-11-05"
    },
    issues: [
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
