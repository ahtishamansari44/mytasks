import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ListingPage } from "@/components/ListingPage"
import { UserForm } from "@/components/UserForm"
import { Toaster } from "@/components/ui/sonner"
import { LayoutDashboard, UserPlus, Github, Linkedin } from "lucide-react"
import { motion } from "motion/react"

export default function App() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
              Tasks
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ahtishamansari44/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ahtishamansari44/mytasks"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Tasks
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive implementation of the product listing and validated user input flow.
          </p>
        </motion.div>

        <Tabs defaultValue="listing" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="h-14 p-1 bg-muted/50 rounded-2xl border border-border/50">
              <TabsTrigger 
                value="listing" 
                className="rounded-xl px-8 h-full data-[state=active]:bg-background data-[state=active]:shadow-sm gap-2 text-base font-medium"
              >
                <LayoutDashboard className="w-4 h-4" />
                Product Listing
              </TabsTrigger>
              <TabsTrigger 
                value="form" 
                className="rounded-xl px-8 h-full data-[state=active]:bg-background data-[state=active]:shadow-sm gap-2 text-base font-medium"
              >
                <UserPlus className="w-4 h-4" />
                User Registration
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="listing" className="focus-visible:outline-none">
            <ListingPage />
          </TabsContent>
          
          <TabsContent value="form" className="focus-visible:outline-none">
            <UserForm />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Tasks. Built with Vite, React, Tailwind CSS, and Shadcn UI.</p>
        </div>
      </footer>

      <Toaster position="top-center" richColors />
    </main>
  )
}
