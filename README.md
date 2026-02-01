# Valentine Glow

A beautiful, interactive Valentine's Day web experience built with modern web technologies.

## Project Description

Valentine Glow is an elegant and romantic web application designed to create memorable Valentine's Day moments. Features include animated hearts, interactive surprises, memory galleries, and personalized love messages.

## Technologies Used

This project is built with:

- **Vite** - Next-generation frontend tooling
- **TypeScript** - Type-safe JavaScript
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - High-quality React components
- **Framer Motion** - Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd valentine-glow

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
valentine-glow/
├── src/
│   ├── components/          # React components
│   │   └── valentine/       # Valentine-specific components
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions
├── public/                  # Static assets
└── index.html              # Entry HTML file
```

## Deployment

You can deploy this application to any static hosting service:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions to deploy automatically

## License

This project is private and for personal use.
