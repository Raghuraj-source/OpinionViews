// import ProgressBar from '@/components/user-dashboard/ProgressBar'
import FeaturedOffers from '@/components/user-dashboard/FeaturedOffers'
import FeaturedSurveys from '@/components/user-dashboard/FeaturedSurveys'

export default function Dashboard() {
  return (
    <>
       <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Welcome back, Raghuraj!</h2>
        {/* <ProgressBar progress={65} /> */}
       </div> 
      <FeaturedOffers />
      <FeaturedSurveys />
    </>
  )
}