import { Zap, Linkedin, Twitter, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-16 py-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-5 gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center">
                <Zap className="size-6 text-white" fill="white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">Stratacore</span>
            </div>
            <p className="text-white/50 leading-relaxed max-w-md">
              Enterprise-grade EV charging infrastructure software that powers the future of electric mobility.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="size-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors">
                <Linkedin className="size-5 text-white/60" />
              </a>
              <a href="#" className="size-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors">
                <Twitter className="size-5 text-white/60" />
              </a>
              <a href="#" className="size-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors">
                <Github className="size-5 text-white/60" />
              </a>
              <a href="#" className="size-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors">
                <Mail className="size-5 text-white/60" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h3 className="font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Solutions</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">API Reference</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Press Kit</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Community</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Case Studies</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Webinars</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <p className="text-sm text-white/40">
            © 2026 Stratacore. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
