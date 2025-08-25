# UI/UX Specifications - TantrumArt

## Design Philosophy

**Minimalist Elegance**: Let the artwork be the hero. The interface should fade into the background, providing a clean, gallery-like experience that showcases the art without distraction.

## Visual Design System

### Color Palette

```css
/* Primary Palette - Inspired by artist studios */
--color-charcoal: #2D3748;      /* Primary text, headers */
--color-graphite: #4A5568;      /* Secondary text */
--color-concrete: #718096;      /* Muted text, borders */
--color-canvas: #FFFFFF;        /* Background */
--color-paper: #F7FAFC;         /* Alternate background */

/* Accent Colors - Warm earth tones */
--color-terracotta: #ED8936;    /* Primary CTA, highlights */
--color-sienna: #DD6B20;        /* Hover states */
--color-ochre: #F6E05E;         /* Notifications, badges */

/* Semantic Colors */
--color-success: #48BB78;       /* Available artwork */
--color-error: #F56565;         /* Sold/Error states */
--color-info: #4299E1;          /* Information */

/* Dark Mode Palette */
[data-theme="dark"] {
  --color-charcoal: #F7FAFC;
  --color-graphite: #E2E8F0;
  --color-concrete: #CBD5E0;
  --color-canvas: #1A202C;
  --color-paper: #2D3748;
}
```

### Typography

```css
/* Font Stack */
--font-display: 'Playfair Display', Georgia, serif;        /* Headings */
--font-body: 'Inter', -apple-system, sans-serif;          /* Body text */
--font-mono: 'JetBrains Mono', 'Courier New', monospace; /* Code, prices */

/* Type Scale - Mobile First */
--text-xs: clamp(0.75rem, 2vw, 0.875rem);    /* 12-14px */
--text-sm: clamp(0.875rem, 2.5vw, 1rem);     /* 14-16px */
--text-base: clamp(1rem, 3vw, 1.125rem);     /* 16-18px */
--text-lg: clamp(1.125rem, 3.5vw, 1.25rem);  /* 18-20px */
--text-xl: clamp(1.25rem, 4vw, 1.5rem);      /* 20-24px */
--text-2xl: clamp(1.5rem, 5vw, 2rem);        /* 24-32px */
--text-3xl: clamp(2rem, 6vw, 3rem);          /* 32-48px */
--text-display: clamp(2.5rem, 8vw, 4rem);    /* 40-64px */

/* Font Weights */
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Spacing System

```css
/* 8-point Grid System */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Layout Grid

```css
/* Container Widths */
--container-xs: 20rem;     /* 320px */
--container-sm: 24rem;     /* 384px */
--container-md: 28rem;     /* 448px */
--container-lg: 32rem;     /* 512px */
--container-xl: 36rem;     /* 576px */
--container-2xl: 42rem;    /* 672px */
--container-3xl: 48rem;    /* 768px */
--container-4xl: 56rem;    /* 896px */
--container-5xl: 64rem;    /* 1024px */
--container-6xl: 72rem;    /* 1152px */
--container-7xl: 80rem;    /* 1280px */
--container-full: 100%;

/* Breakpoints */
--screen-xs: 320px;   /* Small phones */
--screen-sm: 640px;   /* Large phones */
--screen-md: 768px;   /* Tablets */
--screen-lg: 1024px;  /* Small laptops */
--screen-xl: 1280px;  /* Desktops */
--screen-2xl: 1536px; /* Large screens */
```

## Component Specifications

### Navigation Header

#### Mobile (320px - 767px)
```
┌────────────────────────────────┐
│ Logo              ≡ Menu       │ <- Fixed, 64px height
└────────────────────────────────┘

Hamburger Menu Overlay:
┌────────────────────────────────┐
│                     X Close     │
│                                 │
│        HOME                     │
│        GALLERY                  │
│        ABOUT                    │
│        CONTACT                  │
│                                 │
│     [Instagram] [Twitter]      │
└────────────────────────────────┘
```

#### Desktop (768px+)
```
┌─────────────────────────────────────────────────┐
│ Logo    Home  Gallery  About  Contact    [CTA]  │ <- Sticky on scroll
└─────────────────────────────────────────────────┘
```

### Hero Section

```
┌─────────────────────────────────────┐
│                                     │
│    [Parallax Background Image]      │ <- 100vh height
│                                     │
│         TANTRUMART                  │ <- Fade in animation
│    Contemporary Art Collection      │
│                                     │
│     [Explore Gallery] [Contact]     │ <- CTA buttons
│                                     │
│            ↓ Scroll                 │ <- Subtle bounce animation
└─────────────────────────────────────┘
```

### Gallery Carousel

```
Mobile View:
┌─────────────────────────────────────┐
│  ←  [   Current Image   ]  →        │ <- Touch swipe enabled
│                                     │
│  ● ○ ○ ○ ○                         │ <- Dot indicators
│                                     │
│  Artwork Title                      │
│  Medium, Year                       │
│  [View Details]                     │
└─────────────────────────────────────┘

Desktop View:
┌─────────────────────────────────────────────────┐
│                                                 │
│  ← [Prev] [  Main Image  ] [Next] →           │
│                                                 │
│  [thumb] [thumb] [CURRENT] [thumb] [thumb]     │ <- Thumbnail strip
│                                                 │
│  Artwork Title | Medium, Dimensions            │
│  Description text...                           │
│  [View Full Size] [Purchase Inquiry]           │
└─────────────────────────────────────────────────┘
```

### Gallery Grid (Masonry Layout)

