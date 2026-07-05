export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
        © {new Date().getFullYear()} Mridul Kar. All Rights Reserved.
      </div>
    </footer>
  );
}