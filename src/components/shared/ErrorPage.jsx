import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <h2 className="text-4xl font-semibold mb-2">404 - Page Not Found</h2>
      <p className="text-lg mb-6">The page you are looking for could not be found.</p>
      <Link to="/" className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-gray-300 hover:text-gray-800">
        Go to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
