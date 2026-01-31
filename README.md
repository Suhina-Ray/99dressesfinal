99Dresses Revival – Visual Outfit Discovery Platform
🏁 Hackathon Context

This project was built as part of FAIL.exe – Startup Revival Hackathon, where teams analyze a failed or struggling startup and revive it with improved product logic, UI/UX, and technical feasibility.

Revived Startup: 99Dresses
Original Idea: Barter-based online fashion marketplace using virtual credits
Core Issue: Low engagement and poor user understanding of barter value

❌ Failure Analysis: Why 99Dresses Didn’t Work

99Dresses failed primarily due to the following reasons:

Abstract credit-based barter system
Users struggled to understand the real value of virtual credits.

Low engagement loop
Users only visited the platform when they wanted to exchange items, resulting in poor retention.

Lack of visual and social interaction
Fashion is inherently visual and expressive, but the platform focused on transactions rather than discovery.

Misalignment with Gen Z behavior
No creator culture, no inspiration-driven browsing, and no community-led interaction.

🔁 Revival Strategy: What Changed

We revived 99Dresses by shifting its core experience from transaction-first barter to visual-first fashion discovery.

Core Insight

Users understand fashion value better through outfit combinations, not abstract credits.

Revival Focus

Replace abstract barter with outfit-based visual value

Encourage engagement through community-created outfits

Use saved outfits as a signal of user intent and interest

This transformation makes the barter system intuitive without removing it.

✨ Features Implemented
1️⃣ Outfit Builder (Core Feature)

Inspired by the Clueless movie outfit selector.

Functionality:

Users can build outfits by selecting:

Tops

Bottoms

Shoes

Accessories

Only one item per category can be selected at a time

Selected items are displayed in a central outfit preview

Total “Barter Credits” are calculated (simulated)

Outfit status is shown as Unlockable

Purpose:
To convert abstract barter credits into clear, visual value.

2️⃣ Community Outfit Feed

Functionality:

Grid-based feed of community-created outfits (mock data)

Each outfit card displays:

Outfit image (placeholder)

Total credit cost

User actions:

❤️ Save outfit

🛍 View items used

Purpose:
To drive inspiration, discovery, and social engagement.

3️⃣ Saved Outfits (Favourites)

Functionality:

Users can save outfits they like

Saved outfits persist using localStorage

Users can view or remove saved outfits

Purpose:
To demonstrate user intent and future monetization potential.

🛠️ Tech Stack
Layer	Technology
Framework	React 18 + Vite
Language	TypeScript
Styling	Tailwind CSS
UI Components	shadcn/ui (Radix UI primitives)
State Management	React useState + localStorage
Routing	React Router
Package Manager	npm / bun
🧱 Project Architecture

The project follows a modular, component-driven architecture, allowing revival features to be added without rewriting the existing dashboard.

99dresses/swap-style/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui primitives
│   │   ├── Dashboard.tsx          # Main dashboard with tab navigation
│   │   ├── outfit-builder.tsx     # Outfit builder module
│   │   ├── explore-outfits.tsx    # Community outfit feed
│   │   ├── saved-outfits.tsx      # Saved outfits module
│   │   ├── Navbar.tsx             # Top navigation
│   │   ├── ItemCard.tsx           # Reusable clothing item card
│   │   └── ExchangeModal.tsx      # Simulated barter modal
│   │
│   ├── lib/
│   │   ├── clothing-data.ts       # Mock clothing & outfit data
│   │   └── utils.ts               # Utility functions
│   │
│   ├── hooks/
│   │   └── use-toast.ts           # Toast notifications
│   │
│   ├── pages/                     # Route-level components
│   ├── App.tsx                    # Root component with routing
│   ├── main.tsx                   # Vite entry point
│   └── index.css                  # Global styles + Tailwind
│
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── components.json
└── package.json

🔄 Data Flow Overview

This prototype is frontend-only and uses simulated data.

localStorage
    │
    ├── "99dresses-user-outfits"
    │       → Stores outfits created via the Outfit Builder
    │
    └── "99dresses-saved-outfits"
            → Stores IDs of favourited community outfits
                    │
                    ▼
            ┌─────────────────┐
            │   Dashboard     │
            └────────┬────────┘
                     │
        ┌────────────┼────────────┬─────────────┐
        ▼            ▼            ▼             ▼
 Outfit Builder   Explore Feed   Saved Outfits   Existing Pages

▶️ How to Run / Test the Project
1️⃣ Install dependencies
cd 99dresses/swap-style
npm install
# or
bun install

2️⃣ Start development server
npm run dev
# or
bun dev

3️⃣ Open in browser
http://localhost:5173


No backend or additional setup is required.

📸 Screenshots

(Add screenshots here if available)

Suggested:

Outfit Builder interface

Community Outfit feed

Saved Outfits page

🚀 Future Scope (Out of Hackathon Scope)

AI-powered outfit recommendations

Real-time barter transactions

Creator profiles and rankings

Brand-sponsored outfit challenges

Backend integration and authentication

✅ Conclusion

This project demonstrates how visual-first UX and community-driven discovery can revive a failed startup by addressing its original shortcomings while aligning with modern user behavior.

The prototype focuses on clarity, feasibility, and revival logic, making it suitable for evaluation within the FAIL.exe hackathon framework.
