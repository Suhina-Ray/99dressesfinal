import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, Shield, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Valuation',
      description: 'Smart credit assignment based on brand, condition, and market demand',
    },
    {
      icon: Shield,
      title: 'Trust Scores',
      description: 'Reputation system ensures reliable exchanges with verified users',
    },
    {
      icon: RefreshCw,
      title: 'Seamless Exchange',
      description: 'Credit-based system eliminates the hassle of price negotiations',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" />
              <span>Sustainable Fashion Exchange</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Give Your Clothes
              <br />
              <span className="text-primary">A Second Life</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Sustainable Fashion Through Smart Exchange. Trade clothes you love for pieces you'll adore, powered by AI valuation and trust.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/browse">
                <Button size="lg" className="gap-2 px-8">
                  Start Browsing
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/list">
                <Button size="lg" variant="outline" className="px-8">
                  List Your First Item
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A smarter way to refresh your wardrobe sustainably
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'List Your Items', desc: 'Upload clothes you no longer wear and get AI-powered credit valuation' },
              { step: '02', title: 'Browse & Discover', desc: 'Find pieces you love from trusted community members' },
              { step: '03', title: 'Exchange Easily', desc: 'Use credits to request items, no cash needed' },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-background border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-display font-semibold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Built Different This Time
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Learning from the past to build a better future for fashion exchange
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Join the Movement?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Start exchanging clothes sustainably today
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary" className="gap-2 px-8">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-semibold">99Dresses 2.0</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Hackathon MVP • Sustainable Fashion Exchange
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
