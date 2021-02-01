import React from 'react';
import './App.css';
import InitialPage from "./InitialPage/InitialPage"
import { createRenderer } from 'fela'
import { RendererProvider, ThemeProvider } from 'react-fela'
 import {theme} from './theme'

function App() {
  const renderer = createRenderer()
  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>
        <InitialPage/>
      </ThemeProvider>
    </RendererProvider>

  );
}

export default App;
