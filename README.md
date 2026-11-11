# AITUC Pathanapuram Official Website
(ഓൾ ഇന്ത്യ ട്രേഡ് യൂണിയൻ കോൺഗ്രസ് - പത്തനാപുരം)

A modern, responsive, Malayalam-first website for **AITUC Pathanapuram (All India Trade Union Congress)** built with React, Vite, Tailwind CSS, and Lucide Icons.

---

## 🚩 Features

- **Malayalam-First Typography & Content**: Integrated with `Noto Sans Malayalam` and clean English accents (`Inter`).
- **Brand Identity**: Signature AITUC red-themed palette (`#A71920`) with balanced contrast and professional aesthetics.
- **Mobile-First Responsive Design**: Fluid typography, responsive grids, touch-friendly CTA buttons, and a clean slide-in mobile navigation menu.
- **Poster-Aesthetic Hero**: Wide documentary imagery with gradient overlays, organizational badge, and dual CTA actions.
- **Interactive Lightbox Gallery**: Fullscreen image preview with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
- **External Form Integration**: Direct redirection to Google Forms for:
  - **Membership Registration**: `https://forms.gle/J96duk9a17ddkbZq7`
  - **Grievance / Complaint Submission**: Configurable via `siteConfig.js`.
- **Centralized Data & Configuration**:
  - `src/config/siteConfig.js` — Form links, contact numbers, email, and social links.
  - `src/data/leaders.js` — Committee leadership roster.
  - `src/data/activities.js` — Organizational programs & agitations.
  - `src/data/announcements.js` — Upcoming notices & events.
  - `src/data/gallery.js` — Photo gallery collection.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Badges
- **Language**: JavaScript (ESM / JSX)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/nehabmuhammed/AIUTC-PATHANAPURAM.git
cd AIUTC-PATHANAPURAM
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## ⚙️ Configuration

### Updating Google Forms & Contact Info
All external links and contact information are managed inside:
[`src/config/siteConfig.js`](src/config/siteConfig.js)

```javascript
export const siteConfig = {
  organisationName: "AITUC Pathanapuram",
  registrationFormUrl: "https://forms.gle/J96duk9a17ddkbZq7",
  complaintFormUrl: "YOUR_GOOGLE_COMPLAINT_FORM_URL",
  contact: {
    phone: "",
    email: "",
    address: "",
    whatsapp: "",
    facebook: "",
    instagram: "",
  },
};
```
