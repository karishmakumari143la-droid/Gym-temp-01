import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // Normalize base path: ensures proper leading and trailing slashes
  const normalizeBase = (val?: string): string | undefined => {
    if (!val) return undefined;
    let clean = val.trim();
    if (!clean.startsWith('/')) clean = '/' + clean;
    if (!clean.endsWith('/')) clean = clean + '/';
    return clean;
  };

  // Automatically detect GitHub repository name from GitHub Actions runner environment
  // e.g. GITHUB_REPOSITORY = "karishmakumari143la-droid/Gym-temp-01" -> "/Gym-temp-01/"
  let detectedGhRepoBase: string | undefined = undefined;
  if (process.env.GITHUB_REPOSITORY) {
    const parts = process.env.GITHUB_REPOSITORY.split('/');
    if (parts[1]) {
      detectedGhRepoBase = normalizeBase(parts[1]);
    }
  }

  // Base path resolution priority:
  // 1. Explicit VITE_BASE_PATH env variable (e.g. from GitHub Actions or custom domain)
  // 2. Extracted repo name from GITHUB_REPOSITORY (case-exact match for GitHub Pages)
  // 3. Fallback when built in GitHub environment: '/Gym-temp-01/'
  // 4. Default for local development: '/'
  const isGitHub =
    process.env.GITHUB_PAGES === 'true' ||
    process.env.GITHUB_ACTIONS === 'true' ||
    process.env.BUILD_FOR_GH_PAGES === 'true';

  const base =
    normalizeBase(process.env.VITE_BASE_PATH) ??
    detectedGhRepoBase ??
    (isGitHub ? '/Gym-temp-01/' : '/');

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
