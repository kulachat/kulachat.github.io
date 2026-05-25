# Prototype Page List

อัปเดตล่าสุด: 2026-05-25

รายการนี้สรุปไฟล์งานในโฟลเดอร์ `public/prototype` ซึ่งเป็นต้นทางของ prototype ก่อนถูก build ไปที่ `dist/prototype`

## Folder Structure

```text
public/prototype/
├── index.html
├── student.html
├── collab.html
├── admin.html
├── admin-theme.html
├── css/
├── js/
├── docs/
└── assets/
    ├── fonts/
    ├── images/
    ├── logos/
    ├── preview/
    └── references/
```

## Pages

| ไฟล์ | ชื่อ/หน้าที่ | ไฟล์ที่เกี่ยวข้อง |
|---|---|---|
| [index.html](../index.html) | หน้าจัดการใบงานสำหรับครู: มอบหมายแผนการสอน, ติดตามการบ้าน, รายงานสรุป | [js/script.js](../js/script.js) |
| [student.html](../student.html) | หน้านักเรียน: ดูใบงาน/งานที่ได้รับมอบหมาย | [js/student.js](../js/student.js) |
| [career-content.html](../career-content.html) | หน้าโครงสำหรับคลังข้อมูลอาชีพ โดยเว้น wrapper content กลางไว้ | [components/header-student.html](../components/header-student.html) |
| [collab.html](../collab.html) | Dashboard สำหรับโรงเรียน/partner พร้อม custom theme | [css/collab.css](../css/collab.css), [js/collab.js](../js/collab.js) |
| [admin.html](../admin.html) | หน้า School Partnership สำหรับ admin: รายการโรงเรียน | [css/admin.css](../css/admin.css) |
| [admin-theme.html](../admin-theme.html) | หน้า Setup Theme สำหรับ admin | [css/admin.css](../css/admin.css) |

## Scripts And Styles

| ไฟล์ | หน้าที่ |
|---|---|
| [js/script.js](../js/script.js) | Mock data, render UI, drawer state, navigation, loading state ของหน้า `index.html` |
| [js/student.js](../js/student.js) | Logic และ mock state ของหน้านักเรียน |
| [js/collab.js](../js/collab.js) | Logic สำหรับ dashboard และ theme controls ของหน้า `collab.html` |
| [css/style.css](../css/style.css) | Shared font-face และ CSS เสริมขนาดเล็กของ prototype |
| [css/collab.css](../css/collab.css) | Design tokens, layout, และ custom theme styles ของ dashboard โรงเรียน |
| [css/admin.css](../css/admin.css) | Styles สำหรับหน้า admin และ setup theme |

## Documentation

| ไฟล์ | เนื้อหา |
|---|---|
| [docs/work.md](work.md) | Prototype handoff: เป้าหมาย flow, tech stack, design system, behavior notes |
| [docs/custom.md](custom.md) | Custom Theme Guide สำหรับ dashboard โรงเรียน |
| [docs/log.html](log.html) | Log เก็บ brief และ content ที่เคยทดลองวางในหน้า `career-content.html` |
| [docs/career-content-filter-logic.md](career-content-filter-logic.md) | สรุป logic ของ filter/search ในหน้า Career Content prototype |
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

- HTML pages ยังอยู่ที่ root ของ `public/prototype` เพื่อให้ URL เดิมของแต่ละหน้าเปลี่ยนน้อยที่สุด
- ไฟล์ `.DS_Store` เป็น metadata ของ macOS ไม่ใช่ไฟล์งาน prototype
- ถ้าแก้ไฟล์ใน `public/prototype` แล้วต้องการให้ `dist/prototype` อัปเดต ให้รัน build ของโปรเจกต์อีกครั้ง