```
Mobile (1 column):
┌───────────┐
│  Image 1  │
├───────────┤
│  Image 2  │
├───────────┤
│  Image 3  │
└───────────┘

Tablet (2 columns):
┌───────┬───────┐
│ Img 1 │ Img 2 │
├───────┼───────┤
│ Img 3 │ Img 4 │
└───────┴───────┘

Desktop (3-4 columns):
┌───────┬───────┬───────┬───────┐
│ Img 1 │ Img 2 │ Img 3 │ Img 4 │
├───────┼───────┴───────┼───────┤
│ Img 5 │    Img 6       │ Img 7 │
└───────┴────────────────┴───────┘
```

### Parallax Sections

```css
/* Parallax Effect Layers */
.parallax-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax-layer-back {
  transform: translateZ(-2px) scale(3);  /* Slowest movement */
}

.parallax-layer-mid {
  transform: translateZ(-1px) scale(2);  /* Medium movement */
}

.parallax-layer-front {
  transform: translateZ(0);               /* Normal movement */
}
```

## Animation Specifications

### Entrance Animations

```typescript
// Fade up animation
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Scale in
const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};
```

### Micro-interactions

```css
/* Button hover effect */
.button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Image hover zoom */
.gallery-item {
  overflow: hidden;
}

.gallery-item img {
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}
```

### Loading States

```
Skeleton Screen:
┌─────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░ │ <- Shimmer animation
│ ░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────┘

Progressive Image Loading:
1. Show blurred placeholder (base64)
2. Load low-quality version
3. Fade in high-quality version
```

## Mobile Touch Interactions

### Gesture Support

```typescript
// Swipe detection
const SWIPE_THRESHOLD = 50;

const handleTouchStart = (e: TouchEvent) => {
  startX = e.touches[0].clientX;
};

const handleTouchEnd = (e: TouchEvent) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;
  
  if (Math.abs(diff) > SWIPE_THRESHOLD) {
    if (diff > 0) navigateNext();
    else navigatePrevious();
  }
};
```

### Touch Targets

```css
/* Minimum touch target size */
.touchable {
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Increased padding for mobile */
@media (max-width: 768px) {
  .button {
    padding: 16px 24px;
  }
}
```

## Accessibility Features

### Focus Indicators

```css
/* Custom focus styles */
:focus-visible {
  outline: 2px solid var(--color-terracotta);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-charcoal);
  color: var(--color-canvas);
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Screen Reader Support

```html
<!-- Landmark regions -->
<nav role="navigation" aria-label="Main navigation">
<main role="main" aria-label="Main content">
<aside role="complementary" aria-label="Additional information">

<!-- Live regions for updates -->
<div role="status" aria-live="polite" aria-atomic="true">
  <span class="sr-only">Gallery updated</span>
</div>

<!-- Image descriptions -->
<figure>
  <img src="artwork.jpg" alt="Detailed description">
  <figcaption>Artwork Title, Medium, Year</figcaption>
</figure>
```

## Performance Optimizations

### Image Loading Strategy

```typescript
// Lazy loading with Intersection Observer
const imageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src!;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  },
  { rootMargin: '50px' }
);
```

### Critical CSS

```html
<!-- Inline critical CSS -->
<style>
  /* Above-the-fold styles */
  body { margin: 0; font-family: system-ui; }
  .hero { height: 100vh; display: flex; }
  /* ... minimal critical styles ... */
</style>

<!-- Async load non-critical CSS -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

## Responsive Image Strategy

```html
<!-- Art direction with picture element -->
<picture>
  <source 
    media="(min-width: 1024px)"
    srcset="artwork-large.webp 1x, artwork-large@2x.webp 2x"
    type="image/webp">
  <source 
    media="(min-width: 768px)"
    srcset="artwork-medium.webp 1x, artwork-medium@2x.webp 2x"
    type="image/webp">
  <source 
    srcset="artwork-small.webp 1x, artwork-small@2x.webp 2x"
    type="image/webp">
  <img 
    src="artwork-fallback.jpg" 
    alt="Artwork description"
    loading="lazy"
    decoding="async">
</picture>
```

## Form Design

### Contact Form

```
┌─────────────────────────────────────┐
│  Get in Touch                       │
│                                     │
│  Name *                             │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  Email *                            │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  Subject                            │
│  ┌─────────────────────────────┐   │
│  │ ▼ Select inquiry type       │   │
│  └─────────────────────────────┘   │
│                                     │
│  Message *                          │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │                             │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  □ Subscribe to newsletter          │
│                                     │
│      [Send Message]                 │
└─────────────────────────────────────┘
```

## Error States

```
404 Page:
┌─────────────────────────────────────┐
│                                     │
│         ¯\_(ツ)_/¯                  │
│                                     │
│    Oops! This page doesn't exist   │
│                                     │
│    [Back to Gallery] [Home]        │
│                                     │
└─────────────────────────────────────┘

Network Error:
┌─────────────────────────────────────┐
│  ⚠️  Unable to load content         │
│  Please check your connection       │
│  [Retry]                            │
└─────────────────────────────────────┘
```

## Dark Mode Implementation

```typescript
// Theme toggle
const [theme, setTheme] = useState<'light' | 'dark'>('light');

useEffect(() => {
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  
  setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
}, []);

// Apply theme
useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);
```

## Browser Support

### Minimum Requirements
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari iOS 14+
- Chrome Android 90+

### Progressive Enhancement
```css
/* Base experience */
.gallery {
  display: flex;
  flex-wrap: wrap;
}

/* Enhanced with Grid support */
@supports (display: grid) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

/* Enhanced with Masonry (future) */
@supports (grid-template-rows: masonry) {
  .gallery {
    grid-template-rows: masonry;
  }
}
```