
# 📂 Cloud Drive Clone

A simple yet powerful file manager built using **Node.js**, **Express**, **MongoDB**, and **Cloudinary**. This app allows users to securely upload, download, and delete files (PDFs, images, docs, etc.) to the cloud, with JWT-based authentication and a responsive interface.

---

## 🚀 FEATURES

- 🔐 User authentication with JWT
- 📤 Upload files to Cloudinary
- 📥 Download files securely (PDFs, images, docs)
- 🧹 Delete files from Cloudinary and MongoDB
- 🖼 Responsive UI built with TailwindCSS + EJS
- 📂 Supports multiple file types: PDF, PNG, JPG, DOCX, etc.
- 📁 Automatically handles Cloudinary `resource_type` logic

---

## 🛠️ TECHNOLOGIES USED

- Node.js
- Express.js
- MongoDB + Mongoose
- Cloudinary
- Multer + Cloudinary Storage
- JWT Authentication
- EJS Template Engine
- TailwindCSS
- Flowbite + RemixIcon

---

## 🔧 HOW TO USE

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cloud-drive-clone.git
cd cloud-drive-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root folder and add:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret
```

> ⚠️ Do **not** upload this `.env` file to GitHub.

### 4. Run the App

```bash
nodemon app.js
```

Visit the app at [http://localhost:5000/home](http://localhost:5000/home)

---

## 📤 FILE UPLOAD WORKFLOW

- Files are uploaded to **Cloudinary** using `multer-storage-cloudinary`
- Stored in `drive-clone/` folder
- File info like `originalname`, `path`, and `user` saved in MongoDB
- File type is auto-detected using `path.extname()`
- On download:
  - PDFs, DOCX, ZIP, etc. are treated as `raw`
  - Images (PNG, JPG, etc.) are treated as `image`
  - A dynamic download URL is constructed using Cloudinary with `fl_attachment`
- This ensures **all files are downloaded**, not previewed

---

## 📁 FOLDER STRUCTURE

```
📂 project/
├── 📁 config/
│   ├── cloudinary.config.js
│   └── multer.config.js
├── 📁 middleware/
│   └── auth.js
├── 📁 models/
│   └── files.model.js
├── 📁 routes/
│   └── files.routes.js
├── 📁 views/
│   └── home.ejs
├── .env
├── app.js
└── README.md
```

---

## 📄 .env Example

```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
JWT_SECRET=your-jwt-secret
```

---

## 📌 LIVE DEMO

> Will add soon

---

## 🛡️ LICENSE

This project is open-source and free to use.

---

## 👨‍💻 Author

**Omsai Desai**  
📧 omsaidesai9@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/omsai-desai-a924a6300)  
💻 [GitHub](https://github.com/om8088)
