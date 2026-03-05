# E-Bus Management System

## Overview
The **E-Bus Management System** is a web-based application designed to streamline the operations of a bus transit system. By providing a smart, simple, and reliable platform, the system connects passengers with real-time bus availability and enables administrators and drivers to manage bus routes effectively.

## Features

### 1. Role-Based Access Control
The application supports three distinct user roles:
- **Admin:** Has the authority to manage system operations, including the creation of driver accounts.
- **Driver:** Can post real-time bus information such as Bus Number, Type, Source, Destination, and Contact details.
- **User/Passenger:** Can securely search for available buses and track their routines.

### 2. Mock Firebase Backend
For simplicity and ease of local development, the system utilizes a **Mock Firebase Environment** (`firebase.js`). It fully simulates Firebase Authentication and Firestore using the browser's `localStorage` mechanism, removing the need for a live database setup during evaluation.

### 3. Geolocation Support
Users can quickly utilize their current location as their starting point (Source) by leveraging HTML5 Geolocation when searching for bus routes.

## Technologies Used
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **Backend / Data Storage:** LocalStorage-based Mock Firebase (Simulating Auth & Firestore)

## Getting Started

### Prerequisites
No specific backend software (e.g., Node.js, Python, or MySQL) is required, as the application runs entirely in the browser using localized storage mechanisms. You only need a modern web browser.

### Installation
1. Clone or download the repository to your local machine.
2. Open the project folder.
3. Simply double-click on `index.html` to run the application in your preferred web browser, or use an extension like **Live Server** in VS Code for a better experience.

### Usage
- Start at the **Home Page (`index.html`)**.
- **Admin Tools:** Navigate to `admin.html` to create a new driver account.
- **Driver Tools:** Navigate to `driver.html` to add active bus routes into the system.
- **User Searching:** Navigate to `search.html`. You can manually enter a Source and Destination or use the **Get Location** button to automatically fetch your coordinates. Click **Search** to view scheduled buses.

## License
This project is for educational and learning purposes.
