"use client";

import { useState } from "react";

const FightMe = ({ blogTitle }: { blogTitle: string }) => {
  const [message, setMessage] = useState("");

  const handleFight = () => {
    if (!message.trim()) return;
    const subject = encodeURIComponent(`fighting you about: ${blogTitle}`);
    const body = encodeURIComponent(message);
    window.open(
      `https://mail.google.com/mail/?view=cm&to=rahmannihal72@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <div className="mt-16 pt-8 border-t border-zinc-800">
      <h3 className="text-sm text-zinc-400 mb-1">disagree?</h3>
      <p className="text-xs text-zinc-600 mb-4">
        write what you wanna fight about and i&apos;ll read it. probably.
      </p>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="you're wrong about..."
        rows={3}
        className="w-full bg-transparent border border-zinc-800 rounded-sm px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 resize-none transition-colors"
      />
      <button
        onClick={handleFight}
        disabled={!message.trim()}
        className="mt-3 px-4 py-2 text-sm border border-zinc-800 rounded-sm text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-zinc-400 disabled:hover:border-zinc-800"
      >
        fight me →
      </button>
    </div>
  );
};

export default FightMe;
