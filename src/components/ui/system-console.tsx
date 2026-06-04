"use client";

import { useEffect, useState } from "react";

interface LogLine {
  text: string;
  type: "info" | "success" | "command" | "error";
  timestamp: string;
}

export function SystemConsole() {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [ticks, setTicks] = useState(294812);
  const [activeNodes, setActiveNodes] = useState(144);

  useEffect(() => {
    // Initial logs
    const initialLogs: LogLine[] = [
      { text: "ssh systems-architect@iliachry.gr", type: "command", timestamp: "00:01" },
      { text: "Establishing connection to NTUA/UWMH digital twin...", type: "info", timestamp: "00:01" },
      { text: "Connection successful. Active telemetry node index: 144", type: "success", timestamp: "00:02" },
      { text: "init_model --type 2d-hydraulic-solver", type: "command", timestamp: "00:03" },
      { text: "Model Loaded: Athens Water Network. Memory allocated: 1.4GB", type: "info", timestamp: "00:03" },
      { text: "Real-time flood simulation grid ready.", type: "success", timestamp: "00:04" },
    ];

    setLogs(initialLogs);

    // Simulation tick counter
    const tickInterval = setInterval(() => {
      setTicks((prev) => prev + 1);
    }, 1000);

    // Random nodes fluctuation
    const nodesInterval = setInterval(() => {
      setActiveNodes((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(140, Math.min(148, prev + change));
      });
    }, 5000);

    // Appending dynamic logs
    let logIndex = 0;
    const dynamicLogs = [
      { text: "pestview --check-sensors --all", type: "command" },
      { text: "PestView IoT node reporting: bait_station_#24 status [NORMAL]", type: "success" },
      { text: "poeticsvr --status --cannes", type: "command" },
      { text: "Cannes Immersive Market (79th) node: Sync active [180° / Volumetric]", type: "info" },
      { text: "sys_monitor --metrics --net", type: "command" },
      { text: "UWMH solver network latency: 42ms. Loss: 0.00%", type: "success" },
    ];

    const logInterval = setInterval(() => {
      const currentLog = dynamicLogs[logIndex];
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}`;

      setLogs((prev) => [
        ...prev.slice(-8), // Keep only the last 9 logs
        { text: currentLog.text, type: currentLog.type as any, timestamp: timeStr },
      ]);

      logIndex = (logIndex + 1) % dynamicLogs.length;
    }, 8000);

    return () => {
      clearInterval(tickInterval);
      clearInterval(nodesInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0A0A09] border border-border/80 rounded-lg shadow-2xl overflow-hidden font-mono text-xs text-[#9B9B96] select-none">
      {/* Console Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131312] border-b border-border/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E05A4E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5B54F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#54C258]" />
        </div>
        <div className="text-[10px] text-text-tertiary">systems-architect@iliachry.gr:~</div>
        <div className="w-10" />
      </div>

      {/* Terminal Content */}
      <div className="p-5 h-64 overflow-y-auto space-y-2 flex flex-col justify-end bg-gradient-to-b from-transparent to-[#050504]">
        {logs.map((log, i) => (
          <div key={i} className="leading-relaxed flex items-start gap-2">
            <span className="text-[10px] text-text-tertiary shrink-0 select-none">
              [{log.timestamp}]
            </span>
            <span>
              {log.type === "command" && <span className="text-accent mr-1.5">$</span>}
              {log.type === "success" && <span className="text-[#54C258] mr-1.5">✓</span>}
              {log.type === "info" && <span className="text-[#6EA8FE] mr-1.5">i</span>}
              <span
                className={
                  log.type === "command"
                    ? "text-[#EAEAE6]"
                    : log.type === "success"
                    ? "text-[#C2E7C4]"
                    : "text-[#C9C9C4]"
                }
              >
                {log.text}
              </span>
            </span>
          </div>
        ))}
        {/* Blinking cursor */}
        <div className="flex items-center gap-1 text-[#EAEAE6]">
          <span className="text-accent">$</span>
          <span className="w-1.5 h-3 bg-[#EAEAE6] animate-pulse" />
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="px-4 py-2 bg-[#131312] border-t border-border/40 text-[10px] text-text-tertiary flex items-center justify-between">
        <div>SYS: <span className="text-[#54C258] font-medium">ACTIVE</span></div>
        <div>NODES: <span className="text-[#EAEAE6]">{activeNodes}</span></div>
        <div>SIM_TICK: <span className="text-accent font-medium">{ticks}</span></div>
      </div>
    </div>
  );
}
