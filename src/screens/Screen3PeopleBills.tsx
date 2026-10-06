import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';
import { PEOPLE_CONTACTS } from '../constants/mockData';
import { useBank } from '../context/BankContext';
import {
  Smartphone,
  PhoneCall,
  Zap,
  Flame,
  Car,
  BadgeIndianRupee,
  Home,
  LayoutGrid,
  ChevronRight,
  ArrowUpRight,
  ArrowDownLeft,
  Plus
} from 'lucide-react';

export const Screen3PeopleBills: React.FC = () => {
  const navigate = useNavigate();
  const { transactions } = useBank();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // 8 Bill Payments icons
  const billPaymentServices = [
    { id: 'mobile', name: 'Mobile Recharge', icon: Smartphone, color: 'bg-red-50 text-[#DB0011]', path: null },
    { id: 'postpaid', name: 'Postpaid', icon: PhoneCall, color: 'bg-slate-100 text-slate-800', path: null },
    { id: 'electricity', name: 'Electricity Bill', icon: Zap, color: 'bg-red-50 text-[#DB0011]', path: '/electricity-bill', highlight: true },
    { id: 'gas', name: 'Piped Gas', icon: Flame, color: 'bg-slate-100 text-slate-800', path: null },
    { id: 'fastag', name: 'FASTag', icon: Car, color: 'bg-slate-100 text-slate-800', path: null },
    { id: 'emi', name: 'Loan EMI', icon: BadgeIndianRupee, color: 'bg-slate-100 text-slate-800', path: null },
    { id: 'rent', name: 'Rent', icon: Home, color: 'bg-slate-100 text-slate-800', path: null },
    { id: 'all', name: 'View All', icon: LayoutGrid, color: 'bg-slate-100 text-slate-800', path: null },
  ];

  const handleBillClick = (service: typeof billPaymentServices[0]) => {
    if (service.path) {
      navigate(service.path);
    } else {
      showToast(`${service.name} payment service selected`);
    }
  };

  const handleContactClick = (contact: typeof PEOPLE_CONTACTS[0]) => {
    navigate('/transfer', { state: { payeeName: contact.name, accNo: contact.accNumber } });
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F5F5F5] min-h-[740px]">
      {/* Top Red Header #DB0011 "People & Business" */}
      <header className="bg-[#DB0011] text-white px-4 pt-3 pb-5 shadow-sm">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold tracking-tight">People & Business</h1>
          <button
            onClick={() => navigate('/pay-and-transfer')}
            className="text-xs font-bold text-white/90 hover:text-white flex items-center gap-0.5 cursor-pointer bg-white/10 px-2 py-0.5 rounded-md"
          >
            <span>International</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-xs text-white/80">
          Send money and manage utility bills
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-3 space-y-4">
        {/* SECTION 1: GRID OF 8 CIRCULAR AVATARS WITH INITIALS (HR, CI, MR, RR, HI, B, RV, SB) */}
        <div>
          <div className="flex items-center justify-between mb-2 px-1">
            <h2 className="text-xs font-bold text-black uppercase tracking-wider">
              People & Accounts
            </h2>
            <button
              onClick={() => navigate('/transfer')}
              className="text-xs font-bold text-[#DB0011] hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add payee</span>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-y-3 gap-x-2 bg-[#FFFFFF] p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
            {PEOPLE_CONTACTS.map((contact) => (
              <button
                key={contact.id}
                onClick={() => handleContactClick(contact)}
                className="flex flex-col items-center group cursor-pointer"
                title={`Transfer to ${contact.name}`}
              >
                {/* Circular Avatar with Initials */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-xs transition-transform group-hover:scale-105 group-active:scale-95 bg-slate-100 text-black border border-slate-300"
                >
                  {contact.initials}
                </div>
                <span className="text-[11px] font-bold text-black mt-1.5 truncate max-w-[68px] text-center">
                  {contact.name.split(' ')[0]}
                </span>
                <span className="text-[9px] text-slate-500 font-medium">
                  {contact.bank.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 2: BILL PAYMENTS (8 ICONS) */}
        <div>
          <div className="flex items-center justify-between mb-2 px-1">
            <h2 className="text-xs font-bold text-black uppercase tracking-wider">
              Bill Payments
            </h2>
            <span className="text-[10px] text-slate-500 font-semibold">
              BBPS Assured
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 bg-[#FFFFFF] p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
            {billPaymentServices.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => handleBillClick(service)}
                  className={`flex flex-col items-center p-2 rounded-lg transition text-center group cursor-pointer ${
                    service.highlight
                      ? 'bg-red-50/70 border border-red-200 hover:bg-red-100/70'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition group-hover:scale-105 ${service.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] mt-1.5 font-bold line-clamp-1 leading-tight ${
                      service.highlight ? 'text-[#DB0011]' : 'text-black'
                    }`}
                  >
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: RECENT TRANSACTIONS */}
        <div>
          <div className="flex items-center justify-between mb-2 px-1">
            <h2 className="text-xs font-bold text-black uppercase tracking-wider">
              Recent Transactions
            </h2>
            <button
              onClick={() => navigate('/mpassbook')}
              className="text-xs font-bold text-[#DB0011] hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>View mPassbook</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#FFFFFF] rounded-xl border border-slate-200/80 shadow-sm divide-y divide-slate-100 overflow-hidden">
            {transactions.slice(0, 4).map((tx) => (
              <div
                key={tx.id}
                className="p-3 flex items-center justify-between hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      tx.type === 'debit'
                        ? 'bg-red-50 text-[#DB0011]'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {tx.type === 'debit' ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownLeft className="w-4 h-4" />
                    )}
                  </div>
                  <div className="max-w-[170px]">
                    <h3 className="text-xs font-bold text-black truncate">
                      {tx.narration.replace(/^(UPI|NEFT|ACH|BBPS|CMS)\//, '')}
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      {tx.date} · {tx.category}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`text-xs font-bold font-mono block ${
                      tx.type === 'debit' ? 'text-black' : 'text-emerald-700'
                    }`}
                  >
                    {tx.type === 'debit' ? '-' : '+'}₹
                    {(tx.withdrawal || tx.deposit || 0).toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">
                    Bal ₹{tx.balance.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xl animate-fade-in flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav activeTabOverride="move-money" />
    </div>
  );
};
