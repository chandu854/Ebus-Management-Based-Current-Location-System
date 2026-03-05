# Project Report: E-Bus Management System

## 1. Introduction
The **E-Bus Management System** aims to simplify and digitize the interaction between bus operators (admins/drivers) and commuters. It offers an easy-to-use user interface combined with a simulated backend module designed for learning, testing, and demonstrating core platform functionalities.

## 2. System Architecture
The application runs entirely on the client side, employing a multi-page web architecture. State persistence relies on the browser's `localStorage` to emulate a fully functional backend infrastructure.

### 2.1 Technical Stack
- **Structure:** HTML5 multi-page application (`index`, `login`, `register`, `admin`, `driver`, `user`, `search`).
- **Styling:** CSS3 (`style.css`), featuring a responsive layout and modern visuals.
- **Scripting:** Modular ES6 JavaScript (`auth.js`, `admin.js`, `driver.js`, `search.js`).
- **Data Persistence:** Mock Firebase SDK built over HTML5 `localStorage` (`firebase.js`).

## 3. Core Modules

### 3.1 Authentication Module (`auth.js`, `login.html`, `register.html`)
Handles secure registration and login logic using simulated Firebase `MockAuth`. Data and user sessions are stored securely in the browser, simulating JSON web tokens and user IDs.

### 3.2 Administrator Module (`admin.html`, `admin.js`)
Serves as the central command node. Instead of general registration, dedicated driver accounts are provisioned exclusively through the Admin Dashboard, preventing unauthorized individuals from posting bus data.

### 3.3 Driver Module (`driver.html`, `driver.js`)
Drivers log in and utilize this specific panel to publish data directly to the mock Firestore's "buses" collection. They declare critical journey properties like:
- Bus Number
- Bus Type (e.g., AC, Non-AC)
- Source
- Destination
- Contact Number

### 3.4 Search and User Module (`search.html`, `search.js`, `user.html`)
Focuses on passenger utility. Key features include:
- A form fetching data from the simulated Firestore using relational queries (matching `source` and `destination`).
- Implementation of the `navigator.geolocation` API to pinpoint the user's geographic coordinates if they wish to start a journey from their current location.

### 3.5 Storage/Mock SDK Module (`firebase.js`)
The backbone for data handling mimicking Google's Firebase Firestore and Firebase Auth APIs framework. Features functions such as `setDoc()`, `addDoc()`, `getDocs()`, and complex declarative rules like `query()` and `where()`. This ensures the transition to a real Firebase project in the future is virtually seamless.

## 4. Work Flow
1. **Setup:** System initializes.
2. **Provisioning:** Admin creates Driver Credentials.
3. **Data Entry:** Driver inputs bus fleet schedules.
4. **Data Retrieval:** Commuters search for available rides via destination fields or geolocation shortcuts.

## 5. Conclusion
The E-Bus Management application is a lightweight, responsive, and robust prototype. Its reliance on simulated cloud databases allows rapid development while laying optimal groundwork for potential scalability using actual BaaS (Backend-as-a-Service) providers.
