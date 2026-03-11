![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)


# GitTrack

A modern developer analytics dashboard that analyzes GitHub profiles and visualizes developer activity, technology focus, and repository insights.

GitTrack fetches data directly from the GitHub API and transforms it into an interactive analytics dashboard with AI-generated developer insights and exportable reports.

---

## Preview

### Landing Page

![Landing Page](./Screenshots/Screenshot%202026-03-11%20at%205.53.22 AM.png/)

### Developer Dashboard

![Dashboard](./Screenshots//Screenshot%202026-03-11%20at%205.53.57 AM.pngreadme/dashboard.png)
![Dashboard2](./Screenshots/Screenshot%202026-03-11%20at%205.54.08 AM.png)

### AI Profile Analysis

![AI Analysis](./Screenshots/Screenshot%202026-03-11%20at%205.54.25 AM.png)

### Exported PDF Report

![PDF Export](./Screenshots/Screenshot%202026-03-11%20at%207.08.08 AM.png)

---

# Features

### GitHub Profile Analysis
Fetch and analyze any public GitHub profile.

- repository statistics
- language distribution
- project insights
- developer activity overview

---

### Developer Dashboard

Interactive analytics dashboard including:

- repository breakdown
- top repositories
- language distribution chart
- total stars, forks, and repo stats
- developer insights

---

### AI Developer Insights

Generate an AI analysis of a developer profile including:

- strengths
- development patterns
- stack focus
- summarized developer profile

Powered by an open-source model through **OpenRouter**.

---

### Export Dashboard as PDF

Export the full developer dashboard into a clean PDF report.

Useful for:

- developer portfolios
- hiring analysis
- technical profile review

---

### Modern UI

The interface was designed as a modern developer tool using:

- dark futuristic design
- neon accent colors
- smooth UI interactions
- responsive layouts

---

# Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Data & APIs

- GitHub REST API
- OpenRouter AI API

### Visualization

- Custom charts
- language distribution graphs
- analytics cards

### PDF Generation

- html2canvas
- jsPDF

---

## Project Architecture
<<<<<<< HEAD


=======
>>>>>>> 7d41ca4 (final tweaks edits)
```text
src
├─ app
│  ├─ api
│  │  └─ profile-analysis
│  │     └─ route.ts
│  ├─ users
│  │  └─ [username]
│  │     └─ page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components
│  ├─ dashboard
│  │  ├─ analytics-grid.tsx
│  │  ├─ dashboard-top-bar.tsx
│  │  ├─ developer-insights-card.tsx
│  │  ├─ export-analysis-pdf-button.tsx
│  │  ├─ language-distribution-card.tsx
│  │  ├─ profile-analysis-modal.tsx
│  │  ├─ profile-header.tsx
│  │  ├─ repository-table.tsx
│  │  ├─ stat-card.tsx
│  │  ├─ stats-grid.tsx
│  │  └─ top-repositories-card.tsx
│  ├─ ui
│  │  ├─ button.tsx
│  │  ├─ card.tsx
│  │  ├─ dialog.tsx
│  │  ├─ input.tsx
│  │  └─ table.tsx
│  ├─ dashboard-preview.tsx
│  ├─ footer.tsx
│  ├─ hero.tsx
│  └─ navbar.tsx
├─ lib
│  ├─ github.ts
│  ├─ map-github-user.ts
│  ├─ mock-user.ts
│  ├─ profile-analysis.ts
│  └─ utils.ts
└─ utils
   └─ helpers.ts
```
<<<<<<< HEAD


=======
>>>>>>> 7d41ca4 (final tweaks edits)

# How It Works

A user enters a GitHub username or profile link on the landing page.
GitTrack validates the username using the GitHub API.
If the user exists, the dashboard loads.
If the user does not exist, a friendly modal is displayed.
The application fetches:
   GitHub profile data
   repository data
   language usage statistics
   The raw GitHub data is transformed into a structured DeveloperProfile model using internal mapping utilities.

The dashboard renders AI analytics including:

repository statistics
language distribution visualization
top repositories
developer insights
Users can generate AI-powered developer insights, including:
profile summary
development patterns
strengths
stack focus
The dashboard can be exported as a single-page PDF report.

---

# Running Locally

Clone the repository

git clone https://github.com/mostafarawhy/gittrack.git

# Navigate to the project

cd gittrack

# Install dependencies

npm install

# Create

.env.local in root folder.


# Add your OpenRouter API key


OPENROUTER_API_KEY=your_key_here



# Run development server

npm run dev

# open
http://localhost:3000

---

# Example Usage

Enter any GitHub profile such as:

https://github.com/charlie


GitTrack will generate a developer analytics dashboard automatically.

---

Why I Built This

GitTrack was built as a practical project to explore modern frontend architecture and developer analytics tooling.

The goal was to combine:

API data transformation

modern dashboard UI

AI-generated insights

data visualization

exportable reports

Through this project I practiced:

Next.js App Router architecture

TypeScript in production

API integration patterns

component-driven UI architecture

AI integration

dashboard visualization

generating PDF reports from dynamic interfaces

This project also serves as a portfolio piece demonstrating how developer data can be transformed into meaningful insights.

# Future Improvements

- commit activity visualization
- GitHub contribution heatmap
- team comparison mode
- repository dependency analysis
- deeper AI developer insights

---

# Why I Built This

GitTrack was built as a practical project to explore modern frontend architecture and developer analytics tooling.

The goal was to combine:

API data transformation

modern dashboard UI

AI-generated insights

data visualization

exportable reports

Through this project I practiced:

Next.js App Router architecture

TypeScript in production

API integration patterns

component-driven UI architecture

AI integration

dashboard visualization

generating PDF reports from dynamic interfaces

This project also serves as a portfolio piece demonstrating how developer data can be transformed into meaningful insights.

# Author

Mostafa Rawhy
Frontend Developer

GitHub
https://github.com/mostafarawhy

LinkedIn
https://www.linkedin.com/in/mostafa-rawhy-b7ab522b2/
