'use client';

import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Upload, 
  MessageSquare, 
  Zap, 
  Download, 
  Home, 
  Palette, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign,
  Star
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'case-studies', 'how-it-works', 'testimonials'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-r border-slate-200 dark:border-slate-700 z-50 hidden lg:block">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              NanoBanana Pro
            </h2>
          </div>
          
          <nav className="space-y-2">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'features', label: 'Features', icon: Sparkles },
              { id: 'case-studies', label: 'Case Studies', icon: Award },
              { id: 'how-it-works', label: 'How It Works', icon: Zap },
              { id: 'testimonials', label: 'Testimonials', icon: Users },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                AI-Powered Interior Design
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Transform Floor Plans Into
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Stunning Designs
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Create photorealistic interior design visualizations in 60 seconds using AI.
              <br />
              No expensive software. No design degree. Just pure design magic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => router.push('/app')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-semibold text-lg border-2 border-slate-300 dark:border-slate-600 hover:border-indigo-500 transition-all">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              {[
                { number: '10K+', label: 'Designs Created' },
                { number: '5K+', label: 'Happy Users' },
                { number: '60s', label: 'Average Time' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Everything you need to visualize your dream space
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Upload,
                  title: 'Easy Upload',
                  description: 'Drag & drop your floor plan. Any format works!',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: MessageSquare,
                  title: 'AI Chatbot',
                  description: 'Describe your style in natural language',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  icon: Zap,
                  title: '60 Second Generation',
                  description: 'Get photorealistic renders instantly',
                  color: 'from-yellow-500 to-orange-500',
                },
                {
                  icon: Download,
                  title: 'High-Res Downloads',
                  description: 'Download professional-quality images',
                  color: 'from-green-500 to-emerald-500',
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-slate-200 dark:border-slate-700"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Real Success Stories
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Case Studies
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                See how real users transformed their spaces and saved thousands with NanoBanana Pro
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Case Study 1: Sarah's Kitchen Renovation */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 transform hover:scale-105 transition-all">
                <div className="h-48 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Home className="w-5 h-5 text-orange-600" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">Kitchen Renovation</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Sarah M., Homeowner</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                    Saved $5,000 on Kitchen Design
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Sarah was planning a complete kitchen renovation with a $25,000 budget. She couldn't visualize how different styles would look in her actual space.
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Generated 5 different style options in one afternoon
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Avoided costly mistake: switched from dark to light cabinets after visualization
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Made confident material choices by seeing exact results
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Savings</span>
                      <span className="text-2xl font-bold text-green-600">$5,000+</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>2 hours</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>5 styles tested</span>
                      </div>
                    </div>
                  </div>

                  <blockquote className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500">
                    <p className="text-sm italic text-slate-700 dark:text-slate-300">
                      "NanoBanana Pro gave me the confidence to make decisions I never would have made otherwise. The final result matched my visualization perfectly!"
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* Case Study 2: Mike's Real Estate Business */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 transform hover:scale-105 transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">Real Estate Agent</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Mike T., Real Estate Professional</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                    Increased Sales by 40%
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Mike uses NanoBanana Pro to help buyers visualize potential renovations, making properties more attractive and closing deals faster.
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Creates instant visualizations for client presentations
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Shows multiple renovation options to help buyers see potential
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Stands out from competitors with professional visualizations
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Sales Increase</span>
                      <span className="text-2xl font-bold text-green-600">+40%</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>5 min/design</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>50+ properties</span>
                      </div>
                    </div>
                  </div>

                  <blockquote className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm italic text-slate-700 dark:text-slate-300">
                      "My clients love seeing what's possible! NanoBanana Pro has become an essential tool in my sales process."
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* Case Study 3: Jennifer's Design Studio */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 transform hover:scale-105 transition-all">
                <div className="h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-rose-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Palette className="w-5 h-5 text-purple-600" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">Interior Designer</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Jennifer L., Design Studio Owner</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                    Saved 20 Hours Per Week
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Jennifer uses NanoBanana Pro for quick concept visualizations with clients, dramatically reducing time spent on initial design presentations.
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Creates multiple style options in minutes instead of hours
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Presents professional-quality visualizations instantly to clients
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Focuses on high-value design work instead of time-consuming renders
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Time Saved</span>
                      <span className="text-2xl font-bold text-green-600">20 hrs/week</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>60s/design</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>$2,000+/month</span>
                      </div>
                    </div>
                  </div>

                  <blockquote className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                    <p className="text-sm italic text-slate-700 dark:text-slate-300">
                      "This tool has revolutionized my workflow. I can now focus on what I do best - designing - while AI handles the visualization."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* CTA after case studies */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                  Join thousands of homeowners, designers, and professionals who are already using NanoBanana Pro
                </p>
                <button
                  onClick={() => router.push('/app')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Start Your First Design
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Get stunning designs in just 4 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Upload Floor Plan', icon: Upload, color: 'from-blue-500 to-cyan-500' },
                { step: '2', title: 'Describe Style', icon: MessageSquare, color: 'from-purple-500 to-pink-500' },
                { step: '3', title: 'AI Generates', icon: Zap, color: 'from-yellow-500 to-orange-500' },
                { step: '4', title: 'Download & Share', icon: Download, color: 'from-green-500 to-emerald-500' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                What Our Users Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Sarah M.',
                  role: 'Homeowner',
                  content: 'This completely changed how I plan my renovations! Saved me thousands.',
                  rating: 5,
                },
                {
                  name: 'Mike T.',
                  role: 'Real Estate Agent',
                  content: 'My clients love seeing potential renovations. Sales increased 40%!',
                  rating: 5,
                },
                {
                  name: 'Jennifer L.',
                  role: 'Interior Designer',
                  content: 'Saves me 20 hours per week. I can focus on what I do best.',
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-200">{testimonial.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users creating stunning interior designs with AI
            </p>
            <button
              onClick={() => router.push('/app')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

