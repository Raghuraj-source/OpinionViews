import Image from 'next/image'
import SignupForm from './SignUpForm'
import Ratings from './Ratings'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#0c2864] via-[#031552] to-[#080f50] py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#ff6f61] via-[#ff9f1c] to-[#2ec4b6] bg-clip-text text-transparent animate-fade-in drop-shadow-lg">
              <span className="text-[#ff6f61] drop-shadow-md">Get rewarded</span> for Apps, Playing
              <br />
              games, and Taking Surveys
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 animate-fade-in drop-shadow-md">
              Earn up to <span className="text-[#ff6f61] font-semibold drop-shadow-md">$30.24</span> per offer • <span className="text-[#ff6f61] font-semibold drop-shadow-md">520</span> available offers now
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#6e0f9b] to-[#b22222] rounded-lg p-6 flex items-center space-x-4 animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image src="/netflix.png" width={64} height={64} alt="Netflix logo" className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg group-hover:text-[#ff6f61] transition-colors duration-300">Netflix</h3>
                <p className="text-sm text-gray-300">Start Free Trial</p>
                <p className="text-[#ff6f61] font-semibold text-lg mt-1">$5.00</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4c0a79] to-[#b31fc7] rounded-lg p-6 flex items-center space-x-4 animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image src="/DiceDreams.jpg" width={64} height={64} alt="Dice Dreams logo" className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg group-hover:text-[#FF7F17] transition-colors duration-300">Dice Dreams</h3>
                <p className="text-sm text-gray-300">Reach Level 56</p>
                <p className="text-[#ff6f61] font-semibold text-lg mt-1">$26.00</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6e0f9b] to-[#b22222] rounded-lg p-6 flex items-center space-x-4 animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image src="/tiktok-logo-icon.png" width={64} height={64} alt="TikTok logo" className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg group-hover:text-[#ff6f61] transition-colors duration-300">TikTok</h3>
                <p className="text-sm text-gray-300">Sign up</p>
                <p className="text-[#ff6f61] font-semibold text-lg mt-1">$25.00</p>
              </div>
            </div>
            {/* Add more offer cards here */}
          </div>
          <Ratings />
        </div>
        <div className="w-full lg:w-1/3 bg-[#2EC4B6] rounded-lg p-1 animate-fade-in-right lg:mt-0 mt-8">
          <SignupForm />
        </div>
      </div>
    </section>
  )
}