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
            summary: "CISA confirms attacks on a WordPress core upgrade flaw, HTTP2Shell still needs host-level Brotli patching, cPGuard's update channel shipped a backdoor, and stolen LLM keys are running up bills near $1 million.",
            url: "https://fittoprompt.com/security/issues/2026-11-04.html",
            pressure: "critical",
            itemCount: 14
        }
    ]
};

function getAllPatchIssues() {
    return PATCH_DATA.issues.slice();
}
