# Prototype Handoff: e-achieve to school Assignment Flow

เอกสารนี้สรุปงาน Prototype สำหรับ Platform `a-chieve / e-achieve to school` เพื่อให้ทีมออกแบบ ทีมพัฒนา หรือผู้รับงานต่อเข้าใจแนวทางเดียวกันก่อนแก้ไขต่อ

## เป้าหมายของ Prototype

Prototype นี้ออกแบบเพื่อสาธิต Flow สำหรับครูในการมอบหมายแผนการสอนเป็นการบ้านให้นักเรียน และติดตามการเปิดดูของนักเรียนในระดับห้องเรียน

แกนหลักของงานไม่ใช่แค่การส่งไฟล์ แต่คือการช่วยให้ครูและโรงเรียนตอบคำถามสำคัญได้เร็วขึ้น:

- ครูมอบหมายแผนการสอนไปยังห้องเรียนใดแล้ว
- นักเรียนเปิดดูครบหรือยัง
- ห้องเรียนใดควรติดตามต่อ
- นักเรียนคนใดยังไม่เปิดดู
- โรงเรียนเห็นภาพรวม engagement ของการเรียนรู้ได้อย่างไร
- Platform สามารถต่อยอดเป็นรายงาน, insight, และ service สำหรับโรงเรียนได้อย่างไร

## Tech Stack และข้อกำหนด

- ใช้ `HTML + JavaScript` เป็น static prototype
- ใช้ Tailwind CSS ผ่าน CDN เท่านั้น
- ไม่ใช้ CSS file แยก
- ใช้ Google Material Symbols Rounded ผ่าน CDN สำหรับ icon
- ใช้ Google Font `Prompt` สำหรับ Title และ Heading
- Body text ใช้ base size `14px`
- Prototype เปิดใช้งานผ่านไฟล์ `index.html` ได้โดยตรง
- Logic หลักอยู่ใน `js/script.js`

ไฟล์หลัก:

- `index.html`: layout, Tailwind config, page structure, drawer markup
- `js/script.js`: data mock, render list/table/card, drawer state, page navigation, loading state
- `assets/references/step-1.png` ถึง `assets/references/step-4.png`: reference image สำหรับ flow เดิม

## Design System

### Typography

- Body ใช้ `font-sans` และ `text-[14px]`
- Title, H1-H6 ใช้ `font-title` ซึ่ง map ไปที่ Google Font `Prompt`
- Paragraph และ description ควรใช้ขนาดเล็กลงเพื่อให้ UI ไม่แน่น
- Description ใต้ title card ใช้ `text-xs` หรือประมาณ `12px`
- Metadata เช่น `ยังไม่ได้ส่ง`, `แก้ไขล่าสุด`, `ข้อมูลอัปเดตทุก 5 นาที` ใช้ `12px` และ `font-normal`
- หลีกเลี่ยง `font-bold` ในพื้นที่ข้อมูลรอง เพราะทำให้ระบบดูแน่นและอึดอัด
- ใช้ `font-semibold` เฉพาะ title, label สำคัญ, action สำคัญ

### Color

สีหลักถูกตั้งใน Tailwind config:

```js
achieve: {
  blue: '#0A8DCD',
  deep: '#0677AD',
  ink: '#14213d',
  line: '#e5edf5',
  soft: '#f1f8fd',
}
```

แนวทางการใช้สี:

- Primary CTA ใช้ `bg-achieve-blue`
- Hover ของ Primary CTA ใช้ `hover:bg-achieve-deep`
- หลีกเลี่ยง gradient ในปุ่ม
- ลดการใช้สีฟ้าขนาดใหญ่เกินไป เพราะทำให้ Platform ดูหนักและแน่น
- สีฟ้าควรใช้กับ action, icon สำคัญ, active state และ metric สำคัญเท่านั้น
- พื้นหลังหลักใช้โทนขาวและฟ้าอ่อนมาก เช่น `#f7fbff`, `bg-white`, `bg-slate-50`
- Border ใช้ `border-achieve-line`
- Label แจ้งเตือน เช่น “ยังไม่เปิดดู 4 คน” ใช้โทนส้มอ่อน `bg-orange-50 text-orange-700`

### Icons

ใช้ Google Material Symbols Rounded เท่านั้น โดยเรียกผ่าน CDN ใน `index.html`

ตัวอย่าง icon ที่ใช้ตามบริบท:

