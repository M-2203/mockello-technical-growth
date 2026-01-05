// Data structured for future backend integration
export const streams = [
  "MECHANICAL",
  "CIVIL",
  "COMPUTER SCIENCE",
  "ELECTRICAL",
  "CHEMICAL",
  "AEROSPACE",
  "BIOTECH",
  "ELECTRONICS",
  "INSTRUMENTATION",
  "AUTOMOBILE",
  "PRODUCTION",
  "INDUSTRIAL",
  "METALLURGY",
  "MINING",
  "TEXTILE",
];

const StreamTicker = () => {
  // Double the streams for seamless infinite scroll
  const doubledStreams = [...streams, ...streams];
  
  return (
    <section className="py-12 overflow-hidden border-y border-border/50 bg-primary/5">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubledStreams.map((stream, index) => (
          <span 
            key={`${stream}-${index}`}
            className="mx-8 text-lg md:text-xl font-semibold text-primary/70 hover:text-primary transition-colors"
          >
            {stream}
            <span className="ml-8 text-primary/30">•</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default StreamTicker;
