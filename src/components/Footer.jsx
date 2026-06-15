function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-100 bg-emerald-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-semibold text-emerald-100">TravelGenie AI</p>
        <p className="text-sm text-emerald-200/80">
          &copy; {year} TravelGenie AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
