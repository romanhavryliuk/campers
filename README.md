# TravelTrucks

🇬🇧 English | [🇺🇦 Українська](./README.uk.md)

A camper rental web app built with **Next.js** and **TypeScript**. Users can browse a catalog of campers, filter them by location, body type, engine and transmission, view full details with a photo gallery and reviews, and submit a booking request.

Built as a front-end assignment for GoIT, backed by the real public API at [campers-api.goit.study](https://campers-api.goit.study).

## Features

### Home page
- Hero banner with a "View Now" call-to-action leading into the catalog.

### Catalog page (`/catalog`)
- Filtering by location (free text), body type, engine and transmission (single-select), applied server-side via query params.
- "Load more" pagination — fetches 4 more campers at a time while keeping active filters, powered by TanStack Query's `useInfiniteQuery`.
- Empty state ("No campers found") with quick actions to clear filters or view all campers.
- Every card's "Show more" button opens the camper's details page in a new browser tab.

### Camper details page (`/catalog/[camperId]`)
- Opens in a new tab, as required by the assignment.
- Image gallery (main image + thumbnails) built with Swiper.
- Vehicle details: engine, transmission, form and amenities shown as icon badges, plus a specs table (length, width, height, tank, consumption).
- User reviews with a 5-star rating display.
- Booking form (name + email) with live validation and a success/error toast notification, submitted straight to the backend.

### Other
- Loading states, error boundaries and custom 404 pages for every route.
- Desktop-first layout, following the provided Figma mockup.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query) — data fetching and `useInfiniteQuery` pagination
- CSS Modules — styling
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — booking form validation
- [Swiper](https://swiperjs.com/) — image gallery
- [React Icons](https://react-icons.github.io/react-icons/) — icons
- [React Hot Toast](https://react-hot-toast.com/) — notifications
- [Axios](https://axios-http.com/) — HTTP client

## Project structure

```
src/
├── app/          # routes (Next.js App Router): pages, layouts, loading/error states
├── components/    # one folder per component (Component.tsx + Component.module.css)
├── hooks/         # TanStack Query hooks (catalog pagination, camper details, reviews, filters)
├── services/      # axios instance + API calls
├── schemas/       # Zod validation schemas
├── types/         # shared TypeScript types matching the backend contract
├── constants/     # filter options, icon/label lookup tables
└── utils/         # small formatting helpers
```

## Getting started

### Prerequisites

- Node.js 18.18+ (or 20+)

### Installation

```bash
npm install
```

### Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_API_BASE_URL=https://campers-api.goit.study
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Backend

The app consumes the public TravelTrucks API at `https://campers-api.goit.study` (Swagger docs at `/docs`) — no authentication required. See `src/services/` for all API calls.

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) — just set `NEXT_PUBLIC_API_BASE_URL` in the platform's environment variables.

## Author

**Roman Havryliuk**
- Email: [romanfest1221@gmail.com](mailto:romanfest1221@gmail.com)
- GitHub: [@romanhavryliuk](https://github.com/romanhavryliuk)
