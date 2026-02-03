# ProcureAI Demo

A modern B2B SaaS demo website for AI-powered procurement and ERP solutions.
Built with Next.js (App Router), TypeScript, Tailwind CSS, SQLite, and Prisma.

## Features

- **Marketing Pages**: Home, Solutions, Industries, Platform, About.
- **Lead Generation**: Functional "Book a Demo" form that saves to local database.
- **Admin Dashboard**: View and manage demo requests at `/admin/leads`.
- **Local Database**: Uses SQLite (`dev.db`), no external dependencies required.

## Setup Instructions

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Setup Database**
    Initialize the SQLite database and generate the Prisma client:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **View the App**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Access

- Go to [http://localhost:3000/admin/leads](http://localhost:3000/admin/leads) to view submitted demo requests.
- No authentication is required for this demo version.

## Troubleshooting

- If you encounter database errors, try running `npx prisma db push` again to reset the schema.
- Ensure you have Node.js 18+ installed.
