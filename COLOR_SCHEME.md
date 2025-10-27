# 🎨 Color Palette Documentation

## Current Color Scheme

The dashboard now uses a cohesive, professional color palette:

### Primary Colors
- **Dark Teal** (#174143) - `primary-dark`
  - Used for: Headers, main titles, important text
  - Creates strong contrast and professional appearance

- **Medium Teal** (#427A76) - `primary`
  - Used for: Buttons, borders, interactive elements
  - Main brand color

### Accent Colors
- **Peach/Orange** (#F9B487) - `accent-orange`
  - Used for: Logout button, delayed notes, highlights
  - Provides warm contrast

- **Cream** (#F5E5E1) - `accent-cream`
  - Used for: Backgrounds, subtle highlights, note sections
  - Creates soft, warm undertone

## Color Usage by Component

### Login Page
- Background: Gradient from `primary-dark` to `primary`
- Buttons: `primary` with hover `primary-dark`
- Demo credentials box: `accent-cream`
- Focus rings: `primary`

### Dashboard
- Background: `accent-cream`
- Header: `primary-dark`
- Logout button: `accent-orange`
- Card borders: `primary` (top border accent)
- Card titles: `primary-dark`

### User & Posts Manager
- Loading spinner: `primary`
- User cards: Border `accent-cream`, hover `primary`
- User names: `primary-dark`
- Usernames: `primary`

### Note Manager
- Add button: `primary` with hover `primary-dark`
- Normal priority: `accent-cream` background, `primary` border
- Important priority: Red theme (kept for urgency)
- Delayed priority: `accent-orange`
- Focus rings: `primary`

### Analytics
- Loading spinner: `primary`
- Stat boxes: Mix of `accent-cream`, `primary`, greens, reds, oranges
- Text: `primary-dark`

### Weather Widget
- Search button: `primary` with hover `primary-dark`
- Loading spinner: `primary`
- Weather card: Gradient from `primary` to `primary-dark`
- Labels: `accent-cream`
- Focus rings: `primary`

### User Detail Page
- Background: `accent-cream`
- Header: `primary-dark`
- Back button: `primary`
- Card borders: `primary` (top accent)
- Section titles: `primary-dark`
- Post/Todo borders: `accent-cream`
- Labels: `primary-dark`
- Checkboxes: `primary`

## Tailwind Configuration

The colors are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        dark: '#174143',
        DEFAULT: '#427A76',
      },
      accent: {
        orange: '#F9B487',
        cream: '#F5E5E1',
      },
    },
  },
}
```

## Usage in Components

```jsx
// Background
className="bg-accent-cream"
className="bg-primary"
className="bg-primary-dark"

// Text
className="text-primary-dark"
className="text-primary"
className="text-accent-cream"

// Borders
className="border-primary"
className="border-accent-cream"
className="border-accent-orange"

// Hover states
className="hover:bg-primary-dark"
className="hover:border-primary"

// Focus rings
className="focus:ring-primary"
```

## Design Philosophy

1. **Professionalism**: Dark teal creates a corporate, trustworthy feel
2. **Warmth**: Cream and peach add approachability
3. **Consistency**: All components use the same 4-color palette
4. **Accessibility**: High contrast between text and backgrounds
5. **Visual Hierarchy**: Darker colors for important elements

## CSS Linting Note

The `@tailwind` directives in `index.css` show warnings in some editors. These are harmless and have been suppressed in `.vscode/settings.json`:

```json
{
  "css.lint.unknownAtRules": "ignore",
  "scss.lint.unknownAtRules": "ignore"
}
```

The Tailwind directives work correctly at build/runtime.

---

Last updated: October 26, 2025
