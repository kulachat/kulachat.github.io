const lessons = [
  {
    id: "goals",
    order: "ลำดับแผนที่ 1",
    title: "สำรวจเป้าหมาย ความฝัน ความต้องการ (ตุ๊กตาแมงป่องส่วนหัว)",
    week: "สำหรับสอนใน: สัปดาห์ที่ 3 (รวม 2 คาบเรียน)",
    cover: "forest",
    sent: false,
    sentRooms: 0,
    sentStudents: 0,
  },
  {
    id: "heart",
    order: "ลำดับแผนที่ 2",
    title: "กิจกรรมออนไลน์ How to ดูแลใจ ครั้งที่ 2",
    week: "สำหรับสอนใน: สัปดาห์ที่ 3 (รวม 2 คาบเรียน)",
    cover: "paper",
    sent: false,
    sentRooms: 0,
    sentStudents: 0,
  },
];

const extraHomework = [
  ["ใบงานที่ 1 การวางแผนชีวิต", "2 ห้องเรียน", "26 พ.ค. 2568", "-", "ยังไม่มอบหมาย", "-", "blue"],
  ["แบบฝึกหัด เรื่อง สมการเชิงเส้น", "1 ห้องเรียน", "2 มิ.ย. 2568", "-", "ยังไม่มอบหมาย", "-", "mint"],
  ["สรุปบทเรียน เรื่อง พันธะเคมี", "2 ห้องเรียน", "9 มิ.ย. 2568", "-", "ยังไม่มอบหมาย", "-", "forest"],
];

const assets = [
  ["description", "ไฟล์เนื้อหาแผนการสอน", "รายละเอียดขั้นตอนการสอน"],
  ["collections_bookmark", "ไฟล์ใบความรู้ (สำหรับครู)", "ไฟล์กิจกรรม / สื่อชั้นเรียน"],
  ["slideshow", "ไฟล์สไลด์นำเสนอ (ppt)", "-"],
  ["picture_as_pdf", "ไฟล์ใบงาน (pdf)", "-"],
  ["link", "เครื่องมือบนเว็บ", "-"],
];

const lessonPackageDownload = {
  url: "/prototype/assets/preview/Modern_Education_Mockup_A4.pptx",
  filename: "ชุดแผนการสอน_สายอาชีพแห่งอนาคต.pptx",
};

const webToolUrl = "https://a-chieve.org/doll-activity/map";

const webToolContent = {
  name: "แผนที่อาชีพ",
  domain: "a-chieve.org",
  image: "https://service.a-chieve.org/uploads/Onboarding_screen_09_41f86a4f99.png",
  description: [
    "เป็นการประมวลผลจากข้อมูลที่ใส่ในตุ๊กตาขนมปัง ซึ่งแต่ละคนอาจได้ผลที่แตกต่างกันไป",
    "จะเปลี่ยนแปลงตามการอัปเดตข้อมูลในตุ๊กตาขนมปัง",
  ],
  ctaLabel: "ดูรายชื่ออาชีพของฉัน",
};

const assetDownloadsByIcon = {
  description: {
    label: "ดาวน์โหลด PDF",
    filename: "ไฟล์เนื้อหาแผนการสอน.pdf",
    type: "PDF",
    mime: "application/pdf",
  },
  collections_bookmark: {
    label: "ดาวน์โหลด PDF",
    filename: "ไฟล์ใบความรู้สำหรับครู.pdf",
    type: "PDF",
    mime: "application/pdf",
  },
  slideshow: {
    label: "ดาวน์โหลด PPTX",
    filename: "ไฟล์สไลด์นำเสนอ.pptx",
    type: "PPTX",
    url: "/prototype/assets/preview/Modern_Education_Mockup_A4.pptx",
  },
  picture_as_pdf: {
    label: "ดาวน์โหลด PDF",
    filename: "ไฟล์ใบงานนักเรียน.pdf",
    type: "PDF",
    mime: "application/pdf",
  },
  link: {
    label: "เปิดลิงก์ภายนอก",
    filename: "เครื่องมือบนเว็บ.url",
    type: "URL",
    mime: "text/plain",
    content: `[InternetShortcut]\nURL=${webToolUrl}\n`,
  },
};

const previewContentByIcon = {
  description: {
    type: "Lesson Plan",
    fileType: "PDF",
    heading: "ลำดับกิจกรรมและเป้าหมายของคาบเรียน",
    note: "ใช้ตรวจลำดับกิจกรรม เวลาที่ใช้ และคำถามชวนคิดก่อนส่งต่อให้นักเรียน",
    sections: [
      ["เป้าหมายการเรียนรู้", "นักเรียนสำรวจความสนใจ ความฝัน และความต้องการของตนเอง แล้วเชื่อมโยงกับทักษะที่อยากพัฒนาในอนาคต"],
      ["กิจกรรมหลัก", "เริ่มจากคำถามสะท้อนตัวเอง ต่อด้วยกิจกรรมกลุ่มย่อย และปิดด้วยการบันทึกเป้าหมายรายบุคคล"],
      ["หลักฐานการเรียนรู้", "ใบงานสะท้อนคิดและสรุปเป้าหมายส่วนตัวของนักเรียนแต่ละคน"],
    ],
  },
  collections_bookmark: {
    type: "Teacher Material",
    fileType: "PDF",
    heading: "ข้อมูลเตรียมสอนและคำถามชวนคุย",
    note: "เหมาะสำหรับเตรียมบริบทและคำอธิบายเพิ่มเติมก่อนเริ่มคาบเรียน",
    sections: [
      ["แนวคิดสำคัญ", "อธิบายกรอบการตั้งเป้าหมายและวิธีช่วยนักเรียนแยกความฝันออกจากแรงกดดันรอบตัว"],
      ["คำถามเปิดบทสนทนา", "ชุดคำถามสำหรับชวนให้นักเรียนเล่าความสนใจโดยไม่รู้สึกว่าถูกประเมิน"],
      ["ข้อควรสังเกต", "สัญญาณที่ครูอาจใช้ติดตามนักเรียนที่ยังไม่มั่นใจหรือยังตอบคำถามสะท้อนตัวเองไม่ได้"],
    ],
  },
  slideshow: {
    type: "Presentation",
    fileType: "PPT",
    heading: "โครงสไลด์สำหรับเปิดในห้องเรียน",
    note: "สไลด์ถูกจัดเป็นช่วงกิจกรรม สามารถใช้เปิดนำชั้นเรียนได้ทันที",
    sections: [
      ["Slide 1-3", "เปิดคาบและตั้งโจทย์ให้นักเรียนคิดถึงเป้าหมายระยะสั้น"],
      ["Slide 4-8", "กิจกรรมจับคู่แลกเปลี่ยนและรวบรวม keyword จากนักเรียน"],
      ["Slide 9-12", "สรุปบทเรียนและมอบหมายให้นักเรียนบันทึกเป้าหมายของตนเอง"],
    ],
  },
  picture_as_pdf: {
    type: "Worksheet",
    fileType: "PDF",
    heading: "ใบงานที่นักเรียนต้องทำ",
    note: "ใบงานพร้อมส่งให้นักเรียนและใช้เป็นหลักฐานการเปิดดูในระบบติดตาม",
    sections: [
      ["ส่วนที่ 1", "ให้นักเรียนเขียนสิ่งที่สนใจและเหตุผลที่สนใจ"],
      ["ส่วนที่ 2", "เลือกทักษะที่อยากพัฒนาและระบุวิธีเริ่มต้นในสัปดาห์นี้"],
      ["ส่วนที่ 3", "สรุปเป้าหมายหนึ่งข้อที่อยากทดลองทำจริง"],
    ],
  },
  link: {
    type: "Web Tool",
    fileType: "URL",
    heading: "แบบสำรวจและแหล่งข้อมูลสำหรับนักเรียน",
    note: "เครื่องมือเว็บช่วยให้นักเรียนสำรวจข้อมูลเพิ่มเติมหลังจบกิจกรรมในชั้นเรียน",
    sections: [
      ["แบบสำรวจออนไลน์", "นักเรียนตอบคำถามเพื่อรวบรวมความสนใจและทักษะที่อยากพัฒนา"],
      ["แหล่งข้อมูลต่อยอด", "รวมเนื้อหาแนะนำเรื่องเส้นทางอาชีพและทักษะพื้นฐาน"],
      ["การใช้งานในห้องเรียน", "ครูสามารถเปิด link ระหว่างคาบหรือแนบไปกับการบ้านได้"],
    ],
  },
};

