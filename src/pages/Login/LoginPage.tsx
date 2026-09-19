import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

type LoginResponse = {
  access_token: string;
  token_type: string;
};

function LoginPage() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    setServerError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result: LoginResponse | { detail: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(
          "detail" in result
            ? result.detail
            : "Login failed"
        );
      }

      // Save JWT token
      localStorage.setItem(
        "access_token",
        result.access_token
      );

      // Go to dashboard
      navigate("/dashboard");
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">

      {/* Left */}
      <div className="hidden flex-1 items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-12 lg:flex">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold tracking-tight">
            Welcome Back
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Securely access your medical records, appointments,
            prescriptions and AI health insights from anywhere.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 items-center justify-center bg-slate-50 px-6 py-12">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

          <h2 className="text-3xl font-bold text-slate-900">
            Login
          </h2>

          <p className="mt-2 text-slate-500">
            Sign in to your account
          </p>

          {/* Server error */}
          {serverError && (
            <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {serverError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
          >

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign Up
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}

export default LoginPage;