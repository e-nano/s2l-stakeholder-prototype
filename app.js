const state = {
  role: "sales",
  view: "overview",
  assignedOperator: null,
  noteSaved: false,
  selectedOperator: "sarah",
  customerDetail: null,
  workOrderCreated: false,
  smartCaseOpened: false,
  customerAdded: false,
  areaAdded: false,
  boundaryPublished: false,
  portalOrderSubmitted: false,
  paymentPaid: false,
  farmerLoggedIn: false,
  farmerRegistrationSubmitted: false,
  supportSubmitted: false,
  unassignedClaimSubmitted: false,
  unassignedClaimApproved: false,
  phoneSetupStep: "summary",
  pendingPhoneNumber: "",
  phoneVerificationError: null,
  dispatchReconciled: false,
  outboundBooked: false,
  outboundLabelPrinted: false,
  outboundHandedOver: false,
  outboundCarrierDelivered: false,
  labParcelReconciled: false,
  returnPodsReleased: false,
  returnBooked: false,
  returnLabelPrinted: false,
  returnCarrierDelivered: false,
  returnPodsReceived: false,
  phoneProfiles: {
    sales: { number: "+44 7700 900 141", verified: true, alerts: true, verifiedAt: "12 Aug 2026" },
    sales_manager: { number: "+44 7700 900 131", verified: true, alerts: true, verifiedAt: "4 Jul 2026" },
    manager: { number: "+44 7700 900 151", verified: true, alerts: true, verifiedAt: "19 Aug 2026" },
    operator: { number: "+44 7700 900 162", verified: true, alerts: true, verifiedAt: "2 Sep 2026" },
    admin: { number: "+44 7700 900 171", verified: true, alerts: true, verifiedAt: "8 Jun 2026" },
    farmer: { number: "+44 7700 900 142", verified: true, alerts: true, verifiedAt: "15 Mar 2025" },
    finance: { number: "+44 7700 900 181", verified: true, alerts: true, verifiedAt: "21 Jul 2026" },
    lab: { number: "+44 7700 900 191", verified: true, alerts: true, verifiedAt: "30 Aug 2026" },
  },
  labScanned: false,
  linerTransferred: false,
  aggregationComplete: false,
  resultUploaded: false,
  reportPublished: false,
  notificationPanelOpen: false,
  notifications: [
    {
      id: "order-so-1054-submitted",
      audience: "manager",
      type: "order",
      reference: "SO-1054",
      title: "New sales-assisted order",
      customer: "Westcombe Farms",
      detail: "Autumn soil analysis · 4 fields · requested 18 Sep",
      readiness: "Ready for planning review",
      source: "Sales-assisted",
      time: "Today · 08:36",
      smsStatus: "delivered",
      read: false,
      actionLabel: "Open order",
    },
    {
      id: "assignment-job-147-sarah",
      audience: "operator",
      assignee: "Sarah Lewis",
      type: "assignment",
      reference: "JOB-147",
      title: "Job assigned to you",
      customer: "Manor Farm",
      detail: "South Field · today 14:30 · assigned by Daniel Wright",
      readiness: "Assigned · not yet started",
      source: "Sampling Manager",
      time: "Yesterday · 16:20",
      smsStatus: "delivered",
      read: false,
      active: true,
      actionLabel: "View job details",
    },
    {
      id: "support-sup-201-fallback",
      audience: "sales_manager",
      type: "support",
      reference: "SUP-201",
      title: "Farmer support needs routing",
      customer: "Oakridge Farm",
      detail: "Access question · no eligible representative assigned",
      readiness: "Fallback queue · assign a representative",
      source: "Farmer portal",
      time: "Today · 08:12",
      smsStatus: "missing",
      read: false,
      actionLabel: "Open support request",
    },
  ],
};

const roles = {
  sales: {
    name: "Emma Clarke",
    title: "Regional Account Manager",
    initials: "EC",
    accent: "#b46546",
    nav: [
      ["overview", "⌂", "Overview"], ["customers", "C", "Customers"], ["orders", "O", "Orders"],
      ["unassigned", "U", "Unassigned farmers", 2], ["support", "?", "Farmer support"],
      ["areas", "A", "Farms / areas"], ["results", "R", "Results"], ["issues", "!", "Issues", 2],
    ],
  },
  sales_manager: {
    name: "Olivia Grant",
    title: "Sales Manager",
    initials: "OG",
    accent: "#8c6239",
    nav: [
      ["overview", "⌂", "Commercial overview"], ["team", "T", "Team sales"], ["customers", "C", "All customers"],
      ["unassigned", "U", "Unassigned farmers", 2], ["claims", "A", "Assignment requests", 1],
      ["orders", "O", "Orders"], ["support", "?", "Support & disputes", 1],
    ],
  },
  manager: {
    name: "Daniel Wright",
    title: "Sampling Manager",
    initials: "DW",
    accent: "#3979a8",
    nav: [
      ["overview", "⌂", "Operations"], ["jobs", "J", "Jobs", 3], ["schedule", "S", "Schedule"],
      ["operators", "P", "Operators"], ["logistics", "↔", "Logistics", 3], ["areas", "A", "Farms & areas"], ["issues", "!", "Issues", 2],
    ],
  },
  operator: {
    name: "Sarah Lewis",
    title: "Field Operator",
    initials: "SL",
    accent: "#467847",
    nav: [["overview", "⌂", "My day"], ["jobs", "J", "My jobs", 3], ["dispatch", "⇧", "Dispatch & collections", 1], ["shipments", "↔", "My shipments"], ["notes", "N", "Field notes"]],
  },
  admin: {
    name: "Helen Brooks",
    title: "Tenant Administrator",
    initials: "HB",
    accent: "#315f72",
    nav: [
      ["overview", "⌂", "Admin home"], ["customers", "C", "Customers"], ["orders", "O", "Orders"],
      ["maps", "M", "Farms & maps", 2], ["reports", "R", "Reports"], ["users", "U", "Users & access"], ["integrations", "I", "Integrations"],
    ],
  },
  farmer: {
    name: "Tom Green",
    title: "Green Estate",
    initials: "TG",
    accent: "#5d7f3c",
    nav: [
      ["login", "↪", "Login / register"], ["overview", "⌂", "Home"], ["orders", "O", "My orders"], ["new-order", "+", "New order"],
      ["support", "?", "Contact support"], ["maps", "M", "My farms & maps"], ["reports", "R", "Reports", 1], ["payments", "£", "Payments & invoices"],
    ],
  },
  finance: {
    name: "Priya Shah",
    title: "Finance Manager",
    initials: "PS",
    accent: "#7d5b94",
    nav: [
      ["overview", "⌂", "Overview"], ["ready", "✓", "Ready to invoice", 8], ["orders", "O", "Orders"],
      ["reconciliation", "↔", "Reconciliation", 1], ["invoices", "I", "Invoices"], ["exceptions", "!", "Exceptions", 3],
    ],
  },
  lab: {
    name: "Maya Patel",
    title: "Laboratory Technician",
    initials: "MP",
    accent: "#aa5a45",
    nav: [
      ["overview", "O", "Active Orders", 3], ["incoming", "⇩", "Incoming parcels", 2], ["receiving", "S", "Sample receiving", 12],
      ["returns", "↺", "Empty pod returns", 1], ["aggregations", "A", "Aggregations", 3], ["results", "R", "Reports"], ["exceptions", "!", "Exceptions", 2],
    ],
  },
};

const operators = [
  { id: "sarah", initials: "SL", name: "Sarah Lewis", distance: "23 min away", workload: "4.5h workload", kit: "Corer-12 · ATV-04 · SC-008", skill: "Powered corer · 0–300 mm", fit: "92% fit", outcome: "96% first-time completion", recommended: true },
  { id: "james", initials: "JM", name: "James Morgan", distance: "51 min away", workload: "6.0h workload", kit: "Corer-07 · ATV-02 · SC-014", skill: "Powered corer · 0–250 mm", fit: "76% fit", outcome: "91% first-time completion" },
  { id: "pedro", initials: "PR", name: "Pedro Ruiz", distance: "31 min away", workload: "Unavailable after 14:00", kit: "Manual auger · Van-09 · SC-011", skill: "Manual methods only", fit: "48% fit", outcome: "94% first-time completion" },
];

const main = document.querySelector("#main-content");
const nav = document.querySelector("#primary-nav");
const roleSelect = document.querySelector("#role-select");
const noteModal = document.querySelector("#note-modal");
const assignmentModal = document.querySelector("#assignment-modal");
const workOrderModal = document.querySelector("#work-order-modal");
const customerModal = document.querySelector("#customer-modal");
const areaModal = document.querySelector("#area-modal");
const noteFab = document.querySelector("#operator-note-fab");
const toast = document.querySelector("#toast");
const userProfileButton = document.querySelector("#user-profile-button");
const notificationButton = document.querySelector("#notification-button");
const notificationCount = document.querySelector("#notification-count");
const notificationPanel = document.querySelector("#notification-panel");
const notificationBackdrop = document.querySelector("#notification-backdrop");
const notificationToolbar = document.querySelector("#notification-toolbar");
const notificationList = document.querySelector("#notification-list");
const notificationFooter = document.querySelector("#notification-footer");

function addNotification(notification) {
  const existing = state.notifications.find(item => item.id === notification.id);
  if (existing) {
    Object.assign(existing, notification);
    return;
  }
  state.notifications.unshift({ ...notification, read: false });
}

function notificationsForCurrentRole() {
  return state.notifications.filter(notification => {
    if (notification.audience !== state.role) return false;
    if (state.role === "operator" && notification.assignee) return notification.assignee === roles.operator.name;
    return true;
  });
}

function currentNotificationReadiness(notification) {
  if (notification.reference === "SO-1058") return state.paymentPaid ? "Deposit verified · ready for planning" : "Awaiting £354 deposit · do not schedule";
  if (notification.reference === "ACC-2045") return notification.active === false ? notification.readiness : state.unassignedClaimApproved ? "Approved · Emma Clarke is primary representative" : "Awaiting Sales Manager decision";
  if (notification.type === "assignment" && notification.active === false) return "Assignment changed · view current record";
  return notification.readiness;
}

function notificationIcon(type) {
  return { order: "O", assignment: "J", support: "?", claim: "A", account: "C" }[type] || "N";
}

function smsDeliveryLabel(statusValue) {
  return {
    delivered: ["SMS delivered", "green"],
    submitted: ["SMS submitted", "blue"],
    failed: ["SMS failed · in-app retained", "red"],
    missing: ["SMS unavailable · missing number", "amber"],
  }[statusValue] || null;
}

function renderNotifications() {
  const items = notificationsForCurrentRole();
  const unread = items.filter(notification => !notification.read).length;
  const farmerEntry = state.role === "farmer" && !state.farmerLoggedIn;
  userProfileButton.hidden = farmerEntry;
  notificationButton.hidden = farmerEntry;
  notificationCount.hidden = unread === 0;
  notificationCount.textContent = unread > 9 ? "9+" : String(unread);
  notificationButton.classList.toggle("has-unread", unread > 0);
  notificationButton.setAttribute("aria-label", unread ? `Open notifications · ${unread} unread` : "Open notifications");
  notificationButton.setAttribute("aria-expanded", state.notificationPanelOpen ? "true" : "false");
  notificationPanel.hidden = !state.notificationPanelOpen || farmerEntry;
  notificationBackdrop.hidden = !state.notificationPanelOpen || farmerEntry;
  if (!state.notificationPanelOpen || farmerEntry) return;

  notificationToolbar.innerHTML = `<span><strong>${unread}</strong> unread · ${items.length} total</span>${unread ? `<button type="button" data-notification-action="mark-all">Mark all read</button>` : ""}`;
  notificationList.innerHTML = items.length ? items.map(notification => {
    const smsDelivery = smsDeliveryLabel(notification.smsStatus);
    return `<article class="notification-item ${notification.read ? "" : "is-unread"} ${notification.active === false ? "is-stale" : ""}">
    <div class="notification-item__icon ${notification.type}">${notificationIcon(notification.type)}</div>
    <div class="notification-item__content">
      <div class="notification-item__heading"><span>${notification.title}</span><time>${notification.time}</time></div>
      <strong>${notification.reference} · ${notification.customer}</strong>
      <p>${notification.detail}</p>
      <div class="notification-item__meta"><span>${notification.source}</span><span>${currentNotificationReadiness(notification)}</span></div>
      <div class="notification-channels"><span class="channel-status green">In-app · ${notification.read ? "read" : "unread"}</span>${smsDelivery ? `<span class="channel-status ${smsDelivery[1]}">${smsDelivery[0]}</span>` : ""}</div>
      <button type="button" data-notification-action="open" data-notification-id="${notification.id}">${notification.actionLabel} →</button>
    </div>
  </article>`;
  }).join("") : `<div class="notification-empty"><span>✓</span><h3>No notifications for this role</h3><p>Submitted orders notify Operations and the assigned Sales representative. Saved assignments notify the selected Operator.</p></div>`;
  notificationFooter.innerHTML = state.role === "manager"
    ? `<strong>Operations routing healthy</strong><span>All submitted-order alerts have a responsible Sampling Manager. SMS failure never removes the in-app record or order.</span>`
    : state.role === "operator"
      ? `<strong>Safe assignment alerts</strong><span>In-app alerts recover after reconnect. SMS delivery and reading remain separate from accepting or starting work.</span>`
      : state.role === "sales_manager"
        ? `<strong>Auditable fallback</strong><span>Unroutable Farmer requests stay visible here. They are never broadcast to every salesperson.</span>`
        : `<strong>Two required channels</strong><span>In-app and SMS outcomes are tracked separately. This demo sends no real messages and no provider is selected.</span>`;
}

function iconBadge(label, tone = "") {
  return `<span class="attention-icon ${tone}">${label}</span>`;
}

function status(text, tone) {
  return `<span class="status-pill ${tone}">${text}</span>`;
}

function progress(value, label) {
  return `<div class="progress-cell"><div class="progress-label"><span>${label}</span><strong>${value}%</strong></div><div class="progress-track"><span style="width:${value}%"></span></div></div>`;
}

function pageHeader(eyebrow, title, description, actions = "") {
  return `<header class="page-header"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></div>${actions ? `<div class="page-actions">${actions}</div>` : ""}</header>`;
}

function kpi(label, value, meta, color = "#7bbf45", ring = "") {
  return `<article class="kpi-card" style="--accent:${color}"><div class="kpi-card__top"><span>${label}</span>${ring ? `<span class="mini-ring" style="--progress:${ring};--accent:${color}" data-value="${ring}%"></span>` : ""}</div><div class="kpi-card__value">${value}</div><div class="kpi-card__meta">${meta}</div></article>`;
}

function maskPhoneNumber(number) {
  const digits = number.replace(/\D/g, "");
  return digits.length > 6 ? `+${digits.slice(0, 2)} ••• ••• ${digits.slice(-4)}` : "••••••";
}

function phoneErrorMessage() {
  const errors = {
    invalid: ["Enter a valid mobile number including country code.", "The verification challenge was not created."],
    sending: ["The verification SMS could not be sent.", "Check the number or try again later. The user remains unverified; there is no manual bypass."],
    incorrect: ["That code was not accepted.", "Check the SMS and try again. Verification attempts remain limited by the backend."],
    expired: ["That code has expired.", "Request a new code. The expired challenge cannot verify this number."],
    attempts: ["Too many verification attempts.", "Wait for the server-controlled recovery period before requesting another challenge."],
  };
  const message = errors[state.phoneVerificationError];
  return message ? `<div class="phone-error"><strong>${message[0]}</strong><span>${message[1]}</span></div>` : "";
}

function userProfile() {
  const role = roles[state.role];
  const profile = state.phoneProfiles[state.role];
  if (state.phoneSetupStep === "number") return `${pageHeader("Your profile · Proposed phone setup", "Add or change SMS number", "The number belongs to this user account. It is not inherited from a customer, company or CRM contact.")}
    <section class="profile-layout"><div class="panel"><header class="panel__header"><div><h2>1 · Enter mobile number</h2><p>Include the country code, then request a verification challenge.</p></div></header><div class="panel__body phone-form"><label class="form-field"><span>Mobile number</span><input id="phone-number" inputmode="tel" value="${profile.number}" /></label><label class="terms-check"><input type="checkbox" checked /> I confirm this number belongs to me and may receive required operational SMS alerts.</label>${phoneErrorMessage()}<div class="job-actions"><button class="secondary-button" data-action="phone-cancel">Cancel</button><button class="primary-button" data-action="phone-send-code">Send verification code</button></div><button class="text-button phone-demo-control" data-action="phone-send-failure">Preview SMS sending failure</button><p class="batch-note">Prototype only · this simulates the backend starting a challenge. No SMS is sent and no provider is configured.</p></div></div><aside class="panel"><header class="panel__header"><div><h2>Why verify?</h2><p>Delivery eligibility is checked per user and per event</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>✓ Challenge binds user/session and exact number</span><span>✓ Keep SMS status separate from in-app delivery</span><span>✓ Recheck active role and permission before sending</span><span>— Sending or delivery alone never marks Verified</span></div></div></aside></section>`;
  if (state.phoneSetupStep === "code") return `${pageHeader("Your profile · Proposed phone setup", "Verify your number", `Enter the one-time code sent to ${maskPhoneNumber(state.pendingPhoneNumber)}.`)}
    <section class="profile-layout"><div class="panel"><header class="panel__header"><div><h2>2 · Enter verification code</h2><p>Type or paste the code from the separate verification SMS.</p></div>${status("Challenge active · simulated","blue")}</header><div class="panel__body phone-form"><label class="form-field verification-code"><span>Verification code</span><input id="phone-code" autocomplete="one-time-code" placeholder="Enter code from SMS" /></label><div class="phone-expiry"><span>Time-limited, single-use challenge</span><strong>Expiry policy pending</strong></div>${phoneErrorMessage()}<div class="phone-code-actions"><button class="text-button" data-action="phone-resend">Resend code</button><span>Cooldown and limits are server-controlled</span></div><div class="job-actions"><button class="secondary-button" data-action="phone-change">Change number</button><button class="primary-button" data-action="phone-verify">Verify</button></div><p class="batch-note">The expected code is never returned to the frontend. This prototype simulates a successful backend response after a code is entered.</p></div></div><aside class="panel"><header class="panel__header"><div><h2>Validation and recovery</h2><p>Preview required failure states</p></div></header><div class="panel__body"><div class="phone-error-controls"><button data-action="phone-demo-error" data-phone-error="incorrect">Incorrect code</button><button data-action="phone-demo-error" data-phone-error="expired">Expired code</button><button data-action="phone-demo-error" data-phone-error="attempts">Too many attempts</button></div><div class="readiness-checklist"><span>✓ Backend checks challenge, user/session and exact number</span><span>✓ Resend supersedes the previous challenge</span><span>✓ Changing number invalidates its pending challenge</span><span>— Browser state, delivery receipt or checkbox cannot verify</span></div></div></aside></section>`;
  return `${pageHeader("Your profile", "Contact & SMS", "Review the number used for required operational alerts and its verification status.", `<button class="primary-button" data-action="phone-change">Change number</button>`)}
    <section class="profile-layout"><div class="panel profile-card"><div class="profile-card__identity"><span class="profile-avatar" style="background:${role.accent}">${role.initials}</span><div><span class="eyebrow">${role.title}</span><h2>${role.name}</h2><p>Personal S2L user profile</p></div></div><div class="phone-record"><span><small>Verified mobile</small><strong>${profile.number}</strong></span>${status(profile.verified ? "Verified" : "Not verified",profile.verified ? "green" : "amber")}</div><div class="phone-record"><span><small>Required operational SMS</small><strong>${profile.alerts ? "Enabled for eligible events" : "Unavailable"}</strong></span>${status(profile.alerts ? "Active" : "Attention",profile.alerts ? "blue" : "amber")}</div><p class="batch-note">Last verified ${profile.verifiedAt}. Changing the number requires a new one-time code.</p></div><aside class="stack"><div class="panel"><header class="panel__header"><div><h2>When this number is used</h2><p>Role and permissions are checked at event time</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>${state.role === "operator" ? "✓ Saved job assignments" : state.role === "manager" ? "✓ Newly submitted operational orders" : state.role === "sales" ? "✓ Assigned-customer orders and support" : "✓ Eligible role-based operational alerts"}</span><span>✓ SMS contains a minimal reference and secure sign-in link</span><span>✓ In-app notification remains if SMS fails</span><span>— No marketing or bulk messaging is implied</span></div></div></div><div class="panel"><header class="panel__header"><div><h2>Recent phone audit</h2><p>Per-user history</p></div></header><div class="panel__body activity-list"><div class="activity-item"><span class="activity-dot">✓</span><div><strong>Number verified</strong><p>${profile.number} · user-confirmed code</p><time>${profile.verifiedAt}</time></div></div></div></div></aside></section>`;
}