const pptxPreviewPages = [
  {
    title: "แผนการสอนนักเรียน",
    subtitle: "สายอาชีพแห่งอนาคต",
    image: "/prototype/assets/preview/image1.png",
    footer: "Modern Education Mockup • เทคไทบ้าน",
  },
  {
    title: "จุดประสงค์การเรียนรู้",
    image: "/prototype/assets/preview/image2.png",
    bullets: [
      "เข้าใจทักษะสายอาชีพยุคดิจิทัล",
      "เรียนรู้การออกแบบสื่อออนไลน์",
      "ฝึกการใช้ AI และเทคโนโลยีสร้างสรรค์",
      "สร้างผลงาน Portfolio เบื้องต้น",
    ],
  },
  {
    title: "ตารางแผนการสอน",
    image: "/prototype/assets/preview/image3.png",
    table: [
      ["1", "รู้จักอาชีพดิจิทัล", "วิเคราะห์สายอาชีพ"],
      ["2", "ถ่ายภาพสินค้า", "Workshop ภาพถ่าย"],
      ["3", "ออกแบบคอนเทนต์", "สร้างโพสต์โซเชียล"],
      ["4", "AI เพื่อการทำงาน", "ทดลองใช้ AI Tool"],
      ["5", "Portfolio", "นำเสนอผลงาน"],
    ],
  },
  {
    title: "ทักษะที่นักเรียนจะได้รับ",
    image: "/prototype/assets/preview/image1.png",
    bullets: ["Creative Thinking", "Digital Communication", "AI Literacy", "Content Creation", "Team Collaboration"],
  },
  {
    title: "พื้นที่เรียนรู้แห่งอนาคต",
    image: "/prototype/assets/preview/image2.png",
    paragraph: "พื้นที่เรียนรู้ที่เชื่อมโยงชุมชน การศึกษา และเทคโนโลยี ผ่านแนวคิดชุมชนปรัชญาประดิษฐ์ เพื่อเปิดโอกาสให้เด็กและเยาวชนเข้าถึงทักษะแห่งอนาคตอย่างเท่าเทียม",
  },
];

const rooms = [
  { id: "5-1", label: "ม.5/1", students: 32, teacher: "ครูประจำชั้น", color: "blue", selected: true },
  { id: "5-2", label: "ม.5/2", students: 31, teacher: "ครูประจำชั้น", color: "green", selected: true },
  { id: "5-3", label: "ม.5/3", students: 30, teacher: "ครูประจำชั้น", color: "violet", selected: false },
  { id: "5-4", label: "ม.5/4", students: 33, teacher: "ครูประจำชั้น", color: "orange", selected: false },
];

const unopenedStudentsByRoom = [
  {
    room: "ม.5/1",
    opened: "28/32",
    students: [
      ["ธนภัทร วงศ์สว่าง", "เลขที่ 4"],
      ["พิมพ์ชนก สายใจ", "เลขที่ 11"],
      ["ณัฐวุฒิ แก้วมณี", "เลขที่ 18"],
      ["อริสรา ชูสุข", "เลขที่ 27"],
    ],
  },
  {
    room: "ม.5/2",
    opened: "28/31",
    students: [
      ["กิตติพงษ์ นาคดี", "เลขที่ 6"],
      ["ชลธิชา พันธ์มี", "เลขที่ 14"],
      ["ภัทรพล อินทรา", "เลขที่ 22"],
    ],
  },
];

const coverClasses = {
  forest: "bg-[linear-gradient(160deg,#a3d68e_0_28%,#f9d269_28%_34%,#5aa85b_34%_62%,#8c6239_62%_100%)]",
  paper: "bg-[linear-gradient(160deg,#f8f2e8_0_35%,#d93b5f_35%_42%,#ffffff_42%_64%,#168cc7_64%_100%)]",
  blue: "bg-[linear-gradient(160deg,#0d4d83_0_20%,#e5c36a_20%_33%,#6b3d98_33%_62%,#0a172b_62%_100%)]",
  mint: "bg-[linear-gradient(160deg,#e4fbef_0_38%,#82c8ba_38%_60%,#2e8c78_60%_100%)]",
  fire: "bg-[linear-gradient(160deg,#f79437_0_30%,#f4d06f_30%_42%,#7841a8_42%_70%,#292b4a_70%_100%)]",
};

const roomColorClasses = {
  blue: "bg-slate-100 text-achieve-deep",
  green: "bg-lime-100 text-lime-600",
  violet: "bg-violet-100 text-violet-500",
  orange: "bg-orange-100 text-orange-500",
};

let activeLessonId = lessons[0].id;

