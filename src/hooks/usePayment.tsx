import { createContext, useState, ReactNode, useContext } from 'react';

interface IPayment {
  usuario: string;
  data: string;
  valor: string;
  titulo: string;
  isPayment: boolean;
}

interface IPaymentProvider {
  children: ReactNode;
}

interface IPaymentContextType {
  payments: IPayment[];
  createPayment: (payment: IPayment) => void;
  updatePayment: () => void;
  listPayment: () => IPayment[];
  deletePayment: () => void;
}

const PaymentContext = createContext<IPaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: IPaymentProvider) {
  const [payments, setPayments] = useState<IPayment[]>([]);

  function createPayment(payment: IPayment) {
    setPayments(prevPayments => [...prevPayments, payment]);
  }

  function updatePayment() {}

  function listPayment() {
    return payments;
  }

  function deletePayment() {}

  return (
    <PaymentContext.Provider value={{ payments, createPayment, updatePayment, listPayment, deletePayment }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const paymentContext = useContext(PaymentContext);
  return paymentContext;
}
