export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl mb-6">Payment Cancelled</h1>

        <p className="text-zinc-400 text-lg">
          Your payment was not completed.
        </p>
      </div>
    </div>
  );
}