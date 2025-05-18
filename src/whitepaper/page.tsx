"use client";

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Akatsuki Whitepaper</h1>
      <iframe
        src="/img/Akatsuki-wp.pdf"
        className="w-full max-w-4xl h-[80vh] border-4 border-red-600 rounded-lg shadow-lg"
      />
    </div>
  );
}
