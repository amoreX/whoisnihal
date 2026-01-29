import Project from "@/components/Project";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-2xl font-normal mb-4 text-white dark:text-white light:text-black">projects</h1>
      <p className="text-zinc-400 text-sm mb-8">
        a collection of things i&apos;ve built.
      </p>
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
    </div>
  );
}
