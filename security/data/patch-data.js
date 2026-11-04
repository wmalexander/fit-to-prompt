/**
 * Fit to Patch issue data. Newest first. This file is the source of truth for the
 * /security/ archive and is updated by /build-security-issue on every run.
 */
const PATCH_DATA = {
    meta: {
        title: "Fit to Patch",
        subtitle: "The daily web security briefing",
        buttondownUsername: "fittopatch",
        lastUpdated: "2026-11-04"
    },
    issues: [
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
