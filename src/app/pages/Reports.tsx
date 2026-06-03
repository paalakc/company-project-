import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { FileDown, FileText, TrendingUp, Building2, Users, Briefcase } from "lucide-react";

const industryDistribution = [
  { name: "Technology", value: 342, color: "#3b82f6" },
  { name: "Finance", value: 234, color: "#8b5cf6" },
  { name: "Healthcare", value: 198, color: "#10b981" },
  { name: "Manufacturing", value: 167, color: "#f59e0b" },
  { name: "Retail", value: 145, color: "#ef4444" },
  { name: "Other", value: 148, color: "#6b7280" }
];

const hiringTrends = [
  { month: "Jan", hiring: 45, active: 234, prospects: 156 },
  { month: "Feb", hiring: 52, active: 245, prospects: 167 },
  { month: "Mar", hiring: 48, active: 239, prospects: 178 },
  { month: "Apr", hiring: 61, active: 256, prospects: 189 },
  { month: "May", hiring: 73, active: 278, prospects: 145 },
  { month: "Jun", hiring: 89, active: 298, prospects: 134 }
];

const topCities = [
  { city: "Mumbai", companies: 345, contacts: 892 },
  { city: "Bangalore", companies: 298, contacts: 756 },
  { city: "Delhi", companies: 267, contacts: 634 },
  { city: "Pune", companies: 189, contacts: 445 },
  { city: "Hyderabad", companies: 156, contacts: 389 },
  { city: "Chennai", companies: 134, contacts: 312 }
];

const prospectRatings = [
  { rating: "A+", count: 145, color: "#8b5cf6" },
  { rating: "A", count: 234, color: "#3b82f6" },
  { rating: "B+", count: 189, color: "#10b981" },
  { rating: "B", count: 156, color: "#f59e0b" },
  { rating: "C", count: 98, color: "#ef4444" }
];

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Executive Reports</h1>
          <p className="text-muted-foreground">Comprehensive analytics and business intelligence</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors">
            <FileDown className="w-5 h-5" />
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity">
            <FileText className="w-5 h-5" />
            Export Excel
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <Building2 className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-3xl font-bold mb-1">1,234</h3>
          <p className="text-blue-100">Total Companies</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <Users className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-3xl font-bold mb-1">2,567</h3>
          <p className="text-purple-100">HR Contacts</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <Briefcase className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-3xl font-bold mb-1">89</h3>
          <p className="text-green-100">Hiring Now</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <FileText className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-3xl font-bold mb-1">456</h3>
          <p className="text-orange-100">Active Prospects</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Industry Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={industryDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {industryDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Prospect Ratings Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={prospectRatings}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="rating" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                {prospectRatings.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Hiring Trends Chart */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="mb-6">Company Status Trends (6 Months)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={hiringTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="hiring"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: '#10b981', r: 6 }}
              name="Hiring Companies"
            />
            <Line
              type="monotone"
              dataKey="active"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', r: 6 }}
              name="Active Companies"
            />
            <Line
              type="monotone"
              dataKey="prospects"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ fill: '#f59e0b', r: 6 }}
              name="Prospects"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Cities Table */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="mb-6">Top Cities Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topCities} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis dataKey="city" type="category" tick={{ fontSize: 12 }} width={80} />
            <Tooltip />
            <Legend />
            <Bar dataKey="companies" fill="#1e40af" name="Companies" radius={[0, 8, 8, 0]} />
            <Bar dataKey="contacts" fill="#8b5cf6" name="Contacts" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h4 className="mb-4">Conversion Metrics</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Prospect to Active</span>
              <span className="font-semibold text-green-600">67%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Active to Hiring</span>
              <span className="font-semibold text-blue-600">34%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Overall Success Rate</span>
              <span className="font-semibold text-purple-600">23%</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h4 className="mb-4">Contact Metrics</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg Contacts/Company</span>
              <span className="font-semibold">2.08</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Response Rate</span>
              <span className="font-semibold text-green-600">78%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Active Conversations</span>
              <span className="font-semibold">234</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h4 className="mb-4">Growth Metrics</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">New Companies (Month)</span>
              <span className="font-semibold text-blue-600">+45</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">New Contacts (Month)</span>
              <span className="font-semibold text-purple-600">+89</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Month-over-Month</span>
              <span className="font-semibold text-green-600">+12.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
