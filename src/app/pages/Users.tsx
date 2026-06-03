import { useState } from "react";
import { Search, Plus, Shield, Mail, MoreVertical, Edit2, Trash2 } from "lucide-react";

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@corp.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
    companies: 234,
    avatar: "JD"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@corp.com",
    role: "Manager",
    status: "Active",
    lastActive: "5 hours ago",
    companies: 189,
    avatar: "JS"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@corp.com",
    role: "Sales Rep",
    status: "Active",
    lastActive: "1 day ago",
    companies: 145,
    avatar: "MJ"
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.williams@corp.com",
    role: "Sales Rep",
    status: "Active",
    lastActive: "3 hours ago",
    companies: 167,
    avatar: "SW"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@corp.com",
    role: "Analyst",
    status: "Inactive",
    lastActive: "2 weeks ago",
    companies: 78,
    avatar: "DB"
  }
];

export function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  const filteredUsers = usersData.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">User Management</h1>
          <p className="text-muted-foreground">Manage team members and permissions</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity">
          <Plus className="w-5 h-5" />
          Add User
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>

          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
          >
            <option value="all">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Sales Rep">Sales Rep</option>
            <option value="Analyst">Analyst</option>
          </select>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-2 gap-6">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-xl">
                  {user.avatar}
                </div>
                <div>
                  <h3 className="mb-1">{user.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      user.role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                      user.role === 'Manager' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      <Shield className="w-3 h-3 inline mr-1" />
                      {user.role}
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {user.status}
                    </span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Companies Managed</p>
                <p className="font-semibold">{user.companies}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Last Active</p>
                <p className="font-semibold">{user.lastActive}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm">
                <Edit2 className="w-4 h-4 inline mr-2" />
                Edit
              </button>
              <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors text-sm">
                <Trash2 className="w-4 h-4 inline" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Role Permissions */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="mb-6">Role Permissions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Permission</th>
                <th className="px-4 py-3 text-center font-medium">Admin</th>
                <th className="px-4 py-3 text-center font-medium">Manager</th>
                <th className="px-4 py-3 text-center font-medium">Sales Rep</th>
                <th className="px-4 py-3 text-center font-medium">Analyst</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">View Companies</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Add/Edit Companies</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Delete Companies</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">View Reports</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">Manage Users</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">System Settings</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
