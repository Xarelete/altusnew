import { TrendingUp, Users, Building, Award } from "lucide-react";
const StatsSection = () => {
  const stats = [{
    icon: Building,
    number: "2000m²",
    label: "de área de lazer",
    color: "from-blue-500 to-blue-600"
  }, {
    icon: Users,
    number: "98%",
    label: "satisfação dos clientes",
    color: "from-green-500 to-green-600"
  }, {
    icon: TrendingUp,
    number: "25%",
    label: "valorização prevista",
    color: "from-purple-500 to-purple-600"
  }, {
    icon: Award,
    number: "48",
    label: "anos de experiência",
    color: "from-orange-500 to-orange-600"
  }];
  return <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        
      </div>
    </section>;
};
export default StatsSection;