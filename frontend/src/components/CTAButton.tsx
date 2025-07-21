import { ReactNode } from 'react';

interface CTAButtonProps {
  text: string;
  primary?: boolean;
  icon?: ReactNode;
}

export default function CTAButton({ text, primary = false, icon }: CTAButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
        primary
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
      }`}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}