// src/components/ProjectsSection.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  number: string;
  title: string;
  category: string;
  filterCategory: 'shopify' | 'marketing' | 'fullstack';
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
    filterCategory: 'shopify',
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
    filterCategory: 'marketing',
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
    filterCategory: 'shopify',
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
    filterCategory: 'fullstack',
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
    filterCategory: 'shopify',
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
    filterCategory: 'marketing',
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
    filterCategory: 'marketing',
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
    filterCategory: 'shopify',
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
    filterCategory: 'marketing',
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
    filterCategory: 'fullstack',
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
    filterCategory: 'shopify',
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
    filterCategory: 'shopify',
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
];

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'shopify' | 'marketing' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.filterCategory === activeFilter);

  return (
    <section
      id="work"
      className="relative w-full bg-[#050403] text-[#E8DFD8] font-sans pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Tag Header */}
        <div className="flex items-center space-x-4 mb-5">
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              ENGINEERED VALUE.
            </span>
          </h2>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 lg:mt-0">
            {[
              { id: 'all', label: 'ALL PROJECTS' },
              { id: 'shopify', label: 'SHOPIFY & LIQUID' },
              { id: 'marketing', label: 'PAID MEDIA' },
              { id: 'fullstack', label: 'FULL-STACK & AUTOMATION' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 border ${
                  activeFilter === tab.id
                    ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-semibold'
                    : 'bg-[#110E0B] border-[#8C6D4F]/30 text-[#A8988B] hover:border-[#D4AF37] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Responsive Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-xl border border-[#8C6D4F]/30 bg-[#0E0C0A] p-5 cursor-pointer hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Media Preview Box */}
                  <div className="relative w-full h-44 rounded-lg overflow-hidden border border-[#8C6D4F]/30 bg-[#14100D] mb-4">
                    {project.mediaType === 'video' ? (
                      <video
                        src={project.mediaUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    ) : (
                      <img
                        src={project.mediaUrl}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    )}
                    <span className="absolute top-3 left-3 px-2 py-1 bg-black/80 text-[#D4AF37] font-mono text-[9px] tracking-wider rounded">
                      {project.number}
                    </span>
                  </div>

                  {/* Info */}
                  <span className="text-[9.5px] font-mono tracking-[0.2em] text-[#A8988B] uppercase block mb-1">
                    {project.category}
                  </span>
                  
                  <h3
                    className="text-2xl font-normal text-white group-hover:text-[#F7E7C4] transition-colors uppercase leading-none mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#BDB0A4] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[9px] font-mono border border-[#8C6D4F]/30 bg-[#16120E] text-[#E8D7C5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#8C6D4F]/20 text-[10px] font-mono text-[#D4AF37]">
                    <span>INSPECT DETAILS</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl rounded-2xl border border-[#D4AF37] bg-[#0E0C0A] p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#8C6D4F] text-[#E8DFD8] hover:border-[#D4AF37] flex items-center justify-center text-xs"
                >
                  ✕
                </button>

                <span className="text-xs font-mono text-[#D4AF37] block mb-1">
                  {selectedProject.number} // {selectedProject.category}
                </span>

                <h3
                  className="text-4xl sm:text-5xl font-normal text-white mb-4 uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {selectedProject.title}
                </h3>

                {/* Media Preview inside Modal */}
                <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-[#8C6D4F]/40 bg-[#14100D] mb-6">
                  {selectedProject.mediaType === 'video' ? (
                    <video
                      src={selectedProject.mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={selectedProject.mediaUrl}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <p className="text-sm text-[#BDB0A4] leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {selectedProject.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded border border-[#8C6D4F]/30 bg-[#050403]">
                      <span className="text-[9px] font-mono text-[#A8988B] block">{m.label}</span>
                      <span className="text-xs font-mono font-bold text-[#F7E7C4]">{m.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 border border-[#8C6D4F] bg-[#16120E] hover:bg-[#D4AF37] hover:text-black text-xs font-mono tracking-widest uppercase transition-all"
                >
                  VIEW SOURCE ON GITHUB ↗
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ProjectsSection;