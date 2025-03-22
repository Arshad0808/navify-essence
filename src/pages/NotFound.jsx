
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Page Not Found";
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-gray-900">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
          <Link 
            to="/" 
            className="bg-purple-600 text-white px-5 py-3 rounded-md hover:bg-purple-700 transition-colors"
          >
            Return to Dashboard
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
