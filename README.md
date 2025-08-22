# 🖼️ Iframe Tester

A powerful, user-friendly tool for testing and generating HTML iframe code with comprehensive configuration options. Built with Next.js and Tailwind CSS.

## ✨ Features

- **Live Preview**: Real-time iframe rendering with instant updates
- **Comprehensive Configuration**: Full control over iframe properties and attributes
- **Security Options**: Sandbox permissions and allow policies for secure embedding
- **Code Generation**: Auto-generated HTML with copy-to-clipboard functionality
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme detection based on system preferences

## 🚀 Quick Start

### Live Demo
Visit the deployed application: [Iframe Tester on Vercel](https://your-deployed-url.vercel.app)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/iframe-tester.git
   cd iframe-tester
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 How to Use

### Basic Configuration
1. **Enter URL**: Paste the URL you want to embed in the "Widget URL" field
2. **Set Dimensions**: Adjust width and height in pixels (100-2000px range)
3. **Load Widget**: Click "Load Widget" to preview the iframe

### Iframe Properties Configuration

#### Frame Border
- **No border (0)**: Removes the iframe border
- **With border (1)**: Shows a visible border around the iframe

#### Scrolling Options
- **Auto**: Browser decides whether scrollbars are needed
- **Yes**: Always show scrollbars
- **No**: Never show scrollbars

#### Loading Behavior
- **Eager**: Load iframe immediately
- **Lazy**: Load iframe when it comes into view (performance optimization)

#### Referrer Policy
Controls what referrer information is sent when loading the iframe:
- **No referrer when downgrade**: Send referrer only for HTTPS→HTTPS
- **No referrer**: Never send referrer information
- **Origin**: Send only the origin (domain)
- **Origin when cross-origin**: Send full URL for same-origin, origin for cross-origin
- **Strict origin**: Send origin only for HTTPS→HTTPS
- **Strict origin when cross-origin**: Combination of strict-origin and origin-when-cross-origin
- **Unsafe URL**: Always send full URL (not recommended)

#### Security Settings

**Allow Fullscreen**: Enables the iframe content to use fullscreen mode

**Sandbox Permissions**: Restrict iframe capabilities for security
- **Allow Scripts**: Permit JavaScript execution
- **Allow Forms**: Allow form submissions
- **Allow Popups**: Enable popup windows
- **Allow Same Origin**: Treat content as same-origin
- **Allow Top Navigation**: Allow navigation of top-level browsing context

**Allow Permissions**: Grant specific browser permissions
- **Camera**: Access to device camera
- **Microphone**: Access to device microphone  
- **Geolocation**: Access to location services
- **Payment**: Access to payment request API

### Generated Code
- View the automatically generated HTML code in real-time
- Copy the complete iframe code with one click
- All selected properties are included in the generated code

## 🛠️ Technical Details

### Built With
- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[React 19](https://react.dev/)** - JavaScript library for building user interfaces
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Project Structure
```
iframe-tester/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css          # Global styles
│       ├── layout.tsx           # Root layout
│       └── page.tsx             # Main iframe tester component
├── public/                      # Static assets
├── package.json
└── README.md
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Security Considerations

When embedding iframes, always consider:

1. **Content Security Policy**: Implement CSP headers on your website
2. **Sandbox Restrictions**: Use minimal required permissions
3. **HTTPS Only**: Always use HTTPS URLs when possible
4. **Trusted Sources**: Only embed content from trusted domains
5. **Regular Updates**: Keep iframe sources updated and monitored

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **Connect to Vercel**: Import your repository in Vercel dashboard
3. **Deploy**: Vercel automatically detects Next.js and deploys

### Environment Variables
No environment variables required for basic functionality.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you encounter any issues or have questions:
- Open an issue on [GitHub Issues](https://github.com/yourusername/iframe-tester/issues)
- Check existing documentation above
- Review the [Next.js documentation](https://nextjs.org/docs)

## 🎯 Roadmap

- [ ] URL validation and preview
- [ ] Iframe size presets for common use cases
- [ ] Export configurations as JSON
- [ ] Browser compatibility testing
- [ ] Advanced security scanning
- [ ] Bulk iframe testing

---

Made with ❤️ using Next.js and Tailwind CSS

