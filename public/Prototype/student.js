// ── Data ─────────────────────────────────────────────────────────────────────

const coverClasses = {
  forest:  "bg-[linear-gradient(160deg,#a3d68e_0_28%,#f9d269_28%_34%,#5aa85b_34%_62%,#8c6239_62%_100%)]",
  paper:   "bg-[linear-gradient(160deg,#f8f2e8_0_35%,#d93b5f_35%_42%,#ffffff_42%_64%,#168cc7_64%_100%)]",
  webtool: "bg-gradient-to-br from-violet-400 to-indigo-500",
};

const assignments = [
  {
    id: "goals",
    order: "ลำดับแผนที่ 1",
    title: "สำรวจเป้าหมาย ความฝัน ความต้องการ (ตุ๊กตาแมงป่องส่วนหัว)",
    teacher: "ครูประจำชั้น",
    room: "ม.5/1",
    sentAt: "12 พ.ค. 2568",
    deadline: "19 พ.ค. 2568 เวลา 23:59 น.",
    deadlineDaysLeft: 7,
    cover: "forest",
    status: "unread",
    goal: "นักเรียนสำรวจความสนใจ ความฝัน และความต้องการของตนเอง แล้วเชื่อมโยงกับทักษะที่อยากพัฒนาในอนาคต",
    worksheetSections: [
      { label: "ส่วนที่ 1", desc: "เขียนสิ่งที่สนใจและเหตุผลที่สนใจ" },
      { label: "ส่วนที่ 2", desc: "เลือกทักษะที่อยากพัฒนาและระบุวิธีเริ่มต้นในสัปดาห์นี้" },
      { label: "ส่วนที่ 3", desc: "สรุปเป้าหมายหนึ่งข้อที่อยากทดลองทำจริง" },
    ],
    assets: [
      { icon: "picture_as_pdf", label: "ใบงาน: สำรวจเป้าหมายของฉัน", type: "PDF", action: "download" },
      { icon: "link", label: "แบบสำรวจออนไลน์ (a-chieve)", type: "เว็บ", action: "open", url: "https://a-chieve.org/doll-activity/map" },
    ],
  },
  {
    id: "career-match",
    type: "webtool",
    order: "เครื่องมือบนเว็บ",
    title: "รายชื่ออาชีพด้านล่างนี้",
    teacher: "ครูประจำชั้น",
    room: "ม.5/1",
    sentAt: "8 พ.ค. 2568",
    deadline: "31 พ.ค. 2568 เวลา 23:59 น.",
    deadlineDaysLeft: 21,
    cover: "webtool",
    status: "unread",
    webtool: {
      image: "https://service.a-chieve.org/uploads/Onboarding_screen_09_41f86a4f99.png",
      description: [
        "เป็นการประมวลผลจากข้อมูลที่ใส่ในตุ๊กตาขนมปัง ซึ่งแต่ละคนอาจได้ผลที่แตกต่างกันไป",
        "จะเปลี่ยนแปลงตามการอัปเดตข้อมูลในตุ๊กตาขนมปัง",
      ],
      url: "https://a-chieve.org/career/match",
      ctaLabel: "ดูรายชื่ออาชีพของฉัน",
    },
  },
  {
    id: "heart",
    order: "ลำดับแผนที่ 2",
    title: "กิจกรรมออนไลน์ How to ดูแลใจ ครั้งที่ 2",
    teacher: "ครูประจำชั้น",
    room: "ม.5/1",
    sentAt: "14 พ.ค. 2568",
    deadline: "26 พ.ค. 2568 เวลา 23:59 น.",
    deadlineDaysLeft: 14,
    cover: "paper",
    status: "read",
    goal: "นักเรียนเรียนรู้วิธีดูแลสุขภาพจิต และฝึกทักษะการรับรู้อารมณ์ของตนเองผ่านกิจกรรมเชิงสะท้อนคิด",
    worksheetSections: [
      { label: "ส่วนที่ 1", desc: "บันทึกอารมณ์ประจำวันย้อนหลัง 3 วัน" },
      { label: "ส่วนที่ 2", desc: "ระบุสิ่งที่ช่วยให้รู้สึกดีขึ้นและเหตุผล" },
      { label: "ส่วนที่ 3", desc: "วางแผนกิจกรรมดูแลใจที่จะทำในสัปดาห์นี้" },
    ],
    assets: [
      { icon: "picture_as_pdf", label: "ใบงาน: ดูแลใจด้วยตัวเอง", type: "PDF", action: "download" },
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function deadlineStyle(daysLeft) {
  const b = (cls, text) => `<span class="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${cls}">${text}</span>`;
  if (daysLeft > 7)  return { card: "border-slate-200 bg-white",   icon: "text-slate-400", badge: b("bg-slate-100 text-slate-500",                  `อีก ${daysLeft} วัน`) };
  if (daysLeft > 3)  return { card: "border-amber-200 bg-amber-50", icon: "text-amber-500", badge: b("border border-amber-200 bg-amber-100 text-amber-700", `⚡ อีก ${daysLeft} วัน`) };
  if (daysLeft > 0)  return { card: "border-orange-300 bg-orange-50", icon: "text-orange-500", badge: b("border border-orange-300 bg-orange-100 text-orange-700 font-bold", `🔥 เหลือแค่ ${daysLeft} วัน!`) };
  if (daysLeft === 0) return { card: "border-red-300 bg-red-50",    icon: "text-red-500",   badge: b("border border-red-300 bg-red-100 text-red-700 font-bold",              `🚨 วันนี้วันสุดท้าย!`) };
  return              { card: "border-slate-200 bg-slate-50",       icon: "text-slate-400", badge: b("bg-slate-200 text-slate-500 line-through",     `หมดเวลาแล้ว`) };
}

function setBadge(el, count) {
  if (!el) return;
  el.textContent = count > 0 ? count : "";
  el.classList.toggle("hidden", count === 0);
  el.classList.toggle("inline-flex", count > 0);
}

// ── DOM refs ──────────────────────────────────────────────────────────────────

const statTotal    = document.getElementById("statTotal");
const statUnread   = document.getElementById("statUnread");
const statRead     = document.getElementById("statRead");
const statExpired  = document.getElementById("statExpired");
const pendingList  = document.getElementById("pendingList");
const pendingBadge = document.getElementById("pendingBadge");
const doneList     = document.getElementById("doneList");

const drawer        = document.getElementById("assignmentDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");

const drawerCover      = document.getElementById("drawerCover");
const drawerOrder      = document.getElementById("drawerOrder");
const drawerTitle      = document.getElementById("drawerTitle");
const drawerDeadline   = document.getElementById("drawerDeadline");
const drawerContent    = document.getElementById("drawerContent");
const drawerStatus     = document.getElementById("drawerStatus");
const drawerStatusText = document.getElementById("drawerStatusText");

// Notification
const notifButton        = document.getElementById("notifButton");
const notifDropdown      = document.getElementById("notifDropdown");
const notifBadge         = document.getElementById("notifBadge");
const notifBadgeMobile   = document.getElementById("notifBadgeMobile");
const notifButtonMobile  = document.getElementById("notifButtonMobile");
const notifHeaderBadge   = document.getElementById("notifHeaderBadge");
const notifList          = document.getElementById("notifList");
const dropdownAssignmentBadge = document.getElementById("dropdownAssignmentBadge");
const mobileAssignmentBadge   = document.getElementById("mobileAssignmentBadge");
const avatarDot               = document.getElementById("avatarDot");

// Mobile menu
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu       = document.getElementById("mobileMenu");
const mobileMenuIcon   = document.getElementById("mobileMenuIcon");

// User dropdown
const userMenuButton  = document.getElementById("userMenuButton");
const userDropdown    = document.getElementById("userDropdown");
const userMenuChevron = document.getElementById("userMenuChevron");

// ── Render ────────────────────────────────────────────────────────────────────

function renderStats() {
  const total   = assignments.length;
  const unread  = assignments.filter(a => a.status === "unread").length;
  const read    = assignments.filter(a => a.status === "read").length;
  const expired = assignments.filter(a => a.status === "expired").length;

  statTotal.textContent   = total;
  statUnread.textContent  = unread;
  statRead.textContent    = read;
  statExpired.textContent = expired;
  pendingBadge.textContent = unread > 0 ? unread : "";

  updateBadges(unread);
}

function updateBadges(unread) {
  const hasUnread = unread > 0;

  // Notification bell badges
  setBadge(notifBadge, unread);
  setBadge(notifBadgeMobile, unread);

  // Profile dropdown badge + avatar dot
  setBadge(dropdownAssignmentBadge, unread);
  setBadge(mobileAssignmentBadge, unread);
  avatarDot?.classList.toggle("hidden", !hasUnread);
  avatarDot?.classList.toggle("block", hasUnread);

  // Notification dropdown header
  if (notifHeaderBadge) {
    notifHeaderBadge.textContent = hasUnread ? `${unread} ใหม่` : "ไม่มีการแจ้งเตือน";
    notifHeaderBadge.className = hasUnread
      ? "rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-700"
      : "rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-400";
  }
}

function renderNotifList() {
  if (!notifList) return;
  const unreadItems = assignments.filter(a => a.status === "unread");
  const readItems   = assignments.filter(a => a.status === "read");

  if (unreadItems.length === 0 && readItems.length === 0) {
    notifList.innerHTML = `<li class="px-4 py-6 text-center text-sm text-slate-400">ไม่มีการแจ้งเตือน</li>`;
    return;
  }

  const allItems = [...unreadItems, ...readItems];
  notifList.innerHTML = allItems.map(a => {
    const isUnread = a.status === "unread";
    const thumbHtml = a.type === "webtool"
      ? `<img src="${a.webtool.image}" class="mt-0.5 h-10 w-7 shrink-0 rounded-xl object-cover" alt="" />`
      : `<div class="mt-0.5 h-10 w-7 shrink-0 rounded-xl ${coverClasses[a.cover]}"></div>`;
    return `
      <li>
        <button type="button" data-notif-id="${a.id}"
          class="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-sky-50/50 transition-colors ${isUnread ? "bg-sky-50/60" : ""}">
          ${thumbHtml}
          <div class="min-w-0 flex-1">
            <div class="flex items-start justify-between gap-2">
              <p class="line-clamp-2 text-sm font-semibold leading-snug text-slate-800">${a.title}</p>
              ${isUnread ? `<span class="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-blue-500"></span>` : ""}
            </div>
            <p class="mt-0.5 text-xs text-slate-500">กำหนดส่ง ${a.deadline}</p>
            <p class="mt-0.5 text-xs ${isUnread ? "font-semibold text-sky-500" : "text-slate-400"}">
              ${isUnread ? "ยังไม่เปิดดู ✨" : "เปิดแล้ว"} · ส่งมาเมื่อ ${a.sentAt}
            </p>
          </div>
        </button>
      </li>
    `;
  }).join("");

  notifList.querySelectorAll("[data-notif-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      closeNotif();
      openDrawer(btn.dataset.notifId);
    });
  });
}

