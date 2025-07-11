import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center">
        <h1 className="text-4xl font-heading font-bold mb-4 text-primary uppercase heading-normal">404</h1>
        <p className="text-xl text-text/70 mb-4 font-body text-normal">Oops! Page not found</p>
        <a href="/" className="link text-primary hover:underline font-body text-normal">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
