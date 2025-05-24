"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {jwtDecode } from "jwt-decode"; // Updated import
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Updated import

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface CustomJwtPayload {
  role: string;
  status: string;
}

const LoginPage = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const loginData = { phoneNumber, password };

    try {
      const response = await fetch(
        `${NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        if (typeof window !== "undefined") {
          localStorage.setItem("token", data.token);
        }

        const decodedToken = jwtDecode<CustomJwtPayload>(data.token);
        const { role, status } = decodedToken;

        if (role === "admin" || role === "moderator" || role === "root") {
          router.push("/en/admin");
        } else if (role === "user") {
          const userRoutes: { [key: string]: string } = {
            inactive: "/en/inactive-user",
            pending: "/en/pending-user",
            dormant: "/en/dormant-user",
            expired: "/en/user",
            active: "/en/user",
          };
          router.push(userRoutes[status] || "/en/user");
        }
      } else {
        setErrorMessage(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen md:pr-20">
      <div className="w-2/3 relative hidden lg:block">
        <Image
          src="/coverPic.jpg" 
          alt="Login Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full lg:w-1/3 flex items-center justify-center px-4 md:px-8 py-12">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-center">Log in to Account</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFF200] text-sm md:text-base"
                placeholder="Phone Number"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFF200] text-sm md:text-base"
                placeholder="••••••••"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#242424] text-[#FFF200] py-2 rounded-md transition text-sm md:text-base"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Login"
              )}
            </button>
          </form>
          {errorMessage && (
            <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;