- ส่งการบ้าน: `send`
- แผนการสอน / งาน: `assignment`, `description`
- ห้องเรียน / กลุ่มนักเรียน: `groups`, `school`
- แจ้งเตือน: `notifications`
- ยังไม่เปิดดู: `visibility_off`
- ดูตัวอย่าง / เปิดดู: `visibility`
- รายงาน: `summarize`
- Sidebar toggle: `left_panel_close`, `left_panel_open`
- Success: `check_circle`

หลักการเลือก icon:

- ใช้ icon ที่อธิบาย action หรือ content โดยตรง
- หลีกเลี่ยง icon generic ถ้ามี icon ที่ตรงบริบทกว่า
- Icon ในปุ่มใช้ขนาดประมาณ `18px` ถึง `21px`
- Icon ใหญ่ใน drawer header ใช้ประมาณ `24px`

### Cards และ Layout

- Card ใช้ `rounded-lg`, `border border-achieve-line`, `bg-white`, `shadow-card`
- หลีกเลี่ยง card ที่ใหญ่และหนาเกินไป
- Lesson plan card ถูกย่อให้ lean:
  - Card padding ประมาณ `p-4`
  - Cover ประมาณ `h-20 w-14`
  - Title ประมาณ `17px`
  - ปุ่ม action ประมาณ `min-h-10`
  - Asset item ใช้ `min-h-14`
- Description และ metadata ใน card ใช้ `12px`
- Page padding หลักใช้ `px-3 py-5 lg:px-4 lg:py-6`
- หน้า list ควรใช้ `w-full` เพื่อขยายเต็มพื้นที่เมื่อ sidebar ถูกซ่อน

### Buttons

แนวทางขนาด:

- Primary CTA ใน card และ drawer ใช้ `min-h-10`
- ปุ่มทั่วไปใน dashboard บางจุดยังใช้ `min-h-12` ได้ถ้าเป็น toolbar หรือ filter สำคัญ
- ปุ่มใน lesson card ใช้ `text-xs` และ icon `18px`
- ปุ่ม drawer footer ใช้ `rounded-md`, `min-h-10`, `text-sm`

แนวทางสี:

- Primary: `bg-achieve-blue text-white`
- Secondary: `border border-achieve-line bg-white text-slate-700`
- Text action: `text-achieve-deep`
- ห้ามใช้ gradient กับ CTA

## Drawer System

Drawer ทั้งหมดต้องใช้แนวทางเดียวกันกับ Card List คือไม่หนา ไม่ใหญ่ และอ่านง่าย

Drawer ปัจจุบันมี 3 ตัว:

- `assignmentDrawer`: ส่งการบ้าน
- `successDrawer`: ส่งการบ้านสำเร็จ
- `unopenedStudentsDrawer`: นักเรียนที่ยังไม่เปิดดู

โครงสร้างหลัก:

- Width: `max-w-[440px]`
- Padding: `px-5 pt-8`
- Header icon: `h-11 w-11`, icon `24px`
- Drawer title: `text-xl font-semibold`
- Drawer description: `text-xs font-normal leading-5`
- Footer: sticky bottom, `-mx-5 px-5 py-4`
- Footer button: `min-h-10 rounded-md text-sm`
- Close button: `h-8 w-8`, icon `22px`

Drawer behavior:

- เปิด drawer แล้วแสดง overlay
- คลิก overlay เพื่อปิด drawer
- Footer CTA ต้อง fix bottom หรือ sticky bottom เพื่อให้ครูกดง่าย
- Loading state ต้องเกิดก่อนเปลี่ยนเป็น success ใน action สำคัญ
- หลังส่งแจ้งเตือนแล้ว drawer ควรเปลี่ยนเนื้อหาเป็น success state และให้ครูกดปิด

## Sidebar Rules

Sidebar มี toggle สำหรับซ่อนและแสดงเมนู

Desktop behavior:

- Sidebar default width: `224px`
- เมื่อ collapse เหลือ rail กว้าง `56px`
- Content area ต้องขยายเต็มพื้นที่ด้วย `gridTemplateColumns = "56px minmax(0, 1fr)"`
- Toggle icon อยู่ข้างโลโก้
- เมื่อ collapse ต้องยังเหลือ icon menu ให้ user กดเปิดกลับได้
- Tooltip ต้องบอก action: “ซ่อนแถบเมนู” หรือ “แสดงแถบเมนู”

