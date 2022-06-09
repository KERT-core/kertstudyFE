import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import GlobalStyle from "./lib/styles/globalStyles";
import { ThemeProvider } from "styled-components";

import { theme } from "./lib/styles/theme";

const LoginPage = loadable(() => import("./pages/LoginPage"));
const RegisterPage = loadable(() =>
  import("./pages/RegisterPage")
);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
