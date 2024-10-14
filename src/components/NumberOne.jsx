import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Banknote, Flag, TrendingUp } from "lucide-react";

export default function NumberOne() {
  return (
    <div className="bg-[#08205D] min-h-screen py-1 px-4 sm:px-6 lg:px-8 pt-1 mb-2"> {/* Reduced bottom margin */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            We&apos;re the <span className="text-[#00ff7f]">#1</span> site to make money.{" "}
            <span className="text-[#00ff7f]">Here&apos;s why:</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Where profitable opportunity meets ease of use.
            Join our leading money-making platform today!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Banknote className="w-8 h-8 text-[#00ff7f]" />}
            title="Highest payouts"
            description="At Freecash, we offer more than 500 gaming-related tasks, which are continuously available for our members. We have the highest payouts in the industry!"
          />
          <FeatureCard
            icon={<Flag className="w-8 h-8 text-[#00ff7f]" />}
            title="Milestone rewards"
            description="Tasks generally revolve around achieving specific milestones in a game, signing up and registering, or reaching certain levels."
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8 text-[#00ff7f]" />}
            title="Go bigger"
            description="The bigger the challenge, the sweeter the reward – and we&apos;re talking rewards that go above $40! Push your limits and earn more."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-gradient-to-br from-[#6e0f9b] to-[#b22222] border-none">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-4">{description}</p>
        <Button variant="outline" className="bg-transparent text-[#00ff7f] border-[#00ff7f] hover:bg-[#00ff7f] hover:text-[#252a41]">
          Show more
        </Button>
      </CardContent>
    </Card>
  );
}