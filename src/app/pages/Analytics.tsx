import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react";

const performanceData = [
  { week: "Week 1", outreach: 45, responses: 28, meetings: 12, conversions: 5 },
  { week: "Week 2", outreach: 52, responses: 34, meetings: 15, conversions: 7 },
  { week: "Week 3", outreach: 48, responses: 31, meetings: 14, conversions: 6 },
  { week: "Week 4", outreach: 61, responses: 42, meetings: 19, conversions: 9 }
];

const revenueForecast = [
  { month: "Jan", actual: 450, projected: 420, target: 500 },
  { month: "Feb", actual: 520, projected: 490, target: 550 },
  { month: "Mar", actual: 480, projected: 510, target: 550 },
  { month: "Apr", actual: 610, projected: 580, target: 600 },
  { month: "May", actual: 730, projected: 680, target: 700 },
  { month: "Jun", actual: 0, projected: 820, target: 800 }
];

const activityMetrics = [
  { day: "Mon", emails: 45, calls: 23, meetings: 8 },
  { day: "Tue", emails: 52, calls: 28, meetings: 10 },
  { day: "Wed", emails: 48, calls: 25, meetings: 9 },
  { day: "Thu", emails: 61, calls: 31, meetings: 12 },
  { day: "Fri", emails: 73, calls: 35, meetings: 14 },
  { day: "Sat", emails: 12, calls: 5, meetings: 2 },
  { day: "Sun", emails: 8, calls: 3, meetings: 1 }
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2">Analytics</h1>
        <p className="text-muted-foreground">Deep insights into your business performance</p>
      </div>

      {/* KPI Summary */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
              <TrendingUp className="w-4 h-4" />
              +15.3%
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">87.5%</h3>
          <p className="text-sm text-muted-foreground">Engagement Rate</p>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
              <TrendingUp className="w-4 h-4" />
              +8.7%
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">23.4%</h3>
          <p className="text-sm text-muted-foreground">Conversion Rate</p>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
              <TrendingUp className="w-4 h-4" />
              +12.1%
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">₹2.4M</h3>
          <p className="text-sm text-muted-foreground">Pipeline Value</p>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex items-center gap-1 text-sm text-red-600 font-medium">
              <TrendingDown className="w-4 h-4" />
              -3.2%
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-1">4.2 days</h3>
          <p className="text-sm text-muted-foreground">Avg Response Time</p>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="mb-6">Outreach Performance (Last 4 Weeks)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="week" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="outreach" fill="#3b82f6" name="Outreach" radius={[8, 8, 0, 0]} />
            <Bar dataKey="responses" fill="#8b5cf6" name="Responses" radius={[8, 8, 0, 0]} />
            <Bar dataKey="meetings" fill="#10b981" name="Meetings" radius={[8, 8, 0, 0]} />
            <Bar dataKey="conversions" fill="#f59e0b" name="Conversions" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Forecast */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="mb-6">Revenue Forecast vs Actual</h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={revenueForecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#94a3b8"
              fill="#e2e8f0"
              name="Target"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="projected"
              stroke="#8b5cf6"
              fill="#ddd6fe"
              name="Projected"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#1e40af"
              fill="#bfdbfe"
              name="Actual"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Activity Breakdown */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="mb-6">Weekly Activity Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={activityMetrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="emails"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', r: 5 }}
              name="Emails Sent"
            />
            <Line
              type="monotone"
              dataKey="calls"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', r: 5 }}
              name="Calls Made"
            />
            <Line
              type="monotone"
              dataKey="meetings"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: '#10b981', r: 5 }}
              name="Meetings Held"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Response Time Analysis</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">First Response</span>
                <span className="font-semibold">2.3 hours</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Follow-up Response</span>
                <span className="font-semibold">6.7 hours</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Average Overall</span>
                <span className="font-semibold">4.2 days</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Team Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  JD
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">45 conversions</p>
                </div>
              </div>
              <span className="text-green-600 font-semibold">98%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  JS
                </div>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-xs text-muted-foreground">38 conversions</p>
                </div>
              </div>
              <span className="text-green-600 font-semibold">94%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  MJ
                </div>
                <div>
                  <p className="font-medium">Mike Johnson</p>
                  <p className="text-xs text-muted-foreground">32 conversions</p>
                </div>
              </div>
              <span className="text-blue-600 font-semibold">89%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
