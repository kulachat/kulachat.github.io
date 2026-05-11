const appShell = document.querySelector("#appShell");
const sidebar = document.querySelector("#sidebar");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarToggleIcon = document.querySelector("#sidebarToggleIcon");
const sidebarToggleTooltip = document.querySelector("#sidebarToggleTooltip");
const sidebarRestore = document.querySelector("#sidebarRestore");
const sidebarHeader = document.querySelector("#sidebarHeader");
const sidebarBrand = document.querySelector("#sidebarBrand");
const sidebarPrimaryNav = document.querySelector("#sidebarPrimaryNav");

let isSidebarCollapsed = false;

function setSidebarCollapsed(collapsed) {
  isSidebarCollapsed = collapsed;
  if (!appShell || !sidebar || !sidebarRestore) return;

  document.body.classList.toggle("collab-sidebar-collapsed", collapsed);
  appShell.classList.toggle("lg:grid-cols-[0_minmax(0,1fr)]", collapsed);
  appShell.classList.toggle("lg:grid-cols-[256px_minmax(0,1fr)]", !collapsed);
  sidebar.classList.toggle("lg:w-0", collapsed);
  sidebar.classList.toggle("lg:px-0", collapsed);
  sidebar.classList.toggle("lg:border-transparent", collapsed);
  sidebarHeader?.classList.toggle("lg:hidden", collapsed);
  sidebarPrimaryNav?.classList.toggle("lg:hidden", collapsed);
  sidebarBrand?.classList.toggle("lg:pointer-events-none", collapsed);
  sidebarRestore.classList.toggle("lg:grid", collapsed);

  if (sidebarToggle) {
    sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  }
  if (sidebarToggleIcon) {
    sidebarToggleIcon.textContent = collapsed ? "left_panel_open" : "left_panel_close";
  }
  if (sidebarToggleTooltip) {
    sidebarToggleTooltip.textContent = collapsed ? "แสดงแถบเมนู" : "ซ่อนแถบเมนู";
  }
}

function toggleGradeGroup(button) {
  const target = document.querySelector(`#${button.dataset.gradeToggle}`);
  const icon = button.querySelector("[data-grade-icon]");
  const expanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", String(!expanded));
  target?.classList.toggle("hidden", expanded);
  if (icon) {
    icon.textContent = expanded ? "chevron_right" : "expand_more";
  }
}

sidebarToggle?.addEventListener("click", () => setSidebarCollapsed(!isSidebarCollapsed));
sidebarRestore?.addEventListener("click", () => setSidebarCollapsed(false));
window.addEventListener("resize", () => setSidebarCollapsed(isSidebarCollapsed));

document.querySelectorAll("[data-grade-toggle]").forEach((button) => {
  button.addEventListener("click", () => toggleGradeGroup(button));
});

requestAnimationFrame(() => {
  document.querySelectorAll(".collab-progress__bar[style]").forEach((bar) => {
    const target = bar.style.width;
    bar.style.width = "0";
    requestAnimationFrame(() => { bar.style.width = target; });
  });
});

document.querySelectorAll(".collab-year-control__pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".collab-year-control__pill").forEach((p) => {
      p.classList.remove("collab-year-control__pill--active");
      p.removeAttribute("aria-pressed");
    });
    pill.classList.add("collab-year-control__pill--active");
    pill.setAttribute("aria-pressed", "true");
  });
});
