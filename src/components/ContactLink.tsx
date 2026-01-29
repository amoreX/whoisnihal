import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

interface ContactLinkProps {
  title: string;
  link: string;
}

const ContactLink = ({ title, link }: ContactLinkProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group"
    >
      <div className="flex gap-1 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black items-center text-sm transition-colors duration-200">
        <div className="group-hover:underline underline-offset-4">{title}</div>
        <ArrowUpRight 
          size={12} 
          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" 
        />
      </div>
    </a>
  );
};

export default ContactLink;
