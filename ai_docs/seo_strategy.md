# SEO & Meta Tags Strategy - TantrumArt

## Complete Meta Tags Implementation

### Base HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>TantrumArt - Contemporary Artist Portfolio | Original Artwork for Sale</title>
  <meta name="title" content="TantrumArt - Contemporary Artist Portfolio | Original Artwork for Sale">
  <meta name="description" content="Discover unique contemporary artworks by TantrumArt. Original paintings, prints, and commissions available. Transform your space with meaningful art that speaks to your soul.">
  <meta name="keywords" content="contemporary art, original paintings, art prints, artist portfolio, buy art online, commission artwork, modern art, abstract art, tantrumart">
  <meta name="robots" content="index, follow">
  <meta name="author" content="TantrumArt">
  <meta name="copyright" content="TantrumArt 2025">
  <meta name="language" content="English">
  <meta name="revisit-after" content="7 days">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://tantrumart.com/">
  <meta property="og:title" content="TantrumArt - Contemporary Artist Portfolio">
  <meta property="og:description" content="Discover unique contemporary artworks. Original paintings, prints, and commissions available. Transform your space with meaningful art.">
  <meta property="og:image" content="https://tantrumart.com/images/og-preview-1200x630.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Featured artwork by TantrumArt showcasing contemporary abstract paintings">
  <meta property="og:site_name" content="TantrumArt">
  <meta property="og:locale" content="en_US">
  
  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://tantrumart.com/">
  <meta name="twitter:title" content="TantrumArt - Contemporary Artist Portfolio">
  <meta name="twitter:description" content="Discover unique contemporary artworks. Original paintings and prints available.">
  <meta name="twitter:image" content="https://tantrumart.com/images/twitter-card-1200x630.jpg">
  <meta name="twitter:image:alt" content="Featured artwork by TantrumArt">
  <meta name="twitter:site" content="@tantrumart">
  <meta name="twitter:creator" content="@tantrumart">
  
  <!-- LinkedIn & Professional Context -->
  <meta name="author" content="TantrumArt">
  <meta property="article:author" content="https://linkedin.com/in/tantrumart">
  <meta property="article:published_time" content="2025-01-01T00:00:00+00:00">
  <meta property="article:modified_time" content="2025-01-20T00:00:00+00:00">
  <meta property="article:section" content="Art">
  <meta property="article:tag" content="Contemporary Art">
  <meta property="article:tag" content="Original Artwork">
  
  <!-- Enhanced Professional Tags for Slack -->
  <meta name="twitter:label1" content="Art Style">
  <meta name="twitter:data1" content="Contemporary Abstract">
  <meta name="twitter:label2" content="Availability">
  <meta name="twitter:data2" content="Originals & Prints">
  
  <!-- Pinterest -->
  <meta property="og:see_also" content="https://pinterest.com/tantrumart">
  <meta name="pinterest-rich-pin" content="true">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://tantrumart.com/">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#2D3748">
  
  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Artist",
    "name": "TantrumArt",
    "url": "https://tantrumart.com",
    "sameAs": [
      "https://instagram.com/tantrumart",
      "https://twitter.com/tantrumart",
      "https://pinterest.com/tantrumart",
      "https://linkedin.com/in/tantrumart"
    ],
    "description": "Contemporary artist creating unique abstract artworks that explore emotion and movement through color and form.",
    "image": "https://tantrumart.com/images/artist-profile.jpg",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "VisualArtwork",
        "name": "Original Artworks and Prints"
      }
    }
  }
  </script>
  
  <!-- Artwork Gallery Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "TantrumArt Portfolio",
    "description": "Gallery of contemporary artworks by TantrumArt",
    "url": "https://tantrumart.com/#/gallery",
    "image": [
      {
        "@type": "ImageObject",
        "contentUrl": "https://tantrumart.com/images/artwork-1.jpg",
        "name": "Artwork Title 1",
        "description": "Description of artwork 1"
      }
    ]
  }
  </script>
  
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://www.googletagmanager.com">
  
  <!-- DNS Prefetch -->
  <link rel="dns-prefetch" href="//cdn.jsdelivr.net">
  <link rel="dns-prefetch" href="//unpkg.com">
