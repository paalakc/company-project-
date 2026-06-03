import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, TrendingUp } from "lucide-react";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("john.doe@corp.com");
  const [password, setPassword] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    const ok = login(email, password);
    if (ok) navigate("/");
    else setError("Invalid credentials.");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f2463] via-[#1e40af] to-[#1d4ed8] items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-2xl">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-3xl leading-tight">CIP</div>
              <div className="text-blue-200 text-sm">Corporate Intelligence Platform</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#f0f4ff]">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-10 h-10 rounded-xl bg-[#1e40af] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[#0f172a] font-bold text-lg leading-tight">CIP</div>
              <div className="text-[#4b5e9e] text-xs">Corporate Intelligence Platform</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-[rgba(30,64,175,0.1)] p-8">
            <h1 className="text-[#0f172a] mb-1">Welcome back</h1>
            <p className="text-[#4b5e9e] mb-8">Sign in to your account to continue</p>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm text-[#0f172a] mb-1.5">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-[#0f172a] mb-1.5">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4b5e9e] hover:text-[#1e40af] p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <div className="flex justify-end mt-1.5">
                  <button type="button" className="text-xs text-[#1e40af] hover:underline">Forgot password?</button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-blue-500/25"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#4b5e9e]">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#1e40af] font-semibold hover:underline">
                Create account
              </Link>
            </p>
          </div>

          <p className="text-center text-xs text-[#4b5e9e] mt-6">
            Demo: use any email & password to sign in
          </p>
        </div>
      </div>
    </div>
  );
}
