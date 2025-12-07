# RiseAboveCancer

A modern, responsive web page dedicated to raising awareness about cancer and providing support to those affected by it.

## Features

### 1. **Landing Page with Hero Section**
- Eye-catching hero banner with background image
- Clear mission statement and call-to-action button
- Smooth animations and gradient overlays
- Responsive design that works on all devices

### 2. **Contact Form**
- Three required fields: Full Name, Email Address, and Message
- Real-time form validation:
  - Name: minimum 2 characters
  - Email: proper email format validation
  - Message: minimum 10 characters
- Error messages display dynamically as users type
- Errors clear automatically when user starts correcting input
- Loading state with spinner animation during submission
- Success confirmation message
- Form resets after successful submission

### 3. **About Section**
- Mission statement with three core values:
  - **Support**: Emotional and practical assistance
  - **Education**: Awareness and prevention information
  - **Community**: Building connections and advocacy
- Statistics display:
  - 1M+ Lives Touched
  - 500+ Support Groups
  - 24/7 Helpline Support

### 4. **Real-Time API Integration (Bonus Feature)**
- **Words of Inspiration** section with dynamic quotes
- Primary API: [Quotable.io](https://api.quotable.io) for inspirational quotes
- Fallback API: [ZenQuotes](https://zenquotes.io) for backup
- Manual fallback quote if both APIs fail
- Loading spinner while fetching quotes
- "Get New Quote" button for manual refresh
- Auto-loads quote on page load

### 5. **Responsive Navigation**
- Sticky navigation bar with smooth scrolling
- Links to all major sections (Home, About, Inspiration, Contact)
- Hover effects and active state styling
- Mobile-friendly menu

### 6. **Footer**
- Quick links to all sections
- Resources section with patient support links
- Copyright information
- Responsive grid layout

## Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with custom properties and animations
  - Flexbox and CSS Grid for layouts
  - CSS animations and transitions
  - Mobile-first responsive design
- **JavaScript**: Vanilla JS (no dependencies)
  - Form validation and submission handling
  - API integration with error handling
  - Intersection Observer for scroll animations
  - Smooth scrolling functionality

## Color Scheme

- **Primary Pink**: #e91e63 - Main brand color
- **Secondary Purple**: #9c27b0 - Accent color
- **Text Dark**: #212121 - Primary text
- **Text Gray**: #757575 - Secondary text
- **Background Light**: #fafafa - Page background
- **Success Green**: #4caf50 - Success messages
- **Error Red**: #f44336 - Error messages

## File Structure

```
cancer-awareness-support-webpage/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

### Local Development

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/PragathiKC444/cancer-awareness-support-webpage.git
   cd cancer-awareness-support-webpage
   ```

2. **Open in a browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required
   - Works offline except for the real-time quotes feature

### Live Website

Visit the deployed website: https://pragathikc444.github.io/cancer-awareness-support-webpage/

## Features in Detail

### Form Validation

The contact form includes comprehensive client-side validation:

```javascript
// Validates name, email, and message
- Name: Must be at least 2 characters
- Email: Must match standard email pattern
- Message: Must be at least 10 characters
```

### API Integration

The quotes section automatically fetches inspirational quotes:

```javascript
// Primary API: Quotable.io
const QUOTE_API = 'https://api.quotable.io/random?tags=inspirational|motivational|courage|hope';

// Fallback API: ZenQuotes
const ALTERNATIVE_API = 'https://zenquotes.io/api/random';
```

### Responsive Design

- **Desktop (1200px+)**: Full layout with multi-column grids
- **Tablet (768px - 1199px)**: Adjusted spacing and font sizes
- **Mobile (480px - 767px)**: Single-column layout, touch-friendly
- **Small Mobile (<480px)**: Optimized typography and spacing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Form labels and error messages
- Color contrast ratios meet WCAG standards
- Keyboard navigation support

## Performance

- No external dependencies (except Google Fonts)
- Optimized images from Unsplash CDN
- Minimal CSS and JavaScript
- Smooth animations using CSS3
- Fast page load times

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-pink: #e91e63;
    --secondary-purple: #9c27b0;
    /* ...other colors */
}
```

### Changing Content

Edit text and content directly in `index.html`:
- Hero section title and subtitle
- About section cards
- Contact information
- Footer content

### Modifying Quote APIs

Update the API URLs in `script.js`:

```javascript
const QUOTE_API = 'your-new-api-url';
const ALTERNATIVE_API = 'your-fallback-api-url';
```

## Deployment

### GitHub Pages (Recommended)

1. Push code to GitHub repository
2. Go to Repository Settings → Pages
3. Select "main" branch as source
4. Site will be live at: `https://username.github.io/cancer-awareness-support-webpage/`

### Alternative Hosting

- **Netlify**: Drag and drop folder or connect GitHub
- **Vercel**: Connect GitHub repository for auto-deployment
- **AWS S3**: Upload files to S3 bucket
- **Any static host**: Works with any static file hosting

## Known Limitations

- Form data is not persisted (no backend)
- Success message shows for demo purposes only
- Quote API requires internet connection
- Maximum message length is not enforced (can be added)

## Future Enhancements

- Backend integration for form submissions
- Database for storing user messages
- Email notifications for form submissions
- User testimonials section
- Blog or resource library
- Multi-language support
- Dark mode toggle
- Newsletter signup

## Contributing

This project was created as an assignment for cancer awareness. Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests
- Share it with others

## License

Open source - Feel free to use and modify

## Contact

**Organization**: RiseAboveCancer  
**Email**: support@riseabovecancer.org  
**Helpline**: 1-800-CANCER-HELP  
**Address**: 123 Hope Street, Care City, CC 12345

## Submission Information

**Submitted by**: Pragathi KC  
**Date**: December 2025  
**Deadline**: December 8, 2025  
**Task**: Option 1 - RiseAboveCancer Web Page

---

**Built with dedication for spreading awareness and hope. Together we can make a difference!**
