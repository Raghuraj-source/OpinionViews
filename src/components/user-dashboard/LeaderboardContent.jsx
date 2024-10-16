'use client';
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LeaderboardContent() {
  const [timeframe, setTimeframe] = useState('daily');

  const leaderboardData = [
    { rank: 2, username: "It's me", prize: 35, avatar: "Y" },
    { rank: 1, username: "RAGHURAJ...", prize: 50, avatar: "M" },
    { rank: 3, username: "Pamela", prize: 17.50, avatar: "P" },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-[#6e0f9b] to-[#a52424] text-white min-h-screen">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-400">$500 LEADERBOARD</h2>
        <div className="inline-flex rounded-full shadow-sm overflow-hidden" role="group">
          <Button
            variant={timeframe === 'daily' ? 'default' : 'outline'}
            className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
              timeframe === 'daily' ? 'bg-green-500 text-white' : 'bg-[#232344] text-gray-300 hover:bg-[#2a2a5a]'
            }`}
            onClick={() => setTimeframe('daily')}
          >
            $500 daily
          </Button>
          <Button
            variant={timeframe === 'monthly' ? 'default' : 'outline'}
            className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
              timeframe === 'monthly' ? 'bg-green-500 text-white' : 'bg-[#232344] text-gray-300 hover:bg-[#2a2a5a]'
            }`}
            onClick={() => setTimeframe('monthly')}
          >
            $5,000 monthly
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {leaderboardData.map((user) => (
          <Card key={user.rank} className="bg-[#121263] p-4 sm:p-6 text-center rounded-2xl overflow-hidden relative shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full ${
              user.rank === 1 ? 'bg-yellow-500' : user.rank === 2 ? 'bg-gray-400' : 'bg-orange-500'
            }`}>
              {user.rank}
            </div>
            <div className="mt-4 sm:mt-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2a2a5a] flex items-center justify-center mx-auto mb-3 sm:mb-4 border-4 border-green-400">
                <span className="text-2xl sm:text-3xl font-bold">{user.avatar}</span>
              </div>
              <p className="text-lg sm:text-xl font-semibold truncate mb-1 sm:mb-2">{user.username}</p>
              <p className="text-green-400 font-bold text-xl sm:text-2xl">${user.prize}</p>
              <p className="text-gray-400 text-sm">Prize</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-[#232344] p-4 sm:p-6 rounded-2xl shadow-lg">
        <p className="text-blue-400 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
          <span className="bg-blue-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 inline-flex items-center justify-center mr-2 sm:mr-3">R</span>
          You earned today - and are ranked - out of 16,587.
        </p>
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 mb-2">
          <span>Rank User</span>
          <span>Earnings</span>
          <span>Prize</span>
        </div>
        <div className="flex justify-between items-center py-2 border-t border-gray-700">
          <span className="flex items-center">
            <span className="bg-yellow-500 text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 inline-flex items-center justify-center mr-1 sm:mr-2 text-xs sm:text-sm">1</span>
            <span className="bg-green-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 inline-flex items-center justify-center mr-1 sm:mr-2 text-xs sm:text-sm">M</span>
            <span className="font-semibold text-sm sm:text-base">RAGHU</span>
          </span>
          <span className="text-green-400 font-semibold text-sm sm:text-base">$250</span>
          <span className="text-green-400 font-semibold text-sm sm:text-base">$50</span>
        </div>
        <div className="flex justify-between items-center py-2 border-t border-gray-700">
          <span className="flex items-center">
            <span className="bg-yellow-500 text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 inline-flex items-center justify-center mr-1 sm:mr-2 text-xs sm:text-sm">2</span>
            <span className="bg-green-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 inline-flex items-center justify-center mr-1 sm:mr-2 text-xs sm:text-sm">M</span>
            <span className="font-semibold text-sm sm:text-base">HARSH</span>
          </span>
          <span className="text-green-400 font-semibold text-sm sm:text-base">$250</span>
          <span className="text-green-400 font-semibold text-sm sm:text-base">$50</span>
        </div>
        <div className="flex justify-between items-center py-2 border-t border-gray-700">
          <span className="flex items-center">
            <span className="bg-yellow-500 text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 inline-flex items-center justify-center mr-1 sm:mr-2 text-xs sm:text-sm">3</span>
            <span className="bg-green-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 inline-flex items-center justify-center mr-1 sm:mr-2 text-xs sm:text-sm">M</span>
            <span className="font-semibold text-sm sm:text-base">Pamela</span>
          </span>
          <span className="text-green-400 font-semibold text-sm sm:text-base">$250</span>
          <span className="text-green-400 font-semibold text-sm sm:text-base">$50</span>
        </div>
      </Card>

      <div className="mt-4 sm:mt-6 text-right text-gray-400 flex items-center justify-end text-sm sm:text-base">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Ends in 14h 06m 55s
      </div>
    </div>
  );
}