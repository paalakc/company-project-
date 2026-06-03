import { useState } from "react";
import { Search, Filter, Download, Plus, Mail, Phone, Linkedin } from "lucide-react";

const contactsData = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "HR Manager",
    company: "TechCorp Solutions",
    email: "priya.sharma@techcorp.com",
    phone: "+91 98765 43210",
    city: "Mumbai",
    industry: "Technology",
    status: "Active"
  },
  {
    id: 2,
    name: "Rahul Verma",
    designation: "Talent Acquisition Lead",
    company: "Global Finance Ltd",
    email: "rahul.verma@globalfinance.com",
    phone: "+91 98765 43211",
    city: "Bangalore",
    industry: "Finance",
    status: "Active"
  },
  {
    id: 3,
    name: "Anjali Patel",
    designation: "HR Director",
    company: "HealthCare Innovations",
    email: "anjali.patel@healthcare.com",
    phone: "+91 98765 43212",
    city: "Delhi",
    industry: "Healthcare",
    status: "Active"
  },
  {
    id: 4,
    name: "Vikram Singh",
    designation: "Recruitment Manager",
    company: "Manufacturing Pro",
    email: "vikram.singh@mfgpro.com",
    phone: "+91 98765 43213",
    city: "Pune",
    industry: "Manufacturing",
    status: "Inactive"
  },
  {
    id: 5,
    name: "Sneha Kapoor",
    designation: "VP Human Resources",
    company: "Retail Giant Inc",
    email: "sneha.kapoor@retailgiant.com",
    phone: "+91 98765 43214",
    city: "Hyderabad",
    industry: "Retail",
    status: "Active"
  }
];

export function Contacts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const filteredContacts = contactsData.filter((contact) => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "all" || contact.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">HR Contacts</h1>
          <p className="text-muted-foreground">Manage all your HR and recruitment contacts</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity">
          <Plus className="w-5 h-5" />
          Add Contact
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search contacts by name or company..."
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

      {/* Contacts Grid */}
      <div className="grid grid-cols-3 gap-6">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                {contact.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                contact.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {contact.status}
              </span>
            </div>

            <h3 className="mb-1">{contact.name}</h3>
            <p className="text-sm text-muted-foreground mb-1">{contact.designation}</p>
            <p className="text-sm font-medium text-primary mb-4">{contact.company}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="truncate">{contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{contact.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <button className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm">
                View Profile
              </button>
              <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
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
  );
}