Mobile behavior:

- เมื่อ collapse ให้ซ่อน sidebar
- แสดง floating restore button มุมซ้ายบน

## Page Structure

### 1. หน้าแผนการสอนชั้น ม. 5

Element หลัก:

- `planPage`
- `lessonList`
- `planSubheader`

หน้าที่:

- แสดงรายการแผนการสอน
- แสดงไฟล์ประกอบของแต่ละแผน
- ครูกด “ส่งการบ้านให้นักเรียน” เพื่อเปิด drawer

ควรระวัง:

- Card list ต้องไม่อ้วนเกินไป
- เมื่อ sidebar collapse list ต้องกว้างเต็มพื้นที่
- Status metadata ต้องใช้ตัวบางและขนาด 12px

### 2. หน้า “ติดตามการบ้าน”

Element หลัก:

- `dashboardPage`
- `homeworkTable`
- `roomTable`
- `viewUnopenedStudentsButton`

หน้าที่:

- ติดตามการมอบหมายและการเปิดดูของนักเรียน
- แสดงภาพรวมของการบ้านที่มอบหมายแล้ว
- แสดงภาพรวมรายห้องเรียน
- ให้ครูกดดู “นักเรียนที่ยังไม่เปิดดู”
- ให้ครูกดส่งแจ้งเตือนนักเรียนที่ยังไม่เปิดดู

Business logic สำคัญ:

- สถานะ “ยังไม่ส่ง” ไม่ควรอยู่ในรายห้องเรียนที่ถูกมอบหมายแล้ว เพราะครูส่งให้ทั้งห้อง ไม่ได้ส่งรายคน
- ในรายห้องเรียนควรวัด “ส่งถึงแล้ว” และ “เปิดดูแล้วกี่คน”
- Metric ที่มีประโยชน์คือ open rate, unopened count, room coverage

### 3. หน้า “รายงานสรุปการบ้าน”

Element หลัก:

- `homeworkReportPage`
- `homeworkReportMenuButton`

หน้าที่:

- สรุปการบ้านทั้งเทอม
- ช่วยครูเห็นงานที่ควรติดตามต่อ
- ช่วยโรงเรียนเห็น adoption และ engagement
- วางฐาน business model สำหรับ Platform

สิ่งที่ควรแสดง:

- จำนวนการบ้านที่มอบหมายแล้วเทียบกับทั้งหมด
- อัตราเปิดดูเฉลี่ย
- จำนวนนักเรียนที่ยังไม่เปิดดู
- ห้องเรียนที่ควรติดตาม
- Insight สำหรับครู
- Value ต่อโรงเรียน เช่น dashboard, export report, engagement analytics

Business model signal:

- โรงเรียนได้รายงาน readiness / engagement
- Platform มีข้อมูล usage ที่ต่อยอดเป็น subscription, school dashboard, analytics report, และ support service ได้
- ต้องระวังไม่ให้ดูเหมือนระบบเพิ่มภาระครู ควรช่วยลดงานติดตาม

## Interaction Flow

### ส่งการบ้าน

1. ครูอยู่หน้าแผนการสอน
2. กด “ส่งการบ้านให้นักเรียน”
3. เปิด `assignmentDrawer`
4. เลือกห้องเรียน
5. ตั้งวันส่งและเวลาได้
6. กด submit
7. แสดง loading process
8. เปิด `successDrawer`
9. ครูกด “ดูสถานะการบ้าน”
10. ไปหน้า `ติดตามการบ้าน`

### ดูนักเรียนที่ยังไม่เปิดดู

1. ครูอยู่หน้า `ติดตามการบ้าน`
2. กด label/button “ดูนักเรียนที่ยังไม่เปิดดู”
3. เปิด `unopenedStudentsDrawer`
4. แสดงรายชื่อนักเรียนแยกตามห้อง
5. ครูกด “ส่งแจ้งเตือน 7 คน”
6. แสดง loading process
7. เปลี่ยน drawer เป็น success state
8. ครูกดปิด

### กลับไปหน้าแผนการสอน

จากหน้า `ติดตามการบ้าน` หรือ `รายงานสรุปการบ้าน`:

- กดเมนู `ชั้นมัธยมศึกษาปีที่ 5`
- หรือกดเมนู `ม. 5/1`
- ระบบเรียก `showLessonPlans()`

## Data Logic

ข้อมูลเป็น mock data ใน `js/script.js`

แหล่งข้อมูลหลัก:

- `lessons`: รายการแผนการสอน
- `rooms`: รายการห้องเรียน
- `assets`: ไฟล์ประกอบแผนการสอน
- `unopenedStudentsByRoom`: รายชื่อนักเรียนที่ยังไม่เปิดดู
- `extraHomework`: การบ้านเพิ่มเติมสำหรับตารางสรุป

ตัวอย่าง logic การคำนวณ:

- จำนวนห้องที่เลือก = `getSelectedRooms().length`
- จำนวนนักเรียนที่ส่งถึง = sum ของ `room.students`
- Open rate รายห้อง = `opened / total students * 100`
- ห้อง ม.5/2 มี open rate `28/31 = 90.3%`
- ห้อง ม.5/1 มี open rate `28/32 = 87.5%`

หมายเหตุ:

- ถ้าจะใช้คำว่า “เปิดดูเร็วกว่า” ต้องมี timestamp เฉลี่ยของการเปิดดู
- ถ้ามีแค่จำนวนเปิดดู ควรใช้คำว่า “มีอัตราเปิดดูสูงกว่า”

## UX Rules สำคัญ

- ระบบต้องช่วยครูทำงานเร็วขึ้น ไม่เพิ่มขั้นตอนที่ไม่จำเป็น
- CTA ต้องอยู่ในตำแหน่งที่กดง่าย โดยเฉพาะ drawer footer
- คำว่า “ดูนักเรียนที่ยังไม่เปิดดู” เหมาะสมและควรเก็บไว้ เพราะครูเข้าใจทันที
- Action ที่มีผลกับนักเรียน เช่น ส่งการบ้านหรือส่งแจ้งเตือน ควรมี loading process
- หลัง action สำเร็จ ควรเปลี่ยน state ใน drawer ไม่ใช้ alert อย่างเดียว
- รายงานควรเชื่อมกับประโยชน์ของโรงเรียนและ Platform
- หลีกเลี่ยงการแสดงสถานะที่ไม่สอดคล้องกับ business logic เช่น “ยังไม่ส่ง” ในระดับนักเรียน เมื่อระบบส่งทั้งห้อง

## Responsive Rules

- Table view ใช้กับ desktop
- Card view ใช้กับ mobile
- Drawer ต้องเต็มความกว้างบน mobile และจำกัด `max-w-[440px]` บน desktop
- ปุ่มหรือ label ยาวต้องไม่ล้น container
- Sidebar collapse ต้องทำให้ content area dynamic เต็มพื้นที่

## Code Notes

ฟังก์ชันสำคัญใน `js/script.js`:

- `renderLessons()`: render lesson card list
- `renderRoomPicker()`: render room picker ใน drawer
- `openAssignmentDrawer()`: เปิด drawer ส่งการบ้าน
- `openSuccessDrawer()`: เปิด drawer success
- `openUnopenedStudentsDrawer()`: เปิด drawer นักเรียนที่ยังไม่เปิดดู
- `setAssignmentLoading()`: toggle loading state ตอนส่งการบ้าน
- `setReminderState()`: toggle list/loading/success ใน reminder drawer
- `sendReminderToUnopenedStudents()`: จำลองการส่งแจ้งเตือน
- `showDashboard()`: ไปหน้า “ติดตามการบ้าน”
- `showHomeworkReport()`: ไปหน้า “รายงานสรุปการบ้าน”
- `showLessonPlans()`: กลับหน้าแผนการสอน
- `setSidebarCollapsed()`: toggle sidebar
- `toggleGradeGroup()`: พับ/กางเมนูชั้นเรียนใน sidebar
- `openPreviewModal()`: เปิด modal ดูตัวอย่างไฟล์ประกอบแผนการสอน
- `renderPreviewModal()`: render preview viewer, sidebar summary, และปุ่ม download ตาม tab ที่เลือก
- `renderPptxPreviewPage()`: render หน้า A4 preview จาก mock data/asset ของไฟล์ `Modern_Education_Mockup_A4.pptx`
- `downloadFile()`: download ไฟล์ทั้งชุดหรือไฟล์ราย tab
- `copyWebToolUrl()`: คัดลอก URL เครื่องมือบนเว็บและแสดง toast
- `openWebToolUrl()`: เปิด URL เครื่องมือบนเว็บใน browser tab ใหม่
- `openHelpModal()`: เปิด modal Q/A วิธีใช้งานสำหรับครู
- `renderDashboardTables()`: render table/card ใน dashboard

