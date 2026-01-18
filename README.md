# ShopHub 🛍️

A simple e-commerce web application built with **Next.js 16**, featuring a responsive UI, MongoDB integration, and authentication-protected functionality.

---

## 🌐 Live Website

🔗 **Live URL:** [https://shophub-fawn.vercel.app](https://shophub-fawn.vercel.app)

## 📋 Project Description

**ShopHub** is a Simple full-stack e-commerce platform that allows users to browse products, view detailed item information, and manage inventory.  
It features a clean, modern interface with authentication-protected routes for administrative tasks such as adding new items.

---

## 🚀 Setup & Installation

### Prerequisites

- Node.js **v18 or higher**
- MongoDB database
- npm or yarn package manager

---

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shophub
   ```

---

### Install dependencies

    ```bash
    npm install
    ```
---

### Configure environment variables

-Create a .env.local file in the root directory:
```bash
    MONGODB_URI=your_mongodb_connection_string
    NODE_ENV=development
```
---

 Run the development server
```bash
npm run dev
```
---

### Open the application

```bash
Navigate to:

http://localhost:3000

```
---

## 🔑 Demo Login Credentials

To access protected features (Add Item page), use the following demo credentials:

- **Email:** suvrobiswas@gmail.com  
- **Password:** 123456  

⚠️ **Note:** These are mock credentials for demonstration purposes only.

---

## 🗺️ Route Summary

| Route            | Description                                                         | Auth Required |
|------------------|---------------------------------------------------------------------|---------------|
| `/`              | Homepage with hero, features, categories, testimonials, FAQ         | No            |
| `/items`         | Browse all products                                                  | No            |
| `/items/[id]`    | View individual item details                                         | No            |
| `/login`         | User authentication page                                             | No            |
| `/add-item`      | Add new items to inventory                                           | Yes           |
| `/api/items`     | API endpoint for fetching/creating items                             | No            |

---

## ✨ Implemented Features

### 1. Authentication System
- Cookie-based session management  
- Protected routes for admin functionality  
- Login/logout with localStorage sync  
- Secure HTTP-only cookies (production-ready)

### 2. Product Management
- Display products from MongoDB (JSON fallback supported)  
- Add new items via authenticated form  
- Real-time validation using React Hook Form  
- Image URL validation with live preview  
- Category-based organization

### 3. Responsive Design
- Mobile-first design using Tailwind CSS  
- Hamburger menu for mobile navigation  
- Responsive grid layouts  
- Optimized images using Next.js Image

### 4. Database Integration
- MongoDB connection with pooling  
- Automatic ObjectId handling  
- Sorted results by creation date

### 5. Dynamic Pages
- Server-side rendering for item details  
- Dynamic metadata for SEO  
- Custom 404 page  
- Automatic route generation

### 6. UI Components
- Hero section with CTA  
- Feature highlights  
- Product categories  
- Customer testimonials  
- FAQ section  
- Newsletter subscription  
- Footer with links

### 7. Form Handling
- Comprehensive validation rules  
- Inline error messages  
- Loading states  
- Toast notifications  
- Automatic form reset on success

### 8. API Routes
- RESTful API structure  
- GET and POST endpoints  
- Proper error handling with status codes  
- JSON responses

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)  
- **Database:** MongoDB  
- **Styling:** Tailwind CSS 4  
- **Forms:** React Hook Form  
- **Notifications:** React Toastify  
- **Image Optimization:** Next.js Image  
- **Fonts:** Geist Sans & Geist Mono  

---

## 🔒 Security Features

- HTTP-only cookies  
- Server-side session validation  
- Protected admin routes  
- Environment variable configuration  
- Secure data handling

---

## 📱 Browser Support

- Chrome (latest)  
- Firefox (latest)  
- Safari (latest)  
- Edge (latest)

---

## 📄 License

This project is open-source and intended for educational and learning purposes.
