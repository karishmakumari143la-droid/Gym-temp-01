import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import { getAssetUrl } from '../config/gymConfig';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  categoryBadge?: string;
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'IronVault Fitness Facility',
  className = '',
  fallbackLabel = 'IronVault Fitness Training Facility',
  categoryBadge,
  priority = false,
  loading,
  style,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const resolvedSrc = src ? getAssetUrl(src) : undefined;

  if (hasError || !resolvedSrc) {
    return (
      <div
        className={`relative overflow-hidden bg-[#121418] border border-[#232730] flex flex-col items-center justify-center text-center p-6 select-none ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1d24] to-[#0d0e12] opacity-80" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-lg bg-[#1e222b] border border-[#2d3340] flex items-center justify-center text-[#ea580c] mb-3">
            <Dumbbell className="w-6 h-6" />
          </div>
          {categoryBadge && (
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#ea580c]/10 text-[#ea580c] border border-[#ea580c]/30 mb-2">
              {categoryBadge}
            </span>
          )}
          <p className="text-sm font-medium text-[#d4d4d8] max-w-[220px] line-clamp-2">
            {fallbackLabel}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#14161b] animate-pulse z-0" />
      )}
      <img
        src={resolvedSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        loading={priority ? 'eager' : (loading || 'lazy')}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...props}
      />
    </div>
  );
};
