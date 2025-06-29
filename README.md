# 🪙 CryptoTracker

A modern, full-stack cryptocurrency tracker built with **Next.js 15 App Router**, **Tailwind CSS**, and **MongoDB**, featuring interactive charts, real-time data, and authentication.

---

## ✨ Features

- 🔍 **Explore Coins**  
  View live prices, candlestick charts, market cap, volume, and more using the **Mobula API** and **TradingView**.

- 📈 **Interactive Charts**  
  Candlestick and line charts rendered via **lightweight-charts** for fast and lightweight visualizations.

- 💾 **Favorites System**

  - Previously stored in localStorage, now fully persisted in **MongoDB**.
  - Favorite system is tied to authenticated users only.

- 🔐 **Authentication (JWT-based)**

  - Full authentication flow: **Register, Login, Logout**.
  - Built with **MongoDB** and **JWT** (via `jsonwebtoken`).

- ⚠️ **Protected Routes**

  - Coin detail pages are restricted to logged-in users.
  - Favorites sidebar and functionality are conditionally rendered.

- 🌙 **Dark Mode**  
  Toggle dark/light themes, fully responsive with **Tailwind**.

---

## 🗂️ Folder Structure

<pre>
├──📁 app/
│ ├──📁 api/ → All backend API routes (register, login, logout, etc.)
│ ├──📁 coin/ → Coin detail pages (protected)
│ ├──📁 login/ → Login page (UI)
│ ├──📁 register/ → Register page (UI)
│ ├──📄 layout.tsx → App-wide layout and providers
│ └──📄 page.tsx → Home page
├──📁 components/ → Reusable UI components
├── lib/
│ ├──📄 mongodb.ts → MongoDB connection logic
│ ├──📄 utils.ts → Utility functions
│ └──📁 validations/ → Zod validation schemas
├──📁 public/ → Static files
├──📁 stores/ → Zustand state management
├──📁 types/ → TypeScript interfaces & types
</pre>

---

## 🛠️ Tech Stack

- **Next.js 15 (App Router)**
- **Tailwind CSS**
- **MongoDB Atlas**
- **Zod (validation)**
- **JWT (authentication)**
- **Zustand (state management)**
- **Mobula API**
- **Lightweight-Charts**
- **TradingView Widget**

---

## 🔧 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/shubham-codee/crypto-tracker-nextjs.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add environment variables**

   Create a `.env.local` file in the root and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NEXT_PUBLIC_MOBULA_API=your_mobula_api_secret
   ```

4. **Run the development server**

    ```bash
    npm run dev
    ```