function salesOverview() {
  return `${pageHeader("North region · Autumn 2026", "Good morning, Emma", "See customer progress, portal activity and where your attention is needed without becoming a gate for farmer orders.", `<button class="secondary-button" data-action="customers">View customers</button><button class="primary-button" data-action="new-order">New work order</button>`)}
    <section class="kpi-grid">
      ${kpi("Active customers", "42", `<span class="trend-up">↑ 3</span> this month`, "#7bbf45")}
      ${kpi("Work in progress", "£186k", "17 active orders", "#3979a8")}
      ${kpi("Sampling complete", "72%", "614 of 852 samples", "#7bbf45", "72")}
      ${kpi("Needs attention", "2", `<span class="trend-warn">1 new today</span>`, "#e9a13b")}
    </section>
    <section class="dashboard-grid">
      <div class="panel">
        <header class="panel__header"><div><h2>Customer delivery overview</h2><p>Current campaigns ordered by next expected milestone</p></div><button class="text-button" data-action="customers">All customers →</button></header>
        <div class="table-wrap"><table class="data-table"><thead><tr><th>Customer / campaign</th><th>Progress</th><th>Next milestone</th><th>Status</th></tr></thead><tbody>
          <tr data-clickable data-action="customer-detail"><td><div class="cell-title"><strong>Green Estate</strong><small>Autumn Soil Analysis · SO-1046</small></div></td><td>${progress(64,"48 / 75")}</td><td><div class="cell-title"><strong>Sampling rescheduled</strong><small>Thu 10 Sep</small></div></td><td>${status("Weather delay","amber")}</td></tr>
          <tr><td><div class="cell-title"><strong>Smith & Sons</strong><small>Precision Nutrient Plan · SO-1042</small></div></td><td>${progress(100,"84 / 84")}</td><td><div class="cell-title"><strong>Report ready</strong><small>Today</small></div></td><td>${status("On track","green")}</td></tr>
          <tr><td><div class="cell-title"><strong>Brown Farming Ltd</strong><small>West Farm Sampling · SO-1051</small></div></td><td>${progress(44,"18 / 41")}</td><td><div class="cell-title"><strong>Fieldwork</strong><small>11 Sep</small></div></td><td>${status("In progress","blue")}</td></tr>
          <tr><td><div class="cell-title"><strong>Westcombe Farms</strong><small>Autumn Soil Analysis · SO-1054</small></div></td><td>${progress(0,"0 / 28")}</td><td><div class="cell-title"><strong>Operator assignment</strong><small>Due today</small></div></td><td>${status("Planning","grey")}</td></tr>
        </tbody></table></div>
      </div>
      <div class="stack">
        <div class="panel"><header class="panel__header"><div><h2>Needs your attention</h2><p>Customer-facing issues and follow-ups</p></div><span class="tag amber">2 open</span></header><div class="panel__body attention-list">
          <div class="attention-item">${iconBadge("!","red")}<div><strong>Green Estate fieldwork delayed</strong><small>Sarah reported flooding. Tom agreed a Thursday return; confirm access Wednesday afternoon.</small></div><time>10:42</time></div>
          <div class="attention-item">${iconBadge("↗")}<div><strong>Customer follow-up requested</strong><small>Brown Farming asked about extending sampling to East Block.</small></div><time>Yesterday</time></div>
        </div>
        <div class="panel"><header class="panel__header"><div><h2>Recent customer activity</h2><p>Field updates, results and commercial actions</p></div></header><div class="panel__body activity-list">
          ${state.portalOrderSubmitted ? `<div class="activity-item"><span class="activity-dot">TG</span><div><strong>Green Estate submitted SO-1058</strong><p>Farmer portal order · ${state.paymentPaid ? "deposit verified and released to planning" : "deposit awaiting payment"}. No salesperson action required.</p><time>Just now</time></div></div>` : ""}
          ${state.reportPublished ? `<div class="activity-item"><span class="activity-dot">MP</span><div><strong>Green Estate report published</strong><p>Final PDF v1 is available to authorised account users.</p><time>Just now</time></div></div>` : ""}
          <div class="activity-item"><span class="activity-dot">SL</span><div><strong>Sarah spoke with Tom at Green Estate</strong><p>Access delay recorded and follow-up suggested.</p><time>Today · 10:42</time></div></div>
          <div class="activity-item"><span class="activity-dot">R</span><div><strong>Smith & Sons report published</strong><p>84 results are available for review.</p><time>Today · 08:15</time></div></div>
          <div class="activity-item"><span class="activity-dot">EC</span><div><strong>You updated SO-1051</strong><p>Added East Block as a potential variation.</p><time>Yesterday · 16:20</time></div></div>
        </div>
      </div>
    </section>`;
}

function salesCustomers() {
  const customers = [
    ["GE", "Green Estate", "Tom Green", "3 farms", "2 open orders", "£18,400", "Weather delay", "amber", "customer-detail"],
    ["SS", "Smith & Sons", "Anna Smith", "4 farms", "1 open order", "£8,850", "Report ready", "green", ""],
    ["BF", "Brown Farming Ltd", "Michael Brown", "2 farms", "2 open orders", "£12,200", "In progress", "blue", ""],
    ["WP", "Westcombe Farms", "Rachel Price", "5 farms", "1 draft order", "£2,680", "Planning", "grey", ""],
    ["HP", "Hilltop Partnership", "Claire Hill", "2 farms", "1 open order", "£6,780", "Results pending", "amber", ""],
    ["LP", "Lower Park Estates", "Henry Cole", "3 farms", "No open orders", "£4,960", "Complete", "green", ""],
  ];
  if (state.customerAdded) customers.unshift(["MF", "Meadowbrook Farms", "Laura Bennett", "1 farm", "No open orders", "£0", "New customer", "blue", ""]);
  return `${pageHeader("Sales · Customer portfolio", "Customers", "A commercial account view across farms, active work, delivery progress and recent contact.", `<button class="secondary-button" data-action="add-customer">Add customer</button><button class="primary-button" data-action="new-order">New work order</button>`)}
    <div class="list-toolbar"><label class="search-field"><span>⌕</span><input aria-label="Search customers" placeholder="Search customer, farm or contact" /></label><div class="filter-chips"><button class="is-active">All 42</button><button>Active work 17</button><button>Needs attention 4</button></div></div>
    <section class="customer-grid">${customers.map(([initials,name,contact,farms,orders,value,label,tone,action]) => `<article class="customer-card" ${action ? `data-action="${action}" tabindex="0"` : ""}><header><span class="customer-monogram small">${initials}</span><div><h2>${name}</h2><p>${contact} · ${farms}</p></div>${status(label,tone)}</header><div class="customer-card__metrics"><span><small>Open work</small><strong>${orders}</strong></span><span><small>2026 value</small><strong>${value}</strong></span></div><footer><span>Last activity ${name === "Green Estate" ? "today, 10:42" : name === "Smith & Sons" ? "today, 08:15" : "yesterday"}</span><button ${action ? `data-action="${action}"` : ""}>Open account →</button></footer></article>`).join("")}</section>`;
}

function salesAreas() {
  return `${pageHeader("Sales · Account geography", "Farms / areas", "See the operational geography used by customer work. Sales can propose missing records; Admin or Operations validates and publishes them.", `<button class="primary-button" data-action="propose-area">Propose missing farm / area</button>`)}
    <div class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Customer</th><th>Farm / Area</th><th>Source</th><th>Operational status</th></tr></thead><tbody><tr><td><strong>Green Estate</strong></td><td><div class="cell-title"><strong>East Meadow</strong><small>${state.boundaryPublished ? "Boundary v4 · 32.1 ha" : "Boundary v3 · correction open"}</small></div></td><td>Authorised SBI import</td><td>${status(state.boundaryPublished ? "Published" : "Admin review",state.boundaryPublished ? "green" : "amber")}</td></tr><tr><td><strong>Westcombe Farms</strong></td><td><div class="cell-title"><strong>Westcombe Farm · 4 fields</strong><small>38 ha · order SO-1056</small></div></td><td>Existing account geography</td><td>${status("Validated","green")}</td></tr><tr><td><strong>Meadowbrook Farms</strong></td><td><div class="cell-title"><strong>Meadowbrook Farm</strong><small>Proposed during customer setup</small></div></td><td>Sales proposal</td><td>${status("Operations validation","blue")}</td></tr></tbody></table></div></div>`;
}

function managerAreas() {
  return `${pageHeader("Operations · Geographic hierarchy", "Farms & areas", "Validate and define the customer → farm → field or zone structure used by jobs, maps and sampling plans.", `<button class="secondary-button">Import boundaries</button><button class="primary-button" data-action="add-area">Define new area</button>`)}
    <section class="area-layout"><div class="panel"><header class="panel__header"><div><h2>Customer geography</h2><p>16 farms · 58 defined fields and zones</p></div><label class="search-field compact"><span>⌕</span><input aria-label="Search farms and areas" placeholder="Search geography" /></label></header><div class="area-tree">
      <article class="area-tree__customer is-open"><header><span class="customer-monogram small">GE</span><div><strong>Green Estate</strong><small>3 farms · 11 areas · 146.2 ha</small></div>${status("Active work","green")}</header><div class="area-tree__farms"><div class="area-tree__farm"><div><strong>⌄ Home Farm</strong><small>5 fields · 68.4 ha</small></div><span>SO-1046 active</span></div><div class="area-chips"><button>North Field · 18.4 ha</button><button>Home Close · 14.2 ha</button><button>Orchard · 9.8 ha</button><button>Long Meadow · 13.4 ha</button>${state.areaAdded ? `<button class="is-new">South Paddock · 12.6 ha</button>` : `<button>South Field · 12.6 ha</button>`}</div><div class="area-tree__farm"><div><strong>› East Meadow</strong><small>2 fields · 31.6 ha</small></div>${status("Access blocked","amber")}</div><div class="area-tree__farm"><div><strong>› North Holding</strong><small>4 fields · 46.2 ha</small></div><span>Historic</span></div></div></article>
      <article class="area-tree__customer"><header><span class="customer-monogram small">SS</span><div><strong>Smith & Sons</strong><small>4 farms · 16 areas · 212.8 ha</small></div>${status("Report ready","green")}</header></article>
      <article class="area-tree__customer"><header><span class="customer-monogram small">BF</span><div><strong>Brown Farming Ltd</strong><small>2 farms · 9 areas · 118.5 ha</small></div>${status("In progress","blue")}</header></article>
      <article class="area-tree__customer"><header><span class="customer-monogram small">WP</span><div><strong>Westcombe Farms</strong><small>5 farms · 22 areas · 284.1 ha</small></div>${status("Planning","grey")}</header></article>
    </div></div><aside class="panel"><header class="panel__header"><div><h2>Area definition</h2><p>Home Farm · Green Estate</p></div></header><div class="area-preview"><div class="area-preview__field"><span>North Field<small>18.4 ha</small></span><i>24 planned samples</i></div><div class="area-preview__field second"><span>Home Close<small>14.2 ha</small></span><i>18 planned samples</i></div><div class="area-preview__field third"><span>Orchard<small>9.8 ha</small></span><i>12 planned samples</i></div></div><div class="panel__body"><div class="readiness-checklist"><strong>Geographic structure is reusable</strong><span>✓ Linked to Green Estate</span><span>✓ Farm access details inherited</span><span>✓ Available for future work orders</span><span>✓ Sampling history retained by area</span></div><button class="secondary-button full-width" data-action="add-area">Add field or zone</button></div></aside></section>`;
}

function salesOrders() {
  return `${pageHeader("Sales · Commercial delivery", "Work orders", "Follow every order from agreement through planning, fieldwork, results and invoice readiness.", `<button class="secondary-button">Export</button><button class="primary-button" data-action="new-order">New work order</button>`)}
    <section class="kpi-grid compact-kpis">${kpi("Open orders", state.workOrderCreated ? "18" : "17", "£186k committed", "#3979a8")}${kpi("Awaiting planning", state.workOrderCreated ? "5" : "4", "Operations handoff needed", "#e9a13b")}${kpi("Ready to report", "6", "£31.2k delivered", "#7bbf45")}${kpi("At risk", "2", "Weather and result delay", "#c8534d")}</section>
    <div class="panel"><header class="panel__header"><div><h2>All active work orders</h2><p>North region · sorted by next action</p></div><div class="filter-chips"><button class="is-active">Active</button><button>Draft</button><button>Complete</button></div></header><div class="table-wrap"><table class="data-table order-table"><thead><tr><th>Order</th><th>Customer</th><th>Scope</th><th>Delivery</th><th>Value</th><th>Status</th></tr></thead><tbody>
      ${state.portalOrderSubmitted ? `<tr class="new-row"><td><div class="cell-title"><strong>SO-1058</strong><small>Source · Farmer portal</small></div></td><td><div class="cell-title"><strong>Green Estate</strong><small>No salesperson required</small></div></td><td><div class="cell-title"><strong>18 samples</strong><small>East Meadow · Soil analysis</small></div></td><td>${progress(0,state.paymentPaid ? "Released to planning" : "Awaiting deposit")}</td><td class="money">£1,416</td><td>${status(state.paymentPaid ? "Planning" : "Payment due",state.paymentPaid ? "blue" : "amber")}</td></tr>` : ""}
      ${state.workOrderCreated ? `<tr class="new-row"><td><div class="cell-title"><strong>SO-1056</strong><small>Created just now</small></div></td><td><div class="cell-title"><strong>Westcombe Farms</strong><small>Westcombe Farm</small></div></td><td><div class="cell-title"><strong>28 samples</strong><small>4 fields · Powered corer</small></div></td><td>${progress(0,"Planning")}</td><td class="money">£2,680</td><td>${status("Awaiting planning","blue")}</td></tr>` : ""}
      <tr data-clickable data-action="customer-detail"><td><div class="cell-title"><strong>SO-1046</strong><small>Due 18 Sep</small></div></td><td><div class="cell-title"><strong>Green Estate</strong><small>Home Farm</small></div></td><td><div class="cell-title"><strong>75 samples</strong><small>5 fields · Soil analysis</small></div></td><td>${progress(64,"48 collected")}</td><td class="money">£4,200</td><td>${status("Weather delay","amber")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1042</strong><small>Due 9 Sep</small></div></td><td><div class="cell-title"><strong>Smith & Sons</strong><small>North Farm</small></div></td><td><div class="cell-title"><strong>84 samples</strong><small>6 fields · Nutrient plan</small></div></td><td>${progress(100,"Report ready")}</td><td class="money">£8,850</td><td>${status("Ready to report","green")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1051</strong><small>Due 22 Sep</small></div></td><td><div class="cell-title"><strong>Brown Farming Ltd</strong><small>West Farm</small></div></td><td><div class="cell-title"><strong>41 samples</strong><small>3 fields · Soil analysis</small></div></td><td>${progress(44,"18 collected")}</td><td class="money">£1,900</td><td>${status("In field","blue")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1038</strong><small>Due 12 Sep</small></div></td><td><div class="cell-title"><strong>Hilltop Partnership</strong><small>Hilltop Farm</small></div></td><td><div class="cell-title"><strong>54 samples</strong><small>4 fields · Carbon baseline</small></div></td><td>${progress(96,"52 results")}</td><td class="money">£6,780</td><td>${status("2 results missing","amber")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1049</strong><small>Due 16 Sep</small></div></td><td><div class="cell-title"><strong>Lower Park Estates</strong><small>Lower Park</small></div></td><td><div class="cell-title"><strong>32 samples</strong><small>2 fields · Nutrient plan</small></div></td><td>${progress(82,"At lab")}</td><td class="money">£4,960</td><td>${status("On track","green")}</td></tr>
    </tbody></table></div></div>`;
}

function salesUnassigned() {
  const claimState = state.unassignedClaimApproved ? ["Assigned to you", "green"] : state.unassignedClaimSubmitted ? ["Manager approval pending", "amber"] : ["Available to claim", "blue"];
  return `${pageHeader("Sales · Account ownership", "Unassigned farmers", "Claim support ownership without exposing reports, orders or private account details before approval.")}
    <section class="dashboard-grid"><div class="panel"><header class="panel__header"><div><h2>Tenant pool</h2><p>Minimal information for eligible North-region Sales users</p></div><span class="tag blue">${state.unassignedClaimApproved ? "1" : "2"} unassigned</span></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Customer account</th><th>Territory / contact</th><th>Reason</th><th>Ownership</th><th></th></tr></thead><tbody>
      ${state.unassignedClaimApproved ? "" : `<tr class="new-row"><td><div class="cell-title"><strong>Meadowbrook Agricultural</strong><small>ACC-2045 · verified customer account</small></div></td><td><div class="cell-title"><strong>Somerset North</strong><small>Laura Bennett</small></div></td><td>Self-registration · no representative</td><td>${status(claimState[0],claimState[1])}</td><td><button class="text-button" data-action="claim-farmer" ${state.unassignedClaimSubmitted ? "disabled" : ""}>${state.unassignedClaimSubmitted ? "Claim requested" : "Request assignment"}</button></td></tr>`}
      <tr><td><div class="cell-title"><strong>Oakridge Farm</strong><small>ACC-2041 · support fallback active</small></div></td><td><div class="cell-title"><strong>Bath East</strong><small>Jamie Oak</small></div></td><td>Owner deactivated</td><td>${status("Fallback managed","amber")}</td><td><button class="text-button">View pool record</button></td></tr>
    </tbody></table></div></div><aside class="stack"><div class="panel"><header class="panel__header"><div><h2>Access boundary</h2><p>A claim is not customer access</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>✓ One current primary representative per account</span><span>✓ Multiple eligible Sales users require manager approval</span><span>✓ Existing orders retain their original creator and source</span><span>— Pending claims do not expose reports or private notes</span></div></div></div>${state.unassignedClaimApproved ? `<div class="panel"><div class="panel__body"><div class="lab-success">✓ Meadowbrook assigned to Emma Clarke</div><p class="batch-note">Approved by Olivia Grant · previous unassigned state retained in ownership history.</p></div></div>` : ""}</aside></section>`;
}

function salesSupport() {
  return `${pageHeader("Sales · Farmer relationship", "Farmer support", "Orders and support requests from assigned customers reach the current representative without making Sales an approval gate.")}
    <section class="dashboard-grid"><div class="panel"><header class="panel__header"><div><h2>My support queue</h2><p>Assigned customers only</p></div><span class="tag ${state.supportSubmitted ? "amber" : "blue"}">${state.supportSubmitted ? "2 open" : "1 open"}</span></header><div class="panel__body attention-list">
      ${state.supportSubmitted ? `<div class="attention-item">${iconBadge("?","red")}<div><strong>SUP-204 · Green Estate</strong><small>Tom Green · gate access for Thursday return · submitted just now</small></div>${status("Open","amber")}</div>` : ""}
      <div class="attention-item">${iconBadge("1")}<div><strong>SUP-198 · Brown Farming Ltd</strong><small>Question about extending sampling to East Block.</small></div>${status("Respond today","blue")}</div>
    </div></div><aside class="panel"><header class="panel__header"><div><h2>Routing rule</h2><p>Customer ownership, not order authorship</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>✓ Green Estate primary representative: Emma Clarke</span><span>✓ Farmer-portal orders keep source FARMER_PORTAL</span><span>✓ Operations receives its own new-order alert</span><span>✓ Reading this request does not resolve it</span></div></div></aside></section>`;
}

function salesManagerOverview() {
  const labels = { overview: ["Commercial overview", "Team-wide performance, ownership and routed Farmer demand."], team: ["Team sales", "Compare representative portfolios without changing order attribution."], customers: ["All customers", "Review current ownership across the tenant."], orders: ["All orders", "Separate order source, creator, attributed value and payments." ] };
  const [title, description] = labels[state.view] || labels.overview;
  return `${pageHeader("Sales Manager · North tenant", title, description, `<button class="secondary-button" data-view="unassigned">Unassigned farmers</button><button class="primary-button" data-view="claims">Review claims</button>`)}
    <div class="list-toolbar"><div class="filter-chips"><button class="is-active">All representatives</button><button>Emma Clarke</button><button>Jacob Reed</button><button>Farmer portal</button></div><div class="filter-chips"><button class="is-active">This quarter</button><button>Open</button><button>Invoiced</button></div></div>
    <section class="kpi-grid">${kpi("Team order value","£486k","All sources · current quarter","#3979a8")}${kpi("Sales-assisted","£362k","Created by Sales","#7bbf45")}${kpi("Farmer portal","£124k","Attributed by account owner","#8c6239")}${kpi("Payments received","£298k","Not commission value","#7d5b94")}</section>
    <section class="dashboard-grid"><div class="panel"><header class="panel__header"><div><h2>Representative portfolios</h2><p>Current ownership and distinct commercial measures</p></div></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Representative</th><th>Customers</th><th>Created orders</th><th>Portal-attributed</th><th>Invoiced</th></tr></thead><tbody><tr><td><div class="cell-title"><strong>Emma Clarke</strong><small>North region</small></div></td><td>42</td><td class="money">£96,400</td><td class="money">£31,200</td><td class="money">£82,600</td></tr><tr><td><div class="cell-title"><strong>Jacob Reed</strong><small>West region</small></div></td><td>37</td><td class="money">£88,100</td><td class="money">£28,700</td><td class="money">£74,900</td></tr><tr><td><div class="cell-title"><strong>Rina Shah</strong><small>East region</small></div></td><td>39</td><td class="money">£91,700</td><td class="money">£34,500</td><td class="money">£79,200</td></tr></tbody></table></div></div><aside class="stack"><div class="panel"><header class="panel__header"><div><h2>Ownership attention</h2><p>Manager decisions only</p></div></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("U")}<div><strong>${state.unassignedClaimApproved ? "1" : "2"} unassigned farmers</strong><small>Ordering remains available while ownership is unresolved.</small></div><button class="text-button" data-view="unassigned">Open</button></div><div class="attention-item">${iconBadge("A","red")}<div><strong>${state.unassignedClaimSubmitted ? "2" : "1"} assignment request${state.unassignedClaimSubmitted ? "s" : ""}</strong><small>Competing claims require a manager decision.</small></div><button class="text-button" data-view="claims">Review</button></div><div class="attention-item">${iconBadge("?")}<div><strong>1 fallback support request</strong><small>No eligible representative; contents were not broadcast.</small></div><button class="text-button" data-view="support">Route</button></div></div></div></aside></section>`;
}

