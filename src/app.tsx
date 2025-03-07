// import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
// import { PageLoader } from "./components/page-loader";
// import { ProtectedRoute } from "./components/protected-route";
import { AdminPage } from "./pages/admin-page";
import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";
import { PaymentPage } from "./pages/Payment";
import { CompletionPage } from "./pages/Completion";

export const App: React.FC = () => {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return (
  //     <div className="page-layout">
  //       <PageLoader />
  //     </div>
  //   );
  // }

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/public" element={<PublicPage />} />
      <Route path="/protected" element={<ProtectedPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="/Payment" element={<PaymentPage />} />
      <Route path="/Completion" element={<CompletionPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
