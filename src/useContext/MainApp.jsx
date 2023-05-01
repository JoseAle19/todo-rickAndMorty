import { Link,Routes, Route} from "react-router-dom";
import { About,Login,HomePage } from './index' 
import { NavBar } from "../components/NavBar";
import { UserProvider } from "./context/ContextProvider";
export const MainApp = () => {
  return (
    <UserProvider>
      <h1>mainApp</h1>  
      <NavBar/>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<h1>Pagina 404</h1>} />
      </Routes>
    </UserProvider>
  );
};
