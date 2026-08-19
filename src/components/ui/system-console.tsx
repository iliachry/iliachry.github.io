"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface LogLine {
  text: string;
  type: "info" | "success" | "command" | "warn" | "system";
  timestamp?: string;
}

// Preset telemetry / command outputs
const commandPairs: { cmd: string; responses: LogLine[] }[] = [
  {
    cmd: "uwmh --status --attica-dt",
    responses: [
      { text: "Attica Regional Digital Twin: [ONLINE]", type: "success" },
      { text: "Hydraulic solver nodes: 144 active | Latency: 0.42ms", type: "info" },
    ],
  },
  {
    cmd: "pestview nodes --mesh-status",
    responses: [
      { text: "PestView IoT Mesh: 100+ Field Sensors [HEALTHY]", type: "success" },
      { text: "Telemetry gateway: 5G/NB-IoT uplink operational", type: "info" },
    ],
  },
  {
    cmd: "poeticsvr --spatial-pipeline --status",
    responses: [
      { text: "Poetics VR Cinema: 3,500+ Screenings logged", type: "success" },
      { text: "Spatial compute engine: 3D Ambisonics + Volumetric [OK]", type: "info" },
    ],
  },
  {
    cmd: "metatopia --sovereign-datacenter --telemetry",
    responses: [
      { text: "DGX Spark AI Nodes: 275 TOPS [ONLINE]", type: "success" },
      { text: "Solar PV + LiFePO4: 98.5% SOC | Zero Cloud Leaks", type: "info" },
    ],
  },
  {
    cmd: "scholar --citations --verify",
    responses: [
      { text: "Published: IEEE, ACM SIGGRAPH, Springer, Elsevier", type: "info" },
      { text: "Patent (USPTO): VR Behavioral Analysis & Spatial AI", type: "success" },
    ],
  },
  {
    cmd: "keras-ppo --eval --cartpole-v1",
    responses: [
      { text: "Official Keras example PPO agent loaded", type: "info" },
      { text: "Eval reward: 498.2 / 500.0 (Reviewed by François Chollet)", type: "success" },
    ],
  },
];

function getTimestamp(): string {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
}

