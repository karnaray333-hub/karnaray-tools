/* ═══════════════════════════════════════════════════
   ToolsAI Pro — script.js
   Auto-renders "Other Free Tools" grid on every page.
   Requires tools-data.js to be loaded first.
═══════════════════════════════════════════════════ */

(function () {

  /* ── Icon wrap colours ── */
  var ICON_STYLES = {
    "c-pdf":  "background:rgba(255,101,132,0.14);border:1px solid rgba(255,101,132,0.25);",
    "c-img":  "background:rgba(6,182,212,0.14);border:1px solid rgba(6,182,212,0.25);",
    "c-tool": "background:rgba(108,99,255,0.14);border:1px solid rgba(108,99,255,0.25);",
    "c-calc": "background:rgba(67,233,123,0.14);border:1px solid rgba(67,233,123,0.25);",
    "c-hlth": "background:rgba(247,151,30,0.14);border:1px solid rgba(247,151,30,0.25);",
    "c-ai":   "background:rgba(167,139,250,0.16);border:1px solid rgba(167,139,250,0.3);",
    "c-yt":   "background:rgba(255,68,68,0.15);border:1px solid rgba(255,68,68,0.3);"
  };

  /* ── Card hover colours ── */
  var CAT_CLASS = {
    pdf:  "pdf",
    img:  "img",
    tool: "tool",
    calc: "calc",
    hlth: "hlth",
    ai:   "ai",
    yt:   "yt"
  };

  /* ── Badge HTML ── */
  var BADGE_HTML = {
    free: '<span class="oft-badge free">FREE</span>',
    pro:  '<span class="oft-badge pro">PRO</span>',
    new:  '<span class="oft-badge new">NEW</span>',
    ai:   '<span class="oft-badge" style="background:rgba(167,139,250,0.15);color:#a78bfa;border:1px solid rgba(167,139,250,0.3);">AI</span>'
  };

  /* ── Find grid container ── */
  var grid = document.getElementById("oftGrid");
  if (!grid) return; /* No grid on this page — exit */

  /* ── Detect current page filename ── */
  var currentFile = window.location.pathname.split("/").pop() || "index.html";

  /* ── Filter out current tool ── */
  var otherTools = TOOLS_DATA.filter(function (t) {
    return t.url !== currentFile;
  });

  /* ── Update subtitle count ── */
  var sub = document.querySelector(".oft-sub");
  if (sub) {
    var total = TOOLS_DATA.length;
    sub.textContent =
      "All " + total + " tools — no signup required, no files uploaded, 100% private & browser-based.";
  }

  /* ── Update "View All" link count ── */
  var viewAll = document.querySelector(".oft-view-all");
  if (viewAll) {
    viewAll.innerHTML = "View All " + TOOLS_DATA.length + " Free Tools &nbsp;\u2192";
  }

  /* ── Build HTML ── */
  var html = "";
  otherTools.forEach(function (t) {
    var catClass   = CAT_CLASS[t.cat] || "";
    var iconStyle  = ICON_STYLES[t.icon] || "";
    var badgeHtml  = BADGE_HTML[t.badge] || "";

    html +=
      '<a class="oft-tool-card ' + catClass + '" href="' + t.url + '">' +
        '<div class="oft-icon-wrap" style="' + iconStyle + '">' + t.svg + '</div>' +
        '<span class="oft-tool-name">' + t.name + '</span>' +
        badgeHtml +
      '</a>';
  });

  grid.innerHTML = html;

})();
