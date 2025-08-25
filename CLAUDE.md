# Claude AI Development Guidelines for TantrumArt

This document provides context and guidelines for AI assistants working on the TantrumArt portfolio landing page.

## 🎯 Project Context

TantrumArt is a **single-page application (SPA)** portfolio website for an artist looking to showcase and monetize their work. The site is deployed on **GitHub Pages** and must work within its constraints (static hosting, no server-side rendering).

### Key Constraints
- **Static Hosting Only**: GitHub Pages serves static files only
- **Client-Side Routing**: Use HashRouter for React Router due to GitHub Pages limitations
- **Base Path**: Configure Vite with base path `/tantrumart/` if not using custom domain
- **No Environment Secrets**: Cannot use server-side environment variables
- **Mobile-First**: Primary audience uses mobile devices (70%+ traffic)

## 🏗️ Technical Architecture

### Technology Decisions
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Strict mode enabled for type safety
- **Vite**: Fast build tool with HMR, configured for GitHub Pages
- **Tailwind CSS**: Utility-first with custom design tokens
- **Framer Motion**: Performant animations with reduced motion support

### File Organization
```
src/
├── components/          # Presentational components only
│   └── Component/
│       ├── index.tsx   # Component export
│       ├── Component.tsx # Implementation
│       ├── styles.css  # Component styles
│       └── types.ts    # TypeScript types
├── hooks/              # Custom React hooks
├── utils/              # Pure utility functions
├── styles/             # Global styles and theme
└── data/              # Static content JSON files
```

## 📝 Code Style Guidelines

### React Components
```typescript
// ✅ Functional components with TypeScript
interface GalleryProps {
  images: Image[];
  onImageClick?: (id: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
  // Hooks at the top
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Event handlers
  const handleImageClick = useCallback((id: string) => {
    setSelectedImage(id);
    onImageClick?.(id);
  }, [onImageClick]);
  
  // Render
  return (
    <div className="gallery" role="region" aria-label="Artwork gallery">
      {/* Component JSX */}
    </div>
  );
};
```

### Styling Approach
```css
/* Use CSS custom properties for theming */
.gallery {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Mobile-first media queries */
@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Performance Patterns
```typescript
// ✅ Lazy load heavy components
const Gallery = lazy(() => import('./components/Gallery'));

// ✅ Memoize expensive computations
const sortedImages = useMemo(
  () => images.sort((a, b) => b.date - a.date),
  [images]
);

// ✅ Optimize images
<img 
  src="image-small.webp"
  srcSet="image-small.webp 400w, image-medium.webp 800w, image-large.webp 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  loading="lazy"
  alt={image.description}
/>
```

## 🎨 Design System

### Color Palette
```css
:root {
  /* Primary colors - Artist's brand */
  --color-primary: #2D3748;      /* Deep charcoal */
  --color-primary-light: #4A5568;
  --color-accent: #ED8936;       /* Warm orange */
  
  /* Neutral scale */
  --color-gray-50: #F9FAFB;
  --color-gray-900: #111827;
  
  /* Semantic colors */
  --color-success: #10B981;
  --color-error: #EF4444;
}
```

### Typography Scale
```css
:root {
  /* Type scale - Mobile first */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  
  /* Fluid typography for large screens */
  --font-size-display: clamp(2rem, 5vw, 4rem);
}
```

### Spacing System
```css
:root {
  --space-xs: 0.25rem;  /* 4px */
  --space-sm: 0.5rem;   /* 8px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2rem;     /* 32px */
  --space-2xl: 3rem;    /* 48px */
  --space-3xl: 4rem;    /* 64px */
}
```

## ♿ Accessibility Requirements

### ARIA Patterns
```typescript
// Gallery with keyboard navigation
<div 
  role="region"
  aria-label="Artwork gallery"
  aria-live="polite"
>
  <button
    aria-label={`View ${image.title}`}
    aria-expanded={isExpanded}
    aria-controls={`gallery-detail-${image.id}`}
  >
</div>

// Skip links
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