const lessonList = document.querySelector("#lessonList");
const assignmentDrawer = document.querySelector("#assignmentDrawer");
const successDrawer = document.querySelector("#successDrawer");
const unopenedStudentsDrawer = document.querySelector("#unopenedStudentsDrawer");
const overlay = document.querySelector("#overlay");
const helpModal = document.querySelector("#helpModal");
const previewModal = document.querySelector("#previewModal");
const previewCover = document.querySelector("#previewCover");
const previewMeta = document.querySelector("#previewMeta");
const previewTitle = document.querySelector("#previewTitle");
const previewTabs = document.querySelector("#previewTabs");
const previewTabEyebrow = document.querySelector("#previewTabEyebrow");
const previewTabTitle = document.querySelector("#previewTabTitle");
const downloadActiveAsset = document.querySelector("#downloadActiveAsset");
const downloadActiveAssetLabel = document.querySelector("#downloadActiveAssetLabel");
const previewDocumentType = document.querySelector("#previewDocumentType");
const previewDocumentTitle = document.querySelector("#previewDocumentTitle");
const previewDocumentIcon = document.querySelector("#previewDocumentIcon");
const previewDocumentBody = document.querySelector("#previewDocumentBody");
const previewFileType = document.querySelector("#previewFileType");
const previewFileName = document.querySelector("#previewFileName");
const previewFileNameLabel = document.querySelector("#previewFileNameLabel");
const previewFileMetaLabel = document.querySelector("#previewFileMetaLabel");
const previewFileMetaValue = document.querySelector("#previewFileMetaValue");
const previewTeacherNote = document.querySelector("#previewTeacherNote");
const previewTeacherActions = document.querySelector("#previewTeacherActions");
const previewSidebarSections = document.querySelector("#previewSidebarSections");
const webToolActionPanel = document.querySelector("#webToolActionPanel");
const webToolUrlInput = document.querySelector("#webToolUrl");
const toastMessage = document.querySelector("#toastMessage");
const roomPicker = document.querySelector("#roomPicker");
const selectedCount = document.querySelector("#selectedCount");
const selectedRoomTotal = document.querySelector("#selectedRoomTotal");
const planPage = document.querySelector("#planPage");
const dashboardPage = document.querySelector("#dashboardPage");
const homeworkReportPage = document.querySelector("#homeworkReportPage");
const planSubheader = document.querySelector("#planSubheader");
const dashboardNav = document.querySelector("#dashboardNav");
const assignmentForm = document.querySelector("#assignmentForm");
const assignmentLoading = document.querySelector("#assignmentLoading");
const unopenedStudentsList = document.querySelector("#unopenedStudentsList");
const unopenedStudentsContent = document.querySelector("#unopenedStudentsContent");
const reminderLoading = document.querySelector("#reminderLoading");
const reminderSuccess = document.querySelector("#reminderSuccess");
const remindUnopenedStudents = document.querySelector("#remindUnopenedStudents");
const appShell = document.querySelector("#appShell");
const sidebar = document.querySelector("#sidebar");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarToggleIcon = document.querySelector("#sidebarToggleIcon");
const sidebarToggleTooltip = document.querySelector("#sidebarToggleTooltip");
const sidebarRestore = document.querySelector("#sidebarRestore");
const sidebarHeader = document.querySelector("#sidebarHeader");
const sidebarBrand = document.querySelector("#sidebarBrand");
const sidebarPrimaryNav = document.querySelector("#sidebarPrimaryNav");
const helpModalButton = document.querySelector("#helpModalButton");
let loadingTimer = undefined;
let reminderTimer = undefined;
let toastTimer = undefined;
let isSidebarCollapsed = false;
let activePreviewAssetIndex = 0;

function setSidebarCollapsed(isCollapsed) {
  isSidebarCollapsed = isCollapsed;
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  sidebar.classList.toggle("hidden", isCollapsed && !isDesktop);
  appShell.style.gridTemplateColumns = isCollapsed && isDesktop ? "56px minmax(0, 1fr)" : "";
  sidebar.style.paddingLeft = isCollapsed && isDesktop ? "10px" : "";
  sidebar.style.paddingRight = isCollapsed && isDesktop ? "10px" : "";
  sidebarHeader.classList.toggle("justify-center", isCollapsed && isDesktop);
  sidebarHeader.classList.toggle("justify-between", !(isCollapsed && isDesktop));
  sidebarBrand.classList.toggle("hidden", isCollapsed && isDesktop);
  sidebarPrimaryNav.classList.toggle("hidden", isCollapsed && isDesktop);
  dashboardNav.classList.toggle("hidden", isCollapsed && isDesktop);
  helpModalButton.classList.toggle("lg:hidden", isCollapsed && isDesktop);
  sidebarRestore.classList.toggle("hidden", !isCollapsed || isDesktop);
  sidebarRestore.classList.toggle("grid", isCollapsed && !isDesktop);

  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
  sidebarToggle.setAttribute("aria-label", isCollapsed ? "แสดงแถบเมนูด้านซ้าย" : "ซ่อนแถบเมนูด้านซ้าย");
  sidebarToggleIcon.textContent = isCollapsed ? "left_panel_open" : "left_panel_close";
  sidebarToggleTooltip.textContent = isCollapsed ? "แสดงแถบเมนู" : "ซ่อนแถบเมนู";
}

