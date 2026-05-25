const appShell = document.querySelector("#appShell");
const sidebar = document.querySelector("#sidebar");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarToggleIcon = document.querySelector("#sidebarToggleIcon");
const sidebarToggleTooltip = document.querySelector("#sidebarToggleTooltip");
const sidebarRestore = document.querySelector("#sidebarRestore");
const pageLinks = document.querySelectorAll("[data-page-link]");
const pageViews = document.querySelectorAll("[data-page-view]");
const themeForm = document.querySelector("#themeForm");
const themeResetButton = document.querySelector("#themeResetButton");
const themeLogoButton = document.querySelector("#themeLogoButton");
const themeLogoInput = document.querySelector("#themeLogoInput");
const themeLogoPreview = document.querySelector("#themeLogoPreview");
const themeLogoFileName = document.querySelector("#themeLogoFileName");
const themeStatus = document.querySelector("#themeStatus");
const themeToast = document.querySelector("#themeToast");
const themeSidebarPreview = document.querySelector(".collab-theme-sidebar-preview__surface");
const themeBrandPicker = document.querySelector("[data-theme-brand-picker]");
const themeBrandText = document.querySelector("[data-theme-brand-text]");
const themePercentInputs = document.querySelectorAll("[data-theme-percent]");
const sidebarColorPicker = document.querySelector("[data-sidebar-color-picker]");
const sidebarColorText = document.querySelector("[data-sidebar-color-text]");
const sidebarPercentInputs = document.querySelectorAll("[data-sidebar-percent]");

const themeStorageKey = "collabThemeSetup";
const defaultTheme = {
  fields: {
    schoolName: "Bangkok Christian College",
    schoolSubtitle: "A-Chieve to School partnership with BCC",
    dashboardTitle: "BCC Student Tools Dashboard",
  },
  tokens: {
    "--ci-brand": "#4A235A",
    "--ci-brand-hover": "#3a1b47",
    "--ci-brand-soft": "#f5eff7",
    "--ci-brand-tint": "#eadff0",
    "--sb-bg": "var(--ci-brand)",
    "--sb-bg-active": "rgba(255,255,255,0.15)",
    "--sb-text": "rgba(255,255,255,0.92)",
  },
  derive: {
    hover: 22,
    soft: 92,
    tint: 84,
  },
  sidebar: {
    color: "#4A235A",
    text: 92,
    active: 15,
    icon: 10,
  },
  logo: {
    src: "/prototype/assets/logos/bangkok-christian-college-logo.png",
    name: "bangkok-christian-college-logo.png",
  },
};

let isSidebarCollapsed = false;
let currentLogo = { ...defaultTheme.logo };

function setSidebarCollapsed(collapsed) {
  isSidebarCollapsed = collapsed;
  if (!appShell || !sidebar || !sidebarRestore) return;

  const expandedGridClass = "lg:grid-cols-[256px_minmax(0,1fr)]";

  document.body.classList.toggle("collab-sidebar-collapsed", collapsed);
  appShell.classList.toggle("lg:grid-cols-[0_minmax(0,1fr)]", collapsed);
  appShell.classList.toggle(expandedGridClass, !collapsed);
  sidebar.classList.toggle("collab-sidebar--collapsed", collapsed);
  sidebar.classList.toggle("admin-sidebar--collapsed", collapsed);
  sidebarRestore.classList.toggle("collab-sidebar__restore--visible", collapsed);

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
  target?.classList.toggle("is-open", !expanded);
  if (icon) {
    icon.textContent = expanded ? "chevron_right" : "expand_more";
  }
}

