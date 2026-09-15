const state = {
  role: "all_user",
  view: "overview",
  assignedOperator: null,
  noteSaved: false,
  interactionSaved: false,
  customerActivityView: "timeline",
  selectedOperator: "alex",
  customerDetail: null,
  workOrderCreated: false,
  smartCaseOpened: false,
  customerAdded: false,
  areaAdded: false,
  boundaryPublished: false,
  orderAreaSelection: "north-field",
  orderSubareaSaved: false,
  orderSubareaApproved: false,
  orderSubareaRequestedBy: null,
  orderPreparationRole: "farmer",
  sarahPlanningGranted: false,
  sarahDisplayTitle: "Field Technician",
  sarahManager: "daniel",
  sarahReportingEditorOpen: false,
  selectedHierarchyUser: "sarah",
  hierarchyBuilderOpen: false,
  demoHierarchyPerson: null,
  notificationPreferences: {
    orders: true,
    assignment: true,
    sampling: false,
    logistics: true,
    lab: false,
    reports: true,
    commercial: false,
    exceptions: true,
  },
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
    all_user: { number: "+44 7700 900 101", verified: true, alerts: true, verifiedAt: "14 Sep 2026" },
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
      audience: "all_user",
      type: "order",
      reference: "SO-1054",
      title: "New sales-assisted order",
      customer: "Westcombe Farms",
      detail: "Autumn soil analysis · 4 fields · requested 18 Sep",
      readiness: "Ready for planning review",
      source: "Assigned order responsibility",
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
      source: "Explicit work assignment",
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
      source: "Customer portal · web only",
      time: "Today · 08:12",
      read: false,
      actionLabel: "Open support request",
    },
  ],
};

const reportingManagers = {
  daniel: {
    initials: "DW",
    name: "Daniel Wright",
    title: "Sampling Manager",
    team: "North Operations",
    director: { initials: "FH", name: "Fiona Hale", title: "Regional Director" },
  },
  leila: {
    initials: "LH",
    name: "Leila Hassan",
    title: "Sampling Manager",
    team: "South Operations",
    director: { initials: "MC", name: "Marcus Cole", title: "Regional Director" },
  },
};

const hierarchyPeople = {
  alex: { initials: "AM", name: "Alex Morgan", title: "Organisation Lead", manager: null, team: "S2L Demo Organisation", profile: "master" },
  fiona: { initials: "FH", name: "Fiona Hale", title: "Regional Director", manager: "alex", team: "North Operations", profile: "director" },
  marcus: { initials: "MC", name: "Marcus Cole", title: "Regional Director", manager: "alex", team: "South Operations", profile: "director" },
  maya: { initials: "MP", name: "Maya Patel", title: "Laboratory Director", manager: "alex", team: "Laboratory", profile: "lab-director" },
  daniel: { initials: "DW", name: "Daniel Wright", title: "Sampling Manager", manager: "fiona", team: "North Operations", profile: "manager" },
  emma: { initials: "EC", name: "Emma Clarke", title: "Area Manager", manager: "fiona", team: "North Operations", profile: "manager" },
  leila: { initials: "LH", name: "Leila Hassan", title: "Sampling Manager", manager: "marcus", team: "South Operations", profile: "manager" },
  priya: { initials: "PS", name: "Priya Shah", title: "Area Manager", manager: "marcus", team: "South Operations", profile: "manager" },
  ben: { initials: "BW", name: "Ben Ward", title: "Laboratory Manager", manager: "maya", team: "Laboratory", profile: "lab-manager" },
  sarah: { initials: "SL", name: "Sarah Lewis", title: "Field Technician", manager: "daniel", team: "North Operations", profile: "field" },
  jacob: { initials: "JR", name: "Jacob Reed", title: "Field Operator", manager: "daniel", team: "North Operations", profile: "field" },
  chloe: { initials: "CB", name: "Chloe Bennett", title: "Field Operator", manager: "daniel", team: "North Operations", profile: "field" },
  louis: { initials: "LM", name: "Louis Morgan", title: "Field Operator", manager: "emma", team: "North Operations", profile: "field" },
  grace: { initials: "GS", name: "Grace Singh", title: "Field Operator", manager: "emma", team: "North Operations", profile: "field" },
  owen: { initials: "OP", name: "Owen Price", title: "Field Operator", manager: "leila", team: "South Operations", profile: "field" },
  nia: { initials: "NE", name: "Nia Evans", title: "Field Operator", manager: "leila", team: "South Operations", profile: "field" },
  imran: { initials: "IK", name: "Imran Khan", title: "Field Operator", manager: "leila", team: "South Operations", profile: "field" },
  jack: { initials: "JW", name: "Jack Wood", title: "Field Operator", manager: "priya", team: "South Operations", profile: "field" },
  maria: { initials: "MR", name: "Maria Rossi", title: "Field Operator", manager: "priya", team: "South Operations", profile: "field" },
  arun: { initials: "AD", name: "Arun Das", title: "Laboratory Operator", manager: "ben", team: "Laboratory", profile: "lab-operator" },
  lily: { initials: "LK", name: "Lily King", title: "Laboratory Operator", manager: "ben", team: "Laboratory", profile: "lab-operator" },
};

