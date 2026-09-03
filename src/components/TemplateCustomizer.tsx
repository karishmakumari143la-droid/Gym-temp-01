import React, { useState } from 'react';
import {
  X,
  Sliders,
  RotateCcw,
  Check,
  Copy,
  Building2,
  Phone,
  MapPin,
  IndianRupee,
  Sparkles,
} from 'lucide-react';
import { GymFullConfig } from '../types';
import { defaultGymConfig } from '../config/gymConfig';

interface TemplateCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  config: GymFullConfig;
  onUpdateConfig: (newConfig: GymFullConfig) => void;
}

export const TemplateCustomizer: React.FC<TemplateCustomizerProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Preset demo brands to prove immediate white-label versatility
  const applyPreset = (presetName: string) => {
    if (presetName === 'ironvault') {
      onUpdateConfig(defaultGymConfig);
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
    }
  };

  const copyConfigJson = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="template-customizer-drawer"
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-heading"
    >
      <div className="w-full max-w-md bg-[#0e1014] border-l border-[#242833] h-full flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-[#212530] flex items-center justify-between bg-[#121419]">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#ea580c]" />
            <div>
              <h3 id="customizer-heading" className="font-heading text-xl font-bold uppercase text-white leading-none">
                Template Customizer
              </h3>
              <span className="text-[11px] text-[#71717a] font-mono">Template ID: gym-01</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#71717a] hover:text-white bg-[#1a1d24] border border-[#272b35]"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Quick Presets */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#a1a1aa] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>Quick Brand Presets</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => applyPreset('ironvault')}
                className="p-2 rounded bg-[#16181f] hover:bg-[#20232b] text-[11px] font-bold text-white border border-[#2a2f3b] text-center"
              >
                Mumbai
                <span className="block text-[9px] text-[#71717a] font-normal">IronVault</span>
              </button>
              <button
                onClick={() => applyPreset('titan')}
                className="p-2 rounded bg-[#16181f] hover:bg-[#20232b] text-[11px] font-bold text-white border border-[#2a2f3b] text-center"
              >
                Bengaluru
                <span className="block text-[9px] text-[#71717a] font-normal">Titan Forge</span>
              </button>
              <button
                onClick={() => applyPreset('valkyrie')}
                className="p-2 rounded bg-[#16181f] hover:bg-[#20232b] text-[11px] font-bold text-white border border-[#2a2f3b] text-center"
              >
                Delhi NCR
                <span className="block text-[9px] text-[#71717a] font-normal">Valkyrie</span>
              </button>
            </div>
          </div>

          {/* Business Name & Tagline */}
          <div className="space-y-3 pt-3 border-t border-[#1c1f26]">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
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
                className="w-full px-3 py-2 rounded bg-[#14161d] border border-[#282d38] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
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
                className="w-full px-3 py-2 rounded bg-[#14161d] border border-[#282d38] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>
          </div>

          {/* Location & City */}
          <div className="space-y-3 pt-3 border-t border-[#1c1f26]">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
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
                  className="w-full px-3 py-2 rounded bg-[#14161d] border border-[#282d38] text-sm text-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                  Locality
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
                  className="w-full px-3 py-2 rounded bg-[#14161d] border border-[#282d38] text-sm text-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                Full Physical Address
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
                className="w-full px-3 py-2 rounded bg-[#14161d] border border-[#282d38] text-xs text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-3 pt-3 border-t border-[#1c1f26]">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                Display Phone
              </label>
              <input
                type="text"
                value={config.business.displayPhone}
                onChange={(e) =>
                  onUpdateConfig({
                    ...config,
                    business: { ...config.business, displayPhone: e.target.value, phone: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded bg-[#14161d] border border-[#282d38] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                WhatsApp Number (digits only with country code)
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
                className="w-full px-3 py-2 rounded bg-[#14161d] border border-[#282d38] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                Starting Monthly Price (₹)
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
                className="w-full px-3 py-2 rounded bg-[#14161d] border border-[#282d38] text-sm text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>
          </div>

          {/* Centralized Image Assets & ALT Tags */}
          <div className="space-y-3 pt-3 border-t border-[#1c1f26]">
            <div className="flex items-center gap-1.5 text-xs font-heading font-black text-[#ea580c] uppercase">
              <span>Approved Image Assets (7 Central Assets)</span>
            </div>
            <p className="text-[11px] text-[#71717a] leading-relaxed">
              Strictly managed image URLs and SEO ALT tags matching Section 1 & Section 34 specifications.
            </p>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#a1a1aa] mb-1">
                Hero Background URL
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
                className="w-full px-2.5 py-1.5 rounded bg-[#14161d] border border-[#282d38] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#a1a1aa] mb-1">
                Gym Interior Showcase URL
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
                className="w-full px-2.5 py-1.5 rounded bg-[#14161d] border border-[#282d38] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#a1a1aa] mb-1">
                Strength Training URL
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
                className="w-full px-2.5 py-1.5 rounded bg-[#14161d] border border-[#282d38] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#a1a1aa] mb-1">
                Functional Training URL
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
                className="w-full px-2.5 py-1.5 rounded bg-[#14161d] border border-[#282d38] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#a1a1aa] mb-1">
                Transformation Image URL
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
                className="w-full px-2.5 py-1.5 rounded bg-[#14161d] border border-[#282d38] text-xs font-mono text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>
          </div>

          {/* Announcement Bar text */}
          <div className="space-y-3 pt-3 border-t border-[#1c1f26]">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#d4d4d8] mb-1">
                Announcement Bar Message
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
                className="w-full px-3 py-2 rounded bg-[#14161d] border border-[#282d38] text-xs text-white focus:outline-none focus:border-[#ea580c]"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#212530] bg-[#121419] flex items-center justify-between gap-3">
          <button
            onClick={() => onUpdateConfig(defaultGymConfig)}
            className="px-3 py-2 rounded bg-[#1a1d25] hover:bg-[#242833] text-xs font-semibold text-[#a1a1aa] hover:text-white border border-[#2c313d] flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={copyConfigJson}
            className="px-4 py-2 rounded bg-[#ea580c] hover:bg-[#f97316] text-black font-heading font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied JSON!' : 'Export Config'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
