import { Sparkles, ScanSearch, FilePenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

type DashboardTopBarProps = {
  username: string;
};

export function DashboardTopBar({ username }: DashboardTopBarProps) {
  return (
    <section className="rounded-2xl border border-cyan-400/20 bg-white/5 p-4 backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="text-sm text-white/60">Viewing dashboard for</p>
          <p className="truncate text-lg font-semibold text-cyan-300">
            @{username}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:flex xl:flex-wrap xl:justify-end">
          <Button className="h-11 rounded-xl bg-cyan-400 px-4 text-black hover:bg-cyan-300">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate AI Summary
          </Button>

          <Button
            variant="outline"
            className="h-11 rounded-xl border-white/10 bg-white/5 px-4 text-white hover:bg-white/10 hover:text-white"
          >
            <ScanSearch className="mr-2 h-4 w-4" />
            Analyze Profile
          </Button>

          <Button
            variant="outline"
            className="h-11 rounded-xl border-white/10 bg-white/5 px-4 text-white hover:bg-white/10 hover:text-white sm:col-span-2 xl:col-span-1"
          >
            <FilePenLine className="mr-2 h-4 w-4" />
            Improve Repo Description
          </Button>
        </div>
      </div>
    </section>
  );
}
