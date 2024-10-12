import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { StarIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    rating: 5,
    title: "If you need some extra cash this is your app",
    content: "Here is my honest review of Freecash. You are not going to earn a full time income from this app (unless you have a lot",
    author: "Alvaro de la Llave",
    date: "May 07, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "Is the good application and Im so happy",
    content: "Is the good application and Im so happy to start download this application thank you so much",
    author: "Oussama Abida",
    date: "May 08, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "Great Service",
    content: "Great Service, good Games",
    author: "Marcello Blümel",
    date: "May 07, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "Earn some money on the side",
    content: "Great games with which you can earn some \"pocket money\" on the side.",
    author: "Ricardo",
    date: "May 07, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "100% authentic",
    content: "100% authentic, read the user terms and conditions for the apps",
    author: "100% authentic",
    date: "May 06, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "Great offers and great games",
    content: "Honestly so thankful for sites like this! I have a full time job and it's still hard to make ends meet",
    author: "Megan",
    date: "May 05, 2024",
    avatar: "/user.png"
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#08205D] py-8 px-4 sm:px-6 lg:px-8"> {/* Reduced top padding */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold font-sans mb-6 text-center text-[#e2ad3b]">Everyone's talking about Opinion Views</h2>
        <p className="text-2xl font-bold font-sans mb-6 text-center text-[#e23bda]">
          Join the Opinion Views Revolution Discover Why Everyone's Talking About Our Money-Making Platform!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#6e0f9b] to-[#b22222] text-foreground p-6 flex flex-col items-start">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-primary" />
                ))}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{testimonial.title}</h3>
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              {testimonial.author && (
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}