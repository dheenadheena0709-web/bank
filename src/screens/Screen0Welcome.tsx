import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo';
import { ChevronRight, Globe } from 'lucide-react';

export const Screen0Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[740px] flex-1 flex flex-col justify-between overflow-hidden bg-[#F5F5F5]">
      {/* Background: Scenic lake/mountain blurred image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/scenic_mountain_lake_1791261917734.jpg"
          alt="Scenic lake and mountains"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter blur-[1.5px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      {/* Top Header / Language */}
      <div className="relative z-10 px-5 pt-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs border border-white/20">
          <Globe className="w-3.5 h-3.5 text-white" />
          <span className="font-semibold text-white">English (India)</span>
        </div>
      </div>

      {/* Brand Logo in Hexagon */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-6">
        <div className="p-3 bg-white rounded-2xl shadow-xl mb-2.5">
          <BrandLogo size="lg" variant="red" />
        </div>
        <h1 className="text-3xl font-black tracking-widest text-white uppercase drop-shadow-md">
          HSBC
        </h1>
      </div>

      {/* Center Card White: "Welcome to HSBC" */}
      <div className="relative z-10 px-4 pb-6">
        <div className="bg-[#FFFFFF] rounded-2xl p-5 shadow-2xl border border-slate-100 text-center">
          <h2 className="text-xl font-bold text-black tracking-tight">
            Welcome to HSBC
          </h2>
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
            Manage your finances securely and effortlessly on the move.
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            {/* Yes, log on or register - Solid Red #DB0011 */}
            <button
              onClick={() => navigate('/login')}
              className="w-full h-12 bg-[#DB0011] hover:bg-[#b5000e] active:scale-[0.99] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer"
            >
              <span>Yes, log on or register</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>

            {/* Not yet, open a new account - Outlined */}
            <button
              onClick={() => {
                alert('Account opening onboarding demo: Navigating to registration & login.');
                navigate('/login');
              }}
              className="w-full h-12 bg-white hover:bg-slate-50 active:scale-[0.99] text-black border border-slate-300 font-bold text-sm rounded-lg flex items-center justify-center transition cursor-pointer"
            >
              <span>Not yet, open a new account</span>
            </button>
          </div>

          {/* Bottom text: Already bank with us? */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-600">
            <span>Already bank with us?</span>
            <button
              onClick={() => navigate('/login')}
              className="font-bold text-[#DB0011] hover:underline cursor-pointer"
            >
              Log on now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
