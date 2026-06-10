import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `Act as a corporate research analyst for the Corporate Intelligence Platform (CIP). You help users find company data, research sectors, and analyze prospects in India.

When users ask for companies in a sector/city, use this approach:
"Act as a corporate research analyst. Help me find a list of companies from the [SECTOR NAME] sector operating in [CITY NAME], India. For each company, provide: Company Name, Registered Office Address, Industry, Sub-Industry, Year of Establishment, Approximate Employee Strength, Official Website, and LinkedIn Page. Present the output in a clean table format."

When users ask for details on a specific company, use this approach:
"Act as a corporate research analyst and provide detailed research on [COMPANY NAME]. Include: Company Overview, Registered Office Address, Industry Type, Sub-Industry, GST Registration Number, Date of Establishment, CIN/UID Number, Company Constitution, Names of Directors, Employee Strength, Revenue & Business Growth, Official Website, LinkedIn URL, Current Hiring Status, HR Manager details, Recruitment Activity Level, and whether this is a good prospect for recruitment services."

Always be helpful, concise, and format data in tables when listing multiple companies or data points.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "Show me companies hiring in Mumbai",
  "Find IT companies in Bangalore",
  "Research Infosys company details",
  "Top finance companies in Delhi",
];

export default function CIPAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your CIP Assistant. Ask me to find companies by sector/city, or get detailed research on any company." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const userText = text || input.trim();
    if (!userText) return;

    const newMessages: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const reply = data.content?.[0]?.text || "Sorry, I couldn't get a response.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Error connecting. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed", bottom: "24px", right: "24px", zIndex: 1000,
            width: "52px", height: "52px", borderRadius: "50%",
            background: "linear-gradient(135deg, #1e40af, #3b82f6)",
            border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(59,130,246,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontSize: "22px"
          }}
        >
          💬
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div style={{
          position: "fixed", bottom: "24px", right: "24px", zIndex: 1000,
          width: "360px", height: "520px", borderRadius: "16px",
          background: "white", boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          display: "flex", flexDirection: "column", overflow: "hidden",
          border: "1px solid #e2e8f0"
        }}>
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
            padding: "14px 16px", display: "flex", justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "rgba(255,255,255,0.2)", display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: "16px"
              }}>🤖</div>
              <div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>CIP Assistant</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px" }}>How can I help you today?</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: "none", border: "none", color: "white",
              cursor: "pointer", fontSize: "18px", lineHeight: 1
            }}>−</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "82%", padding: "9px 13px", borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  background: msg.role === "user" ? "linear-gradient(135deg, #1e40af, #3b82f6)" : "#f1f5f9",
                  color: msg.role === "user" ? "white" : "#1e293b",
                  fontSize: "13px", lineHeight: "1.5", whiteSpace: "pre-wrap", wordBreak: "break-word"
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ background: "#f1f5f9", borderRadius: "14px 14px 14px 4px", padding: "9px 13px", fontSize: "13px", color: "#64748b" }}>
                  Researching...
                </div>
              </div>
            )}

            {/* Quick prompts — show only at start */}
            {messages.length === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                {QUICK_PROMPTS.map((q, i) => (
                  <button key={i} onClick={() => sendMessage(q)} style={{
                    background: "white", border: "1px solid #cbd5e1", borderRadius: "8px",
                    padding: "7px 10px", fontSize: "12px", color: "#1e40af",
                    cursor: "pointer", textAlign: "left"
                  }}>{q}</button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "12px", borderTop: "1px solid #e2e8f0", display: "flex", gap: "8px" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Type your message..."
              style={{
                flex: 1, padding: "9px 12px", borderRadius: "10px",
                border: "1px solid #cbd5e1", fontSize: "13px",
                outline: "none", fontFamily: "Inter, sans-serif"
              }}
            />
            <button onClick={() => sendMessage()} disabled={loading || !input.trim()} style={{
              background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              border: "none", borderRadius: "10px", width: "38px",
              cursor: "pointer", color: "white", fontSize: "16px"
            }}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}