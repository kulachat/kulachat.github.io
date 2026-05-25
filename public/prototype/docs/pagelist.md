# Prototype Page List

อัปเดตล่าสุด: 2026-05-25

รายการนี้สรุปไฟล์งาน prototype หลังย้ายหน้า HTML หลักเข้า Astro แล้ว โดยหน้าเว็บถูกสร้างจาก `src/pages/prototype` และยังใช้ assets เดิมใน `public/prototype`

## Folder Structure

```text
public/prototype/
├── css/
├── js/
├── docs/
└── assets/
    ├── fonts/
    ├── images/
    ├── logos/
    ├── preview/
    └── references/

src/
├── pages/prototype/
│   ├── index.html.ts
│   ├── student.html.ts
│   ├── collab.html.ts
│   ├── admin.html.ts
│   ├── admin-theme.html.ts
│   ├── career-content.html.ts
│   ├── career-category.html.ts
│   └── career-detail.html.ts
├── prototype-html/
└── utils/prototypeHtml.ts
```

## Pages

| URL | Astro source | HTML source | ชื่อ/หน้าที่ |
|---|---|---|---|
| `/prototype/index.html` | `src/pages/prototype/index.html.ts` | `src/prototype-html/index.html` | หน้าจัดการใบงานสำหรับครู: มอบหมายแผนการสอน, ติดตามการบ้าน, รายงานสรุป |
| `/prototype/student.html` | `src/pages/prototype/student.html.ts` | `src/prototype-html/student.html` | หน้านักเรียน: ดูใบงาน/งานที่ได้รับมอบหมาย |
| `/prototype/career-content.html` | `src/pages/prototype/career-content.html.ts` | `src/prototype-html/career-content.html` | หน้าคลังข้อมูลอาชีพ |
| `/prototype/career-category.html` | `src/pages/prototype/career-category.html.ts` | `src/prototype-html/career-category.html` | หน้าหมวดอาชีพ |
| `/prototype/career-detail.html` | `src/pages/prototype/career-detail.html.ts` | `src/prototype-html/career-detail.html` | หน้าเจาะลึกอาชีพ |
| `/prototype/collab.html` | `src/pages/prototype/collab.html.ts` | `src/prototype-html/collab.html` | Dashboard สำหรับโรงเรียน/partner พร้อม custom theme |
| `/prototype/admin.html` | `src/pages/prototype/admin.html.ts` | `src/prototype-html/admin.html` | หน้า School Partnership สำหรับ admin: รายการโรงเรียน |
| `/prototype/admin-theme.html` | `src/pages/prototype/admin-theme.html.ts` | `src/prototype-html/admin-theme.html` | หน้า Setup Theme สำหรับ admin |

## Scripts And Styles

| ไฟล์ | หน้าที่ |
|---|---|
| [js/script.js](../js/script.js) | Mock data, render UI, drawer state, navigation, loading state ของหน้า `index.html` |
| [js/student.js](../js/student.js) | Logic และ mock state ของหน้านักเรียน |
| [js/collab.js](../js/collab.js) | Logic สำหรับ dashboard และ theme controls ของหน้า `collab.html` |
| `src/utils/prototypeHtml.ts` | Loader/renderer กลางสำหรับแปลง HTML source เป็น Astro-generated `.html` routes |
| [css/style.css](../css/style.css) | Shared font-face และ CSS เสริมขนาดเล็กของ prototype |
| [css/prototype-tailwind.css](../css/prototype-tailwind.css) | Compiled Tailwind CSS สำหรับ prototype pages |
| [css/collab.css](../css/collab.css) | Design tokens, layout, และ custom theme styles ของ dashboard โรงเรียน |
| [css/admin.css](../css/admin.css) | Styles สำหรับหน้า admin และ setup theme |

## Documentation

