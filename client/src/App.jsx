import AuthProvider from "./hooks/authProvider";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes />
        <ToastContainer autoClose={2000} />
      </AuthProvider>
    </>
  );
};

export default App;
