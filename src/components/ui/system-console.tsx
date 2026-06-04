"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface LogLine {
  text: string;
  type: "info" | "success" | "command" | "warn";
  timestamp: string;
}

// Command-response pairs covering real projects
const commandPairs: { cmd: string; responses: LogLine[] }[] = [
  {
    cmd: "uwmh --status --attica-dt",
    responses: [
      { text: "Attica Regional Digital Twin: ONLINE", type: "success", timestamp: "" },
      { text: "Hydraulic solver nodes: 144 active | Latency: 42ms", type: "info", timestamp: "" },
    ],
  },
  {
    cmd: "pestview sensors --check --floor-plan",
    responses: [
      { text: "PestView IoT mesh: 38/38 stations reporting", type: "success", timestamp: "" },
      { text: "bait_station_#24 last_trigger: 2h ago [NORMAL]", type: "info", timestamp: "" },
    ],
  },
  {
    cmd: "poeticsvr --sync --cannes-immersive",
    responses: [
      { text: "Cannes Immersive Market (79th): Sync active", type: "success", timestamp: "" },
      { text: "Playback pipeline: VR180° + Volumetric [OK]", type: "info", timestamp: "" },
    ],
  },
  {
    cmd: "scholar --fetch --recent-citations",
    responses: [
      { text: "New citation: \"Metaverse Framework for Wireless Systems\" — IEEE IoT Mag.", type: "info", timestamp: "" },
      { text: "+3 citations this week across 5 publications", type: "success", timestamp: "" },
    ],
  },
  {
    cmd: "keras-ppo --eval --cartpole-v1",
    responses: [
      { text: "PPO agent loaded (official Keras example)", type: "info", timestamp: "" },
      { text: "Eval reward: 498.2 / 500.0 | Episodes: 100", type: "success", timestamp: "" },
    ],
  },
  {
    cmd: "metatopia --dt --water-network",
    responses: [
      { text: "IMPETUS H2020 Digital Twin: data pipeline healthy", type: "success", timestamp: "" },
      { text: "PostGIS layer: 2,841 segments | WebGL render: 16ms", type: "info", timestamp: "" },
    ],
  },
  {
    cmd: "irs-sim --phase-optimize --spiking-rl",
    responses: [
      { text: "RIS phase config: 64 elements | SNN policy loaded", type: "info", timestamp: "" },
      { text: "Spiking RL convergence: 340 episodes | SNR gain: +4.2dB", type: "success", timestamp: "" },
    ],
  },
  {
    cmd: "expertassist --ar-toolkit --deploy",
    responses: [
      { text: "ExpertAssist AR overlay: calibration locked", type: "success", timestamp: "" },
      { text: "Construction worker guidance pipeline: ACTIVE", type: "info", timestamp: "" },
    ],
  },
  {
    cmd: "mages4 --session --surgical-assessment",
    responses: [
      { text: "MAGES 4.0: VR surgical session #2847 recorded", type: "info", timestamp: "" },
      { text: "CNN cutting assessment: precision 94.3% [PASS]", type: "success", timestamp: "" },
    ],
  },
  {
    cmd: "flood-sim --scenario --rainfall-extreme",
    responses: [
      { text: "Loading 100-year rainfall scenario for Attica basin...", type: "info", timestamp: "" },
      { text: "Simulation complete: 3 flood zones identified | Risk: HIGH", type: "warn", timestamp: "" },
    ],
  },
  {
    cmd: "git log --oneline -1 keras-io/ppo_cartpole",
    responses: [
      { text: "a3f829c Reviewed by @fchollet — merge to main", type: "success", timestamp: "" },
    ],
  },
  {
    cmd: "vr-museum --status --cultural-heritage",
    responses: [
      { text: "Virtual museum: 4 exhibits online | WebRTC peers: 12", type: "success", timestamp: "" },
    ],
  },
  {
    cmd: "sys_health --full",
    responses: [
      { text: "All systems nominal. Uptime: 99.97% (30d)", type: "success", timestamp: "" },
    ],
  },
];

