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
};

const roles = {
  sales: {
    name: "Emma Clarke",
    title: "Regional Account Manager",
    initials: "EC",
    accent: "#b46546",
    nav: [
      ["overview", "⌂", "Overview"], ["customers", "C", "Customers"], ["orders", "O", "Orders"],
      ["results", "R", "Results"], ["issues", "!", "Issues", 2],
    ],
  },
  manager: {
    name: "Daniel Wright",
    title: "Sampling Manager",
    initials: "DW",
    accent: "#3979a8",
    nav: [
      ["overview", "⌂", "Operations"], ["jobs", "J", "Jobs", 3], ["schedule", "S", "Schedule"],
      ["operators", "P", "Operators"], ["areas", "A", "Farms & areas"], ["issues", "!", "Issues", 2],
    ],
  },
  operator: {
    name: "Sarah Lewis",
    title: "Field Operator",
    initials: "SL",
    accent: "#467847",
    nav: [["overview", "⌂", "My day"], ["jobs", "J", "My jobs", 3], ["notes", "N", "Field notes"]],
  },
  finance: {
    name: "Priya Shah",
    title: "Finance Administrator",
    initials: "PS",
    accent: "#7d5b94",
    nav: [
      ["overview", "⌂", "Overview"], ["ready", "✓", "Ready to invoice", 8], ["orders", "O", "Orders"],
      ["exceptions", "!", "Exceptions", 3], ["customers", "C", "Customers"],
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

function salesOverview() {
  return `${pageHeader("North region · Autumn 2026", "Good morning, Emma", "See customer progress, upcoming delivery dates and where your attention is needed.", `<button class="secondary-button" data-action="customers">View customers</button><button class="primary-button" data-action="new-order">New work order</button>`)}
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
      ${state.workOrderCreated ? `<tr class="new-row"><td><div class="cell-title"><strong>SO-1056</strong><small>Created just now</small></div></td><td><div class="cell-title"><strong>Westcombe Farms</strong><small>Westcombe Farm</small></div></td><td><div class="cell-title"><strong>28 samples</strong><small>4 fields · Powered corer</small></div></td><td>${progress(0,"Planning")}</td><td class="money">£2,680</td><td>${status("Awaiting planning","blue")}</td></tr>` : ""}
      <tr data-clickable data-action="customer-detail"><td><div class="cell-title"><strong>SO-1046</strong><small>Due 18 Sep</small></div></td><td><div class="cell-title"><strong>Green Estate</strong><small>Home Farm</small></div></td><td><div class="cell-title"><strong>75 samples</strong><small>5 fields · Soil analysis</small></div></td><td>${progress(64,"48 collected")}</td><td class="money">£4,200</td><td>${status("Weather delay","amber")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1042</strong><small>Due 9 Sep</small></div></td><td><div class="cell-title"><strong>Smith & Sons</strong><small>North Farm</small></div></td><td><div class="cell-title"><strong>84 samples</strong><small>6 fields · Nutrient plan</small></div></td><td>${progress(100,"Report ready")}</td><td class="money">£8,850</td><td>${status("Ready to report","green")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1051</strong><small>Due 22 Sep</small></div></td><td><div class="cell-title"><strong>Brown Farming Ltd</strong><small>West Farm</small></div></td><td><div class="cell-title"><strong>41 samples</strong><small>3 fields · Soil analysis</small></div></td><td>${progress(44,"18 collected")}</td><td class="money">£1,900</td><td>${status("In field","blue")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1038</strong><small>Due 12 Sep</small></div></td><td><div class="cell-title"><strong>Hilltop Partnership</strong><small>Hilltop Farm</small></div></td><td><div class="cell-title"><strong>54 samples</strong><small>4 fields · Carbon baseline</small></div></td><td>${progress(96,"52 results")}</td><td class="money">£6,780</td><td>${status("2 results missing","amber")}</td></tr>
      <tr><td><div class="cell-title"><strong>SO-1049</strong><small>Due 16 Sep</small></div></td><td><div class="cell-title"><strong>Lower Park Estates</strong><small>Lower Park</small></div></td><td><div class="cell-title"><strong>32 samples</strong><small>2 fields · Nutrient plan</small></div></td><td>${progress(82,"At lab")}</td><td class="money">£4,960</td><td>${status("On track","green")}</td></tr>
    </tbody></table></div></div>`;
}

function salesCustomerDetail() {
  return `${pageHeader("Customers · Green Estate", "Green Estate", "One account timeline from commercial agreement through field delivery, results and invoicing.", `<button class="secondary-button">Contact details</button><button class="primary-button">Add CRM note</button>`)}
    <section class="customer-hero"><div class="customer-monogram">GE</div><div><h2>Green Estate</h2><p>Primary contact: Tom Green · Home Farm, Somerset · Customer since 2022</p></div><div class="customer-hero__stats"><span><strong>3</strong><small>Farms</small></span><span><strong>2</strong><small>Open orders</small></span><span><strong>£18.4k</strong><small>Order value</small></span></div></section>
    <section class="dashboard-grid">
      <div class="stack">
        <div class="panel"><header class="panel__header"><div><h2>Autumn Soil Analysis</h2><p>SO-1046 · 5 fields · 75 planned samples</p></div>${status("Weather delay","amber")}</header><div class="panel__body"><div style="margin-bottom:18px">${progress(64,"Sampling progress · 48 collected")}</div><div class="metric-grid"><div class="metric"><small>Collected</small><strong>48 / 75</strong><em>64% complete</em></div><div class="metric"><small>At lab</small><strong>32</strong><em>Next dispatch Thu</em></div><div class="metric"><small>Results ready</small><strong>18</strong><em>12 validated</em></div></div></div></div>
        <div class="panel"><header class="panel__header"><div><h2>Customer timeline</h2><p>CRM and operational activity in one auditable view</p></div><button class="text-button">Filter</button></header><div class="panel__body"><div class="timeline" id="customer-timeline">
          ${state.noteSaved ? `<article class="timeline-item"><span class="timeline-marker">SL</span><div class="timeline-content"><div class="timeline-meta"><span>Sarah Lewis · Field operator</span><time>Just now</time></div><h3>Flooding reported; return agreed with Tom</h3><p>East Meadow cannot be accessed. Original field note and photo retained. Follow-up proposed for Wednesday.</p><div class="timeline-tags"><span class="tag blue">CRM interaction</span><span class="tag amber">Operational event</span><span class="tag grey">AI reviewed</span></div></div></article>` : ""}
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
  return `${pageHeader("Field operations · 8 September", "Keep today moving", "Assign work, balance operator capacity and resolve site exceptions with the decision context preserved.", `<button class="secondary-button">Open map</button><button class="primary-button" data-action="assign">Assign JOB-145</button>`)}
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
      ${state.noteSaved ? `<div class="site-alert"><span class="site-alert__icon">!</span><div><strong>Flooding reported · work blocked</strong><p>Your note, transcript and photo were shared with Operations and Sales. Thursday return is awaiting access confirmation.</p></div></div>` : `<div class="site-alert"><span class="site-alert__icon">!</span><div><strong>Site conditions may affect access</strong><p>Heavy overnight rain is forecast. Use Add note to report a delay, farmer conversation, photo or other site evidence.</p></div></div>`}
      <div class="job-details"><div class="job-detail"><small>Contact</small><strong>Tom Green<br>07700 900 142</strong></div><div class="job-detail"><small>Instructions</small><strong>Call on arrival<br>Use east gate</strong></div><div class="job-detail"><small>Fields</small><strong>5 total<br>2 remaining</strong></div></div>
      <div class="smart-case-handoff ${state.smartCaseOpened ? "is-ready" : ""}"><span class="smart-case-icon">SC</span><div><strong>${state.smartCaseOpened ? "JOB-143 is ready on Smart Case SC-008" : "Continue this job on Smart Case SC-008"}</strong><p>${state.smartCaseOpened ? "The map, field boundaries and remaining 27-sample plan are available offline." : "Sends the job map, fields, instructions and sample plan to your assigned field device."}</p></div><button class="primary-button" data-action="smart-case">${state.smartCaseOpened ? "Resume sampling" : "Send & open"}</button></div>
      <div class="job-actions"><button class="secondary-button">View route</button><button class="secondary-button" data-action="note">Add note</button></div>
    </article></div>
    <div class="panel"><header class="panel__header"><div><h2>Later today</h2><p>Your next assigned job</p></div></header><div class="panel__body"><div class="attention-item">${iconBadge("2")}<div><strong>Manor Farm · JOB-147</strong><small>14:30 · 18 samples · Manual auger · 26 min from Green Estate</small></div>${status("Assigned","grey")}</div></div></div></div>
    <div class="stack"><div class="panel"><header class="panel__header"><div><h2>Your capability today</h2><p>Person + assigned equipment + site fit</p></div>${status("Suitable","green")}</header><div class="panel__body"><div class="capability-block"><h3>Qualified methods</h3><div class="capability-tags"><span class="tag green">Powered corer</span><span class="tag green">Manual auger</span><span class="tag green">Smart Case</span><span class="tag grey">ATV certified</span></div></div><div class="capability-block"><h3>Assigned equipment</h3><div class="equipment-row"><span class="equipment-icon">ATV</span><div><strong>ATV-04</strong><small>Utility vehicle · inspected 7 Sep</small></div><small>Ready</small></div><div class="equipment-row"><span class="equipment-icon">C12</span><div><strong>Corer-12</strong><small>Powered · 0–300 mm · 25 mm core</small></div><small>Ready</small></div><div class="equipment-row"><span class="equipment-icon">SC</span><div><strong>Smart Case SC-008</strong><small>10 pods · GNSS · offline ready</small></div><small>Synced</small></div></div><div class="capability-block"><h3>Effective job capability</h3><p style="margin:0;color:var(--ink-soft);font-size:9px;line-height:1.5">Suitable for powered 0–250 mm soil sampling with GNSS traceability and 10-pod workflow.</p></div></div></div>
    <div class="panel"><header class="panel__header"><div><h2>This week</h2><p>Your work evidence, with site delays separated</p></div></header><div class="panel__body metric-grid"><div class="metric"><small>Field time</small><strong>12h 24m</strong><em>Active assignments</em></div><div class="metric"><small>Samples</small><strong>106</strong><em>104 accepted</em></div><div class="metric"><small>Travel</small><strong>182 km</strong><em>4h 08m</em></div></div></div></div></section>`;
}

function financeOverview() {
  return `<section class="finance-hero"><div class="finance-hero__intro"><span class="eyebrow" style="color:#bdd2ca">September billing cycle</span><h1>Invoice readiness</h1><p>See delivered value and exactly what prevents the remainder from being invoiced.</p></div><div class="finance-hero__metric"><small>Ready to invoice</small><strong>£48,620</strong><span>8 orders · +£7,250 this week</span></div><div class="finance-hero__metric"><small>Awaiting completion</small><strong>£17,340</strong><span>5 orders progressing</span></div><div class="finance-hero__metric"><small>Blocked</small><strong>£4,120</strong><span>3 exceptions to resolve</span></div></section>
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
      <tr><td><strong>SO-1042</strong></td><td><div class="cell-title"><strong>Smith & Sons</strong><small>Precision Nutrient Plan</small></div></td><td class="money">£8,850</td><td>${status("Delivered","green")}</td><td>${status("Ready","green")}</td><td><button class="text-button">Add to batch</button></td></tr>
      <tr><td><strong>SO-1046</strong></td><td><div class="cell-title"><strong>Green Estate</strong><small>Autumn Soil Analysis</small></div></td><td class="money">£4,200</td><td>${status("64% sampled","amber")}</td><td>${status("Waiting","amber")}</td><td><div class="cell-title"><strong>27 samples outstanding</strong><small>Return planned Thu</small></div></td></tr>
      <tr><td><strong>SO-1038</strong></td><td><div class="cell-title"><strong>Hilltop Partnership</strong><small>Soil Carbon Baseline</small></div></td><td class="money">£6,780</td><td>${status("Results pending","amber")}</td><td>${status("Waiting","amber")}</td><td><div class="cell-title"><strong>Chase 2 results</strong><small>Lab ETA tomorrow</small></div></td></tr>
      <tr><td><strong>SO-1051</strong></td><td><div class="cell-title"><strong>Brown Farming Ltd</strong><small>West Farm Sampling</small></div></td><td class="money">£1,900</td><td>${status("Partial","red")}</td><td>${status("Blocked","red")}</td><td><div class="cell-title"><strong>Approve variation</strong><small>£600 commercial change</small></div></td></tr>
      <tr><td><strong>SO-1036</strong></td><td><div class="cell-title"><strong>Lower Park Estates</strong><small>Autumn Soil Analysis</small></div></td><td class="money">£7,240</td><td>${status("Delivered","green")}</td><td>${status("Ready","green")}</td><td><button class="text-button">Add to batch</button></td></tr>
      <tr><td><strong>SO-1022</strong></td><td><div class="cell-title"><strong>Ashcombe Farms</strong><small>Spring Nutrient Plan</small></div></td><td class="money">£5,150</td><td>${status("Complete","grey")}</td><td>${status("INV-2084","blue")}</td><td><div class="cell-title"><strong>Invoiced 2 Sep</strong><small>Due 2 Oct</small></div></td></tr>
    </tbody></table></div></div>`;
}

function genericView() {
  const role = roles[state.role];
  const item = role.nav.find(entry => entry[0] === state.view);
  const label = item ? item[2] : "Workspace";
  const roleName = roleSelect.options[roleSelect.selectedIndex].text;
  return `${pageHeader(roleName, label, `This supporting ${label.toLowerCase()} view is represented in the stakeholder prototype navigation.`)}<div class="panel"><div class="empty-state"><div class="empty-state__icon">${item ? item[1] : "•"}</div><h2>${label}</h2><p>The main demonstration focuses on the highest-value role workflow. Return to the overview to continue the end-to-end flooding and delivery scenario.</p><button class="primary-button" data-action="overview" style="margin-top:17px">Return to overview</button></div></div>`;
}

function render() {
  const role = roles[state.role];
  nav.innerHTML = role.nav.map(([id, icon, label, count]) => `<button class="nav-button ${state.view === id ? "is-active" : ""}" type="button" data-view="${id}"><span class="nav-button__icon">${icon}</span><span>${label}</span>${count ? `<span class="nav-button__count">${count}</span>` : ""}</button>`).join("");
  document.querySelector("#user-name").textContent = role.name;
  document.querySelector("#user-role").textContent = role.title;
  const avatar = document.querySelector("#user-avatar");
  avatar.textContent = role.initials;
  avatar.style.background = role.accent;
  noteFab.hidden = state.role !== "operator";

  if (state.role === "sales" && state.view === "overview") main.innerHTML = salesOverview();
  else if (state.role === "sales" && state.view === "customers" && state.customerDetail) main.innerHTML = salesCustomerDetail();
  else if (state.role === "sales" && state.view === "customers") main.innerHTML = salesCustomers();
  else if (state.role === "sales" && state.view === "orders") main.innerHTML = salesOrders();
  else if (state.role === "manager" && state.view === "overview") main.innerHTML = managerOverview();
  else if (state.role === "manager" && state.view === "schedule") main.innerHTML = managerSchedule();
  else if (state.role === "manager" && state.view === "operators") main.innerHTML = managerOperators();
  else if (state.role === "manager" && state.view === "areas") main.innerHTML = managerAreas();
  else if (state.role === "operator" && state.view === "overview") main.innerHTML = operatorOverview();
  else if (state.role === "finance" && state.view === "overview") main.innerHTML = financeOverview();
  else if (state.role === "finance" && state.view === "ready") main.innerHTML = financeReady();
  else if (state.role === "finance" && state.view === "orders") main.innerHTML = financeOrders();
  else main.innerHTML = genericView();
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
  state.view = "overview";
  state.customerDetail = null;
  render();
});

nav.addEventListener("click", event => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  state.view = button.dataset.view;
  state.customerDetail = null;
  document.querySelector(".sidebar").classList.remove("is-open");
  render();
});

main.addEventListener("click", event => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "customers") { state.view = "customers"; state.customerDetail = null; render(); }
  if (action === "customer-detail") { state.view = "customers"; state.customerDetail = "green-estate"; render(); }
  if (action === "overview") { state.view = "overview"; render(); }
  if (action === "assign") openAssignmentModal();
  if (action === "note") openNoteModal();
  if (action === "new-order") workOrderModal.showModal();
  if (action === "add-customer") customerModal.showModal();
  if (action === "add-area") areaModal.showModal();
  if (action === "smart-case") {
    state.smartCaseOpened = true;
    render();
    showToast("JOB-143 sent to Smart Case SC-008 and available offline.");
  }
  if (action === "invoice-batch") showToast("Draft invoice batch created for Finance review.");
});

document.querySelector("#menu-button").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("is-open"));
noteFab.addEventListener("click", openNoteModal);

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
  state.assignedOperator = chosen.name;
  assignmentModal.close();
  render();
  showToast(`JOB-145 assigned to ${chosen.name}. Decision context captured.`);
});

document.querySelector("#work-order-form").addEventListener("submit", event => {
  event.preventDefault();
  state.workOrderCreated = true;
  state.role = "sales";
  roleSelect.value = "sales";
  state.view = "orders";
  workOrderModal.close();
  render();
  showToast("SO-1056 created and sent to Operations for planning.");
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
