// src/components/ContactSection.tsx
import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [problemType, setProblemType] = useState('Shopify Custom Theme & Liquid Development');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const recipientEmail = 'henrynyam12@gmail.com';
  // Formatted WhatsApp URL for +1 (909) 859-1449
  const whatsappUrl = 'https://wa.me/19098591449?text=' + encodeURIComponent(`Hi Henry, I'm reaching out from your portfolio regarding ${problemType}.`);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct POST using FormSubmit to henrynyam12@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `[Portfolio Inquiry]: ${problemType} - ${name}`,
          selected_service: problemType,
          message: message,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Fallback to client mail app
        triggerMailtoFallback();
      }
    } catch (error) {
      triggerMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry: ${problemType}] from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nClient Email: ${email}\nSelected Service: ${problemType}\n\nProject Details:\n${message}`
    );
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#050403] text-[#E8DFD8] font-sans pt-20 pb-28 px-6 sm:px-12 lg:px-20 border-t border-[#8C6D4F]/30"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Tag */}
        <div className="flex items-center space-x-4 mb-5">
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / INITIATE DISPATCH
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2
                className="text-5xl sm:text-6xl uppercase leading-[0.85] mb-4 text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                  YOUR SYSTEM.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed">
                Select your service requirements to send an inquiry directly to **henrynyam12@gmail.com**, or initiate a conversation via WhatsApp.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-4 pt-4 border-t border-[#8C6D4F]/20">
              <div>
                <span className="text-[10px] font-mono text-[#A8988B] uppercase block mb-1">
                  DIRECT EMAIL INBOX
                </span>
                <a
                  href={`mailto:${recipientEmail}`}
                  className="text-sm font-mono text-[#D4AF37] hover:underline"
                >
                  {recipientEmail}
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#A8988B] uppercase block mb-1">
                  WHATSAPP DIRECT DISPATCH
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#121A13] border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] text-xs font-mono tracking-wider rounded transition-all"
                >
                  <span>💬 CHAT ON WHATSAPP (+1 909 859-1449)</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Form */}
          <div className="lg:col-span-7 rounded-2xl border border-[#8C6D4F]/40 bg-[#0E0C0A] p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-4xl text-[#D4AF37]">✓</div>
                <h3 className="text-2xl font-mono text-white uppercase">MESSAGE DISPATCHED</h3>
                <p className="text-xs font-mono text-[#A8988B] max-w-md mx-auto">
                  Your details have been submitted directly to **henrynyam12@gmail.com**. You will receive a response shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 border border-[#8C6D4F] text-xs font-mono text-[#D4AF37] hover:border-[#D4AF37]"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-[#A8988B] uppercase mb-2">
                      // YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-[#16120E] border border-[#8C6D4F]/30 rounded px-4 py-3 text-xs text-white placeholder-[#605448] focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-[#A8988B] uppercase mb-2">
                      // YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full bg-[#16120E] border border-[#8C6D4F]/30 rounded px-4 py-3 text-xs text-white placeholder-[#605448] focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Problem Selection Dropdown */}
                <div>
                  <label className="block text-[10px] font-mono text-[#A8988B] uppercase mb-2">
                    // SELECT YOUR SPECIFIC NEED / PROBLEM
                  </label>
                  <select
                    value={problemType}
                    onChange={(e) => setProblemType(e.target.value)}
                    className="w-full bg-[#16120E] border border-[#8C6D4F]/30 rounded px-4 py-3 text-xs text-[#F7E7C4] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="Shopify Custom Theme & Liquid Development">
                      Shopify Custom Theme & Liquid Development
                    </option>
                    <option value="Storefront Speed & Core Web Vitals Optimization">
                      Storefront Speed & Core Web Vitals Optimization
                    </option>
                    <option value="Paid Media Campaigns (Meta & TikTok Ads)">
                      Paid Media Campaigns (Meta & TikTok Ads)
                    </option>
                    <option value="Custom Cart Drawer & Upsell Integration">
                      Custom Cart Drawer & Upsell Integration
                    </option>
                    <option value="Klaviyo Email Automation & Retention Funnel">
                      Klaviyo Email Automation & Retention Funnel
                    </option>
                    <option value="Cold Email & Lead Generation Setup">
                      Cold Email & Lead Generation Setup
                    </option>
                    <option value="General Consultation / Other Inquiry">
                      General Consultation / Other Inquiry
                    </option>
                  </select>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-[10px] font-mono text-[#A8988B] uppercase mb-2">
                    // PROJECT DETAILS / PROBLEM DESCRIPTION
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current bottleneck, project timeline, or target goals..."
                    className="w-full bg-[#16120E] border border-[#8C6D4F]/30 rounded px-4 py-3 text-xs text-white placeholder-[#605448] focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 border border-[#D4AF37] bg-[#D4AF37] hover:bg-transparent text-black hover:text-[#D4AF37] text-xs font-mono font-bold tracking-[0.25em] uppercase transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'SENDING DISPATCH...' : 'EXECUTE DISPATCH TO HENRYNYAM12@GMAIL.COM ↗'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;