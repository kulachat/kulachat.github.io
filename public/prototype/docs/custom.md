# Custom Theme Guide — a-achieve to school (Collab Dashboard)

ไฟล์นี้รวบรวมทุกจุดที่ Admin สามารถ Custom ได้ต่อโรงเรียน  
การเปลี่ยนแปลงทั้งหมดทำใน `css/collab.css` และ `collab.html`

---

## TL;DR — เปลี่ยนแค่ 3 จุดก็ได้ธีมใหม่

```css
/* css/collab.css → :root */
--ci-brand: #4A235A;       /* ← เปลี่ยนสีหลักโรงเรียน */
```

```html
<!-- collab.html -->
<img src="assets/logos/YOUR_SCHOOL_LOGO.png" />   <!-- ← เปลี่ยนโลโก้ -->
<span class="collab-school-name">ชื่อโรงเรียน</span>  <!-- ← เปลี่ยนชื่อ -->
```

ค่าอื่นๆ ที่เหลือ derive มาจากสีหลักอัตโนมัติ เช่น สี hover จะเข้มขึ้นเป็น %, สีพื้นหลังอ่อนจะอ่อนลงเป็น %

---

## 1. โลโก้ & ชื่อโรงเรียน

| รายการ | ตำแหน่งในไฟล์ | ค่าตัวอย่าง (BCC) |
|--------|--------------|------------------|
| โลโก้โรงเรียน (Header) | `collab.html` → `<img src="assets/logos/...">` | `bangkok-christian-college-logo.png` |
| ชื่อโรงเรียนเต็ม | `collab.html` → `.collab-school-name` | `Bangkok Christian College` |
| Subtitle ใต้ชื่อ | `collab.html` → `.collab-school-subtitle` | `A-Chieve to School partnership with BCC` |
| ชื่อ Platform (Sidebar) | `collab.html` → `#sidebarBrand` | `a-achieve` / `to school` |
| Dashboard Title | `collab.html` → `.collab-panel__title` | `BCC Student Tools Dashboard` |
| Dashboard Subtitle | `collab.html` → `.collab-panel__subtitle` | `ภาพรวม 2 ชั้น · 4 ห้องเรียน · 126 นักเรียน` |

---

## 2. สี CI Brand

สำหรับหน้าจอ Setup Theme ให้ครูเลือกแค่ “สี CI หลัก” แล้วระบบจะคำนวณสีอื่นจากเปอร์เซ็นต์เข้มขึ้น/อ่อนลงให้เอง

| Token | ค่า Default (BCC) | ใช้ที่ไหน |
|-------|------------------|----------|
| `--ci-brand` | `#4A235A` | Sidebar bg, active nav, badge, border accent, progress bar, icon |
| `--ci-brand-hover` | คำนวณจากสีหลักให้เข้มขึ้น | Hover state ของ brand elements ทุกจุด |
| `--ci-brand-soft` | คำนวณจากสีหลักให้อ่อนลงมาก | Background อ่อนๆ ของ icon, active nav, year pill hover |
| `--ci-brand-tint` | คำนวณจากสีหลักให้อ่อนลง | Panel header background |
| `--ci-brand-muted` | `#7a5688` | Text รอง, border อ่อน |
| `--ci-ink` | `#2d1736` | Text สีเข้มสุด (heading ทั่วไป) |

### วิธีคำนวณค่า brand จากสีหลักในหน้า Setup Theme

```
สี CI หลัก             = สีโรงเรียนเต็ม
สีปุ่มตอน hover       = สี CI หลัก เข้มขึ้นตาม %
พื้นหลังอ่อนมาก       = สี CI หลัก อ่อนลงตาม %
พื้นหลังหัวข้อ         = สี CI หลัก อ่อนลงตาม %
```

---

## 3. แถบเมนูด้านซ้าย

ในหน้า Setup Theme ผู้ใช้ไม่ต้องกรอก token ของ sidebar เอง
ให้เลือก “สีพื้นแถบเมนู” และปรับ slider สำหรับความสว่าง/ความเด่นแทน

| รายการในหน้า Setup | ผล |
|--------------------|-----|
| สีพื้นแถบเมนู | พื้นหลัง sidebar |
| ความสว่างของตัวอักษร | ข้อความหลักและข้อความรองใน sidebar |
| ความเด่นของเมนูที่เลือก | พื้นหลังของรายการ active/hover |
| ความสว่างของพื้นหลัง icon | กล่องพื้นหลังของ icon และเส้นแบ่ง |

เบื้องหลังระบบจะ derive ค่า `--sb-*` ให้เอง เพื่อให้ครูไม่ต้องเข้าใจ token name แบบ developer

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

เปลี่ยน font ใน `collab.html` → `tailwind.config.fontFamily` และ `css/collab.css` ทุก `font-family` declaration

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
