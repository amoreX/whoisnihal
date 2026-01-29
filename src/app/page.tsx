import { MapPin, GraduationCap, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Project from "@/components/Project";
import ContactLink from "@/components/ContactLink";

export default function Home() {
  return (
    <div className="flex flex-col py-8">
      {/* Name */}
      <h1 className="text-2xl font-normal mb-4 text-white dark:text-white light:text-black">Nihal Rahman</h1>

      {/* Location and Education */}
      <div className="flex flex-col mb-4">
        <div className="flex gap-4 items-center mb-2 text-zinc-400 text-sm">
          <MapPin size={16} />
          <div>bangalore, india</div>
        </div>
        <div className="flex gap-4 items-center mb-2 text-zinc-400 text-sm">
          <GraduationCap size={16} />
          <div>cmrit, 2023 - 2027</div>
        </div>
      </div>

      {/* Bio */}
      <p className="mb-8 text-sm text-white dark:text-white light:text-black">
        i&apos;m a 19 y/o cs student. i love making things. currently i am in my
        second year trying to make cool stuff.
      </p>

      {/* Projects Section */}
      <section className="flex flex-col w-full h-fit mb-8">
        <div className="text-zinc-400 mb-4 flex items-center text-sm">
          <div>projects</div>
          <a
            href="https://github.com/amorex"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 ml-auto border-transparent flex hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 rounded-lg text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black gap-2 items-center text-sm"
          >
            <div>more</div>
            <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 h-fit">
          <Project
            title="Rae"
            description="the first true AI assistant"
            link="https://www.raeai.app/"
            date="august, 2025"
          />
          <Project
            title="RecipeVerse"
            description="a recipe sharing site"
            link="https://recipev.vercel.app/"
            date="april, 2025"
          />
          <Project
            title="LeetBuddy"
            description="a Leetcode Social Platform"
            link="https://leetbuddy.vercel.app/"
            date="november, 2024"
          />
          <Project
            title="travelgo"
            description="a travel assistant app"
            link="https://trvlgo.vercel.app"
            date="january, 2025"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="text-zinc-400 mb-4 text-sm">contact</h2>
        <div className="flex gap-2 h-fit sm:gap-0 flex-col sm:flex-row justify-between text-sm">
          <ContactLink title="email" link="mailto:rahmannihal72@gmail.com" />
          <ContactLink title="github" link="https://github.com/amorex" />
          <ContactLink
            title="linkedin"
            link="https://www.linkedin.com/in/nihaliscoding/"
          />
          <ContactLink title="twitter" link="https://x.com/nihaliscoding" />
          <ContactLink
            title="instagram"
            link="https://www.instagram.com/nihal.iscooked/"
          />
        </div>
      </section>

      {/* Footer */}
      <div className="w-full border-t-2 border-zinc-700 dark:border-zinc-700 light:border-zinc-300 mb-1"></div>
      <div className="relative text-zinc-400 text-sm w-full flex">
        <div className="flex">Nihal Rahman</div>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto group hover:underline"
        >
          <div className="flex items-center gap-2">
            <div>made with</div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-zinc-400"
            >
              <mask
                id="mask0_408_139"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="180"
                height="180"
              >
                <circle cx="90" cy="90" r="90" fill="black" />
              </mask>
              <g mask="url(#mask0_408_139)">
                <circle cx="90" cy="90" r="90" fill="white" />
                <path
                  d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                  fill="url(#paint0_linear_408_139)"
                />
                <rect
                  x="115"
                  y="54"
                  width="12"
                  height="72"
                  fill="url(#paint1_linear_408_139)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_408_139"
                  x1="109"
                  y1="116.5"
                  x2="144.5"
                  y2="160.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_408_139"
                  x1="121"
                  y1="54"
                  x2="120.799"
                  y2="106.875"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
