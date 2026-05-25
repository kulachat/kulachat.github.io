# Career Content Filter Logic

เอกสารนี้สรุป logic ของตัวกรองในหน้า `career-content.html` สำหรับ prototype เท่านั้น  
ข้อมูลและ mapping ในไฟล์นี้ยังไม่ใช่ data model จริงของ production

## Data Source

ตอนนี้ข้อมูลอยู่ใน array `careerCategories` ภายใน `career-content.html`

แต่ละหมวดมี field สำคัญ:

```js
{
  name: 'วิศวกรรม ไอที และเทคโนโลยี',
  count: 20,
  tags: ['คอมพิวเตอร์', 'เหตุผล', 'โปรแกรม', 'เทคโนโลยี', 'ไอที'],
  filter: ['tech', 'subject', 'popular'],
  icon: 'memory',
  color: 'indigo',
  image: 'https://a-chieve.org/uploads/large_3_487322be97.png',
}
```

## Filter Tabs

ปุ่ม filter ใช้ค่า `data-filter` เพื่อเทียบกับ `category.filter`

| Tab label | `data-filter` | Logic |
|---|---:|---|
| ทั้งหมด | `all` | แสดงทุกหมวด ไม่เช็ก `category.filter` |
| ตามความชอบ | `interest` | แสดงหมวดที่มี `interest` ใน `category.filter` |
| ตามวิชาเรียน | `subject` | แสดงหมวดที่มี `subject` ใน `category.filter` |
| ยอดนิยม | `popular` | แสดงหมวดที่มี `popular` ใน `category.filter` |
| สร้างสรรค์ | `creative` | แสดงหมวดที่มี `creative` ใน `category.filter` |
| วิศวกรรม/ไอที | `tech` | แสดงหมวดที่มี `tech` ใน `category.filter` |
| ช่วยเหลือผู้คน | `people` | แสดงหมวดที่มี `people` ใน `category.filter` |

## Search Logic

Search ใช้ค่าในช่อง `careerSearchInput`

ขั้นตอน:

1. ตัดช่องว่างหัวท้าย
2. แปลงเป็นตัวพิมพ์เล็ก
3. แยกคำด้วย whitespace
4. เอาแต่ละคำไปเทียบกับข้อความรวมของ `category.name` และ `category.tags`

โค้ดหลัก:

```js
const searchTerms = careerSearchTerm
  .trim()
  .toLowerCase()
  .split(/\s+/)
  .filter(Boolean);

const searchableText = [category.name, ...category.tags].join(' ').toLowerCase();
const passesSearch = searchTerms.length === 0 || searchTerms.some(term => searchableText.includes(term));
```

หมายความว่า search เป็นแบบ `OR`:

- ค้นหา `ไอที` แล้วเจอหมวดที่ชื่อหรือ tag มีคำว่า `ไอที`
- ค้นหา `ช่าง กีฬา เกษตร` แล้วเจอหมวดที่ match อย่างน้อยหนึ่งคำ

## Combined Filter Logic

ผลลัพธ์ต้องผ่านทั้ง filter tab และ search

```js
const passesFilter = activeCareerFilter === 'all' || category.filter.includes(activeCareerFilter);
return passesFilter && passesSearch;
```

ตัวอย่าง:

- เลือก tab `ตามวิชาเรียน` และค้นหา `เคมี`
- ระบบจะแสดงเฉพาะหมวดที่มี `subject` ใน `filter`
- และ `name` หรือ `tags` มีคำว่า `เคมี`

## Initial State

ตอนเปิดหน้าแรก:

- `activeCareerFilter = 'all'`
- `careerSearchTerm = ''`
- rail ด้านบนแสดงเฉพาะหมวดที่มี `popular`
- copy แสดงเป็น `หมวดยอดนิยม`
- grid ด้านล่างแสดงทุกหมวด

เหตุผล: เพื่อไม่ให้หน้าแรกสื่อว่ามีการ filter แล้ว ทั้งที่ผู้ใช้ยังไม่ได้เลือกอะไร

## Filtered/Search State

เมื่อผู้ใช้เลือก tab หรือพิมพ์ search:

- rail เปลี่ยนเป็น compact results grid
- title เปลี่ยนเป็น `ผลลัพธ์ที่ตรงกับการค้นหา`
- section `หมวดอาชีพทั้งหมด` ถูกซ่อนไว้ชั่วคราว เพื่อลดการแสดงผลซ้ำ
- ปุ่ม `ล้างตัวกรอง` reset กลับไป initial state

## Current Limitations

- `filter` และ `tags` เป็น mock mapping ที่ใส่เองใน prototype
- ยังไม่มี backend taxonomy จริงสำหรับ interest/personality/subject/trending
- จำนวนอาชีพ (`count`) เป็น static value ใน prototype
- Search ยังเป็น simple substring match ไม่ได้รองรับ typo, synonym, stemming หรือ ranking

## Production Recommendation

ถ้าจะทำจริง ควรแยก taxonomy ออกเป็น data model เช่น:

```js
category.taxonomy = {
  careerGroup: 'career-category-4',
  interests: ['hands-on', 'analytical'],
  subjects: ['computer', 'math'],
  trends: ['popular', 'work-from-home'],
}
```

แล้วให้ filter UI map กับ taxonomy ที่ชัดเจนแทนการใช้ string tag แบบ prototype
