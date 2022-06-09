import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const LoginPage = loadable(() => import("./pages/LoginPage"));

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/login"} element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
