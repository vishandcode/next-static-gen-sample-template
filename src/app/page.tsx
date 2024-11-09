"use client";
import React from "react";

export default function page() {
  return (
    <div className="h-dvh flex flex-col justify-center items-center gap-4">
      <h1>Working Good ! </h1>
      <button
      className="border p-2 rounded-xl px-5"
        onClick={() => {
          alert("Working");
        }}
      >
        Click me
      </button>
    </div>
  );
}
