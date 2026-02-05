export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fef9f3] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-[#ffe135] border-2 border-[#1a1a1a] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-4 h-4 bg-[#ff6b9d] border-2 border-[#1a1a1a] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-4 h-4 bg-[#87ceeb] border-2 border-[#1a1a1a] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}
