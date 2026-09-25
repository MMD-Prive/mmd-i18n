/* MMD LINE job briefs · Webflow /internal/admin/jobs/all owner section.
   Mount: <div id="mmd-line-job-briefs-owner"></div> after the canonical
   mmd-i18n page dictionary. API authority remains admin-worker. */
(function () {
  "use strict";
  var root = document.getElementById("mmd-line-job-briefs-owner");
  if (!root || root.dataset.mmdLineBriefsMounted) return;
  root.dataset.mmdLineBriefsMounted = "1";
  var ENDPOINT = "/v1/admin/model/line-briefs";
  var items = [], filter = "all", startDate = "", editing = null, busy = false;
  var fallback = {
    "jobBrief.owner.title": "Jobs from LINE briefs", "jobBrief.owner.intro": "Create a brief and review interest here.",
    "jobBrief.owner.new": "New brief", "jobBrief.owner.empty": "No briefs in this view.",
    "jobBrief.owner.loading": "Loading briefs…", "jobBrief.owner.error": "Briefs are unavailable. Try again.",
    "jobBrief.owner.saved": "Saved", "jobBrief.owner.save": "Save draft", "jobBrief.owner.publish": "Publish",
    "jobBrief.owner.close": "Close", "jobBrief.owner.cancel": "Cancel brief", "jobBrief.owner.edit": "Edit",
    "jobBrief.owner.select": "Select", "jobBrief.owner.reject": "Do not select", "jobBrief.owner.interested": "Interested",
    "jobBrief.owner.notInterested": "Not interested", "jobBrief.owner.selected": "Selected",
    "jobBrief.owner.pending": "Pending review", "jobBrief.owner.applicantReview": "Review application",
    "jobBrief.owner.confirmReview": "I reviewed this application", "jobBrief.owner.folderLink": "Open Folder link review",
    "jobBrief.owner.filter.all": "All", "jobBrief.owner.filter.draft": "Draft",
    "jobBrief.owner.filter.published": "Published", "jobBrief.owner.filter.closed": "Closed",
    "jobBrief.owner.filter.cancelled": "Cancelled", "jobBrief.owner.filter.expired": "Expired",
    "jobBrief.owner.form.title": "Title", "jobBrief.owner.form.start": "Start in Bangkok time",
    "jobBrief.owner.form.close": "Close interest in Bangkok time", "jobBrief.owner.form.area": "Area to share",
    "jobBrief.owner.form.format": "Work format", "jobBrief.owner.form.duties": "Model duties",
    "jobBrief.owner.form.customers": "Customers", "jobBrief.owner.form.hours": "Hours",
    "jobBrief.owner.form.models": "Models needed", "jobBrief.owner.form.publicNote": "Note for models",
    "jobBrief.owner.form.internalNote": "Internal note", "jobBrief.owner.form.reason": "Reason",
    "jobBrief.owner.status.draft": "Draft", "jobBrief.owner.status.published": "Open",
    "jobBrief.owner.status.closed": "Closed", "jobBrief.owner.status.cancelled": "Cancelled",
    "jobBrief.owner.status.expired": "Expired", "jobBrief.owner.back": "Back to jobs",
    "jobBrief.owner.reviewOnly": "Interest is a request. It does not confirm a job.",
    "jobBrief.owner.retry": "Retry", "jobBrief.owner.responseVersion": "This response changed. Refresh and review it again.",
    "jobBrief.owner.stage.existing_bound": "Verified Model", "jobBrief.owner.stage.application_required": "Application needed",
    "jobBrief.owner.stage.pending_review": "Application under review",
    "jobBrief.owner.filter.startDate": "Start date", "jobBrief.owner.unit.hours": "hours", "jobBrief.owner.unit.models": "models"
  };
  function t(key) {
    var dict = window.I18N_DICT || {};
    var lang = String(localStorage.getItem("mmd_lang") || "th").toLowerCase();
    return (dict[lang] && dict[lang][key]) || (dict.th && dict.th[key]) || fallback[key] || key;
  }
  function esc(value) { return String(value == null ? "" : value).replace(/[&<>"']/g, function (x) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[x];
  }); }
  function datetime(iso) {
    if (!iso) return "";
    var date = new Date(iso);
    if (!Number.isFinite(date.getTime())) return "";
    return new Intl.DateTimeFormat("th-TH", { timeZone: "Asia/Bangkok", day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: false }).format(date);
  }
  function localDatetime(iso) {
    if (!iso) return "";
    var parts = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date(iso));
    return parts.replace(" ", "T");
  }
  function api(body) {
    return fetch(ENDPOINT, { method: "POST", credentials: "include", cache: "no-store",
      headers: { "content-type": "application/json", accept: "application/json" }, body: JSON.stringify(body) })
      .then(function (response) { return response.json().then(function (data) {
        if (!response.ok || !data || data.ok !== true) throw new Error(data && data.error || "brief_unavailable");
        return data;
      }); });
  }
  function notice(message, error) {
    var node = root.querySelector("[data-mmd-brief-notice]");
    if (node) { node.textContent = message; node.dataset.error = error ? "1" : "0"; }
  }
  var css = document.createElement("style");
  css.textContent = '#mmd-line-job-briefs-owner{--lb-bg:#11100e;--lb-panel:#1b1915;--lb-text:#fff8e9;--lb-muted:#d7cdb9;--lb-gold:#f3d48a;--lb-line:#6b5d42;--lb-error:#ffaaa3;color:var(--lb-text);font:15px/1.55 "Noto Sans Thai",system-ui,sans-serif}#mmd-line-job-briefs-owner *{box-sizing:border-box}#mmd-line-job-briefs-owner .lb-shell{background:var(--lb-bg);border:1px solid var(--lb-line);border-radius:20px;padding:clamp(16px,3vw,28px);max-width:1120px;margin:20px auto}#mmd-line-job-briefs-owner .lb-head{display:flex;gap:12px;justify-content:space-between;align-items:start;flex-wrap:wrap}#mmd-line-job-briefs-owner h2{font:700 clamp(24px,4vw,34px)/1.2 "Noto Sans Thai",system-ui,sans-serif;margin:0;color:var(--lb-text)}#mmd-line-job-briefs-owner p{color:var(--lb-muted);margin:6px 0 0}#mmd-line-job-briefs-owner button,#mmd-line-job-briefs-owner input,#mmd-line-job-briefs-owner textarea,#mmd-line-job-briefs-owner select{font:inherit}#mmd-line-job-briefs-owner button,#mmd-line-job-briefs-owner .lb-link{min-height:44px;padding:9px 14px;border-radius:11px;border:1px solid var(--lb-line);background:#27231c;color:var(--lb-text);cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center}#mmd-line-job-briefs-owner button.lb-primary{background:var(--lb-gold);color:#211908;border-color:var(--lb-gold);font-weight:700}#mmd-line-job-briefs-owner button:disabled{opacity:.55;cursor:not-allowed}#mmd-line-job-briefs-owner :is(button,input,textarea,select,a,summary):focus-visible{outline:3px solid #f7dc9b;outline-offset:2px}#mmd-line-job-briefs-owner .lb-filters,#mmd-line-job-briefs-owner .lb-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}#mmd-line-job-briefs-owner .lb-filters button[aria-pressed="true"]{background:var(--lb-gold);color:#211908}#mmd-line-job-briefs-owner .lb-list{display:grid;gap:11px;margin-top:16px}#mmd-line-job-briefs-owner .lb-card,#mmd-line-job-briefs-owner .lb-form{background:var(--lb-panel);border:1px solid var(--lb-line);border-radius:16px;padding:16px}#mmd-line-job-briefs-owner .lb-card h3{color:var(--lb-text);font-size:19px;line-height:1.3;margin:0}#mmd-line-job-briefs-owner .lb-meta{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px;color:var(--lb-muted)}#mmd-line-job-briefs-owner .lb-meta span{border:1px solid var(--lb-line);border-radius:999px;padding:4px 9px}#mmd-line-job-briefs-owner .lb-status{color:var(--lb-gold);font-weight:700}#mmd-line-job-briefs-owner details{margin-top:12px}#mmd-line-job-briefs-owner summary{cursor:pointer;min-height:44px;display:flex;align-items:center;color:var(--lb-gold)}#mmd-line-job-briefs-owner .lb-response{border-top:1px solid var(--lb-line);padding:12px 0}#mmd-line-job-briefs-owner .lb-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}#mmd-line-job-briefs-owner label{display:grid;gap:5px;color:var(--lb-muted);font-size:13px}#mmd-line-job-briefs-owner input,#mmd-line-job-briefs-owner textarea{width:100%;min-height:44px;border:1px solid var(--lb-line);border-radius:9px;background:#0d0c0a;color:var(--lb-text);padding:10px}#mmd-line-job-briefs-owner textarea{min-height:88px;resize:vertical}#mmd-line-job-briefs-owner [data-mmd-brief-notice][data-error="1"]{color:var(--lb-error)}#mmd-line-job-briefs-owner .lb-wide{grid-column:1/-1}@media(max-width:680px){#mmd-line-job-briefs-owner .lb-grid{grid-template-columns:1fr}#mmd-line-job-briefs-owner .lb-actions button,#mmd-line-job-briefs-owner .lb-actions .lb-link{flex:1 1 100%}}';
  document.head.appendChild(css);
  root.innerHTML = '<section class="lb-shell"><div class="lb-head"><div><h2>' + esc(t("jobBrief.owner.title")) + '</h2><p>' + esc(t("jobBrief.owner.intro")) + '</p></div><a class="lb-link" href="/internal/admin/jobs/all">' + esc(t("jobBrief.owner.back")) + '</a></div><p role="status" aria-live="polite" data-mmd-brief-notice></p><div class="lb-filters" data-mmd-brief-filters></div><div class="lb-list" data-mmd-brief-list></div><details class="lb-form" data-mmd-brief-form><summary>' + esc(t("jobBrief.owner.new")) + '</summary><form data-mmd-brief-fields></form></details><p>' + esc(t("jobBrief.owner.reviewOnly")) + '</p></section>';
  var formPanel = root.querySelector("[data-mmd-brief-form]");
  function renderForm() {
    var f = editing || {};
    formPanel.querySelector("summary").textContent = t(editing ? "jobBrief.owner.edit" : "jobBrief.owner.new");
    var labels = [ ["title", "text", "title", true], ["starts_at_bangkok", "datetime-local", "start", true],
      ["closes_at_bangkok", "datetime-local", "close", false], ["area", "text", "area", true],
      ["format", "text", "format", true], ["duties", "textarea", "duties", true],
      ["customer_count", "number", "customers", true], ["hours", "number", "hours", true],
      ["model_count", "number", "models", true], ["public_note", "textarea", "publicNote", false],
      ["internal_note", "textarea", "internalNote", false] ];
    root.querySelector("[data-mmd-brief-fields]").innerHTML = '<div class="lb-grid">' + labels.map(function (entry) {
      var key = entry[0], type = entry[1], label = t("jobBrief.owner.form." + entry[2]);
      var value = key === "starts_at_bangkok" ? localDatetime(f.starts_at) : key === "closes_at_bangkok" ? localDatetime(f.closes_at) : f[key] == null ? "" : f[key];
      var attrs = 'name="' + key + '" ' + (entry[3] ? 'required ' : '') + (type === "number" ? 'min="' + (key === "hours" ? "0.5" : key === "model_count" ? "1" : "0") + '" step="' + (key === "hours" ? "0.5" : "1") + '" ' : '');
      var input = type === "textarea" ? '<textarea ' + attrs + '>' + esc(value) + '</textarea>' : '<input type="' + type + '" ' + attrs + 'value="' + esc(value) + '">';
      return '<label class="' + (type === "textarea" ? "lb-wide" : "") + '">' + esc(label) + input + '</label>';
    }).join("") + '</div><div class="lb-actions"><button class="lb-primary" type="submit">' + esc(t("jobBrief.owner.save")) + '</button></div>';
  }
  function renderFilters() {
    root.querySelector("[data-mmd-brief-filters]").innerHTML = ["all", "draft", "published", "closed", "cancelled", "expired"].map(function (status) {
      return '<button type="button" data-filter="' + status + '" aria-pressed="' + (filter === status ? "true" : "false") + '">' + esc(t("jobBrief.owner.filter." + status)) + '</button>';
    }).join("") + '<label>' + esc(t("jobBrief.owner.filter.startDate")) + '<input type="date" data-filter-date value="' + esc(startDate) + '"></label>';
  }
  function responseHtml(response, brief) {
    var stage = esc(t("jobBrief.owner.stage." + (response.identity_stage || "application_required")));
    var model = esc(response.model_record_id || response.response_id);
    var selected = response.decision === "selected";
    var ready = response.identity_stage === "existing_bound" || response.identity_stage === "pending_review";
    var interestLabel = t(response.interest === "interested" ? "jobBrief.owner.interested" : "jobBrief.owner.notInterested");
    var decisionLabel = t(response.decision === "selected" ? "jobBrief.owner.selected" : response.decision === "not_selected" ? "jobBrief.owner.reject" : "jobBrief.owner.pending");
    var checkbox = response.identity_stage === "pending_review" ? '<label><input type="checkbox" data-reviewed="' + esc(response.response_id) + '">' + esc(t("jobBrief.owner.confirmReview")) + '</label>' : '';
    var review = response.identity_stage !== "existing_bound" ? '<a class="lb-link" href="/internal/admin/model-applications" target="_blank" rel="noopener">' + esc(t("jobBrief.owner.applicantReview")) + '</a>' : '';
    var folder = response.identity_stage === "existing_bound"
      ? '<a class="lb-link" href="/internal/admin/model-link" target="_blank" rel="noopener">' + esc(t("jobBrief.owner.folderLink")) + '</a>'
      : selected ? '<button type="button" data-prepare="' + esc(brief.brief_id) + '" data-response="' + esc(response.response_id) + '">' + esc(t("jobBrief.owner.folderLink")) + '</button>' : '';
    return '<div class="lb-response"><strong>' + model + '</strong><div class="lb-meta"><span>' + stage + '</span><span>' + esc(interestLabel) + '</span><span>' + esc(decisionLabel) + '</span></div>' + checkbox + '<div class="lb-actions">' + review + folder +
      (response.interest === "interested" && !selected && ready ? '<button type="button" data-select="' + esc(brief.brief_id) + '" data-response="' + esc(response.response_id) + '" data-response-version="' + Number(response.version || 0) + '" data-version="' + Number(brief.version || 0) + '" data-decision="selected">' + esc(t("jobBrief.owner.select")) + '</button>' : '') +
      (response.interest === "interested" && !selected ? '<button type="button" data-select="' + esc(brief.brief_id) + '" data-response="' + esc(response.response_id) + '" data-response-version="' + Number(response.version || 0) + '" data-version="' + Number(brief.version || 0) + '" data-decision="not_selected">' + esc(t("jobBrief.owner.reject")) + '</button>' : '') + '</div></div>';
  }
  function render() {
    renderFilters();
    var shown = items.filter(function (item) { return (filter === "all" || item.status === filter) &&
      (!startDate || localDatetime(item.starts_at).slice(0, 10) === startDate); });
    root.querySelector("[data-mmd-brief-list]").innerHTML = shown.length ? shown.map(function (brief) {
      return '<article class="lb-card"><div class="lb-head"><div><h3>' + esc(brief.title) + '</h3><p>' + esc(datetime(brief.starts_at)) + ' · ' + esc(brief.area) + '</p></div><span class="lb-status">' + esc(t("jobBrief.owner.status." + brief.status)) + '</span></div><div class="lb-meta"><span>' + esc(brief.format) + '</span><span>' + esc(brief.hours) + ' ' + esc(t("jobBrief.owner.unit.hours")) + '</span><span>' + esc(brief.model_count) + ' ' + esc(t("jobBrief.owner.unit.models")) + '</span><span>' + esc(t("jobBrief.owner.interested")) + ': ' + Number(brief.interested_count || 0) + '</span><span>' + esc(t("jobBrief.owner.notInterested")) + ': ' + Number(brief.not_interested_count || 0) + '</span></div><div class="lb-actions">' +
        (["draft", "published"].includes(brief.status) ? '<button type="button" data-edit="' + esc(brief.brief_id) + '">' + esc(t("jobBrief.owner.edit")) + '</button>' : '') +
        (brief.status === "draft" ? '<button class="lb-primary" type="button" data-action="publish" data-id="' + esc(brief.brief_id) + '" data-version="' + Number(brief.version || 0) + '">' + esc(t("jobBrief.owner.publish")) + '</button>' : '') +
        (brief.status === "published" ? '<button type="button" data-action="close" data-id="' + esc(brief.brief_id) + '" data-version="' + Number(brief.version || 0) + '">' + esc(t("jobBrief.owner.close")) + '</button>' : '') +
        (["draft", "published"].includes(brief.status) ? '<button type="button" data-action="cancel" data-id="' + esc(brief.brief_id) + '" data-version="' + Number(brief.version || 0) + '">' + esc(t("jobBrief.owner.cancel")) + '</button>' : '') +
        '</div><details data-detail="' + esc(brief.brief_id) + '"><summary>' + esc(t("jobBrief.owner.interested")) + ' · ' + Number(brief.interested_count || 0) + '</summary><div data-responses="' + esc(brief.brief_id) + '"></div></details></article>';
    }).join("") : '<p>' + esc(t("jobBrief.owner.empty")) + '</p>';
  }
  async function load() {
    if (busy) return;
    busy = true; notice(t("jobBrief.owner.loading"), false);
    try { var data = await api({ action: "list" }); items = data.items || []; render(); notice("", false); }
    catch (error) { notice(t("jobBrief.owner.error") + " " + error.message, true); }
    finally { busy = false; }
  }
  root.addEventListener("click", async function (event) {
    var target = event.target.closest("button[data-filter],button[data-edit],button[data-action],button[data-select],button[data-prepare]");
    if (!target || busy) return;
    if (target.dataset.filter) { filter = target.dataset.filter; render(); return; }
    if (target.dataset.edit) { editing = items.find(function (x) { return x.brief_id === target.dataset.edit; }) || null; renderForm(); formPanel.open = true; formPanel.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    busy = true; target.disabled = true;
    try {
      if (target.dataset.action) {
        var command = { action: target.dataset.action, brief_id: target.dataset.id, version: Number(target.dataset.version) };
        if (command.action === "close" || command.action === "cancel") {
          command.reason = window.prompt(t("jobBrief.owner.form.reason")) || "";
          if (!command.reason.trim()) return;
        }
        await api(command);
      } else if (target.dataset.prepare) {
        await api({ action: "prepare_link", brief_id: target.dataset.prepare, response_id: target.dataset.response });
        window.location.assign("/internal/admin/model-link");
        return;
      } else if (target.dataset.select) {
        var reviewed = root.querySelector('input[data-reviewed="' + CSS.escape(target.dataset.response) + '"]');
        await api({ action: "select", brief_id: target.dataset.select, version: Number(target.dataset.version),
          response_id: target.dataset.response, response_version: Number(target.dataset.responseVersion),
          decision: target.dataset.decision, application_reviewed: !!(reviewed && reviewed.checked) });
      }
      notice(t("jobBrief.owner.saved"), false);
    } catch (error) { notice(error.message === "response_version_conflict" ? t("jobBrief.owner.responseVersion") : t("jobBrief.owner.error") + " " + error.message, true); }
    finally { busy = false; target.disabled = false; await load(); }
  });
  root.addEventListener("change", function (event) {
    if (event.target.matches("input[data-filter-date]")) { startDate = event.target.value; render(); }
  });
  root.addEventListener("toggle", async function (event) {
    var detail = event.target;
    if (!detail.matches || !detail.matches("details[data-detail]") || !detail.open) return;
    var id = detail.dataset.detail;
    var slot = detail.querySelector("[data-responses]");
    if (!slot) return;
    slot.textContent = t("jobBrief.owner.loading");
    try { var data = await api({ action: "detail", brief_id: id });
      slot.innerHTML = (data.responses || []).map(function (response) { return responseHtml(response, data.brief); }).join("") || '<p>' + esc(t("jobBrief.owner.empty")) + '</p>';
    } catch (error) { slot.textContent = t("jobBrief.owner.error") + " " + error.message; }
  }, true);
  root.querySelector("[data-mmd-brief-fields]").addEventListener("submit", async function (event) {
    event.preventDefault(); if (busy) return;
    busy = true;
    var form = new FormData(event.target);
    var fields = Object.fromEntries(form.entries());
    fields.customer_count = Number(fields.customer_count);
    fields.hours = Number(fields.hours);
    fields.model_count = Number(fields.model_count);
    try {
      var action = editing ? "update" : "create";
      await api({ action: action, ...(editing ? { brief_id: editing.brief_id, version: editing.version } : {}), fields: fields });
      editing = null; formPanel.open = false; renderForm(); notice(t("jobBrief.owner.saved"), false);
    } catch (error) { notice(t("jobBrief.owner.error") + " " + error.message, true); }
    finally { busy = false; await load(); }
  });
  formPanel.addEventListener("toggle", function () { if (!formPanel.open && editing) { editing = null; renderForm(); } });
  renderForm(); load();
})();
