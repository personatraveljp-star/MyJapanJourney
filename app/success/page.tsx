export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl mb-6">Payment Successful</h1>

        <p className="text-zinc-400 text-lg mb-10">
          Thank you for your purchase.
        </p>

        <a
          href="/"
          className="bg-white text-black px-8 py-4 rounded-full"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}