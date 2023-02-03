import ReactDOM from 'react-dom';
import {App} from "./app";
import ThemeProvider from "./theme/theme-provider";
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
  container);
