import { Sparkles, Brain, Zap, Heart, Target, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Our advanced AI understands your cravings and finds the perfect restaurant match based on your mood, preferences, and past choices.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "No more endless scrolling. Tell us what you're feeling, and get personalized recommendations in seconds.",
  },
  {
    icon: Heart,
    title: "Mood-Based Discovery",
    description: "Whether you're feeling romantic, adventurous, or just hungry, we match your mood to the perfect dining experience.",
  },
  {
    icon: Target,
    title: "Precise Filtering",
    description: "Filter by cuisine, price, features, and more. Find exactly what you're looking for without compromise.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center py-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">About SmartDine</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Your Perfect
            <span className="text-gradient block">Dining Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SmartDine uses cutting-edge AI technology to understand your cravings and 
            connect you with restaurants that match your mood, taste, and preferences.
          </p>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-12">
            How SmartDine Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How AI Works */}
        <section className="py-16">
          <div className="card-elevated rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  The AI Behind Your Recommendations
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    When you tell SmartDine what you're craving, our AI agent analyzes 
                    your request to understand the key elements: your mood, preferred 
                    cuisine, budget, and any special requirements.
                  </p>
                  <p>
                    Using natural language processing, it interprets phrases like 
                    "something cozy and spicy under ₹200" and matches them with 
                    restaurants in our database that fit your criteria perfectly.
                  </p>
                  <p>
                    The more you use SmartDine, the better it gets at understanding 
                    your unique preferences and suggesting places you'll love.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Brain className="w-24 h-24 text-primary/50" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Built for AI Hackathon 2025</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Created with Passion
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            SmartDine was built as part of the AI Hackathon 2025, showcasing the 
            potential of AI to transform how we discover and enjoy food.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
