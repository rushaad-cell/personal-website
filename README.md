# Personal Website - Rushaad Mistry

A modern, interactive personal website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode, multi-language support (English, Spanish, German), and impressive interactive elements.

## 🚀 Features

- **Modern Design**: Sleek, professional, alternative black & white aesthetic
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Multi-Language**: Full support for English, Spanish, and German
- **Interactive Elements**: 
  - Eye-tracking data visualizations with D3.js
  - Animated components with Framer Motion
  - Interactive gaze path animations
- **Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Netlify Ready**: Pre-configured for easy deployment

## 📋 Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm
- Git

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

## 📝 Content Updates

### Adding Your Photo

1. Add your photo to the `public/` folder (e.g., `public/profile.jpg`)
2. Open `components/AboutSection.tsx`
3. Replace the placeholder div (lines 34-44) with:

```tsx
<Image
  src="/profile.jpg"
  alt="Rushaad Mistry"
  width={400}
  height={400}
  className="rounded-lg object-cover"
/>
```

4. Add the import at the top:
```tsx
import Image from "next/image";
```

### Adding Your Resume PDF

1. Add your resume PDF to the `public/` folder (e.g., `public/resume.pdf`)
2. The download link is already configured in `components/DownloadsSection.tsx`
3. The link will automatically work once the file is in place

### Updating Text Content

All text content is stored in translation files:

- **English**: `messages/en.json`
- **Spanish**: `messages/es.json`
- **German**: `messages/de.json`

Simply edit the JSON files to update any text. The structure is:
- `nav.*` - Navigation items
- `hero.*` - Hero section
- `about.*` - About section
- `projects.*` - Projects section
- `experience.*` - Work experience
- `education.*` - Education section
- `skills.*` - Skills section
- `contact.*` - Contact form
- `downloads.*` - Downloadable resources

### Adding Project Screenshots

1. Add screenshots to `public/` folder
2. Open `components/ProjectsSection.tsx`
3. Replace placeholder divs with:

```tsx
<Image
  src="/accessibility-dashboard.png"
  alt="Accessibility Dashboard"
  width={800}
  height={450}
  className="rounded-lg"
/>
```

### Updating Eye-Tracking Papers

Edit the `papers` array in `components/EyeTrackingSection.tsx` (around line 90) to add or modify papers.

### Customizing Colors

The site uses a black & white theme. To customize:

1. Edit `app/globals.css` for CSS variables
2. Edit Tailwind classes in components for specific styling

## 🌐 Deployment to Netlify

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Netlify will auto-detect Next.js settings
6. Click "Deploy site"

The site will automatically deploy on every push to your main branch.

### Option 2: Manual Deployment

1. Build the site:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

### Setting Up Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

### Environment Variables (if needed)

If you add email functionality or other services:

1. Go to Netlify dashboard → Site settings → Environment variables
2. Add your API keys/secrets
3. They'll be available in your functions and build process

## 📧 Contact Form Setup

The contact form is set up but needs email integration. Options:

### Option 1: Netlify Forms (Easiest)

1. Add `netlify` attribute to the form in `components/ContactSection.tsx`:
```tsx
<form netlify name="contact" ...>
```

2. Add hidden input:
```tsx
<input type="hidden" name="form-name" value="contact" />
```

3. Netlify will automatically handle submissions

### Option 2: Email Service (Resend, SendGrid, etc.)

1. Install service SDK (e.g., `npm install resend`)
2. Update `netlify/functions/contact.ts` or `app/api/contact/route.ts`
3. Add API key to Netlify environment variables

## 🎨 Customization Guide

### Changing Fonts

1. Edit `app/[locale]/layout.tsx`
2. Import new Google Fonts or custom fonts
3. Update CSS variables in `app/globals.css`

### Adding New Sections

1. Create new component in `components/` folder
2. Add to `app/[locale]/page.tsx`
3. Add translations to all language files
4. Add navigation item in `components/Navigation.tsx`

### Modifying Animations

Animations use Framer Motion. Edit animation props in components:
- `initial` - Starting state
- `animate` - End state
- `transition` - Animation timing
- `whileInView` - Trigger on scroll

## 📁 Project Structure

```
personal-website/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── layout.tsx     # Layout with theme & i18n
│   │   └── page.tsx       # Main page
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── DownloadsSection.tsx
│   ├── EducationSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EyeTrackingSection.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── ProjectsSection.tsx
│   └── SkillsSection.tsx
├── lib/                   # Utilities
│   ├── theme-provider.tsx # Dark/light mode
│   └── utils.ts           # Helper functions
├── messages/              # Translation files
│   ├── en.json
│   ├── es.json
│   └── de.json
├── netlify/               # Netlify functions
│   └── functions/
│       └── contact.ts
├── public/                # Static assets
├── netlify.toml           # Netlify configuration
└── package.json
```

## 🐛 Troubleshooting

### Build Errors

- Ensure Node.js 18+ is installed
- Delete `node_modules` and `.next`, then reinstall
- Check for TypeScript errors: `npm run lint`

### Translation Issues

- Ensure all language files have the same structure
- Check for missing keys in console

### Deployment Issues

- Verify `netlify.toml` configuration
- Check build logs in Netlify dashboard
- Ensure environment variables are set if needed

## 📚 Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **D3.js** - Data visualizations
- **next-intl** - Internationalization
- **Lucide React** - Icons

## 📄 License

This project is private and personal.

## 🤝 Support

For questions or issues:
- Email: rushaad@berkeley.edu
- LinkedIn: [Rushaad Mistry](https://www.linkedin.com/in/rushaad-mistry-43507a1b0/)

---

**Built with ❤️ for showcasing your work and research**
