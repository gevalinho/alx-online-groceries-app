🛍️ ALX Online Groceries App

A modern mobile groceries shopping app built with React Native + Expo + TypeScript + NativeWind, featuring a clean UI, functional shopping flow, Zustand state management, and integrated order modals (Checkout, Order Accepted, Order Failed).

This project is part of my ALX ProDev Frontend/React Native Program, showcasing advanced app structuring, state management, and user experience design for an e-commerce platform.

🚀 Table of Contents

Project Overview

Setup & Installation

Folder Structure

Key Features

Cart & Checkout Flow

Modal Integrations

Challenges & Solutions

Tech Stack

Next Steps

Author

🧭 Project Overview

The ALX Online Groceries App provides a seamless shopping experience where users can:

Browse groceries by category

View detailed product information

Add and remove items from the cart

Proceed to checkout

Receive visual feedback for successful or failed orders

Designed to follow modern UI/UX standards with a focus on clarity, accessibility, and smooth navigation.

⚙️ Setup & Installation
1. Clone the Repository
git clone git@github.com:gevalinho/alx-online-groceries-app.git
cd alx-online-groceries-app

2. Install Dependencies

Make sure you have Node.js ≥ 18 and Expo CLI installed.

npm install
# or
pnpm install

3. Run the App
Option 1: For same Wi-Fi
npx expo start

Option 2: For iPhone (recommended)
npx expo start --tunnel


Then scan the QR code in Expo Go or open manually via:

exp://<your-local-ip>:19000

4. TypeScript Configuration

tsconfig.json includes:

{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler",
    "paths": { "@/*": ["./*"] }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts",
    "nativewind-env.d.ts"
  ]
}

🗂 Folder Structure
app/
 ├── (home)/
 │   ├── shop.tsx
 │   ├── explore.tsx
 │   ├── favourite.tsx
 │   ├── cart.tsx
 │   ├── account.tsx
 │   ├── checkout.tsx
 │   ├── order-accepted.tsx
 │   ├── _layout.tsx
 ├── components/
 │   ├── modals/
 │   │    ├── CheckoutModal.tsx
 │   │    ├── OrderFailed.tsx
 │   │    ├── OrderAccepted.tsx
 ├── store/
 │   ├── cartStore.ts
 ├── assets/
 │   ├── images/
 │   ├── animations/
 ├── styles/
 │   ├── global.css

🌟 Key Features

✅ Product Listing & Categories

Displays fresh fruits, beverages, bakery, dairy, etc.

Category pages like Meat & Fish, Dairy & Eggs, Beverages

✅ Product Detail Page

Quantity increment/decrement

Add to cart button

Dynamic price updates

✅ Cart Management (Zustand)

Add/remove/update quantity

Total cost auto-calculation

Clear cart after successful checkout

✅ Modals & Transitions

Custom modals for checkout and error states

Animated transitions using Expo’s native modal support

✅ UI Consistency

Tailwind-based styling with NativeWind

ShadCN-inspired rounded elements and typography

Vector icons from Expo

🛒 Cart & Checkout Flow
🧩 Store (Zustand)

The cart system lives in store/cartStore.ts:

import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  addToCart: (item) => { ... },
  removeFromCart: (id) => { ... },
  clearCart: () => set({ items: [] }),
  getTotal: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));

💳 Checkout Modal

Located at components/modals/CheckoutModal.tsx
Includes sections for Delivery, Payment, Promo, Total, and T&C agreement.

When “Place Order” is pressed:

Simulates API delay

If success → clears cart and redirects to Order Accepted

If failure → triggers Order Failed modal with retry option

💥 Modal Integrations
✅ CheckoutModal

Elegant slide-up modal showing order summary and place order button.

✅ OrderAccepted

Displays success animation (using Lottie JSON) and navigation to “Track Order” or “Home”.

✅ OrderFailed

Displays friendly retry message with “Try Again” and “Back to Home” actions.

🧠 Challenges & Solutions
Challenge	Solution
iPhone not scanning Expo QR	Used expo start --tunnel instead of LAN
onClose undefined crash	Added prop typing and fallback defaults
SafeAreaView deprecated warning	Replaced with react-native-safe-area-context
react/jsx-runtime TypeScript error	Set moduleResolution: bundler in tsconfig.json
Too many bottom tabs showing	Restricted Tabs in (home)/_layout.tsx to only 4 (Shop, Explore, Cart, Account)
Cart “reduce undefined” error	Added default empty array fallback in Zustand store
🧰 Tech Stack
Category	Tools Used
Framework	Expo (React Native + TypeScript)
State Management	Zustand
Styling	NativeWind (TailwindCSS)
Navigation	Expo Router
Icons	@expo/vector-icons
Animation	Lottie for React Native
UI Components	Pressable, Modal, SafeAreaView
🔮 Next Steps

Integrate live payment gateway (Stripe or Paystack)

Add order history persistence (Firebase / SQLite)

Implement push notifications for order status

Include profile image upload and edit info features

🧑‍💻 Author

Geva-Eval Egbe
Frontend / Mobile Developer — ALX Software Engineering Program

🌐 LinkedIn

💻 GitHub

🏢 The ConduitBox

🏁 Summary

This project demonstrates a fully functional grocery app prototype—designed with clean code, responsive layouts, and modular architecture. It represents a professional-level mobile shopping experience built for performance, clarity, and scalability.


This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
