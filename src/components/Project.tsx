import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

interface ProjectProps {
  title: string;
  link: string;
  date: string;
  description: string;
}

const Project = ({ title, link, date, description }: ProjectProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex relative flex-col w-full h-20 rounded-lg group border-2 border-transparent hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300"
    >
      <div className="group-hover:opacity-100 opacity-0 absolute right-0 top-0 text-xs flex items-center bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-200 p-1.5 rounded-bl-lg transition-opacity">
        <ArrowUpRight size={12} />
      </div>
      <div className="p-0 group-hover:p-2 transition-all duration-75">
        <div className="flex lg:flex-row flex-col gap-2 text-base font-normal text-white dark:text-white light:text-black">
          <div className="group-hover:underline">{title}</div>
          <div className="text-zinc-400 text-xs">{date}</div>
        </div>
        <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600">{description}</p>
      </div>
    </a>
  );
};

export default Project;
