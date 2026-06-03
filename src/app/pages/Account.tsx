import { User, Mail, Briefcase, Calendar, Trash2, Download } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export function Account() {
  const { user } = useAuth();
  const { darkMode } = useTheme();

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`}>Account Settings</h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>Manage your personal information and account preferences</p>
      </div>

      <div className="space-y-4">
        {/* Profile Information */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-foreground'}`}>Profile Information</h3>
              <div className="space-y-4">
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>Full Name</label>
                  <input
                    type="text"
                    defaultValue={user?.name}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>Job Title</label>
                  <input
                    type="text"
                    defaultValue={user?.role}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`}
                  />
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Email Settings */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50'}`}>
              <Mail className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`}>Email Address</h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                Your primary email address for login and notifications
              </p>
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="email"
                  defaultValue={user?.email}
                  className={`flex-1 px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`}
                />
                <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode ? 'bg-emerald-900/40 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                  Verified
                </span>
              </div>
              <button className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'}`}>
                Update Email
              </button>
            </div>
          </div>
        </div>

        {/* Work Information */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-violet-900/30' : 'bg-violet-50'}`}>
              <Briefcase className="w-5 h-5 text-violet-600" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-foreground'}`}>Work Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>Department</label>
                    <input
                      type="text"
                      defaultValue="Research & Analytics"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>Employee ID</label>
                    <input
                      type="text"
                      defaultValue="EMP-12345"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`}
                    />
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                  Update Information
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Account Activity */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-foreground'}`}>Account Activity</h3>
              <div className="space-y-2 text-sm">
                <div className={`flex justify-between py-2 border-b ${darkMode ? 'border-gray-700' : 'border-border'}`}>
                  <span className={darkMode ? 'text-gray-400' : 'text-muted-foreground'}>Account Created</span>
                  <span className={`font-medium ${darkMode ? 'text-white' : ''}`}>January 15, 2024</span>
                </div>
                <div className={`flex justify-between py-2 border-b ${darkMode ? 'border-gray-700' : 'border-border'}`}>
                  <span className={darkMode ? 'text-gray-400' : 'text-muted-foreground'}>Last Login</span>
                  <span className={`font-medium ${darkMode ? 'text-white' : ''}`}>Today at 9:42 AM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className={darkMode ? 'text-gray-400' : 'text-muted-foreground'}>Account Type</span>
                  <span className={`font-medium ${darkMode ? 'text-white' : ''}`}>Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Export */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'}`}>
              <Download className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`}>Export Your Data</h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                Download a copy of all your data and activity from the platform
              </p>
              <button className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'}`}>
                Request Data Export
              </button>
            </div>
          </div>
        </div>

        {/* Delete Account */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-red-900/50' : 'bg-white border-red-200'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-red-900/30' : 'bg-red-50'}`}>
              <Trash2 className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`}>Delete Account</h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <button className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
