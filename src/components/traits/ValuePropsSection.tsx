import FadeInView from "@/components/motion/FadeInView";

interface ValueProp {
  icon: string;
  text: string;
}

interface ValuePropsSectionProps {
  items: ValueProp[];
  className?: string;
}

export default function ValuePropsSection({
  items,
  className = "",
}: ValuePropsSectionProps) {
  return (
    <section className={`py-12 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <FadeInView y={0}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">
            What This Means{" "}
            <span className="highlight-pink">For Your Team</span>
          </h2>
        </FadeInView>

        <div className="space-y-4">
          {items.map((prop, index) => (
            <FadeInView
              key={index}
              x={-20}
              y={0}
              delay={index * 0.1}
              className="flex items-start gap-4 p-5 bg-white border-2 border-foreground rounded-xl shadow-sketch-sm"
            >
              <span className="text-2xl flex-shrink-0">{prop.icon}</span>
              <p className="text-gray-700 leading-relaxed">{prop.text}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
