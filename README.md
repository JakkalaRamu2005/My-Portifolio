# Ram's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional, and minimal design with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **TypeScript**: Type-safe development with excellent developer experience
- **Smooth Animations**: Page-load animations and hover effects
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
portifolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── Navbar.tsx           # Responsive navigation component
│   ├── Home.tsx             # Hero section component
│   └── PlaceholderSections.tsx # Placeholder sections for future development
├── package.json
├── tailwind.config.js       # Tailwind configuration with custom animations
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## 🎨 Design Features

### Navbar
- Fixed position with scroll-based background blur
- Responsive mobile menu with smooth animations
- Smooth scroll navigation to sections
- Hover effects with color transitions

### Hero Section
- Animated text introduction with gradient effects
- Social media links (LinkedIn, GitHub, Email)
- Call-to-action button with hover animations
- Profile image placeholder with decorative elements
- Background gradient with floating elements

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts and typography scaling

## 🎯 Current Implementation

✅ **Completed**:
- Home/Hero section with animations
- Responsive navigation bar
- Modern design system with Tailwind
- TypeScript setup and configuration
- Smooth scrolling and hover effects

🚧 **Coming Soon**:
- About Me section
- Skills & Technologies showcase
- Projects portfolio
- Contact form
- Blog section (optional)

## 🚀 Deployment

The project is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**

### Deploy to Vercel:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 📝 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```js
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    600: '#0284c7',
  }
}
```

### Fonts
Update fonts in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Content
Update personal information in:
- `components/Home.tsx` - Hero section content
- `app/layout.tsx` - SEO metadata
- `components/PlaceholderSections.tsx` - Section placeholders

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Ram**  

