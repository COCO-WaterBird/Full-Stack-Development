interface CategoryContent {
  intro: string;
  seo: string;
}

interface CategoryContentMap {
  [key: string]: CategoryContent;
}

export const categoryContent: CategoryContentMap = {
  "eco-friendly cabinets": {
    intro: "Discover sustainable and environmentally conscious cabinet solutions for your kitchen. Our eco-friendly cabinet collection features materials and finishes that reduce environmental impact while maintaining exceptional quality and style.",
    seo: "Eco-friendly cabinets are the perfect choice for homeowners who want to create a beautiful kitchen while minimizing their environmental footprint. Made from sustainable materials like bamboo, reclaimed wood, and FSC-certified lumber, these cabinets offer the same durability and aesthetic appeal as traditional options. Low-VOC finishes ensure better indoor air quality, while responsible manufacturing processes reduce waste and energy consumption. Whether you're planning a complete kitchen remodel or simply updating your cabinetry, choosing eco-friendly cabinets is an investment in both your home and the planet's future."
  },
  "kitchen design ideas": {
    intro: "Explore inspiring kitchen design concepts and creative solutions to transform your cooking space. From modern minimalism to classic elegance, find ideas that match your style and functional needs.",
    seo: "Kitchen design is an exciting journey that combines aesthetics, functionality, and personal style. Whether you're working with a spacious open-plan kitchen or a compact galley layout, the right design ideas can maximize your space and create a room you'll love spending time in. Consider elements like color schemes, lighting, storage solutions, and layout optimization to create a kitchen that not only looks stunning but also works efficiently for your daily needs. Our collection of kitchen design ideas covers everything from contemporary trends to timeless classics, helping you make informed decisions for your kitchen renovation or new build project."
  },
  "kitchen cabinets": {
    intro: "Everything you need to know about kitchen cabinets – from styles and materials to installation and maintenance. Make informed decisions for your kitchen renovation with our comprehensive cabinet guides.",
    seo: "Kitchen cabinets are the foundation of any well-designed kitchen, providing essential storage while defining the room's overall aesthetic. Choosing the right cabinets involves considering factors like construction quality, door styles, finish options, and hardware selections. Whether you prefer the clean lines of modern flat-panel doors, the traditional charm of raised panels, or the timeless appeal of shaker-style cabinets, understanding your options is crucial. Quality kitchen cabinets are built to last decades, making them a worthwhile investment. Our guides cover everything from measuring and planning to installation tips and maintenance recommendations, ensuring you get the most value from your cabinet investment."
  },
  "bathroom cabinets": {
    intro: "Find the perfect bathroom cabinet solutions to maximize storage and enhance your bathroom's design. Discover vanities, medicine cabinets, and storage options for bathrooms of all sizes.",
    seo: "Bathroom cabinets serve dual purposes: providing essential storage for toiletries, towels, and personal items while contributing to the overall design aesthetic of your bathroom. From sleek floating vanities that create a modern, spacious feel to traditional floor-standing units with ample storage, the right bathroom cabinets can transform your space. Consider factors like moisture resistance, finish durability, and smart storage features when selecting bathroom cabinetry. Whether you're working with a small powder room or a luxurious master bath, choosing appropriate cabinets ensures both functionality and style for years to come."
  },
  "kitchen remodel tips": {
    intro: "Expert advice and practical tips to guide you through your kitchen remodeling project. Learn how to plan, budget, and execute a successful kitchen renovation from start to finish.",
    seo: "A kitchen remodel is one of the most significant home improvement projects you can undertake, requiring careful planning, budgeting, and execution. Success starts with understanding the process: establishing a realistic budget, creating a functional layout, selecting quality materials, and hiring reliable contractors. Timeline management, permit requirements, and temporary kitchen solutions during construction are all important considerations. Our remodeling tips cover common pitfalls to avoid, cost-saving strategies, and ways to maximize your investment. Whether you're planning a minor refresh or a complete gut renovation, proper preparation and expert guidance can help ensure your project stays on track and delivers the kitchen of your dreams."
  },
  "cabinet hardware": {
    intro: "Explore our collection of cabinet hardware options to add the perfect finishing touch to your kitchen or bathroom cabinets. From modern pulls to classic knobs, find hardware that complements your style.",
    seo: "Cabinet hardware may seem like a small detail, but these finishing touches have a significant impact on both the functionality and appearance of your cabinets. Knobs, pulls, and handles come in countless styles, finishes, and materials – from brushed nickel and matte black to polished brass and crystal options. Beyond aesthetics, hardware selection affects daily usability, with considerations for grip comfort, cleaning ease, and durability. Coordinate your hardware choices with your cabinet style and overall room design for a cohesive look. Whether you prefer minimalist modern designs or ornate traditional pieces, the right cabinet hardware ties your entire kitchen or bathroom design together while providing years of reliable service."
  },
  "shaker cabinets": {
    intro: "Discover the timeless appeal of shaker-style cabinets. Known for their clean lines and versatile design, shaker cabinets complement both traditional and contemporary kitchen aesthetics.",
    seo: "Shaker cabinets have remained a popular choice for over a century, and their enduring appeal lies in their simple, elegant design and remarkable versatility. Characterized by a five-piece door with a recessed center panel, shaker-style cabinets feature clean lines and minimal ornamentation that work beautifully in both traditional and modern kitchens. Available in countless finish options from crisp white to rich stained woods, shaker cabinets provide a neutral foundation that adapts to changing décor trends. Their straightforward construction often makes them more affordable than ornate alternatives, while their timeless design ensures they won't look dated years down the line. Whether you're creating a cozy farmhouse kitchen or a sleek contemporary space, shaker cabinets deliver lasting style and value."
  },
  "rta cabinets": {
    intro: "Learn about Ready-to-Assemble (RTA) cabinets – an affordable and convenient option for your kitchen renovation. Get professional-looking results with easy assembly and installation.",
    seo: "Ready-to-Assemble (RTA) cabinets offer a budget-friendly alternative to pre-assembled cabinetry without sacrificing quality or style. These cabinets arrive flat-packed with all necessary hardware and detailed assembly instructions, allowing DIY-savvy homeowners to save significantly on both product and installation costs. Modern RTA cabinets are constructed from quality materials with precision-engineered components that ensure a professional finished appearance when properly assembled. The cost savings compared to pre-assembled cabinets can be substantial – often 30-50% less – making a dream kitchen more attainable. While assembly requires time and basic tools, many homeowners find the process straightforward and rewarding. With numerous style options, finishes, and configurations available, RTA cabinets prove that budget-conscious doesn't mean compromising on design or durability."
  }
};

export function getCategoryContent(categorySlug: string): CategoryContent {
  return categoryContent[categorySlug] || {
    intro: "Explore our collection of articles and guides in this category.",
    seo: "Browse through our curated selection of blog posts featuring expert advice, design inspiration, and practical tips for your kitchen and home improvement projects."
  };
}