function createCard(assignment) {
  const isUnread = assignment.status === "unread";
  const card = document.createElement("button");
  card.type = "button";
  card.dataset.id = assignment.id;
  card.className = [
    "group w-full text-left rounded-2xl bg-white shadow-card",
    "grid grid-cols-[56px_minmax(0,1fr)] gap-4 p-4",
    "hover:shadow-soft transition-all duration-200",
    isUnread ? "border-2 border-sky-200" : "border border-slate-100",
  ].join(" ");

  const isWebtool = assignment.type === "webtool";
  const coverHtml = isWebtool
    ? `<img src="${assignment.webtool.image}" class="h-full min-h-16 w-14 rounded-xl object-cover" alt="" />`
    : `<div class="h-full min-h-16 w-14 rounded-xl ${coverClasses[assignment.cover]}"></div>`;
  const typeBadge = isWebtool
    ? `<span class="inline-flex items-center gap-0.5 rounded-full border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-500"><span class="material-symbols-rounded text-[11px]">open_in_new</span> เครื่องมือบนเว็บ</span>`
    : "";

  card.innerHTML = `
    ${coverHtml}
    <div class="min-w-0">
      <div class="mb-1.5 flex flex-wrap items-center gap-2">
        ${!isWebtool ? `<span class="text-xs font-medium text-slate-400">${assignment.order}</span>` : ""}
        ${typeBadge}
        ${isUnread ? `<span class="inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-2 py-0.5 text-[11px] font-semibold text-white">ใหม่ ✨</span>` : ""}
      </div>
      <h3 class="mb-2 font-title text-[15px] font-semibold leading-snug text-slate-900 line-clamp-2">${assignment.title}</h3>
      <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
        <span class="flex items-center gap-1">
          <span class="material-symbols-rounded text-[15px]">person</span>
          ${assignment.teacher}
        </span>
        <span class="flex items-center gap-1 ${isUnread ? "font-semibold text-sky-500" : ""}">
          <span class="material-symbols-rounded text-[15px]">schedule</span>
          กำหนดส่ง ${assignment.deadline}
        </span>
      </div>
    </div>
  `;

  card.addEventListener("click", () => openDrawer(assignment.id));
  return card;
}

