import { Sparkles, ScanSearch, FilePenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AiActionsSection() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-white">AI Actions</h3>
        <p className="text-sm text-white/50">
          Future-facing tools for profile analysis and content improvement
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <Button className="h-12 justify-start rounded-xl bg-cyan-400 text-black hover:bg-cyan-300">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate AI Summary
        </Button>

        <Button
          variant="outline"
          className="h-12 justify-start rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
        >
          <ScanSearch className="mr-2 h-4 w-4" />
          Analyze Profile
        </Button>

        <Button
          variant="outline"
          className="h-12 justify-start rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
        >
          <FilePenLine className="mr-2 h-4 w-4" />
          Improve Repo Description
        </Button>
      </div>
    </section>
  );
}
