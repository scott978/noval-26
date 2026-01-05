# Novalé Static Site Export

This folder contains a static HTML/CSS/JS version of the Novalé website for WordPress import.

## Typography Hierarchy (7 Sizes)

| Class | Size | Usage |
|-------|------|-------|
| `text-3xl` | 56px | Hero H1 headings |
| `text-2xl` | 36px | Section H2 headings |
| `text-xl` | 24px | Subsection H3, card titles |
| `text-lg` | 20px | Large body, lead text |
| `text-base` | 16px | Body text |
| `text-sm` | 14px | Labels, buttons, small UI |
| `text-xs` | 12px | Captions, fine print |

## Files Included

- `css/styles.css` - All styles with CSS variables
- `js/main.js` - Interactive functionality
- `index.html` - Home page
- `contact.html` - Contact page
- `about.html` - About page

## WordPress Integration

1. Upload files to your WordPress theme or use a page builder
2. Add the Google Fonts link to your theme's `<head>`
3. Enqueue `styles.css` and `main.js` in your theme
4. Create pages and paste HTML content into each

## Images Required

Create an `images/` folder with:
- `project-bathroom.jpg`
- `project-kitchen.jpg`
- `project-laundry.jpg`
- `about-hero.jpg`
- Area images as needed

## Fonts Used

- **Cormorant Garamond** - Headings (serif)
- **Inter** - Body text (sans-serif)
