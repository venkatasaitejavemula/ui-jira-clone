import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router";

function App() {
  let location = window.location.href;
  const navigate = useNavigate();

  useEffect(() => {
    let routeExists = location.split("/")?.[1];
    if (!routeExists) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
