import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";

function HelloWorld() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
        <span className="font-display font-semibold text-lg tracking-tight text-foreground">
          Hello World
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          data-ocid="theme.toggle"
          className="relative rounded-full transition-colors duration-200 hover:bg-muted"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-accent tracking-tight leading-tight mb-4"
            data-ocid="hero.heading"
          >
            Hello World
          </h1>
          <p
            className="text-muted-foreground text-lg sm:text-xl font-body max-w-md mx-auto"
            data-ocid="hero.tagline"
          >
            A clean, minimal starting point for your next big idea.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/40 border-t border-border px-6 py-4 text-center">
        <p className="text-muted-foreground text-sm font-body">
          &copy; {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors duration-200 underline-offset-4 hover:underline"
            data-ocid="footer.caffeine_link"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <HelloWorld />
    </ThemeProvider>
  );
}
