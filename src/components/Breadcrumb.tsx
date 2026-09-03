import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 bg-[#0e1014] border-b border-[#1b1e25]">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-xs text-[#a1a1aa]">
        <Link
          to="/"
          className="flex items-center gap-1 hover:text-[#ea580c] transition-colors py-0.5"
        >
          <Home className="w-3.5 h-3.5 text-[#ea580c]" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-[#52525b] shrink-0" />
              {isLast || !item.href ? (
                <span className="text-white font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-[#ea580c] transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
