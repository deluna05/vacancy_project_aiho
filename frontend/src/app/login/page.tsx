"use client";
import Link from 'next/link';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        // Redirect to home page after successful login
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-none border border-gray-200 p-10 w-full max-w-md">
        <h2 className="text-3xl text-gray-900 font-light text-center mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-8">Sign in to your JobMatch AI account</p>
        
        <form onSubmit={handleLogin}>
          {/* Email */}
          <label className="block text-gray-700 font-medium text-sm mb-1">Email Address</label>
          <div className="flex items-center border rounded px-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full py-2 px-2 outline-none bg-transparent text-gray-500"
            />
          </div>
          
          {/* Password */}
          <label className="block text-gray-700 font-medium text-sm mb-1">Password</label>
          <div className="flex items-center border rounded px-3 mb-6">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full py-2 px-2 outline-none bg-transparent text-gray-500"
            />
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded">
              {error}
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900 font-medium mb-6">Forgot password?</a>
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className="mb-3 w-full h-12 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium text-lg rounded-none transition-colors"
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
        
        <hr className="my-6" />
        <div className="text-center text-gray-600">
          Don&apos;t have an account? <Link href="/register" className="font-semibold text-black">Create Account</Link>
        </div>
      </div>
    </section>
  );
}