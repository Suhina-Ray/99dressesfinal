import { Link } from 'react-router-dom';
import { Star, Wallet, Package, ArrowRightLeft, Plus, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { currentUser } from '@/data/mockData';
import Navbar from '@/components/Navbar';

const Dashboard = () => {
  const stats = [
    {
      icon: Wallet,
      label: 'Credit Balance',
      value: currentUser.credits,
      suffix: 'credits',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: Star,
      label: 'Reputation Score',
      value: currentUser.rating,
      suffix: '/ 5.0',
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: Package,
      label: 'Items Listed',
      value: currentUser.itemsListed,
      suffix: 'items',
      color: 'text-foreground',
      bg: 'bg-secondary',
    },
    {
      icon: ArrowRightLeft,
      label: 'Exchanges',
      value: currentUser.exchangesCompleted,
      suffix: 'completed',
      color: 'text-foreground',
      bg: 'bg-secondary',
    },
  ];

  const recentActivity = [
    { action: 'Exchange completed', item: 'Silk Blouse', credits: '+45', time: '2 hours ago' },
    { action: 'Item listed', item: 'Denim Jacket', credits: '+30', time: '1 day ago' },
    { action: 'Exchange completed', item: 'Linen Dress', credits: '-40', time: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-semibold text-foreground mb-2">
            Welcome back, {currentUser.name}!
          </h1>
          <p className="text-muted-foreground">
            Manage your wardrobe and track your exchanges
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border card-hover"
            >
              <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center mb-4`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-semibold ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link to="/list" className="block">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Plus className="h-4 w-4" />
                  List a New Item
                </Button>
              </Link>
              <Link to="/browse" className="block">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Package className="h-4 w-4" />
                  Browse Items
                </Button>
              </Link>
            </div>

            {/* Trust Message */}
            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground text-sm">
                  Build Your Reputation
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Complete more exchanges and maintain good communication to increase your trust score.
                Higher-rated users get faster exchanges!
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">{activity.item}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium text-sm ${
                      activity.credits.startsWith('+') ? 'text-primary' : 'text-accent'
                    }`}>
                      {activity.credits}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
