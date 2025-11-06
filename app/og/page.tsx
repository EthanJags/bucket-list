export default function OGPreview() {
  return (
    <div className="w-[1200px] h-[630px] bg-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bucket-pattern pointer-events-none"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-16">
        <h1 className="text-7xl font-bold text-center text-gray-900 mb-4">
          The Life Bucket List
        </h1>
        <p className="text-3xl text-gray-700 text-center">
          100 Things to Do Before You Die
        </p>
      </div>
    </div>
  );
}
