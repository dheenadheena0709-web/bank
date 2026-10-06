export interface Transaction {
  id: string;
  date: string;
  narration: string;
  refNo: string;
  withdrawal: number | null; // Debit in Red
  deposit: number | null;    // Credit in Green
  balance: number;
  category: string;
  type: 'debit' | 'credit';
}

export interface PayeeContact {
  id: string;
  initials: string;
  name: string;
  bank: string;
  accNumber: string;
  color: string;
  avatarBg: string;
}

export interface ElectricityBiller {
  id: string;
  name: string;
  state: string;
  code: string;
  iconBg: string;
  dueAmount?: number;
  consumerNo?: string;
  dueDate?: string;
}

// 20 realistic HSBC physical passbook ledger transactions maintaining strict math balance
export const INITIAL_LEDGER_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-20',
    date: '05/10/2026',
    narration: 'UPI/P2P/PAYMENT TO RAJ/HSBC/592019482',
    refNo: 'UPI-9820194',
    withdrawal: 2000.00,
    deposit: null,
    balance: 250999.00,
    category: 'Transfer',
    type: 'debit'
  },
  {
    id: 'tx-19',
    date: '04/10/2026',
    narration: 'SALARY CREDIT/INFOSYS LTD/OCT-2026',
    refNo: 'CMS-8920114',
    withdrawal: null,
    deposit: 125000.00,
    balance: 252999.00,
    category: 'Salary',
    type: 'credit'
  },
  {
    id: 'tx-18',
    date: '03/10/2026',
    narration: 'BBPS/TORRENT POWER ELEC BILL/MUMBAI',
    refNo: 'BPS-4820194',
    withdrawal: 4350.00,
    deposit: null,
    balance: 127999.00,
    category: 'Utilities',
    type: 'debit'
  },
  {
    id: 'tx-17',
    date: '02/10/2026',
    narration: 'POS/RELIANCE DIGITAL/KORAMANGALA BLR',
    refNo: 'POS-2019482',
    withdrawal: 18990.00,
    deposit: null,
    balance: 132349.00,
    category: 'Shopping',
    type: 'debit'
  },
  {
    id: 'tx-16',
    date: '30/09/2026',
    narration: 'INT.PD: SB INTR FOR Q2 2026-27',
    refNo: 'INT-300926',
    withdrawal: null,
    deposit: 1845.00,
    balance: 151339.00,
    category: 'Interest',
    type: 'credit'
  },
  {
    id: 'tx-15',
    date: '28/09/2026',
    narration: 'ACH/SIP DEBIT/HSBC GLOBAL EQUITY FUND',
    refNo: 'ACH-7820194',
    withdrawal: 10000.00,
    deposit: null,
    balance: 149494.00,
    category: 'Investment',
    type: 'debit'
  },
  {
    id: 'tx-14',
    date: '25/09/2026',
    narration: 'IMPS/RET/TRANSFER FROM SNEHA BHATIA',
    refNo: 'IMP-5820193',
    withdrawal: null,
    deposit: 15000.00,
    balance: 159494.00,
    category: 'Transfer',
    type: 'credit'
  },
  {
    id: 'tx-13',
    date: '22/09/2026',
    narration: 'NET/FASTAG RECHARGE/NHAI AUTO DEBIT',
    refNo: 'NFT-9920184',
    withdrawal: 1500.00,
    deposit: null,
    balance: 144494.00,
    category: 'Travel',
    type: 'debit'
  },
  {
    id: 'tx-12',
    date: '19/09/2026',
    narration: 'UPI/SWIGGY BLR/FOOD ORDER 829104',
    refNo: 'UPI-7720194',
    withdrawal: 649.00,
    deposit: null,
    balance: 145994.00,
    category: 'Dining',
    type: 'debit'
  },
  {
    id: 'tx-11',
    date: '17/09/2026',
    narration: 'ATM CASH WDL/HSBC ATM MG ROAD',
    refNo: 'ATM-4820194',
    withdrawal: 5000.00,
    deposit: null,
    balance: 146643.00,
    category: 'Cash',
    type: 'debit'
  },
  {
    id: 'tx-10',
    date: '15/09/2026',
    narration: 'NEFT/RENT PAYMENT/SANSKAR TWR OWNER',
    refNo: 'NFT-6629104',
    withdrawal: 28000.00,
    deposit: null,
    balance: 151643.00,
    category: 'Rent',
    type: 'debit'
  },
  {
    id: 'tx-9',
    date: '12/09/2026',
    narration: 'DIVIDEND/TCS LTD/Q2 DIVIDEND WARRANT',
    refNo: 'DIV-1029481',
    withdrawal: null,
    deposit: 3250.00,
    balance: 179643.00,
    category: 'Dividend',
    type: 'credit'
  },
  {
    id: 'tx-8',
    date: '10/09/2026',
    narration: 'UPI/AIRTEL BROADBAND/AUTO BILL PAY',
    refNo: 'UPI-4491024',
    withdrawal: 1179.00,
    deposit: null,
    balance: 176393.00,
    category: 'Utilities',
    type: 'debit'
  },
  {
    id: 'tx-7',
    date: '08/09/2026',
    narration: 'POS/APOLLO PHARMACY/HEALTH & MEDS',
    refNo: 'POS-9920195',
    withdrawal: 840.00,
    deposit: null,
    balance: 177572.00,
    category: 'Health',
    type: 'debit'
  },
  {
    id: 'tx-6',
    date: '05/09/2026',
    narration: 'INW REMIT/USD WIRE FROM FREELANCE US',
    refNo: 'FX-88201948',
    withdrawal: null,
    deposit: 42000.00,
    balance: 178412.00,
    category: 'Remittance',
    type: 'credit'
  },
  {
    id: 'tx-5',
    date: '04/09/2026',
    narration: 'SALARY CREDIT/INFOSYS LTD/SEP-2026',
    refNo: 'CMS-7720193',
    withdrawal: null,
    deposit: 125000.00,
    balance: 136412.00,
    category: 'Salary',
    type: 'credit'
  },
  {
    id: 'tx-4',
    date: '02/09/2026',
    narration: 'ACH/HDFC ERGO HEALTH INSURANCE EMI',
    refNo: 'ACH-4492019',
    withdrawal: 3200.00,
    deposit: null,
    balance: 11412.00,
    category: 'Insurance',
    type: 'debit'
  },
  {
    id: 'tx-3',
    date: '28/08/2026',
    narration: 'UPI/UBER TRIPS/AIRPORT CAB BLR',
    refNo: 'UPI-2201948',
    withdrawal: 1140.00,
    deposit: null,
    balance: 14612.00,
    category: 'Travel',
    type: 'debit'
  },
  {
    id: 'tx-2',
    date: '24/08/2026',
    narration: 'CHQ DEP/CLEARING CHQ NO 0049182',
    refNo: 'CHQ-0049182',
    withdrawal: null,
    deposit: 10000.00,
    balance: 15752.00,
    category: 'Cheque',
    type: 'credit'
  },
  {
    id: 'tx-1',
    date: '20/08/2026',
    narration: 'B/F OPENING BALANCE AS ON 20-AUG-2026',
    refNo: 'LEDGER-OP',
    withdrawal: null,
    deposit: null,
    balance: 5752.00,
    category: 'Opening',
    type: 'credit'
  }
];

