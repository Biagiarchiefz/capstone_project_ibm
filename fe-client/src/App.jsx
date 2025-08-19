import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");

    const response = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Granite Model🚀
        </h1>

        {/* Input Prompt */}
        <textarea
          rows={5}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Tulis prompt di sini..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleGenerate}
          disabled={loading || !prompt}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {/* Output */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Output:</h3>
          <div className="mt-2 p-4 bg-gray-50 border rounded-lg min-h-[100px] whitespace-pre-wrap">
            {loading ? "Sedang memproses..." : result || ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