function salesManagerUnassigned() {
  return `${pageHeader("Sales Manager · Ownership", "Unassigned farmers", "Allocate verified customer accounts while preserving tenant isolation and assignment history.")}
    <div class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Account</th><th>Territory</th><th>Current routing</th><th>Claims</th><th>Decision</th></tr></thead><tbody>${state.unassignedClaimApproved ? "" : `<tr class="new-row"><td><div class="cell-title"><strong>Meadowbrook Agricultural</strong><small>ACC-2045 · verified</small></div></td><td>Somerset North</td><td>${status("Fallback team","amber")}</td><td>${state.unassignedClaimSubmitted ? "Emma Clarke · pending" : "None"}</td><td><button class="text-button" data-view="claims">${state.unassignedClaimSubmitted ? "Review claim" : "Assign representative"}</button></td></tr>`}<tr><td><div class="cell-title"><strong>Oakridge Farm</strong><small>ACC-2041 · owner deactivated</small></div></td><td>Bath East</td><td>${status("Admin fallback","amber")}</td><td>Jacob Reed · Rina Shah</td><td><button class="text-button" data-view="claims">Resolve claims</button></td></tr>${state.farmerRegistrationSubmitted ? `<tr><td><div class="cell-title"><strong>Riverbend Farming</strong><small>New registration request</small></div></td><td>Somerset</td><td>${status("Verification pending","grey")}</td><td>Not claimable yet</td><td>Admin account check</td></tr>` : ""}</tbody></table></div></div>`;
}

function salesManagerClaims() {
  return `${pageHeader("Sales Manager · Governed allocation", "Assignment requests", "Approve one current owner atomically; other claims close with an audit reason.")}
    <section class="dashboard-grid"><div class="stack">${state.unassignedClaimSubmitted && !state.unassignedClaimApproved ? `<div class="panel"><header class="panel__header"><div><h2>ACC-2045 · Meadowbrook Agricultural</h2><p>Requested by Emma Clarke · just now</p></div>${status("Approval required","amber")}</header><div class="panel__body"><div class="claim-candidates"><article class="is-selected"><span>EC</span><div><strong>Emma Clarke</strong><small>Eligible · Somerset North · requested assignment</small></div></article><article><span>JR</span><div><strong>Jacob Reed</strong><small>Eligible · adjacent territory · no claim</small></div></article></div><div class="job-actions"><button class="secondary-button" data-action="reject-claim">Reject</button><button class="primary-button" data-action="approve-claim">Approve Emma</button></div></div></div>` : state.unassignedClaimApproved ? `<div class="panel"><div class="panel__body"><div class="lab-success">✓ ACC-2045 assigned to Emma Clarke</div><p class="batch-note">Approved by Olivia Grant. The account left the unassigned pool and the ownership history was retained.</p></div></div>` : `<div class="panel"><div class="empty-state"><div class="empty-state__icon">A</div><h2>No new Meadowbrook claim yet</h2><p>Switch to Sales → Unassigned farmers and request the assignment to demonstrate the approval flow.</p></div></div>`}
      <div class="panel"><header class="panel__header"><div><h2>ACC-2041 · Oakridge Farm</h2><p>Competing claims · current owner deactivated</p></div>${status("Dispute","red")}</header><div class="panel__body"><div class="claim-candidates"><article><span>JR</span><div><strong>Jacob Reed</strong><small>Claimed 08:20 · Bath East coverage</small></div></article><article><span>RS</span><div><strong>Rina Shah</strong><small>Claimed 08:26 · existing relationship</small></div></article></div><p class="batch-note">Neither claimant gains access until an authorised Sales Manager or Admin decides.</p></div></div></div><aside class="panel"><header class="panel__header"><div><h2>Decision boundary</h2><p>Distinct from Sampling Manager</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>✓ Sales Manager resolves competing claims</span><span>✓ Admin is fallback or escalation authority</span><span>✓ Recheck eligibility at approval</span><span>— No peer-unanimity workflow</span><span>— No map, refund or invoice-posting authority implied</span></div></div></aside></section>`;
}

function salesManagerSupport() {
  return `${pageHeader("Sales Manager · Fallback queue", "Support & disputes", "Recover Farmer requests that have no eligible representative without broadcasting their contents.")}
    <div class="panel"><header class="panel__header"><div><h2>SUP-201 · Oakridge Farm</h2><p>Access question · received 08:12</p></div>${status("Routing exception","amber")}</header><div class="panel__body"><div class="evidence-grid"><span><small>In-app record</small><strong>Retained</strong></span><span><small>SMS</small><strong>Missing number</strong></span><span><small>Current owner</small><strong>Deactivated</strong></span><span><small>Exposure</small><strong>Fallback queue only</strong></span></div><div class="job-actions"><button class="secondary-button">Escalate to Admin</button><button class="primary-button">Assign representative</button></div></div></div>`;
}

function salesCustomerDetail() {
  return `${pageHeader("Customers · Green Estate", "Green Estate", "One account timeline from commercial agreement through field delivery, results and invoicing.", `<button class="secondary-button">Contact details</button><button class="primary-button">Add CRM note</button>`)}
    <section class="customer-hero"><div class="customer-monogram">GE</div><div><h2>Green Estate</h2><p>Primary contact: Tom Green · Home Farm, Somerset · Customer since 2022</p></div><div class="customer-hero__stats"><span><strong>3</strong><small>Farms</small></span><span><strong>2</strong><small>Open orders</small></span><span><strong>£18.4k</strong><small>Order value</small></span></div></section>
    <section class="dashboard-grid">
      <div class="stack">
        <div class="panel"><header class="panel__header"><div><h2>Autumn Soil Analysis</h2><p>SO-1046 · 5 fields · 75 planned samples</p></div>${status("Weather delay","amber")}</header><div class="panel__body"><div style="margin-bottom:18px">${progress(64,"Sampling progress · 48 collected")}</div><div class="metric-grid"><div class="metric"><small>Collected</small><strong>48 / 75</strong><em>64% complete</em></div><div class="metric"><small>At lab</small><strong>32</strong><em>Next dispatch Thu</em></div><div class="metric"><small>Results ready</small><strong>18</strong><em>12 validated</em></div></div></div></div>
        <div class="panel"><header class="panel__header"><div><h2>Customer timeline</h2><p>CRM and operational activity in one auditable view</p></div><button class="text-button">Filter</button></header><div class="panel__body"><div class="timeline" id="customer-timeline">
          ${state.reportPublished ? `<article class="timeline-item"><span class="timeline-marker">R</span><div class="timeline-content"><div class="timeline-meta"><span>Laboratory publication</span><time>Just now</time></div><h3>Final report v1 published</h3><p>SO-1046 PDF is visible to authorised Green Estate users and permitted staff.</p><div class="timeline-tags"><span class="tag green">Published report</span></div></div></article>` : ""}
          ${state.portalOrderSubmitted ? `<article class="timeline-item"><span class="timeline-marker">TG</span><div class="timeline-content"><div class="timeline-meta"><span>Tom Green · Farmer portal</span><time>Just now</time></div><h3>SO-1058 submitted directly</h3><p>Accepted price £1,416 · East Meadow Area-version snapshot retained · ${state.paymentPaid ? "deposit verified" : "deposit due"}.</p><div class="timeline-tags"><span class="tag blue">Portal order</span><span class="tag grey">No sales gate</span></div></div></article>` : ""}
          ${state.noteSaved ? `<article class="timeline-item"><span class="timeline-marker">SL</span><div class="timeline-content"><div class="timeline-meta"><span>Sarah Lewis · Field operator</span><time>Just now</time></div><h3>Flooding reported; return agreed with Tom</h3><p>East Meadow cannot be accessed. Original operator note and any attachment are retained. Follow-up proposed for Wednesday.</p><div class="timeline-tags"><span class="tag blue">CRM interaction</span><span class="tag amber">Operational event</span><span class="tag grey">AI reviewed</span></div></div></article>` : ""}
          <article class="timeline-item"><span class="timeline-marker">SL</span><div class="timeline-content"><div class="timeline-meta"><span>Sarah Lewis · Field operator</span><time>Today · 10:42</time></div><h3>Flooding blocked access to East Meadow</h3><p>Spoke with Tom on site. Return provisionally agreed for Thursday, subject to access conditions.</p><div class="timeline-tags"><span class="tag blue">CRM interaction</span><span class="tag amber">Site event</span><span class="tag red">Work blocked</span></div></div></article>
          <article class="timeline-item"><span class="timeline-marker">DW</span><div class="timeline-content"><div class="timeline-meta"><span>Daniel Wright · Sampling manager</span><time>Today · 10:55</time></div><h3>Job rescheduled to Thursday</h3><p>Sarah retained as assigned operator. 27 outstanding samples moved to 10 September.</p><div class="timeline-tags"><span class="tag green">Schedule updated</span></div></div></article>
          <article class="timeline-item"><span class="timeline-marker">L</span><div class="timeline-content"><div class="timeline-meta"><span>Central laboratory</span><time>Yesterday · 14:18</time></div><h3>32 samples received</h3><p>Dispatch DSP-882 passed reconciliation with no unmatched pods.</p><div class="timeline-tags"><span class="tag green">Chain verified</span></div></div></article>
          <article class="timeline-item"><span class="timeline-marker">EC</span><div class="timeline-content"><div class="timeline-meta"><span>Emma Clarke · Sales</span><time>3 Sep · 11:30</time></div><h3>Campaign kickoff completed</h3><p>Tom confirmed access contacts, preferred reporting format and completion target.</p><div class="timeline-tags"><span class="tag blue">CRM interaction</span></div></div></article>
        </div></div></div>
      </div>
      <div class="stack">
        <div class="panel"><header class="panel__header"><div><h2>Account attention</h2><p>Next best actions</p></div></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("1")}<div><strong>Confirm Thursday access</strong><small>Call Tom by Wednesday 16:00.</small></div><time>Due Wed</time></div><div class="attention-item">${iconBadge("2")}<div><strong>Explain revised completion</strong><small>Expected report date moves to 18 Sep.</small></div><time>Suggested</time></div></div></div>
        <div class="panel"><header class="panel__header"><div><h2>Farms</h2><p>Current account coverage</p></div></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("H")}<div><strong>Home Farm</strong><small>5 fields · Active campaign</small></div>${status("Active","green")}</div><div class="attention-item">${iconBadge("E")}<div><strong>East Meadow</strong><small>2 fields · Access blocked</small></div>${status("Delayed","amber")}</div><div class="attention-item">${iconBadge("N")}<div><strong>North Holding</strong><small>4 fields · Last sampled 2025</small></div>${status("Historic","grey")}</div></div></div>
      </div>
    </section>`;
}

function managerOverview() {
  return `${pageHeader("Field operations · 8 September", "Keep today moving", "Plan both sales-assisted and farmer-portal orders, then assign work with decision context preserved.", `<button class="secondary-button">Open map</button><button class="primary-button" data-action="assign">Assign JOB-145</button>`)}
    <section class="kpi-grid">
      ${kpi("Jobs today", "9", "6 active · 2 complete", "#3979a8")}
      ${kpi("Unassigned", state.assignedOperator ? "2" : "3", state.assignedOperator ? `<span class="trend-up">JOB-145 assigned</span>` : `<span class="trend-warn">1 due today</span>`, "#e9a13b")}
      ${kpi("Samples collected", "126", "of 184 planned", "#7bbf45", "68")}
      ${kpi("Active issues", "2", "1 weather · 1 equipment", "#c8534d")}
    </section>
    <section class="dashboard-grid">
      <div class="stack">
        <div class="panel"><header class="panel__header"><div><h2>Live operations map</h2><p>Operator position is shown only during active assignment evidence</p></div><div>${status("6 operators active","green")}</div></header><div class="map-board"><div class="map-field one">North Farm</div><div class="map-field two">Manor Farm</div><div class="map-field three">East Meadow</div><div class="map-pin sarah"><span>SL</span></div><div class="map-pin james"><span>JM</span></div><div class="map-alert">! Flooding · JOB-143</div><div class="map-legend"><span><i></i>On track</span><span><i></i>Issue</span></div></div></div>
        <div class="panel"><header class="panel__header"><div><h2>Jobs needing action</h2><p>Unassigned work and active field exceptions</p></div><button class="text-button">View all jobs →</button></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Job</th><th>Plan</th><th>Operator</th><th>Status</th></tr></thead><tbody>
          ${state.portalOrderSubmitted ? `<tr class="new-row"><td><div class="cell-title"><strong>JOB-156 · Green Estate</strong><small>18 samples · Farmer portal order</small></div></td><td><div class="cell-title"><strong>Requested 21 Sep</strong><small>${state.paymentPaid ? "Deposit verified · ready to plan" : "Awaiting demo deposit"}</small></div></td><td><div class="cell-title"><strong>Unassigned</strong><small>No salesperson required</small></div></td><td>${status(state.paymentPaid ? "Needs planning" : "Commercial hold",state.paymentPaid ? "blue" : "amber")}</td></tr>` : ""}
          <tr data-clickable data-action="assign"><td><div class="cell-title"><strong>JOB-145 · Westcombe Farm</strong><small>28 samples · Powered corer</small></div></td><td><div class="cell-title"><strong>11 Sep · 09:00</strong><small>4h 10m estimated</small></div></td><td><div class="cell-title"><strong>${state.assignedOperator || "Unassigned"}</strong><small>${state.assignedOperator ? "Decision captured" : "3 eligible operators"}</small></div></td><td>${status(state.assignedOperator ? "Assigned" : "Needs assignment",state.assignedOperator ? "green" : "amber")}</td></tr>
          <tr><td><div class="cell-title"><strong>JOB-143 · Green Estate</strong><small>27 remaining · East Meadow</small></div></td><td><div class="cell-title"><strong>Reschedule proposed</strong><small>Thu 10 Sep</small></div></td><td><div class="cell-title"><strong>Sarah Lewis</strong><small>Corer-12 · SC-008</small></div></td><td>${status("Flooding","red")}</td></tr>
          <tr><td><div class="cell-title"><strong>JOB-148 · Lower Park</strong><small>Smart Case sync overdue</small></div></td><td><div class="cell-title"><strong>Today · 07:30</strong><small>Fieldwork complete</small></div></td><td><div class="cell-title"><strong>James Morgan</strong><small>SC-014 offline</small></div></td><td>${status("Awaiting sync","amber")}</td></tr>
        </tbody></table></div></div>
      </div>
      <div class="stack">
        <div class="panel"><header class="panel__header"><div><h2>Today's schedule</h2><p>Workload and travel-aware plan</p></div></header><div class="schedule-strip"><div class="schedule-day"><small>Mon</small><strong>7</strong></div><div class="schedule-day is-active"><small>Tue</small><strong>8</strong></div><div class="schedule-day"><small>Wed</small><strong>9</strong></div><div class="schedule-day"><small>Thu</small><strong>10</strong></div><div class="schedule-day"><small>Fri</small><strong>11</strong></div></div><div class="schedule-content"><div class="schedule-lane"><span class="schedule-person"><i class="mini-avatar">SL</i> Sarah</span><div class="schedule-job warning"><span><strong>Green Estate</strong><small>09:00 · 75 samples</small></span>${status("Blocked","amber")}</div></div><div class="schedule-lane"><span class="schedule-person"><i class="mini-avatar">JM</i> James</span><div class="schedule-job"><span><strong>North Farm</strong><small>08:30 · 36 samples</small></span>${status("Active","green")}</div></div><div class="schedule-lane"><span class="schedule-person"><i class="mini-avatar">PR</i> Pedro</span><div class="schedule-job"><span><strong>Manor Farm</strong><small>10:15 · 24 samples</small></span>${status("En route","blue")}</div></div></div></div>
        <div class="panel"><header class="panel__header"><div><h2>Operator performance context</h2><p>Compared with similar jobs — no simplistic score</p></div></header><div class="panel__body metric-grid"><div class="metric"><small>Samples / field hour</small><strong>8.4</strong><em>Similar jobs: 7.9</em></div><div class="metric"><small>First-time completion</small><strong>96%</strong><em>Last 90 days</em></div><div class="metric"><small>Travel efficiency</small><strong>88%</strong><em>Plan vs actual</em></div><div class="metric"><small>Invalid samples</small><strong>1.2%</strong><em>Region: 1.8%</em></div><div class="metric"><small>Field time</small><strong>46h</strong><em>Active work only</em></div><div class="metric"><small>Context events</small><strong>4</strong><em>Excluded delays</em></div></div></div>
      </div>
    </section>`;
}

function managerSchedule() {
  return `${pageHeader("Operations · Week 37", "Schedule", "Balance travel, capability, equipment and workload across the field team.", `<button class="secondary-button">Map view</button><button class="primary-button" data-action="assign">Assign unplanned work</button>`)}
    <div class="schedule-toolbar"><div class="date-nav"><button>‹</button><strong>7–11 September 2026</strong><button>›</button></div><div class="filter-chips"><button class="is-active">All operators</button><button>Available</button><button>Issues</button></div></div>
    <section class="schedule-layout"><div class="panel schedule-board"><div class="schedule-board__header"><span>Operator</span><span><small>Mon</small>7</span><span class="is-today"><small>Tue</small>8</span><span><small>Wed</small>9</span><span><small>Thu</small>10</span><span><small>Fri</small>11</span></div>
      ${[
        ["SL","Sarah Lewis","Powered corer",["North Farm|Complete|green","Green Estate|Flooded|amber","Training|AM|grey","Green Estate|Return|blue","Westcombe|09:00|green"]],
        ["JM","James Morgan","Powered corer",["Lower Park|Complete|green","North Farm|Active|blue","Hilltop|08:30|green","Brown Farm|10:00|green","Available|PM|grey"]],
        ["PR","Pedro Ruiz","Manual auger",["Manor Farm|Complete|green","Manor Farm|En route|blue","Available|All day|grey","Long Meadow|09:15|green","Leave|All day|grey"]],
        ["AK","Aisha Khan","Carbon certified",["Hilltop|Complete|green","Lower Park|Lab handoff|blue","Hilltop|09:00|green","Hilltop|09:00|green","Available|PM|grey"]],
        ["TO","Tom O'Neill","Manual + GNSS",["Available|All day|grey","West Farm|Active|blue","West Farm|09:00|green","Equipment service|AM|amber","North Holding|11:00|green"]],
      ].map(([initials,name,skill,days]) => `<div class="schedule-board__row"><div class="schedule-board__person"><i class="mini-avatar">${initials}</i><span><strong>${name}</strong><small>${skill}</small></span></div>${days.map(day => { const [job,meta,tone] = day.split("|"); return `<div class="calendar-job ${tone}"><strong>${job}</strong><small>${meta}</small></div>`; }).join("")}</div>`).join("")}
    </div><div class="stack"><div class="panel"><header class="panel__header"><div><h2>Unplanned work</h2><p>3 jobs need placement</p></div></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("1")}<div><strong>JOB-145 · Westcombe</strong><small>28 samples · Powered corer · due Fri</small></div><button class="text-button" data-action="assign">Assign</button></div><div class="attention-item">${iconBadge("2")}<div><strong>JOB-152 · North Holding</strong><small>22 samples · Manual · due 14 Sep</small></div><button class="text-button">Plan</button></div><div class="attention-item">${iconBadge("3")}<div><strong>JOB-154 · Elms Farm</strong><small>40 samples · Carbon · due 15 Sep</small></div><button class="text-button">Plan</button></div></div></div><div class="panel"><header class="panel__header"><div><h2>Capacity this week</h2><p>Planned field hours</p></div></header><div class="panel__body"><div class="capacity-row"><span>Sarah Lewis</span>${progress(82,"32.8 / 40h")}</div><div class="capacity-row"><span>James Morgan</span>${progress(74,"29.6 / 40h")}</div><div class="capacity-row"><span>Pedro Ruiz</span>${progress(61,"24.4 / 40h")}</div><div class="capacity-row"><span>Aisha Khan</span>${progress(79,"31.6 / 40h")}</div></div></div></div></section>`;
}

