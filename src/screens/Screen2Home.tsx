import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo';
import { BottomNav } from '../components/BottomNav';
import { useBank } from '../context/BankContext';
import {
  Bell,
  Eye,
  EyeOff,
  ChevronRight,
  Send,
  Receipt,
  BookOpen,
  QrCode,
  CreditCard,
  Building2,
  SlidersHorizontal,
  Landmark,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';

export const Screen2Home: React.FC = () => {
  const navigate = useNavigate();
  const { userAccount, showBalance, setShowBalance } = useBank();
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleCopyAcc = () => {
    navigator.clipboard?.writeText(userAccount.fullAccountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F5F5F5] min-h-[740px]">
      {/* Top Header Background: #DB0011 */}
      <header className="bg-[#DB0011] text-white px-4 pt-3 pb-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-white rounded-lg shadow-xs">
              <BrandLogo size="sm" variant="red" />
            </div>
            <div>
              <span className="text-[10px] text-white/80 font-medium block leading-none">
                Good day
              </span>
              <h1 className="text-sm font-bold text-white tracking-tight leading-tight">
                {userAccount.holderName}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/profile')}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-xs font-bold text-white cursor-pointer"
              title="Profile"
            >
              VM
            </button>
            <button
              onClick={() => showToast('No new notifications')}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white relative cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full ring-1 ring-[#DB0011]" />
            </button>
          </div>
        </div>

        {/* ACCOUNT CARD: SAVINGS ACCOUNT - RES / DB-XXXX-XXXX-1234 with Balance 2,50,999 INR */}
        {/* Style: White #FFFFFF card with crisp shadow as HSBC reference */}
        <div className="bg-[#FFFFFF] text-black rounded-xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-wider text-slate-700 uppercase block">
                {userAccount.accountName}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono text-xs text-slate-500 font-semibold">
                  {userAccount.accountNumber}
                </span>
                <button
                  onClick={handleCopyAcc}
                  className="text-slate-400 hover:text-black p-0.5 cursor-pointer"
                  title="Copy account number"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowBalance(!showBalance)}
              className="p-1 rounded-lg text-slate-400 hover:text-black hover:bg-slate-100 transition cursor-pointer"
              title={showBalance ? 'Hide balance' : 'Show balance'}
            >
              {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Balance 2,50,999 INR */}
          <div className="mt-3">
            <span className="text-[10px] text-slate-500 tracking-wider uppercase block font-semibold">
              Available Balance
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-black tracking-tight font-mono text-black">
                {showBalance
                  ? `${userAccount.balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  : '••••••••••'}
              </span>
              <span className="text-xs font-bold text-slate-600">
                {userAccount.currency}
              </span>
            </div>
          </div>

          {/* Quick Action Grid */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-4 gap-2 text-center">
            <button
              onClick={() => navigate('/transfer')}
              className="flex flex-col items-center gap-1 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#DB0011] group-hover:text-white flex items-center justify-center text-slate-700 transition">
                <Send className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-700">Transfer</span>
            </button>

            <button
              onClick={() => navigate('/people-and-bills')}
              className="flex flex-col items-center gap-1 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#DB0011] group-hover:text-white flex items-center justify-center text-slate-700 transition">
                <Receipt className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-700">Pay Bills</span>
            </button>

            <button
              onClick={() => navigate('/mpassbook')}
              className="flex flex-col items-center gap-1 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#DB0011] text-white flex items-center justify-center shadow-xs transition">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#DB0011]">mPassbook</span>
            </button>

            <button
              onClick={() => showToast('Scan QR camera ready')}
              className="flex flex-col items-center gap-1 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#DB0011] group-hover:text-white flex items-center justify-center text-slate-700 transition">
                <QrCode className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-700">Scan QR</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-4 py-3 space-y-3">
        {/* Physical mPassbook Shortcut Banner */}
        <div
          onClick={() => navigate('/mpassbook')}
          className="bg-[#FFFFFF] border-l-4 border-[#DB0011] rounded-xl p-3 flex items-center justify-between cursor-pointer shadow-sm hover:shadow-md transition group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-50 text-[#DB0011] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-xs font-bold text-black">mPassbook Real Ledger</h2>
              <span className="px-1.5 py-0.2 text-[9px] font-bold bg-[#DB0011] text-white rounded">
                LEDGER
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#DB0011] group-hover:translate-x-0.5 transition" />
        </div>

        {/* MENU LIST: Bank Accounts >, Borrowing >, Cards >, Services > */}
        <div className="bg-[#FFFFFF] rounded-xl shadow-sm border border-slate-200/80 overflow-hidden divide-y divide-slate-100">
          {/* 1. Bank Accounts > */}
          <button
            onClick={() => navigate('/mpassbook')}
            className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DB0011] flex items-center justify-center">
                <Landmark className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-black group-hover:text-[#DB0011]">
                  Bank Accounts
                </h3>
                <p className="text-xs text-slate-500">Savings Regular</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold font-mono text-black">
                ₹2,50,999.00
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
            </div>
          </button>

          {/* 2. Borrowing > */}
          <button
            onClick={() => showToast('Borrowing: Pre-approved loan offers available')}
            className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-black group-hover:text-[#DB0011]">
                  Borrowing
                </h3>
                <p className="text-xs text-slate-500">Loans & Mortgages</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                ₹10L Pre-approved
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
            </div>
          </button>

          {/* 3. Cards > */}
          <button
            onClick={() => showToast('Cards: 1 Debit Card Active')}
            className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                <CreditCard className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-black group-hover:text-[#DB0011]">
                  Cards
                </h3>
                <p className="text-xs text-slate-500">Debit and Credit cards</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-500">1 Card</span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
            </div>
          </button>

          {/* 4. Services > */}
          <button
            onClick={() => navigate('/profile')}
            className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-black group-hover:text-[#DB0011]">
                  Services
                </h3>
                <p className="text-xs text-slate-500">e-Statements, Cheque book, Profile & KYC</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
          </button>
        </div>

        {/* International Transfer card */}
        <div className="bg-[#FFFFFF] rounded-xl border border-slate-200/80 p-3.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DB0011] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-black">International Payments</h4>
              <p className="text-[11px] text-slate-500">Fast outward remittance</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/pay-and-transfer')}
            className="text-xs font-bold text-white bg-[#DB0011] hover:bg-[#b5000e] px-3 py-1.5 rounded-lg transition cursor-pointer"
          >
            Transfer
          </button>
        </div>
      </main>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl animate-fade-in flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Bottom Navigation (Home, Investment, Move Money, Support) with #DB0011 active */}
      <BottomNav activeTabOverride="home" />
    </div>
  );
};
