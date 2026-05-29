
# DrawSync

A real-time collaborative whiteboard where multiple users can draw, design, and brainstorm together — every change syncs instantly across all connected screens, no refresh needed.
## What it does
 
DrawSync lets teams collaborate on a shared canvas in real time. Open a board, invite your team, and everyone can draw and edit together — with live cursors showing exactly where each person is.
 
- **Real-time sync** — every stroke, edit, and move appears instantly for all connected users
- **Live cursors** — see every teammate's cursor moving on your screen in real time
- **Modes** -  selecting, moving, resizing, drawing, and more
- **5 drawing tools** — rectangles, ellipses, text, sticky notes, and freehand pen
- **Multi-select** — drag to select multiple layers, move and recolor them together
- **Undo / Redo** — full history with Ctrl+Z and Ctrl+Shift+Z
- **Team boards** — create and manage boards per organisation
- **Search & Favourites** — quickly find boards or star the ones you use most
- **Invite members** — add teammates to your organisation to collaborate on any board
---


## Screenshots

<img width="1916" height="870" alt="Dashboard" src="https://github.com/user-attachments/assets/f9b9992a-1f20-4ceb-8176-32fc9264b0e8" />
<img width="1918" height="863" alt="Organisation" src="https://github.com/user-attachments/assets/62545161-09cd-4484-9128-d21f0c18d73a" />
<img width="1918" height="871" alt="Canvas Board" src="https://github.com/user-attachments/assets/752b6d10-62bf-42ca-86f4-4a2ea591d9e7" />
<img width="1920" height="875" alt="Collab" src="https://github.com/user-attachments/assets/59b6f60b-b1f5-405e-a760-dd4501e101f1" />

## Tech Stack
 
| What | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Real-time | Liveblocks (CRDT Storage + Presence) |
| Database | Convex (Serverless) |
| Auth | Clerk (Org-level) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Client state | Zustand |
| Deployment | Vercel |

## Getting started

### 1. Clone the repository
 
```bash
git clone https://github.com/abhishekkumar011/DrawSync.git
cd draw-sync
```

### 2. Install dependencies
 
```bash
npm install
```

### 3. Set up environment variables
 
Create a `.env.local` file in the root of the project and add the following:
 
```env
CONVEX_DEPLOYMENT = your_deployment
NEXT_PUBLIC_CONVEX_URL = your_convex_deployment_url
NEXT_PUBLIC_CONVEX_SITE_URL = your_site_url
LIVEBLOCKS_SECRET_KEY= your_liveblocks_secret_key
```

Create a `.env` file in the root of the project and add the following:
 
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = your_clerk_publishable_key
CLERK_SECRET_KEY = your_clerk_secret_key
CLERK_JWT_ISSUER_DOMAIN = your_issuer_domain
```

### 4. Start the Convex backend
 
```bash
npx convex dev
```
 
This syncs your schema and starts the Convex backend locally.
 
### 5. Run the development server
 
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---
 
## Project structure
 
```
draw-sync/
├── app/
│   ├── (dashboard)/              # Dashboard — board listing, search, favourites
│   │   └── _components/          # Sidebar, board cards, search input
│   ├── board/[boardId]/          # Canvas page
│   │   └── _components/          # Canvas, toolbar, layers, cursors, selection
│   └── api/
│       └── liveblocks-auth/      # Liveblocks auth endpoint
├── components/                   # Shared UI components
├── convex/                       # Database schema, queries, mutations
│   ├── schema.ts                 # boards + userFavorites tables
│   ├── board.ts                  # Single board queries and mutations
│   └── boards.ts                 # Board listing, search, favorites
├── hooks/                        # Custom React hooks
├── lib/                          # Liveblocks setup, utilities
├── providers/                    # Convex, modal providers
├── store/                        # Zustand store (rename modal state)
├── types/
│   └── canvas.ts                 # All canvas types — layers, modes, state
└── liveblocks.config.ts          # Liveblocks presence and storage types
```
 
---

## How the canvas works
 
The canvas runs on a **7-mode state machine** that manages every user interaction:
 
| Mode | Triggered when |
|---|---|
| `None` | Default — nothing happening |
| `Pressing` | Mouse button held down, deciding intent |
| `SelectionNet` | Dragging to select multiple layers |
| `Translating` | Moving selected layers across canvas |
| `Inserting` | Placing a new layer on the canvas |
| `Resizing` | Dragging a corner handle to resize a layer |
| `Pencil` | Drawing a freehand path |

### Layer types
 
Every element on the canvas is a typed layer stored in Liveblocks:
 
```typescript
export enum LayerType {
  Rectangle,
  Ellipse,
  Path,     // Freehand pen strokes
  Text,
  Note,     // Sticky notes
}
```
 
Layers are stored in `LiveMap<string, LiveObject<Layer>>` inside Liveblocks Storage — meaning every change is automatically synced to all connected users in real time.
 
### Real-time presence
 
Each connected user has a `Presence` object tracked by Liveblocks:
 
```typescript
Presence: {
  cursor: { x: number; y: number } | null;  // Live cursor position
  selection: string[];                        // Selected layer IDs
  pencilDraft: [x, y, pressure][] | null;    // In-progress stroke
  penColor: Color | null;
}
```
 
This powers live cursors and shows which layers each user has selected.
 
---

## Contributing
 
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.
 
---
