"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const handleGenerate = async () => {
    const data = {};
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>기술블로그 글 생성기</h1>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={keywords}
          onChange={(e) => {
            setKeywords(e.target.value);
          }}
        />
        <button onClick={handleGenerate}>생성</button>
      </main>
    </div>
  );
}
