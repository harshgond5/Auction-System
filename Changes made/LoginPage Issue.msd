# Responsive Changes — AuctionHub Client

> Documentation of responsive UI fixes applied in chat session (June 25, 2026).
> Scope: Login, Register, Home, and shared card styles.

---

## Problem Summary

### Login / Register layout break
- Clicking **Login** or **Register** from the home page caused the auth UI to break.
- Root cause: conflicting CSS in `src/index.css` applied a 2-column grid to `.auth-card`, overriding `src/styles/auth.css` form-card styles.
- Form fields were split into two columns instead of rendering as a single card.

### Mobile auth content hidden
- On screens ≤ 1100px, the left marketing panel (badge, title, features) was hidden via `display: none`.
- User requirement: on small screens, show **header → login/register card → feature content** in a vertical stack.

### Nested semantic HTML
- Page components used `<main>` inside `App.jsx`'s existing `<main>`, which could affect layout behavior.

---

## Files Changed

| File | Change type |
|------|-------------|
| `src/index.css` | Removed legacy auth styles; improved shared card responsiveness |
| `src/styles/auth.css` | Auth layout fixes + mobile stack order |
| `src/pages/Login.jsx` | Split content sections; replaced `<main>` with `<div>` |
| `src/pages/Register.jsx` | Split content sections; replaced `<main>` with `<div>` |
| `src/pages/Home.jsx` | Replaced `<main>` with `<div>` |

---

## Change Details

### 1. `src/index.css`

#### Removed legacy auth block (Section 12)
Deleted conflicting global styles that were breaking Login/Register:

- `.auth-page` — `display: grid; place-items: center`
- `.auth-card` — `display: grid; grid-template-columns: 1fr 1fr`
- `.auth-side`, `.auth-form-wrap`, `.auth-title`, `.auth-text`

Also removed responsive overrides at 992px that forced `.auth-card { grid-template-columns: 1fr }`.

**Why:** Login/Register use dedicated styles in `auth.css`. Global rules in `index.css` were loaded first and leaked `display: grid` onto the form card.

#### Shared card improvements
```css
.card {
  min-width: 0;
  overflow-wrap: anywhere;
}

.auction-card {
  min-width: 0;
}
```

**Why:** Prevents grid/flex children from overflowing on narrow viewports.

---

### 2. `src/styles/auth.css`

#### Base auth page
```css
.auth-page {
  display: block;
  width: 100%;
  overflow-x: hidden;
}
```

**Why:** Overrides any residual centering/grid behavior; prevents horizontal scroll.

#### Auth card
```css
.auth-card {
  display: flex;
  flex-direction: column;
  padding: clamp(18px, 3vw, 30px);
  max-height: none;
  overflow: visible;
}
```

**Why:** Ensures the card is a single-column form container with fluid padding.

#### Register form grid
```css
.auth-form-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

**Why:** First/last name fields side-by-side on desktop; stacks to 1 column at 768px.

#### New structure classes
```css
.auth-header { margin-bottom: 32px; }
.auth-features { min-width: 0; }
```

**Why:** Separates marketing header from feature list for independent mobile reordering.

#### Mobile stack layout (≤ 1100px)
```css
.auth-grid {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.auth-content {
  display: contents;
}

.auth-header   { order: 1; }
.auth-card-wrap { order: 2; }
.auth-features  { order: 3; }
```

**Mobile order:**
1. Badge + title + subtitle (header)
2. Login / Register form card
3. Feature cards

**Why:** `display: contents` lets header and features participate in the parent flex order while the form card sits between them.

#### Removed
- `display: none` on `.auth-content` at 1100px and 1180px breakpoints
- Duplicate/conflicting 1180px media query block

#### Breakpoint summary

| Breakpoint | Behavior |
|------------|----------|
| > 1600px | Wider grid: `1fr 520px` gap |
| ≤ 1280px | Tighter grid columns; smaller title |
| ≤ 1100px | Single column stack: header → card → features |
| ≤ 768px | Reduced padding; feature cards compact; form stacks |
| ≤ 520px | Smaller badge/title; tighter gaps |

---

### 3. `src/pages/Login.jsx`

#### JSX structure change
Before:
```jsx
<div className="auth-content">
  <span className="auth-badge">...</span>
  <h1 className="auth-title">...</h1>
  <p className="auth-subtitle">...</p>
  <div className="auth-feature-list">...</div>
</div>
```

After:
```jsx
<div className="auth-content">
  <div className="auth-header">
    <span className="auth-badge">...</span>
    <h1 className="auth-title">...</h1>
    <p className="auth-subtitle">...</p>
  </div>
  <div className="auth-features">
    <div className="auth-feature-list">...</div>
  </div>
</div>
```

#### Semantic fix
- `<main className="auth-page">` → `<div className="auth-page">`

---

### 4. `src/pages/Register.jsx`

Same structural changes as Login:
- Split into `.auth-header` and `.auth-features`
- `<main>` → `<div>`

---

### 5. `src/pages/Home.jsx`

- `<main className="home-page">` → `<div className="home-page">`
- Avoids nested `<main>` inside `App.jsx` layout shell

---

## Layout Diagrams

### Desktop (> 1100px)
```
┌─────────────────────────────────────────────────────┐
│  auth-header          │                             │
│  auth-title           │      auth-card (form)         │
│  auth-subtitle        │                             │
│                       │                             │
│  auth-features        │                             │
│  (feature cards)      │                             │
└─────────────────────────────────────────────────────┘
         LEFT COLUMN              RIGHT COLUMN
```

### Mobile (≤ 1100px)
```
┌──────────────────────┐
│  auth-header         │  ← badge, title, subtitle
├──────────────────────┤
│  auth-card (form)    │  ← login / register
├──────────────────────┤
│  auth-features       │  ← feature cards
└──────────────────────┘
```

---

## Manual Verification Checklist

- [ ] Open `/login` on desktop — two-column layout (content left, form right)
- [ ] Open `/register` on desktop — same side-by-side layout
- [ ] Resize to 375px width on `/login` — order: header → form → features
- [ ] Resize to 375px width on `/register` — same vertical order
- [ ] Confirm no horizontal scroll on auth pages at any width
- [ ] Register form: first/last name side-by-side on desktop, stacked on mobile
- [ ] Home page renders correctly after `<main>` → `<div>` change
- [ ] Auction cards do not overflow grid on mobile (shared `.card` fix)

---

## Out of Scope (Not Documented)

- Vite `Permission denied` terminal fix (`node_modules/.bin/vite`)
- `yarn install` / Rolldown native binding recovery

---

## Notes for Future Work

- Auth styles now live exclusively in `src/styles/auth.css` — do not re-add `.auth-card` grid rules to `index.css`.
- If adding new auth breakpoints, keep the mobile order: **header (1) → card (2) → features (3)**.
- Consider extracting shared auth layout into a reusable `AuthLayout` component if more auth pages are added.
