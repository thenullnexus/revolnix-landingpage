import clientCairo from "@/assets/client-cairo.png";

interface Client {
  name: string;
  logo: string;
  url?: string;
}

const clients: Client[] = [
  { name: "Cairo Health Care", logo: clientCairo, url: "#" },
  // Add more clients here
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Our <span className="text-gradient-primary">Clients</span>
          </h2>
        </div>

        {/* Logo stream container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
        {/* Static logos grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 py-8">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-20 w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
              />
            </a>
          ))}
        </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Join our growing list of satisfied partners
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
