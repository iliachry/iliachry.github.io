"use client";

import React, { useState, useEffect, useRef } from "react";

const HEADER_ASCII = `
  _ _ _             _                 
 (_) (_)           | |                
  _ | |_  __ _  ___| |__  _ __ _   _  
 | || | |/ _\` |/ __| '_ \\| '__| | | | 
 | || | | (_| | (__| | | | |  | |_| | 
 |_||_|_|\\__,_|\\___|_| |_|_|   \\__, | 
                                __/ | 
                               |___/  
 ILIACHRY SOVEREIGN OS v3.4.0 [SYSTEM ACCESS]
 Type 'help' for available commands. Press 'ESC' to exit terminal.
-------------------------------------------------------------------`;

interface CyberpunkTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CyberpunkTerminal({ isOpen, onClose }: CyberpunkTerminalProps) {
  const [history, setHistory] = useState<{ type: string; text: string }[]>([
    { type: "system", text: HEADER_ASCII },
  ]);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      processCommand(inputVal.trim());
      setInputVal("");
    }
  };

  const processCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase();
    const newHistory = [
      ...history,
      { type: "user", text: `sovereign@iliachry:~$ ${cmd}` },
    ];

    switch (cleanCmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE COMMANDS:
  status     - Show live systems & engineering telemetry
  ventures   - Output active startups & products (Metatopia, PestView, Poetics)
  research   - View PhD focus, publications (IEEE, ACM) & US Patent #9965675
  bio        - Educational background & engineering trajectory
  cv         - Download official PDF Curriculum Vitae
  secret     - Restricted founder briefing
  clear      - Clear terminal output
  exit       - Close terminal & return to landing page`,
        });
        break;

      case "status":
        newHistory.push({
          type: "output",
          text: `[SYSTEM STATUS — ALL SYSTEMS OPERATIONAL]
--------------------------------------------------
Founder / Architect : Ilias Chrysovergis
Base of Operations  : Thessaloniki, Greece
Metatopia Studio    : ACTIVE (Sovereign Infrastructure)
PestView IoT Mesh   : 100+ Field Sensors [ONLINE]
Poetics VR Cinema   : 3,500+ Screenings logged
NTUA Hydro-Twin     : 144 Simulation Nodes Active
Security Autonomy   : 100% Data Sovereignty`,
        });
        break;

      case "ventures":
      case "projects":
        newHistory.push({
          type: "output",
          text: `[VENTURES & SELECTED PROJECTS]
--------------------------------------------------
1. Metatopia — Metaverse studio & 3D spatial solutions
   https://metatopia.gr
2. PestView — Cloud-based pest control management platform
3. QuimaXR — Immersive XR cinema & spatial storytelling
4. NTUA Digital Twins — Hydroinformatics & flood simulation
5. CERTH/ITI — ExpertAssist AR on-the-job construction toolkit`,
        });
        break;

      case "research":
      case "publications":
        newHistory.push({
          type: "output",
          text: `[ACADEMIC RESEARCH & PATENTS]
--------------------------------------------------
• PhD Candidate (University of Thessaly):
  Metaverse Architectures for Wireless Communications & Spiking RL
• MSc Communications & Signal Processing (Imperial College London, 71.8%)
• MEng Electrical & Computer Engineering (AUTH, Top 1%, Grade: 9.1/10)
• U.S. Patent #9965675: Using VR for Behavioral Analysis
• Published Venues: IEEE IoT Magazine, ACM SIGGRAPH, Springer, Elsevier`,
        });
        break;

      case "bio":
        newHistory.push({
          type: "output",
          text: `[PROFILE & TRAJECTORY]
--------------------------------------------------
Ilias Chrysovergis is a software architect, researcher, and founder based in Greece.
• Microsoft Imagine Cup World Champion ($50,000 Grand Prize, Seattle 2016)
• Marie Skłodowska-Curie Fellow (University of Cyprus)
• Lead ML & XR Engineer at CERTH/ITI (ExpertAssist AR toolkit)
• VR Medical simulation engine development at ORamaVR (MAGES 4.0)`,
        });
        break;

      case "cv":
      case "resume":
        newHistory.push({
          type: "output",
          text: `[RESUME / PORTFOLIO DOWNLOAD INITIATED]
Downloading /Chrysovergis_Resume_Portfolio.pdf...`,
        });
        setTimeout(() => {
          const a = document.createElement("a");
          a.href = "/Chrysovergis_Resume_Portfolio.pdf";
          a.download = "Chrysovergis_Resume_Portfolio.pdf";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }, 300);
        break;

      case "secret":
        newHistory.push({
          type: "output",
          text: `[RESTRICTED BRIEFING — SOVEREIGN COMPUTE]
--------------------------------------------------
Congratulations on unlocking the terminal.
We are engineering sovereign spatial & compute infrastructure for data autonomy.

Founder Credentials:
• Patent (USPTO) · Published (IEEE, ACM SIGGRAPH, Springer) · Imperial MSc · AUTH MEng

Direct Access:
• Email : iliachry@iliachry.gr
• Studio: sales@metatopia.gr (Subject: "Terminal Access")`,
        });
        break;

      case "clear":
        setHistory([{ type: "system", text: HEADER_ASCII }]);
        return;

      case "exit":
        onClose();
        return;

      case "":
        break;

      default:
        newHistory.push({
          type: "error",
          text: `Command not found: '${cmd}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 text-emerald-400 font-mono text-xs sm:text-sm p-4 sm:p-8 flex flex-col justify-between backdrop-blur-md selection:bg-emerald-400 selection:text-black">
      {/* Scanline CRT effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/10 via-black/80 to-black opacity-90" />

      {/* Terminal Output Area */}
      <div className="overflow-y-auto flex-1 space-y-3 z-10 pr-2 scrollbar-none">
        {history.map((item, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">
            {item.type === "system" && (
              <span className="text-emerald-500 font-bold">{item.text}</span>
            )}
            {item.type === "user" && (
              <span className="text-white font-semibold">{item.text}</span>
            )}
            {item.type === "output" && (
              <span className="text-emerald-300">{item.text}</span>
            )}
            {item.type === "error" && (
              <span className="text-rose-400">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Interactive Input Prompt */}
      <div className="z-10 pt-4 border-t border-emerald-900/50 flex items-center gap-2">
        <span className="text-emerald-400 font-bold shrink-0">
          sovereign@iliachry:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-emerald-300 outline-none border-none font-mono text-xs sm:text-sm caret-emerald-400"
          placeholder="type 'help'..."
          autoFocus
        />
        <button
          onClick={onClose}
          className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider shrink-0 px-2 py-1 border border-zinc-800 rounded cursor-pointer"
        >
          [ESC] CLOSE
        </button>
      </div>
    </div>
  );
}
