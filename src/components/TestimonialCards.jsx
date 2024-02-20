'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Guitar Student',
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Piano Student',
    },
    {
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Vocal Student',
    },
    {
      quote:
        'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Violin Student',
    },
    {
      quote:
        'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
      name: 'Chris Morales',
      title: 'Music Production Student',
    },
    {
        quote:
          'The personalized attention I receive here is invaluable. The instructors understand my musical vision and provide guidance that goes beyond technical skills, nurturing my creativity as a composer.',
        name: 'Michael',
        title: 'Aspiring Composer',
      },
      {
        quote:
          'The performance opportunities provided by the school have been transformative. They not only build confidence but also connect us with industry professionals, paving the way for future success.',
        name: 'Sarah Thompson',
        title: 'Vocalist',
      },
      {
        quote:
          'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!The state-of-the-art facilities here have elevated my practice sessions. The advanced equipment allows me to explore different sounds and styles, expanding my musical horizons.',
        name: 'Alex Rodriguez',
        title: 'Guitar Enthusiast',
      },
  ];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-[#0E0E10] dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials