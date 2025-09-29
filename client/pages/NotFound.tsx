import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-accent/50 to-transparent">
      <div className="text-center">
        <h1 className="font-display text-6xl font-extrabold text-primary">404</h1>
        <p className="mt-2 text-lg text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="mt-6 inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
          Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
