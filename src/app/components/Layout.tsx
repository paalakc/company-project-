import { useState, useRef, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  Users,
  FileText,
  BarChart3,
  UserCog,
  Settings as SettingsIcon,
  Bell,
  ChevronDown,
  TrendingUp,
  LogOut,
  User,
  Shield,
  X,
  CheckCircle2,
  AlertCircle,
  Info,
  Moon,
  Sun,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import CIPAssistant from "./CIPAssistant";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Report generated",
    body: "Q2 Market Analysis is ready to download.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    type: "alert",
    title: "New company added",
    body: "Apex Technologies was added by Sarah Park.",
    time: "18 min ago",
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "Analytics sync complete",
    body: "All data has been refreshed with the latest metrics.",
    time: "1 hr ago",
    read: true,
  },
  {
    id: 4,
    type: "alert",
    title: "User invitation sent",
    body: "Michael Chen was invited to join the platform.",
    time: "3 hr ago",
    read: true,
  },
];

const notifIcons: Record<string, React.ReactNode> = {
  success: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
  alert: <AlertCircle className="w-4 h-4 text-amber-500" />,
  info: <Info className="w-4 h-4 text-blue-500" />,
};

export function Layout() {
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifList, setNotifList] = useState(notifications);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const unread = notifList.filter((n) => !n.read).length;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const markAllRead = () => setNotifList((n) => n.map((x) => ({ ...x, read: true })));
  const dismiss = (id: number) => setNotifList((n) => n.filter((x) => x.id !== id));

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/companies", label: "Companies", icon: Building2 },
    { path: "/companies/add", label: "Add Company", icon: PlusCircle },
    { path: "/contacts", label: "Contacts", icon: Users },
    { path: "/reports", label: "Reports", icon: FileText },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/users", label: "Users", icon: UserCog },
  ];

  return (
    <div className={`flex h-screen ${darkMode ? "dark bg-[#0a0e1a]" : "bg-background"}`}>
      {/* Sidebar */}
      <aside
        className={`w-64 flex flex-col ${darkMode ? "bg-[#0f1421]" : "bg-sidebar"}`}
        style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Logo */}
        <div className="p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight">CIP</div>
              <div className="text-[#93b4ff] text-[10px] leading-tight">Corporate Intelligence</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-white"
                }`
              }
            >
              <item.icon className="w-4.5 h-4.5 shrink-0" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header
          className={`h-16 border-b flex items-center justify-end px-6 shadow-sm ${
            darkMode ? "bg-[#0f1421] border-gray-800" : "bg-white border-border"
          }`}
        >
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-colors ${darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted"}`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </button>

            {/* Notification Bell */}
            <div ref={notifRef} className="relative">
              <button
                onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
                className={`relative p-2.5 rounded-xl transition-colors ${darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted"}`}
              >
                <Bell className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-muted-foreground"}`} />
                {unread > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[9px] font-bold">
                    {unread}
                  </span>
                )}
              </button>

              {notifOpen && (
                <div
                  className={`absolute right-0 top-12 w-96 rounded-2xl shadow-2xl border z-50 overflow-hidden ${
                    darkMode ? "bg-[#0f1421] border-gray-700" : "bg-white border-border"
                  }`}
                >
                  <div className={`flex items-center justify-between px-5 py-4 border-b ${darkMode ? "border-gray-700" : "border-border"}`}>
                    <div>
                      <h4 className={darkMode ? "text-white" : "text-[#0f172a]"}>Notifications</h4>
                      {unread > 0 && (
                        <p className={`text-xs ${darkMode ? "text-blue-400" : "text-[#4b5e9e]"}`}>{unread} unread</p>
                      )}
                    </div>
                    {unread > 0 && (
                      <button onClick={markAllRead} className="text-xs text-[#1e40af] hover:underline font-medium">
                        Mark all read
                      </button>
                    )}
                  </div>

                  <div className={`max-h-80 overflow-y-auto divide-y ${darkMode ? "divide-gray-700" : "divide-border"}`}>
                    {notifList.length === 0 ? (
                      <div className={`p-8 text-center text-sm ${darkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                        No notifications
                      </div>
                    ) : (
                      notifList.map((n) => (
                        <div
                          key={n.id}
                          className={`flex gap-3 px-5 py-4 group transition-colors ${
                            !n.read
                              ? darkMode ? "bg-blue-900/20" : "bg-blue-50/50"
                              : darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted/40"
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">{notifIcons[n.type]}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <p className={`text-sm font-medium truncate ${darkMode ? "text-white" : "text-[#0f172a]"}`}>
                                {n.title}
                              </p>
                              <button
                                onClick={() => dismiss(n.id)}
                                className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                                  darkMode ? "text-gray-400 hover:text-white" : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <p className={`text-xs mt-0.5 leading-relaxed ${darkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                              {n.body}
                            </p>
                            <p className={`text-[10px] mt-1 ${darkMode ? "text-blue-400" : "text-[#4b5e9e]"}`}>{n.time}</p>
                          </div>
                          {!n.read && <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div ref={profileRef} className="relative">
              <button
                onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-colors ${
                  darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">
                  {user?.initials ?? "?"}
                </div>
                <div className="hidden sm:block text-left">
                  <div className={`text-sm font-medium leading-tight ${darkMode ? "text-white" : "text-[#0f172a]"}`}>
                    {user?.name ?? "Guest"}
                  </div>
                  <div className={`text-[10px] leading-tight ${darkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                    {user?.role ?? ""}
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${profileOpen ? "rotate-180" : ""} ${
                    darkMode ? "text-gray-400" : "text-muted-foreground"
                  }`}
                />
              </button>

              {profileOpen && (
                <div
                  className={`absolute right-0 top-12 w-72 rounded-2xl shadow-2xl border z-50 overflow-hidden ${
                    darkMode ? "bg-[#0f1421] border-gray-700" : "bg-white border-border"
                  }`}
                >
                  {/* Profile Header */}
                  <div className="px-5 py-4 bg-gradient-to-br from-[#0f2463] to-[#1e40af]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white font-bold">
                        {user?.initials ?? "?"}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{user?.name}</p>
                        <p className="text-blue-200 text-xs">{user?.email}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-blue-500/40 text-blue-100 text-[10px] font-medium">
                          {user?.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className={`px-5 py-4 space-y-2 border-b ${darkMode ? "border-gray-700" : "border-border"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-gray-400" : "text-muted-foreground"}`}>
                      Profile Information
                    </p>
                    <div className="space-y-1.5">
                      <div>
                        <p className={`text-[10px] ${darkMode ? "text-gray-400" : "text-muted-foreground"}`}>Full Name</p>
                        <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#0f172a]"}`}>{user?.name}</p>
                      </div>
                      <div>
                        <p className={`text-[10px] ${darkMode ? "text-gray-400" : "text-muted-foreground"}`}>Email</p>
                        <p className={`text-sm ${darkMode ? "text-white" : "text-[#0f172a]"}`}>{user?.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    <button
                      onClick={() => { navigate("/settings"); setProfileOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ${
                        darkMode ? "hover:bg-[#1a1f2e] text-white" : "hover:bg-muted text-[#0f172a]"
                      }`}
                    >
                      <SettingsIcon className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-muted-foreground"}`} />
                      App Settings
                    </button>
                    <button
                      onClick={() => { navigate("/security"); setProfileOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ${
                        darkMode ? "hover:bg-[#1a1f2e] text-white" : "hover:bg-muted text-[#0f172a]"
                      }`}
                    >
                      <Shield className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-muted-foreground"}`} />
                      Security
                    </button>
                    <button
                      onClick={() => { navigate("/account"); setProfileOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ${
                        darkMode ? "hover:bg-[#1a1f2e] text-white" : "hover:bg-muted text-[#0f172a]"
                      }`}
                    >
                      <User className={`w-4 h-4 ${darkMode ? "text-gray-400" : "text-muted-foreground"}`} />
                      Account
                    </button>
                    <div className={`my-1 border-t ${darkMode ? "border-gray-700" : "border-border"}`} />
                    <button
                      onClick={handleLogout}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm text-red-600 ${
                        darkMode ? "hover:bg-red-900/20" : "hover:bg-red-50"
                      }`}
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className={`flex-1 overflow-auto p-6 ${darkMode ? "bg-[#0a0e1a]" : ""}`}>
          <Outlet />
        </main>
      </div>

      {/* CIP Chatbot Assistant */}
      <CIPAssistant darkMode={darkMode} />
    </div>
  );
}