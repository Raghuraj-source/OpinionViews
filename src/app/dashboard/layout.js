import UserHeader from '@/components/user-dashboard/UserHeader'
import UserSidebar from '@/components/user-dashboard/UserSidebar'


export default function DashboardLayout({
  children,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#08205D] text-white">
      <UserHeader />
      <div className="flex flex-1 overflow-hidden">
        <UserSidebar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
