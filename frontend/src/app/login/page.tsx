import Link from 'next/link';

export default function LoginPage() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-none border border-gray-200 p-10 w-full max-w-md">
        <h2 className="text-3xl text-gray-900 font-light text-center mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-8">Sign in to your JobMatch AI account</p>
        {/* Email */}
        <label className="block text-gray-700 font-medium text-sm mb-1">Email Address</label>
        <div className="flex items-center border rounded px-3 mb-4 ">
          {/* Email icon */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-2 outline-none bg-transparent text-gray-500"
          />
        </div>
        {/* Password */}
        <label className="block text-gray-700 font-medium text-sm mb-1">Password</label>
        <div className="flex items-center border rounded px-3 mb-6">
          {/* Lock icon */}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full py-2 px-2 outline-none bg-transparent text-gray-500"
          />
          {/* Eye icon */}
        </div>
        <div className=" flex items-center justify-between">
          <a href="#" className="text-gray-600 text-sm hover:text-gray-900 font-medium mb-6">Forgot password?</a>
        </div>
        <button className="mb-3 w-full h-12 bg-black hover:bg-gray-800 text-white font-medium text-lg rounded-none">Login</button>
        <hr className="my-6" />
        <div className="text-center text-gray-600">
          Don&apos;t have an account? <Link href="/register" className="font-semibold text-black">Create Account</Link>
        </div>
      </div>
    </section>
  );
}