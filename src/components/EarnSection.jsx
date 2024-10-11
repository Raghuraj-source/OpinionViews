
import { FaGift, FaTrophy, FaDollarSign } from 'react-icons/fa';

export default function EarnSection() {
  return (
    <section className="py-12 bg-[#08205D] text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">How to Earn</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
            <FaGift className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Complete Offers</h3>
            <p>Participate in surveys, watch videos, and complete other offers to earn points.</p>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
            <FaTrophy className="w-12 h-12 mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Challenges</h3>
            <p>Complete daily challenges to earn bonus points and rewards.</p>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
            <FaDollarSign className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cash Out</h3>
            <p>Redeem your points for cash, gift cards, and other rewards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}