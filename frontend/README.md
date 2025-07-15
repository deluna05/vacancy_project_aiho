# Job Match Frontend

A Next.js frontend for the Job Match application with TypeScript, Tailwind CSS, and modern development practices.

## Project Structure

```
frontend/
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable components
│   ├── lib/           # Utility functions
│   ├── types/         # TypeScript type definitions
│   └── hooks/         # Custom React hooks
├── public/            # Static assets
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── README.md         # This file
```

## Features

- **Next.js 14**: Latest version with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code quality and consistency
- **Responsive Design**: Mobile-first approach
- **Fast Development**: Hot reload and optimized builds

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Project Structure Guidelines

#### Components
- Place reusable components in `src/components/`
- Use TypeScript interfaces for props
- Follow naming convention: `ComponentName.tsx`

#### Pages
- Use the App Router structure in `src/app/`
- Create route folders for dynamic routes
- Use `layout.tsx` for shared layouts

#### Styling
- Use Tailwind CSS classes
- Create custom components for complex styling
- Use CSS modules for component-specific styles if needed

#### API Integration
- Create API client functions in `src/lib/api/`
- Use TypeScript interfaces for API responses
- Implement error handling and loading states

### Example Component Structure

```typescript
// src/components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button 
      className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

## Backend Integration

This frontend is designed to work with the FastAPI backend:

- **API Base URL**: `http://localhost:8000`
- **CORS**: Configured for local development
- **Authentication**: JWT token-based (to be implemented)

### Environment Variables

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=Job Match
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

- **Netlify**: Use `npm run build` and deploy the `out` directory
- **Railway**: Connect GitHub repository
- **Docker**: Create a Dockerfile for containerized deployment

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## Contributing

1. Follow the existing code style
2. Use TypeScript for all new code
3. Write meaningful commit messages
4. Test your changes before submitting
