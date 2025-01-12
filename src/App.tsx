import React, { useState } from 'react';
import { PaymentProvider } from './hooks/usePayment';
import GlobalStyles from './theme/globalStyles';
import { Login, Home } from './pages';
import { AddPaymentModal } from './components';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isAddPaymentModalOpen, setIsAddPaymentModalOpen] = useState(false);

  function handleOpenAddPaymentModal() {
    setIsAddPaymentModalOpen(true);
  }
  function handleCloseAddPaymentModal() {
    setIsAddPaymentModalOpen(false);
  }
  return (
    <PaymentProvider>
      <GlobalStyles />
      {isLogin ? <Home handleOpenAddPaymentModal={handleOpenAddPaymentModal} /> : <Login setIsLogin={setIsLogin} />}
      <AddPaymentModal isOpen={isAddPaymentModalOpen} onRequestClose={handleCloseAddPaymentModal} />
    </PaymentProvider>
  );
}

export default App;
