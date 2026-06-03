import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Companies } from "./pages/Companies";
import { AddCompany } from "./pages/AddCompany";
import { CompanyDetail } from "./pages/CompanyDetail";
import { Contacts } from "./pages/Contacts";
import { Reports } from "./pages/Reports";
import { Analytics } from "./pages/Analytics";
import { Users } from "./pages/Users";
import { Settings } from "./pages/Settings";
import { Security } from "./pages/Security";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { useAuth } from "./context/AuthContext";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function PublicOnly({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (user) return <Navigate to="/" replace />;
  return <>{children}</>;
}

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicOnly><Login /></PublicOnly>,
  },
  {
    path: "/register",
    element: <PublicOnly><Register /></PublicOnly>,
  },
  {
    path: "/",
    element: <RequireAuth><Layout /></RequireAuth>,
    children: [
      { index: true, Component: Dashboard },
      { path: "companies", Component: Companies },
      { path: "companies/add", Component: AddCompany },
      { path: "companies/:id", Component: CompanyDetail },
      { path: "contacts", Component: Contacts },
      { path: "reports", Component: Reports },
      { path: "analytics", Component: Analytics },
      { path: "users", Component: Users },
      { path: "settings", Component: Settings },
      { path: "security", Component: Security },
      { path: "account", Component: Account },
    ],
  },
]);
