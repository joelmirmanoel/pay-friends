import React, { useState } from 'react';
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
    <>
      <GlobalStyles />
      {true ? <Home handleOpenAddPaymentModal={handleOpenAddPaymentModal} /> : <Login setIsLogin={setIsLogin} />}
      <AddPaymentModal isOpen={isAddPaymentModalOpen} onRequestClose={handleCloseAddPaymentModal} />
    </>
  );
}

export default App;
