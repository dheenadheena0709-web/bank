import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Smartphone,
  RotateCcw,
  ListFilter,
  ShieldAlert,
  Sparkles,
  X,
  Download,
  FolderArchive,
  CheckCircle2
} from 'lucide-react';
import { useBank } from '../context/BankContext';
import { BrandLogo } from './BrandLogo';
import { PWAInstallModal } from './PWAInstallModal';

interface MobileFrameProps {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetAccountData, deviceFrame, setDeviceFrame } = useBank();
  const [showScreenDrawer, setShowScreenDrawer] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const screens = [
    { num: '0', title: 'Welcome / Landing', path: '/' },
    { num: '0.5', title: 'Login (PIN / Password / Bio)', path: '/login' },
    { num: '1', title: 'Digital Secure Key', path: '/secure-key' },
    { num: '2', title: 'Home / Accounts', path: '/home' },
    { num: '3', title: 'People & Business', path: '/people-and-bills' },
    { num: '4', title: 'Electricity Bill Payment', path: '/electricity-bill' },
    { num: '5', title: 'Pay and Transfer Main', path: '/pay-and-transfer' },
    { num: '6', title: 'Transfer Form', path: '/transfer' },
    { num: '7', title: 'Payment Completed', path: '/payment-success' },
    { num: '8', title: 'Investment', path: '/investment' },
    { num: '9', title: 'My Details / Support', path: '/profile' },
    { num: '10', title: 'mPassbook (Physical Ledger)', path: '/mpassbook', highlight: true },
  ];

  const currentScreen = screens.find(s => s.path === location.pathname) || {
    num: '•',
    title: 'HSBC'
  };

  const handleDownloadZip = () => {
    setDownloadTriggered(true);
    const link = document.createElement('a');
    link.href = '/hsbc-mobile-banking.zip';
    link.download = 'hsbc-mobile-banking.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-start text-slate-100 py-3 sm:py-6 px-2 sm:px-4">
      {/* Top Controls Toolbar */}
      <div className="w-full max-w-4xl mb-3 px-3 py-2 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between gap-2.5 text-xs text-slate-300 shadow-sm backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#DB0011]/20 text-[#DB0011]">
            <ShieldAlert className="w-3.5 h-3.5" />
          </span>
          <span className="font-black text-white tracking-wider">
            HSBC
          </span>
          <span className="hidden sm:inline text-slate-500">·</span>
          <span className="hidden sm:inline text-slate-400">
            Mobile Banking Prototype
          </span>
        </div>

        {/* Quick Toolbar with Download Zip & Install PWA */}
        <div className="flex items-center gap-2 ml-auto flex-wrap">
          <button
            onClick={() => setShowInstallModal(true)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-white transition text-xs font-bold cursor-pointer shadow-xs border border-red-400/40"
            title="Install app to your mobile home screen with HSBC icon"
          >
            <img src="/apple-touch-icon.png" alt="Icon" className="w-3.5 h-3.5 rounded object-contain bg-white" />
            <span>Install to Phone</span>
          </button>

          <button
            onClick={() => {
              handleDownloadZip();
              setShowDownloadModal(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white transition text-xs font-bold cursor-pointer shadow-md"
            title="Download full project as ZIP"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ZIP</span>
          </button>

          <button
            onClick={() => setShowScreenDrawer(!showScreenDrawer)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#DB0011] hover:bg-[#b5000e] text-white transition text-xs font-semibold cursor-pointer shadow-xs"
            title="Jump to any screen"
          >
            <ListFilter className="w-3.5 h-3.5 text-white" />
            <span>Screen Navigator ({currentScreen.num})</span>
          </button>

          <button
            onClick={() => {
              resetAccountData();
              navigate('/home');
            }}
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition text-xs cursor-pointer"
            title="Reset balance to ₹2,50,999"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden md:inline">Reset</span>
          </button>

          <button
            onClick={() => setDeviceFrame(!deviceFrame)}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg transition text-xs cursor-pointer ${
              deviceFrame ? 'bg-slate-800 text-slate-300' : 'bg-[#DB0011] text-white font-semibold'
            }`}
            title="Toggle bezel container"
          >
            <Smartphone className="w-3 h-3" />
            <span className="hidden sm:inline">{deviceFrame ? 'Frame On' : 'Full'}</span>
          </button>
        </div>
      </div>

      {/* DOWNLOAD ZIP MODAL */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-5 shadow-2xl relative text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FolderArchive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Download Project as ZIP</h3>
                  <p className="text-xs text-slate-400">Complete ready-to-run source code</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowDownloadModal(false);
                  setDownloadTriggered(false);
                }}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-2">
                <div className="font-semibold text-white flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-bold">
                    <FolderArchive className="w-4 h-4 text-emerald-400" />
                    hsbc-mobile-banking.zip
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono font-bold">1.5 MB</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Updated complete source code bundle with all recent features:
                </p>
                <ul className="text-[10px] text-slate-300 space-y-1 list-disc list-inside">
                  <li><strong>All 11 Screens</strong>: Welcome, Login, Digital Key, Home, People & Bills, Electricity, Pay & Transfer, Transfer Form, Payment Success, Investment, My Details, and physical mPassbook</li>
                  <li><strong>Strict PIN (775533)</strong>: Login & Transaction PIN authorization</li>
                  <li><strong>Blank Transfer Form</strong>: Beneficiary name, account matching, and IFSC detection</li>
                  <li><strong>PWA Mobile Home Screen</strong>: Official HSBC India icons (192px, 512px, maskable, apple-touch-icon 180px, manifest.json)</li>
                  <li><strong>No fake status bar</strong>: Clean viewport starting directly with app header</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                <div className="text-slate-500 font-sans font-bold text-[10px] uppercase">
                  How to run locally:
                </div>
                <div className="text-emerald-400">1. unzip hsbc-mobile-banking.zip</div>
                <div className="text-emerald-400">2. npm install</div>
                <div className="text-emerald-400">3. npm run dev</div>
              </div>

              {downloadTriggered && (
                <div className="p-2.5 bg-emerald-950/40 border border-emerald-600/40 rounded-xl flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span className="text-[11px]">Download started! File saved to your Downloads folder.</span>
                </div>
              )}
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href="/hsbc-mobile-banking.zip"
                download="hsbc-mobile-banking.zip"
                onClick={() => setDownloadTriggered(true)}
                className="flex-1 h-11 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download hsbc-mobile-banking.zip</span>
              </a>

              <button
                onClick={() => {
                  setShowDownloadModal(false);
                  setDownloadTriggered(false);
                }}
                className="px-4 h-11 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Screen Selector Drawer / Modal */}
      {showScreenDrawer && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg p-5 shadow-2xl relative text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <BrandLogo size="sm" variant="red" />
                <div>
                  <h3 className="text-base font-bold text-white">Select Prototype Screen</h3>
                  <p className="text-xs text-slate-400">All required screens formatted in HSBC layout</p>
                </div>
              </div>
              <button
                onClick={() => setShowScreenDrawer(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[70vh] overflow-y-auto pr-1">
              {screens.map((scr) => {
                const isActive = location.pathname === scr.path;
                return (
                  <button
                    key={scr.path}
                    onClick={() => {
                      navigate(scr.path);
                      setShowScreenDrawer(false);
                    }}
                    className={`p-2.5 rounded-xl text-left border transition flex items-start gap-2.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#DB0011] border-red-500 text-white shadow-md'
                        : scr.highlight
                        ? 'bg-red-950/40 border-red-500/40 text-red-200 hover:bg-red-900/40'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <span
                      className={`px-1.5 py-0.5 rounded text-[11px] font-bold shrink-0 ${
                        isActive
                          ? 'bg-white text-[#DB0011]'
                          : scr.highlight
                          ? 'bg-[#DB0011] text-white'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {scr.num}
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-semibold truncate flex items-center gap-1">
                        {scr.title}
                        {scr.highlight && <Sparkles className="w-3 h-3 text-red-400 shrink-0" />}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">{scr.path}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400 gap-2">
              <button
                onClick={() => {
                  setShowScreenDrawer(false);
                  handleDownloadZip();
                  setShowDownloadModal(true);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition cursor-pointer text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download ZIP (1.5 MB)</span>
              </button>
              <button
                onClick={() => setShowScreenDrawer(false)}
                className="text-xs font-medium text-[#DB0011] hover:underline cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container - Clean Mobile Frame without fake status bar */}
      <div
        className={`w-full transition-all duration-300 flex justify-center ${
          deviceFrame ? 'max-w-[412px]' : 'max-w-md'
        }`}
      >
        <div
          className={`w-full bg-[#F5F5F5] shadow-2xl overflow-hidden relative flex flex-col ${
            deviceFrame
              ? 'rounded-[32px] border-[6px] border-slate-800/90 shadow-2xl min-h-[760px] max-h-[860px]'
              : 'rounded-xl border border-slate-800 min-h-[740px]'
          }`}
        >
          {/* Screen Content Viewport - Starts directly with app content (HSBC logo / Header) */}
          <div className="flex-1 overflow-y-auto no-scrollbar bg-[#F5F5F5] text-black flex flex-col relative">
            {children}
          </div>
        </div>
      </div>

      {/* PWA INSTALL / HOME SCREEN ICON MODAL */}
      <PWAInstallModal
        isOpen={showInstallModal}
        onClose={() => setShowInstallModal(false)}
      />
    </div>
  );
};
