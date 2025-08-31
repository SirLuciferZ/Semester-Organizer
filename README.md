
# 📚 Class-Choose

Find the best class for this semester — fully Persian (Farsi) interface.

Class-Choose is a simple yet powerful web app that helps students build the best semester plan. Add courses, attach multiple professors/schedules to each course, and compare options at a glance — all in Persian.

---

## Table of contents

- [Features](#-features)
- [Getting started](#-getting-started)
  - [Installation](#-installation)
  - [Usage](#-usage)
- [File structure](#-file-structure)
- [Data persistence](#-data-persistence)
- [Future enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [راهنمای فارسی](#-راهنمای-فارسی)

---

## ✨ Features

- **Add classes:** Create class cards by name and manage all options in one place.
- **Multiple professors:** Attach several representations (professor + time) to the same class.
- **Detailed entries:** Store lesson code, professor name, class day, and start/end times.
- **Fully Persian:** The UI and data entry flow are designed for Persian (Farsi).

---

## 🚀 Getting started

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SirLuciferZ/Semester-Organizer
   cd Semester-Organizer
   ```
2. **Open the app:**
   - **Simple:** Open `index.html` in your browser.
   - **Recommended:** Serve locally (e.g., VS Code Live Server) for best behavior.

### 🧭 Usage

1. **Add a class:** Type the class name at the top and click Submit to create a class card.
2. **Add a representation:** On the class card, click Add Lesson and provide:
   - **Lesson code**
   - **Professor’s name**
   - **Day of class**
   - **Start and end time**
3. **Compare options:** Each class card lists all professors and schedules for quick comparison.

---

## 📂 File structure

```
Class-Choose/
├─ index.html        # App entry
├─ css/
│  └─ styles.css     # Styles and layout
├─ js/
│  ├─ app.js         # Core app logic and UI handlers
│  └─ storage.js     # LocalStorage helpers
├─ assets/
│  └─ icons/         # Icons and images
└─ README.md
```

---

## 💾 Data persistence

- **LocalStorage:** Saves classes and representations in the browser.
- **Auto-restore:** Data persists across refreshes and browser restarts.

---

## 📌 Future enhancements

- **Search and filters:** Filter by professor, day, or lesson code.
- **Conflict detection:** Warn when schedules overlap.
- **Export/import:** Backup and share data in JSON.
- **Mobile polish:** Better layout and interactions on small screens.

---

## 🤝 Contributing

1. **Fork the repository.**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "feat: add YourFeature"
   ```
4. **Push and open a PR:**
   ```bash
   git push origin feature/YourFeature
   ```

---

## 📜 License

- **MIT License:** See the [LICENSE](LICENSE) file for details.

---

## 🇮🇷 راهنمای فارسی

### ✨ ویژگی‌ها

- **افزودن کلاس:** با وارد کردن نام کلاس، کارت کلاس ساخته می‌شود و تمام گزینه‌های مربوط به آن را یکجا مدیریت می‌کنید.
- **چند استاد برای یک درس:** می‌توانید برای هر کلاس چند «ارائه» (استاد + زمان) اضافه کنید.
- **جزئیات کامل:** برای هر ارائه، **کد درس**، **نام استاد**، **روز برگزاری** و **ساعات شروع و پایان** را ثبت کنید.
- **رابط کاملاً فارسی:** محیط کاربری و ورود اطلاعات برای زبان فارسی طراحی شده است.

### 🚀 شروع به کار

#### نصب

1. **کلون کردن مخزن:**
   ```bash
   git clone https://github.com/SirLuciferZ/Semester-Organizer
   cd Semester-Organizer
   ```
2. **اجرا:**
   - **ساده:** فایل `index.html` را در مرورگر باز کنید.
   - **پیشنهادی:** با یک سرور محلی (مانند Live Server در VS Code) اجرا کنید.

#### استفاده

1. **افزودن کلاس:** نام کلاس را بالای صفحه وارد کرده و روی «ارسال» کلیک کنید تا کارت کلاس ساخته شود.
2. **افزودن ارائه:** روی کارت کلاس، دکمه «افزودن درس» را بزنید و اطلاعات زیر را کامل کنید:
   - **کد درس**
   - **نام استاد**
   - **روز برگزاری کلاس**
   - **ساعت شروع و پایان**
3. **مقایسه گزینه‌ها:** کارت هر کلاس همه‌ی استادها و زمان‌های موجود را نمایش می‌دهد تا راحت‌تر مقایسه کنید.

### 📂 ساختار فایل‌ها

```
Class-Choose/
├─ index.html        # صفحه اصلی برنامه
├─ css/
│  └─ styles.css     # استایل‌ها و چیدمان
├─ js/
│  ├─ app.js         # منطق اصلی و مدیریت رابط کاربری
│  └─ storage.js     # ذخیره‌سازی محلی (LocalStorage)
├─ assets/
│  └─ icons/         # آیکن‌ها و تصاویر
└─ README.md
```

### 💾 ذخیره‌سازی داده

- **LocalStorage:** همه‌ی کلاس‌ها و ارائه‌ها در مرورگر ذخیره می‌شوند.
- **بازیابی خودکار:** داده‌ها بعد از بستن و باز کردن مرورگر نیز باقی می‌مانند.

### 📌 برنامه‌های آینده

- **جست‌وجو و فیلتر:** بر اساس استاد، روز یا کد درس.
- **تشخیص تداخل:** هشدار در صورت هم‌پوشانی زمانی کلاس‌ها.
- **خروجی/ورودی:** پشتیبان‌گیری و اشتراک‌گذاری با JSON.
- **بهینه‌سازی موبایل:** تجربه بهتر روی صفحه‌های کوچک.

### 🤝 مشارکت

1. **فورک بگیرید.**
2. **شاخه بسازید:**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **ثبت تغییرات:**
   ```bash
   git commit -m "feat: add YourFeature"
   ```
4. **ارسال و ایجاد Pull Request:**
   ```bash
   git push origin feature/YourFeature
   ```

### 📜 مجوز

- **مجوز MIT:** فایل [LICENSE](LICENSE) را مطالعه کنید.
