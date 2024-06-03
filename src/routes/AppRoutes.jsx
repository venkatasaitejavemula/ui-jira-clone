import { Suspense } from "react";
import { Route, Routes } from "react-router";
import JiraBoard from "../JiraBoard";
import NavigationBar from "../components/NavigationBar";
import Reports from "../Reports";
export const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route path="/dashboard" element={<JiraBoard />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
