import { ArrowUpRight, XLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="flex flex-col py-12 stagger-children">
      {/* Name */}
      <h1 className="text-2xl font-medium mb-2 text-white dark:text-white light:text-black tracking-tight">
        nihal rahman
      </h1>
      
      {/* Age */}
      <p className="text-zinc-500 text-sm mb-6">
        20 y/o
      </p>

      {/* Status */}
      <div className="text-sm mb-8 space-y-3 max-w-lg">
        <p className="text-zinc-400">
          currently cloning @{" "}
          <a 
            href="https://ghost.engineer" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            ghost
          </a>
        </p>
        <p className="text-zinc-400">
          prev. co-founded{" "}
          <a 
            href="https://www.raeai.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-violet-400 hover:text-violet-300 transition-colors"
          >
            rae
          </a>
          {" "}- cool desktop buddy/agent
        </p>
        <p className="text-zinc-400">
          i fw oss heavy -{" "}
          <span className="text-zinc-300">raycast</span>,{" "}
          <span className="text-zinc-300">ollama</span>,{" "}
          <span className="text-zinc-300">moltbot</span>
        </p>
      </div>

      {/* About */}
      <div className="text-sm mb-8 max-w-lg border-l-2 border-zinc-800 pl-4 space-y-4">
        <p className="text-zinc-500 leading-relaxed">
          i like building things that feel alive. obsessed with making ai actually useful, 
          not just cool demos. when i&apos;m not coding, i&apos;m probably breaking something 
          trying to make it better.
        </p>
        <p className="text-zinc-500 leading-relaxed">
          either that or prolly busy obsessing about something i found cool last night.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          aside from coding am also grinding{" "}
          <span className="text-zinc-300">trekking</span>
          <span className="text-zinc-600 mx-1">·</span>
          <span className="text-zinc-300">skateboarding</span>
        </p>
        
        {/* Photo grid */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="aspect-square rounded-lg overflow-hidden border border-zinc-800">
            <img 
              src="/images/maconskate.jpeg" 
              alt="" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden border border-zinc-800">
            <img 
              src="/images/skate1.jpeg" 
              alt="" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden border border-zinc-800">
            <img 
              src="/images/trek1.jpeg" 
              alt="" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <p className="text-zinc-600 text-xs pt-2">
          p.s. its hard without agents 
        </p>
      </div>

      {/* Projects */}
      <div className="text-sm mb-8">
        <p className="text-zinc-400">
          projects @{" "}
          <a 
            href="https://github.com/amoreX/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            github
            <ArrowUpRight size={10} className="inline ml-0.5 opacity-50" />
          </a>
        </p>
      </div>

      {/* Links */}
      <div className="flex gap-5 text-sm">
        <a 
          href="https://x.com/nihaliscoding" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
        >
          <XLogo size={16} weight="fill" />
          
        </a>
        <a 
          href="https://www.linkedin.com/in/nihaliscoding/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
        >
          <LinkedinLogo size={16} weight="fill" />
          <span className="hidden sm:inline">linkedin</span>
        </a>
        <a 
          href="mailto:rahmannihal72@gmail.com"
          className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
        >
          <EnvelopeSimple size={16} />
          <span className="hidden sm:inline">email</span>
        </a>
      </div>
    </div>
  );
}
