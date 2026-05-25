# UI/UX Redesign Brief: ระบบเชื่อมโยงข้อมูลอาชีวศึกษา (M-OVEC Data Integration)

อัปเดตล่าสุด: 2026-05-25

**เป้าหมายหลัก:** นำข้อมูลจากระบบฐานข้อมูล [M-OVEC](https://m.ovec.go.th/about_users/?utm_source=chatgpt.com) มาเปลี่ยนเป็นฟีเจอร์ "แผนที่เรียนต่อสายอาชีพ" ในหน้าแนะนำอาชีพ เพื่อช่วยให้นักเรียนที่สนใจเรียนต่อสายอาชีพ (ปวช./ปวส.) ค้นหาสาขาวิชาและสถานศึกษาใกล้บ้านได้ง่ายขึ้น

> สถานะการตรวจสอบ: ตรวจพบ public API ที่หน้า M-OVEC เรียกใช้งานจริง และสามารถดึงข้อมูลแบบ read-only ได้ แต่ต้องทำ data sanitization ก่อนใช้งาน เพราะบาง endpoint ส่งข้อมูลหลังบ้าน/ข้อมูลอ่อนไหวปะปนมาด้วย

---

## 1. แหล่งข้อมูลที่ตรวจพบจริง

หน้า M-OVEC เป็น Nuxt/Vuetify app และเรียก API จาก `hrvec.ovec.go.th/dashboard_ovec_api` รวมถึง endpoint เดิมบางส่วนจาก IP ของระบบ dashboard

| ชุดข้อมูล | Endpoint | จำนวนที่ตรวจพบ | ใช้ทำอะไร |
|---|---|---:|---|
| สถานศึกษา | `https://hrvec.ovec.go.th/dashboard_ovec_api/stdCollege.php` | 433 สถานศึกษา | รายชื่อวิทยาลัย, จังหวัด, ช่องทางติดต่อพื้นฐาน |
| จังหวัด | `https://hrvec.ovec.go.th/dashboard_ovec_api/stdProvince.php` | 77 จังหวัด | ตัวกรองจังหวัด/ภูมิภาค |
| สาขา ปวส. และผลสำรวจมาตรฐาน | `https://hrvec.ovec.go.th/dashboard_ovec_api/stdbranch_survey.php` | 4,551 รายการ | จับคู่สถานศึกษา + สาขา + badge Standard/Expert/Excellent/CVM |
| กลุ่มหลักสูตร/สาขา | `http://203.159.242.160/dashboard_ovec_api/rate_work_brach_group.php` | 35,021 รายการ | อ้างอิงชื่อสาขา/โครงสร้างหลักสูตรเพิ่มเติม |

ตัวอย่างคำสั่งตรวจสอบ:

```bash
curl -L -sS -X POST 'https://hrvec.ovec.go.th/dashboard_ovec_api/stdCollege.php'
curl -L -sS -X POST 'https://hrvec.ovec.go.th/dashboard_ovec_api/stdProvince.php'
curl -L -sS -X POST 'https://hrvec.ovec.go.th/dashboard_ovec_api/stdbranch_survey.php'
curl -L -sS -X POST 'http://203.159.242.160/dashboard_ovec_api/rate_work_brach_group.php'
```

---

## 2. Data Safety และ Field Whitelist

ห้ามนำ response ทั้งก้อนเข้า database โดยตรง เพราะ `stdbranch_survey.php` มี field ที่ไม่ควรใช้ใน product public เช่น `user_password`, เบอร์โทรส่วนบุคคล, ชื่อผู้บริหาร, address แบบละเอียด และข้อมูลสิทธิ์ในระบบ

### 2.1 Field ที่อนุญาตให้ใช้ในเว็บ

ใช้เฉพาะ field ที่จำเป็นต่อ UX และไม่เปิดเผยข้อมูลอ่อนไหว:

| Field | ความหมาย | ใช้ใน UI |
|---|---|---|
| `schoolid` | รหัสสถานศึกษา | key สำหรับ join |
| `college_name` | ชื่อสถานศึกษา | ตาราง/การ์ดสถานศึกษา |
| `province_ID` | รหัสจังหวัด | filter จังหวัด |
| `province_name` | ชื่อจังหวัด | filter และ label |
| `region_ID` | รหัสภูมิภาค | filter ภูมิภาค |
| `region_name` | ชื่อภูมิภาค | filter และ label |
| `majorCode` | รหัสสาขา | mapping กับอาชีพ |
| `majorNameTh` | ชื่อสาขา | curriculum tag |
| `student_count` | จำนวนนักศึกษาในสาขา | optional metric |
| `sy_year` | ปีการศึกษา | freshness indicator |
| `std_survey_standard` | สถานะ Standard | quality badge |
| `std_survey_expert` | สถานะ Expert | quality badge |
| `std_survey_excellent` | สถานะ Excellent | quality badge |
| `std_survey_cvm` | สถานะ CVM | quality badge |
| `std_survey_time` | เวลาอัปเดตผลสำรวจ | data freshness |

### 2.2 Field ที่ต้องตัดทิ้ง

ตัด field กลุ่มนี้ออกตั้งแต่ชั้น importer:

- `user_password`
- `user_director`, `user_directorphone`, `user_directorpic`
- `user_address`, `user_tel_p`, `user_fax`, `user_email`
- `userauthority*`
- `user_ID`, `user_name`, `user_code`
- field เลข index ซ้ำ เช่น `"0"`, `"1"`, `"2"`
- field หลังบ้านที่ไม่ใช้ใน UX เช่น `organization_code`, `allocation_code`, `committeegroup_ID`

---

## 3. Data Mapping Core

ใช้โครงสร้าง 3 ชั้น:

**อาชีพใน a-chieve -> สาขาวิชาที่ตรงสายจาก M-OVEC -> สถานศึกษาที่เปิดสอน**

ตัวอย่าง:

| ชั้นข้อมูล | ตัวอย่าง |
|---|---|
| อาชีพ | `ช่างซ่อมบำรุงรถยนต์ไฟฟ้า (EV)` |
| สาขา ปวส. | `เทคนิคยานยนต์ไฟฟ้า`, `เมคคาทรอนิกส์และหุ่นยนต์` |
| สถานศึกษา | `วิทยาลัยเทคนิคลพบุรี`, `วิทยาลัยเทคนิคดุสิต` |

### 3.1 ตาราง mapping ที่ควรมีในระบบเรา

ต้องมีตาราง mapping แยกเอง เพราะ M-OVEC ไม่ได้รู้ว่า career card ของ a-chieve ควรเชื่อมกับสาขาใด

```json
{
  "careerId": "ev-technician",
  "careerTitle": "ช่างซ่อมบำรุงรถยนต์ไฟฟ้า",
  "movecMajorCodes": ["30101", "30127"],
  "notes": "ตรวจโดยทีม content ก่อน publish"
}
```

### 3.2 หลักการ mapping

- ใช้ `majorCode` เป็น source of truth ไม่ใช้ชื่อสาขาอย่างเดียว เพราะชื่ออาจสะกดต่างกัน
- ให้ทีม content เป็นคน approve mapping ก่อนเผยแพร่
- หนึ่งอาชีพจับคู่ได้หลายสาขา และหนึ่งสาขาเชื่อมได้หลายอาชีพ
- แสดงข้อมูลเฉพาะสถานศึกษาที่มี `majorCode` ตรงกับ mapping ของอาชีพนั้น

---

## 4. UX Implementation ในหน้าเจาะลึกอาชีพ

ในแท็บ **"เช็กสถาบัน & การศึกษาต่อ"** ให้เพิ่มโมดูลย่อยสำหรับ **"สายอาชีพ/อาชีวศึกษา"**

### 4.1 Curriculum Tags

ใช้ tag จาก `majorNameTh` ที่ผ่าน mapping แล้วเท่านั้น:

```text
ปักหมุดสาขาเรียนต่อสำหรับสายอาชีพ
[ปวส. เทคนิคยานยนต์ไฟฟ้า] [ปวส. เมคคาทรอนิกส์และหุ่นยนต์]
```

### 4.2 Interactive College Finder

ห้ามยกข้อมูลทั้งหมดมาแสดงตั้งแต่แรก ให้เริ่มจากตัวกรองที่เด็กใช้จริง:

- ภูมิภาค
- จังหวัด
- สาขาวิชา
- ประเภทคุณภาพ: Standard / Expert / Excellent / CVM

ผลลัพธ์ควรแสดงหลังเลือกเงื่อนไขหรือมีค่า default ที่เกี่ยวข้องกับอาชีพนั้นแล้วเท่านั้น

### 4.3 Quality Badge

แปลง field จาก M-OVEC เป็น badge:

| Field | Badge |
|---|---|
| `std_survey_standard = 1` | Standard |
| `std_survey_expert = 1` | Expert |
| `std_survey_excellent = 1` | Excellent Center |
| `std_survey_cvm = 1` | CVM |

ถ้า value เป็น `0` หรือว่าง ไม่ต้องแสดง badge นั้น

---

## 5. Recommended Data Pipeline

### 5.1 MVP: Static Import

เหมาะกับ prototype/production ระยะแรก:

1. ดึงข้อมูลจาก endpoint ด้วย scheduled job หรือ manual script
2. sanitize ด้วย whitelist
3. normalize เป็น JSON/DB table ของเรา
4. ให้ทีม content ทำ career-to-major mapping
5. deploy ข้อมูลเป็น static JSON หรือ import เข้า CMS/database
6. อัปเดตทุก 3-6 เดือน หรือเมื่อ M-OVEC ประกาศรอบข้อมูลใหม่

### 5.2 Production: Controlled Sync

ก่อนใช้จริงระยะยาวควร:

- ขออนุญาต/ยืนยันสิทธิ์การใช้งาน API กับหน่วยงานเจ้าของข้อมูล
- ทำ caching และ retry policy ไม่ยิง API ทุก page view
- เก็บ snapshot พร้อม `importedAt`, `sourceUrl`, `sy_year`
- ทำ monitoring เมื่อ schema เปลี่ยนหรือ endpoint ล่ม
- เก็บ audit log ว่า career mapping แต่ละรายการถูกแก้โดยใครและเมื่อไร

---

## 6. Proposed Sanitized Schema

```ts
type MovecProgramOffering = {
  source: "M-OVEC";
  sourceYear: number;
  importedAt: string;
  schoolId: string;
  collegeName: string;
  provinceId: string;
  provinceName: string;
  regionId: string;
  regionName: string;
  majorCode: string;
  majorNameTh: string;
  studentCount?: number;
  qualityBadges: Array<"standard" | "expert" | "excellent" | "cvm">;
  surveyedAt?: string;
};
```

---

## 7. Open Questions

- ต้องการแสดงเฉพาะ ปวส. หรือรวม ปวช. ด้วยหรือไม่
- ต้องใช้ข้อมูลทุนการศึกษาจากแหล่งใด เพราะ M-OVEC endpoint ที่ตรวจพบยังไม่ใช่ข้อมูลทุนโดยตรง
- จำเป็นต้องเชื่อมแผนที่/พิกัดสถานศึกษาหรือไม่ ถ้าจำเป็นอาจต้องมี source เพิ่มเติม
- ต้องให้ทีม content review mapping ทุกอาชีพก่อนเปิด public หรือเปิดเฉพาะอาชีพที่ mapping พร้อมแล้ว

---

## 8. Recommendation

เริ่มจาก static import + content-approved mapping ก่อน เพราะควบคุมคุณภาพข้อมูลและ UX ได้ดีกว่า จากนั้นค่อยยกระดับเป็น controlled sync เมื่อได้รับการยืนยันเรื่องสิทธิ์ API และความเสถียรของ schema จากเจ้าของข้อมูล
