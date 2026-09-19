function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
        <p>© 2026 MedVault AI. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600">
            Privacy
          </a>

          <a href="#" className="hover:text-blue-600">
            Terms
          </a>

          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;