// Grid of 8 circular avatars with initials (HR, CI, MR, RR, HI, B, RV, SB)
export const PEOPLE_CONTACTS: PayeeContact[] = [
  { id: 'c1', initials: 'HR', name: 'Harish Raghavan', bank: 'HSBC Bank', accNumber: 'HSBC-8812-4412-9921', color: '#DB0011', avatarBg: 'bg-slate-100 text-black' },
  { id: 'c2', initials: 'CI', name: 'Chitra Iyer', bank: 'State Bank', accNumber: 'SB-3301-8841-2201', color: '#DB0011', avatarBg: 'bg-slate-100 text-black' },
  { id: 'c3', initials: 'MR', name: 'Muthu Raman', bank: 'HDFC Bank', accNumber: 'HD-9921-0021-3312', color: '#DB0011', avatarBg: 'bg-slate-100 text-black' },
  { id: 'c4', initials: 'RR', name: 'Rajesh Rajan', bank: 'ICICI Bank', accNumber: 'IC-4412-8821-0091', color: '#DB0011', avatarBg: 'bg-slate-100 text-black' },
  { id: 'c5', initials: 'HI', name: 'Hema Ishwarya', bank: 'HSBC Bank', accNumber: 'HSBC-1102-7721-4432', color: '#DB0011', avatarBg: 'bg-slate-100 text-black' },
  { id: 'c6', initials: 'B', name: 'Bala Sundaram', bank: 'Axis Bank', accNumber: 'AX-7721-9921-6651', color: '#DB0011', avatarBg: 'bg-slate-100 text-black' },
  { id: 'c7', initials: 'RV', name: 'Rahul Verma', bank: 'Kotak Bank', accNumber: 'KB-5521-4412-8891', color: '#DB0011', avatarBg: 'bg-slate-100 text-black' },
  { id: 'c8', initials: 'SB', name: 'Sneha Bhatia', bank: 'HSBC Bank', accNumber: 'HSBC-9901-2211-7711', color: '#DB0011', avatarBg: 'bg-slate-100 text-black' },
];

