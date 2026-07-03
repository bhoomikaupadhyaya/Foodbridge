# Software Requirements Specification (SRS)

# FoodBridge – AI-Powered Surplus Food Redistribution Platform

## 1. Introduction

### 1.1 Purpose

FoodBridge is a web-based application that connects food donors such as restaurants, hotels, event organizers, and individuals with NGOs that distribute food to people in need. The platform aims to reduce food waste by providing an efficient and transparent food donation process.

### 1.2 Scope

The application enables donors to post surplus food, NGOs to discover and accept donations, volunteers to assist with deliveries, and administrators to manage the platform. The system also provides location-based matching, notifications, and analytics to improve the donation process.

### 1.3 Objectives

- Reduce food wastage.
- Connect donors with nearby NGOs.
- Simplify food donation management.
- Increase transparency in food distribution.
- Maintain a secure and user-friendly platform.

---

# 2. Users

The system consists of four user roles.

### Donor

- Register and log in.
- Create food donation requests.
- Upload food images.
- View donation history.
- Track donation status.

### NGO

- Register and log in.
- View available donations.
- Accept donations.
- Manage received donations.

### Volunteer

- View assigned deliveries.
- Update delivery status.
- View delivery history.

### Admin

- Manage users.
- Verify NGOs.
- Monitor donations.
- View analytics.
- Block or remove users if required.

---

# 3. Functional Requirements

### Authentication

- User Registration
- User Login
- Logout
- Password Encryption
- JWT Authentication

### Donation Module

- Add Donation
- Edit Donation
- Delete Donation
- Upload Food Images
- View Donation Details

### NGO Module

- Browse Nearby Donations
- Accept Donations
- View Donation History

### Volunteer Module

- View Assigned Deliveries
- Update Delivery Status

### Admin Module

- User Management
- NGO Verification
- Analytics Dashboard

---

# 4. Non-Functional Requirements

- Secure Authentication
- Responsive Design
- Fast Response Time
- Scalable Architecture
- Data Privacy
- Easy Navigation
- Reliable Performance

---

# 5. Technologies Used

## Frontend

- React.js
- TypeScript
- Tailwind CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JWT
- bcrypt

## Cloud

- Cloudinary
- MongoDB Atlas

## Other Tools

- Git
- GitHub
- Postman
- VS Code

---

# 6. Future Enhancements

- AI-based food categorization.
- AI recommendation of nearby NGOs.
- Real-time donation tracking.
- Push notifications.
- QR code verification.
- Mobile application.

---

# 7. Expected Outcome

The FoodBridge platform will provide an efficient solution for connecting food donors and NGOs, reducing food waste while helping communities in need through a secure, scalable, and easy-to-use web application.