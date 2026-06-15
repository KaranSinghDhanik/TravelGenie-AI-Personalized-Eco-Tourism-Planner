import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function PageLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden bg-white">
      <Navbar />
      <main className="w-full min-w-0 flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
