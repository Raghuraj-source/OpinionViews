'use client';
import { useState } from 'react';
import UserHeader from '@/components/user-dashboard/UserHeader';
import UserSidebar from '@/components/user-dashboard/UserSidebar';
import Footer from '@/components/Footer'; // Import the Footer component

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08205D] text-white">
      <UserHeader toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden pt-16"> {/* Adjusted padding-top to account for fixed header */}
        <UserSidebar isOpen={isSidebarOpen} />
        <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-40' : 'ml-0'} md:ml-40`}>
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            {children}
          </main>
          <Footer /> {/* Add the Footer component */}
        </div>
      </div>
    </div>
  );
}
