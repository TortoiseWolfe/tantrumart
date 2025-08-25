# Technical Architecture - TantrumArt

## System Overview

TantrumArt is a React-based Single Page Application (SPA) designed for static hosting on GitHub Pages. The architecture prioritizes performance, accessibility, and visual appeal while working within the constraints of static site hosting.

## Architecture Principles

### 1. Static-First Design
- No server-side rendering or dynamic backend
- All content served as static files from GitHub Pages
- Client-side routing with React Router (HashRouter)
- API interactions limited to third-party services (Stripe, analytics)

### 2. Performance-Oriented
- Code splitting at route level
- Lazy loading for images and heavy components
- Progressive enhancement approach
- Target: <3s load time on 3G networks

### 3. Mobile-First Responsive
- Base styles for 320px screens
- Progressive breakpoints: 768px, 1024px, 1440px
- Touch-optimized interactions
- Responsive images with srcset

## Component Architecture

```
┌─────────────────────────────────────┐
│           App Component             │
│         (Router, Context)           │
└─────────────┬───────────────────────┘
              │
    ┌─────────┴─────────┬─────────────┐
    │                   │             │
┌───▼────┐      ┌───────▼──────┐ ┌───▼────┐
│  Layout │      │   Pages      │ │Providers│
│         │      │              │ │         │
│ -Header │      │ -Home        │ │ -Theme  │
│ -Footer │      │ -Gallery     │ │ -Auth   │
│ -Nav    │      │ -About       │ │ -Cart   │
└─────────┘      │ -Contact     │ └─────────┘
                 └───────┬──────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
    ┌─────▼────┐  ┌──────▼─────┐ ┌─────▼────┐
    │  Gallery  │  │  Parallax  │ │   SEO    │
    │           │  │            │ │          │
    │ -Carousel │  │ -Hero      │ │ -Meta    │
    │ -Grid     │  │ -Sections  │ │ -Schema  │
    │ -Lightbox │  │ -Effects   │ │ -OG Tags │
    └───────────┘  └────────────┘ └──────────┘
```

## State Management

### React Context API
```typescript
// Global state contexts
ThemeContext    // Dark/light mode, color preferences
AuthContext     // User authentication state
CartContext     // Shopping cart for artwork
GalleryContext  // Image loading, filters, view preferences
```

### Local Component State
- UI state (modals, dropdowns) - useState
- Form state - useReducer or react-hook-form
- Animation state - Framer Motion

## Data Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Static JSON │────▶│  Components  │────▶│   UI Render  │
│    Files     │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                     │
       │                    │                     │
       ▼                    ▼                     ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Artwork    │     │   useEffect  │     │   Browser    │
│   Content    │     │   Hooks      │     │   Display    │
│   Config     │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
```

## Routing Strategy

### HashRouter Configuration
```typescript
// Required for GitHub Pages
<HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/gallery/:id" element={<ArtworkDetail />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</HashRouter>
```

### URL Structure
- Production: `https://tantrumart.com/#/`
- GitHub Pages: `https://username.github.io/tantrumart/#/`
- Routes: `/#/gallery`, `/#/about`, `/#/contact`

## Build & Deployment Pipeline

```
┌────────────┐     ┌────────────┐     ┌────────────┐
│   Develop  │────▶│    Build   │────▶│   Deploy   │
│            │     │            │     │            │
│ localhost  │     │  npm run   │     │  GitHub    │
│   :5173    │     │   build    │     │   Pages    │
└────────────┘     └────────────┘     └────────────┘
       │                 │                   │
       ▼                 ▼                   ▼
┌────────────┐     ┌────────────┐     ┌────────────┐
│    Vite    │     │   Rollup   │     │   GitHub   │
│    HMR     │     │  Bundle    │     │   Actions  │
│    ESM     │     │  Optimize  │     │   CI/CD    │
└────────────┘     └────────────┘     └────────────┘
```

## Performance Optimization

### Code Splitting
```typescript
// Route-based splitting
const Gallery = lazy(() => import('./pages/Gallery'));
const ArtworkDetail = lazy(() => import('./pages/ArtworkDetail'));

// Component-based splitting for heavy components
const ImageCarousel = lazy(() => import('./components/Gallery/Carousel'));
const ParallaxSection = lazy(() => import('./components/Parallax'));
```

### Image Optimization
```typescript
// Progressive loading strategy
1. Load placeholder (base64 blur)
2. Load thumbnail (WebP, 50KB)
3. Load full image (WebP/JPEG, <500KB)
4. Preload next/previous in carousel
```

### Bundle Optimization
```javascript
// vite.config.js
rollupOptions: {
  output: {
    manualChunks: {
      'vendor': ['react', 'react-dom', 'react-router-dom'],
      'animation': ['framer-motion'],
      'ui': ['@headlessui/react'],
    }
  }
}
```

## Security Considerations

### Client-Side Security
- Content Security Policy headers
- XSS protection via React's default escaping
- HTTPS enforcement via GitHub Pages
- No sensitive data in client code
- API keys only for public services

### Third-Party Integrations
```typescript
// Safe client-side integrations
- Stripe (payment processing)
- Google Analytics (privacy-conscious)
- Cloudinary (image CDN)
- EmailJS (contact forms)
```

## Error Handling

### Error Boundaries
```typescript
class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    // Log to error reporting service
    console.error('Error caught:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### Loading States
```typescript
// Consistent loading patterns
<Suspense fallback={<LoadingSkeleton />}>
  <Gallery />
</Suspense>
```

## Testing Architecture

### Test Pyramid
```
         ┌────┐
        /  E2E  \
       /  Tests  \
      /___________\
     / Integration \
    /    Tests      \
   /_________________\
  /    Unit Tests     \
 /______________________\
```

### Testing Tools
- Unit: Vitest + React Testing Library
- Integration: Vitest + MSW
- E2E: Playwright
- Visual: Percy/Chromatic
- Performance: Lighthouse CI

## Monitoring & Analytics

### Client-Side Monitoring
```typescript
// Performance monitoring
window.addEventListener('load', () => {
  const perfData = performance.getEntriesByType('navigation')[0];
  analytics.track('performance', {
    loadTime: perfData.loadEventEnd,
    domReady: perfData.domContentLoadedEventEnd,
    firstPaint: perfData.fetchStart
  });
});
```

### Analytics Events
- Page views
- Gallery interactions
- Artwork views
- Contact form submissions
- Purchase intentions

## Development Environment

### Local Setup
```bash
# Development server with HMR
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm test
```

### Docker Development
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
```

## Future Considerations

### Potential Enhancements
1. **Progressive Web App**: Add service worker for offline support
2. **CMS Integration**: Headless CMS for content management
3. **Server-Side Rendering**: Migrate to Next.js if SEO needs improve
4. **API Backend**: Add Node.js backend if complex features needed
5. **CDN Integration**: CloudFlare for global performance

### Scalability Path
```
Phase 1: Static Site (Current)
   ↓
Phase 2: JAMstack with CMS
   ↓
Phase 3: Serverless Functions
   ↓
Phase 4: Full-Stack Application
```