function showPage(pageName) {
  pageViews.forEach((view) => {
    view.hidden = view.dataset.pageView !== pageName;
  });

  pageLinks.forEach((link) => {
    const isActive = link.dataset.pageLink === pageName;
    link.classList.toggle("collab-sidebar__item--active", isActive && link.classList.contains("collab-sidebar__item"));
    if (isActive && link.classList.contains("collab-sidebar__item")) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getSavedTheme() {
  try {
    const savedTheme = JSON.parse(localStorage.getItem(themeStorageKey));
    if (!savedTheme) return JSON.parse(JSON.stringify(defaultTheme));

    return {
      fields: { ...defaultTheme.fields, ...savedTheme.fields },
      tokens: { ...defaultTheme.tokens, ...savedTheme.tokens },
      derive: { ...defaultTheme.derive, ...savedTheme.derive },
      sidebar: {
        ...defaultTheme.sidebar,
        color: savedTheme.sidebar?.color || normalizeHex(savedTheme.tokens?.["--sb-bg"] || "") || defaultTheme.sidebar.color,
        text: savedTheme.sidebar?.text ?? opacityPercent(savedTheme.tokens?.["--sb-text"], defaultTheme.sidebar.text),
        active: savedTheme.sidebar?.active ?? opacityPercent(savedTheme.tokens?.["--sb-bg-active"], defaultTheme.sidebar.active),
        icon: savedTheme.sidebar?.icon ?? opacityPercent(savedTheme.tokens?.["--sb-icon-bg"], defaultTheme.sidebar.icon),
      },
      logo: (() => {
        const saved = savedTheme.logo || {};
        const src = saved.src || "";
        const validSrc = src.startsWith("/prototype/") || src.startsWith("blob:") || src.startsWith("data:");
        return validSrc ? { ...defaultTheme.logo, ...saved } : { ...defaultTheme.logo };
      })(),
    };
  } catch {
    return JSON.parse(JSON.stringify(defaultTheme));
  }
}

function normalizeHex(value) {
  const input = value.trim();
  const shortHex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = /^#?([a-f\d]{6})$/i;

  if (shortHex.test(input)) {
    return input.replace(shortHex, "#$1$1$2$2$3$3").toLowerCase();
  }
  if (fullHex.test(input)) {
    return input.replace(fullHex, "#$1").toLowerCase();
  }
  return null;
}

function hexToRgb(hex) {
  const normalizedHex = normalizeHex(hex) || defaultTheme.tokens["--ci-brand"];
  const value = normalizedHex.slice(1);
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }) {
  return [r, g, b]
    .map((channel) => Math.round(channel).toString(16).padStart(2, "0"))
    .join("")
    .replace(/^/, "#");
}

function mixColor(hex, target, percent) {
  const color = hexToRgb(hex);
  const amount = Math.min(Math.max(Number(percent) || 0, 0), 100) / 100;

  return rgbToHex({
    r: color.r + (target.r - color.r) * amount,
    g: color.g + (target.g - color.g) * amount,
    b: color.b + (target.b - color.b) * amount,
  });
}

function deriveBrandTokens(brand, derive) {
  const normalizedBrand = normalizeHex(brand) || defaultTheme.tokens["--ci-brand"];
  return {
    "--ci-brand": normalizedBrand,
    "--ci-brand-hover": mixColor(normalizedBrand, { r: 0, g: 0, b: 0 }, derive.hover),
    "--ci-brand-soft": mixColor(normalizedBrand, { r: 255, g: 255, b: 255 }, derive.soft),
    "--ci-brand-tint": mixColor(normalizedBrand, { r: 255, g: 255, b: 255 }, derive.tint),
  };
}

function opacityPercent(value, fallback) {
  const match = String(value || "").match(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*(0?\.\d+|1(?:\.0)?)\s*\)/i);
  if (!match) return fallback;
  return Math.round(Number(match[1]) * 100);
}

function rgbaWhite(percent) {
  const opacity = Math.min(Math.max(Number(percent) || 0, 0), 100) / 100;
  return `rgba(255,255,255,${opacity.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")})`;
}

function deriveSidebarTokens(settings) {
  const sidebarColor = settings.color === "var(--ci-brand)"
    ? "var(--ci-brand)"
    : normalizeHex(settings.color || "") || defaultTheme.sidebar.color;

  return {
    "--sb-bg": sidebarColor,
    "--sb-bg-active": rgbaWhite(settings.active),
    "--sb-bg-hover": rgbaWhite(Math.max(settings.active * 0.6, 4)),
    "--sb-text": rgbaWhite(settings.text),
    "--sb-text-sub": rgbaWhite(Math.max(settings.text * 0.56, 25)),
    "--sb-text-label": rgbaWhite(Math.max(settings.text * 0.4, 18)),
    "--sb-border": rgbaWhite(Math.max(settings.icon + 2, 8)),
    "--sb-icon-bg": rgbaWhite(settings.icon),
    "--sb-icon-active": rgbaWhite(Math.min(settings.icon + 8, 40)),
    "--sb-chip-bg": rgbaWhite(Math.max(settings.icon - 3, 4)),
  };
}

function updateTokenSwatches() {
  document.querySelectorAll("[data-theme-token]").forEach((input) => {
    const swatch = input.closest(".collab-token-field")?.querySelector(".collab-token-field__swatch");
    if (swatch) {
      swatch.style.background = input.value.trim();
    }
  });

  const theme = collectThemeFromForm();
  Object.entries(theme.tokens).forEach(([token, value]) => {
    document.querySelectorAll(`[data-derived-swatch="${token}"]`).forEach((swatch) => {
      swatch.style.background = value;
    });
    document.querySelectorAll(`[data-derived-value="${token}"]`).forEach((output) => {
      output.textContent = value;
    });
  });

  themePercentInputs.forEach((input) => {
    document.querySelectorAll(`[data-theme-percent-output="${input.dataset.themePercent}"]`).forEach((output) => {
      output.textContent = input.value;
    });
  });

  sidebarPercentInputs.forEach((input) => {
    document.querySelectorAll(`[data-sidebar-percent-output="${input.dataset.sidebarPercent}"]`).forEach((output) => {
      output.textContent = input.value;
    });
  });
}

function setThemeStatus(message) {
  if (!themeStatus) return;
  themeStatus.textContent = message;
}

function showThemeToast(message) {
  if (!themeToast) return;
  const toastMessage = themeToast.querySelector("span:last-child");
  if (toastMessage) {
    toastMessage.textContent = message;
  }
  themeToast.hidden = false;
  window.clearTimeout(showThemeToast.timeoutId);
  showThemeToast.timeoutId = window.setTimeout(() => {
    themeToast.hidden = true;
  }, 2600);
}

function collectThemeFromForm() {
  const fields = {};
  const tokens = {};
  const derive = { ...defaultTheme.derive };
  const sidebarSettings = { ...defaultTheme.sidebar };

  document.querySelectorAll("[data-theme-field]").forEach((input) => {
    fields[input.dataset.themeField] = input.value.trim();
  });

  document.querySelectorAll("[data-theme-token]").forEach((input) => {
    tokens[input.dataset.themeToken] = input.value.trim();
  });

  themePercentInputs.forEach((input) => {
    derive[input.dataset.themePercent] = Number(input.value);
  });

  sidebarPercentInputs.forEach((input) => {
    sidebarSettings[input.dataset.sidebarPercent] = Number(input.value);
  });
  if (sidebarColorText) {
    sidebarSettings.color = sidebarColorText.value.trim();
  }

  const brandTokens = deriveBrandTokens(tokens["--ci-brand"] || defaultTheme.tokens["--ci-brand"], derive);
  const sidebarTokens = deriveSidebarTokens(sidebarSettings);

  return {
    fields: { ...defaultTheme.fields, ...fields },
    tokens: { ...defaultTheme.tokens, ...tokens, ...brandTokens, ...sidebarTokens },
    derive,
    sidebar: sidebarSettings,
    logo: { ...currentLogo },
  };
}

function applyTheme(theme) {
  Object.entries(theme.tokens).forEach(([token, value]) => {
    document.documentElement.style.setProperty(token, value);
    sidebar?.style.setProperty(token, value);
    themeSidebarPreview?.style.setProperty(token, value);
  });

  document.querySelectorAll(".collab-school-name").forEach((node) => {
    node.textContent = theme.fields.schoolName;
  });
  document.querySelectorAll(".collab-school-subtitle").forEach((node) => {
    node.textContent = theme.fields.schoolSubtitle;
  });

  const dashboardTitle = document.querySelector('[data-page-view="dashboard"] .collab-panel__title');
  if (dashboardTitle) {
    dashboardTitle.textContent = theme.fields.dashboardTitle;
  }

  document.querySelectorAll(".collab-school-logo").forEach((logo) => {
    logo.src = theme.logo.src;
    logo.alt = theme.fields.schoolName;
  });
  if (themeLogoPreview) {
    themeLogoPreview.src = theme.logo.src;
    themeLogoPreview.alt = theme.fields.schoolName;
  }
  if (themeLogoFileName) {
    themeLogoFileName.textContent = theme.logo.name;
  }

  currentLogo = { ...theme.logo };
  updateTokenSwatches();
}

function fillThemeForm(theme) {
  document.querySelectorAll("[data-theme-field]").forEach((input) => {
    input.value = theme.fields[input.dataset.themeField] ?? "";
  });

  document.querySelectorAll("[data-theme-token]").forEach((input) => {
    input.value = theme.tokens[input.dataset.themeToken] ?? "";
  });

  themePercentInputs.forEach((input) => {
    input.value = theme.derive?.[input.dataset.themePercent] ?? defaultTheme.derive[input.dataset.themePercent];
  });

  if (themeBrandPicker && normalizeHex(theme.tokens["--ci-brand"])) {
    themeBrandPicker.value = normalizeHex(theme.tokens["--ci-brand"]);
  }
  if (sidebarColorText) {
    sidebarColorText.value = theme.sidebar?.color ?? defaultTheme.sidebar.color;
  }
  if (sidebarColorPicker && normalizeHex(theme.sidebar?.color || "")) {
    sidebarColorPicker.value = normalizeHex(theme.sidebar.color);
  }
  sidebarPercentInputs.forEach((input) => {
    input.value = theme.sidebar?.[input.dataset.sidebarPercent] ?? defaultTheme.sidebar[input.dataset.sidebarPercent];
  });
}

function loadTheme() {
  const theme = getSavedTheme();
  fillThemeForm(theme);
  applyTheme(theme);
}

sidebarToggle?.addEventListener("click", () => setSidebarCollapsed(!isSidebarCollapsed));
sidebarRestore?.addEventListener("click", () => setSidebarCollapsed(false));
window.addEventListener("resize", () => setSidebarCollapsed(isSidebarCollapsed));

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(link.dataset.pageLink);
  });
});