function renderLessons() {
  lessonList.innerHTML = "";

  lessons.forEach((lesson) => {
    const card = document.createElement("article");
    card.className = "rounded-lg border border-achieve-line bg-white p-4 pb-0 shadow-card";
    card.dataset.lessonId = lesson.id;

    const statusHtml = lesson.sent
      ? `
        <span class="h-3.5 w-3.5 rounded-full border-[3px] border-achieve-blue bg-achieve-blue shadow-[inset_0_0_0_3px_white]"></span>
        <span class="text-xs font-normal text-achieve-deep">ส่งแล้ว</span>
        <span class="text-xs font-normal text-slate-500">ส่งเมื่อ 12 พ.ค. 2568 เวลา 10:32 น.</span>
        <span class="inline-flex min-h-6 items-center rounded-md bg-slate-100 px-2.5 text-xs font-normal text-slate-600">${lesson.sentRooms} ห้องเรียน</span>
        <span class="inline-flex min-h-6 items-center rounded-md bg-slate-100 px-2.5 text-xs font-normal text-slate-600">${lesson.sentStudents} คน</span>
      `
      : `
        <span class="h-3.5 w-3.5 rounded-full border-[3px] border-slate-400"></span>
        <span class="text-xs font-normal text-slate-500">ยังไม่ได้ส่ง</span>
        <span class="text-xs font-normal text-slate-500">แก้ไขล่าสุด 12 พ.ค. 2568 เวลา 10:30 น.</span>
      `;

    card.innerHTML = `
      <div class="grid gap-4 lg:grid-cols-[56px_minmax(0,1fr)_auto]">
        <div class="h-20 w-14 rounded-md ${coverClasses[lesson.cover]}"></div>
        <div>
          <span class="mb-1 block text-xs font-semibold text-slate-500">${lesson.order}</span>
          <h2 class="mb-1 font-title text-[17px] font-semibold leading-snug text-slate-900">${lesson.title}</h2>
          <p class="text-xs font-medium text-slate-500">${lesson.week}</p>
        </div>
        <div class="flex flex-col gap-2 sm:flex-row lg:items-start">
          <button data-action="preview-lesson" class="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md border border-achieve-line bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50" type="button"><span class="material-symbols-rounded text-[18px] text-achieve-deep">visibility</span> ดูตัวอย่าง</button>
          <button data-action="send-assignment" class="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md bg-achieve-blue px-4 text-xs font-semibold text-white shadow-soft hover:bg-achieve-deep" type="button"><span class="material-symbols-rounded text-[18px]">send</span> ส่งการบ้านให้นักเรียน</button>
        </div>
      </div>
      <div class="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-5">
        ${assets.map(([icon, title, detail]) => `
          <div class="grid min-h-14 grid-cols-[28px_minmax(0,1fr)] items-center gap-2 rounded-md bg-slate-50 p-2.5 text-slate-700">
            <span class="material-symbols-rounded grid h-7 w-7 place-items-center text-[22px] text-slate-400">${icon}</span>
            <span><strong class="block break-words text-xs font-semibold leading-5">${title}</strong><span class="block text-[11px] leading-4 text-slate-500">${detail}</span></span>
          </div>
        `).join("")}
      </div>
      <footer class="mt-4 flex min-h-12 flex-wrap items-center gap-3 border-t border-achieve-line text-xs font-normal">${statusHtml}</footer>
    `;

    card.querySelector('[data-action="send-assignment"]').addEventListener("click", () => {
      activeLessonId = lesson.id;
      openAssignmentDrawer();
    });

    card.querySelector('[data-action="preview-lesson"]').addEventListener("click", () => {
      openPreviewModal(lesson.id);
    });

    lessonList.append(card);
  });
}

function getActiveLesson() {
  return lessons.find((lesson) => lesson.id === activeLessonId) || lessons[0];
}

function openPreviewModal(lessonId) {
  activeLessonId = lessonId;
  activePreviewAssetIndex = 0;
  closeDrawer(assignmentDrawer);
  closeDrawer(successDrawer);
  closeDrawer(unopenedStudentsDrawer);
  renderPreviewModal();
  previewModal.classList.remove("hidden", "modal-exit");
  previewModal.classList.add("modal-enter");
  previewModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");
}

function closePreviewModal() {
  previewModal.classList.remove("modal-enter");
  previewModal.classList.add("modal-exit");
  previewModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("overflow-hidden");
  previewModal.addEventListener("animationend", () => {
    previewModal.classList.add("hidden");
    previewModal.classList.remove("modal-exit");
  }, { once: true });
}

function openHelpModal() {
  closeDrawer(assignmentDrawer);
  closeDrawer(successDrawer);
  closeDrawer(unopenedStudentsDrawer);
  closePreviewModal();
  helpModal.classList.remove("hidden");
  helpModal.classList.add("grid");
  helpModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");
}

function closeHelpModal() {
  helpModal.classList.add("hidden");
  helpModal.classList.remove("grid");
  helpModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("overflow-hidden");
}