function managerOperators() {
  const roster = [
    ["SL","Sarah Lewis","Active · Green Estate","Powered corer, manual auger, Smart Case","ATV-04 · Corer-12 · SC-008","8.4","96%","182 km","green"],
    ["JM","James Morgan","Active · North Farm","Powered corer, Smart Case, ATV","ATV-02 · Corer-07 · SC-014","7.8","91%","214 km","blue"],
    ["PR","Pedro Ruiz","En route · Manor Farm","Manual auger, Smart Case, van","Van-09 · Auger-18 · SC-011","7.1","94%","146 km","blue"],
    ["AK","Aisha Khan","Available from 13:30","Carbon protocol, powered corer, GNSS","ATV-06 · Corer-15 · SC-004","8.0","97%","121 km","green"],
    ["TO","Tom O'Neill","Active · West Farm","Manual auger, GNSS, Smart Case","Van-12 · Auger-09 · SC-006","7.5","93%","168 km","blue"],
    ["RB","Rachel Byrne","Equipment service","Powered corer, manual auger, ATV","ATV-08 · Corer-19 · SC-016","8.2","95%","132 km","amber"],
  ];
  return `${pageHeader("Operations · Field team", "Operators", "See availability, effective capability, assigned equipment and contextual performance evidence.", `<button class="secondary-button">Training matrix</button><button class="primary-button">Add operator</button>`)}
    <section class="kpi-grid compact-kpis">${kpi("Field operators", "8", "6 active today", "#3979a8")}${kpi("Available capacity", "34h", "Across next 5 days", "#7bbf45")}${kpi("Equipment ready", "7 / 8", "1 corer in service", "#e9a13b")}${kpi("First-time completion", "94%", "Comparable jobs · 90 days", "#7bbf45")}</section>
    <section class="operator-roster">${roster.map(([initials,name,availability,skills,kit,rate,quality,travel,tone]) => `<article class="roster-card"><header><span class="operator-avatar">${initials}</span><div><h2>${name}</h2><p>${availability}</p></div>${status(tone === "green" ? "Available" : tone === "amber" ? "Attention" : "Working",tone)}</header><div class="roster-card__section"><small>Qualified capability</small><strong>${skills}</strong></div><div class="roster-card__section"><small>Assigned equipment</small><strong>${kit}</strong></div><div class="roster-metrics"><span><small>Samples / hr</small><strong>${rate}</strong></span><span><small>First-time</small><strong>${quality}</strong></span><span><small>Travel week</small><strong>${travel}</strong></span></div><footer><span>Compared with similar jobs</span><button>View profile →</button></footer></article>`).join("")}</section>`;
}

function operatorOverview() {
  return `<section class="operator-hero"><div><span class="eyebrow">Tuesday · 8 September</span><h1>Good morning, Sarah</h1><p>You have 2 jobs today · First start planned for 09:00</p></div><div class="weather"><span class="weather__icon">☂</span><span><strong>Heavy rain · 14°C</strong><small>Yellow warning until 12:00 · allow extra travel time</small></span></div></section>
    <section class="operator-layout"><div class="stack"><div class="panel"><article class="today-job"><div class="today-job__top"><div><span class="eyebrow">Next job · JOB-143</span><h2>Green Estate</h2><p class="today-job__address">East Meadow, Home Farm · BA4 6NL</p></div>${status(state.noteSaved ? "Issue reported" : "In progress",state.noteSaved ? "amber" : "blue")}</div>
      <div class="job-progress"><strong>48 / 75 samples</strong><div class="progress-track"><span style="width:64%"></span></div><small>64%</small></div>
      ${state.noteSaved ? `<div class="site-alert"><span class="site-alert__icon">!</span><div><strong>Flooding reported · work blocked</strong><p>Your confirmed note and evidence were shared with Operations and Sales. Thursday return is awaiting access confirmation.</p></div></div>` : `<div class="site-alert"><span class="site-alert__icon">!</span><div><strong>Site conditions may affect access</strong><p>Heavy overnight rain is forecast. Use Add note to report a delay, farmer conversation, photo or other site evidence.</p></div></div>`}
      <div class="job-details"><div class="job-detail"><small>Contact</small><strong>Tom Green<br>07700 900 142</strong></div><div class="job-detail"><small>Instructions</small><strong>Call on arrival<br>Use east gate</strong></div><div class="job-detail"><small>Fields</small><strong>5 total<br>2 remaining</strong></div></div>
      <div class="smart-case-handoff is-ready"><span class="smart-case-icon">SC</span><div><strong>Allocated Smart Case · SC-008</strong><p>Six-pod case · Last synced 07:42. It captures samples independently while offline; S2L reconciles them to work after synchronisation.</p></div><button class="secondary-button" data-action="smart-case">How syncing works</button></div>
      <div class="job-actions"><button class="secondary-button">View route</button><button class="secondary-button" data-action="note">Add note</button></div>
    </article></div>
    <div class="panel"><header class="panel__header"><div><h2>Later today</h2><p>Your next assigned job</p></div></header><div class="panel__body"><div class="attention-item">${iconBadge("2")}<div><strong>Manor Farm · JOB-147</strong><small>14:30 · 18 samples · Manual auger · 26 min from Green Estate</small></div>${status("Assigned","grey")}</div></div></div></div>
    <div class="stack"><div class="panel"><header class="panel__header"><div><h2>Your capability today</h2><p>Person + assigned equipment + site fit</p></div>${status("Suitable","green")}</header><div class="panel__body"><div class="capability-block"><h3>Qualified methods</h3><div class="capability-tags"><span class="tag green">Powered corer</span><span class="tag green">Manual auger</span><span class="tag green">Smart Case</span><span class="tag grey">ATV certified</span></div></div><div class="capability-block"><h3>Assigned equipment</h3><div class="equipment-row"><span class="equipment-icon">ATV</span><div><strong>ATV-04</strong><small>Utility vehicle · inspected 7 Sep</small></div><small>Ready</small></div><div class="equipment-row"><span class="equipment-icon">C12</span><div><strong>Corer-12</strong><small>Powered · 0–300 mm · 25 mm core</small></div><small>Ready</small></div><div class="equipment-row"><span class="equipment-icon">SC</span><div><strong>Smart Case SC-008</strong><small>6 pod positions · GNSS · offline ready</small></div><small>Synced</small></div></div><div class="capability-block"><h3>Effective job capability</h3><p style="margin:0;color:var(--ink-soft);font-size:9px;line-height:1.5">Suitable for powered 0–250 mm soil sampling with GNSS traceability and the six-pod tray workflow.</p></div></div></div>
    <div class="panel"><header class="panel__header"><div><h2>This week</h2><p>Your work evidence, with site delays separated</p></div></header><div class="panel__body metric-grid"><div class="metric"><small>Field time</small><strong>12h 24m</strong><em>Active assignments</em></div><div class="metric"><small>Samples</small><strong>106</strong><em>104 accepted</em></div><div class="metric"><small>Travel</small><strong>182 km</strong><em>4h 08m</em></div></div></div></div></section>`;
}

function operatorDispatch() {
  const ready = state.dispatchReconciled;
  const nextAction = !ready
    ? `<button class="primary-button" data-action="dispatch-reconcile">Simulate final server sync</button>`
    : !state.outboundBooked
      ? `<button class="primary-button" data-action="dispatch-book">Book collection & create labels</button>`
      : !state.outboundLabelPrinted
        ? `<button class="primary-button" data-action="dispatch-print">Print both parcel labels</button>`
        : !state.outboundHandedOver
          ? `<button class="primary-button" data-action="dispatch-handover">Record carrier handover</button>`
          : `<button class="primary-button" data-view="shipments">Track shipment</button>`;
  return `${pageHeader("Operator · Completed sampling", "Dispatch & collections", "Prepare the parcel now, but booking and labels remain locked until the backend confirms complete sampling and durable reconciliation.", state.outboundBooked ? `<button class="secondary-button" data-action="logistics-reset">Reset logistics demo</button>` : "")}
    <section class="logistics-grid"><div class="stack"><div class="panel"><header class="panel__header"><div><h2>SO-1049 · Green Estate</h2><p>Lower Field baseline · 12 commissioned samples · two six-pod trays</p></div>${status(ready ? "Ready for dispatch" : "Dispatch blocked",ready ? "green" : "amber")}</header><div class="panel__body"><div class="dispatch-gate"><div class="gate-heading"><span>${ready ? "✓" : "!"}</span><div><strong>Server-controlled readiness gate</strong><p>${ready ? "The current order scope and manifest revision have passed every dispatch check." : "One commissioned record has not yet been durably received and reconciled by S2L."}</p></div></div><div class="gate-list"><span class="done">✓ Sampling complete · 12 / 12</span><span class="${ready ? "done" : "blocked"}">${ready ? "✓" : "!"} Commissioned records durably received · ${ready ? "12 / 12" : "11 / 12"}</span><span class="${ready ? "done" : "blocked"}">${ready ? "✓ Reconciliation complete" : "! Sample S8492 awaiting server reconciliation"}</span><span class="done">✓ No duplicate pod allocations</span><span class="done">✓ Current manifest revision · M-1049-v3</span></div></div><div class="gate-boundary"><strong>What does not unlock dispatch</strong><span>A full tray, pressing Sync, local Case completion, connectivity or an Operator checkbox.</span></div></div></div>
      <div class="panel"><header class="panel__header"><div><h2>Draft manifest</h2><p>Permitted before readiness · physical contents remain editable until handover</p></div>${status(state.outboundHandedOver ? "Handed over" : "Draft M-1049-v3",state.outboundHandedOver ? "green" : "grey")}</header><div class="parcel-list"><article class="parcel-card"><header><div><small>Parcel 1 · TRAY-008-A</small><strong>6 pods · 8.4 kg gross</strong></div>${status("Packed","green")}</header><div class="pod-chips">${["P1042","P1043","P1044","P1045","P1046","P1047"].map(pod => `<span>${pod}</span>`).join("")}</div><footer>620 × 410 × 170 mm · sealed six-pod tray package</footer></article><article class="parcel-card"><header><div><small>Parcel 2 · TRAY-008-B</small><strong>6 pods · 8.1 kg gross</strong></div>${status("Packed","green")}</header><div class="pod-chips">${["P1048","P1049","P1050","P1051","P1052","P1053"].map(pod => `<span>${pod}</span>`).join("")}</div><footer>620 × 410 × 170 mm · soil net weight is not used as parcel weight</footer></article></div></div></div>
    <aside class="stack"><div class="panel"><header class="panel__header"><div><h2>Collection details</h2><p>Physical address snapshots, not billing addresses</p></div></header><div class="panel__body address-stack"><div class="address-snapshot"><small>Collect from · original origin</small><strong>Green Estate Collection Yard</strong><span>West Lane, Bruton, BA10 0AB</span><span>Tom Green · call at gate · 07700 900 142</span></div><div class="route-arrow">↓</div><div class="address-snapshot destination"><small>Deliver to · laboratory</small><strong>e-nano Pilot Laboratory</strong><span>Unit 4, Innovation Park, Bristol, BS16 7FR</span><span>Maya Patel · goods entrance</span></div><div class="collection-facts"><span><small>Carrier route</small><strong>DHL Express · demo adapter</strong></span><span><small>Requested window</small><strong>14 Sep · 13:00–16:00 BST</strong></span><span><small>Account / payer</small><strong>S2L pilot account</strong></span></div></div></div>
      <div class="panel"><header class="panel__header"><div><h2>Booking outcomes</h2><p>Shipment, collection, label and handover stay separate</p></div></header><div class="panel__body"><div class="outcome-list"><span><i class="${state.outboundBooked ? "done" : ""}"></i><div><strong>Shipment creation</strong><small>${state.outboundBooked ? "Created · SHP-9034" : ready ? "Ready to submit" : "Blocked by readiness gate"}</small></div></span><span><i class="${state.outboundBooked ? "done" : ""}"></i><div><strong>Collection booking</strong><small>${state.outboundBooked ? "Confirmed · COL-4819" : "No provider request sent"}</small></div></span><span><i class="${state.outboundBooked ? "done" : ""}"></i><div><strong>Carrier labels</strong><small>${state.outboundBooked ? state.outboundLabelPrinted ? "Issued and printed · 2 pieces" : "Issued · ready to print" : "No label issued"}</small></div></span><span><i class="${state.outboundHandedOver ? "done" : ""}"></i><div><strong>Physical handover</strong><small>${state.outboundHandedOver ? "Recorded against immutable manifest" : "Not yet recorded"}</small></div></span></div><div class="job-actions logistics-actions">${nextAction}${state.outboundBooked ? `<button class="secondary-button" data-action="dispatch-print">${state.outboundLabelPrinted ? "Reprint labels" : "Print labels"}</button>` : `<button class="secondary-button" disabled>Labels unavailable</button>`}</div><p class="batch-note">Prototype only · no carrier request, label purchase, pickup or charge occurs.</p></div></div></aside></section>`;
}

function operatorShipments() {
  const outboundTone = state.labParcelReconciled ? "green" : state.outboundHandedOver ? "blue" : state.outboundBooked ? "amber" : "grey";
  const outboundText = state.labParcelReconciled ? "Lab receipt reconciled" : state.outboundCarrierDelivered ? "Carrier delivered" : state.outboundHandedOver ? "In transit" : state.outboundBooked ? "Awaiting handover" : "Draft";
  const returnText = state.returnPodsReceived ? "Pods received" : state.returnCarrierDelivered ? "Carrier delivered" : state.returnBooked ? "Return in progress" : "Not yet ready";
  return `${pageHeader("Operator · Two-way parcel visibility", "My shipments", "Track carrier events and human custody separately for the outward samples and the empty-pod return.", `<button class="secondary-button" data-view="dispatch">Open dispatch</button>`)}
    <section class="shipment-grid"><article class="panel shipment-card"><header class="panel__header"><div><span class="eyebrow">Outbound · SHP-9034</span><h2>Green Estate → e-nano Pilot Laboratory</h2><p>SO-1049 · two parcels · 12 samples</p></div>${status(outboundText,outboundTone)}</header><div class="panel__body"><div class="tracking-rail">${[["Manifest ready",state.dispatchReconciled],["Collected",state.outboundHandedOver],["Carrier delivered",state.outboundCarrierDelivered],["Lab reconciled",state.labParcelReconciled]].map(([label,done],index) => `<span class="${done ? "done" : index === 0 || state.outboundHandedOver ? "" : "future"}"><i>${done ? "✓" : index + 1}</i><strong>${label}</strong></span>`).join("")}</div><div class="tracking-latest"><small>Latest carrier event</small><strong>${state.outboundCarrierDelivered ? "Delivered · Bristol depot proof of delivery" : state.outboundHandedOver ? "In transit · departed Bath service centre" : state.outboundBooked ? "Collection confirmed · awaiting handover" : "No carrier journey started"}</strong><span>${state.outboundHandedOver ? "Event time 14 Sep 17:42 · retrieved just now · reported location only" : "Carrier event tracking is not continuous GPS."}</span></div>${state.outboundHandedOver && !state.outboundCarrierDelivered ? `<button class="primary-button full-width" data-action="carrier-deliver-lab">Simulate carrier delivery</button>` : ""}</div></article>
      <article class="panel shipment-card"><header class="panel__header"><div><span class="eyebrow">Empty pods return</span><h2>e-nano Pilot Laboratory → original collection yard</h2><p>Five eligible pods · one pod remains in laboratory use</p></div>${status(returnText,state.returnPodsReceived ? "green" : state.returnBooked ? "blue" : "grey")}</header><div class="panel__body"><div class="tracking-rail">${[["Lab released",state.returnPodsReleased],["Return collected",state.returnBooked],["Carrier delivered",state.returnCarrierDelivered],["Pods reconciled",state.returnPodsReceived]].map(([label,done],index) => `<span class="${done ? "done" : "future"}"><i>${done ? "✓" : index + 1}</i><strong>${label}</strong></span>`).join("")}</div><div class="tracking-latest"><small>Return destination snapshot</small><strong>Green Estate Collection Yard · West Lane</strong><span>Derived from each pod's outbound origin, not the current customer or billing address.</span></div>${state.returnCarrierDelivered && !state.returnPodsReceived ? `<button class="primary-button full-width" data-action="operator-receive-return">Reconcile returned pods</button>` : ""}${state.returnPodsReceived ? `<div class="lab-success">✓ Five pods physically received · inspection and fresh liners still required before reuse</div>` : ""}</div></article></section>`;
}

function managerLogistics() {
  const mainState = state.labParcelReconciled ? "Lab reconciled" : state.outboundCarrierDelivered ? "Delivered · receipt pending" : state.outboundHandedOver ? "In transit" : state.dispatchReconciled ? "Ready for dispatch" : "Awaiting sync";
  return `${pageHeader("Operations · Parcel oversight", "Logistics", "See readiness blockers, collection outcomes, stale tracking, laboratory receipt and empty-pod returns without merging them into one status.")}
    <section class="kpi-grid compact-kpis">${kpi("Ready to dispatch",state.dispatchReconciled ? "4" : "3",state.dispatchReconciled ? "SO-1049 gate passed" : "1 awaiting reconciliation","#7bbf45")}${kpi("Outbound journeys","7","2 awaiting handover","#3979a8")}${kpi("Receipt exceptions","2","1 missing pod · 1 damaged","#c8534d")}${kpi("Pod returns","11","5 overdue","#e9a13b")}</section>
    <section class="dashboard-grid"><div class="panel"><header class="panel__header"><div><h2>Live logistics overview</h2><p>Each direction, parcel and custody outcome remains visible</p></div><div class="filter-chips"><button class="is-active">All</button><button>Outbound</button><button>Returns</button><button>Exceptions</button></div></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Order / journey</th><th>Sampling gate</th><th>Carrier</th><th>Physical custody</th><th>Action</th></tr></thead><tbody><tr class="new-row"><td><div class="cell-title"><strong>SO-1049 · Green Estate</strong><small>Outbound · 2 parcels · 12 pods</small></div></td><td>${status(state.dispatchReconciled ? "Passed" : "Awaiting sync",state.dispatchReconciled ? "green" : "amber")}</td><td>${status(mainState,state.labParcelReconciled ? "green" : state.outboundHandedOver ? "blue" : "amber")}</td><td><div class="cell-title"><strong>${state.labParcelReconciled ? "Lab accepted parcel 1" : "Receipt not reconciled"}</strong><small>${state.labParcelReconciled ? "6 of 12 pods physically identified" : "Carrier status cannot accept contents"}</small></div></td><td><button class="text-button" data-view="logistics">Current</button></td></tr><tr><td><div class="cell-title"><strong>SO-1042 · Smith & Sons</strong><small>Outbound · SHP-9018</small></div></td><td>${status("Passed","green")}</td><td>${status("Label issued · pickup failed","red")}</td><td><div class="cell-title"><strong>Still with Operator</strong><small>Recover collection; do not repurchase shipment</small></div></td><td><button class="text-button">Resolve pickup</button></td></tr><tr><td><div class="cell-title"><strong>RET-771 · Lower Park</strong><small>Empty-pod return · 6 pods</small></div></td><td>${status("Return eligible","green")}</td><td>${status("Tracking stale","amber")}</td><td><div class="cell-title"><strong>Origin receipt overdue</strong><small>Last carrier event 31h ago</small></div></td><td><button class="text-button">Investigate</button></td></tr><tr><td><div class="cell-title"><strong>SHP-8994 · Oakfield</strong><small>Carrier delivered · parcel 2 of 2</small></div></td><td>${status("Passed","green")}</td><td>${status("Delivered","green")}</td><td><div class="cell-title"><strong>1 pod missing at intake</strong><small>Manifest remains immutable · discrepancy open</small></div></td><td><button class="text-button">Open exception</button></td></tr></tbody></table></div></div><aside class="stack"><div class="panel"><header class="panel__header"><div><h2>State boundaries</h2><p>Important v0.9.3 distinctions</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>Sampling complete ≠ dispatch ready</span><span>Label issued ≠ pickup confirmed</span><span>Carrier delivered ≠ lab accepted contents</span><span>Pod empty ≠ clean or reusable</span><span>Return delivered ≠ pods physically received</span><span>Report published ≠ pod return complete</span></div></div></div><div class="panel"><header class="panel__header"><div><h2>Carrier event freshness</h2><p>Not continuous GPS</p></div></header><div class="panel__body"><div class="tracking-latest"><small>Latest retrieved event</small><strong>RET-771 · In transit</strong><span>Provider event time 12 Sep 09:14 · retrieved 31 hours ago · location unavailable.</span></div></div></div></aside></section>`;
}

