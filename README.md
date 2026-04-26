# SaveBite Frontend 🍽️

SaveBite is a React-based frontend prototype for a surplus food marketplace that helps restaurants, bakeries, cafes, and food businesses sell extra food at discounted prices or donate it instead of wasting it.

The platform is designed for students, budget-conscious users, and local communities who want affordable food while reducing food waste.

---

## 🚀 Problem We Are Solving

Every day, large amounts of fresh food go unsold and get wasted.

At the same time:

- Students want affordable meals  
- People seek nearby deals  
- NGOs need food support  
- Small businesses lose money on leftovers  

SaveBite connects these problems into one solution.

---

## 💡 Core Idea

Businesses can:

- List surplus food at discounted prices
- Attract nearby customers
- Reduce daily waste
- Donate extra food to NGOs/community groups

Users can:

- Discover nearby food deals
- Reserve meals before closing time
- Save money
- Support sustainability

---

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- JavaScript (ES6+)

---

## 📂 Project Structure

```text
savebite-frontend/
└── src/
    ├── assets/
    │   ├── images/
    │   └── logos/
    │
    ├── components/
    │   ├── common/
    │   │   ├── Button.jsx
    │   │   └── Loader.jsx
    │   │
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   │
    │   ├── home/
    │   │   ├── HeroSection.jsx
    │   │   └── FeaturedDeals.jsx
    │   │
    │   └── deals/
    │       └── DealCard.jsx
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── Deals.jsx
    │   └── NotFound.jsx
    │
    ├── routes/
    │   └── AppRoutes.jsx
    │
    ├── data/
    │   └── deals.js
    │
    ├── utils/
    │   └── constants.js
    │
    ├── styles/
    │   └── index.css
    │
    ├── App.jsx
    └── main.jsx
