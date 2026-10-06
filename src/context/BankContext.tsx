import React, { createContext, useContext, useState, ReactNode } from 'react';
import { INITIAL_LEDGER_TRANSACTIONS, Transaction } from '../constants/mockData';

export interface UserAccount {
  accountName: string;
  accountNumber: string;
  fullAccountNumber: string;
  accountType: string;
  balance: number;
  currency: string;
  ifsc: string;
  branch: string;
  upiId: string;
  holderName: string;
}

export interface LastPayment {
  recipient: string;
  amount: number;
  date: string;
  fromAccount: string;
  transactionId: string;
  reference: string;
  type: string;
}

interface BankContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  userAccount: UserAccount;
  transactions: Transaction[];
  lastPayment: LastPayment | null;
  setLastPayment: (payment: LastPayment | null) => void;
  executeTransfer: (params: { recipient: string; amount: number; reference: string; transferType: string }) => LastPayment;
  executeBillPayment: (params: { billerName: string; consumerNo: string; amount: number }) => LastPayment;
  resetAccountData: () => void;
  showBalance: boolean;
  setShowBalance: (val: boolean) => void;
  activeNavTab: string;
  setActiveNavTab: (tab: string) => void;
  deviceFrame: boolean;
  setDeviceFrame: (val: boolean) => void;
}

const DEFAULT_ACCOUNT: UserAccount = {
  accountName: 'SAVINGS ACCOUNT - RES',
  accountNumber: 'HSBC-XXXX-XXXX-1234',
  fullAccountNumber: 'HSBC-4091-8821-1234',
  accountType: 'Savings Regular (Premier)',
  balance: 250999.00,
  currency: 'INR',
  ifsc: 'HSBC0560002',
  branch: 'MG Road Main, Bangalore',
  upiId: 'vignesh.mohan@hsbc',
  holderName: 'Vignesh Mohan'
};

const BankContext = createContext<BankContextType | undefined>(undefined);

export const BankProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [userAccount, setUserAccount] = useState<UserAccount>(DEFAULT_ACCOUNT);
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_LEDGER_TRANSACTIONS);
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [activeNavTab, setActiveNavTab] = useState<string>('home');
  const [deviceFrame, setDeviceFrame] = useState<boolean>(true);

  const [lastPayment, setLastPayment] = useState<LastPayment | null>({
    recipient: 'P**** T*** SMITH',
    amount: 2000.00,
    date: '05 Oct 2026, 09:44 PM',
    fromAccount: 'V*** M*** - HSBC 8888',
    transactionId: '12384920194',
    reference: 'Family Support & Tuition',
    type: 'NEFT'
  });

  const executeTransfer = ({
    recipient,
    amount,
    reference,
    transferType
  }: {
    recipient: string;
    amount: number;
    reference: string;
    transferType: string;
  }): LastPayment => {
    const newBal = userAccount.balance - amount;
    setUserAccount(prev => ({ ...prev, balance: newBal }));

    const txId = '123' + Math.floor(100000 + Math.random() * 900000).toString();
    const now = new Date();
    const dateFormatted = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      date: dateFormatted,
      narration: `${transferType}/${recipient.toUpperCase()}/${reference ? reference.toUpperCase() : 'TRF'}`,
      refNo: `TX-${txId}`,
      withdrawal: amount,
      deposit: null,
      balance: newBal,
      category: 'Transfer',
      type: 'debit'
    };

    setTransactions(prev => [newTx, ...prev]);

    const paymentResult: LastPayment = {
      recipient,
      amount,
      date: `Today, ${dateFormatted}, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      fromAccount: 'V*** M*** - HSBC 1234',
      transactionId: txId,
      reference: reference || 'Online Banking Transfer',
      type: transferType
    };

    setLastPayment(paymentResult);
    return paymentResult;
  };

  const executeBillPayment = ({
    billerName,
    consumerNo,
    amount
  }: {
    billerName: string;
    consumerNo: string;
    amount: number;
  }): LastPayment => {
    const newBal = userAccount.balance - amount;
    setUserAccount(prev => ({ ...prev, balance: newBal }));

    const txId = '123' + Math.floor(100000 + Math.random() * 900000).toString();
    const now = new Date();
    const dateFormatted = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      date: dateFormatted,
      narration: `BBPS/ELEC BILL/${billerName.slice(0, 15).toUpperCase()}/CON-${consumerNo}`,
      refNo: `BPS-${txId}`,
      withdrawal: amount,
      deposit: null,
      balance: newBal,
      category: 'Utilities',
      type: 'debit'
    };

    setTransactions(prev => [newTx, ...prev]);

    const paymentResult: LastPayment = {
      recipient: billerName,
      amount,
      date: `Today, ${dateFormatted}, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      fromAccount: 'V*** M*** - HSBC 1234',
      transactionId: txId,
      reference: `Electricity Bill Payment: Cons# ${consumerNo}`,
      type: 'BBPS'
    };

    setLastPayment(paymentResult);
    return paymentResult;
  };

  const resetAccountData = () => {
    setUserAccount(DEFAULT_ACCOUNT);
    setTransactions(INITIAL_LEDGER_TRANSACTIONS);
  };

  return (
    <BankContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userAccount,
        transactions,
        lastPayment,
        setLastPayment,
        executeTransfer,
        executeBillPayment,
        resetAccountData,
        showBalance,
        setShowBalance,
        activeNavTab,
        setActiveNavTab,
        deviceFrame,
        setDeviceFrame
      }}
    >
      {children}
    </BankContext.Provider>
  );
};

export const useBank = () => {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error('useBank must be used within a BankProvider');
  }
  return context;
};
