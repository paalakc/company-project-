import { useState } from "react";
import { Link } from "react-router";
import { Search, Filter, Download, Plus, MoreVertical, Eye, Edit2, Trash2 } from "lucide-react";

const companiesData = [
  {
    id: 1,
    name: "TechCorp Solutions",
    industry: "Technology",
    city: "Mumbai",
    employees: "500-1000",
    status: "Hiring",
    contacts: 5,
    rating: "A",
    gst: "27AABCT1234F1Z5"
  },
  {
    id: 2,
    name: "Global Finance Ltd",
    industry: "Finance",
    city: "Bangalore",
    employees: "1000-5000",
    status: "Active",
    contacts: 8,
    rating: "A+",
    gst: "29AABCT5678G2Z1"
  },
  {
    id: 3,
    name: "HealthCare Innovations",
    industry: "Healthcare",
    city: "Delhi",
    employees: "100-500",
    status: "Prospect",
    contacts: 3,
    rating: "B+",
    gst: "07AABCT9012H3Z7"
  },
  {
    id: 4,
    name: "Manufacturing Pro",
    industry: "Manufacturing",
    city: "Pune",
    employees: "500-1000",
    status: "Active",
    contacts: 6,
    rating: "A",
    gst: "27AABCT3456I4Z3"
  },
  {
    id: 5,
    name: "Retail Giant Inc",
    industry: "Retail",
    city: "Hyderabad",
    employees: "5000+",
    status: "Hiring",
    contacts: 12,
    rating: "A+",
    gst: "36AABCT7890J5Z9"
  },
  {
    id: 6,
    name: "Education Excellence",
    industry: "Education",
    city: "Chennai",
    employees: "100-500",
    status: "Prospect",
    contacts: 2,
    rating: "B",
    gst: "33AABCT2345K6Z4"
  },
  {
    id: 7,
    name: "Construction Leaders",
    industry: "Construction",
    city: "Mumbai",
    employees: "1000-5000",
    status: "Active",
    contacts: 7,
    rating: "A",
    gst: "27AABCT6789L7Z0"
  },
  {
    id: 8,
    name: "Food & Beverage Co",
    industry: "F&B",
    city: "Bangalore",
    employees: "500-1000",
    status: "Hiring",
    contacts: 4,
    rating: "B+",
    gst: "29AABCT0123M8Z6"
  }
];

export function Companies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "all" || company.industry === selectedIndustry;
    const matchesStatus = selectedStatus === "all" || company.status === selectedStatus;
    return matchesSearch && matchesIndustry && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Companies</h1>
          <p className="text-muted-foreground">Manage and track all your corporate prospects</p>
        </div>
        <Link
          to="/companies/add"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
        >
          <Plus className="w-5 h-5" />
          Add Company
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search companies by name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>

          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
          >
            <option value="all">All Industries</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Retail">Retail</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
          >
            <option value="all">All Status</option>
            <option value="Hiring">Hiring</option>
            <option value="Active">Active</option>
            <option value="Prospect">Prospect</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
            More Filters
          </button>

          <button className="flex items-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      {/* Companies Table */}
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Company Name</th>
                <th className="px-6 py-4 text-left font-medium">Industry</th>
                <th className="px-6 py-4 text-left font-medium">City</th>
                <th className="px-6 py-4 text-left font-medium">Employees</th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
                <th className="px-6 py-4 text-left font-medium">Contacts</th>
                <th className="px-6 py-4 text-left font-medium">Rating</th>
                <th className="px-6 py-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredCompanies.map((company) => (
                <tr key={company.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium">{company.name}</p>
                      <p className="text-sm text-muted-foreground">{company.gst}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{company.industry}</td>
                  <td className="px-6 py-4 text-muted-foreground">{company.city}</td>
                  <td className="px-6 py-4 text-muted-foreground">{company.employees}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      company.status === 'Hiring' ? 'bg-green-100 text-green-700' :
                      company.status === 'Active' ? 'bg-blue-100 text-blue-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {company.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{company.contacts}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      company.rating.includes('A+') ? 'bg-purple-100 text-purple-700' :
                      company.rating.includes('A') ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {company.rating}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/companies/${company.id}`}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      </Link>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Edit">
                        <Edit2 className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="More">
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{filteredCompanies.length}</span> of{" "}
            <span className="font-medium">{companiesData.length}</span> companies
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">1</button>
            <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">2</button>
            <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">3</button>
            <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
