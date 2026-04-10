import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const MAX = 100;

  let message = "Max Characters I can handle is 100...";

  if (text.length > MAX) {
    message = "Yooo I said MAX is 100, can you not read?";
  } else if (text.length > 80) {
    message = "That is a lot of words, I can't read...";
  } else if (text.length > 50) {
    message = "Uhhh you like typing huh?"
  } else if (text.length > 20) {
    message = "Please try not to type too much..."
  }

function getRandomColor() {
  const colors = [
    "placeholder:text-red-700",
    "placeholder:text-orange-700",
    "placeholder:text-yellow-700",
    "placeholder:text-green-700",,
    "placeholder:text-indigo-700",
    "placeholder:text-purple-700",
    "placeholder:text-pink-700",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-xl bg-white rounded-xl shadow-lg p-5 space-y-5">
        <h1 className="text-3xl font-bold text-blue-700">Character Counter</h1>

        <textarea
          rows="5"
          placeholder="Start typing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`w-full rounded-xl border border-blue-700 p-5 text-blue-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 focus:outline-none ${getRandomColor()}`}
        />

        <p className="text-sm font-medium text-blue-700">
          {text.length} / {MAX}
        </p>

        <p className="text-base text-blue-700">{message}</p>

        <button
          onClick={() => setText("")}
          className="rounded-xl bg-blue-700 px-5 py-2 text-white "
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;