### Focus Management
```typescript
// Trap focus in modals
useEffect(() => {
  if (isOpen) {
    const previousFocus = document.activeElement as HTMLElement;
    modalRef.current?.focus();
    
    return () => {
      previousFocus?.focus();
    };
  }
}, [isOpen]);
```

## 🚀 Deployment Process

### GitHub Actions Workflow
The site automatically deploys when pushing to `main`. The workflow:
1. Checks out code
2. Sets up Node.js 20
3. Installs dependencies with `npm ci`
4. Runs tests and linting
5. Builds the production bundle
6. Deploys to `gh-pages` branch

### Build Configuration
```javascript
// vite.config.js
export default {
  base: process.env.GITHUB_PAGES ? '/tantrumart/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation': ['framer-motion'],
        }
      }
    }
  }
}
```

## 📊 Performance Targets

### Core Web Vitals
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **FCP**: < 1.8s (First Contentful Paint)

### Bundle Size Budgets
```javascript
// Maximum sizes (gzipped)
{
  "main.js": "150KB",
  "vendor.js": "100KB",
  "styles.css": "30KB",
  "total": "280KB"
}
```

## 🔍 SEO Implementation

### Meta Tags Template
```html
<!-- Dynamic meta tags per route -->
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={pageDescription} />
<meta property="og:image" content={pageImage} />
<meta property="og:url" content={currentUrl} />

<!-- Structured data for artwork -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VisualArtwork",
  "name": "Artwork Title",
  "creator": {
    "@type": "Person",
    "name": "Artist Name"
  },
  "dateCreated": "2024-01-01",
  "description": "Artwork description"
}
</script>
```

## 🧪 Testing Strategy

### Test File Organization
```
tests/
├── unit/           # Component logic tests
├── integration/    # Component interaction tests
├── e2e/           # User flow tests
└── visual/        # Screenshot regression tests
```

### Testing Priorities
1. **Critical User Paths**: Gallery viewing, contact form
2. **Accessibility**: Keyboard navigation, screen reader
3. **Performance**: Load time, animation performance
4. **Cross-browser**: Chrome, Safari, Firefox, Edge

## 🚨 Common Pitfalls to Avoid

### GitHub Pages Specific
- ❌ Don't use BrowserRouter (use HashRouter)
- ❌ Don't hardcode absolute paths without base path
- ❌ Don't rely on server-side features
- ❌ Don't store secrets in code

### Performance
- ❌ Don't load all images at once
- ❌ Don't use large unoptimized images
- ❌ Don't block render with non-critical CSS
- ❌ Don't create layout shifts with dynamic content

### Accessibility
- ❌ Don't remove focus indicators
- ❌ Don't use color as the only indicator
- ❌ Don't create keyboard traps
- ❌ Don't auto-play media with sound

## 📚 Useful Resources

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Accessibility Docs](https://react.dev/reference/react-dom/components/common#accessibility-attributes)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Schema.org Visual Artwork](https://schema.org/VisualArtwork)

## 🎯 Development Workflow

### Before Starting
1. Read this entire document
2. Check existing code patterns in the codebase
3. Review the design system in `specs/design-system.md`
4. Understand GitHub Pages limitations

### While Developing
1. Use mobile-first approach
2. Test on real devices, not just browser DevTools
3. Check accessibility with screen readers
4. Monitor bundle size impact
5. Write tests for new features

### Before Committing
1. Run `npm run lint` to check code style
2. Run `npm test` to ensure tests pass
3. Run `npm run build` to verify production build
4. Test the production build with `npm run preview`
5. Check Lighthouse scores

## 💡 AI Assistant Tips

When working on this project:
1. **Respect constraints**: Always consider GitHub Pages limitations
2. **Mobile-first**: Start with mobile design, enhance for desktop
3. **Performance**: Every KB matters on mobile connections
4. **Accessibility**: It's not optional, it's required
5. **Incremental**: Make small, testable changes
6. **Documentation**: Update docs when changing architecture

Remember: This is an artist's portfolio. The art should be the focus, with the technology serving to showcase it beautifully and accessibly.