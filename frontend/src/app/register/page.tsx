import Link from 'next/link';

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-none border border-gray-200 p-10 w-full max-w-md">
        <h2 className="text-3xl text-gray-900 font-light text-center mb-2">Create Account</h2>
        <p className="text-gray-500 text-center mb-8">Join JobMatch AI and find your dream job</p>
        {/* Email */}
        <label className="block text-gray-700 font-medium text-sm mb-2">Full Name</label>
        <div className="flex items-center border rounded px-3 mb-6  ">
          {/* Email icon */}
          <input
            type="email"
            placeholder="Enter your fullname"
            className="w-full py-2 px-2 outline-none bg-transparent text-gray-500"
          />
        </div>
        <label className="block text-gray-700 font-medium text-sm mb-2">Email Address</label>
        <div className="flex items-center border rounded px-3 mb-6 ">
          {/* Email icon */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-2 outline-none bg-transparent text-gray-500"
          />
        </div>
        {/* Password */}
        <label className="block text-gray-700 font-medium text-sm mb-2">Password</label>
        <div className="flex items-center border rounded px-3 mb-6">
          {/* Lock icon */}
          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full py-2 px-2 outline-none bg-transparent text-gray-500"
          />
          {/* Eye icon */}
        </div>
        <button className="mb-3 w-full h-12 bg-black hover:bg-gray-800 text-white font-medium text-lg rounded-none">Create Account</button>
        <hr className="my-6" />
        <div className="text-center text-gray-600">
        Already have an account? <Link href="/login" className="font-medium text-black">Login</Link>
        </div>
      </div>
    </section>
  );
}