function renderAssignments() {
  pendingList.innerHTML = "";
  doneList.innerHTML = "";

  assignments.forEach(a => {
    const card = createCard(a);
    if (a.status === "unread") {
      pendingList.appendChild(card);
    } else {
      doneList.appendChild(card);
    }
  });

  renderStats();
}

// ── Drawer ────────────────────────────────────────────────────────────────────

let activeId = null;

function openDrawer(id) {
  const a = assignments.find(a => a.id === id);
  if (!a) return;
  activeId = id;

  // Mark as read
  if (a.status === "unread") {
    a.status = "read";
    renderAssignments();
  }

  // Populate drawer header
  if (a.type === "webtool") {
    drawerCover.className = "h-14 w-10 shrink-0 overflow-hidden rounded-xl";
    drawerCover.innerHTML = `<img src="${a.webtool.image}" class="h-full w-full object-cover" alt="" />`;
  } else {
    drawerCover.className = `h-14 w-10 shrink-0 rounded-xl ${coverClasses[a.cover]}`;
    drawerCover.innerHTML = "";
  }
  drawerOrder.textContent = `${a.order} · ${a.room}`;
  drawerTitle.textContent = a.title;

  const ds = deadlineStyle(a.deadlineDaysLeft);
  drawerDeadline.className = `mb-5 rounded-2xl border px-4 py-4 shadow-sm ${ds.card}`;
  drawerDeadline.innerHTML = `
    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <span class="material-symbols-rounded text-[32px] ${ds.icon}">calendar_clock</span>
        <div>
          <p class="text-[11px] font-medium uppercase tracking-wide text-slate-400">กำหนดส่ง</p>
          <p class="mt-0.5 text-[15px] font-bold leading-snug text-slate-900">${a.deadline}</p>
        </div>
      </div>
      ${ds.badge}
    </div>
  `;

  // Populate drawer body
  if (a.type === "webtool") {
    drawerContent.innerHTML = `
      <div class="mb-5 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
        <img src="${a.webtool.image}" class="w-full object-cover" alt="" loading="lazy" />
      </div>
      <div class="mb-6">
        <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">📋 รายละเอียด</p>
        <ul class="space-y-3">
          ${a.webtool.description.map(d => `
            <li class="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400"></span>
              ${d}
            </li>
          `).join("")}
        </ul>
      </div>
      <a href="${a.webtool.url}" target="_blank" rel="noopener"
         class="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3.5 font-title font-semibold text-white shadow-sm transition-all hover:from-sky-500 hover:to-blue-600">
        <span class="material-symbols-rounded text-[20px]">open_in_new</span>
        ${a.webtool.ctaLabel}
      </a>
    `;
  } else {
    drawerContent.innerHTML = `
      <div class="mb-5">
        <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">🎯 เป้าหมายการเรียนรู้</p>
        <p class="leading-relaxed text-slate-700">${a.goal}</p>
      </div>
      <div class="mb-5">
        <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">📋 ใบงานของฉัน</p>
        <div class="grid gap-2">
          ${a.worksheetSections.map((s, i) => `
            <div class="flex gap-3 rounded-xl border border-sky-100 bg-white px-3 py-2.5 shadow-sm">
              <span class="mt-0.5 inline-flex h-5 min-w-[20px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-400 text-[10px] font-bold text-white">${i + 1}</span>
              <span class="text-sm text-slate-700">${s.desc}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <div>
        <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">✏️ สิ่งที่ต้องทำ</p>
        <div class="grid gap-2">
          ${a.assets.map(asset => {
            const isPdf = asset.action === "download";
            return `
              <div class="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white p-3 shadow-sm">
                <span class="material-symbols-rounded grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-[22px] text-sky-500">${asset.icon}</span>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-semibold text-slate-800">${asset.label}</p>
                  <p class="text-xs text-slate-400">${asset.type}</p>
                </div>
                <a href="${asset.url || '#'}" ${isPdf ? 'download' : 'target="_blank" rel="noopener"'}
                   class="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-400 px-4 text-xs font-semibold text-white hover:from-sky-500 hover:to-blue-500 shadow-sm transition-all">
                  <span class="material-symbols-rounded text-[16px]">${isPdf ? "download" : "open_in_new"}</span>
                  ${isPdf ? "ดาวน์โหลด" : "เปิดเว็บ"}
                </a>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  // Status footer
  const isRead = a.status === "read";
  drawerStatus.className = `flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${isRead ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-sky-50 text-sky-600 border-sky-100"}`;
  drawerStatusText.textContent = isRead ? "เปิดดูแล้ว · ระบบบันทึกสถานะแล้ว" : "ยังไม่เปิดดู";
  document.getElementById("drawerStatusIcon").textContent = isRead ? "check_circle" : "schedule";

  // Show
  drawer.classList.remove("translate-x-full");
  drawer.setAttribute("aria-hidden", "false");
  drawerOverlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeDrawer() {
  drawer.classList.add("translate-x-full");
  drawer.setAttribute("aria-hidden", "true");
  drawerOverlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  activeId = null;
}

closeDrawerBtn.addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", closeDrawer);
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeDrawer(); closeNotif(); } });

// ── Notification ──────────────────────────────────────────────────────────────

function openNotif() {
  closeUserMenu();
  renderNotifList();
  notifDropdown.classList.remove("hidden");
  notifButton.setAttribute("aria-expanded", "true");
}

function closeNotif() {
  notifDropdown?.classList.add("hidden");
  notifButton?.setAttribute("aria-expanded", "false");
}

notifButton?.addEventListener("click", e => {
  e.stopPropagation();
  notifDropdown.classList.contains("hidden") ? openNotif() : closeNotif();
});

notifButtonMobile?.addEventListener("click", () => openDrawer(
  assignments.find(a => a.status === "unread")?.id || assignments[0].id
));

document.addEventListener("click", () => closeNotif());

// ── Mobile menu ───────────────────────────────────────────────────────────────

mobileMenuButton.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden", isOpen);
  mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileMenuIcon.textContent = isOpen ? "menu" : "close";
});

// ── User dropdown ─────────────────────────────────────────────────────────────

function openUserMenu() {
  closeNotif();
  userDropdown.classList.remove("hidden");
  userMenuButton.setAttribute("aria-expanded", "true");
  userMenuChevron.style.transform = "rotate(180deg)";
}

function closeUserMenu() {
  userDropdown.classList.add("hidden");
  userMenuButton.setAttribute("aria-expanded", "false");
  userMenuChevron.style.transform = "";
}

userMenuButton.addEventListener("click", e => {
  e.stopPropagation();
  userDropdown.classList.contains("hidden") ? openUserMenu() : closeUserMenu();
});

document.addEventListener("click", () => closeUserMenu());
document.addEventListener("keydown", e => { if (e.key === "Escape") closeUserMenu(); });

// ── Init ──────────────────────────────────────────────────────────────────────

renderAssignments();