const roles = {
  all_user: {
    name: "Alex Morgan",
    title: "Regional Field Lead · display only",
    initials: "AM",
    accent: "#215b47",
    master: true,
    actions: ["customers", "commercial", "areas", "orders", "planning", "sampling", "logistics", "reports", "support", "finance", "access"],
    scope: "S2L Demo Organisation · all non-laboratory records",
    nav: [
      ["overview", "⌂", "My work"], ["commercial", "C", "Customers & commercial"], ["orders", "O", "Areas & orders"],
      ["operations", "P", "Operations"], ["fieldwork", "F", "Field work"], ["dispatch", "↔", "Shipments & returns", 1],
      ["reports-support", "R", "Reports & support"], ["commercial-status", "£", "Commercial status"],
      ["preferences", "N", "Notification settings"], ["access", "U", "Users, hierarchy & permissions"],
    ],
  },
  sales: {
    name: "Emma Clarke",
    title: "Customer Adviser · display only",
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
    title: "Field Technician · display only",
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

const actorGrants = {
  all_user: ["customers", "commercial", "areas", "orders", "planning", "assign", "sampling", "notes", "logistics", "reports", "support", "finance", "notifications", "access"],
  sales: ["customers", "commercial", "areas:view", "orders:prepare", "orders:submit", "quotes:view:organisation", "quotes:edit:own", "support:respond", "notifications"],
  operator: ["work:assigned", "sampling", "notes", "sync", "logistics:prepare", "notifications"],
  lab: ["lab:receive", "lab:handle", "lab:report", "lab:return", "notifications"],
  farmer: ["orders:self", "areas:view:self", "reports:self", "support:request", "payments:self", "notifications"],
};

function effectiveActions(actor = state.role) {
  const actions = [...(actorGrants[actor] || [])];
  if (actor === "operator" && state.sarahPlanningGranted) actions.push("planning", "assign");
  return actions;
}

function hasAction(action) {
  return effectiveActions().some(grant => grant === action || grant.startsWith(`${action}:`) || action.startsWith(`${grant}:`));
}

function escapeMarkup(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

const operators = [
  { id: "alex", initials: "AM", name: "Alex Morgan", distance: "Self assignment", workload: "3.5h workload", kit: "Corer-12 · ATV-04 · SC-008", skill: "Powered corer · 0–300 mm", fit: "96% fit", outcome: "Eligible non-lab user", recommended: true },
  { id: "sarah", initials: "SL", name: "Sarah Lewis", distance: "23 min away", workload: "4.5h workload", kit: "Corer-12 · ATV-04 · SC-008", skill: "Powered corer · 0–300 mm", fit: "92% fit", outcome: "96% first-time completion" },
  { id: "james", initials: "JM", name: "James Morgan", distance: "51 min away", workload: "6.0h workload", kit: "Corer-07 · ATV-02 · SC-014", skill: "Powered corer · 0–250 mm", fit: "76% fit", outcome: "91% first-time completion" },
  { id: "pedro", initials: "PR", name: "Pedro Ruiz", distance: "31 min away", workload: "Unavailable after 14:00", kit: "Manual auger · Van-09 · SC-011", skill: "Manual methods only", fit: "48% fit", outcome: "94% first-time completion" },
];

const main = document.querySelector("#main-content");
const nav = document.querySelector("#primary-nav");
const roleSelect = document.querySelector("#role-select");
const noteModal = document.querySelector("#note-modal");
const interactionModal = document.querySelector("#interaction-modal");
const assignmentModal = document.querySelector("#assignment-modal");
const workOrderModal = document.querySelector("#work-order-modal");
const customerModal = document.querySelector("#customer-modal");
const areaModal = document.querySelector("#area-modal");
const subareaModal = document.querySelector("#subarea-modal");
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
  const eligible = state.notifications.filter(notification => {
    if (state.role === "all_user") {
      if (["farmer", "lab"].includes(notification.audience)) return false;
      if (notification.assignee && notification.assignee !== roles.all_user.name) return false;
      return true;
    }
    if (notification.audience !== state.role) return false;
    if (state.role === "operator" && notification.assignee) return notification.assignee === roles.operator.name;
    return true;
  });
  if (state.role !== "all_user") return eligible;
  return eligible.filter((notification, index, items) => items.findIndex(item => item.type === notification.type && item.reference === notification.reference) === index);
}

function currentNotificationReadiness(notification) {
  if (notification.reference === "SO-1058") return state.paymentPaid ? "Deposit verified · ready for planning" : `Awaiting £${selectedOrderArea().deposit} deposit · do not schedule`;
  if (notification.reference === "ACC-2045") return notification.active === false ? notification.readiness : state.unassignedClaimApproved ? "Approved · Emma Clarke is primary representative" : "Awaiting authorised ownership decision";
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
  notificationFooter.innerHTML = state.role === "all_user"
    ? `<strong>One inbox for this user's permitted work</strong><span>Alex receives one logical alert per event. Customer-to-commercial alerts are web-only; operational SMS remains a separate configurable channel.</span>`
    : state.role === "sales"
      ? `<strong>Customer-originated alerts are web-only</strong><span>Order and support responsibility appears here without SMS. Reading an alert does not approve, resolve or transfer the record.</span>`
    : state.role === "manager"
    ? `<strong>Operations routing healthy</strong><span>All submitted-order alerts have a responsible user with the required action and scope. SMS failure never removes the in-app record or order.</span>`
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
  return `${pageHeader("Your profile", "Contact & SMS", "Review this user's verified number and eligible event channels. The display title does not decide access.", `<button class="primary-button" data-action="phone-change">Change number</button>`)}
    <section class="profile-layout"><div class="panel profile-card"><div class="profile-card__identity"><span class="profile-avatar" style="background:${role.accent}">${role.initials}</span><div><span class="eyebrow">${state.role === "operator" ? state.sarahDisplayTitle : role.title}</span><h2>${role.name}</h2><p>Optional title · display only · personal S2L identity</p></div></div><div class="phone-record"><span><small>Verified mobile</small><strong>${profile.number}</strong></span>${status(profile.verified ? "Verified" : "Not verified",profile.verified ? "green" : "amber")}</div><div class="phone-record"><span><small>Operational SMS eligibility</small><strong>${profile.alerts ? "Available for agreed eligible events" : "Unavailable"}</strong></span>${status(profile.alerts ? "Active" : "Attention",profile.alerts ? "blue" : "amber")}</div><p class="batch-note">Last verified ${profile.verifiedAt}. Changing the number requires a new one-time code.</p></div><aside class="stack"><div class="panel"><header class="panel__header"><div><h2>When this number is used</h2><p>Effective action, scope and event channel are checked at send time</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>${state.role === "sales" ? "✓ Customer order/support alerts stay web-only" : "✓ Eligible operational events may use an agreed SMS channel"}</span><span>✓ SMS contains a minimal reference and secure sign-in link</span><span>✓ In-app status remains if an eligible SMS fails</span><span>— Phone verification is outside process preferences</span></div></div></div><div class="panel"><header class="panel__header"><div><h2>Recent phone audit</h2><p>Per-user history</p></div></header><div class="panel__body activity-list"><div class="activity-item"><span class="activity-dot">✓</span><div><strong>Number verified</strong><p>${profile.number} · user-confirmed code</p><time>${profile.verifiedAt}</time></div></div></div></div></aside></section>`;
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
  const orderSubareaReview = state.orderSubareaSaved ? `<div class="panel order-area-review"><header class="panel__header"><div><span class="eyebrow">Created during order preparation</span><h2>Upper Section – West</h2><p>Green Estate → Home Farm → North Field → Upper Section</p></div>${status(state.orderSubareaApproved ? "Published" : "Approval required",state.orderSubareaApproved ? "green" : "amber")}</header><div class="panel__body"><div class="area-governance-grid"><span><small>Requested by</small><strong>${state.orderSubareaRequestedBy || "Order preparation"}</strong></span><span><small>Boundary</small><strong>Draft geometry · 4.1 ha</strong></span><span><small>Containment</small><strong>Inside Upper Section</strong></span><span><small>Overlap check</small><strong>No positive-area overlap</strong></span></div><div class="readiness-checklist"><strong>${state.orderSubareaApproved ? "Published as reusable Area" : "Governed review"}</strong><span>✓ Parent and sibling boundaries remain visible</span><span>✓ Partial subdivision leaves no automatic remainder Area</span><span>✓ Saving the Area did not add it to the order</span><span>${state.orderSubareaApproved ? "✓ Area ID AREA-221 and geometry v1 are available to future orders" : "○ Order draft is preserved while this request is reviewed"}</span></div>${state.orderSubareaApproved ? `<button class="primary-button full-width" data-action="return-order-preparation">Return to order preparation</button>` : `<div class="job-actions"><button class="secondary-button">Request boundary correction</button><button class="primary-button" data-action="approve-order-subarea">Approve & publish Area</button></div>`}</div></div>` : "";
  return `${pageHeader("Permitted actions · governed geography", "Farms & areas", "Draft and publication are separate actions. This user can validate reusable nested Areas within the organisation scope.", `<button class="secondary-button">Import boundaries</button><button class="primary-button" data-action="add-area">Define new area</button>`)}
    ${orderSubareaReview}
    <section class="area-layout"><div class="panel"><header class="panel__header"><div><h2>Customer geography</h2><p>16 farms · 58 defined fields and zones</p></div><label class="search-field compact"><span>⌕</span><input aria-label="Search farms and areas" placeholder="Search geography" /></label></header><div class="area-tree">
      <article class="area-tree__customer is-open"><header><span class="customer-monogram small">GE</span><div><strong>Green Estate</strong><small>3 farms · ${state.orderSubareaApproved ? "12" : "11"} published Areas · 146.2 ha</small></div>${status("Active work","green")}</header><div class="area-tree__farms"><div class="area-tree__farm"><div><strong>⌄ Home Farm</strong><small>Nested reusable geography · labels are configurable</small></div><span>SO-1046 active</span></div><div class="manager-area-hierarchy"><div><strong>⌄ North Field</strong><span>18.4 ha · selectable parent</span></div><div class="manager-area-child"><strong>⌄ Upper Section</strong><span>9.2 ha · selectable child</span></div><div class="manager-area-grandchild"><strong>Upper Section – East</strong><span>4.8 ha · published</span></div>${state.orderSubareaApproved ? `<div class="manager-area-grandchild is-new"><strong>Upper Section – West</strong><span>4.1 ha · AREA-221 · geometry v1</span></div>` : ""}<div class="manager-area-child"><strong>Lower Section</strong><span>7.9 ha · selectable child</span></div></div><div class="area-chips"><button>Home Close · 14.2 ha</button><button>Orchard · 9.8 ha</button><button>Long Meadow · 13.4 ha</button>${state.areaAdded ? `<button class="is-new">South Paddock · 12.6 ha</button>` : `<button>South Field · 12.6 ha</button>`}</div><div class="area-tree__farm"><div><strong>› East Meadow</strong><small>2 areas · 31.6 ha</small></div>${status("Access blocked","amber")}</div><div class="area-tree__farm"><div><strong>› North Holding</strong><small>4 areas · 46.2 ha</small></div><span>Historic</span></div></div></article>
      <article class="area-tree__customer"><header><span class="customer-monogram small">SS</span><div><strong>Smith & Sons</strong><small>4 farms · 16 areas · 212.8 ha</small></div>${status("Report ready","green")}</header></article>
      <article class="area-tree__customer"><header><span class="customer-monogram small">BF</span><div><strong>Brown Farming Ltd</strong><small>2 farms · 9 areas · 118.5 ha</small></div>${status("In progress","blue")}</header></article>
      <article class="area-tree__customer"><header><span class="customer-monogram small">WP</span><div><strong>Westcombe Farms</strong><small>5 farms · 22 areas · 284.1 ha</small></div>${status("Planning","grey")}</header></article>
    </div></div><aside class="panel"><header class="panel__header"><div><h2>Area definition</h2><p>Home Farm · Green Estate</p></div></header><div class="area-preview nested-area-preview"><div class="area-preview__field"><span>North Field<small>Selectable parent · 18.4 ha</small></span><i>Boundary v6</i></div><div class="area-preview__field second"><span>Upper Section<small>Selectable child · 9.2 ha</small></span><i>Contains deeper Areas</i></div><div class="area-preview__field third"><span>Lower Section<small>Selectable child · 7.9 ha</small></span><i>Partial subdivision allowed</i></div></div><div class="panel__body"><div class="readiness-checklist"><strong>Hierarchy safeguards</strong><span>✓ Parent remains selectable when children exist</span><span>✓ Children can contain their own children</span><span>✓ Parent/descendant and geometry overlap checked per analysis</span><span>✓ Accepted orders retain exact Area IDs and geometry revisions</span></div><button class="secondary-button full-width" data-action="add-area">Add Area at any level</button></div></aside></section>`;
}

function salesOrders() {
  const portalArea = selectedOrderArea();
  return `${pageHeader("Sales · Commercial delivery", "Work orders", "Follow every order from agreement through planning, fieldwork, results and invoice readiness.", `<button class="secondary-button">Export</button><button class="primary-button" data-action="new-order">New work order</button>`)}
    <section class="kpi-grid compact-kpis">${kpi("Open orders", state.workOrderCreated ? "18" : "17", "£186k committed", "#3979a8")}${kpi("Awaiting planning", state.workOrderCreated ? "5" : "4", "Operations handoff needed", "#e9a13b")}${kpi("Ready to report", "6", "£31.2k delivered", "#7bbf45")}${kpi("At risk", "2", "Weather and result delay", "#c8534d")}</section>
    <div class="panel"><header class="panel__header"><div><h2>All active work orders</h2><p>North region · sorted by next action</p></div><div class="filter-chips"><button class="is-active">Active</button><button>Draft</button><button>Complete</button></div></header><div class="table-wrap"><table class="data-table order-table"><thead><tr><th>Order</th><th>Customer</th><th>Scope</th><th>Delivery</th><th>Value</th><th>Status</th></tr></thead><tbody>
      ${state.portalOrderSubmitted ? `<tr class="new-row"><td><div class="cell-title"><strong>SO-1058</strong><small>Source · Farmer portal</small></div></td><td><div class="cell-title"><strong>Green Estate</strong><small>No salesperson required</small></div></td><td><div class="cell-title"><strong>${portalArea.samples} samples</strong><small>${portalArea.label} · ${portalArea.id}</small></div></td><td>${progress(0,state.paymentPaid ? "Released to planning" : "Awaiting deposit")}</td><td class="money">£${portalArea.total.toLocaleString()}</td><td>${status(state.paymentPaid ? "Planning" : "Payment due",state.paymentPaid ? "blue" : "amber")}</td></tr>` : ""}
      ${state.workOrderCreated ? `<tr class="new-row"><td><div class="cell-title"><strong>SO-1056</strong><small>Sales-assisted · created just now</small></div></td><td><div class="cell-title"><strong>Green Estate</strong><small>Home Farm</small></div></td><td><div class="cell-title"><strong>${portalArea.samples} samples</strong><small>${portalArea.label} · ${portalArea.revision}</small></div></td><td>${progress(0,"Planning")}</td><td class="money">£${portalArea.total.toLocaleString()}</td><td>${status("Awaiting planning","blue")}</td></tr>` : ""}
      <tr data-clickable data-action="customer-detail"><td><div class="cell-title"><strong>SO-1046</strong><small>Due 18 Sep</small></div></td><td><div class="cell-title"><strong>Green Estate</strong><small>Home Farm</small></div></td><td><div class="cell-title"><strong>75 samples</strong><small>5 fields · Soil analysis</small></div></td><td>${progress(64,"48 collected")}</td><td class="money">£4,200</td><td>${status("Weather delay","amber")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1042</strong><small>Due 9 Sep</small></div></td><td><div class="cell-title"><strong>Smith & Sons</strong><small>North Farm</small></div></td><td><div class="cell-title"><strong>84 samples</strong><small>6 fields · Nutrient plan</small></div></td><td>${progress(100,"Report ready")}</td><td class="money">£8,850</td><td>${status("Ready to report","green")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1051</strong><small>Due 22 Sep</small></div></td><td><div class="cell-title"><strong>Brown Farming Ltd</strong><small>West Farm</small></div></td><td><div class="cell-title"><strong>41 samples</strong><small>3 fields · Soil analysis</small></div></td><td>${progress(44,"18 collected")}</td><td class="money">£1,900</td><td>${status("In field","blue")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1038</strong><small>Due 12 Sep</small></div></td><td><div class="cell-title"><strong>Hilltop Partnership</strong><small>Hilltop Farm</small></div></td><td><div class="cell-title"><strong>54 samples</strong><small>4 fields · Carbon baseline</small></div></td><td>${progress(96,"52 results")}</td><td class="money">£6,780</td><td>${status("2 results missing","amber")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1049</strong><small>Due 16 Sep</small></div></td><td><div class="cell-title"><strong>Lower Park Estates</strong><small>Lower Park</small></div></td><td><div class="cell-title"><strong>32 samples</strong><small>2 fields · Nutrient plan</small></div></td><td>${progress(82,"At lab")}</td><td class="money">£4,960</td><td>${status("On track","green")}</td></tr>
    </tbody></table></div></div>`;
}

function salesNewOrder() {
  const selected = selectedOrderArea();
  return `${pageHeader("Permitted action · prepare order", "New staff-assisted work order", "Use the same governed Area selection as customer self-service, with the actual actor and source retained.", `<button class="secondary-button" data-view="orders">Back to orders</button>`)}
    <section class="portal-order-grid"><div class="panel"><header class="panel__header"><div><h2>1 · Customer & Areas</h2><p>Shared “Select areas to analyse” workflow</p></div>${status("Sales-assisted","blue")}</header><div class="panel__body"><div class="sales-order-context"><label class="form-field"><span>Customer</span><select><option selected>Green Estate · Tom Green</option><option>Westcombe Farms · Alice Moore</option><option>Smith & Sons · Peter Smith</option></select></label><label class="form-field"><span>Account source</span><input value="Existing verified customer · Emma Clarke" readonly /></label></div>${orderAreaSelector()}<div class="portal-form order-details-form"><label class="form-field"><span>Service</span><select><option selected>Standard soil analysis · P, K, Mg, pH</option><option>Precision nutrient plan</option></select></label><label class="form-field"><span>Requested timing</span><input type="date" value="2026-09-24" /></label><label class="form-field form-field--wide"><span>Commercial note</span><textarea rows="3">Priority autumn sampling. Confirm access before assigning the field team.</textarea></label></div></div></div><aside class="panel price-panel"><header class="panel__header"><div><h2>2 · Review & create</h2><p>Customer, Area and price snapshot</p></div></header><div class="panel__body"><div class="selected-scope-card"><small>Selected sampling Area</small><strong>${selected.label}</strong><span>${selected.id} · ${selected.revision} · ${selected.hectares}</span></div><div class="readiness-checklist"><strong>Order evidence</strong><span>✓ Source: Sales-assisted</span><span>✓ Customer relationship retained</span><span>✓ Parent/descendant overlap check passed</span><span>✓ Only explicit Area selection is commissioned</span></div><div class="price-lines"><span><small>Net</small><strong>£${selected.net.toLocaleString()}</strong></span><span><small>VAT · 20%</small><strong>£${selected.vat.toLocaleString()}</strong></span><span class="total"><small>Total</small><strong>£${selected.total.toLocaleString()}</strong></span></div><button class="primary-button full-width" data-action="submit-sales-order">Create work order</button><p class="batch-note">Creates a commercial order and an unassigned Operations planning request.</p></div></aside></section>`;
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
      <div class="panel"><header class="panel__header"><div><h2>ACC-2041 · Oakridge Farm</h2><p>Competing claims · current owner deactivated</p></div>${status("Dispute","red")}</header><div class="panel__body"><div class="claim-candidates"><article><span>JR</span><div><strong>Jacob Reed</strong><small>Claimed 08:20 · Bath East coverage</small></div></article><article><span>RS</span><div><strong>Rina Shah</strong><small>Claimed 08:26 · existing relationship</small></div></article></div><p class="batch-note">Neither claimant gains access until a user with the resolve-ownership action and matching scope decides.</p></div></div></div><aside class="panel"><header class="panel__header"><div><h2>Decision boundary</h2><p>Separate action and scope check</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>✓ Resolve ownership: specifically granted</span><span>✓ Escalation: separately authorised</span><span>✓ Recheck eligibility at approval</span><span>— No peer-unanimity workflow</span><span>— No map, refund or invoice-posting authority implied</span></div></div></aside></section>`;
}

function salesManagerSupport() {
  return `${pageHeader("Sales Manager · Fallback queue", "Support & disputes", "Recover Farmer requests that have no eligible representative without broadcasting their contents.")}
    <div class="panel"><header class="panel__header"><div><h2>SUP-201 · Oakridge Farm</h2><p>Access question · received 08:12</p></div>${status("Routing exception","amber")}</header><div class="panel__body"><div class="evidence-grid"><span><small>In-app record</small><strong>Retained</strong></span><span><small>SMS</small><strong>Missing number</strong></span><span><small>Current owner</small><strong>Deactivated</strong></span><span><small>Exposure</small><strong>Fallback queue only</strong></span></div><div class="job-actions"><button class="secondary-button">Escalate to Admin</button><button class="primary-button">Assign representative</button></div></div></div>`;
}

function customerInteractionTimeline() {
  return `<div class="timeline crm-timeline" id="customer-timeline">
    ${state.interactionSaved ? `<article class="timeline-item interaction-record actual"><span class="timeline-marker">CRM</span><div class="timeline-content"><div class="timeline-meta"><span>Actual interaction · Phone</span><time>Occurred yesterday · 16:20 BST</time></div><h3>Tom Green ↔ Sarah Lewis and Emma Clarke</h3><p><strong>Purpose:</strong> Sampling planning. Tom confirmed the north gate can be used if the east track remains waterlogged. Thursday access stays provisional.</p><div class="interaction-facts"><span><small>Actual participants</small><strong>Sarah Lewis · Emma Clarke</strong></span><span><small>Outcome</small><strong>Conversation completed</strong></span><span><small>Linked work</small><strong>JOB-143 · SO-1046</strong></span><span><small>Follow-up</small><strong>Sarah · due 16 Sep · Open</strong></span></div><div class="timeline-tags"><span class="tag blue">Customer interaction</span><span class="tag green">Follow-up created</span><span class="tag grey">Logged on behalf</span></div><div class="interaction-audit">Entered today 14:35 by Alex Morgan · occurrence and entry times retained separately · original typed note preserved</div></div></article>` : ""}
    <article class="timeline-item interaction-record actual"><span class="timeline-marker">SL</span><div class="timeline-content"><div class="timeline-meta"><span>Actual interaction · On-site visit</span><time>Occurred today · 10:42 BST</time></div><h3>Tom Green ↔ Sarah Lewis</h3><p><strong>Purpose:</strong> Access arrangements. Tom agreed a provisional Thursday return after flooding blocked East Meadow.</p><div class="interaction-facts"><span><small>Actual participants</small><strong>Sarah Lewis</strong></span><span><small>Outcome</small><strong>Return provisionally agreed</strong></span><span><small>Linked work</small><strong>JOB-143 · East Meadow</strong></span><span><small>Follow-up</small><strong>Confirm access · Open</strong></span></div><div class="timeline-tags"><span class="tag blue">Customer interaction</span><span class="tag amber">Operational event linked</span></div><div class="interaction-audit">Entered today 10:47 by Sarah Lewis · recorded by the participant · original field note retained</div></div></article>
    <article class="timeline-item interaction-record attempt"><span class="timeline-marker">NA</span><div class="timeline-content"><div class="timeline-meta"><span>Contact attempt · Phone</span><time>Occurred 12 Sep · 16:10 BST</time></div><h3>Tom Green · no answer</h3><p><strong>Purpose:</strong> Quote discussion. Emma called but did not reach Tom; this is not counted as a successful customer contact.</p><div class="interaction-facts"><span><small>Attempted by</small><strong>Emma Clarke</strong></span><span><small>Outcome</small><strong>No answer</strong></span><span><small>Linked work</small><strong>Quote Q-208</strong></span><span><small>Follow-up</small><strong>Try again · overdue</strong></span></div><div class="timeline-tags"><span class="tag red">Attempt only</span><span class="tag amber">Follow-up overdue</span></div><div class="interaction-audit">Entered 12 Sep 16:11 by Emma Clarke · no conversation inferred</div></div></article>
    <article class="timeline-item interaction-record follow-up"><span class="timeline-marker">F</span><div class="timeline-content"><div class="timeline-meta"><span>Planned follow-up · Not an interaction</span><time>Due 13 Sep · 16:00 BST</time></div><h3>Call Tom about quote Q-208</h3><p>Responsible user: Emma Clarke. The task is overdue and remains separate from the attempted call and any future conversation.</p><div class="timeline-tags"><span class="tag amber">Overdue</span><span class="tag grey">Planned action</span></div><div class="interaction-audit">Created from the 12 Sep contact attempt · no occurrence time because it has not happened</div></div></article>
    ${state.reportPublished ? `<article class="timeline-item interaction-record system"><span class="timeline-marker">R</span><div class="timeline-content"><div class="timeline-meta"><span>Automatic system event · Report</span><time>Just now</time></div><h3>Final report v1 published</h3><p>SO-1046 PDF is visible to authorised Green Estate users. This update is not treated as customer contact.</p><div class="timeline-tags"><span class="tag green">Published report</span><span class="tag grey">System event</span></div></div></article>` : ""}
    <article class="timeline-item interaction-record system"><span class="timeline-marker">SYS</span><div class="timeline-content"><div class="timeline-meta"><span>Automatic system event · Schedule</span><time>Today · 10:55 BST</time></div><h3>JOB-143 rescheduled to Thursday</h3><p>Sarah remains assigned. The workflow update is visible in the same chronology but does not change the last-actual-contact time.</p><div class="timeline-tags"><span class="tag green">Schedule updated</span><span class="tag grey">System event</span></div><div class="interaction-audit">Generated by S2L workflow · linked to JOB-143 and SO-1046</div></div></article>
  </div>`;
}

function customerInteractionTable() {
  return `<div class="table-wrap"><table class="data-table interaction-table"><thead><tr><th>Occurred / due</th><th>Type</th><th>Customer contact</th><th>Participant / owner</th><th>Purpose & outcome</th><th>Provenance</th></tr></thead><tbody>
    ${state.interactionSaved ? `<tr><td><strong>Yesterday · 16:20 BST</strong><small>Entered today 14:35</small></td><td>${status("Actual interaction","blue")}</td><td>Tom Green</td><td>Sarah Lewis + Emma Clarke</td><td><strong>Sampling planning</strong><small>Conversation completed · follow-up open</small></td><td>Alex Morgan · on behalf</td></tr>` : ""}
    <tr><td><strong>Today · 10:42 BST</strong><small>Entered 10:47</small></td><td>${status("Actual interaction","blue")}</td><td>Tom Green</td><td>Sarah Lewis</td><td><strong>Access arrangements</strong><small>Return provisionally agreed</small></td><td>Sarah Lewis</td></tr>
    <tr><td><strong>12 Sep · 16:10 BST</strong><small>Entered 16:11</small></td><td>${status("Attempt only","red")}</td><td>Tom Green</td><td>Emma Clarke</td><td><strong>Quote discussion</strong><small>No answer · no contact inferred</small></td><td>Emma Clarke</td></tr>
    <tr><td><strong>Due 13 Sep · 16:00</strong><small>No occurrence time</small></td><td>${status("Planned follow-up","amber")}</td><td>Tom Green</td><td>Emma Clarke</td><td><strong>Quote follow-up</strong><small>Overdue · not yet an interaction</small></td><td>Created from attempt</td></tr>
    <tr><td><strong>Today · 10:55 BST</strong><small>Automatic</small></td><td>${status("System event","grey")}</td><td>—</td><td>S2L workflow</td><td><strong>Schedule update</strong><small>Not customer contact</small></td><td>JOB-143 event</td></tr>
  </tbody></table></div>`;
}

function salesCustomerDetail() {
  return `${pageHeader("Customers · Green Estate", "Green Estate", "Structured customer relationship history: who interacted, when it happened, why, what followed and who recorded it.", `<button class="secondary-button">Contact details</button><button class="primary-button" data-action="log-interaction">Log interaction</button>`)}
    <section class="customer-hero"><div class="customer-monogram">GE</div><div><h2>Green Estate</h2><p>Primary contact: Tom Green · Home Farm, Somerset · Customer since 2022</p></div><div class="customer-hero__stats"><span><strong>3</strong><small>Farms</small></span><span><strong>2</strong><small>Open orders</small></span><span><strong>£18.4k</strong><small>Order value</small></span></div></section>
    <section class="crm-summary-strip"><div><small>Last actual contact</small><strong>Today · 10:42 BST</strong><span>Tom Green ↔ Sarah Lewis</span></div><div><small>Next action</small><strong>Confirm Thursday access</strong><span>Sarah Lewis · due 16 Sep</span></div><div class="is-overdue"><small>Overdue follow-up</small><strong>Quote Q-208 call</strong><span>Emma Clarke · due 13 Sep</span></div><div><small>Tracker boundary</small><strong>Standalone S2L</strong><span>No mailbox or telephony integration</span></div></section>
    <section class="dashboard-grid">
      <div class="stack">
        <div class="panel"><header class="panel__header"><div><h2>Autumn Soil Analysis</h2><p>SO-1046 · 5 fields · 75 planned samples</p></div>${status("Weather delay","amber")}</header><div class="panel__body"><div style="margin-bottom:18px">${progress(64,"Sampling progress · 48 collected")}</div><div class="metric-grid"><div class="metric"><small>Collected</small><strong>48 / 75</strong><em>64% complete</em></div><div class="metric"><small>At lab</small><strong>32</strong><em>Next dispatch Thu</em></div><div class="metric"><small>Results ready</small><strong>18</strong><em>12 validated</em></div></div></div></div>
        <div class="panel crm-tracker-panel"><header class="panel__header"><div><span class="eyebrow">S2L-WEB-003 · Proposed tracker UX</span><h2>Activity & interactions</h2><p>Actual contacts, attempts, planned follow-ups and system events remain visibly distinct.</p></div><div class="activity-view-switch"><button class="${state.customerActivityView === "timeline" ? "is-active" : ""}" data-action="activity-timeline">Timeline</button><button class="${state.customerActivityView === "table" ? "is-active" : ""}" data-action="activity-table">Table</button></div></header><div class="interaction-toolbar"><label class="search-field compact"><span>⌕</span><input aria-label="Search interactions" placeholder="Search summary or linked work" /></label><select aria-label="Filter participant"><option>All participants</option><option>Sarah Lewis</option><option>Emma Clarke</option><option>Alex Morgan</option></select><select aria-label="Filter channel"><option>All channels</option><option>Phone</option><option>On-site visit</option><option>Email</option><option>Message</option></select><select aria-label="Filter activity type"><option>All activity types</option><option>Actual interaction</option><option>Attempt only</option><option>Planned follow-up</option><option>System event</option></select></div><div class="panel__body crm-tracker-body">${state.customerActivityView === "timeline" ? customerInteractionTimeline() : customerInteractionTable()}</div></div>
      </div>
      <div class="stack">
        <div class="panel"><header class="panel__header"><div><h2>Follow-up register</h2><p>Tasks are not evidence of completed contact</p></div></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("1")}<div><strong>Confirm Thursday access</strong><small>Sarah Lewis · linked JOB-143.</small></div><time>Due 16 Sep</time></div><div class="attention-item is-overdue">${iconBadge("!")}<div><strong>Retry quote discussion</strong><small>Emma Clarke · previous attempt had no answer.</small></div><time>Overdue</time></div>${state.interactionSaved ? `<div class="attention-item">${iconBadge("+")}<div><strong>Send updated access plan</strong><small>Sarah Lewis · created from logged interaction.</small></div><time>Open</time></div>` : ""}</div></div>
        <div class="panel"><header class="panel__header"><div><h2>Access & provenance</h2><p>History survives organisational change</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>✓ View, log, correct and assign follow-up are separate actions</span><span>✓ Actual participants are not replaced by the customer owner</span><span>✓ Reassignment or title changes preserve attribution</span><span>— Private interactions do not follow shared quote visibility</span></div></div></div>
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
          ${state.portalOrderSubmitted ? `<tr class="new-row"><td><div class="cell-title"><strong>JOB-156 · Green Estate</strong><small>${selectedOrderArea().samples} samples · ${selectedOrderArea().id} · Farmer portal</small></div></td><td><div class="cell-title"><strong>Requested 21 Sep</strong><small>${state.paymentPaid ? "Deposit verified · ready to plan" : "Awaiting demo deposit"}</small></div></td><td><div class="cell-title"><strong>Unassigned</strong><small>${selectedOrderArea().revision} frozen at acceptance</small></div></td><td>${status(state.paymentPaid ? "Needs planning" : "Commercial hold",state.paymentPaid ? "blue" : "amber")}</td></tr>` : ""}
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
  const selected = selectedOrderArea();
  const orderStatus = state.portalOrderSubmitted ? (state.paymentPaid ? "Confirmed · planning" : "Action required") : "Not started";
  return `${pageHeader("Green Estate portal", "Good morning, Tom", "See your own farms, accepted prices, progress and published reports. Internal notes and operator metrics stay private.", `<button class="secondary-button" data-action="farmer-logout">Sign out</button><button class="primary-button" data-action="farmer-new-order">Order sampling</button>`)}
    <section class="portal-hero"><div><span class="eyebrow">Your account</span><h2>Green Estate</h2><p>3 authorised farms · account terms plus deposit rules</p></div><div><small>Active orders</small><strong>${state.portalOrderSubmitted ? "3" : "2"}</strong></div><div><small>Amount due</small><strong>${state.portalOrderSubmitted && !state.paymentPaid ? `£${selected.deposit}` : "£0"}</strong></div><div><small>Reports</small><strong>${state.reportPublished ? "2" : "1"}</strong></div></section>
    <section class="dashboard-grid"><div class="stack"><div class="panel"><header class="panel__header"><div><h2>Current work</h2><p>Real stages and dates, not a fake completion percentage</p></div><button class="text-button" data-action="farmer-orders">All orders →</button></header><div class="panel__body"><div class="customer-milestones"><span class="done">Submitted</span><span class="done">Confirmed</span><span class="done">Scheduled</span><span class="current">Sampling</span><span>At lab</span><span>Report</span></div><div class="portal-order-summary"><div><small>SO-1046 · Sales-assisted</small><strong>Autumn Soil Analysis</strong><p>East Meadow delayed by flooding. Return requested for Thursday; Operations is confirming access.</p></div>${status("Sampling delayed","amber")}</div></div></div>
      ${state.portalOrderSubmitted ? `<div class="panel"><header class="panel__header"><div><h2>SO-1058 · Your portal order</h2><p>${selected.label} · ${selected.samples} samples · accepted total £${selected.total.toLocaleString()}</p></div>${status(orderStatus,state.paymentPaid ? "blue" : "amber")}</header><div class="panel__body"><div class="readiness-checklist"><strong>Order record</strong><span>✓ Source: Customer portal</span><span>✓ ${selected.id} and ${selected.revision} snapshot retained</span><span>${state.paymentPaid ? "✓ Demo deposit verified" : `! Demo deposit of £${selected.deposit} due`}</span><span>${state.paymentPaid ? "✓ Released to permitted planning users" : "○ Operational release waiting"}</span></div>${!state.paymentPaid ? `<button class="primary-button full-width" data-action="demo-payment">Demo: pay £${selected.deposit} deposit</button><p class="batch-note">No real payment. Production would use the provider's hosted checkout.</p>` : ""}</div></div>` : ""}
    </div><div class="stack"><div class="panel"><header class="panel__header"><div><h2>Actions for you</h2><p>Only customer-visible decisions</p></div></header><div class="panel__body attention-list">${state.portalOrderSubmitted && !state.paymentPaid ? `<div class="attention-item">${iconBadge("£","red")}<div><strong>Deposit required</strong><small>£${selected.deposit} must be verified before SO-1058 enters planning.</small></div><button class="text-button" data-action="demo-payment">Pay demo</button></div>` : ""}<div class="attention-item">${iconBadge("!")}<div><strong>Confirm East Meadow access</strong><small>Tell Operations whether the south track is usable Thursday.</small></div><button class="text-button">Respond</button></div><div class="attention-item">${iconBadge("R")}<div><strong>${state.reportPublished ? "New report available" : "North Holding report"}</strong><small>${state.reportPublished ? "SO-1046 final report v1 has been published." : "Published 2 September · PDF"}</small></div><button class="text-button" data-action="farmer-reports">View</button></div></div></div><div class="panel"><header class="panel__header"><div><h2>Your farms</h2><p>Read-only operational geography</p></div></header><div class="panel__body attention-list"><div class="attention-item">${iconBadge("H")}<div><strong>Home Farm</strong><small>5 fields · 68.4 ha</small></div>${status("Current","green")}</div><div class="attention-item">${iconBadge("E")}<div><strong>East Meadow</strong><small>${state.boundaryPublished ? "Boundary v4 · 32.1 ha" : "Correction under review"}</small></div>${status(state.boundaryPublished ? "Published" : "In review",state.boundaryPublished ? "green" : "amber")}</div></div></div></div></section>`;
}

function farmerOrders() {
  const selected = selectedOrderArea();
  const logisticsMilestone = state.labParcelReconciled ? "At laboratory" : state.outboundCarrierDelivered ? "Delivered · lab check pending" : state.outboundHandedOver ? "On way to laboratory" : state.outboundBooked ? "Collection booked" : state.dispatchReconciled ? "Preparing dispatch" : "Samples reconciling";
  return `${pageHeader("Green Estate portal", "My orders", "Sales-assisted and self-service orders appear together with source, accepted price and customer-visible progress.", `<button class="primary-button" data-action="farmer-new-order">New order</button>`)}
    <div class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Order</th><th>Service / Areas</th><th>Price</th><th>Progress</th><th>Payment</th></tr></thead><tbody>${state.portalOrderSubmitted ? `<tr class="new-row"><td><div class="cell-title"><strong>SO-1058</strong><small>Farmer portal · submitted today</small></div></td><td><div class="cell-title"><strong>Standard soil analysis</strong><small>${selected.label} · ${selected.samples} samples · ${selected.revision}</small></div></td><td class="money">£${selected.total.toLocaleString()}</td><td>${status(state.paymentPaid ? "Planning" : "Awaiting payment",state.paymentPaid ? "blue" : "amber")}</td><td>${status(state.paymentPaid ? `£${selected.deposit} paid` : `£${selected.deposit} due`,state.paymentPaid ? "green" : "amber")}</td></tr>` : ""}<tr class="new-row"><td><div class="cell-title"><strong>SO-1049</strong><small>Sales-assisted · customer milestone only</small></div></td><td><div class="cell-title"><strong>Lower Field baseline</strong><small>12 samples · parcel details private</small></div></td><td class="money">£1,860</td><td>${status(logisticsMilestone,state.labParcelReconciled ? "green" : state.outboundHandedOver ? "blue" : "amber")}</td><td>${status("Account terms","grey")}</td></tr><tr><td><div class="cell-title"><strong>SO-1046</strong><small>Sales-assisted</small></div></td><td><div class="cell-title"><strong>Autumn Soil Analysis</strong><small>5 fields · 75 samples</small></div></td><td class="money">£4,200</td><td>${status("Sampling delayed","amber")}</td><td>${status("Account terms","grey")}</td></tr><tr><td><div class="cell-title"><strong>SO-1035</strong><small>Sales-assisted</small></div></td><td><div class="cell-title"><strong>Spring nutrient plan</strong><small>North Holding · final</small></div></td><td class="money">£2,960</td><td>${status("Report available","green")}</td><td>${status("Paid","green")}</td></tr></tbody></table></div></div>`;
}

function selectedOrderArea() {
  const areas = {
    "north-field": { id: "AREA-184", label: "North Field · entire boundary", path: "Green Estate → Home Farm → North Field", revision: "Boundary v6", hectares: "18.4 ha", samples: 12, net: 820, vat: 164, total: 984, deposit: 246 },
    "upper-section": { id: "AREA-198", label: "Upper Section", path: "Green Estate → Home Farm → North Field → Upper Section", revision: "Geometry v3", hectares: "9.2 ha", samples: 7, net: 520, vat: 104, total: 624, deposit: 156 },
    "upper-east": { id: "AREA-209", label: "Upper Section – East", path: "Green Estate → Home Farm → North Field → Upper Section → Upper Section – East", revision: "Geometry v2", hectares: "4.8 ha", samples: 4, net: 340, vat: 68, total: 408, deposit: 102 },
    "upper-west": { id: "AREA-221", label: "Upper Section – West", path: "Green Estate → Home Farm → North Field → Upper Section → Upper Section – West", revision: "Geometry v1", hectares: "4.1 ha", samples: 3, net: 280, vat: 56, total: 336, deposit: 84 },
    "lower-section": { id: "AREA-203", label: "Lower Section", path: "Green Estate → Home Farm → North Field → Lower Section", revision: "Geometry v4", hectares: "7.9 ha", samples: 6, net: 460, vat: 92, total: 552, deposit: 138 },
  };
  return areas[state.orderAreaSelection] || areas["north-field"];
}

function orderAreaSelector() {
  const selected = selectedOrderArea();
  const areaRow = (id, name, meta, depth = 0, disabled = false) => `<button class="order-area-row depth-${depth} ${state.orderAreaSelection === id ? "is-selected" : ""}" data-action="select-order-area" data-area="${id}" ${disabled ? "disabled" : ""}><span class="area-radio">${state.orderAreaSelection === id ? "✓" : ""}</span><span><strong>${name}</strong><small>${meta}</small></span>${state.orderAreaSelection === id ? `<em>Selected</em>` : ""}</button>`;
  return `<div class="order-area-workspace"><section class="order-area-map" aria-label="Area hierarchy map"><div class="order-map-path"><small>Current path</small><strong>${selected.path.replaceAll(" → ", " / ")}</strong></div><div class="order-map-boundary parent"><span>North Field<small>18.4 ha · selectable whole Area</small></span></div><div class="order-map-boundary upper"><span>Upper Section<small>9.2 ha</small></span></div><div class="order-map-boundary upper-east"><span>Upper East<small>4.8 ha</small></span></div>${state.orderSubareaSaved ? `<div class="order-map-boundary upper-west ${state.orderSubareaApproved ? "approved" : "pending"}"><span>Upper West<small>${state.orderSubareaApproved ? "Approved · 4.1 ha" : "Draft · not selectable"}</small></span></div>` : ""}<div class="order-map-boundary lower"><span>Lower Section<small>7.9 ha</small></span></div><div class="order-map-legend"><span><i></i> Parent</span><span><i></i> Existing child</span><span><i></i> Proposed subarea</span></div></section><section class="order-area-hierarchy"><div class="area-breadcrumb">Green Estate <b>›</b> Home Farm <b>›</b> North Field</div><div class="hierarchy-heading"><div><strong>Select areas to analyse</strong><small>Select one eligible Area for this demonstration</small></div><button class="secondary-button" data-action="order-add-subarea">+ Add subarea</button></div>${areaRow("north-field", "Select entire North Field", "Parent remains eligible even though children exist", 0)}<div class="area-children">${areaRow("upper-section", "Upper Section", "Existing child · contains two deeper Areas", 1)}<div class="area-children nested">${areaRow("upper-east", "Upper Section – East", "Published deeper Area · 4.8 ha", 2)}${state.orderSubareaSaved ? areaRow("upper-west", "Upper Section – West", state.orderSubareaApproved ? "Published deeper Area · 4.1 ha" : "Saved draft · Operations approval required", 2, !state.orderSubareaApproved) : ""}</div>${areaRow("lower-section", "Lower Section", "Existing child · 7.9 ha", 1)}</div>${state.orderSubareaSaved && !state.orderSubareaApproved ? `<div class="area-review-notice"><strong>Draft subarea saved; order draft preserved</strong><p>Operations must validate and publish it. Saving alone did not select analysis, change price or create a remainder Area.</p><button class="text-button" data-action="view-area-approval">Open Operations approval →</button></div>` : state.orderSubareaApproved && state.orderAreaSelection !== "upper-west" ? `<div class="area-review-notice is-approved"><strong>Upper Section – West is approved</strong><p>It is now reusable, but remains unselected until you explicitly choose it.</p></div>` : ""}</section></div><div class="scope-review"><div><span class="eyebrow">Selected sampling Area</span><strong>${selected.label}</strong><small>${selected.id} · ${selected.revision} · ${selected.hectares}</small></div><div><span class="eyebrow">Services & tests</span><strong>Standard soil analysis</strong><small>P, K, Mg and pH · ${selected.samples} planned samples</small></div><div><span class="eyebrow">Overlap safeguard</span><strong>Passed</strong><small>Parent and descendants cannot both be billed for this analysis</small></div></div>`;
}

function farmerNewOrder() {
  const selected = selectedOrderArea();
  if (state.portalOrderSubmitted) return `${pageHeader("Green Estate portal", "Order submitted", "SO-1058 keeps the accepted commercial, hierarchy and exact geometry snapshot. No salesperson or opportunity was required.")}<section class="confirmation-panel"><span>✓</span><div><small>SO-1058 · Source FARMER_PORTAL</small><h2>Standard soil analysis requested</h2><p>${selected.label} · ${selected.samples} samples · requested 21 September · accepted total £${selected.total.toLocaleString()} including VAT.</p><div class="readiness-checklist"><span>✓ ${selected.id} and hierarchy path retained</span><span>✓ ${selected.revision} frozen for accepted scope</span><span>✓ Price version AGR-2026-09 and terms retained</span><span>✓ Later Area changes cannot rewrite this order</span><span>${state.paymentPaid ? "✓ Deposit verified · released to planning" : `! £${selected.deposit} demo deposit required before release`}</span></div><button class="primary-button" data-action="${state.paymentPaid ? "farmer-orders" : "demo-payment"}">${state.paymentPaid ? "View my orders" : `Demo: pay £${selected.deposit} deposit`}</button><p class="batch-note">No real payment is collected in this stakeholder prototype.</p></div></section>`;
  return `${pageHeader("Green Estate portal", "Order soil sampling", "Select an authorised parent Area, child or deeper subarea without leaving the order. Draft geography remains governed.")}
    <section class="portal-order-grid"><div class="panel"><header class="panel__header"><div><h2>1 · Select areas to analyse</h2><p>Map and expandable hierarchy stay in sync</p></div>${status("Green Estate","green")}</header><div class="panel__body">${orderAreaSelector()}<div class="portal-form order-details-form"><label class="form-field"><span>Service</span><select><option selected>Standard soil analysis · P, K, Mg, pH</option><option>Precision nutrient plan</option></select></label><label class="form-field"><span>Requested timing</span><input type="date" value="2026-09-21" /></label><label class="form-field form-field--wide"><span>Access notes</span><textarea rows="3">Use south access track if dry. Please call before arrival.</textarea></label><button class="text-button" data-action="request-map-correction">Area missing or incorrect? Request a correction</button></div></div></div>
    <aside class="panel price-panel"><header class="panel__header"><div><h2>2 · Review price & terms</h2><p>Catalogue AGR-2026-09 · selected scope only</p></div></header><div class="panel__body"><div class="selected-scope-card"><small>Order will analyse</small><strong>${selected.label}</strong><span>${selected.hectares} · ${selected.samples} samples · ${selected.id}</span></div><div class="price-lines"><span><small>${selected.samples} samples × £60</small><strong>£${(selected.samples * 60).toLocaleString()}</strong></span><span><small>Field mobilisation</small><strong>£100</strong></span><span><small>Net</small><strong>£${selected.net.toLocaleString()}</strong></span><span><small>VAT · 20%</small><strong>£${selected.vat.toLocaleString()}</strong></span><span class="total"><small>Total</small><strong>£${selected.total.toLocaleString()}</strong></span></div><div class="payment-rule"><strong>25% deposit required</strong><p>£${selected.deposit} through hosted checkout. Remaining balance follows agreed account terms.</p></div><label class="terms-check"><input type="checkbox" checked /> I accept this Area, service scope, displayed price and commercial terms.</label><button class="primary-button full-width" data-action="submit-portal-order">Submit selected Area</button><p class="batch-note">Only the explicitly selected Area is priced. Unselected children, siblings and remainder land are not missing work.</p></div></aside></section>`;
}

function farmerSupport() {
  if (state.supportSubmitted) return `${pageHeader("Green Estate portal", "Support request sent", "Your request is open and routed to the responsible permitted user.")}
    <section class="confirmation-panel"><span>✓</span><div><small>SUP-204 · Submitted just now</small><h2>Emma Clarke has been notified</h2><p>Gate access for Thursday return · linked to SO-1046. The customer-originated alert is web/in-app only; reading it does not resolve the request.</p><div class="readiness-checklist"><span>✓ In-app request retained</span><span>✓ Web-only commercial alert created</span><span>○ Awaiting an authorised response</span></div><button class="secondary-button" data-view="overview">Return home</button></div></section>`;
  return `${pageHeader("Green Estate portal", "Contact support", "Ask your assigned representative about an order, access, service or account issue.")}
    <section class="support-layout"><div class="panel support-contact"><div class="support-contact__avatar">EC</div><div><span class="eyebrow">Your S2L representative</span><h2>Emma Clarke</h2><p>Customer Adviser · North customer scope</p><div class="support-contact__details"><span><small>Telephone</small><strong>01225 555 014</strong></span><span><small>Support hours</small><strong>Mon–Fri · 08:00–17:00</strong></span></div></div></div><div class="panel"><header class="panel__header"><div><h2>Send a support request</h2><p>The full request stays inside the authorised portal.</p></div></header><div class="panel__body support-form"><label class="form-field"><span>Topic</span><select><option selected>Access or appointment</option><option>Existing order</option><option>Payment or invoice</option><option>Account access</option><option>Other</option></select></label><label class="form-field"><span>Related order</span><select><option selected>SO-1046 · Autumn Soil Analysis</option><option>General question</option></select></label><label class="form-field form-field--wide"><span>How can we help?</span><textarea rows="5">Can Sarah use the north gate for Thursday's return? The east track may still be waterlogged.</textarea></label><div class="support-privacy"><strong>Web and in-app only</strong><span>The responsible authorised user receives an in-app alert. No SMS is created for this customer-originated request.</span></div><button class="primary-button" data-action="submit-support-request">Send support request</button></div></div></section>`;
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
  const selected = selectedOrderArea();
  return `${pageHeader("Green Estate portal", "Payments & invoices", "Payment state, invoice state and operational progress remain separate.")}
    <section class="kpi-grid compact-kpis">${kpi("Amount due", state.portalOrderSubmitted && !state.paymentPaid ? `£${selected.deposit}` : "£0", state.portalOrderSubmitted && !state.paymentPaid ? "SO-1058 deposit" : "No action required", "#e9a13b")}${kpi("Paid this season", state.paymentPaid ? `£${(2960 + selected.deposit).toLocaleString()}` : "£2,960", "Verified transactions", "#7bbf45")}${kpi("Open invoices", "1", "£1,480 due 2 Oct", "#3979a8")}${kpi("Account terms", "30 days", "Approved customer account", "#7d5b94")}</section>
    <div class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Reference</th><th>Type</th><th>Amount</th><th>Status</th><th>Meaning</th></tr></thead><tbody>${state.portalOrderSubmitted ? `<tr><td>SO-1058</td><td>25% deposit</td><td class="money">£${selected.deposit}</td><td>${status(state.paymentPaid ? "Paid" : "Due",state.paymentPaid ? "green" : "amber")}</td><td>${state.paymentPaid ? "Order released to planning" : "Operational release waiting"}</td></tr>` : ""}<tr><td>INV-2084</td><td>Invoice</td><td class="money">£1,480</td><td>${status("Due 2 Oct","blue")}</td><td>Does not block published report access</td></tr><tr><td>SO-1035</td><td>Account payment</td><td class="money">£2,960</td><td>${status("Paid","green")}</td><td>Reconciled 5 Sep</td></tr></tbody></table></div></div>`;
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
  const portalArea = selectedOrderArea();
  return `${pageHeader("Finance · Order ledger", "Orders", "Review the full commercial ledger and understand each order's current billing position.", `<button class="secondary-button">Export ledger</button><button class="primary-button">Reconcile orders</button>`)}
    <section class="kpi-grid compact-kpis">${kpi("Total order value", "£214k", "35 orders this season", "#3979a8")}${kpi("Invoiced", "£143k", "67% of seasonal value", "#7bbf45", "67")}${kpi("Ready", "£48.6k", "8 orders", "#7bbf45")}${kpi("Not ready", "£21.9k", "8 orders · 3 blocked", "#e9a13b")}</section>
    <div class="panel"><header class="panel__header"><div><h2>Commercial order ledger</h2><p>Delivery and billing state across all active orders</p></div><div class="filter-chips"><button class="is-active">All</button><button>Ready 8</button><button>Blocked 3</button><button>Invoiced 19</button></div></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Order</th><th>Customer</th><th>Order value</th><th>Delivery state</th><th>Billing state</th><th>Next action</th></tr></thead><tbody>
      ${state.portalOrderSubmitted ? `<tr class="new-row"><td><strong>SO-1058</strong><small>Farmer portal</small></td><td><div class="cell-title"><strong>Green Estate</strong><small>${portalArea.label} · ${portalArea.id}</small></div></td><td class="money">£${portalArea.total.toLocaleString()}</td><td>${status(state.paymentPaid ? "Planning" : "Commercial hold",state.paymentPaid ? "blue" : "amber")}</td><td>${status(state.paymentPaid ? "Deposit reconciled" : "Deposit due",state.paymentPaid ? "green" : "amber")}</td><td><div class="cell-title"><strong>${state.paymentPaid ? `£${portalArea.deposit} verified` : "Await payment"}</strong><small>Invoice and delivery remain separate</small></div></td></tr>` : ""}
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

function actionDrivenOverview() {
  const selected = selectedOrderArea();
  return `${pageHeader("Alex Morgan · permission-driven workspace", "My work", "One user can perform the complete non-laboratory workflow. Views appear because of actions and scopes—not the display title.", `<button class="secondary-button" data-view="preferences">Notification settings</button><button class="primary-button" data-action="new-order">Prepare order</button>`)}
    <section class="access-context"><div><span class="avatar" style="background:${roles.all_user.accent}">AM</span><div><small>Signed-in user</small><strong>Alex Morgan</strong><span>Regional Field Lead · display only</span></div></div><div><small>Effective scope</small><strong>S2L Demo Organisation</strong><span>All non-laboratory records</span></div><div><small>Protected authority</small><strong>Master enabled</strong><span>Users, hierarchy and action grants</span></div><div class="standalone-badge"><strong>Standalone S2L</strong><span>No Agrii-system connection required</span></div></section>
    <section class="action-area-grid">${[
      ["commercial","C","Customers & commercial","View customers, maintain own work and see colleague ownership"],
      ["orders","O","Areas & orders","Draft/publish Areas and prepare or submit orders"],
      ["operations","P","Operations","Schedule, self-assign and allocate eligible equipment"],
      ["fieldwork","F","Field work","Use the work pack, sample, note and synchronise"],
      ["dispatch","↔","Shipments & returns","Prepare manifests and act only after readiness gates"],
      ["commercial-status","£","Commercial status","Review invoice readiness and payment evidence"],
      ["reports-support","R","Reports & support","View published reports and handle assigned support"],
      ["access","U","Users, hierarchy & permissions","Configure explicit actions and record scopes"],
    ].map(([view,icon,title,detail]) => `<button class="action-area-card" data-view="${view}"><span>${icon}</span><div><strong>${title}</strong><small>${detail}</small></div><em>Available</em></button>`).join("")}</section>
    <section class="dashboard-grid"><div class="panel"><header class="panel__header"><div><h2>One record · complete journey</h2><p>SO-1058 remains the shared reference across permitted work areas</p></div>${status(state.portalOrderSubmitted ? "Order active" : "Ready to prepare",state.portalOrderSubmitted ? "blue" : "green")}</header><div class="panel__body"><div class="action-journey">${[["1","Area & order",state.portalOrderSubmitted],["2","Plan & assign",!!state.assignedOperator],["3","Sample & sync",state.dispatchReconciled],["4","Outward journey",state.outboundHandedOver],["5","Lab handoff",state.labParcelReconciled],["6","Report & close",state.reportPublished]].map(([step,label,done]) => `<span class="${done ? "done" : ""}"><i>${done ? "✓" : step}</i><strong>${label}</strong></span>`).join("")}</div><div class="single-record-summary"><span><small>Selected Area</small><strong>${selected.label}</strong><em>${selected.id} · ${selected.revision}</em></span><span><small>Current responsibility</small><strong>Alex Morgan</strong><em>Assigned explicitly, not inferred from title</em></span><span><small>Next permitted action</small><strong>${state.portalOrderSubmitted ? "Plan eligible work" : "Prepare and submit order"}</strong><em>Workflow prerequisites still apply</em></span></div></div></div><aside class="panel"><header class="panel__header"><div><h2>Three different checks</h2><p>The interface explains why an action cannot proceed</p></div></header><div class="panel__body decision-boundaries"><article><span class="boundary-icon permission">P</span><div><strong>Missing action</strong><p>Emma may view Jacob's quote but cannot edit or transfer it.</p></div></article><article><span class="boundary-icon scope">S</span><div><strong>Outside record scope</strong><p>Sarah cannot see another branch's job details.</p></div></article><article><span class="boundary-icon readiness">G</span><div><strong>Workflow gate</strong><p>Even Alex cannot book collection before sampling and reconciliation pass.</p></div></article></div></aside></section>`;
}

function actionCommercial() {
  return `${pageHeader("Permitted actions · organisation commercial records", "Customers & commercial", "Shared visibility protects ownership. Viewing a colleague's opportunity does not grant editing, transfer or private-support access.", `<button class="secondary-button" data-action="add-customer">Add customer</button><button class="primary-button" data-action="new-order">Prepare order</button>`)}
    <section class="permission-strip"><span><small>Can do</small><strong>View organisation opportunities · maintain own records</strong></span><span><small>Scope</small><strong>S2L Demo Organisation</strong></span><span><small>Separate authority</small><strong>Transfer and pricing approval</strong></span></section>
    <div class="panel"><header class="panel__header"><div><h2>Shared opportunities & quotes</h2><p>Owner and history remain visible across permitted commercial work</p></div><div class="filter-chips"><button class="is-active">Organisation</button><button>Mine</button></div></header><div class="table-wrap"><table class="data-table"><thead><tr><th>Customer / opportunity</th><th>Owner</th><th>Quote</th><th>Status</th><th>Available action</th></tr></thead><tbody><tr><td><div class="cell-title"><strong>Green Estate · Autumn analysis</strong><small>OPP-204 · North Field and subareas</small></div></td><td><div class="cell-title"><strong>Alex Morgan</strong><small>Created 12 Sep · original actor retained</small></div></td><td class="money">£4,200</td><td>${status("Own record","green")}</td><td><div class="table-actions"><button class="text-button" data-action="customer-detail">Open CRM</button><button class="text-button">Edit quote</button></div></td></tr><tr><td><div class="cell-title"><strong>Smith & Sons · Nutrient plan</strong><small>OPP-198 · permitted shared view</small></div></td><td><div class="cell-title"><strong>Emma Clarke</strong><small>Customer Adviser · title only</small></div></td><td class="money">£8,850</td><td>${status("Colleague-owned","blue")}</td><td><button class="text-button" data-action="blocked-colleague-edit">Request collaboration</button></td></tr><tr><td><div class="cell-title"><strong>Oakridge Farm · duplicate review</strong><small>OPP-211 · possible related work</small></div></td><td><div class="cell-title"><strong>Jacob Reed</strong><small>Ownership protected</small></div></td><td class="money">£3,180</td><td>${status("Review proposed","amber")}</td><td><button class="text-button" data-action="blocked-colleague-edit">Request transfer review</button></td></tr></tbody></table></div><footer class="shared-ownership-note"><strong>Visibility is not takeover authority</strong><span>Changing owner, resolving a conflict and approving a price exception remain separately granted, audited actions.</span></footer></div>`;
}

function actionOrdersHub() {
  const selected = selectedOrderArea();
  return `${pageHeader("Permitted actions · Areas and order preparation", "Areas & orders", "Use approved geography at any level, keep draft and publish actions separate, and retain exact accepted revisions.", `<button class="secondary-button" data-action="area-review-direct">Review Areas</button><button class="primary-button" data-action="new-order">Prepare new order</button>`)}
    <section class="kpi-grid compact-kpis">${kpi("Open orders","6","Across permitted organisation records","#3979a8")}${kpi("Area drafts",state.orderSubareaSaved && !state.orderSubareaApproved ? "1" : "0","Publication is a separate action","#e9a13b")}${kpi("Awaiting release",state.portalOrderSubmitted && !state.paymentPaid ? "1" : "0","Readiness, not permission","#b46546")}${kpi("Accepted revisions","24","History remains immutable","#7bbf45")}</section><div class="panel"><header class="panel__header"><div><h2>Current order scope</h2><p>The order is the shared reference record</p></div>${status(state.portalOrderSubmitted ? "Submitted" : "Draft",state.portalOrderSubmitted ? "blue" : "grey")}</header><div class="panel__body"><div class="single-record-summary"><span><small>Customer</small><strong>Green Estate</strong><em>Authorised organisation record</em></span><span><small>Sampling Area</small><strong>${selected.label}</strong><em>${selected.id} · ${selected.revision}</em></span><span><small>Commercial state</small><strong>${state.paymentPaid ? "Deposit verified" : "Fixture terms ready"}</strong><em>Separate from operational completion</em></span></div><div class="readiness-checklist"><strong>Permission and workflow remain separate</strong><span>✓ Alex can draft, publish, prepare, submit and release in scope</span><span>✓ Whole parent remains selectable when children exist</span><span>✓ Saving a subarea never selects it for analysis</span><span>— An unmet data or payment hold still blocks release</span></div></div></div>`;
}

function actionOperations() {
  return managerOverview()
    .replace("Field operations · 8 September", "Permitted actions · planning and assignment")
    .replace("Keep today moving", "Operations")
    .replace("Plan both sales-assisted and farmer-portal orders, then assign work with decision context preserved.", "Schedule, self-assign and allocate equipment without changing account type or relying on a manager role.");
}

function actionReportsSupport() {
  return `${pageHeader("Permitted actions · reports and support", "Reports & support", "Published files, private support and response authority remain independently scoped.")}
    <section class="dashboard-grid"><div class="panel"><header class="panel__header"><div><h2>Published reports</h2><p>Original files and version coverage</p></div>${status("View permitted","green")}</header><div class="panel__body"><div class="result-upload-card"><span>PDF</span><div><strong>SO-1035 · Spring Nutrient Plan</strong><p>North Holding · final v2 · published 2 September</p></div></div><div class="result-upload-card"><span>PDF</span><div><strong>SO-1046 · Autumn Soil Analysis</strong><p>${state.reportPublished ? "Final v1 · published to authorised users" : "No published file yet · laboratory draft remains hidden"}</p></div></div></div></div><aside class="panel"><header class="panel__header"><div><h2>Assigned support</h2><p>Web-only customer-originated alerts</p></div>${status(state.supportSubmitted ? "1 open" : "No new request",state.supportSubmitted ? "amber" : "grey")}</header><div class="panel__body"><div class="readiness-checklist"><span>✓ Respond to support: permitted customer scope</span><span>✓ Assign/escalate: permitted organisation scope</span><span>✓ Farmer-to-commercial alert: web/in-app only</span><span>— Shared quote visibility does not expose private support text</span></div></div></aside></section>`;
}

function notificationPreferences() {
  const labels = { orders:"Order submission & release", assignment:"Scheduling & assignment", sampling:"Sampling progress & completion", logistics:"Collection, transit & returns", lab:"Laboratory receipt", reports:"Report publication", commercial:"Commercial closeout", exceptions:"Exceptions requiring attention" };
  return `${pageHeader("Personal settings · within current access", "Process notifications", "Choose applicable process steps. Preferences do not create access, remove responsibility or change workflow state.")}
    <section class="preferences-layout"><div class="panel"><header class="panel__header"><div><h2>Alex Morgan's subscriptions</h2><p>All non-laboratory scope · proposed defaults</p></div>${status("Web first","blue")}</header><div class="notification-preferences">${Object.entries(labels).map(([key,label]) => `<label><span><strong>${label}</strong><small>${key === "orders" ? "Farmer-to-commercial events remain web-only" : key === "exceptions" ? "Mandatory treatment still to agree" : "Current permitted records only"}</small></span><input type="checkbox" data-notification-preference="${key}" ${state.notificationPreferences[key] ? "checked" : ""} /></label>`).join("")}</div></div><aside class="stack"><div class="panel"><header class="panel__header"><div><h2>Channel boundary</h2><p>Preferences cannot invent a supported channel</p></div></header><div class="panel__body"><div class="readiness-checklist"><span>✓ Farmer order/support → commercial: web only</span><span>✓ Phone verification: separate one-time SMS</span><span>✓ Operational SMS: only agreed eligible events</span><span>— Muting never hides order or exception history</span></div></div></div><div class="panel"><div class="panel__body"><div class="open-policy"><strong>Still open with Agrii</strong><p>Defaults, mandatory alerts, quiet hours, digests, self-notifications, fallback recipients and escalation timing.</p></div></div></div></aside></section>`;
}

function hierarchyUser(userId) {
  const person = { ...hierarchyPeople[userId] };
  if (userId === "alex" && state.demoHierarchyPerson?.manager === null && hierarchyPeople.demo) person.manager = "demo";
  if (userId === "sarah") {
    const manager = selectedSarahManager();
    person.title = state.sarahDisplayTitle;
    person.manager = state.sarahManager;
    person.team = manager.team;
  }
  return person;
}

function hierarchyPerson(userId) {
  const person = hierarchyUser(userId);
  return `<button type="button" class="hierarchy-person ${state.selectedHierarchyUser === userId ? "is-focused" : ""}" data-action="select-hierarchy-user" data-user="${userId}"><span>${person.initials}</span><div><strong>${person.name}</strong><small>${person.title} · view access</small></div></button>`;
}

function hierarchyTeam(managerId, memberIds) {
  const manager = hierarchyUser(managerId);
  return `<section class="hierarchy-team"><button type="button" class="hierarchy-manager ${state.selectedHierarchyUser === managerId ? "is-focused" : ""}" data-action="select-hierarchy-user" data-user="${managerId}"><span>${manager.initials}</span><div><strong>${manager.name}</strong><small>${manager.title} · view access</small></div><em>${memberIds.length} people</em></button><div class="hierarchy-operators">${memberIds.map(hierarchyPerson).join("")}</div></section>`;
}

function selectedSarahManager() {
  return reportingManagers[state.sarahManager];
}

function hierarchyPermissionProfile(userId) {
  const person = hierarchyUser(userId);
  const commonLocked = { key: "access", label: "Manage users & access", code: "ACCESS.ADMIN", scope: "Organisation", scopeType: "Protected scope", source: "Master authority", sourceNote: "Cannot be delegated here", status: "locked" };
  if (person.profile === "master") return [
    { key: "access", label: "Manage users & access", code: "ACCESS.ADMIN", scope: "Organisation", scopeType: "All users", source: "Master authority", sourceNote: "Protected account authority", status: "granted" },
    { key: "operations", label: "Run non-laboratory workflow", code: "WORK.ALL_NON_LAB", scope: "Organisation", scopeType: "All non-lab records", source: "Direct grant", sourceNote: "Master configuration", status: "granted" },
    { key: "finance", label: "Review commercial closeout", code: "FINANCE.REVIEW", scope: "Organisation", scopeType: "Orders and invoices", source: "Direct grant", sourceNote: "Master configuration", status: "granted" },
    { key: "lab", label: "Perform laboratory analysis", code: "LAB.ANALYSE", scope: "Laboratory", scopeType: "Separately authorised", source: "No active grant", sourceNote: "Lab authority required", status: "not-granted" },
  ];
  if (person.profile === "director") return [
    { key: "portfolio", label: "View operational portfolio", code: "WORK.VIEW_PORTFOLIO", scope: person.team, scopeType: "Reporting subtree", source: "Direct grant", sourceNote: "By Alex Morgan", status: "granted" },
    { key: "planning", label: "Schedule & assign work", code: "WORK.PLANNING", scope: person.team, scopeType: "Managers and descendants", source: "Direct grant", sourceNote: "By Alex Morgan", status: "granted" },
    { key: "performance", label: "Review team performance", code: "WORK.PERFORMANCE", scope: person.team, scopeType: "Aggregated and individual", source: "Direct grant", sourceNote: "By Alex Morgan", status: "granted" },
    commonLocked,
  ];
  if (person.profile === "manager") return [
    { key: "planning", label: "Schedule & assign work", code: "WORK.PLANNING", scope: `${person.name}'s team`, scopeType: "Direct reports", source: "Direct grant", sourceNote: "By organisation Master", status: "granted" },
    { key: "progress", label: "View team progress", code: "WORK.TEAM_PROGRESS", scope: `${person.name}'s team`, scopeType: "Reporting subtree", source: "Direct grant", sourceNote: "By organisation Master", status: "granted" },
    { key: "exceptions", label: "Resolve field exceptions", code: "WORK.EXCEPTIONS", scope: person.team, scopeType: "Assigned responsibility", source: "Direct grant", sourceNote: "By organisation Master", status: "granted" },
    commonLocked,
  ];
  if (person.profile === "field") return [
    { key: "sampling", label: "Perform sampling", code: "FIELD.SAMPLE", scope: "Own assigned jobs", scopeType: "Assignment-scoped", source: "Direct grant", sourceNote: "By field manager", status: "granted" },
    { key: "notes", label: "Record notes & request sync", code: "FIELD.NOTES_SYNC", scope: "Own assigned jobs", scopeType: "Assignment-scoped", source: "Direct grant", sourceNote: "By field manager", status: "granted" },
    { key: "planning", label: "Schedule & assign work", code: "WORK.PLANNING", scope: `${hierarchyUser(person.manager).name}'s team`, scopeType: "Hierarchy-based scope", source: "Direct grant", sourceNote: userId === "sarah" && state.sarahPlanningGranted ? "By Alex Morgan" : "No active grant", status: userId === "sarah" && state.sarahPlanningGranted ? "granted" : "not-granted" },
    commonLocked,
  ];
  if (person.profile === "new-user") return [
    { key: "work", label: "View assigned work", code: "WORK.VIEW_ASSIGNED", scope: "No record scope", scopeType: "Not configured", source: "No active grant", sourceNote: "Grant explicitly after review", status: "not-granted" },
    { key: "sampling", label: "Perform sampling", code: "FIELD.SAMPLE", scope: "No record scope", scopeType: "Not configured", source: "No active grant", sourceNote: "Grant explicitly after review", status: "not-granted" },
    { key: "planning", label: "Schedule & assign work", code: "WORK.PLANNING", scope: "No record scope", scopeType: "Not configured", source: "No active grant", sourceNote: "Grant explicitly after review", status: "not-granted" },
    commonLocked,
  ];
  if (person.profile === "lab-director") return [
    { key: "receipt", label: "Reconcile laboratory receipt", code: "LAB.RECEIVE", scope: "Laboratory", scopeType: "All inbound batches", source: "Direct grant", sourceNote: "By Alex Morgan", status: "granted" },
    { key: "results", label: "Upload laboratory results", code: "LAB.RESULTS", scope: "Laboratory", scopeType: "All lab orders", source: "Direct grant", sourceNote: "By Alex Morgan", status: "granted" },
    { key: "publish", label: "Publish final reports", code: "REPORT.PUBLISH", scope: "Laboratory", scopeType: "Validated results", source: "Direct grant", sourceNote: "By Alex Morgan", status: "granted" },
    { key: "sampling", label: "Perform field sampling", code: "FIELD.SAMPLE", scope: "Field operations", scopeType: "Separate action", source: "No active grant", sourceNote: "Not required for Maya", status: "not-granted" },
  ];
  if (person.profile === "lab-manager") return [
    { key: "receipt", label: "Reconcile laboratory receipt", code: "LAB.RECEIVE", scope: "Laboratory", scopeType: "Inbound batches", source: "Direct grant", sourceNote: "By Maya Patel", status: "granted" },
    { key: "custody", label: "Manage laboratory custody", code: "LAB.CUSTODY", scope: "Laboratory", scopeType: "Pods and samples", source: "Direct grant", sourceNote: "By Maya Patel", status: "granted" },
    { key: "results", label: "Upload result drafts", code: "LAB.RESULTS_DRAFT", scope: "Laboratory", scopeType: "Assigned batches", source: "Direct grant", sourceNote: "By Maya Patel", status: "granted" },
    { key: "publish", label: "Publish final reports", code: "REPORT.PUBLISH", scope: "Laboratory", scopeType: "Validated results", source: "No active grant", sourceNote: "Maya retains release", status: "not-granted" },
  ];
  return [
    { key: "receipt", label: "Scan received pods", code: "LAB.SCAN", scope: "Assigned lab batches", scopeType: "Assignment-scoped", source: "Direct grant", sourceNote: "By Ben Ward", status: "granted" },
    { key: "weights", label: "Record sample weights", code: "LAB.WEIGHTS", scope: "Assigned lab batches", scopeType: "Assignment-scoped", source: "Direct grant", sourceNote: "By Ben Ward", status: "granted" },
    { key: "results", label: "Upload result drafts", code: "LAB.RESULTS_DRAFT", scope: "Laboratory", scopeType: "Separate grant", source: "No active grant", sourceNote: "Manager action", status: "not-granted" },
    { key: "sampling", label: "Perform field sampling", code: "FIELD.SAMPLE", scope: "Field operations", scopeType: "Separate action", source: "No active grant", sourceNote: "Not a lab action", status: "not-granted" },
  ];
}

function hierarchyReportingChain(userId) {
  const chain = [];
  let currentId = userId;
  while (currentId) {
    const person = hierarchyUser(currentId);
    chain.unshift({ id: currentId, ...person });
    currentId = person.manager;
  }
  return chain;
}

function hierarchyPermissionRow(permission, userId) {
  const statusClass = permission.status === "granted" ? "is-granted" : permission.status === "locked" ? "is-locked" : "is-not-granted";
  const statusIcon = permission.status === "granted" ? "✓" : permission.status === "locked" ? "⌁" : "○";
  const statusLabel = permission.status === "granted" ? "Granted" : permission.status === "locked" ? "Locked" : "Not granted";
  const control = userId === "sarah" && permission.key === "planning"
    ? `<button class="permission-control ${permission.status === "granted" ? "remove" : ""}" data-action="toggle-sarah-planning">${permission.status === "granted" ? "Remove" : "Grant"}</button>`
    : `<em>${statusLabel}</em>`;
  return `<article class="${statusClass}"><span>${statusIcon}</span><div><strong>${permission.label}</strong><small>${permission.code}</small></div><div><strong>${permission.scope}</strong><small>${permission.scopeType}</small></div><div><strong>${permission.source}</strong><small>${permission.sourceNote}</small></div>${control}</article>`;
}

function hierarchyScopeSummary(person) {
  if (person.profile === "master") return "Organisation · non-lab";
  if (person.profile === "director") return `${person.team} portfolio`;
  if (person.profile === "manager") return `${person.name}'s team`;
  if (person.profile === "field") return "Own assigned jobs";
  if (person.profile === "new-user") return "No record scope";
  return "Laboratory records";
}

function hierarchyAccessSummary(person, grantedCount) {
  if (person.profile === "master") return `${person.name} has protected access administration and ${grantedCount - 1} non-laboratory grants. Laboratory analysis remains separate.`;
  if (person.profile === "director") return `${person.name} can plan and review work across ${person.team}, but cannot change user permissions.`;
  if (person.profile === "manager") return `${person.name} can plan, monitor and resolve work for the reporting team, but cannot change access.`;
  if (person.profile === "field") return `${person.name} can work on assigned jobs. Planning appears only when separately granted.`;
  if (person.profile === "new-user") return `${person.name} is now in the people hierarchy with zero action grants. Reporting structure never creates access automatically.`;
  if (person.profile === "lab-director") return `${person.name} can manage laboratory receipt, results and publication, but has no field-sampling grant.`;
  if (person.profile === "lab-manager") return `${person.name} can manage laboratory custody and drafts; final publication remains with Maya Patel.`;
  return `${person.name} can process assigned laboratory batches but cannot publish results or perform field sampling.`;
}

function hierarchyBuilder() {
  if (!state.hierarchyBuilderOpen) return "";
  const managerIds = ["daniel", "emma", "leila", "priya", "ben"];
  return `<section class="panel hierarchy-builder"><header class="panel__header"><div><span class="eyebrow">Simple hierarchy setup</span><h2>Add a person at the top or under a manager</h2><p>Choose the person's position and the reporting chain is created automatically. Permissions remain separate.</p></div><button class="secondary-button" data-action="toggle-hierarchy-builder">Close</button></header><div class="panel__body"><div class="hierarchy-builder-steps"><span><i>1</i><strong>Name the person</strong></span><span><i>2</i><strong>Choose top level or manager</strong></span><span><i>3</i><strong>Grant permissions separately</strong></span></div><div class="hierarchy-builder-form"><label class="form-field"><span>Full name</span><input id="new-hierarchy-name" value="Thomas Reed" /></label><label class="form-field"><span>Display title</span><input id="new-hierarchy-title" value="Field Operator" /></label><label class="form-field"><span>Position in hierarchy</span><select id="new-hierarchy-manager"><option value="top">Top of organisation · no manager</option>${managerIds.map(managerId => { const manager = hierarchyUser(managerId); return `<option value="${managerId}">Under ${manager.name} · ${manager.team}</option>`; }).join("")}</select></label><button class="primary-button" data-action="create-hierarchy-person">Add person to hierarchy</button></div><div class="hierarchy-builder-rule"><strong>Important access rule</strong><span>The new person starts with <b>zero action permissions</b>, even at the top of the hierarchy. Hierarchy describes people; it does not grant access.</span></div></div></section>`;
}

function organisationHierarchy() {
  const northSarah = state.sarahManager === "daniel" ? ["sarah"] : [];
  const southSarah = state.sarahManager === "leila" ? ["sarah"] : [];
  const demoFor = managerId => state.demoHierarchyPerson?.manager === managerId ? ["demo"] : [];
  const branches = [
    {
      name: "North Operations",
      code: "NORTH TEAM",
      director: "fiona",
      teams: [
        { manager: "daniel", members: [...northSarah, "jacob", "chloe", ...demoFor("daniel")] },
        { manager: "emma", members: ["louis", "grace", ...demoFor("emma")] },
      ],
    },
    {
      name: "South Operations",
      code: "SOUTH TEAM",
      director: "marcus",
      teams: [
        { manager: "leila", members: [...southSarah, "owen", "nia", "imran", ...demoFor("leila")] },
        { manager: "priya", members: ["jack", "maria", ...demoFor("priya")] },
      ],
    },
    {
      name: "Laboratory",
      code: "LAB TEAM",
      director: "maya",
      teams: [
        { manager: "ben", members: ["arun", "lily", ...demoFor("ben")] },
      ],
    },
  ];
  const alex = hierarchyUser("alex");
  const demoIsTop = state.demoHierarchyPerson?.manager === null && hierarchyPeople.demo;
  const topPerson = demoIsTop ? hierarchyUser("demo") : null;
  const topRoot = topPerson ? `<button type="button" class="hierarchy-root hierarchy-root--top ${state.selectedHierarchyUser === "demo" ? "is-focused" : ""}" data-action="select-hierarchy-user" data-user="demo"><span>${topPerson.initials}</span><div><small>Top of organisation · no manager</small><strong>${topPerson.name}</strong><em>Alex Morgan reports to ${topPerson.name.split(" ")[0]}</em></div></button>` : "";
  const alexRoot = `<button type="button" class="hierarchy-root ${topPerson ? "hierarchy-root--child" : ""} ${state.selectedHierarchyUser === "alex" ? "is-focused" : ""}" data-action="select-hierarchy-user" data-user="alex"><span>${alex.initials}</span><div><small>${topPerson ? `Reports to ${topPerson.name.split(" ")[0]}` : "Organisation lead"} · select to view access</small><strong>${alex.name}</strong><em>Fiona Hale, Marcus Cole and Maya Patel report to Alex</em></div></button>`;
  return `<section class="panel organisation-hierarchy"><header class="panel__header hierarchy-heading"><div><span class="eyebrow">People hierarchy · select anyone</span><h2>Choose a person to compare their effective access</h2><p>Every connector means “reports to”. People can be added at the top or under an existing manager.</p></div><div class="hierarchy-counts"><span><strong>${topPerson ? 2 : 1}</strong> ${topPerson ? "leadership levels" : "top level"}</span><span><strong>3</strong> directors</span><span><strong>5</strong> managers</span><span><strong>${state.demoHierarchyPerson && !topPerson ? 13 : 12}</strong> team members</span></div></header><div class="panel__body"><div class="hierarchy-root-stack">${topRoot}${alexRoot}</div><div class="hierarchy-directors">${branches.map(branch => { const director = hierarchyUser(branch.director); return `<article class="hierarchy-branch ${branch.name === "Laboratory" ? "is-lab" : ""}"><header><button type="button" class="hierarchy-director-select ${state.selectedHierarchyUser === branch.director ? "is-focused" : ""}" data-action="select-hierarchy-user" data-user="${branch.director}"><div class="hierarchy-director-avatar">${director.initials}</div><div><small>${branch.code} · REPORTS TO ALEX</small><strong>${director.name}</strong><span>${director.title} · leads ${branch.name} · view access</span></div></button></header><div class="hierarchy-branch-scope">Reporting team · ${branch.name} · no permission is implied</div><div class="hierarchy-teams">${branch.teams.map(team => hierarchyTeam(team.manager, team.members)).join("")}</div></article>`; }).join("")}</div><div class="hierarchy-legend"><span><i class="title-dot"></i> Select any person</span><span><i class="scope-dot"></i> Team names organise people</span><span><i class="action-dot"></i> Panel below shows their access</span></div></div></section>`;
}

function masterAccess() {
  if (state.selectedHierarchyUser !== "sarah") return selectedHierarchyAccess();
  const title = state.sarahDisplayTitle;
  const manager = selectedSarahManager();
  const grantedCount = state.sarahPlanningGranted ? 3 : 2;
  return `${pageHeader("Protected Master authority", "Users, hierarchy & permissions", "People report to people. Action permissions and record scopes are configured separately.", `<button class="secondary-button">Access audit</button><button class="primary-button" data-action="toggle-hierarchy-builder">+ Add person</button>`)}
    ${hierarchyBuilder()}
    ${organisationHierarchy()}
    <section class="access-editor"><aside class="panel hierarchy-path-panel"><header class="panel__header"><div><span class="eyebrow">Selected person</span><h2>Reporting line</h2><p>Sarah Lewis · USER-018</p></div></header><div class="panel__body"><div class="selected-user-summary"><span>SL</span><div><strong>Sarah Lewis</strong><small>${title} · display title only</small></div></div><div class="reporting-chain"><article><span>AM</span><div><small>Organisation lead</small><strong>Alex Morgan</strong></div></article><i>↓</i><article><span>${manager.director.initials}</span><div><small>Reports to Alex</small><strong>${manager.director.name}</strong></div></article><i>↓</i><article><span>${manager.initials}</span><div><small>Reports to ${manager.director.name.split(" ")[0]}</small><strong>${manager.name}</strong></div></article><i>↓</i><article class="is-current"><span>SL</span><div><small>Reports to ${manager.name.split(" ")[0]}</small><strong>Sarah Lewis</strong></div></article></div><button class="secondary-button full-width" data-action="toggle-sarah-reporting-editor">${state.sarahReportingEditorOpen ? "Close manager editor" : "Change reporting manager"}</button>${state.sarahReportingEditorOpen ? `<div class="reporting-editor"><span class="eyebrow">Choose Sarah's manager</span><label class="form-field"><span>Reports directly to</span><select id="sarah-manager-select"><option value="daniel" ${state.sarahManager === "daniel" ? "selected" : ""}>Daniel Wright · North Operations</option><option value="leila" ${state.sarahManager === "leila" ? "selected" : ""}>Leila Hassan · South Operations</option></select></label><p>The list contains people who can manage field staff. This changes the reporting line, not Sarah's action grants or work history.</p><button class="primary-button full-width" data-action="apply-sarah-manager">Update reporting line</button></div>` : ""}<div class="hierarchy-rule"><strong>Hierarchy contains people</strong><p>Sarah reports to ${manager.name}, who reports to ${manager.director.name}. Permissions remain a separate list on the right.</p></div></div></aside><div class="stack"><div class="panel selected-access-panel"><header class="panel__header"><div><span class="eyebrow">Effective access · selected person</span><h2>Sarah Lewis</h2><p>Permissions below apply to USER-018 only</p></div>${status(`${grantedCount} actions granted`,state.sarahPlanningGranted ? "blue" : "green")}</header><div class="panel__body"><div class="access-separation-grid"><article><span>A</span><div><small>Action permissions</small><strong>${grantedCount} granted</strong><p>Controls which operations appear</p></div></article><article><span>S</span><div><small>Record scope</small><strong>${state.sarahPlanningGranted ? `${manager.name}'s team` : "Own assigned jobs"}</strong><p>Controls which records those actions can reach</p></div></article><article><span>R</span><div><small>Reports to</small><strong>${manager.name}</strong><p>${manager.team} · people hierarchy</p></div></article></div><div class="permission-table-heading"><span>Action</span><span>Record scope</span><span>Grant source</span><span>Status</span></div><div class="permission-action-list detailed"><article class="is-granted"><span>✓</span><div><strong>Perform sampling</strong><small>FIELD.SAMPLE</small></div><div><strong>Own assigned jobs</strong><small>Assignment-scoped</small></div><div><strong>Direct grant</strong><small>By Alex Morgan</small></div><em>Granted</em></article><article class="is-granted"><span>✓</span><div><strong>Record notes & request sync</strong><small>FIELD.NOTES_SYNC</small></div><div><strong>Own assigned jobs</strong><small>Assignment-scoped</small></div><div><strong>Direct grant</strong><small>By Alex Morgan</small></div><em>Granted</em></article><article class="${state.sarahPlanningGranted ? "is-granted" : "is-not-granted"}"><span>${state.sarahPlanningGranted ? "✓" : "○"}</span><div><strong>Schedule & assign work</strong><small>WORK.PLANNING</small></div><div><strong>${manager.name}'s team</strong><small>Hierarchy-based scope</small></div><div><strong>Direct grant</strong><small>${state.sarahPlanningGranted ? "By Alex Morgan" : "No active grant"}</small></div><button class="permission-control ${state.sarahPlanningGranted ? "remove" : ""}" data-action="toggle-sarah-planning">${state.sarahPlanningGranted ? "Remove" : "Grant"}</button></article><article class="is-locked"><span>⌁</span><div><strong>Manage users & access</strong><small>ACCESS.ADMIN</small></div><div><strong>Organisation</strong><small>Protected scope</small></div><div><strong>Master authority</strong><small>Cannot be delegated here</small></div><em>Locked</em></article></div><div class="permission-summary"><strong>Result for Sarah</strong><span>${state.sarahPlanningGranted ? `Planning controls are visible for people in ${manager.name}'s reporting team; field actions remain limited to Sarah's assigned jobs.` : "Field controls are visible for Sarah's assigned jobs. Planning and access-administration controls are hidden."}</span></div></div></div><div class="panel"><header class="panel__header"><div><h2>How access is evaluated</h2><p>All three checks must pass at the moment Sarah opens or changes a record</p></div></header><div class="panel__body decision-boundaries horizontal"><article><span class="boundary-icon permission">1</span><div><strong>Action grant</strong><p>Does Sarah have the specific action?</p></div></article><article><span class="boundary-icon scope">2</span><div><strong>Record scope</strong><p>Is the record assigned to Sarah or inside an explicitly permitted reporting team?</p></div></article><article><span class="boundary-icon readiness">3</span><div><strong>Workflow gate</strong><p>Are sampling, sync and custody prerequisites satisfied?</p></div></article></div></div></div></section>`;
}

function selectedHierarchyAccess() {
  const userId = state.selectedHierarchyUser;
  const person = hierarchyUser(userId);
  const permissions = hierarchyPermissionProfile(userId);
  const grantedCount = permissions.filter(permission => permission.status === "granted").length;
  const manager = person.manager ? hierarchyUser(person.manager) : null;
  const chain = hierarchyReportingChain(userId);
  const chainHtml = chain.map((chainPerson, index) => `${index ? "<i>↓</i>" : ""}<article class="${chainPerson.id === userId ? "is-current" : ""}"><span>${chainPerson.initials}</span><div><small>${index === 0 ? (chain.length > 1 ? "Top of organisation" : "Organisation lead") : `Reports to ${chain[index - 1].name.split(" ")[0]}`}</small><strong>${chainPerson.name}</strong></div></article>`).join("");
  return `${pageHeader("Protected Master authority", "Users, hierarchy & permissions", "Select any person to compare their action grants, record scope and reporting line.", `<button class="secondary-button">Access audit</button><button class="primary-button" data-action="toggle-hierarchy-builder">+ Add person</button>`)}
    ${hierarchyBuilder()}
    ${organisationHierarchy()}
    <section class="access-editor"><aside class="panel hierarchy-path-panel"><header class="panel__header"><div><span class="eyebrow">Selected person</span><h2>Reporting line</h2><p>${person.name} · ${person.title}</p></div></header><div class="panel__body"><div class="selected-user-summary"><span>${person.initials}</span><div><strong>${person.name}</strong><small>${person.title} · display title only</small></div></div><div class="reporting-chain">${chainHtml}</div><div class="hierarchy-rule"><strong>People hierarchy only</strong><p>${manager ? `${person.name} reports to ${manager.name}. This reporting line does not grant or remove an action.` : `${person.name} is the organisation lead. Master authority is shown explicitly in the permission list.`}</p></div></div></aside><div class="stack"><div class="panel selected-access-panel"><header class="panel__header"><div><span class="eyebrow">Effective access · selected person</span><h2>${person.name}</h2><p>${person.title} · ${person.team}</p></div>${status(`${grantedCount} actions granted`,person.profile.includes("lab") ? "blue" : "green")}</header><div class="panel__body"><div class="access-separation-grid"><article><span>A</span><div><small>Action permissions</small><strong>${grantedCount} granted</strong><p>Controls which operations appear</p></div></article><article><span>S</span><div><small>Primary record scope</small><strong>${hierarchyScopeSummary(person)}</strong><p>Checked separately for every record</p></div></article><article><span>R</span><div><small>Reports to</small><strong>${manager ? manager.name : "No manager"}</strong><p>${person.team} · people hierarchy</p></div></article></div><div class="permission-table-heading"><span>Action</span><span>Record scope</span><span>Grant source</span><span>Status</span></div><div class="permission-action-list detailed">${permissions.map(permission => hierarchyPermissionRow(permission, userId)).join("")}</div><div class="permission-summary"><strong>Result for ${person.name.split(" ")[0]}</strong><span>${hierarchyAccessSummary(person, grantedCount)}</span></div></div></div><div class="panel"><header class="panel__header"><div><h2>Compare another person</h2><p>Select any name in the hierarchy above; this panel updates without changing their data</p></div></header><div class="panel__body decision-boundaries horizontal"><article><span class="boundary-icon permission">1</span><div><strong>Action grant</strong><p>Which actions can ${person.name.split(" ")[0]} perform?</p></div></article><article><span class="boundary-icon scope">2</span><div><strong>Record scope</strong><p>Which assigned, team or organisation records can those actions reach?</p></div></article><article><span class="boundary-icon readiness">3</span><div><strong>Workflow gate</strong><p>Permissions never bypass process prerequisites.</p></div></article></div></div></div></section>`;
}

function genericView() {
  const role = roles[state.role];
  const item = role.nav.find(entry => entry[0] === state.view);
  const label = item ? item[2] : "Workspace";
  const roleName = roleSelect.options[roleSelect.selectedIndex].text;
  return `${pageHeader(roleName, label, `This supporting ${label.toLowerCase()} view is represented in the stakeholder prototype navigation.`)}<div class="panel"><div class="empty-state"><div class="empty-state__icon">${item ? item[1] : "•"}</div><h2>${label}</h2><p>The main demonstration focuses on the highest-value role workflow. Return to the overview to continue the end-to-end flooding and delivery scenario.</p><button class="primary-button" data-action="overview" style="margin-top:17px">Return to overview</button></div></div>`;
}

function actionLabelled(html) {
  return html
    .replaceAll("Sales ·", "Commercial actions ·")
    .replaceAll("Operator ·", "Assigned work ·")
    .replaceAll("Sales Manager", "authorised ownership reviewer")
    .replaceAll("Sampling Manager", "planning authority");
}

function render() {
  if (state.role === "farmer" && !state.farmerLoggedIn && !["login", "register"].includes(state.view)) state.view = "login";
  if (state.role === "farmer" && !state.farmerLoggedIn) state.notificationPanelOpen = false;
  document.body.classList.toggle("auth-mode", state.role === "farmer" && !state.farmerLoggedIn && ["login", "register"].includes(state.view));
  const role = roles[state.role];
  const actorNav = [...role.nav];
  if (state.role === "operator" && state.sarahPlanningGranted) actorNav.splice(2, 0, ["schedule", "P", "Planning"]);
  nav.innerHTML = actorNav.map(([id, icon, label, count]) => `<button class="nav-button ${state.view === id ? "is-active" : ""}" type="button" data-view="${id}"><span class="nav-button__icon">${icon}</span><span>${label}</span>${count ? `<span class="nav-button__count">${count}</span>` : ""}</button>`).join("");
  const farmerEntry = state.role === "farmer" && !state.farmerLoggedIn;
  document.querySelector("#user-name").textContent = farmerEntry ? "Farmer portal" : role.name;
  document.querySelector("#user-role").textContent = farmerEntry ? "Sign in or register" : state.role === "operator" ? `${state.sarahDisplayTitle} · display only` : role.title;
  const avatar = document.querySelector("#user-avatar");
  avatar.textContent = farmerEntry ? "FP" : role.initials;
  avatar.style.background = role.accent;
  noteFab.hidden = !hasAction("notes");

  if (state.view === "profile") main.innerHTML = userProfile();
  else if (state.role === "all_user" && state.view === "overview") main.innerHTML = actionDrivenOverview();
  else if (state.role === "all_user" && state.view === "commercial") main.innerHTML = actionCommercial();
  else if (state.role === "all_user" && state.view === "customers" && state.customerDetail) main.innerHTML = salesCustomerDetail();
  else if (state.role === "all_user" && state.view === "customers") main.innerHTML = salesCustomers();
  else if (state.role === "all_user" && state.view === "orders") main.innerHTML = actionOrdersHub();
  else if (state.role === "all_user" && state.view === "new-order") main.innerHTML = salesNewOrder();
  else if (state.role === "all_user" && state.view === "operations") main.innerHTML = actionOperations();
  else if (state.role === "all_user" && state.view === "fieldwork") main.innerHTML = operatorOverview().replace("Operator ·", "Assigned work ·").replaceAll("Sarah Lewis", "Alex Morgan").replaceAll("Sarah", "Alex").replaceAll(">SL<", ">AM<");
  else if (state.role === "all_user" && state.view === "dispatch") main.innerHTML = operatorDispatch().replace("Operator ·", "Permitted logistics ·");
  else if (state.role === "all_user" && state.view === "shipments") main.innerHTML = operatorShipments().replace("Operator ·", "Permitted logistics ·");
  else if (state.role === "all_user" && state.view === "reports-support") main.innerHTML = actionReportsSupport();
  else if (state.role === "all_user" && state.view === "commercial-status") main.innerHTML = financeOverview();
  else if (state.role === "all_user" && state.view === "ready") main.innerHTML = financeReady();
  else if (state.role === "all_user" && state.view === "preferences") main.innerHTML = notificationPreferences();
  else if (state.role === "all_user" && state.view === "access") main.innerHTML = masterAccess();
  else if (state.role === "all_user" && state.view === "areas") main.innerHTML = managerAreas();
  else if (state.role === "sales" && state.view === "overview") main.innerHTML = actionLabelled(salesOverview());
  else if (state.role === "sales" && state.view === "customers" && state.customerDetail) main.innerHTML = salesCustomerDetail();
  else if (state.role === "sales" && state.view === "customers") main.innerHTML = actionLabelled(salesCustomers());
  else if (state.role === "sales" && state.view === "orders") main.innerHTML = actionLabelled(salesOrders());
  else if (state.role === "sales" && state.view === "new-order") main.innerHTML = salesNewOrder();
  else if (state.role === "sales" && state.view === "unassigned") main.innerHTML = actionLabelled(salesUnassigned());
  else if (state.role === "sales" && state.view === "support") main.innerHTML = actionLabelled(salesSupport());
  else if (state.role === "sales" && state.view === "areas") main.innerHTML = actionLabelled(salesAreas());
  else if (state.role === "sales_manager" && ["overview", "team", "customers", "orders"].includes(state.view)) main.innerHTML = salesManagerOverview();
  else if (state.role === "sales_manager" && state.view === "unassigned") main.innerHTML = salesManagerUnassigned();
  else if (state.role === "sales_manager" && state.view === "claims") main.innerHTML = salesManagerClaims();
  else if (state.role === "sales_manager" && state.view === "support") main.innerHTML = salesManagerSupport();
  else if (state.role === "manager" && state.view === "overview") main.innerHTML = managerOverview();
  else if (state.role === "manager" && state.view === "schedule") main.innerHTML = managerSchedule();
  else if (state.role === "manager" && state.view === "operators") main.innerHTML = managerOperators();
  else if (state.role === "manager" && state.view === "logistics") main.innerHTML = managerLogistics();
  else if (state.role === "manager" && state.view === "areas") main.innerHTML = managerAreas();
  else if (state.role === "operator" && state.view === "overview") main.innerHTML = actionLabelled(operatorOverview());
  else if (state.role === "operator" && state.view === "schedule" && state.sarahPlanningGranted) main.innerHTML = managerSchedule().replace("Operations ·", "Permitted planning ·");
  else if (state.role === "operator" && state.view === "dispatch") main.innerHTML = actionLabelled(operatorDispatch());
  else if (state.role === "operator" && state.view === "shipments") main.innerHTML = actionLabelled(operatorShipments());
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
  const participant = roles[state.role]?.name || "Current user";
  const participantNode = document.querySelector("#note-actual-participant");
  const recorderNode = document.querySelector("#note-recorder");
  if (participantNode) participantNode.textContent = participant;
  if (recorderNode) recorderNode.textContent = participant;
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
  if (action === "log-interaction") interactionModal.showModal();
  if (action === "activity-timeline") { state.customerActivityView = "timeline"; render(); }
  if (action === "activity-table") { state.customerActivityView = "table"; render(); }
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
  if (action === "new-order") { state.view = "new-order"; render(); }
  if (action === "add-customer") customerModal.showModal();
  if (action === "add-area") areaModal.showModal();
  if (action === "order-add-subarea") { state.orderSubareaRequestedBy = state.role === "all_user" ? "Alex Morgan · permitted order preparation" : state.role === "sales" ? "Emma Clarke · staff-assisted order" : "Tom Green · customer self-service"; subareaModal.showModal(); }
  if (action === "select-order-area") {
    const requestedArea = actionControl.dataset.area;
    if (requestedArea === "upper-west" && !state.orderSubareaApproved) showToast("This draft Area must be approved before it can be selected.");
    else { state.orderAreaSelection = requestedArea; render(); showToast(`${selectedOrderArea().label} selected. Only this explicit scope is priced.`); }
  }
  if (action === "view-area-approval") { state.orderPreparationRole = state.role; if (state.role !== "all_user") { state.role = "all_user"; roleSelect.value = "all_user"; } state.view = "areas"; render(); showToast("Order draft preserved. The publish control appears because this user has the action and scope."); }
  if (action === "area-review-direct") { state.orderPreparationRole = state.role; state.view = "areas"; render(); }
  if (action === "approve-order-subarea") { state.orderSubareaApproved = true; render(); showToast("AREA-221 approved and published. It is reusable but not automatically selected for the order."); }
  if (action === "return-order-preparation") { state.role = state.orderPreparationRole; roleSelect.value = state.role; if (state.role === "farmer") state.farmerLoggedIn = true; state.view = "new-order"; render(); showToast("Returned to the preserved order draft. Choose the approved Area explicitly if required."); }
  if (action === "blocked-colleague-edit") showToast("Viewing is permitted; editing or ownership transfer needs a separate granted action.");
  if (action === "toggle-hierarchy-builder") { state.hierarchyBuilderOpen = !state.hierarchyBuilderOpen; render(); }
  if (action === "create-hierarchy-person") {
    const name = document.querySelector("#new-hierarchy-name")?.value?.trim() || "";
    const title = document.querySelector("#new-hierarchy-title")?.value?.trim() || "Team member";
    const managerSelection = document.querySelector("#new-hierarchy-manager")?.value || "top";
    const managerId = managerSelection === "top" ? null : managerSelection;
    if (!name) showToast("Enter the person's name before adding them to the hierarchy.");
    else if (managerId === null || hierarchyPeople[managerId]) {
      const manager = managerId ? hierarchyUser(managerId) : null;
      const initials = name.split(/\s+/).slice(0, 2).map(part => part[0]).join("").toUpperCase();
      hierarchyPeople.demo = { initials: escapeMarkup(initials), name: escapeMarkup(name), title: escapeMarkup(title), manager: managerId, team: manager?.team || "S2L Demo Organisation", profile: "new-user" };
      state.demoHierarchyPerson = { manager: managerId };
      state.selectedHierarchyUser = "demo";
      state.hierarchyBuilderOpen = false;
      render();
      showToast(manager ? `${name} added under ${manager.name} with zero action permissions.` : `${name} added at the top. Alex now reports to them; permissions remain empty.`);
    }
  }
  if (action === "select-hierarchy-user") {
    const userId = actionControl.dataset.user;
    if (hierarchyPeople[userId]) {
      state.selectedHierarchyUser = userId;
      state.sarahReportingEditorOpen = false;
      render();
      showToast(`Showing ${hierarchyUser(userId).name}'s effective permissions and reporting line.`);
    }
  }
  if (action === "toggle-sarah-planning") { state.sarahPlanningGranted = !state.sarahPlanningGranted; render(); showToast(`Sarah's planning action ${state.sarahPlanningGranted ? "granted" : "removed"}. Her title and field permissions did not change.`); }
  if (action === "toggle-sarah-reporting-editor") { state.sarahReportingEditorOpen = !state.sarahReportingEditorOpen; render(); }
  if (action === "apply-sarah-manager") {
    const managerSelect = document.querySelector("#sarah-manager-select");
    if (managerSelect && reportingManagers[managerSelect.value]) {
      state.sarahManager = managerSelect.value;
      state.sarahReportingEditorOpen = false;
      render();
      showToast(`Sarah now reports to ${selectedSarahManager().name}. Her action grants and work history did not change.`);
    }
  }
  if (action === "propose-area") showToast("Missing geography proposed; users with geography validation access will review it before use.");
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
  if (action === "request-map-correction") showToast("Correction request sent to users with the required geography action and scope; the map stays read-only.");
  if (action === "submit-portal-order") {
    const selected = selectedOrderArea();
    state.portalOrderSubmitted = true;
    addNotification({ id: "order-so-1058-submitted-manager", audience: "manager", type: "order", reference: "SO-1058", title: "New Farmer-portal order", customer: "Green Estate", detail: `Standard soil analysis · ${selected.label} · ${selected.id} · requested 21 Sep`, readiness: `Awaiting £${selected.deposit} deposit · do not schedule`, source: "Farmer portal", time: "Just now", smsStatus: "submitted", actionLabel: "Open order" });
    addNotification({ id: "order-so-1058-submitted-sales", audience: "sales", type: "order", reference: "SO-1058", title: "Your customer submitted an order", customer: "Green Estate", detail: `Customer portal · ${selected.label} · no commercial approval required`, readiness: "Customer support visibility · payment pending", source: "Customer portal · web notification", time: "Just now", actionLabel: "Open customer order" });
    addNotification({ id: "order-so-1058-submitted-all-user", audience: "all_user", type: "order", reference: "SO-1058", title: "New customer order in your responsibility", customer: "Green Estate", detail: `${selected.label} · one in-app record for Alex's combined duties`, readiness: `Awaiting £${selected.deposit} deposit · do not schedule`, source: "Customer portal · operational responsibility", time: "Just now", smsStatus: "submitted", actionLabel: "Open order" });
    state.view = "new-order";
    render();
    showToast("SO-1058 submitted. Operations has its configured alert; Emma's customer-originated alert is web-only.");
  }
  if (action === "submit-sales-order") {
    const selected = selectedOrderArea();
    state.workOrderCreated = true;
    addNotification({ id: "order-so-1056-submitted", audience: "manager", type: "order", reference: "SO-1056", title: "New sales-assisted order", customer: "Green Estate", detail: `Standard soil analysis · ${selected.label} · ${selected.id} · requested 24 Sep`, readiness: "Ready for planning review", source: "Sales-assisted", time: "Just now", smsStatus: "submitted", actionLabel: "Open order" });
    state.view = "orders";
    render();
    showToast("SO-1056 created with its Area hierarchy and geometry revision frozen for Operations.");
  }
  if (action === "submit-support-request") {
    state.supportSubmitted = true;
    addNotification({ id: "support-sup-204-sales", audience: "sales", type: "support", reference: "SUP-204", title: "New customer support request", customer: "Green Estate", detail: "Access question linked to SO-1046 · full text remains in S2L", readiness: "Open · response required", source: "Customer portal · web only", time: "Just now", actionLabel: "Open support request" });
    addNotification({ id: "support-sup-204-all-user", audience: "all_user", type: "support", reference: "SUP-204", title: "New customer support request", customer: "Green Estate", detail: "Assigned to Alex's permitted customer scope · full text remains in S2L", readiness: "Open · response required", source: "Customer portal · web only", time: "Just now", actionLabel: "Open support request" });
    state.view = "support";
    render();
    showToast("SUP-204 sent to Emma Clarke through the S2L web inbox only.");
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
  if (action === "demo-payment") { state.paymentPaid = true; render(); showToast(`Demo deposit of £${selectedOrderArea().deposit} verified; SO-1058 released to Operations planning.`); }
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

main.addEventListener("change", event => {
  const preference = event.target.dataset.notificationPreference;
  if (!preference) return;
  state.notificationPreferences[preference] = event.target.checked;
  showToast(`${event.target.checked ? "Enabled" : "Muted"} ${preference} notifications. Access, responsibility and workflow history are unchanged.`);
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
    if (state.role === "all_user" && notification.type === "support") state.view = "reports-support";
    else if (state.role === "all_user" && notification.type === "order") state.view = "orders";
    else if (state.role === "all_user" && notification.type === "assignment") state.view = "fieldwork";
    else if (notification.type === "support") state.view = "support";
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
  showToast("Field note preserved. Confirmed CRM interaction and operational-event records were linked without duplicating the original note.");
});

document.querySelector("#interaction-form").addEventListener("submit", event => {
  event.preventDefault();
  state.interactionSaved = true;
  state.customerActivityView = "timeline";
  interactionModal.close();
  render();
  showToast("Interaction recorded with participants, occurrence time, purpose, linked work, follow-up and recorder provenance.");
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
  const assigningUser = roles[state.role]?.name || "Authorised user";
  state.notifications.filter(notification => notification.type === "assignment" && notification.reference === "JOB-145").forEach(notification => { notification.active = false; });
  state.assignedOperator = chosen.name;
  addNotification({ id: `assignment-job-145-${chosen.id}`, audience: chosen.id === "alex" ? "all_user" : "operator", assignee: chosen.name, type: "assignment", reference: "JOB-145", title: "Job assigned to you", customer: "Westcombe Farms", detail: `Westcombe Farm · 11 Sep 09:00 · assigned by ${assigningUser}`, readiness: "Assigned · not yet accepted or started", source: "Explicit work assignment", time: "Just now", smsStatus: "submitted", active: true, actionLabel: "View job details" });
  assignmentModal.close();
  render();
  showToast(`JOB-145 assigned to ${chosen.name}. Eligibility, responsibility and notification evidence remain separate.`);
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
  showToast("SO-1056 created. Responsible planning users have in-app and simulated eligible-channel delivery records.");
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

document.querySelector("#subarea-form").addEventListener("submit", event => {
  event.preventDefault();
  state.orderSubareaSaved = true;
  state.orderSubareaApproved = false;
  subareaModal.close();
  render();
  showToast("Draft subarea saved for Operations review. It was not selected and the order price did not change.");
});

render();
