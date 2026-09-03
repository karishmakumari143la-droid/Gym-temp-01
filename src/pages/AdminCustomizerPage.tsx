import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sliders,
  RotateCcw,
  Check,
  Copy,
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Building2,
  MapPin,
  Phone,
  IndianRupee,
  Image as ImageIcon,
  Megaphone,
  Download,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { GymFullConfig } from '../types';
import { defaultGymConfig } from '../config/gymConfig';
import { SEOHead } from '../components/SEOHead';

interface AdminCustomizerPageProps {
  config: GymFullConfig;
  onUpdateConfig: (newConfig: GymFullConfig) => void;
  onResetConfig: () => void;
}

export const AdminCustomizerPage: React.FC<AdminCustomizerPageProps> = ({
  config,
  onUpdateConfig,
  onResetConfig,
}) => {
  const [copied, setCopied] = useState(false);
  const [savedBanner, setSavedBanner] = useState<string | null>(null);

  const showFeedback = (msg: string) => {
    setSavedBanner(msg);
    setTimeout(() => setSavedBanner(null), 3500);
  };

  // Quick Brand Presets
  const applyPreset = (presetName: string) => {
    if (presetName === 'ironvault') {
      onResetConfig();
      showFeedback('Applied default IronVault (Mumbai) preset.');
    } else if (presetName === 'titan') {
      onUpdateConfig({
        ...config,
        business: {
          ...config.business,
          name: 'TITAN FORGE GYM',
          tagline: 'FORGED UNDER IRON.',
          logoText: 'TITAN',
          logoAccent: 'FORGE',
          city: 'Bengaluru',
          locality: 'Indiranagar',
          serviceAreas: ['Indiranagar', 'Koramangala', 'Domlur', 'HSR Layout'],
          fullAddress: '100ft Road, Opp. Metro Station, Indiranagar, Bengaluru, Karnataka 560038',
          phone: '+91 98450 67890',
          displayPhone: '+91 98450 67890',
          whatsappNumber: '919845067890',
          startingPrice: 7499,
        },
      });
      showFeedback('Applied Titan Forge (Bengaluru) preset.');
    } else if (presetName === 'valkyrie') {
      onUpdateConfig({
        ...config,
        business: {
          ...config.business,
          name: 'VALKYRIE ATHLETIC CLUB',
          tagline: 'RELENTLESS PERFORMANCE.',
          logoText: 'VALKYRIE',
          logoAccent: 'ATHLETIC',
          city: 'Delhi NCR',
          locality: 'Vasant Vihar',
          serviceAreas: ['Vasant Vihar', 'Shanti Niketan', 'Anand Niketan', 'Chanakyapuri'],
          fullAddress: 'Community Centre, Basant Lok, Vasant Vihar, New Delhi 110057',
          phone: '+91 98110 54321',
          displayPhone: '+91 98110 54321',
          whatsappNumber: '919811054321',
          startingPrice: 8999,
        },
      });
      showFeedback('Applied Valkyrie Athletic Club (Delhi NCR) preset.');
    }
  };

  const copyConfigJson = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    showFeedback('Full configuration JSON copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadConfigJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(config, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${config.business.name.toLowerCase().replace(/\s+/g, '-')}-config.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showFeedback('Config file downloaded successfully.');
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-[#e4e4e7] pb-24">
      <SEOHead
        title="Admin Customizer | Internal Configuration Console"
        description="Internal management console for Gym Template 01 configuration and brand settings."
        canonicalPath="/admin"
      />

      {/* Internal Admin Top Bar */}
      <header className="sticky top-0 z-30 bg-[#101217] border-b border-[#202430] px-4 sm:px-8 py-3.5 shadow-xl">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181b23] hover:bg-[#232734] text-xs font-semibold text-[#a1a1aa] hover:text-white border border-[#2b3040] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Website</span>
            </Link>

            <div className="h-4 w-px bg-[#262b3a] hidden sm:block" />

            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#ea580c]" />
              <span className="font-heading font-black text-sm tracking-wider uppercase text-white">
                Template Customizer
              </span>
              <span className="text-[10px] bg-[#ea580c]/15 text-[#ea580c] font-mono px-2 py-0.5 rounded border border-[#ea580c]/30">
                Template ID: gym-01
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={copyConfigJson}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181b23] hover:bg-[#232734] text-xs font-semibold text-[#d4d4d8] hover:text-white border border-[#2b3040] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied JSON!' : 'Export Config'}</span>
            </button>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#ea580c] hover:bg-[#f97316] text-xs font-heading font-black tracking-wider uppercase text-black transition-colors shadow-md"
            >
              <span>View Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Floating alert banner */}
      {savedBanner && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161922] border border-[#ea580c] text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2.5 text-xs font-medium animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0" />
          <span>{savedBanner}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        {/* Intro notice card */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#111319] border border-[#222734] flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#ea580c] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Internal Template Configuration Console
            </h2>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              This route (<code className="text-[#ea580c] font-mono">/admin</code> or <code className="text-[#ea580c] font-mono">/customizer</code>) is separated from public website navigation. Changes applied here will update the active site in your browser session. Use the presets or fields below to configure white-label branding, contact numbers, address, pricing, and approved image URLs.
            </p>
          </div>
        </div>

        {/* 1. Quick Brand Presets */}
        <section className="p-6 rounded-xl bg-[#101218] border border-[#202532] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ea580c]" />
              <h3 className="font-heading font-bold text-base uppercase tracking-wider text-white">
                Quick Brand Presets
              </h3>
            </div>
            <span className="text-[11px] text-[#71717a]">Instant multi-city white-label configurations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => applyPreset('ironvault')}
              className="p-3.5 rounded-lg bg-[#151820] hover:bg-[#1e222d] text-left border border-[#262b3a] hover:border-[#ea580c] transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white group-hover:text-[#ea580c]">Mumbai — Default</span>
                <span className="text-[10px] font-mono bg-[#ea580c]/15 text-[#ea580c] px-1.5 py-0.5 rounded">₹6,999/mo</span>
              </div>
              <p className="text-xs text-[#d4d4d8] font-heading font-bold">IRONVAULT FITNESS</p>
              <p className="text-[11px] text-[#71717a] mt-0.5">Bandra West, Mumbai</p>
            </button>

            <button
              onClick={() => applyPreset('titan')}
              className="p-3.5 rounded-lg bg-[#151820] hover:bg-[#1e222d] text-left border border-[#262b3a] hover:border-[#ea580c] transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white group-hover:text-[#ea580c]">Bengaluru Preset</span>
                <span className="text-[10px] font-mono bg-[#ea580c]/15 text-[#ea580c] px-1.5 py-0.5 rounded">₹7,499/mo</span>
              </div>
              <p className="text-xs text-[#d4d4d8] font-heading font-bold">TITAN FORGE GYM</p>
              <p className="text-[11px] text-[#71717a] mt-0.5">Indiranagar, Bengaluru</p>
            </button>

            <button
              onClick={() => applyPreset('valkyrie')}
              className="p-3.5 rounded-lg bg-[#151820] hover:bg-[#1e222d] text-left border border-[#262b3a] hover:border-[#ea580c] transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white group-hover:text-[#ea580c]">Delhi NCR Preset</span>
                <span className="text-[10px] font-mono bg-[#ea580c]/15 text-[#ea580c] px-1.5 py-0.5 rounded">₹8,999/mo</span>
              </div>
              <p className="text-xs text-[#d4d4d8] font-heading font-bold">VALKYRIE ATHLETIC CLUB</p>
              <p className="text-[11px] text-[#71717a] mt-0.5">Vasant Vihar, New Delhi</p>
            </button>
          </div>
        </section>

        {/* 2. Brand Identity */}
        <section className="p-6 rounded-xl bg-[#101218] border border-[#202532] space-y-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#ea580c]" />
            <h3 className="font-heading font-bold text-base uppercase tracking-wider text-white">
              Brand Identity & Logos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
                Gym Brand Name
              </label>
              <input
                type="text"
                value={config.business.name}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, name: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
                Tagline
              </label>
              <input
                type="text"
                value={config.business.tagline}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, tagline: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
                Logo Primary Word
              </label>
              <input
                type="text"
                value={config.business.logoText}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, logoText: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
                Logo Accent Word (Orange highlight)
              </label>
              <input
                type="text"
                value={config.business.logoAccent}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, logoAccent: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>
          </div>
        </section>

        {/* 3. Location & Physical Address */}
        <section className="p-6 rounded-xl bg-[#101218] border border-[#202532] space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#ea580c]" />
            <h3 className="font-heading font-bold text-base uppercase tracking-wider text-white">
              Location & Address
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
                City
              </label>
              <input
                type="text"
                value={config.business.city}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, city: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
                Locality / Neighborhood
              </label>
              <input
                type="text"
                value={config.business.locality}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, locality: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
                Full Physical Address (Displays in footer, contact page, and schema markup)
              </label>
              <textarea
                rows={2}
                value={config.business.fullAddress}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, fullAddress: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-xs text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>
          </div>
        </section>

        {/* 4. Contact, WhatsApp & Pricing */}
        <section className="p-6 rounded-xl bg-[#101218] border border-[#202532] space-y-4">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#ea580c]" />
            <h3 className="font-heading font-bold text-base uppercase tracking-wider text-white">
              Contact, WhatsApp & Membership Pricing
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
                Display Phone
              </label>
              <input
                type="text"
                value={config.business.displayPhone}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: {
                      ...config.business,
                      displayPhone: e.target.value,
                      phone: e.target.value,
                    },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
                WhatsApp (Digits with Country Code)
              </label>
              <input
                type="text"
                value={config.business.whatsappNumber}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, whatsappNumber: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5 flex items-center gap-1">
                <IndianRupee className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Starting Price (₹/Month)</span>
              </label>
              <input
                type="number"
                value={config.business.startingPrice}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, startingPrice: parseInt(e.target.value) || 6999 },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>
          </div>
        </section>

        {/* 5. Approved Central Image Assets */}
        <section className="p-6 rounded-xl bg-[#101218] border border-[#202532] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#ea580c]" />
              <h3 className="font-heading font-bold text-base uppercase tracking-wider text-white">
                Approved Image Assets & URLs
              </h3>
            </div>
            <span className="text-[11px] text-[#71717a]">Central asset dictionary mapped to Section 1 & 34</span>
          </div>

          <div className="space-y-4">
            <div className="p-3.5 rounded-lg bg-[#14171f] border border-[#252a38] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={config.imageAssets.hero}
                alt="Hero preview"
                className="w-24 h-16 object-cover rounded bg-[#0b0c0e] border border-[#2b3040] shrink-0"
              />
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1">
                  Hero Background Image
                </label>
                <input
                  type="text"
                  value={config.imageAssets.hero}
                  onChange={(e) =>
                    onUpdateConfig({
                      ...config,
                      imageAssets: { ...config.imageAssets, hero: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded bg-[#181b23] border border-[#2d3342] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#14171f] border border-[#252a38] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={config.imageAssets.interior}
                alt="Interior preview"
                className="w-24 h-16 object-cover rounded bg-[#0b0c0e] border border-[#2b3040] shrink-0"
              />
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1">
                  Gym Interior Showcase
                </label>
                <input
                  type="text"
                  value={config.imageAssets.interior}
                  onChange={(e) =>
                    onUpdateConfig({
                      ...config,
                      imageAssets: { ...config.imageAssets, interior: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded bg-[#181b23] border border-[#2d3342] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#14171f] border border-[#252a38] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={config.imageAssets.strengthTraining}
                alt="Strength preview"
                className="w-24 h-16 object-cover rounded bg-[#0b0c0e] border border-[#2b3040] shrink-0"
              />
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1">
                  Strength Training Zone
                </label>
                <input
                  type="text"
                  value={config.imageAssets.strengthTraining}
                  onChange={(e) =>
                    onUpdateConfig({
                      ...config,
                      imageAssets: { ...config.imageAssets, strengthTraining: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded bg-[#181b23] border border-[#2d3342] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#14171f] border border-[#252a38] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={config.imageAssets.functionalTraining}
                alt="Functional preview"
                className="w-24 h-16 object-cover rounded bg-[#0b0c0e] border border-[#2b3040] shrink-0"
              />
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1">
                  Functional Training Deck
                </label>
                <input
                  type="text"
                  value={config.imageAssets.functionalTraining}
                  onChange={(e) =>
                    onUpdateConfig({
                      ...config,
                      imageAssets: { ...config.imageAssets, functionalTraining: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded bg-[#181b23] border border-[#2d3342] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#14171f] border border-[#252a38] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={config.imageAssets.transformation}
                alt="Transformation preview"
                className="w-24 h-16 object-cover rounded bg-[#0b0c0e] border border-[#2b3040] shrink-0"
              />
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold uppercase text-[#a1a1aa] mb-1">
                  Member Transformation
                </label>
                <input
                  type="text"
                  value={config.imageAssets.transformation}
                  onChange={(e) =>
                    onUpdateConfig({
                      ...config,
                      imageAssets: { ...config.imageAssets, transformation: e.target.value },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded bg-[#181b23] border border-[#2d3342] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Announcement Bar */}
        <section className="p-6 rounded-xl bg-[#101218] border border-[#202532] space-y-4">
          <div className="flex items-center gap-2">
            <Megaphone className="w-4 h-4 text-[#ea580c]" />
            <h3 className="font-heading font-bold text-base uppercase tracking-wider text-white">
              Top Announcement Bar
            </h3>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-1.5">
              Announcement Message
            </label>
            <input
              type="text"
              value={config.announcement.text}
              onChange={(e) =>
                onUpdateConfig({
                  ...config,
                  announcement: { ...config.announcement, text: e.target.value },
                })
              }
              className="w-full px-3.5 py-2.5 rounded bg-[#151820] border border-[#282e3c] text-sm text-white focus:outline-none focus:border-[#ea580c]"
            />
          </div>
        </section>

        {/* 7. Action Footer */}
        <div className="p-6 rounded-xl bg-[#12141c] border border-[#222736] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onResetConfig();
                showFeedback('All settings reset to default IronVault configuration.');
              }}
              className="px-4 py-2.5 rounded bg-[#181a24] hover:bg-[#232634] text-xs font-semibold text-[#a1a1aa] hover:text-white border border-[#2a2f40] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={downloadConfigJson}
              className="px-4 py-2.5 rounded bg-[#181a24] hover:bg-[#232634] text-xs font-semibold text-[#d4d4d8] hover:text-white border border-[#2a2f40] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download JSON</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={copyConfigJson}
              className="px-4 py-2.5 rounded bg-[#1e222d] hover:bg-[#2a3040] text-xs font-bold text-white border border-[#333a4d] flex items-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied JSON!' : 'Copy Config JSON'}</span>
            </button>

            <Link
              to="/"
              className="px-5 py-2.5 rounded bg-[#ea580c] hover:bg-[#f97316] text-black font-heading font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg"
            >
              <span>Save & View Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
