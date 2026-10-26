# AStro Js + Drizzle ORM + Turso + Cloudflare Workers Starter Kit

It's a simple starter template for building a full stack app with Astro, Drizzle ORM, Turso, and Cloudflare Workers.

## 🚀 Getting Started

1. Create .env and .dev.vars files in the root directory of the project for storing environment variables.
2. add TURSO_URL and TURSO_TOKEN to .dev.vars file, and just TURSO_TOKEN to .env file.
3. Both files are required for the project because the .dev.vars file is for local dev and the .env file is for local dev when running drizzle-kit script.
4. For remote environment variables use wrangler.jsonc file fot TURSO_URL and `npx wrangler secret put TURSO_TOKEN` for TURSO_TOKEN commands.

## How to test

1. Run `npm run dev` to start the dev server.
2. Open http://localhost:4321 to view the app ui and http://localhost:4321/api/debug to see sample api routes.

## Stack

- [Astro](https://astro.build/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Turso](https://turso.tech/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://react.dev/)

## Notes

- This project supposed to be a starter template, fork this project and start develop from there.
- This project use Drizzle ORM v1.0.0-rc.5, expect some instability and types errors, especially in the relations query.
