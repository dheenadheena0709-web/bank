import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';
import {
  TrendingUp,
  ChevronRight,
  ArrowUpRight,
  Landmark,
  Coins,
  FileText,
  Info
} from 'lucide-react';

export const Screen8Investment: React.FC = () => {
  const navigate = useNavigate();

  const totalAssetValue = 50571.13;
  const totalGain = 573.63;
  const gainPercentage = 1.15;

  const holdings = [
    {
      id: 'h1',
      name: 'HSBC Nifty 50 Bluechip Index Fund',
      category: 'Large Cap Equity',
      invested: 32060.80,
      current: 32450.00,
      gain: 389.20,
      gainPct: 1.21,
      allocationPct: 64.2,
      color: 'bg-[#DB0011]',
    },
    {
      id: 'h2',
      name: 'HSBC Dynamic Hybrid Balanced Fund',
      category: 'Hybrid / Balanced',
      invested: 17936.70,
      current: 18121.13,
      gain: 184.43,
      gainPct: 1.03,
      allocationPct: 35.8,
      color: 'bg-black',
    },
  ];

  const productsAndServices = [
    {
      id: 'mf',
      title: 'Mutual funds',
      desc: 'Explore 2,500+ top rated schemes',
      badge: 'Direct Schemes',
      icon: TrendingUp,
    },
    {
      id: 'fd',
      title: 'Fixed Deposits (e-FD)',
      desc: 'Guaranteed returns up to 7.85% p.a.',
      badge: '7.85% p.a.',
      icon: Landmark,
    },
    {
      id: 'sgb',
      title: 'Sovereign Gold Bonds',
      desc: 'Govt backed gold with 2.5% annual interest',
      badge: 'Govt Backed',
      icon: Coins,
    },
    {
      id: 'nps',
      title: 'National Pension System (NPS)',
      desc: 'Retirement tax saving scheme',
      badge: 'Tax Free',
      icon: FileText,
    },
  ];

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F5F5F5] min-h-[740px]">
      {/* Header Background: #DB0011 */}
      <header className="bg-[#DB0011] text-white px-4 pt-3 pb-5 shadow-sm">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold tracking-tight">Investment</h1>
          <button
            onClick={() => alert('Portfolio report emailed.')}
            className="p-1 rounded-lg bg-black/10 hover:bg-black/20 text-white transition cursor-pointer"
            title="Info"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-white/80">
          Portfolio and market solutions
        </p>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-4 py-3 space-y-3.5">
        {/* MUTUAL FUNDS - TOTAL ASSET VALUE 50,571.13 INR */}
        <div className="bg-[#FFFFFF] rounded-xl border border-slate-200/80 p-4 shadow-sm relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase block">
                Mutual Funds
              </span>
              <h2 className="text-xs font-bold text-black mt-0.5">
                Total asset value
              </h2>
            </div>
            <span className="text-[10px] font-bold text-[#DB0011] bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
              Active Portfolio
            </span>
          </div>

          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-black font-mono text-black">
              {totalAssetValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-xs font-bold text-slate-600">INR</span>
          </div>

          {/* GAIN DISPLAY +573.63 */}
          <div className="mt-2 flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>+{totalGain.toFixed(2)} gain</span>
              <span>(+{gainPercentage}%)</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">Unrealized P&L</span>
          </div>

          {/* BAR CHART FOR MY HOLDINGS, MUTUAL FUNDS 100.00% */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-black">My holdings</span>
              <span className="font-bold text-[#DB0011] font-mono">Mutual funds 100.00%</span>
            </div>

            {/* Visual Bar Chart */}
            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden flex shadow-inner">
              <div
                style={{ width: '64.2%' }}
                className="h-full bg-[#DB0011] transition-all duration-500"
              />
              <div
                style={{ width: '35.8%' }}
                className="h-full bg-black transition-all duration-500"
              />
            </div>

            <div className="mt-3 space-y-2">
              {holdings.map((h) => (
                <div key={h.id} className="p-2 rounded-lg bg-[#F5F5F5] text-xs flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${h.color} shrink-0`} />
                    <div>
                      <h4 className="font-bold text-black text-[11px] leading-tight">
                        {h.name}
                      </h4>
                      <span className="text-[10px] text-slate-500">{h.category}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-black block text-[11px]">
                      ₹{h.current.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="font-mono text-[9px] text-emerald-700 font-bold">
                      +{h.gain.toFixed(2)} (+{h.gainPct}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCTS AND SERVICES */}
        <div>
          <div className="flex items-center justify-between mb-2 px-1">
            <h3 className="text-xs font-bold text-black uppercase tracking-wider">
              Products and services
            </h3>
          </div>

          <div className="bg-[#FFFFFF] rounded-xl border border-slate-200/80 shadow-sm overflow-hidden divide-y divide-slate-100">
            {productsAndServices.map((product) => {
              const Icon = product.icon;
              return (
                <button
                  key={product.id}
                  onClick={() => alert(`${product.title} explored.`)}
                  className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-[#DB0011] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-black group-hover:text-[#DB0011]">
                        {product.title}
                      </h4>
                      <p className="text-[10px] text-slate-500">{product.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTabOverride="investment" />
    </div>
  );
};
