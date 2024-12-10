import React, { useState } from 'react';
import GlobalStyles from './theme/globalStyles';
import { Login, Home } from './pages';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <>
      <GlobalStyles />
      {isLogin ? <Home /> : <Login setIsLogin={setIsLogin} />}
    </>
  );
}

export default App;