</head>
```

## Dynamic Meta Tags Strategy

### React Helmet Implementation
```typescript
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  artwork?: ArtworkData;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = 'TantrumArt - Contemporary Artist Portfolio',
  description = 'Discover unique contemporary artworks...',
  image = '/images/og-preview-1200x630.jpg',
  url = 'https://tantrumart.com',
  type = 'website',
  artwork
}) => {
  const fullTitle = title === 'TantrumArt' ? title : `${title} | TantrumArt`;
  const fullUrl = `https://tantrumart.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://tantrumart.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Artwork-specific structured data */}
      {artwork && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VisualArtwork",
            "name": artwork.title,
            "creator": {
              "@type": "Person",
              "name": "TantrumArt"
            },
            "dateCreated": artwork.date,
            "description": artwork.description,
            "image": fullImage,
            "offers": {
              "@type": "Offer",
              "price": artwork.price,
              "priceCurrency": "USD",
              "availability": artwork.available ? "InStock" : "SoldOut"
            }
          })}
        </script>
      )}
    </Helmet>
  );
};
```

## Page-Specific Meta Tags

### Homepage
```typescript
<SEO 
  title="TantrumArt - Contemporary Artist Portfolio"
  description="Discover unique contemporary artworks by TantrumArt. Original paintings, prints, and commissions available."
  type="website"
/>
```

### Gallery Page
```typescript
<SEO 
  title="Artwork Gallery"
  description="Browse the complete collection of contemporary artworks. Original paintings and limited edition prints available for purchase."
  url="/#/gallery"
  type="website"
/>
```

### Individual Artwork
```typescript
<SEO 
  title={artwork.title}
  description={`${artwork.title} - ${artwork.description}. ${artwork.medium}, ${artwork.dimensions}. ${artwork.available ? 'Available for purchase' : 'Sold'}.`}
  image={artwork.image}
  url={`/#/gallery/${artwork.id}`}
  type="article"
  artwork={artwork}
/>
```

### About Page
```typescript
<SEO 
  title="About the Artist"
  description="Learn about TantrumArt's journey, artistic philosophy, and the inspiration behind the contemporary artworks."
  url="/#/about"
  type="profile"
/>
```

### Contact Page
```typescript
<SEO 
  title="Commission Custom Artwork"
  description="Commission a unique piece of art tailored to your vision. Contact TantrumArt for custom artwork, collaborations, and inquiries."
  url="/#/contact"
  type="website"
/>
```

## Image Optimization for SEO

### Image Requirements
```
Open Graph: 1200 x 630px (1.91:1 ratio)
Twitter: 1200 x 630px (same as OG)
Pinterest: 1000 x 1500px (2:3 ratio)
Instagram: 1080 x 1080px (1:1 ratio)
```

### Image Naming Convention
```
artwork-title-medium-year-size.jpg
Example: abstract-symphony-oil-2024-1200x630.jpg
```

### Alt Text Strategy
```html
<!-- Descriptive alt text for accessibility and SEO -->
<img 
  src="abstract-symphony.jpg" 
  alt="Abstract Symphony - A vibrant oil painting featuring swirling blues and golds representing musical movement, 24x36 inches"
/>
```

## robots.txt Configuration
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Sitemap: https://tantrumart.com/sitemap.xml

# Crawl-delay for respectful crawling
User-agent: *
Crawl-delay: 1
```

## XML Sitemap Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://tantrumart.com/</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tantrumart.com/#/gallery</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://tantrumart.com/images/gallery-preview.jpg</image:loc>
      <image:title>TantrumArt Gallery</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://tantrumart.com/#/about</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tantrumart.com/#/contact</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

## SEO Performance Monitoring

### Key Metrics to Track
```typescript
// Analytics events for SEO performance
const trackSEOMetrics = {
  // Organic traffic sources
  source: document.referrer,
  
  // Time on page
  timeOnPage: performance.now(),
  
  // Scroll depth
  scrollDepth: (scrollY / document.body.scrollHeight) * 100,
  
  // Image views
  imageViews: galleryInteractions,
  
  // Social shares
  socialShares: shareButtonClicks
};
```

### Core Web Vitals Optimization
```javascript
// Monitor Core Web Vitals
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);  // Target: <0.1
getFID(console.log);  // Target: <100ms
getLCP(console.log);  // Target: <2.5s
```

## Social Media Integration

### Share Button Implementation
```typescript
const shareLinks = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
  pinterest: `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${description}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  email: `mailto:?subject=${title}&body=${description}%20${url}`
};
```

## Local SEO (if applicable)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TantrumArt Studio",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Studio Address",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "ZIP",
    "addressCountry": "US"
  },
  "openingHours": "Mo-Fr 10:00-18:00",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "contact@tantrumart.com"
}
```

## SEO Checklist

### Technical SEO
- [x] Mobile-responsive design
- [x] HTTPS enabled (GitHub Pages default)
- [x] Fast loading times (<3s)
- [x] Clean URL structure
- [x] XML sitemap
- [x] robots.txt file
- [x] Canonical URLs
- [x] Structured data markup

### On-Page SEO
- [x] Unique title tags per page
- [x] Meta descriptions
- [x] Header tag hierarchy (H1-H6)
- [x] Image alt text
- [x] Internal linking
- [x] Content quality
- [x] Keyword optimization

### Off-Page SEO
- [ ] Social media profiles
- [ ] Google My Business (if applicable)
- [ ] Art directory listings
- [ ] Backlink building
- [ ] Social sharing buttons
- [ ] Email newsletter signup

### Performance SEO
- [x] Core Web Vitals optimization
- [x] Image optimization
- [x] Code minification
- [x] Browser caching
- [x] CDN usage
- [x] Lazy loading

## Content Strategy

### Blog/News Section (Future)
```typescript
// Article schema for blog posts
{
  "@type": "BlogPosting",
  "headline": "Article Title",
  "datePublished": "2025-01-20",
  "dateModified": "2025-01-20",
  "author": {
    "@type": "Person",
    "name": "TantrumArt"
  },
  "image": "article-image.jpg",
  "articleBody": "Article content..."
}
```

### Keywords Strategy
Primary Keywords:
- Contemporary art
- Original artwork
- Art prints
- Commission artwork
- Abstract paintings

Long-tail Keywords:
- Buy original contemporary art online
- Custom commissioned artwork
- Modern abstract paintings for sale
- Affordable art prints and originals
- Contemporary artist portfolio

## Monitoring & Reporting

### Tools Setup
1. Google Search Console
2. Google Analytics 4
3. Bing Webmaster Tools
4. Pinterest Rich Pins Validator
5. Facebook Sharing Debugger
6. Twitter Card Validator

### Monthly SEO Tasks
- Update sitemap with new content
- Check for broken links
- Monitor Core Web Vitals
- Update meta descriptions
- Analyze search queries
- Track keyword rankings
- Review competitor strategies