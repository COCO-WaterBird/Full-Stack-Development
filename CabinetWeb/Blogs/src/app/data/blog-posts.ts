export interface BlogPost {
  id: number;
  imageUrl: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  featured?: boolean;
  content?: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcwNjA4NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Modern Kitchen Design Trends for 2024",
    excerpt: "Discover the latest trends in kitchen design and how to incorporate them into your home.",
    date: "Feb 7, 2024",
    category: "Kitchen Design Ideas",
    featured: true,
    author: "Sarah Johnson",
    content: `
      <p>The kitchen continues to evolve as the heart of the modern home, and 2024 brings exciting new design trends that blend functionality with stunning aesthetics. Whether you're planning a complete renovation or simply looking to update your space, understanding these trends can help you create a kitchen that's both beautiful and timeless.</p>

      <figure class="my-8">
        <img
          src="https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?auto=format&fit=crop&w=1200&q=80"
          alt="Modern kitchen with two-tone cabinets"
          class="w-full rounded-xl"
        />
      </figure>

      <h2>1. Two-Tone Cabinet Combinations</h2>
      <p>One of the hottest trends this year is the two-tone cabinet look. Designers are pairing darker lower cabinets with lighter upper cabinets to create visual interest and depth. Popular combinations include navy blue bottoms with white or cream tops, or natural wood lower cabinets paired with painted upper cabinets. This approach adds personality while maintaining a sophisticated feel.</p>

      <h2>2. Integrated Appliances</h2>
      <p>Seamless, integrated appliances that blend with cabinetry continue to gain popularity. Panel-ready refrigerators, dishwashers, and even range hoods that match your cabinet style create a cohesive, streamlined look. This trend is particularly popular in modern and contemporary kitchens where clean lines are paramount.</p>

      <h2>3. Statement Islands</h2>
      <p>Kitchen islands are becoming more than just functional workspace—they're statement pieces. Expect to see islands with contrasting colors, unique countertop materials, and dramatic lighting fixtures above them. Many homeowners are choosing to make their island the focal point of the kitchen with bold colors or interesting textures.</p>

      <figure class="my-8">
        <img
          src="https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?auto=format&fit=crop&w=1200&q=80"
          alt="Kitchen island as a statement piece"
          class="w-full rounded-xl"
        />
      </figure>

      <h2>4. Natural Materials</h2>
      <p>There's a strong movement toward natural, sustainable materials. Wood tones, stone countertops, and natural fibers are replacing synthetic materials. Live-edge wood accents, marble backsplashes, and organic textures bring warmth and authenticity to kitchen spaces.</p>

      <h2>5. Smart Storage Solutions</h2>
      <p>With smaller living spaces becoming more common, innovative storage solutions are essential. Pull-out pantries, corner cabinet organizers, vertical dividers, and hidden storage compartments help maximize every inch of space while keeping kitchens clutter-free and organized.</p>

      <p>As you plan your kitchen design, remember that the best trends are those that align with your lifestyle and personal taste. These 2024 trends offer plenty of inspiration, but the most important thing is creating a space that works for you and your family.</p>
    `
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1653087881002-071d4c840f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldHMlMjB3aGl0ZXxlbnwxfHx8fDE3NzA2ODUxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "The Ultimate Guide to White Kitchen Cabinets",
    excerpt: "Everything you need to know about choosing and maintaining white kitchen cabinets.",
    date: "Feb 5, 2024",
    category: "Kitchen Cabinets",
    author: "Michael Chen",
    content: `
      <p>White kitchen cabinets have remained a classic choice for decades, and for good reason. They offer timeless appeal, versatility, and the ability to make spaces feel larger and brighter. However, choosing the right shade of white and understanding maintenance requirements is crucial for long-term satisfaction.</p>

      <figure class="my-8">
        <img
          src="https://images.unsplash.com/photo-1653087881002-071d4c840f9e?auto=format&fit=crop&w=1200&q=80"
          alt="Bright white kitchen cabinets"
          class="w-full rounded-xl"
        />
      </figure>

      <h2>Why Choose White Cabinets?</h2>
      <p>White cabinets offer numerous advantages. They reflect light, making kitchens feel more spacious and bright. They provide a neutral backdrop that works with virtually any design style, from traditional to ultra-modern. White cabinets also have strong resale value, appealing to a broad range of potential buyers.</p>

      <h2>Choosing the Right Shade of White</h2>
      <p>Not all whites are created equal. Pure bright white works well in modern kitchens with plenty of natural light. Warm whites with cream or beige undertones suit traditional or farmhouse styles. Cool whites with gray undertones complement contemporary designs. Always test paint samples in your kitchen's lighting conditions before making a final decision.</p>

      <h2>Material Considerations</h2>
      <p>White cabinets can be achieved through various methods: painted wood (offering the most authentic look), thermofoil (budget-friendly and durable), laminate (easy to clean), or acrylic (high-gloss modern finish). Each has different maintenance requirements and price points.</p>

      <figure class="my-8">
        <img
          src="https://images.unsplash.com/photo-1612157777902-5382bc6e864b?auto=format&fit=crop&w=1200&q=80"
          alt="Detail of white cabinet hardware and materials"
          class="w-full rounded-xl"
        />
      </figure>

      <h2>Maintenance Tips</h2>
      <p>White cabinets require regular cleaning to maintain their pristine appearance. Wipe down surfaces weekly with a soft cloth and mild soap solution. Address spills and splatters immediately. Avoid harsh chemicals that can yellow white finishes over time. Consider quality cabinet paint with built-in stain resistance.</p>

      <h2>Styling White Cabinets</h2>
      <p>White cabinets serve as a perfect canvas for personal expression. Add interest through hardware choices, colorful backsplashes, contrasting countertops, or a bold island color. The versatility of white allows you to change accessories and décor without replacing cabinets.</p>

      <p>With proper selection and care, white kitchen cabinets can provide decades of beautiful, functional service while adapting to changing style preferences over time.</p>
    `
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1768578927267-d589f8a294b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZGVzaWduJTIwaWRlYXN8ZW58MXx8fHwxNzcwNjg1MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Small Kitchen Design Ideas That Maximize Space",
    excerpt: "Creative solutions for making the most of your compact kitchen space.",
    date: "Feb 3, 2024",
    category: "Kitchen Design Ideas"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1609280069678-ab9ef26a0b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVtb2RlbHxlbnwxfHx8fDE3NzA2ODUxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Kitchen Remodel: Where to Start and What to Expect",
    excerpt: "A comprehensive guide to planning and executing your kitchen remodel project.",
    date: "Jan 30, 2024",
    category: "Kitchen Remodel Tips"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1680210849773-f97a41c6b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3MDYwOTY0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Eco-Friendly Cabinet Materials for a Sustainable Kitchen",
    excerpt: "Learn about environmentally friendly options for your kitchen cabinets.",
    date: "Jan 28, 2024",
    category: "Eco-friendly Cabinets"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1618832515490-e181c4794a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NzA2ODUxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Choosing the Right Cabinet Hardware for Your Style",
    excerpt: "How to select cabinet handles and knobs that complement your kitchen design.",
    date: "Jan 25, 2024",
    category: "Cabinet Hardware"
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcwNjA4NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Shaker Cabinets: Timeless Style for Modern Kitchens",
    excerpt: "Why shaker-style cabinets remain a popular choice for homeowners.",
    date: "Jan 22, 2024",
    category: "Shaker Cabinets"
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1653087881002-071d4c840f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldHMlMjB3aGl0ZXxlbnwxfHx8fDE3NzA2ODUxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "RTA Cabinets: Budget-Friendly Kitchen Solutions",
    excerpt: "Explore the benefits of ready-to-assemble cabinets for your kitchen renovation.",
    date: "Jan 20, 2024",
    category: "RTA Cabinets"
  }
];

export const categories = [
  "Eco-friendly Cabinets",
  "Kitchen Design Ideas",
  "Kitchen Cabinets",
  "Bathroom Cabinets",
  "Kitchen Remodel Tips",
  "Cabinet Hardware",
  "Shaker Cabinets",
  "RTA Cabinets",
];