import { Suspense } from "react";
import { Route, Routes } from "react-router";
import JiraBoard from "../JiraBoard";
export const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes path="/">
          <Route path="/dashboard" element={<JiraBoard />} />
          <Route path="/ticket" element={<p>Ticket</p>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
