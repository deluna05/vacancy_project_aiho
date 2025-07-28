import './globals.css';
import Link from 'next/link';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <header className=" items-center justify-center bg-white border-b border-gray-200 sticky top-0 z-65 py-4 px-4 ">
          <nav className="container mx-auto px-4 py- flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="mr-2">
                {}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-5 w-5 text-gray-900"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
              </span>
              <Link href="/" className="flex justify-between items-center text-black font-semibold hover:text-black transition-colors">JobMatch AI</Link>
            </h1>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">Search Jobs</a>
              <a href="#" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">Upload Resume</a>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="flex justify-between items-center text-gray-600 font-medium hover:text-black transition-colors">Login</Link>
              <Link href="/register" className="flex justify-between items-center px-5 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition-colors">
                Register
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}