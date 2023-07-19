import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import HomePage from "./Pages/HomePage/HomePage";
import Page404 from "./Pages/Page404/Page404";
import Login from "./Pages/Login/Login";
import AdminTemplate from "./template/AdminTemplate";
import LoginAdmin from "./Pages/LoginAdmin/LoginAdmin";
import UserManagerment from "./Pages/UserManagerment/UserManagerment";
import Loading from "./Pages/Loading/Loading";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route index element={<UserManagerment />} />
        </Route>
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