## QA Checklist ก่อนส่งต่อ

- เปิด `index.html` ได้โดยไม่ต้อง run server
- Font Prompt โหลดได้
- Material Symbols โหลดได้
- หน้าแผนการสอนแสดง card ไม่ใหญ่เกินไป
- กดส่งการบ้านแล้วเปิด drawer ได้
- กด submit แล้วมี loading ก่อน success
- กดดูสถานะแล้วไปหน้า `ติดตามการบ้าน`
- กด “ดูนักเรียนที่ยังไม่เปิดดู” แล้ว drawer เปิด
- กดส่งแจ้งเตือนแล้วมี loading และ success state
- Sidebar collapse แล้ว content ขยายเต็มพื้นที่
- เมนูชั้นเรียนใน sidebar พับ/กางได้ และเปิดเฉพาะชั้น active เป็น default
- ปุ่ม “ต้องการความช่วยเหลือ?” เปิด modal Q/A ได้ และปิดได้ด้วย X, เข้าใจแล้ว, Esc
- ปุ่ม “ดูตัวอย่าง” เปิด full-screen preview modal ได้
- ใน preview modal ปุ่ม header “ดาวน์โหลดแผนทั้งหมด” ต้อง download ชุดแผนทั้งหมด
- ใน preview modal ปุ่ม download ราย tab ต้องเปลี่ยนตามประเภทไฟล์ เช่น PDF, PPTX
- Tab “เครื่องมือบนเว็บ” ต้องแสดง URL, ปุ่มคัดลอกลิงก์, toast “คัดลอกลิงก์แล้ว”, และปุ่มเปิดลิงก์ภายนอก
- Preview modal ต้องไม่แสดง status ที่ไม่มีที่มาจากระบบ เช่น “พร้อมใช้งาน”
- Mobile view ไม่ล้น horizontal
- Metadata และ description ใช้ขนาด 12px และน้ำหนักบาง
- Primary CTA ไม่มี gradient

## อัปเดตล่าสุด: Preview Modal และ Sidebar

### Sidebar สำหรับครู

Sidebar ถูกปรับให้สื่อสารกับครูที่ไม่ถนัดเทคโนโลยีมากขึ้น:

- เปลี่ยน wording จากเมนูเชิงระบบเป็นภาษางานของครู เช่น `คลังสื่อสำหรับครู`, `ติดตามการบ้าน`, `รายงานสรุป`
- เพิ่มคำอธิบายสั้นใต้เมนู เพื่อช่วยให้ครูเข้าใจว่ากดแล้วไปทำอะไร
- แยกกลุ่มเมนูเป็น `เมนูหลัก`, `ห้องเรียนที่ใช้งาน`, `งานการบ้าน`
- เพิ่ม `ชั้น ม.6` พร้อมห้อง `ม.6/1`, `ม.6/2`, `ม.6/3`
- ห้องเรียนเป็น child ของชั้นเรียน: ขนาดเล็กกว่า, เยื้องเข้า, มีเส้น parent-child บาง ๆ
- Parent ชั้นเรียนพับ/กางได้ทุกชั้นผ่าน `data-grade-toggle`
- Default เปิดเฉพาะชั้น active (`ชั้น ม.5`) และปิดชั้นที่ผู้ใช้ยังไม่ได้กด (`ชั้น ม.6`) เพื่อไม่ให้ sidebar แน่น
- Sidebar collapse ยังต้องทำให้ content ขยายเต็มพื้นที่เหมือนเดิม

### Help Modal

กล่อง `ต้องการความช่วยเหลือ?` เปลี่ยนเป็นปุ่มเปิด modal Q/A วิธีใช้งานสำหรับครู:

- อธิบาย flow เริ่มต้นแบบ 4 ขั้นตอน: เลือกห้อง, ดูตัวอย่าง, ส่งการบ้าน, ติดตามการเปิดดู
- มี Q/A เช่น `ดูตัวอย่างใช้ทำอะไร?`, `ส่งการบ้านแล้วนักเรียนเห็นอะไร?`, `ติดตามการบ้านดูตรงไหน?`
- ปิดได้ด้วยปุ่ม X, ปุ่ม `เข้าใจแล้ว`, และปุ่ม Esc
- ใช้เพื่อช่วยครูโดยไม่รบกวน flow หลัก

