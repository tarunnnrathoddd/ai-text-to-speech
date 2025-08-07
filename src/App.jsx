// import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [aiReady, setAiReady] = useState("false");
  const [currentAudio, setCurrentAudio] = useState(null);

  useEffect(() => {
    const checkReady = setInterval(() => {
      if (
        window.puter &&
        window.puter.ai &&
        typeof window.puter.ai.txt2speech === "function"
      ) {
        setAiReady("true");
        clearInterval(checkReady);
      }
    }, 300);
    return () => clearInterval(checkReady);
  }, []);

  const speakText = async () => {
    if (text.length > 3000) {
      setError("Text is too long. Please limit to 3000 characters.");
      return;
    }
    setLoading(true);
    setError("");
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    try {
      const audio = await window.puter.ai.txt2speech(text, {
        engine: "standard",
        language: "en-US",
      });
      setCurrentAudio(audio);
      audio.play();
      audio.addEventListener("ended", () => setLoading(false));
      audio.addEventListener("error", () => setLoading(false));
    } catch (err) {
      setError(err.message || "Something went wrong with text-to-speech");
      setLoading(false);
    }
  };

  // stop the audio if current audio is playing
  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-950 to-blue-800 flex flex-col items-center justify-center p-3 gap-6">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-light bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent text-center">
          AI Text To Speech
        </h1>
        <div
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            aiReady
              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
              : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
          }`}
        >
          {aiReady ? "🟢 AI Ready" : "🟡Waiting for AI..."}
        </div>

        <div className="w-full max-w-2xl bg-gradient-to-r from-gray-900/90 to-blue-900/90 backdrop-blur-md border border-blue-800/30 rounded-3xl p-6 shadow-2xl">
          <textarea
            className="w-full h-40 p-4 bg-gray-900/80 border border-blue-800/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 disabled:opacity-50 resize-none shadow-xl focus:shadow-blue-700/70"
            placeholder="Enter text to convert into speech...( max 3000 characters)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={!aiReady}
            maxLength={3000}
          ></textarea>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-400">
              {text.length}/3000 characters
            </span>
          </div>
          <div className="flex gap-3" mt-4>
            {/* ////////// */}
            {currentAudio && (
              <button
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-blue-900 hover:opacity-80 text-white font-semibold rounded-2xl border border-blue-800/30 transition cursor-pointer"
                onClick={stopAudio}
              >
                ⏹ Stop
              </button>
            )}
          </div>
          <div className="mt-6 space-y-4 text-white">
            {error && (
              <div className="p-4 bg-blue-900/30 text-blue-200 border border-blue-700/30 rounded-2xl">
                {error}{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
