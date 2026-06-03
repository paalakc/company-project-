import { Save, Bell, Lock, Globe } from "lucide-react";

export function Settings() {
  return (
    <div className="max-w-5xl space-y-6">
      <div>
        <h1 className="mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage application preferences and system settings. Profile settings are available via your avatar in the top-right corner.</p>
      </div>

      {/* Security Settings */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Lock className="w-5 h-5 text-primary" />
          </div>
          <h3>Security Settings</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="currentPassword" className="block mb-2">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              placeholder="Enter current password"
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="newPassword" className="block mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter new password"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm new password"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
            <div>
              <p className="font-medium mb-1">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Bell className="w-5 h-5 text-primary" />
          </div>
          <h3>Notification Preferences</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
            <div>
              <p className="font-medium mb-1">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates about companies and contacts</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
            <div>
              <p className="font-medium mb-1">Weekly Reports</p>
              <p className="text-sm text-muted-foreground">Get weekly summary of your activities</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
            <div>
              <p className="font-medium mb-1">Browser Notifications</p>
              <p className="text-sm text-muted-foreground">Get notified in your browser</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
            <div>
              <p className="font-medium mb-1">Mobile Push Notifications</p>
              <p className="text-sm text-muted-foreground">Receive push notifications on mobile</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* System Preferences */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <h3>System Preferences</h3>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="language" className="block mb-2">
              Language
            </label>
            <select
              id="language"
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
            </select>
          </div>

          <div>
            <label htmlFor="timezone" className="block mb-2">
              Timezone
            </label>
            <select
              id="timezone"
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            >
              <option value="ist">India Standard Time (IST)</option>
              <option value="pst">Pacific Standard Time (PST)</option>
              <option value="est">Eastern Standard Time (EST)</option>
            </select>
          </div>

          <div>
            <label htmlFor="dateFormat" className="block mb-2">
              Date Format
            </label>
            <select
              id="dateFormat"
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            >
              <option value="dd/mm/yyyy">DD/MM/YYYY</option>
              <option value="mm/dd/yyyy">MM/DD/YYYY</option>
              <option value="yyyy-mm-dd">YYYY-MM-DD</option>
            </select>
          </div>

          <div>
            <label htmlFor="currency" className="block mb-2">
              Currency
            </label>
            <select
              id="currency"
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            >
              <option value="inr">INR (₹)</option>
              <option value="usd">USD ($)</option>
              <option value="eur">EUR (€)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
        <button className="px-8 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}