### Preview Modal

ปุ่ม `ดูตัวอย่าง` ใน lesson card เปิด full-screen modal:

- Header modal แสดง title แผนการสอนที่กำลังดู
- ปุ่ม header `ดาวน์โหลดแผนทั้งหมด` หมายถึง download ชุดแผนการสอนทั้งหมด ไม่ใช่ไฟล์ของ tab ปัจจุบัน
- Tabs ดึงจาก `assets` ได้แก่ ไฟล์เนื้อหา, ใบความรู้, สไลด์, ใบงาน, เครื่องมือบนเว็บ
- แต่ละ tab มี action ของตัวเอง:
  - ไฟล์เนื้อหาแผนการสอน: `ดาวน์โหลด PDF`
  - ไฟล์ใบความรู้: `ดาวน์โหลด PDF`
  - ไฟล์สไลด์นำเสนอ: `ดาวน์โหลด PPTX`
  - ไฟล์ใบงาน: `ดาวน์โหลด PDF`
  - เครื่องมือบนเว็บ: แสดง URL, คัดลอกลิงก์, เปิดลิงก์ภายนอก
- ห้ามใช้ status ที่ไม่มีที่มาจากระบบ เช่น `พร้อมใช้งาน` หรือ `พร้อมใช้` เพราะอาจทำให้ครูเข้าใจว่าไฟล์ถูก approve แล้ว

### Modern Education Mockup Preview

ไฟล์ source ใหม่:

- Source: `/Users/techthaiban/Work/a-cheive/Mockup 2.0/public/Modern_Education_Mockup_A4.pptx`
- Copy ใน prototype: `assets/preview/Modern_Education_Mockup_A4.pptx`
- Extracted images: `assets/preview/image1.png`, `image2.png`, `image3.png`

Preview modal ใช้ไฟล์นี้แทนเนื้อหา text-only เดิม:

- พื้นที่กลางเป็น A4 preview viewer จำนวน 5 หน้า
- ข้อมูล metadata เช่นชื่อไฟล์, ประเภท, จำนวนหน้า ย้ายไป sidebar ขวา
- พื้นที่กลางไม่ควรมีหัว `Preview file / filename` ใหญ่ ๆ เพราะรบกวนพื้นที่ที่ผู้ใช้ต้องการดูเนื้อหา
- Sidebar ขวาแสดงข้อมูลประกอบสำหรับครู เช่น รายละเอียดไฟล์, สรุปสำหรับครู, เป้าหมาย/กิจกรรม/หลักฐาน และสิ่งที่ครูทำต่อได้

### Web Tool Tab

สำหรับ tab `เครื่องมือบนเว็บ`:

- URL ที่ใช้ตอนนี้: `https://a-chieve.org/doll-activity/map`
- แสดง URL ใน input readonly
- มีปุ่ม `คัดลอกลิงก์`
- เมื่อคัดลอกแล้วแสดง toast message: `คัดลอกลิงก์แล้ว`
- ปุ่มเดิม `ดาวน์โหลดลิงก์` ถูกเปลี่ยนเป็น `เปิดลิงก์ภายนอก`
- ปุ่ม `เปิดลิงก์ภายนอก` ใช้ `window.open(webToolUrl, "_blank", "noopener,noreferrer")`
- Alignment ของ URL input และปุ่มต้องอยู่แนวเดียวกัน โดย grid ใช้ `lg:items-end` และ input/button ใช้ `h-10`

## แนวทางพัฒนาต่อ

- เพิ่ม real routing หรือ hash routing เพื่อให้แชร์ URL แต่ละหน้าได้
- เชื่อม API สำหรับ assignment, classroom, student open event
- เพิ่ม timestamp จริงสำหรับ time-to-open หากต้องการ insight เรื่อง “เร็วกว่า”
- เพิ่ม export report จริงแทน alert prototype
- เพิ่ม filter ตามห้องเรียน, สัปดาห์, สถานะการเปิดดู
- เพิ่ม permission role: ครู, หัวหน้าระดับ, ผู้บริหารโรงเรียน
- เพิ่ม analytics สำหรับโรงเรียน เช่น active classes, open rate trend, follow-up history