function renderPreviewTabs() {
  previewTabs.innerHTML = "";

  assets.forEach(([icon, title, detail], index) => {
    const isActive = index === activePreviewAssetIndex;
    const button = document.createElement("button");
    button.className = isActive
      ? "inline-flex min-h-11 min-w-max items-center gap-2 rounded-md bg-achieve-soft px-3 text-left text-sm font-semibold text-achieve-deep lg:w-full"
      : "inline-flex min-h-11 min-w-max items-center gap-2 rounded-md px-3 text-left text-sm font-semibold text-slate-600 hover:bg-slate-50 lg:w-full";
    button.type = "button";
    button.role = "tab";
    button.setAttribute("aria-selected", String(isActive));
    button.innerHTML = `
      <span class="material-symbols-rounded grid h-7 w-7 shrink-0 place-items-center rounded-full ${isActive ? "bg-white text-achieve-deep" : "bg-slate-50 text-slate-400"} text-[20px]">${icon}</span>
      <span class="min-w-0">
        <span class="block truncate">${title}</span>
        <span class="hidden text-xs font-normal leading-4 text-slate-500 lg:block">${detail}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      activePreviewAssetIndex = index;
      renderPreviewModal();
    });
    previewTabs.append(button);
  });
}

function renderPreviewModal() {
  const lesson = getActiveLesson();
  const [icon, title, detail] = assets[activePreviewAssetIndex];
  const content = previewContentByIcon[icon] || previewContentByIcon.description;
  const activeDownload = assetDownloadsByIcon[icon] || assetDownloadsByIcon.description;

  previewCover.className = `h-14 w-10 rounded-md ${coverClasses[lesson.cover]}`;
  previewMeta.textContent = `${lesson.order} • ${lesson.week.replace("สำหรับสอนใน: ", "")}`;
  previewTitle.textContent = lesson.title;
  previewTabEyebrow.textContent = detail === "-" ? "ไฟล์ประกอบแผนการสอน" : detail;
  previewTabTitle.textContent = title;
  downloadActiveAssetLabel.textContent = activeDownload.label;
  downloadActiveAsset.classList.toggle("hidden", icon === "link");
  webToolActionPanel.classList.toggle("hidden", icon !== "link");
  previewDocumentType.textContent = "Preview file";
  previewDocumentTitle.textContent = "Modern_Education_Mockup_A4.pptx";
  previewDocumentIcon.textContent = "slideshow";
  previewFileType.textContent = activeDownload.type;
  previewTeacherNote.textContent = content.note;

  if (icon === "link") {
    previewFileNameLabel.textContent = "ชื่อเครื่องมือ";
    previewFileName.textContent = webToolContent.name;
    previewFileMetaLabel.textContent = "โดเมน";
    previewFileMetaValue.textContent = webToolContent.domain;
    previewTeacherActions.innerHTML = `
      <li class="flex gap-2"><span class="material-symbols-rounded text-[17px] text-achieve-deep">content_copy</span>คัดลอก link เพื่อแชร์นักเรียน</li>
      <li class="flex gap-2"><span class="material-symbols-rounded text-[17px] text-achieve-deep">open_in_new</span>เปิดทดลองใช้งานก่อนสอน</li>
      <li class="flex gap-2"><span class="material-symbols-rounded text-[17px] text-achieve-deep">send</span>ส่งเป็นการบ้านให้ห้องเรียนที่เลือก</li>
    `;
    previewDocumentBody.innerHTML = `
      <div class="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
        <img src="${webToolContent.image}" class="w-full object-cover" alt="" loading="lazy" />
      </div>
      <div>
        <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">📋 รายละเอียด</p>
        <ul class="space-y-3">
          ${webToolContent.description.map(d => `
            <li class="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400"></span>
              ${d}
            </li>
          `).join("")}
        </ul>
      </div>
      <a href="${webToolUrl}" target="_blank" rel="noopener"
         class="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3.5 font-title font-semibold text-white shadow-sm transition-all hover:from-sky-500 hover:to-blue-600">
        <span class="material-symbols-rounded text-[20px]">open_in_new</span>
        ${webToolContent.ctaLabel}
      </a>
    `;
  } else {
    previewFileNameLabel.textContent = "ชื่อไฟล์";
    previewFileName.textContent = "Modern_Education_Mockup_A4";
    previewFileMetaLabel.textContent = "จำนวนหน้า";
    previewFileMetaValue.textContent = "5 หน้า";
    previewTeacherActions.innerHTML = `
      <li class="flex gap-2"><span class="material-symbols-rounded text-[17px] text-achieve-deep">visibility</span>ตรวจ preview ให้ครบทุกหน้า</li>
      <li class="flex gap-2"><span class="material-symbols-rounded text-[17px] text-achieve-deep">download</span>ดาวน์โหลดไฟล์ไว้ใช้สอน</li>
      <li class="flex gap-2"><span class="material-symbols-rounded text-[17px] text-achieve-deep">send</span>ส่งเป็นการบ้านให้ห้องเรียนที่เลือก</li>
    `;
    previewDocumentBody.innerHTML = `
      <div class="rounded-lg bg-slate-50 p-3">
        <div class="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs font-normal text-slate-500">
          <span class="inline-flex items-center gap-1.5"><span class="material-symbols-rounded text-[17px] text-achieve-deep">article</span>A4 preview • 5 หน้า</span>
          <span class="inline-flex items-center gap-1.5"><span class="material-symbols-rounded text-[17px] text-achieve-deep">source</span>Modern_Education_Mockup_A4.pptx</span>
        </div>
        <div class="grid gap-5">
          ${pptxPreviewPages.map((page, index) => renderPptxPreviewPage(page, index)).join("")}
        </div>
      </div>
    `;
  }
  previewSidebarSections.innerHTML = content.sections.map(([sectionTitle, sectionDetail]) => `
    <article class="py-3 first:pt-0 last:pb-0">
      <h5 class="mb-1 font-title text-sm font-semibold text-slate-900">${sectionTitle}</h5>
      <p class="text-xs font-normal leading-5 text-slate-600">${sectionDetail}</p>
    </article>
  `).join("");

  renderPreviewTabs();
}

function renderPptxPreviewPage(page, index) {
  const imageHtml = page.image
    ? `<img class="mb-4 h-32 w-full rounded-md object-cover" src="${page.image}" alt="" />`
    : "";
  const bulletsHtml = page.bullets
    ? `
      <ul class="grid gap-2 text-sm font-normal leading-6 text-slate-600">
        ${page.bullets.map((bullet) => `
          <li class="grid grid-cols-[20px_minmax(0,1fr)] gap-2">
            <span class="material-symbols-rounded pt-0.5 text-[17px] text-achieve-deep">check_circle</span>
            <span>${bullet}</span>
          </li>
        `).join("")}
      </ul>
    `
    : "";
  const tableHtml = page.table
    ? `
      <div class="overflow-hidden rounded-md border border-achieve-line text-xs">
        <div class="grid grid-cols-[52px_1fr_1fr] bg-slate-50 px-3 py-2 font-semibold text-slate-500">
          <span>สัปดาห์</span><span>หัวข้อ</span><span>กิจกรรม</span>
        </div>
        ${page.table.map((row) => `
          <div class="grid grid-cols-[52px_1fr_1fr] border-t border-achieve-line px-3 py-2 text-slate-700">
            <strong class="text-achieve-deep">${row[0]}</strong><span>${row[1]}</span><span>${row[2]}</span>
          </div>
        `).join("")}
      </div>
    `
    : "";
  const paragraphHtml = page.paragraph ? `<p class="text-sm font-normal leading-7 text-slate-600">${page.paragraph}</p>` : "";
  const footerHtml = page.footer ? `<p class="mt-auto border-t border-achieve-line pt-3 text-xs font-normal text-slate-500">${page.footer}</p>` : "";

  return `
    <section class="mx-auto grid min-h-[560px] w-full max-w-[420px] content-start rounded-md bg-white p-6 shadow-[0_12px_34px_rgba(21,44,77,0.13)] ring-1 ring-slate-200">
      <div class="mb-4 flex items-center justify-between gap-3">
        <span class="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">หน้า ${index + 1}</span>
        <span class="h-2 w-2 rounded-full bg-achieve-blue"></span>
      </div>
      ${imageHtml}
      <h5 class="mb-2 font-title text-xl font-semibold leading-tight text-slate-900">${page.title}</h5>
      ${page.subtitle ? `<p class="mb-5 font-title text-lg font-semibold leading-tight text-achieve-deep">${page.subtitle}</p>` : ""}
      ${bulletsHtml}
      ${tableHtml}
      ${paragraphHtml}
      ${footerHtml}
    </section>
  `;
}

function downloadFile({ url, filename, mime, content }) {
  const link = document.createElement("a");
  let objectUrl;

  if (url) {
    link.href = url;
  } else {
    const blob = new Blob([content || buildMockDocument(filename)], { type: mime || "text/plain" });
    objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
  }

  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();

  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
  }
}

function buildMockDocument(filename) {
  return [
    "e-achieve to school",
    filename,
    "",
    "Prototype document for lesson preview.",
    "This file represents the selected teaching material in the prototype.",
  ].join("\n");
}

function showToast(message) {
  toastMessage.textContent = message;
  toastMessage.classList.remove("hidden");

  if (toastTimer) {
    window.clearTimeout(toastTimer);
  }

  toastTimer = window.setTimeout(() => {
    toastMessage.classList.add("hidden");
    toastTimer = undefined;
  }, 1800);
}

async function copyWebToolUrl() {
  try {
    await navigator.clipboard.writeText(webToolUrl);
  } catch (error) {
    webToolUrlInput.select();
    document.execCommand("copy");
  }
  showToast("คัดลอกลิงก์แล้ว");
}

function openWebToolUrl() {
  window.open(webToolUrl, "_blank", "noopener,noreferrer");
}

function renderRoomPicker() {
  roomPicker.innerHTML = "";

  rooms.forEach((room) => {
    const row = document.createElement("label");
    row.className = "grid min-h-12 cursor-pointer grid-cols-[24px_34px_1fr] items-center gap-2.5 border-t border-achieve-line px-3 py-2.5 first:border-t-0 sm:grid-cols-[24px_34px_1fr_auto_auto]";
    row.innerHTML = `
      <input class="h-4 w-4 accent-achieve-blue" type="checkbox" ${room.selected ? "checked" : ""} data-room-id="${room.id}" />
      <span class="material-symbols-rounded grid h-7 w-7 place-items-center rounded-full text-[18px] font-semibold ${roomColorClasses[room.color]}">groups</span>
      <strong class="text-sm">${room.label}</strong>
      <span class="text-xs font-normal text-slate-500">นักเรียน ${room.students} คน</span>
      <span class="text-xs font-normal text-slate-500">${room.teacher}</span>
    `;
    roomPicker.append(row);
  });

  roomPicker.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", (event) => {
      const room = rooms.find((item) => item.id === event.target.dataset.roomId);
      room.selected = event.target.checked;
      updateSelectedCount();
    });
  });

  updateSelectedCount();
}

function getSelectedRooms() {
  return rooms.filter((room) => room.selected);
}

function updateSelectedCount() {
  const count = getSelectedRooms().length;
  selectedCount.textContent = `เลือกแล้ว ${count} ชั้นเรียน`;
  selectedRoomTotal.textContent = count;
}

function openAssignmentDrawer() {
  setAssignmentLoading(false);
  closeDrawer(successDrawer);
  openDrawer(assignmentDrawer);
}

function openSuccessDrawer() {
  closeDrawer(assignmentDrawer);
  renderSuccessSummary();
  openDrawer(successDrawer);
}

function openUnopenedStudentsDrawer() {
  closeDrawer(assignmentDrawer);
  closeDrawer(successDrawer);
  setReminderState("list");
  renderUnopenedStudents();
  openDrawer(unopenedStudentsDrawer);
}

function openDrawer(drawer) {
  overlay.classList.remove("hidden");
  drawer.classList.remove("translate-x-full");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer(drawer) {
  if (drawer === assignmentDrawer) {
    clearLoadingTimer();
    setAssignmentLoading(false);
  }
  if (drawer === unopenedStudentsDrawer) {
    clearReminderTimer();
    setReminderState("list");
  }
  drawer.classList.add("translate-x-full");
  drawer.setAttribute("aria-hidden", "true");
  if (
    assignmentDrawer.classList.contains("translate-x-full") &&
    successDrawer.classList.contains("translate-x-full") &&
    unopenedStudentsDrawer.classList.contains("translate-x-full")
  ) {
    overlay.classList.add("hidden");
  }
}

function clearLoadingTimer() {
  if (loadingTimer) {
    window.clearTimeout(loadingTimer);
    loadingTimer = undefined;
  }
}

function clearReminderTimer() {
  if (reminderTimer) {
    window.clearTimeout(reminderTimer);
    reminderTimer = undefined;
  }
}

function setAssignmentLoading(isLoading) {
  assignmentForm.classList.toggle("hidden", isLoading);
  assignmentForm.classList.toggle("grid", !isLoading);
  assignmentLoading.classList.toggle("hidden", !isLoading);
  assignmentLoading.classList.toggle("grid", isLoading);
}

function setReminderState(state) {
  const isList = state === "list";
  const isLoading = state === "loading";
  const isSuccess = state === "success";

  unopenedStudentsContent.classList.toggle("hidden", !isList);
  unopenedStudentsContent.classList.toggle("grid", isList);
  reminderLoading.classList.toggle("hidden", !isLoading);
  reminderLoading.classList.toggle("grid", isLoading);
  reminderSuccess.classList.toggle("hidden", !isSuccess);
  reminderSuccess.classList.toggle("grid", isSuccess);
  remindUnopenedStudents.classList.toggle("hidden", isSuccess);
  remindUnopenedStudents.disabled = isLoading;
  remindUnopenedStudents.classList.toggle("opacity-70", isLoading);
  remindUnopenedStudents.classList.toggle("cursor-wait", isLoading);
}

function sendReminderToUnopenedStudents() {
  setReminderState("loading");
  clearReminderTimer();
  reminderTimer = window.setTimeout(() => {
    reminderTimer = undefined;
    setReminderState("success");
  }, 1200);
}

function renderSuccessSummary() {
  const container = document.querySelector("#roomsSummary");
  const selected = getSelectedRooms();
  const totalStudents = selected.reduce((total, room) => total + room.students, 0);
  container.innerHTML = "";

  selected.forEach((room) => {
    const row = document.createElement("div");
    row.className = "grid min-h-12 grid-cols-[24px_34px_1fr_auto] items-center gap-2.5 border-t border-achieve-line px-3 py-2.5 first:border-t-0";
    row.innerHTML = `
      <input class="h-4 w-4 accent-achieve-blue" type="checkbox" checked disabled />
      <span class="material-symbols-rounded grid h-7 w-7 place-items-center rounded-full text-[18px] font-semibold ${roomColorClasses[room.color]}">groups</span>
      <strong class="text-sm font-semibold">${room.label}</strong>
      <span class="text-xs font-normal text-slate-500">นักเรียน ${room.students} คน</span>
    `;
    container.append(row);
  });

  const totalRow = document.createElement("div");
  totalRow.className = "grid min-h-12 grid-cols-[1fr_auto] items-center gap-2.5 border-t border-achieve-line px-3 py-2.5";
  totalRow.innerHTML = `<strong class="text-sm font-semibold">รวมทั้งหมด</strong><strong class="text-sm font-semibold text-achieve-deep">${totalStudents} คน</strong>`;
  container.append(totalRow);
}

function renderUnopenedStudents() {
  unopenedStudentsList.innerHTML = "";

  unopenedStudentsByRoom.forEach((group) => {
    const section = document.createElement("section");
    section.className = "rounded-lg border border-achieve-line bg-white";
    section.innerHTML = `
      <header class="flex items-center justify-between gap-3 border-b border-achieve-line px-3 py-2.5">
        <div>
          <h3 class="font-title text-sm font-semibold text-slate-900">${group.room}</h3>
          <span class="text-xs font-normal text-slate-500">เปิดดูแล้ว ${group.opened} คน</span>
        </div>
        <span class="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700">ยังไม่เปิดดู ${group.students.length} คน</span>
      </header>
      <div class="divide-y divide-achieve-line">
        ${group.students.map(([name, number]) => `
          <div class="flex items-center gap-2.5 px-3 py-2.5">
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">${name.slice(0, 1)}</span>
            <div class="min-w-0 flex-1">
              <strong class="block truncate text-sm font-semibold text-slate-800">${name}</strong>
              <span class="text-xs font-normal text-slate-500">${number} • ยังไม่เปิดดู</span>
            </div>
            <span class="material-symbols-rounded text-[18px] text-slate-400">visibility_off</span>
          </div>
        `).join("")}
      </div>
    `;
    unopenedStudentsList.append(section);
  });
}

function submitAssignment(event) {
  event.preventDefault();
  const selected = getSelectedRooms();
  if (!selected.length) {
    selectedCount.textContent = "กรุณาเลือกอย่างน้อย 1 ชั้นเรียน";
    return;
  }

  const activeLesson = lessons.find((lesson) => lesson.id === activeLessonId);
  activeLesson.sent = true;
  activeLesson.sentRooms = selected.length;
  activeLesson.sentStudents = selected.reduce((total, room) => total + room.students, 0);
  renderLessons();
  renderDashboardTables();
  setAssignmentLoading(true);
  clearLoadingTimer();
  loadingTimer = window.setTimeout(() => {
    loadingTimer = undefined;
    openSuccessDrawer();
  }, 1400);
}

function showDashboard() {
  closePreviewModal();
  closeDrawer(successDrawer);
  closeDrawer(assignmentDrawer);
  closeDrawer(unopenedStudentsDrawer);
  planPage.classList.add("hidden");
  planPage.classList.remove("block");
  homeworkReportPage.classList.add("hidden");
  dashboardPage.classList.remove("hidden");
  planSubheader.hidden = true;
  dashboardNav.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHomeworkReport() {
  closePreviewModal();
  closeDrawer(assignmentDrawer);
  closeDrawer(successDrawer);
  closeDrawer(unopenedStudentsDrawer);
  planPage.classList.add("hidden");
  planPage.classList.remove("block");
  dashboardPage.classList.add("hidden");
  homeworkReportPage.classList.remove("hidden");
  planSubheader.hidden = true;
  dashboardNav.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showLessonPlans() {
  closePreviewModal();
  closeDrawer(assignmentDrawer);
  closeDrawer(successDrawer);
  closeDrawer(unopenedStudentsDrawer);
  dashboardPage.classList.add("hidden");
  homeworkReportPage.classList.add("hidden");
  planPage.classList.remove("hidden");
  planPage.classList.add("block");
  planSubheader.hidden = false;
  dashboardNav.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleGradeGroup(button) {
  const target = document.querySelector(`#${button.dataset.gradeToggle}`);
  const icon = button.querySelector("[data-grade-icon]");
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", String(!isExpanded));
  target.classList.toggle("hidden", isExpanded);
  target.classList.toggle("grid", !isExpanded);
  if (icon) {
    icon.textContent = isExpanded ? "chevron_right" : "expand_more";
  }
}

function renderDashboardTables() {
  const homeworkTable = document.querySelector("#homeworkTable");
  const homeworkCards = document.querySelector("#homeworkCards");
  homeworkTable.innerHTML = `
    <div class="grid min-w-[820px] grid-cols-[minmax(250px,1.5fr)_88px_92px_92px_84px_64px_20px] items-center gap-3 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500">
      <span>การบ้าน</span><span>ห้องเรียน</span><span>กำหนดส่ง</span><span>มอบหมายเมื่อ</span><span>สถานะ</span><span>เปิดดูเฉลี่ย</span><span></span>
    </div>
  `;
  homeworkCards.innerHTML = "";

  const rows = [
    [lessons[0].title, "2 ห้องเรียน", "12 พ.ค. 2568 23:59", "12 พ.ค. 2568 10:32", "มอบหมายแล้ว", "87.3%", "forest"],
    [lessons[1].title, "1 ห้องเรียน", "19 พ.ค. 2568 23:59", "-", "ยังไม่มอบหมาย", "-", "paper"],
    ...extraHomework,
  ];

  rows.forEach(([title, room, due, sentAt, status, rate, cover]) => {
    const row = document.createElement("div");
    const statusClass = status === "มอบหมายแล้ว" ? "bg-lime-100 text-lime-700" : "bg-slate-100 text-slate-600";
    row.className = "grid min-h-14 min-w-[820px] grid-cols-[minmax(250px,1.5fr)_88px_92px_92px_84px_64px_20px] items-center gap-3 border-t border-achieve-line px-3 py-2 text-xs";
    row.innerHTML = `
      <div class="grid grid-cols-[44px_minmax(0,1fr)] items-center gap-3 font-semibold">
        <span class="h-11 w-9 rounded-md ${coverClasses[cover]}"></span>
        <span>${title}</span>
      </div>
      <span class="inline-flex min-h-6 items-center justify-center rounded-md bg-slate-100 px-2 font-semibold text-slate-700">${room}</span>
      <span class="font-medium text-slate-600">${due}</span>
      <span class="font-medium text-slate-600">${sentAt}</span>
      <span class="inline-flex min-h-6 items-center justify-center rounded-md px-2 font-semibold ${statusClass}">${status}</span>
      <span class="font-bold text-achieve-deep">${rate}</span>
      <span class="material-symbols-rounded text-[22px] text-slate-500">chevron_right</span>
    `;
    homeworkTable.append(row);

    const card = document.createElement("article");
    card.className = "rounded-lg border border-achieve-line bg-white p-4 shadow-soft";
    card.innerHTML = `
      <div class="grid grid-cols-[48px_minmax(0,1fr)] gap-3">
        <span class="h-16 w-12 rounded-md ${coverClasses[cover]}"></span>
        <div class="min-w-0">
          <h3 class="font-title font-bold leading-snug text-slate-900">${title}</h3>
          <div class="mt-2 flex flex-wrap items-center gap-2">
            <span class="inline-flex min-h-7 items-center rounded-lg bg-slate-100 px-2 text-xs font-semibold text-slate-700">${room}</span>
            <span class="inline-flex min-h-7 items-center rounded-lg px-2 text-xs font-semibold ${statusClass}">${status}</span>
            ${rate !== "-" ? `<span class="text-xs font-bold text-achieve-deep">${rate}</span>` : ""}
          </div>
        </div>
      </div>
      <dl class="mt-4 grid grid-cols-2 gap-3 text-xs font-bold text-slate-500">
        <div><dt>กำหนดส่ง</dt><dd class="mt-1 text-slate-800">${due}</dd></div>
        <div><dt>มอบหมายเมื่อ</dt><dd class="mt-1 text-slate-800">${sentAt}</dd></div>
      </dl>
    `;
    homeworkCards.append(card);
  });

  const roomTable = document.querySelector("#roomTable");
  const roomCards = document.querySelector("#roomCards");
  roomTable.innerHTML = `
    <div class="grid min-w-[520px] grid-cols-[1fr_82px_82px_82px_70px_20px] items-center gap-3 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500">
      <span>ห้องเรียน</span><span>นักเรียนทั้งหมด</span><span>ส่งถึงแล้ว</span><span>ส่งเมื่อ</span><span>เปิดดู</span><span></span>
    </div>
  `;
  roomCards.innerHTML = "";

  [
    ["ม.5/1", "32 คน", "ส่งถึงแล้ว", "12 พ.ค. 10:32", "28 คน (87.5%)"],
    ["ม.5/2", "31 คน", "ส่งถึงแล้ว", "12 พ.ค. 10:32", "28 คน (90.3%)"],
    ["รวมทั้งหมด", "63 คน", "2 ห้องเรียน", "12 พ.ค. 10:32", "56 คน (88.9%)"],
  ].forEach((cells, index) => {
    const row = document.createElement("div");
    row.className = "grid min-h-14 min-w-[520px] grid-cols-[1fr_82px_82px_82px_70px_20px] items-center gap-3 border-t border-achieve-line px-3 py-2 text-xs font-semibold text-slate-600";
    row.innerHTML = cells.map((cell, cellIndex) => {
      if (cellIndex === 0 && index < 2) return `<strong class="text-slate-900">${cell}</strong>`;
      if (cellIndex === 4) return `<span class="font-bold text-achieve-deep">${cell}</span>`;
      return `<span>${cell}</span>`;
    }).join("") + '<span class="material-symbols-rounded text-[22px] text-slate-500">chevron_right</span>';
    roomTable.append(row);

    const card = document.createElement("article");
    card.className = index === 2
      ? "rounded-lg border border-achieve-line bg-slate-50 p-4 shadow-soft"
      : "rounded-lg border border-achieve-line bg-white p-4 shadow-soft";
    card.innerHTML = `
      <div class="mb-3 flex items-center justify-between gap-3">
        <h3 class="font-title font-semibold text-slate-900">${cells[0]}</h3>
        <span class="font-bold text-achieve-deep">${cells[4]}</span>
      </div>
      <dl class="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-500">
        <div class="rounded-lg bg-white/70 p-2"><dt>ทั้งหมด</dt><dd class="mt-1 text-slate-900">${cells[1]}</dd></div>
        <div class="rounded-lg bg-white/70 p-2"><dt>สถานะ</dt><dd class="mt-1 text-lime-700">${cells[2]}</dd></div>
        <div class="rounded-lg bg-white/70 p-2"><dt>เปิดดู</dt><dd class="mt-1 text-achieve-deep">${cells[4]}</dd></div>
      </dl>
    `;
    roomCards.append(card);
  });
}

assignmentForm.addEventListener("submit", submitAssignment);
document.querySelector("#closeDrawer").addEventListener("click", () => closeDrawer(assignmentDrawer));
document.querySelector("#cancelDrawer").addEventListener("click", () => closeDrawer(assignmentDrawer));
document.querySelector("#closeSuccess").addEventListener("click", () => closeDrawer(successDrawer));
document.querySelector("#dismissSuccess").addEventListener("click", () => closeDrawer(successDrawer));
document.querySelector("#closeUnopenedStudents").addEventListener("click", () => closeDrawer(unopenedStudentsDrawer));
document.querySelector("#dismissUnopenedStudents").addEventListener("click", () => closeDrawer(unopenedStudentsDrawer));
document.querySelector("#viewStatus").addEventListener("click", showDashboard);
document.querySelector("#dashboardMenuButton").addEventListener("click", showDashboard);
document.querySelector("#homeworkReportMenuButton").addEventListener("click", showHomeworkReport);
document.querySelectorAll("[data-grade-toggle]").forEach((button) => {
  button.addEventListener("click", () => toggleGradeGroup(button));
});
document.querySelectorAll('[data-action="show-lesson-plans"]').forEach((button) => {
  button.addEventListener("click", showLessonPlans);
});
document.querySelector("#downloadReportButton").addEventListener("click", () => {
  alert("ดาวน์โหลดรายงานสถานะการเปิดดู (Prototype)");
});
document.querySelector("#closePreviewModal").addEventListener("click", closePreviewModal);
document.querySelector("#downloadPreviewPdf").addEventListener("click", () => {
  downloadFile(lessonPackageDownload);
});
document.querySelector("#downloadActiveAsset").addEventListener("click", () => {
  const [icon] = assets[activePreviewAssetIndex];
  downloadFile(assetDownloadsByIcon[icon] || assetDownloadsByIcon.description);
});
document.querySelector("#copyWebToolLink").addEventListener("click", copyWebToolUrl);
document.querySelector("#openWebToolLink").addEventListener("click", openWebToolUrl);
helpModalButton.addEventListener("click", openHelpModal);
document.querySelector("#closeHelpModal").addEventListener("click", closeHelpModal);
document.querySelector("#dismissHelpModal").addEventListener("click", closeHelpModal);
document.querySelector("#remindStudentsButton").addEventListener("click", openUnopenedStudentsDrawer);
document.querySelector("#viewUnopenedStudentsButton").addEventListener("click", openUnopenedStudentsDrawer);
document.querySelector("#reportOpenUnopenedStudents").addEventListener("click", openUnopenedStudentsDrawer);
remindUnopenedStudents.addEventListener("click", sendReminderToUnopenedStudents);
sidebarToggle.addEventListener("click", () => setSidebarCollapsed(!isSidebarCollapsed));
sidebarRestore.addEventListener("click", () => setSidebarCollapsed(false));
window.addEventListener("resize", () => setSidebarCollapsed(isSidebarCollapsed));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && previewModal.getAttribute("aria-hidden") === "false") {
    closePreviewModal();
  }
  if (event.key === "Escape" && helpModal.getAttribute("aria-hidden") === "false") {
    closeHelpModal();
  }
});
document.querySelector("#selectAllRooms").addEventListener("click", () => {
  rooms.forEach((room) => {
    room.selected = true;
  });
  renderRoomPicker();
});
overlay.addEventListener("click", () => {
  closeDrawer(assignmentDrawer);
  closeDrawer(successDrawer);
  closeDrawer(unopenedStudentsDrawer);
});

renderLessons();
renderRoomPicker();
renderDashboardTables();
