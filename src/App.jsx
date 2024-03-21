import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Userlist from "./components/userlist";
import UserInfo from "./components/userinfo";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/userlist" element={<Userlist />}></Route>
          <Route path="/userlist/:id" element={<UserInfo />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
