import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type RegisterForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const password = watch("password");

  const onSubmit = (data: RegisterForm) => {
    console.log(data);

    // Temporary redirect
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="hidden w-1/2 items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 lg:flex">
        <div className="max-w-md text-white">
          <h1 className="text-5xl font-bold">
            Join MedVault AI
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Create your secure account and keep all your medical
            records in one safe place.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center bg-slate-50 px-6">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

          <h2 className="text-3xl font-bold text-slate-900">
            Create Account
          </h2>

          <p className="mt-2 text-slate-500">
            Start your healthcare journey.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >
            {/* Full Name */}
            <div>
              <label className="mb-2 block font-medium">
                Full Name
              </label>

              <input
                {...register("fullName", {
                  required: "Full name is required",
                })}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium">
                Email
              </label>

              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block font-medium">
                Password
              </label>

              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;