import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Smartphone, Download, X, Share, PlusSquare, CheckCircle2, ArrowRight } from 'lucide-react';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [installSuccess, setInstallSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'android' | 'ios'>('android');

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstallSuccess(true);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-5 shadow-2xl relative text-left text-white max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-md flex items-center justify-center shrink-0">
              <img
                src="/apple-touch-icon.png"
                alt="HSBC India App Icon"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Add to Home Screen</h3>
              <p className="text-xs text-slate-400">Install as native mobile app with HSBC icon</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Preview of Home Screen Icon */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center mb-4">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block mb-2">
            Mobile Home Screen Icon Preview
          </span>
          <div className="flex flex-col items-center justify-center gap-1.5 py-1">
            <div className="w-16 h-16 rounded-2xl bg-white p-1.5 shadow-xl border border-slate-200/20 relative group">
              <img
                src="/pwa-192x192.png"
                alt="HSBC India Icon"
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow">
                ✓
              </div>
            </div>
            <span className="text-xs font-bold text-slate-100">HSBC India</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            When you open the published link and add to home screen, your phone will use this exact official HSBC IN icon!
          </p>
        </div>

        {/* One-click install button for browsers supporting beforeinstallprompt */}
        {isInstallable && !installSuccess && (
          <button
            onClick={handleInstallClick}
            className="w-full mb-4 h-12 bg-[#DB0011] hover:bg-[#b5000e] active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Install to Home Screen Now</span>
          </button>
        )}

        {installSuccess && (
          <div className="mb-4 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl flex items-center gap-2 text-emerald-300 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Installation accepted! Check your phone's home screen for the app icon.</span>
          </div>
        )}

        {/* OS Platform Switcher */}
        <div className="flex bg-slate-800 p-1 rounded-xl mb-3">
          <button
            onClick={() => setActiveTab('android')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
              activeTab === 'android' ? 'bg-[#DB0011] text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            Android (Chrome)
          </button>
          <button
            onClick={() => setActiveTab('ios')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
              activeTab === 'ios' ? 'bg-[#DB0011] text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            iPhone (Safari)
          </button>
        </div>

        {/* Step-by-Step Instructions */}
        {activeTab === 'android' ? (
          <div className="space-y-2.5 text-xs text-slate-300 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
              <span>Publish your app, copy the published web link, and open it in <strong>Google Chrome</strong> on your Android phone.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
              <span>Tap the <strong>three dots menu (⋮)</strong> in the top right corner of Chrome.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
              <span>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#DB0011] text-white flex items-center justify-center font-bold text-[11px] shrink-0">4</span>
              <span>Confirm <strong>"Install"</strong>. The HSBC icon will be added to your home screen!</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2.5 text-xs text-slate-300 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
              <span>Publish your app, copy the link, and open it in <strong>Safari</strong> on your iPhone or iPad.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
              <span>Tap the <strong>Share</strong> button (the square icon with arrow pointing up <Share className="w-3 h-3 inline mx-0.5 text-sky-400" />) at bottom.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
              <span>Scroll down the share sheet and tap <strong>"Add to Home Screen"</strong> (<PlusSquare className="w-3 h-3 inline mx-0.5 text-emerald-400" />).</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#DB0011] text-white flex items-center justify-center font-bold text-[11px] shrink-0">4</span>
              <span>Tap <strong>"Add"</strong> in the top right corner. The HSBC icon will appear on your iOS home screen!</span>
            </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
