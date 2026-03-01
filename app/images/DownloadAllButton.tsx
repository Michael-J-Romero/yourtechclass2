"use client";
import { useState } from "react";

export default function DownloadAllButton() {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);
    try {
      const res = await fetch("/images/download");
      if (!res.ok) throw new Error("Failed to fetch zip");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "images.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      // simple client-side error handling
      // eslint-disable-next-line no-console
      console.error(err);
      alert("Download failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleDownload} disabled={loading} style={{padding:8,borderRadius:6}}>
      {loading ? "Preparing..." : "Download All"}
    </button>
  );
}
