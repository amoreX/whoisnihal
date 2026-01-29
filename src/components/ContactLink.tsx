import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

interface ContactLinkProps {
  title: string;
  link: string;
}

const ContactLink = ({ title, link }: ContactLinkProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex gap-1 text-zinc-300 dark:text-zinc-300 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black items-center text-sm">
        <div>{title}</div>
        <ArrowUpRight size={12} />
      </div>
    </a>
  );
};

export default ContactLink;
