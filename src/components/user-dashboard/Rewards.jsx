'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RewardsContent() {
  const streakDays = [1, 2, 3, 4, 5, 6, 7];
  const bonusLadder = [
    { amount: 5.12, icon: '👑' },
    { amount: 2.56, icon: '⭐' },
    { amount: 1.28, icon: '🌟' },
    { amount: 0.64, icon: '💎' },
    { amount: 0.32, icon: '💎' },
    { amount: 0.16, icon: '💎' },
    { amount: 0.08, icon: '💎' },
    { amount: 0.04, icon: '💎' },
  ];

  return (
    <div className="p-4 sm:p-6 bg-[#1a1a2e] text-white min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <h2 className="text-xl sm:text-2xl font-bold text-green-400 flex items-center">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
          </svg>
          Opinion Views Rewards
        </h2>
        <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 text-sm sm:text-base">
          🎁 Bonus Code
        </Button>
      </div>

      <Card className="bg-gradient-to-br from-[#2a2a4a] to-[#3a2a5a] p-6 sm:p-8 mb-6 sm:mb-8 rounded-2xl shadow-xl overflow-hidden relative">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-2/3 mb-6 lg:mb-0">
            <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">NEW</span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">The most rewarding affiliate system in the market is now live!</h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-4">Earn up to <span className="text-green-400 font-bold">30% commission!</span></p>
            <p className="text-sm text-gray-400 mb-6">Gift your friends a free case and earn up to 30% commission from what they earn.</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto">
              Go to affiliates page
            </Button>
          </div>
          <div className="lg:w-1/3 hidden lg:block">
            <div className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
              <div className="relative z-1">
                <svg className="w-full h-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#32CD32" d="M44.7,-76.4C58.8,-69.8,71.8,-59.1,79.6,-45.3C87.4,-31.5,90,-14.7,88.5,1.5C87,17.7,81.4,33.4,73.3,47.5C65.2,61.6,54.6,74,41.3,79.7C28,85.4,14,84.3,-0.2,84.7C-14.4,85,-28.8,86.8,-41.9,82.1C-55,77.4,-66.8,66.2,-74.9,52.6C-83,39,-87.4,23,-89,6.4C-90.6,-10.2,-89.4,-27.4,-82.6,-41.8C-75.8,-56.2,-63.3,-67.8,-49,-74.8C-34.7,-81.8,-17.3,-84.2,-0.8,-82.8C15.8,-81.4,31.6,-76.2,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">💰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        <div className="flex-grow">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-400">7 Day Streak Rewards</h3>
          <p className="text-sm text-gray-400 mb-4 sm:mb-6">Earn $1.00 or more within 24 hours to keep your streak</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4">
            {streakDays.map((day) => (
              <Card key={day} className="bg-[#2a2a4a] p-3 sm:p-4 text-center rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="text-gray-400 mb-2 sm:mb-3">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-base sm:text-lg font-semibold mb-1">Day {day}</div>
                <div className="text-xs text-gray-500 mb-2">{day === 7 ? 'Up to $50.00' : `$0.0${day} Dollars`}</div>
                <Button variant="ghost" className="w-full mt-1 sm:mt-2 text-xs bg-green-500 hover:bg-green-600 text-white rounded-full py-1 px-2">Claim</Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-400 flex items-center">
            Daily Bonus Ladder
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
            {bonusLadder.map((bonus, index) => (
              <div key={index} className={`flex items-center justify-between p-3 rounded-xl ${index === 0 ? 'bg-green-500 text-black' : 'bg-[#2a2a4a]'} shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1`}>
                <span className="text-xl sm:text-2xl">{bonus.icon}</span>
                <span className="font-bold text-base sm:text-lg">${bonus.amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}