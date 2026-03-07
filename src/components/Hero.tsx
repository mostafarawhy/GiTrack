"use client"

import { useState } from "react"
import { Search, ArrowRight } from "lucide-react"

import {Button}

export function Hero() {
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      console.log("Analyzing:", username)
    }
  }

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-16">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Developer Analytics Platform
        </div>

        <h1 className="mb-6 text-balance text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          Analyze GitHub
          <br />
          <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
            Developer Activity
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Gain deep insights into any GitHub profile. Track repositories,
          analyze language usage, and discover developer patterns with
          powerful analytics.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter GitHub username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-12 border-border/50 bg-card/40 pl-11 pr-4 text-base backdrop-blur-sm transition-colors placeholder:text-muted-foreground/50 focus-visible:border-accent/50 focus-visible:ring-accent/20"
            />
          </div>
          <Button type="submit" size="lg" className="h-12 gap-2 px-6">
            Analyze Developer
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>

        <p className="mt-8 text-sm text-muted-foreground/50">
          Free to use. No account required.
        </p>
      </div>
    </section>
  )
}