themeBrandPicker?.addEventListener("input", () => {
  if (themeBrandText) {
    themeBrandText.value = themeBrandPicker.value;
  }
});

themeBrandText?.addEventListener("input", () => {
  const normalizedHex = normalizeHex(themeBrandText.value);
  if (themeBrandPicker && normalizedHex) {
    themeBrandPicker.value = normalizedHex;
  }
});

sidebarColorPicker?.addEventListener("input", () => {
  if (sidebarColorText) {
    sidebarColorText.value = sidebarColorPicker.value;
  }
});

sidebarColorText?.addEventListener("input", () => {
  const normalizedHex = normalizeHex(sidebarColorText.value);
  if (sidebarColorPicker && normalizedHex) {
    sidebarColorPicker.value = normalizedHex;
  }
});

themeForm?.addEventListener("input", () => {
  const theme = collectThemeFromForm();
  applyTheme(theme);
  setThemeStatus("");
});

themeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const theme = collectThemeFromForm();
  try {
    localStorage.setItem(themeStorageKey, JSON.stringify(theme));
  } catch {
    setThemeStatus("บันทึกในเครื่องไม่ได้ แต่แสดงผลธีมใหม่แล้ว");
  }
  applyTheme(theme);
  if (themeStatus?.textContent === "") {
    setThemeStatus("บันทึกธีมเรียบร้อยแล้ว");
  }
  if (document.querySelector('[data-page-view="dashboard"]')) {
    showPage("dashboard");
  }
  showThemeToast("บันทึกธีมเรียบร้อยแล้ว");
});

themeResetButton?.addEventListener("click", () => {
  localStorage.removeItem(themeStorageKey);
  currentLogo = { ...defaultTheme.logo };
  fillThemeForm(defaultTheme);
  applyTheme(defaultTheme);
  setThemeStatus("คืนค่าเดิมเรียบร้อยแล้ว");
  showThemeToast("คืนค่า Theme เป็นค่าเริ่มต้นแล้ว");
});

themeLogoButton?.addEventListener("click", () => {
  themeLogoInput?.click();
});

themeLogoInput?.addEventListener("change", () => {
  const file = themeLogoInput.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    currentLogo = {
      src: String(reader.result),
      name: file.name,
    };
    applyTheme(collectThemeFromForm());
    setThemeStatus("");
  });
  reader.readAsDataURL(file);
});

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

loadTheme();
