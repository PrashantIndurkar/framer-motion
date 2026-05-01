import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FeatureItem({ children, className }: FeatureItemProps) {
  return (
    <div className={cn("flex items-center gap-[10px] text-white", className)}>
      <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center shrink-0">
        <Plus className="h-3 w-3 text-black" strokeWidth={4} />
      </div>
      <span className="text-[16px] font-semibold font-sans leading-none">{children}</span>
    </div>
  );
}
