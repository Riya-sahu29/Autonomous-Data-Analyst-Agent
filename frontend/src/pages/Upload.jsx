import { useRef, useState } from "react";
import axios from "axios";

export default function Upload() {
  const fileInputRef = useRef(null);

  const [fileName, setFileName] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Open file dialog
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file change
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setSuccess(false);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://127.0.0.1:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);

    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl mx-auto">

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Upload CSV File
      </h2>

      {/* File Input Box */}
      <div
        onClick={handleButtonClick}
        className="flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-blue-500 transition"
      >
        <span className="bg-gray-200 px-3 py-1 rounded mr-3 text-sm">
          Choose File
        </span>

        <span className="text-gray-600 text-sm">
          {fileName || "No file selected"}
        </span>
      </div>

      {/* Hidden Input */}
      <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Loading */}
      {loading && (
        <div className="mt-4 text-blue-600 text-sm">
          Uploading...
        </div>
      )}

      {/* Success Alert */}
      {success && (
        <div className="mt-4 bg-green-100 text-green-700 px-4 py-3 rounded-lg border border-green-300">
          File successfully uploaded!
        </div>
      )}

    </div>
  );
}