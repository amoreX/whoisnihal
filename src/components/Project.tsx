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
      className="flex relative flex-col w-full h-fit min-h-[80px] rounded-lg group border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 hover:border-zinc-600 dark:hover:border-zinc-600 light:hover:border-zinc-400 transition-all duration-200 hover:bg-zinc-900/50 dark:hover:bg-zinc-900/50 light:hover:bg-zinc-50 glow-hover"
    >
      <div className="group-hover:opacity-100 opacity-0 absolute right-2 top-2 text-xs flex items-center text-zinc-400 group-hover:text-white transition-all duration-200">
        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="text-base font-medium text-white dark:text-white light:text-black group-hover:text-white">
            {title}
          </div>
          <div className="text-zinc-600 text-xs font-normal">{date}</div>
        </div>
        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{description}</p>
      </div>
    </a>
  );
};

export default Project;
