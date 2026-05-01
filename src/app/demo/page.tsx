import { AnimatedFolder } from "@/components/ui/3d-folder"

const portfolioData = [
  {
    title: "Branding",
    projects: [
      { id: "1", image: "https://plus.unsplash.com/premium_photo-1723489242223-865b4a8cf7b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Lumnia" },
      { id: "2", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", title: "Prism" },
      { id: "3", image: "https://images.unsplash.com/photo-1635776062127-d379bfcbb9c8?q=80&w=2532&auto=format&fit=crop", title: "Vertex" },
    ]
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center w-full">
     
      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-center w-full">
          {portfolioData.map((folder) => (
            <AnimatedFolder key={folder.title} title={folder.title} projects={folder.projects} />
          ))}
        </div>
      </section>

    </main>
  )
}