| ไฟล์ | เนื้อหา |
|---|---|
| [docs/work.md](work.md) | Prototype handoff: เป้าหมาย flow, tech stack, design system, behavior notes |
| [docs/custom.md](custom.md) | Custom Theme Guide สำหรับ dashboard โรงเรียน |
| [docs/log.html](log.html) | Log เก็บ brief และ content ที่เคยทดลองวางในหน้า `career-content.html` |
| [docs/career-content-filter-logic.md](career-content-filter-logic.md) | สรุป logic ของ filter/search ในหน้า Career Content prototype |
| [docs/movec-data-integration-brief.md](movec-data-integration-brief.md) | Brief ระบบเชื่อมโยงข้อมูลอาชีวศึกษาจาก M-OVEC สำหรับหน้าอาชีพ |
| [docs/pagelist.md](pagelist.md) | ไฟล์นี้: สารบัญไฟล์งานใน `public/prototype` |

## Assets

| โฟลเดอร์ | เนื้อหา |
|---|---|
| [assets/logos](../assets/logos) | โลโก้โรงเรียนและ product logo |
| [assets/images](../assets/images) | รูปประกอบทั่วไป เช่น icon |
| [assets/preview](../assets/preview) | ไฟล์ mockup presentation และรูป preview |
| [assets/references](../assets/references) | รูป reference สำหรับ flow เดิม |
| [assets/fonts](../assets/fonts) | Font files และ memo/license note |

## Asset Files

| ไฟล์ | หมายเหตุ |
|---|---|
| [assets/logos/bangkok-christian-college-logo.png](../assets/logos/bangkok-christian-college-logo.png) | Logo โรงเรียน BCC |
| [assets/logos/to-school-logo.png](../assets/logos/to-school-logo.png) | Logo to school |
| [assets/images/icon-book.png](../assets/images/icon-book.png) | Icon หนังสือ/การเรียน |
| [assets/preview/Modern_Education_Mockup_A4.pptx](../assets/preview/Modern_Education_Mockup_A4.pptx) | ไฟล์ preview/mockup presentation |
| [assets/preview/image1.png](../assets/preview/image1.png) | Preview image |
| [assets/preview/image2.png](../assets/preview/image2.png) | Preview image |
| [assets/preview/image3.png](../assets/preview/image3.png) | Preview image |
| [assets/references/step-1.png](../assets/references/step-1.png) | Reference image สำหรับ flow เดิม |
| [assets/references/step-2.png](../assets/references/step-2.png) | Reference image สำหรับ flow เดิม |
| [assets/references/step-3.png](../assets/references/step-3.png) | Reference image สำหรับ flow เดิม |
| [assets/references/step-4.png](../assets/references/step-4.png) | Reference image สำหรับ flow เดิม |

## Font Files

| ไฟล์ | หมายเหตุ |
|---|---|
| [assets/fonts/FC Subject Rounded Regular.otf](../assets/fonts/FC%20Subject%20Rounded%20Regular.otf) | Font FC Subject Rounded Regular |
| [assets/fonts/FC Subject Rounded Regular.ttf](../assets/fonts/FC%20Subject%20Rounded%20Regular.ttf) | Font FC Subject Rounded Regular |
| [assets/fonts/FC Subject Rounded Bold.otf](../assets/fonts/FC%20Subject%20Rounded%20Bold.otf) | Font FC Subject Rounded Bold |
| [assets/fonts/FC Subject Rounded Bold.ttf](../assets/fonts/FC%20Subject%20Rounded%20Bold.ttf) | Font FC Subject Rounded Bold |
| [assets/fonts/Memo FC Subject Rounded.txt](../assets/fonts/Memo%20FC%20Subject%20Rounded.txt) | Font memo/license note |

## Notes

- Root HTML pages ถูกย้ายเข้า Astro แล้ว URL เดิมยังคงเป็น `/prototype/*.html`
- แก้ markup ของหน้า prototype ที่ `src/prototype-html/*.html`
- Astro endpoint ใน `src/pages/prototype/*.html.ts` เป็นตัวสร้างไฟล์ `.html` ตอน build
- ไฟล์ `.DS_Store` เป็น metadata ของ macOS ไม่ใช่ไฟล์งาน prototype
- ถ้าแก้ไฟล์ prototype แล้วต้องการให้ `dist/prototype` อัปเดต ให้รัน build ของโปรเจกต์อีกครั้ง
