import React, { useEffect, useState } from "react";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";

interface AdminSidebarProps {
  setActiveNav: (nav: string) => void;
}

interface DecodedToken {
  role: string;
  id: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ setActiveNav }) => {
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        setUserRole(decoded.role);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  // Define visible routes for each role
  const routes = {
    admin: [
      { name: "Dashboard", path: "/admin" },
      { name: "Gym Members", path: "/admin/gym-member" },
      { name: "Attendance", path: "/admin/attendance-list" },
      { name: "Staff", path: "/admin/staff" },
      { name: "Employees", path: "/admin/employee" },
      { name: "Stock", path: "/admin/stock" },
      { name: "Financial Report", path: "/admin/financial-report" },
      { name: "Services", path: "/admin/services" },
      { name: "Requests", path: "/admin/subscription-request" },
    ],
    moderator: [
      { name: "Dashboard", path: "/admin" },
      { name: "Gym Members", path: "/admin/gym-member" },
      { name: "Attendance", path: "/admin/attendance-list" },
      { name: "Services", path: "/admin/services" },
      { name: "Requests", path: "/admin/subscription-request" },
    ],
    root: [
      { name: "Dashboard", path: "/admin" },
      { name: "Gym Members", path: "/admin/gym-member" },
      { name: "Attendance", path: "/admin/attendance-list" },
      { name: "Staff", path: "/admin/staff" },
      { name: "Employees", path: "/admin/employee" },
      { name: "Stock", path: "/admin/stock" },
      { name: "Financial Report", path: "/admin/financial-report" },
      { name: "Services", path: "/admin/services" },
      { name: "Requests", path: "/admin/subscription-request" },
    ],
  };

  const getNavItems = () => {
    if (userRole === "admin") return routes.admin;
    if (userRole === "moderator") return routes.moderator;
    if (userRole === "root") return routes.root;
    return [];
  };

  const navItems = getNavItems();

  return (
    <aside className="bg-black w-40 text-white flex flex-col border-r-[0.5px] border-gray-800 h-screen z-50 overflow-y-auto">
      <nav className="flex-grow mx-auto flex flex-col gap-4 pt-10 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="w-full text-left px-4 font-extralight py-3 hover:text-customBlue focus:text-customBlue"
            onClick={() => setActiveNav(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;