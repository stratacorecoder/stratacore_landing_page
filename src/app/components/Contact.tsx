import contactBg from '../../imports/contactbg.png';
import { MapPin, Mail, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section className="relative min-h-screen w-full flex flex-col">
      {/* Contact-specific background — overrides the global fixed bg for this page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={contactBg}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#05030F]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-16 pt-40 pb-24">
        <div className="max-w-[1100px] w-full mx-auto space-y-14">

          {/* Header */}
          <div className="text-center space-y-5">
            <div className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-sm text-violet-400 font-medium tracking-wide">
              Contact Us
            </div>
            <h1 className="text-6xl font-bold tracking-tight leading-tight hyphens-none">
              Let's Build the Future<br />
              <span className="text-violet-400">of EV Charging Together</span>
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto hyphens-none break-normal">
              Have questions or ready to get started? Our team is here to help you power smarter, scale faster, and go further.
            </p>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-3 gap-6">

            {/* Get in Touch */}
            <div className="rounded-3xl border border-violet-500/20 bg-violet-950/20 backdrop-blur-xl p-8 flex flex-col items-center text-center space-y-5"
              style={{ boxShadow: '0 0 40px rgba(124,58,237,0.12)' }}>
              <div className="size-16 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center"
                style={{ boxShadow: '0 0 24px rgba(124,58,237,0.3)' }}>
                <Mail className="size-8 text-violet-400" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
                <p className="text-sm text-white/50 leading-relaxed hyphens-none break-normal">
                  Reach out to us through any of the channels below. We'd love to hear from you.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61591692530471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 rounded-xl bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/20 transition-colors flex items-center justify-center"
                >
                  <Facebook className="size-5 text-violet-400" />
                </a>
              </div>
            </div>

            {/* Info cards — stacked */}
            <div className="col-span-2 grid grid-rows-3 gap-4">

              {/* Address */}
              <div className="rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl px-6 py-5 flex items-start gap-4 hover:border-violet-500/25 transition-colors">
                <div className="size-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="size-5 text-violet-400" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Address</div>
                  <p className="text-sm text-white/80 leading-relaxed hyphens-none break-normal">
                    55 Cauayan Street Barangay Limmara,<br />
                    Vilage Project 7, Quezon City,<br />
                    Philippines, 1105
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl px-6 py-5 flex items-start gap-4 hover:border-violet-500/25 transition-colors">
                <div className="size-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="size-5 text-violet-400" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:stratacoreceo@gmail.com" className="text-sm text-white/80 hover:text-violet-300 transition-colors">
                    stratacoreceo@gmail.com
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
