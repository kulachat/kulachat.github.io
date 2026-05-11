# Custom Theme Guide — a-achieve to school (Collab Dashboard)

ไฟล์นี้รวบรวมทุกจุดที่ Admin สามารถ Custom ได้ต่อโรงเรียน  
การเปลี่ยนแปลงทั้งหมดทำใน `collab.css` และ `collab.html`

---

## TL;DR — เปลี่ยนแค่ 3 จุดก็ได้ธีมใหม่

```css
/* collab.css → :root */
--ci-brand: #4A235A;       /* ← เปลี่ยนสีหลักโรงเรียน */
```

```html
<!-- collab.html -->
<img src="assets/YOUR_SCHOOL_LOGO.png" />   <!-- ← เปลี่ยนโลโก้ -->
<span class="collab-school-name">ชื่อโรงเรียน</span>  <!-- ← เปลี่ยนชื่อ -->
```

ค่าอื่นๆ ที่เหลือ derive มาจาก `--ci-brand` ทั้งหมด

---

## 1. โลโก้ & ชื่อโรงเรียน

| รายการ | ตำแหน่งในไฟล์ | ค่าตัวอย่าง (BCC) |
|--------|--------------|------------------|
| โลโก้โรงเรียน (Header) | `collab.html` → `<img src="assets/...">` | `Bangkok_Christian_College_logo.png` |
| ชื่อโรงเรียนเต็ม | `collab.html` → `.collab-school-name` | `Bangkok Christian College` |
| Subtitle ใต้ชื่อ | `collab.html` → `.collab-school-subtitle` | `A-Chieve to School partnership with BCC` |
| ชื่อ Platform (Sidebar) | `collab.html` → `#sidebarBrand` | `a-achieve` / `to school` |
| Dashboard Title | `collab.html` → `.collab-panel__title` | `BCC Student Tools Dashboard` |
| Dashboard Subtitle | `collab.html` → `.collab-panel__subtitle` | `ภาพรวม 2 ชั้น · 4 ห้องเรียน · 126 นักเรียน` |

---

## 2. สี CI Brand — เปลี่ยนที่ `:root` ใน `collab.css`

เปลี่ยนค่าเหล่านี้ให้ตรงกับ CI ของโรงเรียน — ระบบจะ apply ทั่วทั้ง Dashboard

| Token | ค่า Default (BCC) | ใช้ที่ไหน |
|-------|------------------|----------|
| `--ci-brand` | `#4A235A` | Sidebar bg, active nav, badge, border accent, progress bar, icon |
| `--ci-brand-hover` | `#3a1b47` | Hover state ของ brand elements ทุกจุด |
| `--ci-brand-soft` | `#f5eff7` | Background อ่อนๆ ของ icon, active nav, year pill hover |
| `--ci-brand-tint` | `#eadff0` | Panel header background |
| `--ci-brand-muted` | `#7a5688` | Text รอง, border อ่อน |
| `--ci-ink` | `#2d1736` | Text สีเข้มสุด (heading ทั่วไป) |

### วิธีคำนวณค่า brand จากสีหลัก

```
--ci-brand        = สีหลัก (เต็ม)
--ci-brand-hover  = สีหลัก เข้มขึ้น ~10%
--ci-brand-muted  = สีหลัก อ่อนลง ~30%
--ci-brand-soft   = สีหลัก opacity 8% บนพื้นขาว
--ci-brand-tint   = สีหลัก opacity 14% บนพื้นขาว
--ci-ink          = สีหลัก เข้มมากๆ (ใกล้ดำ)
```

---

## 3. Sidebar Theme

Sidebar ใช้ Token ระบบแยก `--sb-*` scoped ใน `#sidebar`  
เปลี่ยน `--sb-bg` คือเปลี่ยนธีม sidebar ทั้งหมด

| Token | ค่า Default | ผล |
|-------|------------|-----|
| `--sb-bg` | `var(--ci-brand)` | พื้นหลัง sidebar |
| `--sb-bg-active` | `rgba(255,255,255,0.15)` | รายการ active |
| `--sb-bg-hover` | `rgba(255,255,255,0.09)` | รายการ hover |
| `--sb-text` | `rgba(255,255,255,0.92)` | ข้อความหลัก |
| `--sb-text-sub` | `rgba(255,255,255,0.52)` | ข้อความรอง |
| `--sb-text-label` | `rgba(255,255,255,0.36)` | Section labels |
| `--sb-border` | `rgba(255,255,255,0.12)` | เส้นแบ่ง / divider |
| `--sb-icon-bg` | `rgba(255,255,255,0.10)` | Icon background ปกติ |
| `--sb-icon-active` | `rgba(255,255,255,0.18)` | Icon background active |

> **หมายเหตุ:** ถ้าเปลี่ยน `--sb-bg` เป็นสีอ่อน ให้ปรับ `--sb-text`, `--sb-text-sub`, `--sb-text-label` เป็นสีเข้มด้วย เพื่อให้ contrast ผ่าน WCAG

---

## 4. พื้นหลัง & Surface

| Token | ค่า Default | ใช้ที่ไหน |
|-------|------------|----------|
| `--ci-page-bg` | `#f7fbff` | พื้นหลังทั้งหน้า |
| `--ci-header-bg` | `#f7fbff` | Header bar background |
| `--ci-header-border` | `var(--ci-brand)` | เส้น accent ด้านล่าง header |
| `--ci-header-border-width` | `3px` | ความหนาเส้น header |
| `--ci-surface` | `#ffffff` | Card, panel, input background |

---

## 5. สีสถานะ

| Token | ค่า Default | ใช้ที่ไหน |
|-------|------------|----------|
| `--ci-success` | `#2f8a4f` | Badge "เสร็จแล้ว", metric icon สีเขียว |
| `--ci-success-soft` | `#f3f8f4` | Background badge เสร็จแล้ว |
| `--ci-warning` | `#c59a17` | Tool card accent สีเหลือง |
| `--ci-progress` | `var(--ci-brand)` | Progress bar fill (follow สี brand อัตโนมัติ) |

---

## 6. Typography

| รายการ | ค่า Default | ใช้ที่ไหน |
|--------|------------|----------|
| Display / Title font | `FC Subject Rounded` | Heading, nav label, ตัวเลข value |
| Body font | `Inter`, `Noto Sans Thai` | ข้อความทั่วไป |

เปลี่ยน font ใน `collab.html` → `tailwind.config.fontFamily` และ `collab.css` ทุก `font-family` declaration

---

## ตัวอย่าง: ธีม Google Blue สำหรับโรงเรียนที่ใช้ Google Workspace

```css
:root {
  --ci-brand:        #1a73e8;
  --ci-brand-hover:  #1558b0;
  --ci-brand-soft:   #e8f0fe;
  --ci-brand-tint:   #d2e3fc;
  --ci-brand-muted:  #4285f4;
  --ci-ink:          #0d2137;
}
```

---

*อัปเดตล่าสุด: 2569 | a-achieve to school*
