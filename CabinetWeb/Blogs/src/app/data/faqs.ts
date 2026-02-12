export interface FAQ {
  question: string;
  answer: string;
}

interface CategoryFAQs {
  [key: string]: FAQ[];
}

export const categoryFAQs: CategoryFAQs = {
  "kitchen-cabinets": [
    {
      question: "What are the most durable materials for kitchen cabinets?",
      answer: "Solid wood (maple, oak, cherry) and plywood are considered the most durable materials for kitchen cabinets. They resist warping and can last decades with proper care. Medium-density fiberboard (MDF) with quality veneer is also a good option for painted finishes."
    },
    {
      question: "How much should I budget for new kitchen cabinets?",
      answer: "Kitchen cabinet costs vary widely depending on materials and customization. Stock cabinets typically range from $100-$300 per linear foot, semi-custom from $150-$650, and custom cabinets from $500-$1,500+ per linear foot. A typical 10×10 kitchen can range from $2,000 to $20,000 or more."
    },
    {
      question: "What's the difference between face-frame and frameless cabinets?",
      answer: "Face-frame cabinets have a wooden frame attached to the front of the cabinet box, creating a traditional American style with visible frames around doors. Frameless (European-style) cabinets have no face frame, offering more interior space and a sleeker, modern appearance with full-overlay doors."
    }
  ],
  "eco-friendly-cabinets": [
    {
      question: "What makes a cabinet eco-friendly?",
      answer: "Eco-friendly cabinets use sustainable materials like FSC-certified wood, bamboo, or reclaimed lumber. They also feature low-VOC or water-based finishes, use formaldehyde-free adhesives, and are manufactured using environmentally responsible processes that minimize waste and energy consumption."
    },
    {
      question: "Are eco-friendly cabinets more expensive?",
      answer: "Eco-friendly cabinets can cost 10-30% more than conventional options initially, but prices are becoming more competitive. The long-term benefits include better indoor air quality, durability, and environmental impact. Many homeowners find the investment worthwhile for health and sustainability reasons."
    },
    {
      question: "Do eco-friendly cabinets compromise on durability?",
      answer: "Not at all! Many eco-friendly materials like bamboo and reclaimed hardwoods are extremely durable, often surpassing conventional options. FSC-certified wood meets the same quality standards as non-certified wood, while low-VOC finishes are just as protective and long-lasting as traditional finishes."
    }
  ],
  "kitchen-design-ideas": [
    {
      question: "What are the current kitchen design trends for 2024?",
      answer: "Current trends include two-tone cabinets, integrated appliances, large kitchen islands with seating, natural materials like wood and stone, bold hardware finishes (brass and matte black), open shelving accents, and smart storage solutions. Warm, earthy color palettes are also popular."
    },
    {
      question: "How do I maximize storage in a small kitchen?",
      answer: "Maximize small kitchen storage with floor-to-ceiling cabinets, pull-out organizers, corner lazy Susans, toe-kick drawers, vertical dividers for baking sheets, under-sink pull-out systems, and open shelving for frequently used items. Consider multifunctional furniture like a rolling island."
    },
    {
      question: "What's the ideal kitchen work triangle?",
      answer: "The kitchen work triangle connects the sink, refrigerator, and stove with an efficient path. Ideally, the total distance between all three should be 12-26 feet, with each leg measuring 4-9 feet. This layout minimizes steps while cooking and prevents traffic congestion in the kitchen."
    }
  ],
  "kitchen-remodel-tips": [
    {
      question: "How long does a typical kitchen remodel take?",
      answer: "A typical kitchen remodel takes 6-12 weeks depending on scope. Minor updates (cabinets, countertops, appliances) may take 3-6 weeks. Major renovations involving layout changes, plumbing, or electrical work can take 3-4 months. Custom cabinets can add 4-8 weeks to the timeline."
    },
    {
      question: "Should I hire a designer or go DIY for my kitchen remodel?",
      answer: "Hiring a designer is recommended for complex remodels involving layout changes or structural work. They help avoid costly mistakes, maximize space efficiency, and ensure proper workflow. DIY can work for cosmetic updates like cabinet painting or hardware replacement if you have the skills and time."
    },
    {
      question: "What permits do I need for a kitchen remodel?",
      answer: "Permits vary by location but typically you'll need them for electrical work, plumbing changes, structural modifications, and gas line work. Cosmetic updates like cabinet replacement usually don't require permits. Check with your local building department before starting any project."
    }
  ],
  "shaker-cabinets": [
    {
      question: "Why are Shaker cabinets so popular?",
      answer: "Shaker cabinets are popular for their timeless simplicity, versatility across design styles, durability, and cost-effectiveness. Their clean lines work in both traditional and modern kitchens, and they're easier to clean than ornate designs. The simple five-piece door construction also makes them more affordable."
    },
    {
      question: "What colors work best with Shaker cabinets?",
      answer: "Shaker cabinets are incredibly versatile with color. White and off-white are classics for a clean, bright look. Gray tones offer modern sophistication. Navy blue and forest green create dramatic statements. Natural wood stains highlight the grain and warmth. Two-tone combinations are also trending."
    },
    {
      question: "Can Shaker cabinets look modern?",
      answer: "Absolutely! Shaker cabinets can look modern with the right styling. Choose slab doors (flat shaker), use horizontal grain patterns, select contemporary colors like navy or charcoal, add sleek hardware (or go handleless), and pair with modern countertops like quartz. The minimalist design naturally suits modern aesthetics."
    }
  ],
  "rta-cabinets": [
    {
      question: "Are RTA cabinets as good as pre-assembled cabinets?",
      answer: "Quality RTA cabinets from reputable manufacturers are comparable to pre-assembled options. They use the same materials and construction methods. The main difference is assembly - if assembled correctly following instructions, RTA cabinets are just as sturdy and long-lasting as pre-assembled units."
    },
    {
      question: "How difficult is it to assemble RTA cabinets?",
      answer: "Most RTA cabinets can be assembled by handy DIYers with basic tools. Each cabinet typically takes 30-60 minutes to assemble. Clear instructions, pre-drilled holes, and cam-lock fasteners make the process straightforward. However, installation still requires carpentry skills for leveling and securing to walls."
    },
    {
      question: "What tools do I need to assemble RTA cabinets?",
      answer: "Basic tools needed include a rubber mallet, screwdriver (or power drill with bits), level, tape measure, and square. Most RTA cabinets come with necessary hardware and fasteners. For installation, you'll also need a stud finder, shims, clamps, and mounting screws."
    }
  ],
  "cabinet-hardware": [
    {
      question: "What's the difference between knobs and pulls?",
      answer: "Knobs are single-point attachments, typically round or decorative, requiring one screw. They work well for doors and small drawers. Pulls (handles) have two mounting points, offering better grip for larger drawers and heavy doors. Many kitchens use pulls on drawers and knobs on doors for a coordinated look."
    },
    {
      question: "What size hardware should I choose for my cabinets?",
      answer: "Hardware size should be proportional to the cabinet. Standard sizes: knobs 1-1.5 inches diameter for most cabinets; pulls 3-4 inches for small drawers, 5-6 inches for standard drawers, 8-12 inches for large drawers and pantries. Larger, heavier doors benefit from longer pulls for better leverage."
    },
    {
      question: "What are the most durable cabinet hardware finishes?",
      answer: "The most durable finishes are stainless steel, solid brass (unlacquered or lacquered), and oil-rubbed bronze. These resist corrosion and wear. Brushed and matte finishes hide fingerprints better than polished finishes. Avoid painted or thin plating on base metals, as these wear quickly with frequent use."
    }
  ],
  "bathroom-cabinets": [
    {
      question: "What materials are best for bathroom cabinets?",
      answer: "Bathroom cabinets need moisture-resistant materials. Solid wood (oak, maple) with proper sealing works well, as does marine-grade plywood. Thermofoil and PVC cabinets resist moisture excellently. Avoid particleboard or MDF without waterproof sealing in high-humidity bathrooms. Quality finishes are essential."
    },
    {
      question: "What's the standard height for bathroom vanities?",
      answer: "Standard bathroom vanity height is 30-32 inches (comfort height is 34-36 inches). This is lower than kitchen counters to accommodate bathroom tasks. Comfort height vanities (36 inches) are increasingly popular and reduce back strain. Choose based on household users' heights and preferences."
    },
    {
      question: "Should I choose a wall-mounted or floor-standing vanity?",
      answer: "Wall-mounted (floating) vanities create a modern, spacious feel and make floor cleaning easier - ideal for small bathrooms. Floor-standing vanities offer more storage, better stability, and a traditional look. They're also easier to install. Consider your bathroom size, style preferences, and storage needs."
    }
  ]
};

export const defaultFAQs: FAQ[] = [
  {
    question: "How do I choose the right cabinet style for my home?",
    answer: "Consider your home's overall design aesthetic, your personal style preferences, and functionality needs. Look at inspiration photos, visit showrooms, and consider factors like maintenance requirements, durability, and budget. The right cabinet style should complement your space while meeting your practical needs."
  },
  {
    question: "What's the best way to maintain and clean kitchen cabinets?",
    answer: "Clean cabinets regularly with a soft cloth and mild dish soap solution. Avoid abrasive cleaners or excessive water. Wipe up spills immediately, especially on wood surfaces. For wood cabinets, use appropriate wood cleaner occasionally. Keep hardware tightened and hinges lubricated for smooth operation."
  },
  {
    question: "How long do quality kitchen cabinets typically last?",
    answer: "Quality kitchen cabinets can last 20-50 years or more with proper care and maintenance. Solid wood cabinets typically last longest. Factors affecting lifespan include material quality, construction method, finish quality, maintenance, and usage. Investing in quality cabinets pays off in longevity and performance."
  }
];

export function getCategoryFAQs(categorySlug: string): FAQ[] {
  return categoryFAQs[categorySlug] || defaultFAQs;
}