function adminOverview() {
  return `${pageHeader("S2L tenant administration", "Keep access, maps and shared records trustworthy", "Admin is a distinct tenant role. Map authority does not automatically grant payment, refund or invoicing authority.", `<button class="secondary-button" data-view="users">Review access</button><button class="primary-button" data-action="admin-maps">Review map changes</button>`)}
    <section class="kpi-grid">${kpi("Map reviews", state.boundaryPublished ? "1" : "2", state.boundaryPublished ? "East Meadow published" : "1 affects open work", "#e9a13b")}${kpi("Customer users", "68", "4 invitations pending", "#3979a8")}${kpi("Shared reports", state.reportPublished ? "19" : "18", state.reportPublished ? "1 published today" : "2 awaiting release", "#7bbf45")}${kpi("Integrations", "4 / 6", "2 configuration decisions open", "#7d5b94")}</section>
    <section class="dashboard-grid"><div class="panel"><header class="panel__header"><div><h2>Administrative attention</h2><p>Tenant-scoped records requiring governed action</p></div></header><div class="panel__body attention-list">
      <div class="attention-item">${iconBadge("M","red")}<div><strong>East Meadow boundary correction</strong><small>Farmer request overlaps the current south boundary and affects SO-1046.</small></div><button class="text-button" data-action="admin-maps">Review</button></div>
      <div class="attention-item">${iconBadge("U")}<div><strong>Four customer invitations</strong><small>Account links and farm permissions need confirmation.</small></div><button class="text-button" data-view="users">Open</button></div>
      <div class="attention-item">${iconBadge("R")}<div><strong>Report release policy</strong><small>Laboratory may publish final files; internal review remains optional.</small></div>${status("Configured","green")}</div>
    </div></div><div class="stack"><div class="panel"><header class="panel__header"><div><h2>Role boundary</h2><p>What this workspace can and cannot do</p></div></header><div class="panel__body"><div class="readiness-checklist"><strong>Tenant administration</strong><span>✓ Maintain authorised Areas and maps</span><span>✓ Manage users and customer access</span><span>✓ Review reports and integrations</span><span>— No automatic card, refund or invoice authority</span></div></div></div><div class="panel"><header class="panel__header"><div><h2>Recent audit</h2><p>Important shared-record changes</p></div></header><div class="panel__body activity-list"><div class="activity-item"><span class="activity-dot">HB</span><div><strong>Home Farm SBI import reviewed</strong><p>18 parcels accepted; one conflict retained for review.</p><time>Today · 09:18</time></div></div><div class="activity-item"><span class="activity-dot">DW</span><div><strong>South Paddock proposed</strong><p>Sampling Manager created version 3 from field evidence.</p><time>Yesterday · 16:05</time></div></div></div></div></div></section>`;
}

function adminMaps() {
  return `${pageHeader("Admin · Governed geography", "Farms & maps", "Admin and Sampling Manager use the same Area records, version history and validation rules.", `<button class="secondary-button">Import authorised SBI parcels</button><button class="primary-button" data-action="publish-boundary">${state.boundaryPublished ? "Published" : "Publish boundary v4"}</button>`)}
    <section class="governance-grid"><div class="panel"><header class="panel__header"><div><h2>East Meadow · proposed boundary v4</h2><p>Green Estate · Home Farm · source: farmer correction request</p></div>${status(state.boundaryPublished ? "Published" : "Review required",state.boundaryPublished ? "green" : "amber")}</header><div class="area-preview admin-map"><div class="area-preview__field"><span>Current v3<small>31.6 ha</small></span></div><div class="area-preview__field second proposed"><span>Proposed v4<small>32.1 ha</small></span><i>+0.5 ha south edge</i></div></div></div>
    <div class="stack"><div class="panel"><header class="panel__header"><div><h2>Change review</h2><p>Impact is visible before publication</p></div></header><div class="panel__body"><div class="readiness-checklist"><strong>Validation evidence</strong><span>✓ SBI parcel source authorised</span><span>✓ No customer-account overlap</span><span>✓ Reason: access track included</span><span>! Affects open order SO-1046</span></div><div class="version-card"><small>Current → proposed</small><strong>31.6 ha → 32.1 ha</strong><p>The accepted order keeps its Area-version snapshot; Operations sees the published revision for future planning.</p></div></div></div><div class="panel"><header class="panel__header"><div><h2>Open geography work</h2><p>One shared queue</p></div></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("1")}<div><strong>North Holding duplicate field</strong><small>Imported parcel resembles North 12.</small></div>${status("Conflict","amber")}</div><div class="attention-item">${iconBadge("2")}<div><strong>Meadowbrook Farm setup</strong><small>Sales proposed a new farm; Operations must validate it.</small></div>${status("Proposed","blue")}</div></div></div></div></section>`;
}

function adminUsers() {
  return `${pageHeader("Admin · Tenant access", "Users & access", "Link people to the correct tenant role and authorised customer accounts without exposing the tenant-wide customer list.", `<button class="primary-button">Invite user</button>`)}
    <div class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>User</th><th>Role</th><th>Scope</th><th>Status</th></tr></thead><tbody><tr><td><div class="cell-title"><strong>Tom Green</strong><small>tom.green@example.test</small></div></td><td>Farmer</td><td>Green Estate · 3 farms</td><td>${status("Active","green")}</td></tr><tr><td><div class="cell-title"><strong>Emma Clarke</strong><small>North region</small></div></td><td>Sales / Account</td><td>Assigned accounts</td><td>${status("Active","green")}</td></tr><tr><td><div class="cell-title"><strong>Priya Shah</strong><small>Finance team</small></div></td><td>Finance</td><td>Invoices and reconciliation</td><td>${status("Active","green")}</td></tr><tr><td><div class="cell-title"><strong>Helen Brooks</strong><small>Tenant operations</small></div></td><td>Admin</td><td>Maps, users and integrations</td><td>${status("No refund authority","grey")}</td></tr></tbody></table></div></div>`;
}

function adminIntegrations() {
  return `${pageHeader("Admin · Replaceable adapters", "Integrations", "CRM, finance, geography, laboratory and parcel services are configured independently. Credentials and labels remain server-side and tenant-scoped.")}
    <section class="customer-grid">${[["CRM","Dynamics 365","Connected · last sync 08:42","green"],["PAY","Payment provider","Demo only · provider not selected","amber"],["MAP","SBI parcel import","Authorised account import enabled","green"],["LAB","Laboratory files","Secure upload design pending","blue"],["INV","Accounting / invoice","D365 Finance profile","green"],["API","S2L OpenAPI","Contract design in progress","grey"]].map(([initials,name,detail,tone]) => `<article class="customer-card integration-card"><header><span class="customer-monogram small">${initials}</span><div><h2>${name}</h2><p>${detail}</p></div>${status(tone === "green" ? "Ready" : tone === "amber" ? "Decision" : "Planned",tone)}</header></article>`).join("")}</section>
    <section class="panel carrier-section"><header class="panel__header"><div><h2>Parcel-service capability matrix</h2><p>Reference adapters only · no real account, material acceptance or production route has been approved</p></div>${status("Configuration decisions open","amber")}</header><div class="provider-grid">${[["DHL","DHL Express","Shipment, label, pickup and tracking reference","Pilot route candidate","blue"],["FDX","FedEx","Pickup availability, create and cancel reference","Not onboarded","grey"],["RM","Royal Mail","Click & Drop shipping and label reference","Collection capability unconfirmed","amber"],["+","Other carrier","Same S2L contract through a replaceable adapter","Extensible","green"]].map(([initials,name,capability,readiness,tone]) => `<article class="provider-card"><header><span>${initials}</span><div><strong>${name}</strong><small>${capability}</small></div></header><footer>${status(readiness,tone)}</footer></article>`).join("")}</div><div class="carrier-boundary"><span><strong>Admin grants</strong><small>Account, service, payer, format and route configuration</small></span><span><strong>Server only</strong><small>Credentials, provider callbacks, duplicate protection and private labels</small></span><span><strong>Still required</strong><small>Soil/package acceptance, dimensions, printer stock and collection rights</small></span><span><strong>Not implied</strong><small>A booking is not customer payment, invoice approval or continuous GPS</small></span></div></section>`;
}

function farmerLogin() {
  return `<section class="auth-page"><div class="auth-intro"><span class="auth-wordmark">S2L <small>Field Services</small></span><span class="eyebrow">S2L customer portal</span><h1>Welcome back</h1><p>Sign in to view only the farms, orders, payments and published reports linked to your authorised account.</p><div class="auth-promise"><span>✓</span><div><strong>Your account stays separate</strong><small>Farmers never see the tenant-wide customer list, internal notes or operator performance.</small></div></div></div><div class="auth-card"><div class="auth-switch"><button class="is-active" type="button">Sign in</button><button type="button" data-action="farmer-show-register">Register</button></div><div class="auth-card__body"><h2>Farmer sign in</h2><p>Use the fictional demonstration account below.</p><label class="form-field"><span>Email address</span><input type="email" value="tom.green@example.test" autocomplete="username" /></label><label class="form-field"><span>Password</span><input type="password" value="stakeholder-demo" autocomplete="current-password" /></label><div class="auth-row"><label class="terms-check"><input type="checkbox" checked /> Keep me signed in on this device</label><button class="text-button" type="button">Forgot password?</button></div><button class="primary-button full-width auth-submit" type="button" data-action="farmer-login">Sign in to demo</button><div class="auth-divider"><span>New to the portal?</span></div><button class="secondary-button full-width" type="button" data-action="farmer-show-register">Create farmer access</button><small class="auth-demo-note">Stakeholder demonstration only · no real account or password is used.</small></div></div></section>`;
}

function farmerRegister() {
  if (state.farmerRegistrationSubmitted) return `<section class="auth-page single"><div class="auth-card auth-confirmation"><div class="confirmation-icon">✓</div><span class="eyebrow">Access request received</span><h1>We will verify your farming business</h1><p>Your request does not create automatic access to customer data. An authorised administrator verifies Riverbend Farming and its farm permissions first; only a verified unowned account enters the Sales pool.</p><div class="registration-steps"><span class="done"><i>1</i><strong>Request sent</strong><small>Contact details recorded</small></span><span><i>2</i><strong>Account check</strong><small>Admin verifies the business</small></span><span><i>3</i><strong>Representative</strong><small>Unowned account enters the Sales pool</small></span></div><button class="primary-button full-width" type="button" data-action="farmer-show-login">Return to sign in</button><small class="auth-demo-note">Demo only · no email was sent, account assigned or data saved.</small></div></section>`;
  return `<section class="auth-page"><div class="auth-intro"><span class="auth-wordmark">S2L <small>Field Services</small></span><span class="eyebrow">Farmer registration</span><h1>Request portal access</h1><p>Tell S2L who you are and which farming business you represent. Registration requests verification; it does not expose existing customer data.</p><div class="registration-summary"><span><i>1</i><strong>Your details</strong></span><span><i>2</i><strong>Business verification</strong></span><span><i>3</i><strong>Admin approval</strong></span></div></div><div class="auth-card register-card"><div class="auth-switch"><button type="button" data-action="farmer-show-login">Sign in</button><button class="is-active" type="button">Register</button></div><div class="auth-card__body"><h2>Create an access request</h2><p>Use fictional information for this stakeholder demonstration.</p><div class="register-grid"><label class="form-field"><span>First name</span><input value="Lucy" /></label><label class="form-field"><span>Last name</span><input value="Walker" /></label><label class="form-field form-field--wide"><span>Work email</span><input type="email" value="lucy.walker@example.test" /></label><label class="form-field"><span>Farming business</span><input value="Riverbend Farming" /></label><label class="form-field"><span>Customer / account reference</span><input placeholder="Optional if known" /></label><label class="form-field"><span>Primary farm postcode</span><input value="BA6 8AA" /></label><label class="form-field"><span>Telephone</span><input value="07700 900 176" /></label></div><label class="terms-check register-consent"><input type="checkbox" checked /> I confirm I am authorised to request access for this farming business.</label><button class="primary-button full-width auth-submit" type="button" data-action="farmer-register">Submit access request</button><small class="auth-demo-note">No account access or Sales ownership is created until verification is complete.</small></div></div></section>`;
}

function farmerOverview() {
  const orderStatus = state.portalOrderSubmitted ? (state.paymentPaid ? "Confirmed · planning" : "Action required") : "Not started";
  return `${pageHeader("Green Estate portal", "Good morning, Tom", "See your own farms, accepted prices, progress and published reports. Internal notes and operator metrics stay private.", `<button class="secondary-button" data-action="farmer-logout">Sign out</button><button class="primary-button" data-action="farmer-new-order">Order sampling</button>`)}
    <section class="portal-hero"><div><span class="eyebrow">Your account</span><h2>Green Estate</h2><p>3 authorised farms · account terms plus deposit rules</p></div><div><small>Active orders</small><strong>${state.portalOrderSubmitted ? "3" : "2"}</strong></div><div><small>Amount due</small><strong>${state.portalOrderSubmitted && !state.paymentPaid ? "£354" : "£0"}</strong></div><div><small>Reports</small><strong>${state.reportPublished ? "2" : "1"}</strong></div></section>
    <section class="dashboard-grid"><div class="stack"><div class="panel"><header class="panel__header"><div><h2>Current work</h2><p>Real stages and dates, not a fake completion percentage</p></div><button class="text-button" data-action="farmer-orders">All orders →</button></header><div class="panel__body"><div class="customer-milestones"><span class="done">Submitted</span><span class="done">Confirmed</span><span class="done">Scheduled</span><span class="current">Sampling</span><span>At lab</span><span>Report</span></div><div class="portal-order-summary"><div><small>SO-1046 · Sales-assisted</small><strong>Autumn Soil Analysis</strong><p>East Meadow delayed by flooding. Return requested for Thursday; Operations is confirming access.</p></div>${status("Sampling delayed","amber")}</div></div></div>
      ${state.portalOrderSubmitted ? `<div class="panel"><header class="panel__header"><div><h2>SO-1058 · Your portal order</h2><p>East Meadow · 18 samples · accepted total £1,416</p></div>${status(orderStatus,state.paymentPaid ? "blue" : "amber")}</header><div class="panel__body"><div class="readiness-checklist"><strong>Order record</strong><span>✓ Source: Farmer portal</span><span>✓ Price and Area v4 snapshot retained</span><span>${state.paymentPaid ? "✓ Demo deposit verified" : "! Demo deposit of £354 due"}</span><span>${state.paymentPaid ? "✓ Released to Sampling Manager" : "○ Operational release waiting"}</span></div>${!state.paymentPaid ? `<button class="primary-button full-width" data-action="demo-payment">Demo: pay £354 deposit</button><p class="batch-note">No real payment. Production would use the provider's hosted checkout.</p>` : ""}</div></div>` : ""}
    </div><div class="stack"><div class="panel"><header class="panel__header"><div><h2>Actions for you</h2><p>Only customer-visible decisions</p></div></header><div class="panel__body attention-list">${state.portalOrderSubmitted && !state.paymentPaid ? `<div class="attention-item">${iconBadge("£","red")}<div><strong>Deposit required</strong><small>£354 must be verified before SO-1058 enters planning.</small></div><button class="text-button" data-action="demo-payment">Pay demo</button></div>` : ""}<div class="attention-item">${iconBadge("!")}<div><strong>Confirm East Meadow access</strong><small>Tell Operations whether the south track is usable Thursday.</small></div><button class="text-button">Respond</button></div><div class="attention-item">${iconBadge("R")}<div><strong>${state.reportPublished ? "New report available" : "North Holding report"}</strong><small>${state.reportPublished ? "SO-1046 final report v1 has been published." : "Published 2 September · PDF"}</small></div><button class="text-button" data-action="farmer-reports">View</button></div></div></div><div class="panel"><header class="panel__header"><div><h2>Your farms</h2><p>Read-only operational geography</p></div></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("H")}<div><strong>Home Farm</strong><small>5 fields · 68.4 ha</small></div>${status("Current","green")}</div><div class="attention-item">${iconBadge("E")}<div><strong>East Meadow</strong><small>${state.boundaryPublished ? "Boundary v4 · 32.1 ha" : "Correction under review"}</small></div>${status(state.boundaryPublished ? "Published" : "In review",state.boundaryPublished ? "green" : "amber")}</div></div></div></div></section>`;
}

function farmerOrders() {
  const logisticsMilestone = state.labParcelReconciled ? "At laboratory" : state.outboundCarrierDelivered ? "Delivered · lab check pending" : state.outboundHandedOver ? "On way to laboratory" : state.outboundBooked ? "Collection booked" : state.dispatchReconciled ? "Preparing dispatch" : "Samples reconciling";
  return `${pageHeader("Green Estate portal", "My orders", "Sales-assisted and self-service orders appear together with source, accepted price and customer-visible progress.", `<button class="primary-button" data-action="farmer-new-order">New order</button>`)}
    <div class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Order</th><th>Service / Areas</th><th>Price</th><th>Progress</th><th>Payment</th></tr></thead><tbody>${state.portalOrderSubmitted ? `<tr class="new-row"><td><div class="cell-title"><strong>SO-1058</strong><small>Farmer portal · submitted today</small></div></td><td><div class="cell-title"><strong>Standard soil analysis</strong><small>East Meadow · 18 samples</small></div></td><td class="money">£1,416</td><td>${status(state.paymentPaid ? "Planning" : "Awaiting payment",state.paymentPaid ? "blue" : "amber")}</td><td>${status(state.paymentPaid ? "£354 paid" : "£354 due",state.paymentPaid ? "green" : "amber")}</td></tr>` : ""}<tr class="new-row"><td><div class="cell-title"><strong>SO-1049</strong><small>Sales-assisted · customer milestone only</small></div></td><td><div class="cell-title"><strong>Lower Field baseline</strong><small>12 samples · parcel details private</small></div></td><td class="money">£1,860</td><td>${status(logisticsMilestone,state.labParcelReconciled ? "green" : state.outboundHandedOver ? "blue" : "amber")}</td><td>${status("Account terms","grey")}</td></tr><tr><td><div class="cell-title"><strong>SO-1046</strong><small>Sales-assisted</small></div></td><td><div class="cell-title"><strong>Autumn Soil Analysis</strong><small>5 fields · 75 samples</small></div></td><td class="money">£4,200</td><td>${status("Sampling delayed","amber")}</td><td>${status("Account terms","grey")}</td></tr><tr><td><div class="cell-title"><strong>SO-1035</strong><small>Sales-assisted</small></div></td><td><div class="cell-title"><strong>Spring nutrient plan</strong><small>North Holding · final</small></div></td><td class="money">£2,960</td><td>${status("Report available","green")}</td><td>${status("Paid","green")}</td></tr></tbody></table></div></div>`;
}

function farmerNewOrder() {
  if (state.portalOrderSubmitted) return `${pageHeader("Green Estate portal", "Order submitted", "SO-1058 keeps the accepted commercial and Area-version snapshot. No salesperson or opportunity was required.")}<section class="confirmation-panel"><span>✓</span><div><small>SO-1058 · Source FARMER_PORTAL</small><h2>Standard soil analysis requested</h2><p>East Meadow · 18 samples · requested 21 September · accepted total £1,416 including VAT.</p><div class="readiness-checklist"><span>✓ Authorised Area checked</span><span>✓ Price version AGR-2026-09 retained</span><span>✓ Terms accepted at submission</span><span>${state.paymentPaid ? "✓ Deposit verified · released to planning" : "! £354 demo deposit required before release"}</span></div><button class="primary-button" data-action="${state.paymentPaid ? "farmer-orders" : "demo-payment"}">${state.paymentPaid ? "View my orders" : "Demo: pay £354 deposit"}</button><p class="batch-note">No real payment is collected in this stakeholder prototype.</p></div></section>`;
  return `${pageHeader("Green Estate portal", "Order soil sampling", "Choose authorised Areas and services, then review the authoritative price and payment terms before submission.")}
    <section class="portal-order-grid"><div class="panel"><header class="panel__header"><div><h2>1 · Scope</h2><p>Your authorised account and Areas only</p></div>${status("Green Estate","green")}</header><div class="panel__body portal-form"><label class="form-field"><span>Farm</span><select><option>Home Farm</option><option selected>East Meadow</option><option>North Holding</option></select></label><label class="form-field"><span>Area</span><select><option selected>East Meadow · Boundary v4 · 32.1 ha</option><option>Lower Field · 14.8 ha</option></select></label><label class="form-field"><span>Service</span><select><option selected>Standard soil analysis · P, K, Mg, pH</option><option>Precision nutrient plan</option></select></label><label class="form-field"><span>Requested timing</span><input type="date" value="2026-09-21" /></label><label class="form-field form-field--wide"><span>Access notes</span><textarea rows="3">Use south access track if dry. Please call before arrival.</textarea></label><button class="text-button" data-action="request-map-correction">Area missing or incorrect? Request a correction</button></div></div>
    <aside class="panel price-panel"><header class="panel__header"><div><h2>2 · Price & terms</h2><p>Authoritative catalogue version AGR-2026-09</p></div></header><div class="panel__body"><div class="price-lines"><span><small>18 samples × £60</small><strong>£1,080</strong></span><span><small>Field mobilisation</small><strong>£100</strong></span><span><small>Net</small><strong>£1,180</strong></span><span><small>VAT · 20%</small><strong>£236</strong></span><span class="total"><small>Total</small><strong>£1,416</strong></span></div><div class="payment-rule"><strong>25% deposit required</strong><p>£354 through hosted checkout. Remaining £1,062 follows agreed account terms.</p></div><label class="terms-check"><input type="checkbox" checked /> I accept the displayed price, service scope and commercial terms.</label><button class="primary-button full-width" data-action="submit-portal-order">Submit order</button><p class="batch-note">Demo only. The browser total is not trusted by the production design.</p></div></aside></section>`;
}

