// src/components/ProjectsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'CUSTOM LIQUID BUNDLE ARCHITECTURE',
    category: 'SHOPIFY / LIQUID DEVELOPMENT',
    description: 'Engineered a custom Shopify theme featuring dynamic bundle builders, liquid section schemas, sub-second page loads, and real-time cart recalculations.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'video',
    mediaUrl: '/project/project-1.mp4',
    tech: ['Shopify Liquid', 'JavaScript', 'AJAX Cart API', 'Tailwind CSS'],
    metrics: [
      { label: 'PAGE SPEED', value: '95+ Score' },
      { label: 'CHECKOUT', value: 'AJAX Drawer' },
      { label: 'ARCHITECTURE', value: 'Theme OS 2.0' },
    ],
  },
  {
    number: '02',
    title: 'HIGH-ROAS PAID MEDIA AD FUNNEL',
    category: 'GROWTH MARKETING / META & TIKTOK',
    description: 'Structured full-funnel ad campaigns with targeted creative video hooks and landing page optimizations designed to maximize conversion rates.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'video',
    mediaUrl: '/project/project-2.mp4',
    tech: ['Meta Ads Manager', 'TikTok Ads Manager', 'Conversion API', 'Klaviyo'],
    metrics: [
      { label: 'PEAK ROAS', value: '4.5x Return' },
      { label: 'CONVERSION', value: '+35% Lift' },
      { label: 'TRAFFIC', value: 'Targeted Paid' },
    ],
  },
  {
    number: '03',
    title: 'STOREFRONT SPEED & CHECKOUT ENGINE',
    category: 'E-COMMERCE PERFORMANCE',
    description: 'Audited and optimized complex liquid scripts, third-party app payloads, and asset delivery to eliminate rendering bottlenecks.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-3.jpg',
    tech: ['Shopify Theme Kit', 'Core Web Vitals', 'JavaScript', 'CDN Optimization'],
    metrics: [
      { label: 'LOAD TIME', value: '< 1.2 Seconds' },
      { label: 'OPTIMIZATION', value: 'Zero-Lag Scripts' },
      { label: 'RETENTION', value: 'High Engagement' },
    ],
  },
  {
    number: '04',
    title: 'ENTERPRISE DTC STOREFRONT',
    category: 'CUSTOM THEME & APP INTEGRATIONS',
    description: 'End-to-end custom Shopify storefront implementation equipped with dynamic filter sliders, subscription portal integrations, and automated customer workflows.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-4.jpg',
    tech: ['React.js', 'Shopify Storefront API', 'Node.js', 'GraphQL'],
    metrics: [
      { label: 'API INTEGRATION', value: 'Storefront GraphQL' },
      { label: 'SECURITY', value: 'PCI DSS Compliant' },
      { label: 'PLATFORM', value: 'Shopify Plus' },
    ],
  },
  {
    number: '05',
    title: 'DYNAMIC PRODUCT CONFIGURATOR',
    category: 'SHOPIFY FRONTEND CUSTOMIZATION',
    description: 'Built an interactive product variant builder allowing shoppers to customize item specifications directly on the store front end.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-5.jpg',
    tech: ['Shopify Liquid', 'Alpine.js', 'JSON Schema', 'Tailwind CSS'],
    metrics: [
      { label: 'ENGAGEMENT', value: '+40% Time-on-Site' },
      { label: 'AOV', value: '+18% Increase' },
      { label: 'UX RATING', value: 'Seamless' },
    ],
  },
  {
    number: '06',
    title: 'OMNICHANNEL EMAIL & RETENTION FUNNEL',
    category: 'KLAVIYO / AUTOMATION',
    description: 'Designed and deployed multi-stage abandon cart and post-purchase email sequences synced with Meta custom audiences.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-6.jpg',
    tech: ['Klaviyo', 'Shopify Flow', 'HTML/CSS Email', 'Segmenting'],
    metrics: [
      { label: 'OPEN RATE', value: '42.5% Avg' },
      { label: 'REVENUE', value: '+28% Automations' },
      { label: 'RETENTION', value: 'High Repeat' },
    ],
  },
  {
    number: '07',
    title: 'RETARGETING CREATIVE MATRIX',
    category: 'PAID SOCIAL / META ADS',
    description: 'Crafted dynamic creative variations and ad copies optimized for middle and bottom-of-funnel retargeting audiences.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-7.jpg',
    tech: ['Meta Ads Manager', 'CapCut Pro', 'Figma', 'Ad Tracking'],
    metrics: [
      { label: 'CTR', value: '3.8% Click Rate' },
      { label: 'CPA', value: '-22% Lower Cost' },
      { label: 'ROAS', value: '3.9x Direct' },
    ],
  },
  {
    number: '08',
    title: 'CUSTOM CART DRAWER & UPSELL SYSTEM',
    category: 'SHOPIFY LIQUID DEVELOPMENT',
    description: 'Developed an slide-out cart drawer with dynamic progress bars for free shipping and inline cross-sell recommendations.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-8.jpg',
    tech: ['AJAX API', 'Liquid', 'Vanilla JS', 'CSS Grid'],
    metrics: [
      { label: 'CART CONVERSION', value: '+12% Lift' },
      { label: 'UPSELL TAKE', value: '24% Adoption' },
      { label: 'SPEED IMPACT', value: 'Zero Lag' },
    ],
  },
  {
    number: '09',
    title: 'TIKTOK SCALING CAMPAIGN ARCHITECTURE',
    category: 'SHORT-FORM PAID MEDIA',
    description: 'Executed high-volume video ad testing strategies on TikTok Ads Manager targeting impulse e-commerce buying behaviors.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-9.jpg',
    tech: ['TikTok Ads Manager', 'Spark Ads', 'Pixel Tracking'],
    metrics: [
      { label: 'CPM', value: 'Low Cost/1k' },
      { label: 'CONVERSIONS', value: 'Scaled 3x' },
      { label: 'HOOK RATE', value: '48% 3s View' },
    ],
  },
  {
    number: '10',
    title: 'HEADLESS SHOPIFY STOREFRONT ENGINE',
    category: 'FULL-STACK E-COMMERCE',
    description: 'Constructed a custom React-based storefront communicating directly with the Shopify GraphQL Storefront API.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-10.jpg',
    tech: ['React.js', 'Next.js', 'GraphQL', 'Tailwind CSS'],
    metrics: [
      { label: 'PAGE SPEED', value: '100 Score' },
      { label: 'TTFB', value: '< 80ms' },
      { label: 'ARCHITECTURE', value: 'Headless' },
    ],
  },
  {
    number: '11',
    title: 'MULTI-CURRENCY INTERNATIONAL STOREFRONT',
    category: 'SHOPIFY MARKETS',
    description: 'Configured Shopify Markets with automated geolocation routing, local currency conversions, and translated liquid schemas.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-11.jpg',
    tech: ['Shopify Markets', 'Geolocation API', 'Liquid'],
    metrics: [
      { label: 'GLOBAL LIFT', value: '+15% Cross-Border' },
      { label: 'CHECKOUT', value: 'Localized' },
      { label: 'CURRENCY', value: 'Auto Switch' },
    ],
  },
  {
    number: '12',
    title: 'HIGH-CONVERSION LANDING PAGE SYSTEM',
    category: 'PAGE FLY / REPLO / CUSTOM CODE',
    description: 'Designed standalone, rapid-loading direct response landing pages specifically optimized for paid traffic campaigns.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-12.jpg',
    tech: ['Custom Liquid', 'Tailwind CSS', 'Conversion UX'],
    metrics: [
      { label: 'CONVERSION', value: '4.2% Rate' },
      { label: 'BOUNCE RATE', value: '-30% Drop' },
      { label: 'LOAD SPEED', value: 'Instant' },
    ],
  },
  {
    number: '13',
    title: 'AUTOMATED OUTREACH & RETENTION PIPELINE',
    category: 'COLD EMAIL & REVENUE OPS',
    description: 'Built technical domain DNS configurations and automated outreach workflows to generate scalable freelance and client leads.',
    githubUrl: 'https://github.com/henrynyam12-gif',
    mediaType: 'image',
    mediaUrl: '/project/project-13.jpg',
    tech: ['Apollo.io', 'Instantly.ai', 'SPF/DKIM/DMARC', 'DNS'],
    metrics: [
      { label: 'DELIVERABILITY', value: '99.2%' },
      { label: 'REPLY RATE', value: '8.5%' },
      { label: 'PIPELINE', value: 'Automated' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to drive high conversions and revenue growth.
          </p>
        </motion.div>

        {/* ScrollStack Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Gold Glow Borders */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left Column */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-6 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/25 mb-6 lg:mb-0">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Media Preview & Metrics */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    
                    <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden border border-[#8C6D4F]/40 bg-[#14100D] group-hover:border-[#D4AF37]/80 transition-all">
                      {project.mediaType === 'video' ? (
                        <video
                          src={project.mediaUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        <img
                          src={project.mediaUrl}
                          alt={project.title}
                          className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-transparent opacity-40 pointer-events-none" />
                    </div>

                    <div className="space-y-2">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-2.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;