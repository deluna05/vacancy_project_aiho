"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { User } from '@supabase/supabase-js';

export default function Navigation() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <header className="items-center justify-center bg-white border-b border-gray-200 sticky top-0 z-65 py-4 px-4">
        <nav className="container mx-auto px-4 py- flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-5 w-5 text-gray-900"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
            </span>
            <Link href="/" className="flex justify-between items-center text-black font-semibold hover:text-black transition-colors">JobMatch AI</Link>
          </h1>
          <div className="flex space-x-4">
            <div className="text-gray-400">Loading...</div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="items-center justify-center bg-white border-b border-gray-200 sticky top-0 z-65 py-4 px-4">
      <nav className="container mx-auto px-4 py- flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 flex items-center">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-5 w-5 text-gray-900"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
          </span>
          <Link href="/" className="flex justify-between items-center text-black font-semibold hover:text-black transition-colors">JobMatch AI</Link>
        </h1>
        
        <div className="flex space-x-8">
          <a href="#" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">Search Jobs</a>
          <a href="#" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">Upload Resume</a>
        </div>
        
        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <span className="text-gray-600 text-sm">
                Welcome, {user.user_metadata?.full_name || user.email}
              </span>
              <Link 
                href="/profile" 
                className="px-4 py-2 text-gray-600 font-medium hover:text-black transition-colors"
              >
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-gray-600 font-medium hover:text-black transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="flex justify-between items-center text-gray-600 font-medium hover:text-black transition-colors">
                Login
              </Link>
              <Link href="/register" className="flex justify-between items-center px-5 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition-colors">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
} 