export const ELECTRICITY_BILLERS: ElectricityBiller[] = [
  { id: 'el-1', name: 'Adani Electricity Mumbai Ltd', state: 'Maharashtra', code: 'AEML', iconBg: 'bg-blue-600' },
  { id: 'el-2', name: 'Assam Power Distribution (APDCL)', state: 'Assam', code: 'APDCL', iconBg: 'bg-green-600' },
  { id: 'el-3', name: 'BESCOM - Bengaluru Electricity Supply', state: 'Karnataka', code: 'BESCOM', iconBg: 'bg-orange-600' },
  { id: 'el-4', name: 'CESC Kolkata Electricity Supply', state: 'West Bengal', code: 'CESC', iconBg: 'bg-red-600' },
  { id: 'el-5', name: 'Tata Power - Delhi Distribution Ltd', state: 'Delhi NCR', code: 'TPDDL', iconBg: 'bg-sky-600' },
  { id: 'el-6', name: 'Torrent Power - Surat & Ahmedabad', state: 'Gujarat', code: 'TPL', iconBg: 'bg-teal-600' },
  { id: 'el-7', name: 'TANGEDCO - Tamil Nadu Generation', state: 'Tamil Nadu', code: 'TNEB', iconBg: 'bg-amber-600' },
  { id: 'el-8', name: 'PSPCL - Punjab State Power Corp', state: 'Punjab', code: 'PSPCL', iconBg: 'bg-yellow-700' },
  { id: 'el-9', name: 'UPPCL (Urban) - Uttar Pradesh Power', state: 'Uttar Pradesh', code: 'UPPCL', iconBg: 'bg-blue-700' },
  { id: 'el-10', name: 'DHBVN - Dakshin Haryana Bijli Vitran', state: 'Haryana', code: 'DHBVN', iconBg: 'bg-indigo-600' },
];

export const LINKED_ELECTRICITY_ACCOUNT = {
  accountName: 'Sanskar Tower 1405',
  billerName: 'Torrent Power - Ahmedabad',
  consumerNo: '8392019482',
  dueDate: '12 Oct 2026',
  amount: 15000.00,
  billNumber: 'TP-MUM-2026-98124'
};

export const INTERNATIONAL_PAYEES = [
  { id: 'ip-1', name: 'P**** T*** SMITH', bank: 'Barclays Bank UK', iban: 'GB82 BARC 2004 0149 8812 01', currency: 'GBP', country: 'United Kingdom' },
  { id: 'ip-2', name: 'Alexander Von Keller', bank: 'Deutsche Bank AG', iban: 'DE89 3704 0044 0532 0130 00', currency: 'EUR', country: 'Germany' },
  { id: 'ip-3', name: 'Marcus Sterling LLC', bank: 'JPMorgan Chase US', iban: 'US33 CHAS 0210 0002 1892 44', currency: 'USD', country: 'United States' },
  { id: 'ip-4', name: 'Dubai Global Logistics FZE', bank: 'Emirates NBD', iban: 'AE07 0260 0012 3456 7890 12', currency: 'AED', country: 'United Arab Emirates' },
];

export const EXCHANGE_RATES = [
  { pair: 'USD / INR', rate: '84.12', change: '+0.15%' },
  { pair: 'GBP / INR', rate: '109.85', change: '-0.08%' },
  { pair: 'EUR / INR', rate: '92.30', change: '+0.22%' },
  { pair: 'AED / INR', rate: '22.90', change: '0.00%' },
];
