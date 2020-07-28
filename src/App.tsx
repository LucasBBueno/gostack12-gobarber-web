import React from 'react';

import SignIn from './pages/SignIn/index';
// import SignUp from './pages/SignUp/index';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Lucas' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
