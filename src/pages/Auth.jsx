import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";

const Auth = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  }, [isLogin]);

  const validateForm = () => {
    if (!isLogin) {
      if (!formData.username) {
        setToastMessage({
          status: "error",
          message: "Username is required!",
        });
        return false;
      }
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        setToastMessage({
          status: "error",
          message: "Please enter a valid email address.",
        });
        return false;
      }
      if (formData.password.length < 8) {
        setToastMessage({
          status: "error",
          message: "Password must be at least 8 characters long.",
        });
        return false;
      }
    } else {
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        setToastMessage({
          status: "error",
          message: "Please enter a valid email address.",
        });
        return false;
      }
      if (!formData.password) {
        setToastMessage({
          status: "error",
          message: "Password is required!",
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setToastMessage({
        status: "success",
        message: isLogin ? "Login successful!" : "Signup successful!",
      });
    }
  };

  return (
    <>
      <Link
        to="/"
        className="bg-[#4A90E2] text-white flex justify-center items-center gap-2 p-3 px-4 md:px-12 overflow-hidden"
      >
        <img src="./logo.svg" alt="logo" />
        <p className="text-lg font-bold">Quizzy</p>
      </Link>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-semibold mb-4">
            {isLogin ? "Log In" : "Sign Up"}
          </h1>
          {!isLogin && (
            <>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-1"
              >
                Username:
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                name="username"
                className="w-full p-2 bg-gray-100 rounded-md mb-4 outline-none"
              />
            </>
          )}
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            name="email"
            className="w-full p-2 bg-gray-100 rounded-md mb-4 outline-none"
          />

          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            name="password"
            className="w-full p-2 bg-gray-100 rounded-md mb-4 outline-none"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-md cursor-pointer"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          <p className="text-sm mt-2 text-center">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link
              to={isLogin ? "/signup" : "/login"}
              className="text-blue-600 underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </Link>
          </p>
        </div>
      </div>
      {toastMessage && (
        <Toast
          status={toastMessage.status}
          message={toastMessage.message}
          onClose={() => setToastMessage(null)}
        />
      )}
    </>
  );
};

Auth.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default Auth;
