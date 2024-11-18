"use client";
import React, { useState } from "react";

function Form() {
  const [longUrl, setLongUrl] = useState<String[]>([]);
  const [shortUrl, setShortUrl] = useState<String[]>([]);
  const [long, setLong] = useState("");
  const [short, setShort] = useState("");
  const [preview, setPreview] = useState(false);

  const handleAddLongUrl = (value: string) => {
    setLong(value);
  };

  const handleAddShortUrl = (value: string) => {
    setShort(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLongUrl((prev) => [...prev, long]);
    setShortUrl((prev) => [...prev, short]);
    setPreview(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[40vw] flex flex-col items-center shadow-xl bg-white py-5">
        <h1 className="text-xl font-serif mb-5">Short Your Long Urls</h1>
        <input
          type="text"
          onChange={(e) => {
            handleAddLongUrl(e.target.value);
          }}
          placeholder="Enter Long Url"
          className="mb-5 w-[90%] px-2 py-2 focus:outline-none border shadow-md rounded-md"
        />
        <input
          type="text"
          onChange={(e) => {
            handleAddShortUrl(e.target.value);
          }}
          placeholder="Enter Short Url"
          className="mb-5 w-[90%] px-2 py-2 focus:outline-none border shadow-md rounded-md"
        />
        <button
          type="submit"
          className="mb-5 bg-black rounded-xl px-4 py-2 text-white text-lg font-serif hover:bg-slate-900"
        >
          Generate
        </button>
        {preview && (
          <div className="preview w-full">
            {longUrl.map((url, index) => (
              <div key={index} className="flex justify-start mb-3 ml-9">
                <p>{index + 1}.</p>
                <p className="ml-3 font-mono font-semibold text-sm">
                  {url} : {shortUrl[index]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}

export default Form;
