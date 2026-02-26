import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar />

      <main className="flex-grow flex justify-center items-center p-6">
        <AppRoutes />
      </main>

      <Footer />

    </div>
  );
}