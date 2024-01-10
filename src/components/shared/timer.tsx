import { useTimer } from "react-timer-hook";

import { cn } from "@/lib/utils";

interface TimerProps {
  expiryTimestamp: Date;
  className?: string;
}

function formatTimeLeft(time: number) {
  return `${time < 10 ? "0" : ""}${time}`;
}

export default function Timer({ expiryTimestamp, className }: TimerProps) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    autoStart: true,
  });

  return (
    <div className={cn("font-bold text-3xl", className)}>
      {days ? <span>{days}:</span> : null}
      {hours ? <span>{formatTimeLeft(hours)}:</span> : "00:"}
      {minutes ? <span>{formatTimeLeft(minutes)}:</span> : "00:"}
      {seconds ? <span>{formatTimeLeft(seconds)}</span> : "00"}
    </div>
  );
}
