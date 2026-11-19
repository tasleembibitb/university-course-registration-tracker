// University Course Registration Tracker — sample courses, statuses, countdown, saved in localStorage.
const STORAGE_KEY = "tb-course-registration-v1";
const DEADLINE = "2026-12-15"; // sample deadline — set your own

const DEMO = [
  { id: "prog", code: "CSC101", name: "Introduction to Programming",
    program: "BSCS 1st Semester", teacher: "Mr. Ahmed",
    days: "Mon + Wed, 9:00 – 10:30 AM", credits: 3, status: "booked", note: "Registration confirmed." },
  { id: "calc", code: "MTH201", name: "Calculus",
    program: "BSCS 2nd Semester", teacher: "Ms. Fatima",
    days: "Tue + Thu, 11:00 AM – 12:30 PM", credits: 3, status: "booked", note: "Registration confirmed." },
  { id: "eng", code: "ENG102", name: "English Composition",
    program: "BSCS 1st Semester", teacher: "Mr. Ali",
    days: "Fri (time not confirmed)", credits: null, status: "pending",
    note: "Not found in the portal — ask the teacher whether the course data has been entered." }
];

const STATUS_LABEL = { booked: "Booked", pending: "Pending" };

let items = load();
let filter = "all";

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* fall through to demo */ }
  return structuredClone(DEMO);
}

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch (e) { /* private mode */ }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function renderSummary() {
  const booked = items.filter(c => c.status === "booked");
  const pending = items.filter(c => c.status === "pending");
  const credits = booked.reduce((n, c) => n + (Number(c.credits) || 0), 0);
  document.getElementById("summary").textContent =
    items.length + " courses · " + booked.length + " booked · " + pending.length +
    " pending · " + credits + " credit hours booked.";
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const due = new Date(DEADLINE + "T00:00:00+05:00").getTime();
  const days = Math.round((due - today) / 86400000);
  const cd = document.getElementById("countdown");
  if (days < 0) {
    cd.textContent = "Registration closed " + (-days) + " day" + (days === -1 ? "" : "s") + " ago.";
    cd.className = "summary danger";
  } else if (days === 0) {
    cd.textContent = "Registration closes today.";
    cd.className = "summary danger";
  } else {
    cd.textContent = days + " day" + (days === 1 ? "" : "s") + " left to register.";
    cd.className = "summary";
  }
}

function render() {
  renderSummary();
  const filtered = items.filter(c => filter === "all" ? true : c.status === filter);
  const list = document.getElementById("course-list");
  list.innerHTML = "";
  filtered.forEach(c => {
    const card = document.createElement("div");
    card.className = "result-card status-" + c.status;
    card.innerHTML =
      '<span class="result-label">' + escapeHtml(c.code) + ' · ' + escapeHtml(c.program) + '</span>' +
      '<span class="result-value">' + escapeHtml(c.name) + '</span>' +
      '<span class="result-sub">Teacher: ' + escapeHtml(c.teacher || "—") + '</span>' +
      '<span class="result-sub">' + escapeHtml(c.days || "—") + '</span>' +
      '<span class="result-sub">Credit hours: ' + (c.credits ? escapeHtml(c.credits) : "—") + '</span>' +
      '<span class="result-sub' + (c.status === "pending" ? " alert" : "") + '">' + escapeHtml(c.note || "") + '</span>' +
      '<span><span class="badge status-' + c.status + '">' + STATUS_LABEL[c.status] + '</span></span>';
    const actions = document.createElement("div");
    actions.className = "card-actions";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "btn btn-secondary btn-small";
    toggle.textContent = c.status === "booked" ? "Mark pending" : "Mark booked";
    toggle.addEventListener("click", () => {
      c.status = c.status === "booked" ? "pending" : "booked";
      save(); render();
    });
    const del = document.createElement("button");
    del.type = "button";
    del.className = "btn btn-secondary btn-small";
    del.textContent = "Remove";
    del.addEventListener("click", () => { items = items.filter(x => x.id !== c.id); save(); render(); });
    actions.appendChild(toggle);
    actions.appendChild(del);
    card.appendChild(actions);
    list.appendChild(card);
  });
}

function updateTasks() {
  const boxes = document.querySelectorAll("#checklist input");
  const done = [...boxes].filter(c => c.checked).length;
  document.getElementById("task-summary").textContent = done + " of " + boxes.length + " done.";
  try {
    localStorage.setItem(STORAGE_KEY + "-tasks",
      JSON.stringify([...boxes].map(c => c.checked)));
  } catch (e) { /* private mode */ }
}

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY + "-tasks");
    if (!raw) return;
    const state = JSON.parse(raw);
    document.querySelectorAll("#checklist input").forEach((c, i) => { c.checked = !!state[i]; });
  } catch (e) { /* fall through */ }
}

document.querySelectorAll("#checklist input").forEach(c => c.addEventListener("change", updateTasks));

document.getElementById("add-form").addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("new-code").value.trim();
  const name = document.getElementById("new-name").value.trim();
  const program = document.getElementById("new-program").value.trim();
  const teacher = document.getElementById("new-teacher").value.trim();
  const days = document.getElementById("new-days").value.trim();
  const credits = document.getElementById("new-credits").value;
  const status = document.getElementById("new-status").value;
  if (!code || !name) return;
  items.push({ id: "c" + Date.now(), code, name, program, teacher, days,
    credits: credits ? Number(credits) : null, status, note: "" });
  save();
  e.target.reset();
  render();
});

document.getElementById("reset-demo").addEventListener("click", () => {
  items = structuredClone(DEMO);
  save();
  render();
});

document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  filter = btn.dataset.filter;
  document.querySelectorAll("#filters .chip").forEach(c => c.classList.toggle("active", c === btn));
  render();
});

loadTasks();
updateTasks();
render();
