import { Shield, Key, Smartphone, Clock, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Security() {
  const { darkMode } = useTheme();

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`}>Security Settings</h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>Manage your account security and authentication preferences</p>
      </div>

      <div className="space-y-4">
        {/* Password Section */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
              <Key className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`}>Password</h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                Last changed 45 days ago. We recommend changing your password every 90 days.
              </p>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50'}`}>
              <Smartphone className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-foreground'}`}>Two-Factor Authentication</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${darkMode ? 'bg-emerald-900/40 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                  Enabled
                </span>
              </div>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                Add an extra layer of security to your account by requiring a verification code in addition to your password.
              </p>
              <button className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'}`}>
                Manage 2FA
              </button>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-violet-900/30' : 'bg-violet-50'}`}>
              <Shield className="w-5 h-5 text-violet-600" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`}>Active Sessions</h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                Manage and monitor devices where you're currently logged in
              </p>

              <div className="space-y-3 mb-4">
                <div className={`p-3 rounded-xl border ${darkMode ? 'bg-[#1a1f2e] border-gray-700' : 'bg-muted/50 border-border'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className={`font-medium text-sm ${darkMode ? 'text-white' : ''}`}>Current Session</span>
                    </div>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>Active now</span>
                  </div>
                  <div className={`flex items-center gap-4 text-xs ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Chrome on macOS</span>
                    </div>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border ${darkMode ? 'border-gray-700' : 'border-border'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium text-sm ${darkMode ? 'text-white' : ''}`}>iPhone 14 Pro</span>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-4 text-xs ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                    <button className="text-xs text-red-600 hover:underline">Revoke</button>
                  </div>
                </div>
              </div>

              <button className="text-sm text-blue-600 hover:underline font-medium">
                View All Sessions
              </button>
            </div>
          </div>
        </div>

        {/* Login History */}
        <div className={`rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-amber-900/30' : 'bg-amber-50'}`}>
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`}>Login History</h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                Review recent login activity on your account
              </p>
              <button className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'}`}>
                View History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
