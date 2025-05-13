# 🌐 Full Stack App Template (React + Tailwind + Node.js + MySQL)

This is a simple full stack starter template using:

- **Frontend:** React.js + Tailwind CSS
- **Backend:** Node.js + Express.js
- **Database:** MySQL

🔐 Includes user authentication (register, login, logout), session handling, and a clean frontend/homepage flow with welcome message.

---

## ⚙️ Features

- ✅ Register/Login with session authentication
- ✅ Display logged-in user’s name on homepage
- ✅ Logout with redirect
- ✅ React Router setup
- ✅ Axios for HTTP requests
- ✅ Tailwind CSS styling
- ✅ Fully connected to MySQL
- ✅ Node.js backend ready to use

---

## 📁 Folder Structure

```
project-root/
├── backend/
│   ├── db.js
│   ├── routes/
│   │   └── auth.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/muvunyidv/SERN-template.git
cd SERN TEMPLATE
```

---

## 🔧 Backend Setup

### Navigate to the `backend` folder:

```bash
cd backend
```

### Install Dependencies

```bash
npm install express cors mysql express-session
npm install  nodemon
```

### Your `package.json` should include:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### MySQL Configuration

In `db.js`, update:

```js
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myapp",
});
```

### Create the Database and Table

Run in MySQL:

```sql
CREATE DATABASE IF NOT EXISTS myapp;

USE myapp;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);
```

### Start Backend Server

```bash
npm run dev
```

Expected output:

```
MySQL Connected
Server running on port 5000
```

---

## 🎨 Frontend Setup

### Navigate to the `frontend` folder:

```bash
cd ../Frontend
```

### Install Dependencies

````bash
npm install
npm install axios react-router-dom```

### Tailwind Setup
npm install tailwindcss @tailwindcss/vite


### Start the Frontend

```bash
npm run dev
````

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🔁 Flow Summary

1. **Register** → `/`
2. Redirects to **Login** → `/login`
3. On success, goes to **Home** → `/home`
4. Displays welcome message with username
5. **Logout** takes you back to Login

---

## 📦 Dependencies Used

### 🔙 Backend

- `express`
- `mysql`
- `cors`
- `express-session`
- `nodemon` (dev)

### 🔜 Frontend

- `react`
- `react-router-dom`
- `axios`
- `tailwindcss`, `postcss`, `autoprefixer`

---

## 🛠 Optional Improvements

- Add route protection with middleware
- Hash passwords using `bcrypt`
- Use JWT instead of sessions
- Store sessions in DB or Redis
- Add email verification, password reset

---

## 🧪 Stack Versions

- Node.js v18+
- MySQL v8+
- React v18+
- Tailwind CSS v3+
- React Router v6+

---

## 🤝 License

MIT — free to use, modify, and learn.