export function SystemConsole() {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [metrics, setMetrics] = useState({
    cpu: 14,
    mem: 1.6,
    nodes: 104,
  });
  const queueRef = useRef<typeof commandPairs>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addLog = useCallback((log: Omit<LogLine, "timestamp">) => {
    setLogs((prev) => [
      ...prev.slice(-24),
      { ...log, timestamp: getTimestamp() },
    ]);
  }, []);

  // Boot sequence
  useEffect(() => {
    const bootSequence: { log: Omit<LogLine, "timestamp">; delay: number }[] = [
      { log: { text: "iliachry OS v3.4.0 [SOVEREIGN COMPUTE NODE]", type: "system" }, delay: 0 },
      { log: { text: "Authenticating ed25519 identity key...", type: "info" }, delay: 500 },
      { log: { text: "Access granted: Ilias Chrysovergis [Systems Architect]", type: "success" }, delay: 1000 },
      { log: { text: "Type 'help' for commands or watch live telemetry", type: "system" }, delay: 1600 },
    ];

    const ids: ReturnType<typeof setTimeout>[] = [];
    bootSequence.forEach(({ log, delay }) => {
      ids.push(setTimeout(() => addLog(log), delay));
    });
    timeoutsRef.current = ids;

    return () => ids.forEach(clearTimeout);
  }, [addLog]);

  // Background cycle for continuous live telemetry
  useEffect(() => {
    let active = true;

    const runCycle = () => {
      if (!active) return;
      if (queueRef.current.length === 0) {
        queueRef.current = [...commandPairs].sort(() => Math.random() - 0.5);
      }

      const pair = queueRef.current.shift()!;
      addLog({ text: pair.cmd, type: "command" });

      pair.responses.forEach((resp, i) => {
        const id = setTimeout(() => {
          if (active) addLog(resp);
        }, 700 + i * 800);
        timeoutsRef.current.push(id);
      });

      const nextDelay = 6000 + Math.random() * 4000;
      const id = setTimeout(runCycle, nextDelay);
      timeoutsRef.current.push(id);
    };

    const startId = setTimeout(runCycle, 3500);
    timeoutsRef.current.push(startId);

    return () => {
      active = false;
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [addLog]);

  // Metrics fluctuation
  useEffect(() => {
    const id = setInterval(() => {
      setMetrics((prev) => ({
        cpu: Math.max(8, Math.min(32, prev.cpu + (Math.random() - 0.48) * 3)),
        mem: Math.max(1.2, Math.min(2.4, prev.mem + (Math.random() - 0.5) * 0.1)),
        nodes: prev.nodes,
      }));
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    addLog({ text: cmd, type: "command" });
    setInputVal("");

    const clean = cmd.toLowerCase();
    setTimeout(() => {
      if (clean === "help") {
        addLog({
          type: "system",
          text: "COMMANDS: status | nodes | ventures | research | contact | clear | patent",
        });
      } else if (clean === "status") {
        addLog({
          type: "success",
          text: "[SYSTEM NOMINAL] 100+ IoT nodes active · Zero cloud latency · Sovereign stack",
        });
      } else if (clean === "nodes") {
        addLog({
          type: "info",
          text: "Active nodes: Attica Digital Twin (NTUA), PestView IoT Mesh, Poetics VR, Cyprus Museum",
        });
      } else if (clean === "ventures") {
        addLog({
          type: "info",
          text: "1. Metatopia  2. Sovereign Mini Datacenter  3. PestView  4. Poetics  5. OpenSpaces360",
        });
      } else if (clean === "research") {
        addLog({
          type: "info",
          text: "PhD Candidate (UTh) · Hydroinformatics & Digital Twins · Wireless RIS Spiking RL",
        });
      } else if (clean === "contact") {
        addLog({
          type: "success",
          text: "Email: iliachry@iliachry.gr · Studio: sales@metatopia.gr",
        });
      } else if (clean === "patent") {
        addLog({
          type: "success",
          text: "US Patent #10,893,828: System and Method for Virtual Reality Behavioral Assessment",
        });
      } else if (clean === "clear") {
        setLogs([]);
      } else {
        addLog({
          type: "warn",
          text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`,
        });
      }
    }, 150);
  };

  return (
    <div
      id="system-console"
      className="w-full max-w-lg mx-auto bg-black/90 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden font-mono text-xs text-zinc-400 backdrop-blur-xl"
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-950/80 border-b border-zinc-800/80 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-[10px] text-zinc-500 tracking-wider">
          sovereign@iliachry:~$
        </div>
        <div className="text-[10px] text-emerald-400/80 font-mono">
          [LIVE]
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="p-4 h-[250px] overflow-y-auto space-y-1.5 flex flex-col justify-end bg-black/60 scrollbar-none font-mono text-[11px] leading-relaxed cursor-text"
        style={{ scrollbarWidth: "none" }}
      >
        {logs.map((log, i) => (
          <div key={i} className="flex items-start gap-2 animate-[fadeIn_0.2s_ease-out]">
            {log.timestamp && (
              <span className="text-[10px] text-zinc-600 shrink-0 select-none tabular-nums">
                {log.timestamp}
              </span>
            )}
            <span className="flex items-start gap-1.5 flex-1 min-w-0">
              {log.type === "command" && (
                <span className="text-emerald-400 shrink-0 select-none">$</span>
              )}
              {log.type === "success" && (
                <span className="text-emerald-400 shrink-0 select-none">✓</span>
              )}
              {log.type === "info" && (
                <span className="text-zinc-400 shrink-0 select-none">›</span>
              )}
              {log.type === "warn" && (
                <span className="text-amber-400 shrink-0 select-none">!</span>
              )}
              {log.type === "system" && (
                <span className="text-zinc-500 shrink-0 select-none">#</span>
              )}
              <span
                className={
                  log.type === "command"
                    ? "text-white font-medium break-all"
                    : log.type === "success"
                    ? "text-emerald-300 break-words"
                    : log.type === "warn"
                    ? "text-amber-300 break-words"
                    : log.type === "system"
                    ? "text-zinc-500 break-words"
                    : "text-zinc-300 break-words"
                }
              >
                {log.text}
              </span>
            </span>
          </div>
        ))}

        {/* Interactive CLI input */}
        <form onSubmit={handleCommand} className="flex items-center gap-1.5 pt-1">
          <span className="text-emerald-400 font-mono select-none">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type command (e.g. status, help)..."
            className="flex-1 bg-transparent text-white font-mono text-[11px] placeholder:text-zinc-700 focus:outline-none caret-emerald-400"
          />
        </form>
      </div>

      {/* Footer Status Bar */}
      <div className="px-3.5 py-1.5 bg-zinc-950/90 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 flex items-center justify-between tabular-nums select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-400">DGX CLUSTER ONLINE</span>
        </div>
        <div className="flex items-center gap-3">
          <span>CPU {metrics.cpu.toFixed(0)}%</span>
          <span>MEM {metrics.mem.toFixed(1)}GB</span>
          <span className="text-emerald-400">{metrics.nodes}+ NODES</span>
        </div>
      </div>
    </div>
  );
}
