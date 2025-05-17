'use client';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen pr-20 ">
      {/* Left Side - Image */}
      <div className="w-2/3 relative hidden md:block">
        <Image
          src="/images/login-image.jpg" // replace with your actual image path
          alt="Login Illustration"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/3 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login to your account</h2>

          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
