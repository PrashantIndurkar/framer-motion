export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: string
  author: string
  coverImage: string
  content: Array<{
    type: 'paragraph' | 'heading'
    text: string
  }>
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "startup-design-struggles",
    title: "Why Most Startups Keep Getting Design Wrong",
    description: "Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead if you want to stay clear and competitive.",
    category: "Branding",
    date: "Mar 29, 2025",
    readTime: "5 min read",
    author: "by Whenevr®",
    coverImage: "/image/imgi_54_ueqZoCFRDc46Zk64JejcJN460.png",
    content: [
      {
        type: 'paragraph',
        text: "Startups are good at moving fast. But when it comes to design, moving fast without structure can lead to confusion, delays, and messy execution. This post breaks down why design becomes a bottleneck for so many early-stage teams — and how to fix it before it slows you down."
      },
      {
        type: 'heading',
        text: "Why design feels harder than it should"
      },
      {
        type: 'paragraph',
        text: "Startups move fast. But when it comes to design, speed alone doesn't guarantee clarity. Many early-stage teams hit the same roadblocks — messy interfaces, unclear messaging, and design that can't keep up."
      },
      {
        type: 'paragraph',
        text: "If you've ever felt like your product looks half-finished or your site doesn't reflect your vision, you're not alone. Most teams aren't struggling because they don't care about design. They're struggling because they're treating it like decoration, not infrastructure."
      },
      {
        type: 'heading',
        text: "The real cost of getting design wrong"
      },
      {
        type: 'paragraph',
        text: "When design isn't working, users hesitate. They don't know what your product does. They don't know why it matters. And they leave."
      },
      {
        type: 'paragraph',
        text: "That's the surface-level cost. But behind the scenes, your team also starts to slow down. You waste time revisiting the same decisions. You go back and forth on basic layout problems. You spend energy patching things instead of moving forward."
      },
      {
        type: 'paragraph',
        text: "Design debt is real. And it compounds."
      },
      {
        type: 'heading',
        text: "Why clarity beats cleverness"
      },
      {
        type: 'paragraph',
        text: "A lot of early-stage teams overcomplicate things. They want to be memorable. Original. Different. But what people really want is clarity."
      },
      {
        type: 'paragraph',
        text: "If someone lands on your site and can't figure out what you do in five seconds, they won't dig deeper. They'll leave."
      },
      {
        type: 'paragraph',
        text: "Good design strips things down to what matters. It helps people make decisions quickly and confidently."
      },
      {
        type: 'heading',
        text: "How to make design work like the rest of your team"
      },
      {
        type: 'paragraph',
        text: "Treat design like a system, not a project. The best teams don't wait until launch to think about layout, copy, and structure. They design in real time, alongside product and strategy."
      },
      {
        type: 'paragraph',
        text: "If you're not ready to hire full-time, use a model that supports momentum. Design subscriptions work well here — they give you access to high-quality design on demand, without the overhead or delays of hiring."
      },
      {
        type: 'heading',
        text: "Moving forward"
      },
      {
        type: 'paragraph',
        text: "Design is one of the most important levers your team has. When it works, everything feels smoother. When it doesn't, everything feels harder."
      },
      {
        type: 'paragraph',
        text: "You don't need to overthink it. You just need to build a system that lets design do its job — support your product, clarify your message, and move things forward."
      }
    ]
  },
  {
    slug: "hiring-design-team",
    title: "How to Get More Done Without Hiring a Full Design Team",
    description: "Lean teams are using design subscriptions to stay fast without hiring a full in-house team.",
    category: "Operations",
    date: "Apr 12, 2025",
    readTime: "4 min read",
    author: "by Whenevr®",
    coverImage: "/image/imgi_42_ldLzFEXXuK2q3bgbFfV6MlgqbSw.jpg",
    content: []
  },
  {
    slug: "design-subscription-workflow",
    title: "What Working With a Design Subscription Actually Looks Like",
    description: "A behind the scenes look at how founders use design subscriptions to move faster.",
    category: "Workflow",
    date: "Apr 15, 2025",
    readTime: "6 min read",
    author: "by Whenevr®",
    coverImage: "/image/imgi_43_XTdwXzaaZ0uFZA76FvHmRgz1z4.jpg",
    content: []
  },
  {
    slug: "cost-of-bad-design",
    title: "The Real Cost of Bad Design (It's Not What You Think)",
    description: "Poor design slows down decisions, clutters your message and stalls growth.",
    category: "Growth",
    date: "Apr 20, 2025",
    readTime: "5 min read",
    author: "by Whenevr®",
    coverImage: "/image/imgi_44_DcNJgQIOkkv7HpGnt8XS2UJ0sGE.png",
    content: []
  }
]
