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
            summary: "CISA confirms attacks on a WordPress core upgrade flaw, HTTP2Shell needs host-level Brotli patching, Node.js security releases land November 11, Tomcat fixes three critical bugs, and a 2016 Struts flaw is under attack again.",
            url: "https://fittoprompt.com/security/issues/2026-11-04.html",
            pressure: "critical",
            itemCount: 18
        }
    ]
};

function getAllPatchIssues() {
    return PATCH_DATA.issues.slice();
}
