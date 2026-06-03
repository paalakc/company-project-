import { useParams, useNavigate } from "react-router";
import {
  Building2,
  MapPin,
  Users,
  Phone,
  Mail,
  Globe,
  FileText,
  Calendar,
  Edit,
  Trash2,
  ArrowLeft,
  Briefcase,
  Star
} from "lucide-react";

export function CompanyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const company = {
    id: 1,
    name: "TechCorp Solutions",
    industry: "Technology",
    city: "Mumbai",
    state: "Maharashtra",
    address: "123 Tech Park, Andheri East, Mumbai",
    pincode: "400069",
    employees: "500-1000",
    status: "Hiring",
    rating: "A",
    gst: "27AABCT1234F1Z5",
    cin: "U12345MH2020PTC123456",
    phone: "+91 22 1234 5678",
    email: "contact@techcorp.com",
    website: "https://www.techcorp.com",
    founded: "2015",
    revenue: "₹50-100 Cr"
  };

  const hrContacts = [
    {
      name: "Priya Sharma",
      designation: "HR Manager",
      email: "priya.sharma@techcorp.com",
      phone: "+91 98765 43210",
      linkedIn: "https://linkedin.com/in/priyasharma"
    },
    {
      name: "Rahul Verma",
      designation: "Talent Acquisition Lead",
      email: "rahul.verma@techcorp.com",
      phone: "+91 98765 43211",
      linkedIn: "https://linkedin.com/in/rahulverma"
    }
  ];

  const timeline = [
    { date: "2024-05-28", action: "Status changed to Hiring", user: "John Doe" },
    { date: "2024-05-25", action: "Added new HR contact", user: "Jane Smith" },
    { date: "2024-05-20", action: "Meeting scheduled", user: "John Doe" },
    { date: "2024-05-15", action: "Company added to system", user: "Admin" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/companies")}
            className="p-2 hover:bg-muted rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="mb-1">{company.name}</h1>
            <p className="text-muted-foreground">Complete company profile and activity</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors">
            <Edit className="w-4 h-4" />
            Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground hover:opacity-90 rounded-xl transition-opacity">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Company Profile */}
        <div className="col-span-2 space-y-6">
          {/* Company Overview */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="mb-1">{company.name}</h2>
                  <p className="text-muted-foreground">{company.industry}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-4 py-2 rounded-xl text-sm font-medium bg-green-100 text-green-700`}>
                  {company.status}
                </span>
                <span className={`px-4 py-2 rounded-xl text-sm font-medium bg-purple-100 text-purple-700`}>
                  Rating: {company.rating}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="font-medium">{company.address}</p>
                  <p className="text-sm text-muted-foreground">{company.city}, {company.state} - {company.pincode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Employee Strength</p>
                  <p className="font-medium">{company.employees}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium">{company.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">{company.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Website</p>
                  <a href={company.website} className="font-medium text-primary hover:underline">
                    {company.website}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Annual Revenue</p>
                  <p className="font-medium">{company.revenue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Details */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="mb-6">Legal & Compliance Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">GST Number</p>
                <p className="font-medium font-mono bg-muted px-4 py-2 rounded-lg">{company.gst}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">CIN Number</p>
                <p className="font-medium font-mono bg-muted px-4 py-2 rounded-lg">{company.cin}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Founded Year</p>
                <p className="font-medium">{company.founded}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Company Type</p>
                <p className="font-medium">Private Limited</p>
              </div>
            </div>
          </div>

          {/* HR Contacts */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3>HR Contacts</h3>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm">
                Add Contact
              </button>
            </div>
            <div className="space-y-4">
              {hrContacts.map((contact, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium mb-1">{contact.name}</p>
                        <p className="text-sm text-muted-foreground mb-2">{contact.designation}</p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span>{contact.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span>{contact.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Edit className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="mb-4">Notes & Comments</h3>
            <textarea
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none"
              rows={4}
              placeholder="Add notes about this company..."
              defaultValue="High potential client. Currently looking to expand their tech team. Follow up scheduled for next week."
            />
            <div className="flex items-center justify-end gap-3 mt-4">
              <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors text-sm">
                Cancel
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm">
                Save Note
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Activity Timeline */}
        <div className="space-y-6">
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="mb-6">Activity Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-6">
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-border" />
                  )}
                  <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-2 border-card" />
                  <div>
                    <p className="font-medium text-sm mb-1">{item.action}</p>
                    <p className="text-xs text-muted-foreground mb-1">by {item.user}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl p-6 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">Quick Stats</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Interactions</span>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Last Contact</span>
                <span className="font-semibold">2 days ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Next Follow-up</span>
                <span className="font-semibold">Jun 5, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