function farmerSupport() {
  if (state.supportSubmitted) return `${pageHeader("Green Estate portal", "Support request sent", "Your request is open and routed to your current S2L representative.")}
    <section class="confirmation-panel"><span>✓</span><div><small>SUP-204 · Submitted just now</small><h2>Emma Clarke has been notified</h2><p>Gate access for Thursday return · linked to SO-1046. An in-app alert and SMS delivery intent were created; reading either does not resolve the request.</p><div class="readiness-checklist"><span>✓ In-app request retained</span><span>✓ SMS submitted to verified work number</span><span>○ Awaiting representative response</span></div><button class="secondary-button" data-view="overview">Return home</button></div></section>`;
  return `${pageHeader("Green Estate portal", "Contact support", "Ask your assigned representative about an order, access, service or account issue.")}
    <section class="support-layout"><div class="panel support-contact"><div class="support-contact__avatar">EC</div><div><span class="eyebrow">Your S2L representative</span><h2>Emma Clarke</h2><p>Regional Account Manager · North region</p><div class="support-contact__details"><span><small>Telephone</small><strong>01225 555 014</strong></span><span><small>Support hours</small><strong>Mon–Fri · 08:00–17:00</strong></span></div></div></div><div class="panel"><header class="panel__header"><div><h2>Send a support request</h2><p>The full request stays inside the authorised portal.</p></div></header><div class="panel__body support-form"><label class="form-field"><span>Topic</span><select><option selected>Access or appointment</option><option>Existing order</option><option>Payment or invoice</option><option>Account access</option><option>Other</option></select></label><label class="form-field"><span>Related order</span><select><option selected>SO-1046 · Autumn Soil Analysis</option><option>General question</option></select></label><label class="form-field form-field--wide"><span>How can we help?</span><textarea rows="5">Can Sarah use the north gate for Thursday's return? The east track may still be waterlogged.</textarea></label><div class="support-privacy"><strong>SMS stays minimal</strong><span>The SMS contains only SUP-204 and a secure sign-in link—not this support text or commercial information.</span></div><button class="primary-button" data-action="submit-support-request">Send support request</button></div></div></section>`;
}

function farmerMaps() {
  return `${pageHeader("Green Estate portal", "My farms & maps", "Maps are read-only for this account. Missing or incorrect Areas create a correction request for Admin and Operations.", `<button class="primary-button" data-action="request-map-correction">Request correction</button>`)}
    <section class="area-layout"><div class="panel"><div class="area-preview admin-map"><div class="area-preview__field"><span>Home Farm<small>68.4 ha</small></span></div><div class="area-preview__field second proposed"><span>East Meadow<small>${state.boundaryPublished ? "v4 · 32.1 ha" : "v3 · review open"}</small></span></div><div class="area-preview__field third"><span>North Holding<small>46.2 ha</small></span></div></div></div><aside class="panel"><header class="panel__header"><div><h2>Authorised geography</h2><p>Green Estate only</p></div></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("H")}<div><strong>Home Farm</strong><small>5 fields · current</small></div>${status("Published","green")}</div><div class="attention-item">${iconBadge("E")}<div><strong>East Meadow</strong><small>${state.boundaryPublished ? "Boundary v4 published" : "Correction request with Admin"}</small></div>${status(state.boundaryPublished ? "Published" : "In review",state.boundaryPublished ? "green" : "amber")}</div></div></aside></section>`;
}

function farmerReports() {
  return `${pageHeader("Green Estate portal", "Reports", "Only published files for your authorised account are visible. Draft, withdrawn and other-customer files stay hidden.")}
    <section class="report-grid">${state.reportPublished ? `<article class="report-card is-new"><div class="report-file">PDF</div><div><span class="eyebrow">New · Final · v1</span><h2>SO-1046 Autumn Soil Analysis</h2><p>Home Farm and East Meadow · published today by laboratory</p><div class="timeline-tags"><span class="tag green">Published</span><span class="tag grey">75 samples</span><span class="tag grey">P, K, Mg, pH</span></div></div><div class="report-actions"><button class="secondary-button" data-action="view-report">View report</button><button class="text-button">Download</button></div></article>` : ""}<article class="report-card"><div class="report-file">PDF</div><div><span class="eyebrow">Final · v2</span><h2>SO-1035 Spring Nutrient Plan</h2><p>North Holding · published 2 September 2026</p><div class="timeline-tags"><span class="tag green">Published</span><span class="tag grey">42 samples</span></div></div><div class="report-actions"><button class="secondary-button" data-action="view-report">View report</button><button class="text-button">Download</button></div></article></section>`;
}

function farmerPayments() {
  return `${pageHeader("Green Estate portal", "Payments & invoices", "Payment state, invoice state and operational progress remain separate.")}
    <section class="kpi-grid compact-kpis">${kpi("Amount due", state.portalOrderSubmitted && !state.paymentPaid ? "£354" : "£0", state.portalOrderSubmitted && !state.paymentPaid ? "SO-1058 deposit" : "No action required", "#e9a13b")}${kpi("Paid this season", state.paymentPaid ? "£3,314" : "£2,960", "Verified transactions", "#7bbf45")}${kpi("Open invoices", "1", "£1,480 due 2 Oct", "#3979a8")}${kpi("Account terms", "30 days", "Approved customer account", "#7d5b94")}</section>
    <div class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Reference</th><th>Type</th><th>Amount</th><th>Status</th><th>Meaning</th></tr></thead><tbody>${state.portalOrderSubmitted ? `<tr><td>SO-1058</td><td>25% deposit</td><td class="money">£354</td><td>${status(state.paymentPaid ? "Paid" : "Due",state.paymentPaid ? "green" : "amber")}</td><td>${state.paymentPaid ? "Order released to planning" : "Operational release waiting"}</td></tr>` : ""}<tr><td>INV-2084</td><td>Invoice</td><td class="money">£1,480</td><td>${status("Due 2 Oct","blue")}</td><td>Does not block published report access</td></tr><tr><td>SO-1035</td><td>Account payment</td><td class="money">£2,960</td><td>${status("Paid","green")}</td><td>Reconciled 5 Sep</td></tr></tbody></table></div></div>`;
}

function financeOverview() {
  return `<section class="finance-hero"><div class="finance-hero__intro"><span class="eyebrow" style="color:#bdd2ca">September billing cycle</span><h1>Invoice readiness</h1><p>See delivered value, portal payments and exactly what prevents the remainder from being invoiced.</p></div><div class="finance-hero__metric"><small>Ready to invoice</small><strong>£48,620</strong><span>8 orders · +£7,250 this week</span></div><div class="finance-hero__metric"><small>Awaiting completion</small><strong>£17,340</strong><span>5 orders progressing</span></div><div class="finance-hero__metric"><small>Blocked</small><strong>£4,120</strong><span>3 exceptions to resolve</span></div></section>
    <section class="dashboard-grid"><div class="panel"><header class="panel__header"><div><h2>Order invoice readiness</h2><p>Sampling, laboratory and commercial checks reconciled in one view</p></div><button class="primary-button">Create invoice batch</button></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Customer / order</th><th>Value</th><th>Delivery checks</th><th>Invoice status</th></tr></thead><tbody>
      <tr><td><div class="cell-title"><strong>Smith & Sons</strong><small>SO-1042 · Precision Nutrient Plan</small></div></td><td class="money">£8,850</td><td><div class="readiness-steps"><span class="readiness-step done"><i></i>Sampled</span><span class="readiness-step done"><i></i>Lab</span><span class="readiness-step done"><i></i>Results</span><span class="readiness-step done"><i></i>Approved</span></div></td><td>${status("Ready","green")}</td></tr>
      <tr data-clickable><td><div class="cell-title"><strong>Green Estate</strong><small>SO-1046 · Autumn Soil Analysis</small></div></td><td class="money">£4,200</td><td><div class="readiness-steps"><span class="readiness-step current"><i></i>Sampled</span><span class="readiness-step"><i></i>Lab</span><span class="readiness-step"><i></i>Results</span><span class="readiness-step"><i></i>Approved</span></div></td><td>${status("Weather delay","amber")}</td></tr>
      <tr><td><div class="cell-title"><strong>Hilltop Partnership</strong><small>SO-1038 · Soil Carbon Baseline</small></div></td><td class="money">£6,780</td><td><div class="readiness-steps"><span class="readiness-step done"><i></i>Sampled</span><span class="readiness-step done"><i></i>Lab</span><span class="readiness-step current"><i></i>Results</span><span class="readiness-step"><i></i>Approved</span></div></td><td>${status("2 results missing","amber")}</td></tr>
      <tr><td><div class="cell-title"><strong>Brown Farming Ltd</strong><small>SO-1051 · West Farm Sampling</small></div></td><td class="money">£1,900</td><td><div class="readiness-steps"><span class="readiness-step current"><i></i>Sampled</span><span class="readiness-step"><i></i>Lab</span><span class="readiness-step"><i></i>Results</span><span class="readiness-step"><i></i>Approved</span></div></td><td>${status("Partial","red")}</td></tr>
    </tbody></table></div></div>
    <div class="stack"><div class="panel"><header class="panel__header"><div><h2>Why work is blocked</h2><p>Current value by exception</p></div><span class="tag red">£4,120</span></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("!","red")}<div><strong>Sampling incomplete</strong><small>Green Estate · flooding delayed 27 samples</small></div><span class="money">£2,220</span></div><div class="attention-item">${iconBadge("2")}<div><strong>Results outstanding</strong><small>Hilltop Partnership · 2 of 54 results missing</small></div><span class="money">£1,300</span></div><div class="attention-item">${iconBadge("?")}<div><strong>Commercial review</strong><small>Brown Farming · scope variation pending</small></div><span class="money">£600</span></div></div></div>
    <div class="panel"><header class="panel__header"><div><h2>Green Estate detail</h2><p>SO-1046 readiness explanation</p></div></header><div class="panel__body"><div class="timeline"><article class="timeline-item"><span class="timeline-marker">75</span><div class="timeline-content"><h3>75 samples ordered</h3><p>Order value £4,200 · completion gate requires all results.</p></div></article><article class="timeline-item"><span class="timeline-marker">48</span><div class="timeline-content"><h3>48 samples collected</h3><p>27 outstanding due to confirmed flooding and blocked access.</p></div></article><article class="timeline-item"><span class="timeline-marker">32</span><div class="timeline-content"><h3>32 received by lab</h3><p>All received samples reconciled successfully.</p></div></article><article class="timeline-item"><span class="timeline-marker">!</span><div class="timeline-content"><h3>Invoice status: waiting</h3><p>Rescheduled fieldwork planned for Thursday 10 September.</p></div></article></div></div></div></div></section>`;
}

function financeReady() {
  return `${pageHeader("Finance · September billing", "Ready to invoice", "Eight orders have passed delivery, result and commercial checks and can be billed now.", `<button class="secondary-button">Download evidence</button><button class="primary-button" data-action="invoice-batch">Create invoice batch · £48,620</button>`)}
    <section class="invoice-batch-grid"><div class="panel"><header class="panel__header"><div><h2>Orders selected for billing</h2><p>8 of 8 ready orders selected</p></div><label class="select-all"><input type="checkbox" checked /> Select all</label></header><div class="table-wrap"><table class="data-table"><thead><tr><th></th><th>Customer / order</th><th>Delivered</th><th>Evidence</th><th>Value</th></tr></thead><tbody>
      ${[["Smith & Sons","SO-1042","84 samples · report published","Complete","£8,850"],["Lower Park Estates","SO-1036","42 samples · report approved","Complete","£7,240"],["Mere Valley Farms","SO-1029","66 samples · report published","Complete","£6,980"],["Oakfield Growers","SO-1040","38 samples · report approved","Complete","£5,760"],["Northgate Estate","SO-1034","52 samples · results delivered","Complete","£5,490"],["Elms Partnership","SO-1025","31 samples · report published","Complete","£4,800"],["Red Barn Farms","SO-1044","28 samples · report approved","Complete","£4,260"],["Wessex Produce","SO-1031","34 samples · results delivered","Complete","£5,240"]].map(([customer,order,delivered,evidence,value]) => `<tr><td><input type="checkbox" checked aria-label="Select ${order}" /></td><td><div class="cell-title"><strong>${customer}</strong><small>${order}</small></div></td><td><div class="cell-title"><strong>${delivered}</strong><small>No open exceptions</small></div></td><td>${status(evidence,"green")}</td><td class="money">${value}</td></tr>`).join("")}
    </tbody></table></div></div><aside class="panel batch-summary"><header class="panel__header"><div><h2>Batch summary</h2><p>Draft · September week 2</p></div></header><div class="panel__body"><div class="batch-total"><small>Invoice total</small><strong>£48,620</strong><span>8 customers · 8 orders</span></div><div class="summary-lines"><span><small>Net value</small><strong>£48,620</strong></span><span><small>VAT estimate</small><strong>£9,724</strong></span><span><small>Gross estimate</small><strong>£58,344</strong></span></div><div class="readiness-checklist"><strong>All readiness checks passed</strong><span>✓ Sampling reconciliation complete</span><span>✓ Results delivered or approved</span><span>✓ No blocking exceptions</span><span>✓ Customer references present</span></div><button class="primary-button full-width" data-action="invoice-batch">Create invoice batch</button><p class="batch-note">Creates a reviewable draft. Nothing is posted to finance automatically.</p></div></aside></section>`;
}

function financeOrders() {
  return `${pageHeader("Finance · Order ledger", "Orders", "Review the full commercial ledger and understand each order's current billing position.", `<button class="secondary-button">Export ledger</button><button class="primary-button">Reconcile orders</button>`)}
    <section class="kpi-grid compact-kpis">${kpi("Total order value", "£214k", "35 orders this season", "#3979a8")}${kpi("Invoiced", "£143k", "67% of seasonal value", "#7bbf45", "67")}${kpi("Ready", "£48.6k", "8 orders", "#7bbf45")}${kpi("Not ready", "£21.9k", "8 orders · 3 blocked", "#e9a13b")}</section>
    <div class="panel"><header class="panel__header"><div><h2>Commercial order ledger</h2><p>Delivery and billing state across all active orders</p></div><div class="filter-chips"><button class="is-active">All</button><button>Ready 8</button><button>Blocked 3</button><button>Invoiced 19</button></div></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Order</th><th>Customer</th><th>Order value</th><th>Delivery state</th><th>Billing state</th><th>Next action</th></tr></thead><tbody>
      ${state.portalOrderSubmitted ? `<tr class="new-row"><td><strong>SO-1058</strong><small>Farmer portal</small></td><td><div class="cell-title"><strong>Green Estate</strong><small>Standard soil analysis</small></div></td><td class="money">£1,416</td><td>${status(state.paymentPaid ? "Planning" : "Commercial hold",state.paymentPaid ? "blue" : "amber")}</td><td>${status(state.paymentPaid ? "Deposit reconciled" : "Deposit due",state.paymentPaid ? "green" : "amber")}</td><td><div class="cell-title"><strong>${state.paymentPaid ? "£354 verified" : "Await payment"}</strong><small>Invoice and delivery remain separate</small></div></td></tr>` : ""}
      <tr class="new-row"><td><strong>SO-1049</strong><small>Integrated logistics demo</small></td><td><div class="cell-title"><strong>Green Estate</strong><small>Lower Field baseline</small></div></td><td class="money">£1,860</td><td>${status(state.labParcelReconciled ? "Lab receipt partial" : state.outboundHandedOver ? "In transit" : "Sampling complete",state.labParcelReconciled ? "blue" : state.outboundHandedOver ? "blue" : "amber")}</td><td>${status("Waiting for report","amber")}</td><td><div class="cell-title"><strong>Logistics is not invoice approval</strong><small>Pod return remains a separate branch</small></div></td></tr>
      <tr><td><strong>SO-1042</strong></td><td><div class="cell-title"><strong>Smith & Sons</strong><small>Precision Nutrient Plan</small></div></td><td class="money">£8,850</td><td>${status("Delivered","green")}</td><td>${status("Ready","green")}</td><td><button class="text-button">Add to batch</button></td></tr>
      <tr><td><strong>SO-1046</strong></td><td><div class="cell-title"><strong>Green Estate</strong><small>Autumn Soil Analysis</small></div></td><td class="money">£4,200</td><td>${status("64% sampled","amber")}</td><td>${status("Waiting","amber")}</td><td><div class="cell-title"><strong>27 samples outstanding</strong><small>Return planned Thu</small></div></td></tr>
      <tr><td><strong>SO-1038</strong></td><td><div class="cell-title"><strong>Hilltop Partnership</strong><small>Soil Carbon Baseline</small></div></td><td class="money">£6,780</td><td>${status("Results pending","amber")}</td><td>${status("Waiting","amber")}</td><td><div class="cell-title"><strong>Chase 2 results</strong><small>Lab ETA tomorrow</small></div></td></tr>
      <tr><td><strong>SO-1051</strong></td><td><div class="cell-title"><strong>Brown Farming Ltd</strong><small>West Farm Sampling</small></div></td><td class="money">£1,900</td><td>${status("Partial","red")}</td><td>${status("Blocked","red")}</td><td><div class="cell-title"><strong>Approve variation</strong><small>£600 commercial change</small></div></td></tr>
      <tr><td><strong>SO-1036</strong></td><td><div class="cell-title"><strong>Lower Park Estates</strong><small>Autumn Soil Analysis</small></div></td><td class="money">£7,240</td><td>${status("Delivered","green")}</td><td>${status("Ready","green")}</td><td><button class="text-button">Add to batch</button></td></tr>
      <tr><td><strong>SO-1022</strong></td><td><div class="cell-title"><strong>Ashcombe Farms</strong><small>Spring Nutrient Plan</small></div></td><td class="money">£5,150</td><td>${status("Complete","grey")}</td><td>${status("INV-2084","blue")}</td><td><div class="cell-title"><strong>Invoiced 2 Sep</strong><small>Due 2 Oct</small></div></td></tr>
    </tbody></table></div></div>`;
}

function financeReconciliation() {
  return `${pageHeader("Finance · Exception-only workflow", "Reconciliation", "Normal Smart Case matches happen silently. Only ambiguous or unmatched evidence needs a person.")}
    <section class="reconciliation-grid"><div class="panel"><header class="panel__header"><div><h2>Sample S8344</h2><p>Captured 8 Sep · 14:18 · Area: Long Meadow</p></div>${status("2 credible matches","amber")}</header><div class="panel__body"><div class="evidence-grid"><span><small>Operator</small><strong>Pedro Ruiz</strong></span><span><small>Smart Case</small><strong>SC-011</strong></span><span><small>Capture accuracy</small><strong>±1.6 m</strong></span><span><small>Original evidence</small><strong>Preserved</strong></span></div><div class="candidate-list"><label><input type="radio" name="candidate" checked /><span><strong>JOB-147 · Manor Farm</strong><small>Same operator and allocated case · Area boundary 18 m away · assignment active at capture time</small></span>${status("High confidence","green")}</label><label><input type="radio" name="candidate" /><span><strong>JOB-149 · Long Meadow</strong><small>Exact Area match · different planned operator · starts tomorrow</small></span>${status("Possible","amber")}</label></div><div class="job-actions"><button class="secondary-button">Leave unresolved</button><button class="primary-button" data-action="resolve-match">Link to JOB-147</button></div></div></div><aside class="panel"><header class="panel__header"><div><h2>Evidence rule</h2><p>Reconciliation never rewrites field facts</p></div></header><div class="panel__body"><div class="readiness-checklist"><strong>Available decisions</strong><span>✓ Link to an existing Job / Order</span><span>✓ Mark legitimate unplanned non-billable work</span><span>✓ Leave unresolved for investigation</span><span>— Never alter timestamp, location or Case evidence</span></div></div></aside></section>`;
}

