import { Code, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-itdark text-itsilver">
      <Navigation />
      <Hero />
      <BlogPosts />
      <Footer />
    </div>
  );
}

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full tech-glass z-50 border-b border-itgray2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-itred" />
            <span className="text-xl font-bold text-white">IT Legends</span>
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-itsilver hover:text-itred transition-colors font-medium">
              Back to Home
            </a>
          </div>

          <button
            className="md:hidden text-itsilver"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-itdark via-itgray to-itdark overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-itred/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-itblue/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-glow">
          IT Legends Blog & IT Tips
        </h1>

        <p className="text-lg sm:text-xl text-itsilver mb-12 leading-relaxed max-w-3xl mx-auto">
          Weekly insights, security alerts, and updates from the IT world.
        </p>
      </div>
    </section>
  );
}

function BlogPosts() {
  const blogPosts = [
    {
      id: 1,
      title: '5 Essential Cybersecurity Tips for Small Businesses',
      excerpt: 'Protect your business from cyber threats with these practical security measures that every small business should implement today.',
      date: 'November 12, 2024'
    },
    {
      id: 2,
      title: 'Understanding Cloud Migration: A Step-by-Step Guide',
      excerpt: 'Planning to move your infrastructure to the cloud? Learn the key considerations and best practices for a smooth migration process.',
      date: 'November 8, 2024'
    },
    {
      id: 3,
      title: 'Windows 11 Update Alert: What IT Managers Need to Know',
      excerpt: 'Microsoft has released critical security patches. Here is what you need to know about the latest updates and how they affect your systems.',
      date: 'November 5, 2024'
    },
    {
      id: 4,
      title: 'The Future of AI in Enterprise IT',
      excerpt: 'Explore how artificial intelligence is transforming enterprise IT operations and what it means for your business strategy.',
      date: 'October 30, 2024'
    },
    {
      id: 5,
      title: 'Network Security Best Practices 2024',
      excerpt: 'A comprehensive guide to securing your network infrastructure against modern threats and vulnerabilities.',
      date: 'October 25, 2024'
    },
    {
      id: 6,
      title: 'Disaster Recovery Planning for Remote Teams',
      excerpt: 'Learn how to develop effective disaster recovery and business continuity plans for distributed workforces.',
      date: 'October 20, 2024'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-itdark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const isRed = index % 2 === 0;
            return (
              <article
                key={post.id}
                className={`card-dark group cursor-pointer ${isRed ? 'glow-red border-itred/30 hover:border-itred/60' : 'glow-blue border-itblue/30 hover:border-itblue/60'}`}
              >
                <div className="flex items-center space-x-2 mb-4 text-sm text-itsilver/70">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-itred transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-itsilver text-sm mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className={`inline-flex items-center text-sm font-semibold ${isRed ? 'text-itred group-hover:text-itblue' : 'text-itblue group-hover:text-itred'} transition-colors`}
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-itdark border-t border-itgray2 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="/" className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-itred" />
              <span className="text-xl font-bold text-white">IT Legends</span>
            </a>
            <p className="text-itsilver">
              Managed IT support for businesses of all sizes.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-itsilver text-sm">
              <li><a href="/" className="hover:text-itred transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-itred transition-colors">Services</a></li>
              <li><a href="/blog" className="hover:text-itred transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-itsilver text-sm">
              <li>contact@itlegends.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-itgray2 pt-8 text-center text-itsilver/60">
          <p>&copy; 2024 IT Legends. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
