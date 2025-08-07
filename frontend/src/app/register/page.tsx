"use client";
import Link from 'next/link';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        setError(error.message);
      } else {
        alert('Registration successful! Please check your email to verify your account.');
        router.push('/login');
      }
    } catch (error) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-none border border-gray-200 p-10 w-full max-w-md">
        <h2 className="text-3xl text-gray-900 font-light text-center mb-2">Create Account</h2>
        <p className="text-gray-500 text-center mb-8">Join JobMatch AI and find your dream job</p>
        
        <form onSubmit={handleRegister}>
          {/* Full Name */}
          <label className="block text-gray-700 font-medium text-sm mb-2">Full Name</label>
          <div className="flex items-center border rounded px-3 mb-6">
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full py-2 px-2 outline-none bg-transparent text-gray-500"
            />
          </div>
          
          {/* Email */}
          <label className="block text-gray-700 font-medium text-sm mb-2">Email Address</label>
          <div className="flex items-center border rounded px-3 mb-6">
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
          <label className="block text-gray-700 font-medium text-sm mb-2">Password</label>
          <div className="flex items-center border rounded px-3 mb-6">
            <input
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full py-2 px-2 outline-none bg-transparent text-gray-500"
            />
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded">
              {error}
            </div>
          )}
          
          <button 
            type="submit"
            disabled={loading}
            className="mb-3 w-full h-12 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium text-lg rounded-none transition-colors"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <hr className="my-6" />
        <div className="text-center text-gray-600">
          Already have an account? <Link href="/login" className="font-medium text-black">Login</Link>
        </div>
      </div>
    </section>
  );
}