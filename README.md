# User Data Fetching, Caching & Authentication with Auth0

## 🚀 Project Overview
This project demonstrates how to:
- Fetch user data from an API using axios
- Implement *local storage caching* to prevent unnecessary API calls
- Apply a *search filter* on fetched data
- Display user details dynamically

---

## 📦 Tech Stack
- *React.js* (UI)
- *Axios* (API calls)
- *Local Storage* (Caching)
- *Auth0* (Authentication)

---

## ⚡ Features

### 1️⃣ API Fetching with Caching Mechanism
- *Users list* is fetched from https://api.github.com/users.
- Data is stored in *Local Storage* with a *10-second cache expiry*.
- If the cache is valid, API is *not* called again.

### 2️⃣ Search Filter on Users
- Users can be searched using their **GitHub username (login).
- The search field filters users in real-time *without reloading the page*.

---

## 🎯 Extra Features

### 1️⃣ Fetch & Display Followers Count
- Each user’s *followers* and *followings* are fetched and displayed.
- This provides additional insights into user popularity.

### 2️⃣ Authentication with Auth0
- *Auth0* is used for user authentication.
- Users can log in/log out securely.
- The authentication UI also *customized* for the company .

---