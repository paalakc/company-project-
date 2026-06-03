import {
  Building2,
  TrendingUp,
  Briefcase,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical
} from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const kpiData = [
  {
    title: "Total Companies",
    value: "1,234",
    change: "+12.5%",
    trend: "up",
    icon: Building2,
    color: "bg-blue-500"
  },
  {
    title: "Active Prospects",
    value: "456",
    change: "+8.2%",
    trend: "up",
    icon: TrendingUp,
    color: "bg-green-500"
  },
  {
    title: "Hiring Companies",
    value: "89",
    change: "+23.1%",
    trend: "up",
    icon: Briefcase,
    color: "bg-purple-500"
  },
  {
    title: "Total HR Contacts",
    value: "2,567",
    change: "-3.2%",
    trend: "down",
    icon: Users,
    color: "bg-orange-500"
  }
];

const industryData = [
  { name: "Technology", value: 342, color: "#3b82f6" },
  { name: "Finance", value: 234, color: "#8b5cf6" },
  { name: "Healthcare", value: 198, color: "#10b981" },
  { name: "Manufacturing", value: 167, color: "#f59e0b" },
  { name: "Retail", value: 145, color: "#ef4444" },
  { name: "Other", value: 148, color: "#6b7280" }
];

const cityData = [
  { city: "Mumbai", companies: 345 },
  { city: "Bangalore", companies: 298 },
  { city: "Delhi", companies: 267 },
  { city: "Pune", companies: 189 },
  { city: "Hyderabad", companies: 156 },
  { city: "Chennai", companies: 134 }
];

const hiringTrendData = [
  { month: "Jan", companies: 45 },
  { month: "Feb", companies: 52 },
  { month: "Mar", companies: 48 },
  { month: "Apr", companies: 61 },
  { month: "May", companies: 73 },
  { month: "Jun", companies: 89 }
];

const recentActivity = [
  { company: "TechCorp Solutions", action: "Added to prospects", time: "2 hours ago", status: "new" },
  { company: "Global Finance Ltd", action: "Contact updated", time: "5 hours ago", status: "updated" },
  { company: "HealthCare Innovations", action: "Started hiring", time: "1 day ago", status: "hiring" },
  { company: "Manufacturing Pro", action: "Meeting scheduled", time: "1 day ago", status: "meeting" },
  { company: "Retail Giant Inc", action: "Proposal sent", time: "2 days ago", status: "proposal" }
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        {kpiData.map((kpi) => (
          <div key={kpi.title} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`${kpi.color} w-12 h-12 rounded-xl flex items-center justify-center bg-opacity-10`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color.replace('bg-', 'text-')}`} />
              </div>
              {kpi.trend === "up" ? (
                <span className="flex items-center gap-1 text-sm text-green-600 font-medium">
                  <ArrowUpRight className="w-4 h-4" />
                  {kpi.change}
                </span>
              ) : (
                <span className="flex items-center gap-1 text-sm text-red-600 font-medium">
                  <ArrowDownRight className="w-4 h-4" />
                  {kpi.change}
                </span>
              )}
            </div>
            <h3 className="text-3xl font-bold mb-1">{kpi.value}</h3>
            <p className="text-sm text-muted-foreground">{kpi.title}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Industry Distribution */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Companies by Industry</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={industryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {industryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Cities Distribution */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Companies by City</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={cityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="city" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="companies" fill="#1e40af" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Hiring Trend */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="mb-6">Hiring Activity Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={hiringTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="companies"
              stroke="#1e40af"
              strokeWidth={3}
              dot={{ fill: '#1e40af', r: 6 }}
              name="Hiring Companies"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="col-span-2 bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                <div className="flex-1">
                  <p className="font-medium">{activity.company}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    activity.status === 'new' ? 'bg-blue-100 text-blue-700' :
                    activity.status === 'hiring' ? 'bg-green-100 text-green-700' :
                    activity.status === 'updated' ? 'bg-purple-100 text-purple-700' :
                    activity.status === 'meeting' ? 'bg-orange-100 text-orange-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity">
              Add New Company
            </button>
            <button className="w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors">
              Import Contacts
            </button>
            <button className="w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors">
              Generate Report
            </button>
            <button className="w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors">
              Export Data
            </button>
          </div>

          <div className="mt-6 p-4 bg-accent rounded-xl">
            <p className="text-sm font-medium text-accent-foreground mb-1">Pro Tip</p>
            <p className="text-xs text-muted-foreground">
              Use filters in the Companies page to quickly find hiring companies in your target industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
