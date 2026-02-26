import { useState } from "react";
import axios from "axios";

export default function AskAI() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {

    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {

      const res = await axios.get(
        `http://127.0.0.1:8000/ask?question=${question}`
      );

      setAnswer(res.data.answer);

    } catch (error) {

      console.error(error);
      setAnswer("Error getting answer");

    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl mx-auto">

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Ask AI
      </h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Ask a question about your data..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Button */}
      <button
        onClick={askQuestion}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-200"
      >
        Ask AI
      </button>

      {/* Loading */}
      {loading && (
        <div className="mt-4 text-blue-600 text-sm">
          Thinking...
        </div>
      )}

      {/* Answer Box */}
      {answer && (
        <div className="mt-4 bg-gray-100 border border-gray-300 rounded-lg p-4 text-left">
          <span className="font-semibold text-gray-700">Answer:</span>
          <p className="mt-1 text-gray-600">{answer}</p>
        </div>
      )}

    </div>
  );
}