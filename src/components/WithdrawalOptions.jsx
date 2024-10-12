
import Image from 'next/image';
import { Card } from "@/components/ui/card";

const cashOptions = [
  { name: 'PayPal', icon: '/icons/paypal.svg', color: 'bg-blue-500' },
  { name: 'Bitcoin', icon: '/icons/bitcoin.svg', color: 'bg-orange-400' },
  { name: 'Airtm', icon: '/icons/airtm.svg', color: 'bg-blue-400' },
  { name: 'Stake', icon: '/icons/stake.svg', color: 'bg-teal-900' },
  { name: 'Ethereum', icon: '/icons/ethereum.svg', color: 'bg-purple-500' },
  { name: 'Litecoin', icon: '/icons/litecoin.svg', color: 'bg-slate-500' },
  { name: 'Dogecoin', icon: '/icons/dogecoin.svg', color: 'bg-yellow-400' },
  { name: 'Bank Transfer', icon: '/icons/bank.svg', color: 'bg-green-700' },
];

const giftcardOptions = [
  { name: 'Amazon', icon: '/icons/amazon.svg', color: 'bg-slate-900' },
  { name: 'Visa', icon: '/icons/visa.svg', color: 'bg-blue-700' },
  { name: 'Google Play', icon: '/icons/google-play.svg', color: 'bg-gradient-to-r from-blue-500 to-green-500' },
  { name: 'Apple', icon: '/icons/apple.svg', color: 'bg-gradient-to-r from-pink-500 to-purple-500' },
  { name: 'Netflix', icon: '/icons/netflix.svg', color: 'bg-red-600' },
  { name: 'Spotify', icon: '/icons/spotify.svg', color: 'bg-green-500' },
  { name: 'Zalando', icon: '/icons/zalando.svg', color: 'bg-orange-500' },
  { name: 'Steam', icon: '/icons/steam.svg', color: 'bg-blue-900' },
];

function WithdrawalOption({ name, icon, color }) {
  return (
    <Card className={`${color} p-4 flex flex-col items-center justify-center rounded-lg aspect-[3/4]`}>
      <Image src={icon} alt={name} width={40} height={40} className="mb-2" />
      <p className="text-white text-sm font-medium text-center">{name}</p>
    </Card>
  );
}

export default function WithdrawalOptions() {
  return (
    <section className="bg-[#08205D] py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground flex items-center mb-4">
            <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Withdraw Cash
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {cashOptions.map((option) => (
              <WithdrawalOption key={option.name} {...option} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center mb-4">
            <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            Withdraw Giftcards
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {giftcardOptions.map((option) => (
              <WithdrawalOption key={option.name} {...option} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}