function getTimestamp(): string {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
}

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function SystemConsole() {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [metrics, setMetrics] = useState({
    cpu: 12,
    mem: 1.4,
    uptime: 2847,
  });
  const queueRef = useRef<typeof commandPairs>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addLog = useCallback((log: Omit<LogLine, "timestamp">) => {
    setLogs((prev) => [
      ...prev.slice(-10),
      { ...log, timestamp: getTimestamp() },
    ]);
  }, []);

  // Boot sequence
  useEffect(() => {
    const bootSequence: { log: Omit<LogLine, "timestamp">; delay: number }[] = [
      { log: { text: "ssh systems-architect@iliachry.gr", type: "command" }, delay: 0 },
      { log: { text: "Authenticating via ed25519 key...", type: "info" }, delay: 600 },
      { log: { text: "Connection established. Welcome back, Ilias.", type: "success" }, delay: 1200 },
      { log: { text: "source ~/.research/env.sh", type: "command" }, delay: 2200 },
      { log: { text: "Loading: NTUA/UWMH · Metatopia · PestView · PoeticsVR", type: "info" }, delay: 2800 },
      { log: { text: "5 project environments loaded. All systems green.", type: "success" }, delay: 3600 },
    ];

    const ids: ReturnType<typeof setTimeout>[] = [];

    bootSequence.forEach(({ log, delay }) => {
      ids.push(setTimeout(() => addLog(log), delay));
    });

    timeoutsRef.current = ids;

    return () => ids.forEach(clearTimeout);
  }, [addLog]);

  // Dynamic log cycle — command + response pairs
  useEffect(() => {
    let active = true;

    const runCycle = () => {
      if (!active) return;

      // Refill & shuffle when queue is empty
      if (queueRef.current.length === 0) {
        queueRef.current = shuffle(commandPairs);
      }

      const pair = queueRef.current.shift()!;
      const ts = getTimestamp();

      // Add command
      addLog({ text: pair.cmd, type: "command" });

      // Add responses with staggered delays
      pair.responses.forEach((resp, i) => {
        const id = setTimeout(() => {
          if (active) addLog(resp);
        }, 800 + i * 900);
        timeoutsRef.current.push(id);
      });

      // Schedule next cycle
      const nextDelay = 5000 + Math.random() * 3000;
      const id = setTimeout(runCycle, nextDelay);
      timeoutsRef.current.push(id);
    };

    // Start after boot sequence
    const startId = setTimeout(runCycle, 5000);
    timeoutsRef.current.push(startId);

    return () => {
      active = false;
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [addLog]);

  // Metric fluctuation
  useEffect(() => {
    const id = setInterval(() => {
      setMetrics((prev) => ({
        cpu: Math.max(4, Math.min(28, prev.cpu + (Math.random() - 0.45) * 4)),
        mem: Math.max(1.1, Math.min(2.2, prev.mem + (Math.random() - 0.5) * 0.15)),
        uptime: prev.uptime + 1,
      }));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div
      className="w-full max-w-lg mx-auto bg-[#0A0A09] border border-border/80 rounded-lg shadow-2xl overflow-hidden font-mono text-xs text-[#9B9B96] select-none"
      role="img"
      aria-label="Animated terminal showing project system status"
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131312] border-b border-border/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E05A4E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5B54F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#54C258]" />
        </div>
        <div className="text-[10px] text-text-tertiary">
          systems-architect@iliachry.gr:~
        </div>
        <div className="w-10" />
      </div>

      {/* Terminal Content */}
      <div
        ref={scrollRef}
        className="p-4 h-[272px] overflow-y-auto space-y-1.5 flex flex-col justify-end bg-gradient-to-b from-transparent to-[#050504] scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {logs.map((log, i) => (
          <div key={i} className="leading-relaxed flex items-start gap-2 animate-[fadeIn_0.3s_ease-out]">
            <span className="text-[10px] text-[#555] shrink-0 select-none tabular-nums">
              {log.timestamp}
            </span>
            <span className="flex items-start gap-1.5">
              {log.type === "command" && (
                <span className="text-accent shrink-0">$</span>
              )}
              {log.type === "success" && (
                <span className="text-[#54C258] shrink-0">✓</span>
              )}
              {log.type === "info" && (
                <span className="text-[#6EA8FE] shrink-0">›</span>
              )}
              {log.type === "warn" && (
                <span className="text-[#E5B54F] shrink-0">⚠</span>
              )}
              <span
                className={
                  log.type === "command"
                    ? "text-[#EAEAE6] font-medium"
                    : log.type === "success"
                    ? "text-[#A8D8AA]"
                    : log.type === "warn"
                    ? "text-[#E5C97A]"
                    : "text-[#B8B8B3]"
                }
              >
                {log.text}
              </span>
            </span>
          </div>
        ))}

        {/* Blinking cursor */}
        <div className="flex items-center gap-1.5 text-[#EAEAE6]">
          <span className="text-[10px] text-[#555] select-none tabular-nums">
            {getTimestamp()}
          </span>
          <span className="text-accent">$</span>
          <span className="w-[7px] h-[14px] bg-[#EAEAE6]/80 animate-[blink_1s_step-end_infinite]" />
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="px-4 py-2 bg-[#131312] border-t border-border/40 text-[10px] text-[#555] flex items-center justify-between tabular-nums">
        <div>
          SYS{" "}
          <span className="text-[#54C258] font-medium">ACTIVE</span>
        </div>
        <div>
          CPU{" "}
          <span className={metrics.cpu > 20 ? "text-[#E5B54F]" : "text-[#9B9B96]"}>
            {metrics.cpu.toFixed(0)}%
          </span>
        </div>
        <div>
          MEM{" "}
          <span className="text-[#9B9B96]">{metrics.mem.toFixed(1)}GB</span>
        </div>
        <div>
          UP{" "}
          <span className="text-accent font-medium">{metrics.uptime}h</span>
        </div>
      </div>
    </div>
  );
}
