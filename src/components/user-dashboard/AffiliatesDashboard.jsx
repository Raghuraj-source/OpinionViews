
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WalletIcon, UsersIcon, ClockIcon, CopyIcon, ShareIcon } from "lucide-react";

export default function AffiliatesDashboard() {
  return (
    <div className="p-4 md:p-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <h1 className="text-3xl font-bold">Affiliates</h1>
          <Button variant="outline" className="text-gray-400 hover:text-white border-gray-700">
            How it works
          </Button>
        </div>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  R
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Raghuraj</h2>
                  <div className="flex items-center text-sm mt-1">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded-full mr-2">Tier 1</span>
                    <span className="text-emerald-400">5% commission</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm text-gray-400">Available</p>
                  <p className="text-3xl font-bold">$0.00</p>
                </div>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Claim</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard icon={<WalletIcon className="w-6 h-6" />} label="Total Earnings" value="$0.00" />
          <StatCard icon={<UsersIcon className="w-6 h-6" />} label="Users Referred" value="0" />
          <StatCard icon={<ClockIcon className="w-6 h-6" />} label="Earnings last 30 days" value="$0.00" />
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Your referral link</h2>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <div className="flex-grow relative">
                <Input 
                  value="freecash.com/r/1bd76748a6f48386248e"
                  readOnly
                  className="bg-gray-700 text-white pr-24 w-full border-gray-600"
                />
                <Button 
                  variant="ghost" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <CopyIcon className="w-4 h-4 mr-2" />
                  Copy link
                </Button>
              </div>
              <Button className="w-full md:w-auto bg-gray-700 hover:bg-gray-600 text-white">
                <ShareIcon className="w-4 h-4 mr-2" />
                Share referral link
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value }) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-6 flex items-center space-x-4">
        <div className="bg-emerald-600 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-400">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}