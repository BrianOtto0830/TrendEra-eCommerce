import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import illustration from "images/login-illustration.svg";
import illustrationLogin from "images/auth-login.svg";
import logo from "images/logo.svg";
import logoTrendEra from "images/TrendEraLogo.png";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { useAuth } from "context/AuthProvider";
import { color } from "framer-motion";

const LoginPage = () => {
  const { login, form, setForm } = useAuth();

  const logoLinkUrl = "#";
  const illustrationImageSrc = illustration;
  const headingText = "Sign In To Treact";
  const socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com",
    },
  ];
  const submitButtonText = "Sign In";
  const forgotPasswordUrl = "#";
  const signupUrl = "#";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the login function from useAuth
    await login();
  };

  return (
    <AnimationRevealPage>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Bagian Kiri: Form Login */}
          <div className="w-full md:w-1/2 px-8 py-12">
            <div className="text-center mb-10">
              <img src={logoTrendEra} alt="Trend Era Logo" className="mx-auto h-12" />
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                Welcome Back!
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Sign in to your account to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                />

                {/* Password */}
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-300"
                  style={{ backgroundColor: "#0D9488" }}
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Links */}
            <div className="text-center mt-6">
              <a href={forgotPasswordUrl} className="text-gray-500 text-sm hover:underline">
                Forgot Password?
              </a>
              <p className="mt-4 text-gray-600 text-sm">
                Don't have an account?{" "}
                <a href={signupUrl} className="text-gray-900 font-medium hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>

          {/* Bagian Kanan: Ilustrasi */}
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url("${illustrationLogin}")` }}
          />
        </div>
      </div>

    </AnimationRevealPage>
  );
};

export default LoginPage;
