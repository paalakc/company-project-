import { useState } from "react";
import { useNavigate } from "react-router";
import { Save, X, Building2 } from "lucide-react";

export function AddCompany() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    city: "",
    address: "",
    pincode: "",
    state: "",
    gst: "",
    cin: "",
    website: "",
    employees: "",
    phone: "",
    email: "",
    hrName: "",
    hrEmail: "",
    hrPhone: "",
    hrLinkedIn: "",
    rating: "B",
    status: "Prospect",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/companies");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="mb-2">Add New Company</h1>
          <p className="text-muted-foreground">Fill in the company details and contact information</p>
        </div>
        <button
          onClick={() => navigate("/companies")}
          className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors"
        >
          <X className="w-5 h-5" />
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Information */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h3>Company Information</h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block mb-2">
                Company Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block mb-2">
                Industry <span className="text-destructive">*</span>
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
              >
                <option value="">Select industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Education">Education</option>
                <option value="Construction">Construction</option>
                <option value="F&B">Food & Beverage</option>
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block mb-2">
                City <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label htmlFor="state" className="block mb-2">
                State <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Enter state"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="address" className="block mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Enter full address"
              />
            </div>

            <div>
              <label htmlFor="pincode" className="block mb-2">
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Enter pincode"
              />
            </div>

            <div>
              <label htmlFor="employees" className="block mb-2">
                Employee Strength
              </label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
              >
                <option value="">Select range</option>
                <option value="1-50">1-50</option>
                <option value="51-100">51-100</option>
                <option value="101-500">101-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1001-5000">1001-5000</option>
                <option value="5000+">5000+</option>
              </select>
            </div>
          </div>
        </div>

        {/* GST & CIN Details */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">GST & CIN Details</h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="gst" className="block mb-2">
                GST Number
              </label>
              <input
                type="text"
                id="gst"
                name="gst"
                value={formData.gst}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="27AABCT1234F1Z5"
              />
            </div>

            <div>
              <label htmlFor="cin" className="block mb-2">
                CIN Number
              </label>
              <input
                type="text"
                id="cin"
                name="cin"
                value={formData.cin}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="U12345MH2020PTC123456"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Contact Information</h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="contact@company.com"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="website" className="block mb-2">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="https://www.company.com"
              />
            </div>
          </div>
        </div>

        {/* HR Details */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">HR Contact Details</h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="hrName" className="block mb-2">
                HR Name
              </label>
              <input
                type="text"
                id="hrName"
                name="hrName"
                value={formData.hrName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Enter HR contact name"
              />
            </div>

            <div>
              <label htmlFor="hrEmail" className="block mb-2">
                HR Email
              </label>
              <input
                type="email"
                id="hrEmail"
                name="hrEmail"
                value={formData.hrEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="hr@company.com"
              />
            </div>

            <div>
              <label htmlFor="hrPhone" className="block mb-2">
                HR Phone
              </label>
              <input
                type="tel"
                id="hrPhone"
                name="hrPhone"
                value={formData.hrPhone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="hrLinkedIn" className="block mb-2">
                HR LinkedIn
              </label>
              <input
                type="url"
                id="hrLinkedIn"
                name="hrLinkedIn"
                value={formData.hrLinkedIn}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="https://linkedin.com/in/..."
              />
            </div>
          </div>
        </div>

        {/* Prospect Rating & Status */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h3 className="mb-6">Prospect Information</h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="rating" className="block mb-2">
                Prospect Rating
              </label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
              >
                <option value="A+">A+ (Top Priority)</option>
                <option value="A">A (High Priority)</option>
                <option value="B+">B+ (Medium-High)</option>
                <option value="B">B (Medium)</option>
                <option value="C">C (Low Priority)</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block mb-2">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
              >
                <option value="Prospect">Prospect</option>
                <option value="Active">Active</option>
                <option value="Hiring">Hiring</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="col-span-2">
              <label htmlFor="notes" className="block mb-2">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none"
                placeholder="Add any additional notes or comments..."
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
          >
            <Save className="w-5 h-5" />
            Save Company
          </button>
          <button
            type="button"
            onClick={() => navigate("/companies")}
            className="px-8 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
