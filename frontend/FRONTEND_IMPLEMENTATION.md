# SkillSync AI Frontend

This build keeps the existing React + Vite architecture and expands the frontend into the Career Intelligence dashboard.

## Added

- Complete dashboard experience matching the target reference layout
- Profile, Progress, Skills, Projects, Achievements, Recommendations, Resume Builder and Settings pages
- Reusable page headers and statistic cards
- Recharts-based progress analytics
- Responsive sidebar and mobile drawer behavior
- Expanded user mock data for all dashboard widgets
- Fixed dashboard/user service imports
- Fixed temporary registration flow wiring
- API base URL fallback for local development

## Backend integration

All pages currently use mock data from `src/data/userData.js`.

When backend authentication and APIs are ready, we will replace the temporary AuthContext implementation and wire the services to FastAPI.
