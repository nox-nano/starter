# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 application using Nuxt Content for content management, built for "Expimmo" - a real estate expertise business. The application features a content-driven architecture with Vue components and Markdown-based content.

## Technology Stack

- **Framework**: Nuxt 3 with Nuxt Content module
- **Styling**: Tailwind CSS 4.x with DaisyUI components
- **Content**: Markdown files with custom Vue components
- **Package Manager**: bun 

## Development Commands

```bash
# Install dependencies (preferred)
bun install

# Development server (localhost:3000)
bun dev

# Build for production
bun build

# Preview production build
bun preview

# Generate static site
bun generate
```

## Architecture Overview

### Content Management
- **Content files**: Located in `/content/` directory as Markdown files
- **Content rendering**: Uses Nuxt Content's `ContentRenderer` component
- **Dynamic routing**: `app/pages/[...slug].vue` handles all content routes
- **Content structure**: Custom slots and components defined in Markdown using `::component` syntax

### Component Structure
- **Location**: `/app/components/`
- **Key components**:
  - `Hero.vue`: Landing page hero section with custom slots
  - `Services.vue`: Accordion-style services display
  - `Experts.vue`: Expert profiles with contact information
  - `Navbar.vue`, `Review.vue`, `PricingForm.vue`: Supporting UI components

### Styling System
- **Base styles**: `/assets/app.css` with Tailwind CSS imports
- **Theme**: Custom DaisyUI theme called "expimmo" with defined color palette
- **Responsive design**: Mobile-first approach with DaisyUI utilities

### Content Pattern
Content files use a custom component syntax where Vue components are embedded in Markdown:
```markdown
::hero
#heroName
Title Text

#heroText
Subtitle Text
::
```

This pattern allows content editors to populate component slots directly from Markdown files.

## File Structure Notes

- **Configuration**: `nuxt.config.ts` for Nuxt setup, `content.config.ts` for content management
- **Content**: Markdown files in `/content/` define page content with component slots
- **Components**: Vue components in `/app/components/` handle UI rendering
- **Assets**: Static files in `/public/`, CSS in `/assets/`

## Development Workflow

1. Content changes are made in `/content/` Markdown files
2. Component modifications in `/app/components/`
3. Styling adjustments in `/assets/app.css` or component-level styles
4. The app automatically rebuilds during development with `bun dev`