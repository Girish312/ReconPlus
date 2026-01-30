import { useState } from "react";

export default function ChatWidget({ riskScores, vulnerabilities }) {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi 👋, How can I help you today?" },
    ]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        try {
            const res = await fetch("/api/ai-chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: input,
                    riskScores,
                    vulnerabilities,
                }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: data.reply },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Something went wrong. Try again." },
            ]);
        }
    };


    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
            >
                💬
            </button>

            {/* Chat Box */}
            {open && (
                <div className="fixed bottom-24 right-6 w-80 bg-[#0f172a] text-white rounded-xl shadow-xl flex flex-col z-50">
                    {/* Header */}
                    <div className="p-3 border-b border-gray-700 flex justify-between items-center">
                        <span className="font-semibold">ReconPlus Assistant</span>
                        <button onClick={() => setOpen(false)}>✕</button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-[75%] ${msg.sender === "user"
                                    ? "bg-cyan-500 text-black ml-auto"
                                    : "bg-gray-700"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-gray-700 flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type a message..."
                            className="flex-1 bg-[#020617] border border-gray-700 rounded px-2 py-1 text-sm outline-none"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-cyan-500 text-black px-3 rounded"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
