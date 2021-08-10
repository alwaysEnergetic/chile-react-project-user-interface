import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import * as serviceWorker from './serviceWorker';

const theme = createTheme({
  palette: {
    primary: {
      main: "#e5e1da",
    },
    secondary: {
      main: "#D1CDC5",
    },
    third: {
      main: "#FFF",
    },
    tableBoardColor: {
      main: "#f7f6f5"
    }

  },
});

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
        <App />
     </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

