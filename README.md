# Arkitektura Digital Portfolio

This is a Next.js 13+ portfolio website for a fictional architecture studio, "Arkitektura Digital".

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- next-themes (for dark mode)
- lucide-react (for icons)
- react-leaflet (for interactive map)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/`: Contains all routes, layouts, and pages.
- `src/components/`: Shared and reusable components.
  - `ui/`: Basic UI elements (Button, Card, etc.).
  - `layout/`: Structural components (Header, Footer).
  - `sections/`: Larger components specific to page sections.
- `src/lib/`: Contains dummy data (`data.ts`), TypeScript types (`types.ts`), and utility functions.
- `src/providers/`: Context providers (e.g., `ThemeProvider`).
- `public/`: Static assets like images and icons.

## Features

- Responsive design (Mobile-First)
- Dark Mode
- Page transitions and animations
- SEO-friendly metadata
- Dummy data for content
- Contact form (setup for Formspree)
- Interactive map

## Customization

- **Content**: Update dummy data in `src/lib/data.ts`.
- **Images**: Replace placeholder images in `public/images/`.
- **Styling**: Modify Tailwind CSS configuration in `tailwind.config.ts` and global styles in `src/app/globals.css`.
- **Contact Form**: Update the Formspree endpoint in `src/components/sections/contact/ContactForm.tsx`.
