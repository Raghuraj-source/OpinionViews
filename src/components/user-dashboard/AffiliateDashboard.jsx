'use client';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfoIcon, ShieldIcon, PercentIcon, ChevronRightIcon } from 'lucide-react';

const tabs = ['Tiers', 'Affiliates', 'Leaderboard', 'Earnings', 'Promo'];

const tiers = [
  { level: 1, commission: 5, requirement: 0, active: true, color: 'emerald' },
  { level: 2, commission: 6, requirement: 10, active: false, color: 'emerald' },
  { level: 3, commission: 7, requirement: 25, active: false, color: 'emerald' },
  { level: 4, commission: 8, requirement: 50, active: false, color: 'purple' },
  { level: 5, commission: 9, requirement: 100, active: false, color: 'purple' },
  { level: 6, commission: 10, requirement: 500, active: false, color: 'purple' },
];

export default function AffiliateDashboard() {
  const [activeTab, setActiveTab] = useState('Tiers');

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variant={activeTab === tab ? 'default' : 'secondary'}
              className={`${
                activeTab === tab
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600'
                  : 'bg-gray-700 hover:bg-gray-600'
              } transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {activeTab === 'Tiers' && (
          <div>
            <div className="flex items-center mb-6 text-gray-300 bg-gray-800 p-4 rounded-lg shadow-md">
              <InfoIcon className="w-5 h-5 mr-3 flex-shrink-0 text-emerald-500" />
              <p>Reach the next Tier to earn a higher commission from your affiliates.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <TierCard key={tier.level} {...tier} />
              ))}
            </div>
          </div>
        )}

        {activeTab !== 'Tiers' && (
          <Card className="bg-gray-800 border-gray-700 shadow-xl mt-6">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">{activeTab} Content</h2>
              <p className="text-gray-400">This is where the {activeTab.toLowerCase()} content would go.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function TierCard({ level, commission, requirement, active, color }) {
  return (
    <Card className={`bg-gray-800 border-gray-700 ${active ? 'ring-2 ring-emerald-500' : ''} hover:shadow-xl transition-all duration-300`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            {active && (
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs font-bold py-1 px-2 rounded-full inline-block mb-2 shadow-md">
                ACTIVE
              </div>
            )}
            <div className="flex items-center">
              <ShieldIcon className={`w-6 h-6 mr-2 text-${color}-500`} />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Tier {level}</span>
            </div>
          </div>
          <div className="flex items-center bg-gray-700 rounded-full px-3 py-1 shadow-md">
            <PercentIcon className="w-4 h-4 mr-1 text-emerald-500" />
            <span className="font-semibold">{commission}% commission</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">Requirements</p>
          <div className="flex items-center">
            {active ? (
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 mr-3 flex items-center justify-center shadow-md">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full border border-gray-600 mr-3" />
            )}
            <span className="text-lg">${requirement.toFixed(2)} affiliate earnings</span>
          </div>
        </div>
        {!active && (
          <Button variant="outline" className="w-full mt-2 border-emerald-500 text-emerald-500 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 hover:text-white transition-all duration-300">
            Upgrade to Tier {level} <ChevronRightIcon className="w-4 h-4 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}