function labIncoming() {
  const carrierState = state.outboundCarrierDelivered ? "Carrier delivered" : state.outboundHandedOver ? "In transit" : state.outboundBooked ? "Awaiting handover" : "Not dispatched";
  return `${pageHeader("Laboratory · Physical intake", "Incoming parcels", "Carrier delivery and laboratory acceptance are different events. Reconcile the parcel, pods and condition against the immutable handover manifest.")}
    <section class="logistics-grid"><div class="stack"><div class="panel"><header class="panel__header"><div><h2>SHP-9034 · Green Estate</h2><p>SO-1049 · outbound to laboratory · two parcels</p></div>${status(state.labParcelReconciled ? "Receipt partial" : carrierState,state.labParcelReconciled ? "amber" : state.outboundCarrierDelivered ? "blue" : "grey")}</header><div class="panel__body"><div class="shipment-outcomes"><div><small>Provider evidence</small><strong>${state.outboundCarrierDelivered ? "Delivered · 15 Sep 09:18" : carrierState}</strong><span>${state.outboundCarrierDelivered ? "Event retrieved 09:21 · Bristol · provider-reported" : "No delivery evidence available"}</span></div><div><small>Laboratory custody</small><strong>${state.labParcelReconciled ? "Parcel 1 reconciled · Parcel 2 pending" : "Not yet accepted"}</strong><span>${state.labParcelReconciled ? "6 pods physically identified; condition recorded" : "Carrier status cannot accept expected contents"}</span></div></div>${state.outboundHandedOver && !state.outboundCarrierDelivered ? `<button class="secondary-button full-width" data-action="carrier-deliver-lab">Simulate carrier delivery</button>` : ""}${state.outboundCarrierDelivered && !state.labParcelReconciled ? `<button class="primary-button full-width lab-touch-button" data-action="lab-reconcile-parcel">Reconcile physical parcel contents</button>` : ""}</div></div>
      <div class="panel"><header class="panel__header"><div><h2>Manifest reconciliation</h2><p>M-1049-v3 remains unchanged after handover</p></div><span class="tag blue">Per parcel</span></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Parcel</th><th>Expected</th><th>Actual intake</th><th>Condition</th></tr></thead><tbody><tr><td><div class="cell-title"><strong>TRAY-008-A</strong><small>Tracking 1550 9034 01</small></div></td><td>6 pods</td><td>${state.labParcelReconciled ? "6 identified" : "Awaiting count"}</td><td>${status(state.labParcelReconciled ? "Accepted" : "Pending",state.labParcelReconciled ? "green" : "grey")}</td></tr><tr><td><div class="cell-title"><strong>TRAY-008-B</strong><small>Tracking 1550 9034 02</small></div></td><td>6 pods</td><td>${state.labParcelReconciled ? "Not physically received" : "Awaiting count"}</td><td>${status(state.labParcelReconciled ? "Receipt pending" : "Pending",state.labParcelReconciled ? "amber" : "grey")}</td></tr></tbody></table></div>${state.labParcelReconciled ? `<div class="discrepancy-strip"><span>!</span><div><strong>Partial receipt retained</strong><small>Parcel 2 stays outstanding. The carrier delivery event did not mark its six pods as received.</small></div></div>` : ""}</div></div>
    <aside class="stack"><div class="panel"><header class="panel__header"><div><h2>Inbound details</h2><p>Visible only to authorised logistics users</p></div></header><div class="panel__body address-stack"><div class="address-snapshot"><small>Original collection snapshot</small><strong>Green Estate Collection Yard</strong><span>West Lane, Bruton, BA10 0AB</span></div><div class="route-arrow">↓</div><div class="address-snapshot destination"><small>Laboratory destination</small><strong>e-nano Pilot Laboratory</strong><span>Unit 4, Innovation Park, Bristol, BS16 7FR</span></div></div></div><div class="panel"><header class="panel__header"><div><h2>Receipt rule</h2><p>Actual identities and condition win</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>✓ Scan and identify each physical pod</span><span>✓ Record missing, extra, damaged or unknown items</span><span>✓ Keep carrier and lab events separate</span><span>— Never accept the full manifest from a carrier scan</span></div></div></div></aside></section>`;
}

function labReturns() {
  const eligible = state.returnPodsReleased;
  const bookingAction = !eligible
    ? `<button class="primary-button" data-action="lab-release-pods" ${state.labParcelReconciled ? "" : "disabled"}>Confirm empty pods & remove liners</button>`
    : !state.returnBooked
      ? `<button class="primary-button" data-action="lab-book-return">Book return collection</button>`
      : `<button class="primary-button" data-action="lab-print-return">${state.returnLabelPrinted ? "Reprint return label" : "Print return label"}</button>`;
  return `${pageHeader("Laboratory · Reusable pod custody", "Empty pod returns", "Return only physically received pods that are empty, contain no liner and are released from laboratory use. Partial returns must stay explicit.")}
    <section class="logistics-grid"><div class="stack"><div class="panel"><header class="panel__header"><div><h2>SO-1049 · TRAY-008-A</h2><p>Six pods received · return group derived from original outbound origin</p></div>${status(state.returnBooked ? "Return booked" : eligible ? "5 pods return ready" : state.labParcelReconciled ? "Release checks required" : "Awaiting receipt",state.returnBooked ? "blue" : eligible ? "green" : "amber")}</header><div class="table-wrap"><table class="data-table pod-return-table"><thead><tr><th>Pod</th><th>Physical receipt</th><th>Empty / liner</th><th>Lab release</th><th>Return state</th></tr></thead><tbody>${["P1042","P1043","P1044","P1045","P1046"].map(pod => `<tr><td><strong>${pod}</strong></td><td>${status(state.labParcelReconciled ? "Received" : "Pending",state.labParcelReconciled ? "green" : "grey")}</td><td>${status(eligible ? "Empty · no liner" : "Check required",eligible ? "green" : "amber")}</td><td>${status(eligible ? "Released" : "Pending",eligible ? "green" : "grey")}</td><td>${status(state.returnBooked ? "Allocated RET-779" : eligible ? "Eligible" : "Blocked",state.returnBooked ? "blue" : eligible ? "green" : "grey")}</td></tr>`).join("")}<tr class="held-row"><td><strong>P1047</strong></td><td>${status(state.labParcelReconciled ? "Received" : "Pending",state.labParcelReconciled ? "green" : "grey")}</td><td>${status("Sample retained","amber")}</td><td>${status("In lab use","amber")}</td><td>${status("Excluded","grey")}</td></tr></tbody></table></div><div class="panel__body return-footer"><div><strong>Partial return</strong><span>Five eligible pods may leave while P1047 remains visibly outstanding. Empty does not mean clean or reusable.</span></div>${bookingAction}</div></div>
      <div class="panel"><header class="panel__header"><div><h2>Return parcel RET-779</h2><p>Five empty pods · no liners · 4.6 kg gross</p></div>${status(state.returnLabelPrinted ? "Label printed" : state.returnBooked ? "Collection confirmed" : "Draft",state.returnBooked ? "green" : "grey")}</header><div class="panel__body"><div class="shipment-outcomes"><div><small>Return shipment</small><strong>${state.returnBooked ? "Created · RET-779" : "Not submitted"}</strong><span>DHL demo route · carrier may differ from outbound</span></div><div><small>Collection</small><strong>${state.returnBooked ? "Confirmed · 18 Sep 14:00–17:00" : "No provider request"}</strong><span>e-nano Pilot Laboratory goods entrance</span></div><div><small>Return label</small><strong>${state.returnLabelPrinted ? "Issued and printed" : state.returnBooked ? "Issued · ready to print" : "Not issued"}</strong><span>Reprint never creates another shipment or charge</span></div></div>${state.returnLabelPrinted && !state.returnCarrierDelivered ? `<button class="secondary-button full-width" data-action="carrier-return-deliver">Simulate tracked return delivery</button>` : ""}</div></div></div>
    <aside class="stack"><div class="panel"><header class="panel__header"><div><h2>Return destination</h2><p>Locked from outbound provenance</p></div></header><div class="panel__body"><div class="address-snapshot return-destination"><small>Original collection-address snapshot</small><strong>Green Estate Collection Yard</strong><span>West Lane, Bruton, BA10 0AB</span><span>Tom Green · 07700 900 142</span></div><div class="gate-boundary"><strong>Not taken from</strong><span>Current customer address, invoice address, farm by assumption, laboratory default or carrier account.</span></div></div></div><div class="panel"><header class="panel__header"><div><h2>Release boundary</h2><p>Return and analysis stay independent</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>✓ Preserve soil and liner under original Sample identity</span><span>✓ Record responsible lab user and release time</span><span>✓ Block unreceived, non-empty, liner-containing or held pods</span><span>— Liner removal is not decontamination</span><span>— Pod return does not publish a report or issue an invoice</span></div></div></div></aside></section>`;
}

function labOverview() {
  const scanPanel = state.labScanned ? `<div class="lab-order-context"><div class="lab-order-heading"><div><small>Pod P1042 resolved to Active Order</small><strong>SO-1046 · Green Estate</strong><span>Autumn Soil Analysis · North Block</span></div>${status("Receiving","blue")}</div><div class="lab-receipt-progress"><span><small>Received</small><strong>7 / 10</strong></span>${progress(70,"3 samples still expected")}</div><div class="lab-order-detail-grid"><div><small>Latest Sample</small><strong>S8271</strong><span>Pod ID stays secondary</span></div><div><small>Requested tests</small><strong>P, K, Mg, pH</strong><span>Order-defined</span></div><div><small>Aggregation</small><strong>North Block · 2 / 3</strong><span>Awaiting S8310</span></div><div><small>Reporting Area</small><strong>North Block</strong><span>From SO-1046</span></div></div><button class="primary-button full-width lab-touch-button" data-action="lab-open-receiving">Open receiving details</button></div>` : `<div class="lab-scanner-ready"><span class="scanner-icon">▦</span><strong>Scan the first pod</strong><p>The pod QR resolves the Sample and opens its Order automatically. No manual search is required.</p><button class="primary-button lab-touch-button" data-action="lab-scan">Simulate pod scan</button></div>`;

  return `${pageHeader("Laboratory · Order-driven workspace", "Active laboratory orders", "The first valid pod scan activates the Order and reveals expected samples, tests, aggregation instructions and reporting Areas.", `<button class="secondary-button">Print labels</button><button class="primary-button" data-action="lab-scan">Scan pod</button>`)}
    <section class="kpi-grid compact-kpis">${kpi("Active orders", state.labScanned ? "4" : "3", state.labScanned ? "SO-1046 opened by scan" : "Laboratory work outstanding", "#3979a8")}${kpi("Expected samples", "42", "30 received", "#7bbf45")}${kpi("Prep required", "8", "3 aggregations", "#e9a13b")}${kpi("Exceptions", "2", "1 unmatched pod", "#c8534d")}</section>
    <section class="lab-layout"><div class="panel lab-station"><header class="panel__header"><div><h2>Lab Station</h2><p>Pod scan → Sample → Order context</p></div>${status(state.labScanned ? "Order opened" : "Scanner ready","green")}</header><div class="panel__body">${scanPanel}</div></div>
    <div class="panel"><header class="panel__header"><div><h2>Active Orders</h2><p>Orders with physical arrivals and outstanding laboratory work</p></div><span class="tag blue">${state.labScanned ? "4 active" : "3 active"}</span></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Order</th><th>Receipt</th><th>Tests / prep</th><th>Status</th></tr></thead><tbody>
      ${state.labScanned ? `<tr class="new-row"><td><div class="cell-title"><strong>SO-1046 · Green Estate</strong><small>Activated by Pod P1042 scan</small></div></td><td>${progress(70,"7 / 10 received")}</td><td><div class="cell-title"><strong>P, K, Mg, pH</strong><small>Aggregation North Block · 2 / 3</small></div></td><td>${status("Receiving","blue")}</td></tr>` : ""}
      <tr><td><div class="cell-title"><strong>SO-1042 · Smith & Sons</strong><small>Precision Nutrient Plan</small></div></td><td>${progress(100,"10 / 10 received")}</td><td><div class="cell-title"><strong>Standard nutrient suite</strong><small>No aggregation</small></div></td><td>${status("Testing","green")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1038 · Hilltop Partnership</strong><small>Soil Carbon Baseline</small></div></td><td>${progress(100,"8 / 8 received")}</td><td><div class="cell-title"><strong>Carbon baseline</strong><small>Results file expected</small></div></td><td>${status("Results due","amber")}</td></tr>
    </tbody></table></div></div></section>`;
}

function labReceiving() {
  return `${pageHeader("Laboratory · SO-1046", "Receiving details", "Each pod scan updates Order progress while keeping the S2L Sample ID prominent.", `<button class="secondary-button">Print liner label</button><button class="primary-button" data-action="lab-scan">Scan next pod</button>`)}
    <section class="lab-layout"><div class="panel lab-station"><header class="panel__header"><div><h2>Latest resolved sample</h2><p>SO-1046 · 7 of 10 received</p></div>${status("Received","green")}</header><div class="panel__body"><div class="lab-scan-result"><div class="lab-sample-primary"><small>Resolved S2L Sample ID</small><strong>S8271</strong><span>Green Estate · East Meadow · Zone 3</span></div><div class="lab-secondary-ids"><span><small>Physical holder</small><strong>${state.linerTransferred ? "Liner L8271" : "Pod P1042"}</strong></span><span><small>Case record</small><strong>CASE07-000184</strong></span><button class="text-button">Technical details</button></div>${state.linerTransferred ? `<div class="lab-success">✓ Transfer recorded · Sample S8271 keeps the same identity</div>` : `<button class="primary-button full-width lab-touch-button" data-action="lab-transfer">Transfer to liner</button>`}</div></div></div>
    <div class="panel"><header class="panel__header"><div><h2>Expected samples</h2><p>Order SO-1046 · receipt inferred from pod scans</p></div><span class="tag blue">7 / 10 received</span></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Sample</th><th>Area</th><th>Holder</th><th>Receipt</th></tr></thead><tbody><tr><td><strong>S8271</strong></td><td>East Meadow · Zone 3</td><td>${state.linerTransferred ? "Liner L8271" : "Pod P1042"}</td><td>${status("Received","green")}</td></tr><tr><td><strong>S8310</strong></td><td>North Block · Zone 3</td><td>Expected pod</td><td>${status("Awaiting arrival","amber")}</td></tr><tr><td><strong>S8311</strong></td><td>Home Close · Zone 1</td><td>Expected pod</td><td>${status("Awaiting arrival","amber")}</td></tr></tbody></table></div></div></section>`;
}

function labAggregations() {
  return `${pageHeader("Laboratory · Order SO-1046", "Aggregations", "The Order supplies the source samples, requested test and reporting Area.", `<button class="secondary-button">Preparation guide</button><button class="primary-button" data-action="lab-aggregate">Confirm aggregation</button>`)}
    <section class="lab-layout"><div class="panel"><header class="panel__header"><div><h2>AG-018 · North Block</h2><p>SO-1046 · P, K, Mg, pH · Reporting Area: North Block</p></div>${status(state.aggregationComplete ? "Complete" : "Ready to combine",state.aggregationComplete ? "green" : "amber")}</header><div class="panel__body"><div class="aggregation-sources">
      <article><span>✓</span><div><strong>S8271</strong><small>Zone 1 · 421 g available</small></div></article>
      <article><span>✓</span><div><strong>S8292</strong><small>Zone 2 · 438 g available</small></div></article>
      <article><span>✓</span><div><strong>S8310</strong><small>Zone 3 · 416 g available</small></div></article>
    </div>${state.aggregationComplete ? `<div class="lab-success">✓ Aggregation AG-018 recorded · source Sample IDs retained</div>` : `<button class="primary-button full-width lab-touch-button" data-action="lab-aggregate">Confirm aggregation complete</button>`}</div></div>
    <aside class="panel"><header class="panel__header"><div><h2>Identity rule</h2><p>Simple handling, complete custody</p></div></header><div class="panel__body"><div class="identity-rule-card"><strong>Show first</strong><span class="sample-id-example">Sample S8271</span><p>Pod, liner, RFID UID, QR payload and internal UUID remain available only in details and audit views.</p></div><div class="readiness-checklist"><strong>Preparation evidence</strong><span>✓ Three source samples scanned</span><span>✓ Reporting Area confirmed</span><span>✓ Operator and station recorded</span><span>${state.aggregationComplete ? "✓ Completion timestamp saved" : "○ Awaiting confirmation"}</span></div></div></aside></section>`;
}

function labResults() {
  const reportState = state.reportPublished ? ["Published","green"] : state.resultUploaded ? ["Draft uploaded","blue"] : ["Awaiting report","amber"];
  return `${pageHeader("Laboratory · Active Order", "Upload report", "Initial delivery keeps the laboratory's original PDF against the Order. No parsing or numeric result entry is implied.", `<button class="secondary-button">Version history</button><button class="primary-button" data-action="${state.resultUploaded ? "lab-publish" : "lab-upload"}">${state.resultUploaded ? "Publish report" : "Upload report"}</button>`)}
    <section class="lab-layout"><div class="panel"><header class="panel__header"><div><h2>SO-1046 · Green Estate</h2><p>Autumn Soil Analysis · Home Farm and East Meadow</p></div>${status(reportState[0],reportState[1])}</header><div class="panel__body"><div class="result-upload-card"><span>PDF</span><div><strong>${state.resultUploaded ? "SO-1046-final-report.pdf" : "Upload the laboratory's approved report file"}</strong><p>${state.resultUploaded ? `Final coverage · version 1 · ${state.reportPublished ? "published to authorised users" : "draft visible to Laboratory only"}` : "The Order supplies customer, Areas, tests and aggregation context; the lab confirms coverage rather than recreating relationships."}</p></div></div>${state.reportPublished ? `<div class="lab-success">✓ Published · Green Estate and permitted staff can view the same report version</div>` : state.resultUploaded ? `<div class="publication-check"><strong>Release check</strong><span>✓ Order and customer confirmed</span><span>✓ Final coverage selected</span><span>✓ File safety check simulated</span><button class="primary-button full-width lab-touch-button" data-action="lab-publish">Publish final report v1</button></div>` : `<button class="primary-button full-width lab-touch-button" data-action="lab-upload">Choose PDF and upload draft</button>`}</div></div><aside class="panel"><header class="panel__header"><div><h2>Order context</h2><p>No relationships need to be recreated</p></div></header><div class="panel__body"><div class="readiness-checklist"><strong>Inherited from SO-1046</strong><span>✓ Requested tests: P, K, Mg, pH</span><span>✓ Reporting Areas: Home Farm, East Meadow</span><span>✓ Aggregation AG-018</span><span>✓ Expected Samples: 75</span></div><div class="version-card"><small>Publication states</small><strong>Uploaded → Published</strong><p>Replacement creates a new version. Superseded or withdrawn files stay in audit history and are not customer-visible.</p></div></div></aside></section>`;
}

function genericView() {
  const role = roles[state.role];
  const item = role.nav.find(entry => entry[0] === state.view);
  const label = item ? item[2] : "Workspace";
  const roleName = roleSelect.options[roleSelect.selectedIndex].text;
  return `${pageHeader(roleName, label, `This supporting ${label.toLowerCase()} view is represented in the stakeholder prototype navigation.`)}<div class="panel"><div class="empty-state"><div class="empty-state__icon">${item ? item[1] : "•"}</div><h2>${label}</h2><p>The main demonstration focuses on the highest-value role workflow. Return to the overview to continue the end-to-end flooding and delivery scenario.</p><button class="primary-button" data-action="overview" style="margin-top:17px">Return to overview</button></div></div>`;
}

