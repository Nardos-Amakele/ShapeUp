'use client';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen md:pr-20">
      {/* Left Side - Image (hidden on mobile) */}
      <div className="w-2/3 relative hidden lg:block">
        <Image
          src="/coverPic.jpg" 
          alt="Login Illustration"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Side - Login Form (centered on mobile) */}
      <div className="w-full lg:w-1/3 flex items-center justify-center px-4 md:px-8 py-12">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-center">Log in to Account</h2>

          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFF200] text-sm md:text-base"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFF200] text-sm md:text-base"
                placeholder="••••••••"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#242424] text-[#FFF200] py-2 rounded-[8px] transition text-sm md:text-base"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}