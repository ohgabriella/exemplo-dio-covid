import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Main from './containers/Main';

function App() {
  return (
    <div className="App">  
    <StylesProvider injectFirst>
      <CssBaseline/>
      <Main />
    </StylesProvider>    
    </div>
  );
}

export default App;