function render() {
  if (state.role === "farmer" && !state.farmerLoggedIn && !["login", "register"].includes(state.view)) state.view = "login";
  if (state.role === "farmer" && !state.farmerLoggedIn) state.notificationPanelOpen = false;
  document.body.classList.toggle("auth-mode", state.role === "farmer" && !state.farmerLoggedIn && ["login", "register"].includes(state.view));
  const role = roles[state.role];
  nav.innerHTML = role.nav.map(([id, icon, label, count]) => `<button class="nav-button ${state.view === id ? "is-active" : ""}" type="button" data-view="${id}"><span class="nav-button__icon">${icon}</span><span>${label}</span>${count ? `<span class="nav-button__count">${count}</span>` : ""}</button>`).join("");
  const farmerEntry = state.role === "farmer" && !state.farmerLoggedIn;
  document.querySelector("#user-name").textContent = farmerEntry ? "Farmer portal" : role.name;
  document.querySelector("#user-role").textContent = farmerEntry ? "Sign in or register" : role.title;
  const avatar = document.querySelector("#user-avatar");
  avatar.textContent = farmerEntry ? "FP" : role.initials;
  avatar.style.background = role.accent;
  noteFab.hidden = state.role !== "operator";

  if (state.view === "profile") main.innerHTML = userProfile();
  else if (state.role === "sales" && state.view === "overview") main.innerHTML = salesOverview();
  else if (state.role === "sales" && state.view === "customers" && state.customerDetail) main.innerHTML = salesCustomerDetail();
  else if (state.role === "sales" && state.view === "customers") main.innerHTML = salesCustomers();
  else if (state.role === "sales" && state.view === "orders") main.innerHTML = salesOrders();
  else if (state.role === "sales" && state.view === "unassigned") main.innerHTML = salesUnassigned();
  else if (state.role === "sales" && state.view === "support") main.innerHTML = salesSupport();
  else if (state.role === "sales" && state.view === "areas") main.innerHTML = salesAreas();
  else if (state.role === "sales_manager" && ["overview", "team", "customers", "orders"].includes(state.view)) main.innerHTML = salesManagerOverview();
  else if (state.role === "sales_manager" && state.view === "unassigned") main.innerHTML = salesManagerUnassigned();
  else if (state.role === "sales_manager" && state.view === "claims") main.innerHTML = salesManagerClaims();
  else if (state.role === "sales_manager" && state.view === "support") main.innerHTML = salesManagerSupport();
  else if (state.role === "manager" && state.view === "overview") main.innerHTML = managerOverview();
  else if (state.role === "manager" && state.view === "schedule") main.innerHTML = managerSchedule();
  else if (state.role === "manager" && state.view === "operators") main.innerHTML = managerOperators();
  else if (state.role === "manager" && state.view === "logistics") main.innerHTML = managerLogistics();
  else if (state.role === "manager" && state.view === "areas") main.innerHTML = managerAreas();
  else if (state.role === "operator" && state.view === "overview") main.innerHTML = operatorOverview();
  else if (state.role === "operator" && state.view === "dispatch") main.innerHTML = operatorDispatch();
  else if (state.role === "operator" && state.view === "shipments") main.innerHTML = operatorShipments();
  else if (state.role === "admin" && state.view === "overview") main.innerHTML = adminOverview();
  else if (state.role === "admin" && state.view === "maps") main.innerHTML = adminMaps();
  else if (state.role === "admin" && state.view === "users") main.innerHTML = adminUsers();
  else if (state.role === "admin" && state.view === "integrations") main.innerHTML = adminIntegrations();
  else if (state.role === "farmer" && state.view === "login") main.innerHTML = farmerLogin();
  else if (state.role === "farmer" && state.view === "register") main.innerHTML = farmerRegister();
  else if (state.role === "farmer" && state.view === "overview") main.innerHTML = farmerOverview();
  else if (state.role === "farmer" && state.view === "orders") main.innerHTML = farmerOrders();
  else if (state.role === "farmer" && state.view === "new-order") main.innerHTML = farmerNewOrder();
  else if (state.role === "farmer" && state.view === "support") main.innerHTML = farmerSupport();
  else if (state.role === "farmer" && state.view === "maps") main.innerHTML = farmerMaps();
  else if (state.role === "farmer" && state.view === "reports") main.innerHTML = farmerReports();
  else if (state.role === "farmer" && state.view === "payments") main.innerHTML = farmerPayments();
  else if (state.role === "finance" && state.view === "overview") main.innerHTML = financeOverview();
  else if (state.role === "finance" && state.view === "ready") main.innerHTML = financeReady();
  else if (state.role === "finance" && state.view === "orders") main.innerHTML = financeOrders();
  else if (state.role === "finance" && state.view === "reconciliation") main.innerHTML = financeReconciliation();
  else if (state.role === "lab" && state.view === "overview") main.innerHTML = labOverview();
  else if (state.role === "lab" && state.view === "incoming") main.innerHTML = labIncoming();
  else if (state.role === "lab" && state.view === "receiving") main.innerHTML = labReceiving();
  else if (state.role === "lab" && state.view === "returns") main.innerHTML = labReturns();
  else if (state.role === "lab" && state.view === "aggregations") main.innerHTML = labAggregations();
  else if (state.role === "lab" && state.view === "results") main.innerHTML = labResults();
  else main.innerHTML = genericView();
  renderNotifications();
  main.focus({ preventScroll: true });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function openNoteModal() {
  if (typeof noteModal.showModal === "function") noteModal.showModal();
}

function openAssignmentModal() {
  document.querySelector("#operator-options").innerHTML = operators.map(operator => `<label class="operator-option ${state.selectedOperator === operator.id ? "is-selected" : ""}"><input type="radio" name="operator" value="${operator.id}" ${state.selectedOperator === operator.id ? "checked" : ""}/><span class="operator-avatar">${operator.initials}</span><span><span class="operator-option__name"><strong>${operator.name}</strong>${operator.recommended ? `<em class="recommended-label">Recommended</em>` : ""}</span><span class="operator-option__details"><b>${operator.distance}</b><span>·</span><span>${operator.workload}</span><span>·</span><span>${operator.kit}</span><span>·</span><span>${operator.skill}</span></span></span><span class="operator-option__fit"><strong>${operator.fit}</strong><small>${operator.outcome}</small></span></label>`).join("");
  if (typeof assignmentModal.showModal === "function") assignmentModal.showModal();
}

roleSelect.addEventListener("change", () => {
  state.role = roleSelect.value;
  state.view = state.role === "farmer" ? "login" : "overview";
  state.customerDetail = null;
  state.notificationPanelOpen = false;
  state.phoneSetupStep = "summary";
  state.phoneVerificationError = null;
  render();
});

nav.addEventListener("click", event => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  if (state.role === "farmer" && button.dataset.view === "login") {
    state.farmerLoggedIn = false;
    state.notificationPanelOpen = false;
  }
  state.view = button.dataset.view;
  state.customerDetail = null;
  document.querySelector(".sidebar").classList.remove("is-open");
  render();
});

main.addEventListener("click", event => {
  const requestedView = event.target.closest("[data-view]")?.dataset.view;
  if (requestedView) {
    if (state.role === "farmer" && requestedView === "login") state.farmerLoggedIn = false;
    state.view = requestedView;
    render();
    return;
  }
  const actionControl = event.target.closest("[data-action]");
  const action = actionControl?.dataset.action;
  if (!action) return;
  if (action === "phone-change") { state.pendingPhoneNumber = ""; state.phoneVerificationError = null; state.phoneSetupStep = "number"; render(); }
  if (action === "phone-cancel") { state.pendingPhoneNumber = ""; state.phoneVerificationError = null; state.phoneSetupStep = "summary"; render(); }
  if (action === "phone-send-failure") { state.phoneVerificationError = "sending"; render(); }
  if (action === "phone-send-code") {
    const number = document.querySelector("#phone-number")?.value?.trim() || "";
    if (!/^\+\d[\d\s]{7,}$/.test(number)) { state.phoneVerificationError = "invalid"; render(); }
    else { state.pendingPhoneNumber = number; state.phoneVerificationError = null; state.phoneSetupStep = "code"; render(); showToast("Verification challenge created · SMS delivery simulated."); }
  }
  if (action === "phone-demo-error") { state.phoneVerificationError = actionControl.dataset.phoneError; render(); }
  if (action === "phone-resend") { state.phoneVerificationError = null; render(); showToast("New simulated challenge created. The previous code is now invalid."); }
  if (action === "phone-verify") {
    const enteredCode = document.querySelector("#phone-code")?.value?.trim() || "";
    if (!enteredCode) { state.phoneVerificationError = "incorrect"; render(); }
    else {
      const profile = state.phoneProfiles[state.role];
      Object.assign(profile, { number: state.pendingPhoneNumber, verified: true, alerts: true, verifiedAt: "Just now" });
      state.pendingPhoneNumber = "";
      state.phoneVerificationError = null;
      state.phoneSetupStep = "summary";
      render();
      showToast("Simulated backend validation succeeded. This exact number is now verified.");
    }
  }
  if (action === "dispatch-reconcile") { state.dispatchReconciled = true; render(); showToast("Backend simulation: all 12 commissioned records are durable, validated and reconciled."); }
  if (action === "dispatch-book") {
    if (!state.dispatchReconciled) { showToast("Booking rejected: server reconciliation is incomplete."); }
    else { state.outboundBooked = true; render(); showToast("Demo shipment created and collection confirmed as separate provider outcomes."); }
  }
  if (action === "dispatch-print") {
    if (!state.outboundBooked) { showToast("No valid carrier label is available before booking."); }
    else { state.outboundLabelPrinted = true; render(); showToast("Two demo labels printed. Reprinting does not create another shipment or charge."); }
  }
  if (action === "dispatch-handover") {
    if (!state.outboundLabelPrinted) { showToast("Print the valid parcel labels before recording handover."); }
    else { state.outboundHandedOver = true; render(); showToast("Physical handover recorded against immutable manifest M-1049-v3."); }
  }
  if (action === "carrier-deliver-lab") {
    if (!state.outboundHandedOver) { showToast("No carrier journey exists before physical handover."); }
    else { state.outboundCarrierDelivered = true; render(); showToast("Carrier delivery event received. Laboratory acceptance is still pending."); }
  }
  if (action === "lab-reconcile-parcel") {
    if (!state.outboundCarrierDelivered) { showToast("Physical intake cannot be reconciled before delivery."); }
    else { state.labParcelReconciled = true; render(); showToast("Parcel 1 accepted with six identified pods; parcel 2 remains outstanding."); }
  }
  if (action === "lab-release-pods") {
    if (!state.labParcelReconciled) { showToast("Return blocked: no laboratory receipt has been reconciled."); }
    else { state.returnPodsReleased = true; render(); showToast("Five empty liner-free pods released; P1047 remains in laboratory use."); }
  }
  if (action === "lab-book-return") {
    if (!state.returnPodsReleased) { showToast("Return blocked until the selected pods pass every release check."); }
    else { state.returnBooked = true; render(); showToast("Return RET-779 created and collection confirmed for five eligible pods."); }
  }
  if (action === "lab-print-return") {
    if (!state.returnBooked) { showToast("No return label is available before a valid return booking."); }
    else { state.returnLabelPrinted = true; render(); showToast("Return label printed. Reprinting retains the same shipment and collection."); }
  }
  if (action === "carrier-return-deliver") { state.returnCarrierDelivered = true; render(); showToast("Carrier marked the return delivered; the original location must still reconcile each pod."); }
  if (action === "operator-receive-return") { state.returnPodsReceived = true; render(); showToast("Five pods physically received. Inspection and fresh liners are still required before reuse."); }
  if (action === "logistics-reset") {
    Object.assign(state, { dispatchReconciled: false, outboundBooked: false, outboundLabelPrinted: false, outboundHandedOver: false, outboundCarrierDelivered: false, labParcelReconciled: false, returnPodsReleased: false, returnBooked: false, returnLabelPrinted: false, returnCarrierDelivered: false, returnPodsReceived: false });
    render();
    showToast("Integrated logistics demo reset to the blocked readiness gate.");
  }
  if (action === "customers") { state.view = "customers"; state.customerDetail = null; render(); }
  if (action === "customer-detail") { state.view = "customers"; state.customerDetail = "green-estate"; render(); }
  if (action === "overview") { state.view = "overview"; render(); }
  if (action === "assign") openAssignmentModal();
  if (action === "note") openNoteModal();
  if (action === "new-order") workOrderModal.showModal();
  if (action === "add-customer") customerModal.showModal();
  if (action === "add-area") areaModal.showModal();
  if (action === "propose-area") showToast("Missing geography proposed; Admin and Sampling Manager will validate it before use.");
  if (action === "admin-maps") { state.view = "maps"; render(); }
  if (action === "publish-boundary") { state.boundaryPublished = true; render(); showToast("East Meadow boundary v4 published with its reason and impact history."); }
  if (action === "farmer-new-order") { state.view = "new-order"; render(); }
  if (action === "farmer-show-register") { state.view = "register"; render(); }
  if (action === "farmer-show-login") { state.view = "login"; render(); }
  if (action === "farmer-login") { state.farmerLoggedIn = true; state.view = "overview"; render(); showToast("Signed in to the fictional Green Estate demo account."); }
  if (action === "farmer-register") { state.farmerRegistrationSubmitted = true; state.view = "register"; render(); showToast("Riverbend verification request created. It is not yet claimable by Sales."); }
  if (action === "farmer-logout") { state.farmerLoggedIn = false; state.view = "login"; render(); showToast("Signed out of the Farmer portal demo."); }
  if (action === "farmer-orders") { state.view = "orders"; render(); }
  if (action === "farmer-reports") { state.view = "reports"; render(); }
  if (action === "request-map-correction") showToast("Correction request sent to Admin and Sampling Manager; the map stays read-only.");
  if (action === "submit-portal-order") {
    state.portalOrderSubmitted = true;
    addNotification({ id: "order-so-1058-submitted-manager", audience: "manager", type: "order", reference: "SO-1058", title: "New Farmer-portal order", customer: "Green Estate", detail: "Standard soil analysis · East Meadow · requested 21 Sep", readiness: "Awaiting £354 deposit · do not schedule", source: "Farmer portal", time: "Just now", smsStatus: "submitted", actionLabel: "Open order" });
    addNotification({ id: "order-so-1058-submitted-sales", audience: "sales", type: "order", reference: "SO-1058", title: "Your customer submitted an order", customer: "Green Estate", detail: "Farmer portal · East Meadow · no Sales approval required", readiness: "Customer support visibility · payment pending", source: "Farmer portal", time: "Just now", smsStatus: "submitted", actionLabel: "Open customer order" });
    state.view = "new-order";
    render();
    showToast("SO-1058 submitted. Operations and Emma each have in-app and SMS delivery records.");
  }
  if (action === "submit-support-request") {
    state.supportSubmitted = true;
    addNotification({ id: "support-sup-204-sales", audience: "sales", type: "support", reference: "SUP-204", title: "New Farmer support request", customer: "Green Estate", detail: "Access question linked to SO-1046 · full text remains in S2L", readiness: "Open · response required", source: "Farmer portal", time: "Just now", smsStatus: "submitted", actionLabel: "Open support request" });
    state.view = "support";
    render();
    showToast("SUP-204 sent to Emma Clarke by in-app alert and simulated SMS.");
  }
  if (action === "claim-farmer") {
    state.unassignedClaimSubmitted = true;
    addNotification({ id: "claim-acc-2045-manager", audience: "sales_manager", type: "claim", reference: "ACC-2045", title: "Sales assignment requested", customer: "Meadowbrook Agricultural", detail: "Emma Clarke requested primary representative ownership", readiness: "Awaiting Sales Manager decision", source: "Unassigned Farmers", time: "Just now", actionLabel: "Review claim" });
    render();
    showToast("Assignment request sent to the Sales Manager. Customer access has not changed.");
  }
  if (action === "approve-claim") {
    state.unassignedClaimApproved = true;
    addNotification({ id: "account-acc-2045-sales", audience: "sales", type: "account", reference: "ACC-2045", title: "Farmer account assigned to you", customer: "Meadowbrook Agricultural", detail: "Approved by Olivia Grant · ownership history retained", readiness: "Primary representative · active", source: "Sales Manager", time: "Just now", actionLabel: "Open customer pool" });
    render();
    showToast("Meadowbrook assigned to Emma. Competing claims closed and history retained.");
  }
  if (action === "reject-claim") {
    state.unassignedClaimSubmitted = false;
    const claimNotification = state.notifications.find(notification => notification.id === "claim-acc-2045-manager");
    if (claimNotification) Object.assign(claimNotification, { active: false, read: true, readiness: "Rejected · account remains unassigned" });
    render();
    showToast("Claim rejected. Meadowbrook remains in the unassigned pool with fallback support.");
  }
  if (action === "demo-payment") { state.paymentPaid = true; render(); showToast("Demo deposit verified; SO-1058 released to Operations planning."); }
  if (action === "smart-case") {
    showToast("SC-008 captures independently offline; S2L reconciles Samples to work after sync.");
  }
  if (action === "invoice-batch") showToast("Draft invoice batch created for Finance review.");
  if (action === "lab-scan") { state.labScanned = true; state.view = "overview"; render(); showToast("Pod P1042 resolved to Sample S8271 and Active Order SO-1046."); }
  if (action === "lab-open-receiving") { state.view = "receiving"; render(); }
  if (action === "lab-transfer") { state.linerTransferred = true; render(); showToast("Transfer recorded · Sample S8271 now held in Liner L8271."); }
  if (action === "lab-aggregate") { state.aggregationComplete = true; render(); showToast("Aggregation AG-018 completed with source identities retained."); }
  if (action === "lab-upload") { state.resultUploaded = true; render(); showToast("PDF report uploaded as a Laboratory-only draft against SO-1046."); }
  if (action === "lab-publish") { state.reportPublished = true; render(); showToast("Final report v1 published to authorised Green Estate users."); }
  if (action === "view-report") showToast("Report preview opened · original PDF remains available to download.");
  if (action === "resolve-match") showToast("Sample S8344 linked to JOB-147; original Case evidence remains unchanged.");
});

document.querySelector("#menu-button").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("is-open"));
noteFab.addEventListener("click", openNoteModal);
userProfileButton.addEventListener("click", () => {
  state.notificationPanelOpen = false;
  state.phoneSetupStep = "summary";
  state.phoneVerificationError = null;
  state.view = "profile";
  render();
});

notificationButton.addEventListener("click", () => {
  state.notificationPanelOpen = !state.notificationPanelOpen;
  renderNotifications();
});

notificationBackdrop.addEventListener("click", () => {
  state.notificationPanelOpen = false;
  renderNotifications();
});

notificationPanel.addEventListener("click", event => {
  const control = event.target.closest("[data-notification-action]");
  if (!control) return;
  const action = control.dataset.notificationAction;
  if (action === "close") {
    state.notificationPanelOpen = false;
    renderNotifications();
    return;
  }
  if (action === "mark-all") {
    notificationsForCurrentRole().forEach(notification => { notification.read = true; });
    renderNotifications();
    return;
  }
  if (action === "open") {
    const notification = state.notifications.find(item => item.id === control.dataset.notificationId);
    if (!notification) return;
    notification.read = true;
    state.notificationPanelOpen = false;
    if (notification.type === "support") state.view = "support";
    else if (notification.type === "claim") state.view = "claims";
    else if (notification.type === "account") state.view = "unassigned";
    else state.view = "overview";
    render();
    if (notification.type === "assignment") showToast(`Opened current ${notification.reference} details. Reading the alert did not accept or start the job.`);
    else if (notification.type === "support") showToast(`Opened ${notification.reference}. Reading the alert did not resolve the Farmer request.`);
    else showToast(`Opened current ${notification.reference}. Existing approval and access checks still apply.`);
  }
});

document.querySelectorAll("[data-note-tab]").forEach(tab => tab.addEventListener("click", () => {
  document.querySelectorAll("[data-note-tab]").forEach(item => { item.classList.toggle("is-active", item === tab); item.setAttribute("aria-selected", item === tab ? "true" : "false"); });
  document.querySelectorAll("[data-note-panel]").forEach(panel => panel.classList.toggle("is-active", panel.dataset.notePanel === tab.dataset.noteTab));
}));

document.querySelectorAll("[data-note-template]").forEach(button => button.addEventListener("click", () => {
  document.querySelector("#typed-note").value = button.dataset.noteTemplate;
}));

document.querySelectorAll(".classification-option input").forEach(input => input.addEventListener("change", () => input.closest("label").classList.toggle("is-selected", input.checked)));

document.querySelector("#record-button").addEventListener("click", event => {
  const button = event.currentTarget;
  const recording = !button.classList.contains("is-recording");
  button.classList.toggle("is-recording", recording);
  document.querySelector("#record-title").textContent = recording ? "Recording… tap to finish" : "Voice note ready";
  document.querySelector("#record-time").textContent = recording ? "00:18 · audio stays attached to this note" : "00:34 · transcription complete";
  if (!recording) document.querySelector("#transcript-card").hidden = false;
});

document.querySelector("#note-file").addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;
  const preview = document.querySelector("#file-preview");
  preview.querySelector("strong").textContent = file.name;
  preview.querySelector("small").textContent = "Attachment ready · demo only";
});

document.querySelector("#note-form").addEventListener("submit", event => {
  event.preventDefault();
  state.noteSaved = true;
  noteModal.close();
  render();
  showToast("Field note shared with Operations and Sales.");
});

document.querySelector("#operator-options").addEventListener("change", event => {
  if (event.target.name !== "operator") return;
  state.selectedOperator = event.target.value;
  const chosen = operators.find(operator => operator.id === state.selectedOperator);
  document.querySelectorAll(".operator-option").forEach(option => option.classList.toggle("is-selected", option.querySelector("input").checked));
  document.querySelector("#assignment-reason-title").textContent = `Why ${chosen.name.split(" ")[0]} ${chosen.recommended ? "is recommended" : "could be selected"}`;
  document.querySelector("#assignment-reason").textContent = `${chosen.distance}, ${chosen.workload.toLowerCase()}, ${chosen.skill.toLowerCase()} and ${chosen.kit}.`;
});

document.querySelector("#assignment-form").addEventListener("submit", event => {
  event.preventDefault();
  const chosen = operators.find(operator => operator.id === state.selectedOperator);
  state.notifications.filter(notification => notification.type === "assignment" && notification.reference === "JOB-145").forEach(notification => { notification.active = false; });
  state.assignedOperator = chosen.name;
  addNotification({ id: `assignment-job-145-${chosen.id}`, audience: "operator", assignee: chosen.name, type: "assignment", reference: "JOB-145", title: "Job assigned to you", customer: "Westcombe Farms", detail: `Westcombe Farm · 11 Sep 09:00 · assigned by ${roles.manager.name}`, readiness: "Assigned · not yet accepted or started", source: "Sampling Manager", time: "Just now", smsStatus: "submitted", active: true, actionLabel: "View job details" });
  assignmentModal.close();
  render();
  showToast(`JOB-145 assigned to ${chosen.name}. In-app and simulated SMS delivery records were created.`);
});

document.querySelector("#work-order-form").addEventListener("submit", event => {
  event.preventDefault();
  state.workOrderCreated = true;
  addNotification({ id: "order-so-1056-submitted", audience: "manager", type: "order", reference: "SO-1056", title: "New sales-assisted order", customer: "Westcombe Farms", detail: "Autumn soil analysis · Westcombe Farm · requested 24 Sep", readiness: "Ready for planning review", source: "Sales-assisted", time: "Just now", smsStatus: "submitted", actionLabel: "Open order" });
  state.role = "sales";
  roleSelect.value = "sales";
  state.view = "orders";
  workOrderModal.close();
  render();
  showToast("SO-1056 created. The Sampling Manager has in-app and simulated SMS delivery records.");
});

document.querySelector("#customer-form").addEventListener("submit", event => {
  event.preventDefault();
  state.customerAdded = true;
  customerModal.close();
  render();
  showToast("Meadowbrook Farms added with its first farm and contact.");
});

document.querySelector("#area-form").addEventListener("submit", event => {
  event.preventDefault();
  state.areaAdded = true;
  areaModal.close();
  state.view = "areas";
  render();
  showToast("South Paddock added to Green Estate → Home Farm.");
});

render();
