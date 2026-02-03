# ProcureAI - Technical Documentation

## 1. Technology Stack

### Frontend & Framework
*   **Next.js 16 (App Router)**: The core framework. We utilize the latest **App Router** for layout management (`layout.tsx`, `page.tsx`) and React Server Components (RSC) by default for performance.
*   **TypeScript**: Ensures type safety across the entire application, preventing runtime errors.
*   **Tailwind CSS**: Utility-first CSS framework for styling. Configuration is minimal (v4), handled via `postcss`.

### Backend & API
*   **Next.js API Routes**: Serverless functions located in `app/api/` (e.g., `app/api/demo-requests/route.ts`). These handle HTTP methods (GET, POST, DELETE).
*   **Node.js Runtime**: The environment executing the server-side code.

### Database Layer
*   **SQLite**: A serverless, self-contained SQL database engine. The entire database is stored in a single local file (`dev.db`). perfect for demos.
*   **Prisma ORM (v5)**: A type-safe Object-Relational Mapper. It serves as the bridge between TypeScript and the SQLite database.
    *   **Schema**: Defined in `prisma/schema.prisma`.
    *   **Client**: Auto-generated query builder (`prisma.demoRequest.create(...)`).

### Validation & Utilities
*   **Zod**: Schema declaration and validation library. Used in API routes to ensure incoming JSON data (like form submissions) matches expected formats (email, phone, etc.).
*   **Lucide React**: Modern, lightweight SVG icon library used for UI elements.
*   **clsx / tailwind-merge**: Utilities for constructing dynamic class strings conditionally.

---

## 2. Solution Architecture

### Directory Structure
```
/app
  /api              # Backend API Endpoints
    /demo-requests  # Handles CRUD for leads
  /admin            # Admin Dashboard routes
  /contact          # Public Contact page
  /solutions        # Product pages
  page.tsx          # Home Page
  layout.tsx        # Main Root Layout (Navbar/Footer)
/components
  /layout           # Reusable Layout components (Navbar, Footer)
  /ui               # Small UI atoms
/lib
  prisma.ts         # Singleton instance of Prisma Client
/prisma
  schema.prisma     # Database model definition
  dev.db            # Actual SQLite database file
```

### Data Flow (Example: Booking a Demo)
1.  **User Action**: User fills out form on `/contact` and clicks "Submit".
2.  **Client-Side**: React component captures data and sends a `POST` request to `/api/demo-requests`.
3.  **Server-Side (API View)**:
    *   The API Route receives the JSON body.
    *   **Zod** validates the data (checks if email is valid, name exists).
    *   **Prisma** inserts the validated data into the **SQLite** database (`dev.db`).
4.  **Response**: Server returns HTTP 201 (Created).
5.  **UI Update**: Frontend receives success and shows the "Request Received" message.

---

## 3. Database Schema
We rely on a single model defined in `Prisma`:

**Model: DemoRequest**
*   `id`: content-addressable unique ID (CUID).
*   `fullName`: String (Required).
*   `organization`: String (Required).
*   `email`: String (Unique identifier for contact).
*   `industry`: String (Dropdown selection).
*   `createdAt`: DateTime (Auto-generated timestamp).

---

## 4. Key Design Decisions for "Demo Mode"
*   **Local First**: We purposefully avoided cloud databases (Postgres/MySQL) to ensure the app runs 100% offline and requires zero setup for you.
*   **No Auth**: The Admin Portal (`/admin/leads`) is open. In a production app, this would be protected by NextAuth.js or Clerk.
*   **Hardcoded Assets**: Images and copy are static to ensure reliability during presentations.
