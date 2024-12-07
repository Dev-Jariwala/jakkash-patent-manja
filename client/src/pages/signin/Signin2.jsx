import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "@/controllers/users";
import { useAuth } from "@/hooks/authProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const Signin = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await signIn(data);
    if (res.token) {
      setToken(res.token);
      toast.success("Signed in successfully");
      navigate("/");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="tw-max-h-[100dvh] tw-overflow-auto tw-flex tw-items-center tw-justify-center tw-bg-white tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-w-full tw-max-w-7xl tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between">
        <div className="tw-hidden lg:tw-block tw-w-1/2 tw-pr-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-6">
              Welcome to Jakkash
            </h1>
            <p className="tw-text-xl tw-text-gray-600 tw-mb-8">
              Discover amazing features and boost your productivity with our
              platform.
            </p>
            {/* <div className="tw-relative">
              <KeyRound
                size={100}
                className="tw-absolute tw-left-[50px] -tw-top-[30px] tw-text-indigo-500"
              />
              <LockKeyhole size={100} className="tw-text-gray-600" />
            </div> */}
            <img
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }imgs/login-template.webp`}
              alt="Jakkash Illustration"
              className="tw-w-full tw-max-w-md tw-mx-auto"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="tw-max-w-md tw-w-full tw-space-y-8 tw-bg-white tw-p-10 tw-rounded-xl tw-shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        >
          <div className="tw-text-center">
            <img
              className="tw-mx-auto tw-h-20 tw-rounded-full tw-w-auto"
              src={`${import.meta.env.VITE_BACKEND_URL}imgs/logo.png`}
              alt="Jakkash Logo"
            />
            <h2 className="tw-mt-6 tw-text-3xl tw-font-extrabold tw-text-gray-900">
              Welcome Back!
            </h2>
            <p className="tw-mt-2 tw-text-sm tw-text-gray-600">
              Sign in to continue to Jakkash
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="tw-mt-8 tw-space-y-6"
            >
              <div className="tw-rounded-md tw-shadow-sm -tw-space-y-px">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="tw-sr-only">Username</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="tw-appearance-none tw-rounded-t-md tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-placeholder-gray-500 tw-text-gray-900 focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 focus:tw-z-10 sm:tw-text-sm"
                          placeholder="Username"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="tw-sr-only">Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          className="tw-appearance-none tw-rounded-b-md tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-placeholder-gray-500 tw-text-gray-900 focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 focus:tw-z-10 sm:tw-text-sm"
                          placeholder="Password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="tw-flex tw-items-center tw-justify-between">
                <div className="tw-flex tw-items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="tw-h-4 tw-w-4 tw-text-indigo-600 focus:tw-ring-indigo-500 tw-border-gray-300 tw-rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="tw-ml-2 tw-block tw-text-sm tw-text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="tw-text-sm">
                  <a
                    href="#"
                    className="tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="tw-group tw-relative tw-w-full tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-text-sm tw-font-medium tw-rounded-md tw-text-white tw-bg-indigo-600 hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500 tw-transition-all tw-duration-200"
                >
                  Sign in
                </Button>
              </div>
            </form>
          </Form>
          <div className="tw-mt-6">
            <div className="tw-relative">
              <div className="tw-absolute tw-inset-0 tw-flex tw-items-center">
                <div className="tw-w-full tw-border-t tw-border-gray-300"></div>
              </div>
              <div className="tw-relative tw-flex tw-justify-center tw-text-sm">
                <span className="tw-px-2 tw-bg-white tw-text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="tw-mt-6 tw-grid tw-grid-cols-3 tw-gap-3">
              <Button
                className="tw-w-full tw-inline-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-bg-white tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-bg-gray-50"
                onClick={() => {
                  // Handle Google sign-in
                }}
              >
                <FcGoogle className="tw-h-5 tw-w-5" />
              </Button>
              <Button
                className="tw-w-full tw-inline-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-bg-white tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-bg-gray-50"
                onClick={() => {
                  // Handle Facebook sign-in
                }}
              >
                <FaFacebook className="tw-h-5 tw-w-5 tw-text-blue-600" />
              </Button>
              <Button
                className="tw-w-full tw-inline-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-bg-white tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-bg-gray-50"
                onClick={() => {
                  // Handle Twitter sign-in
                }}
              >
                <FaTwitter className="tw-h-5 tw-w-5 tw-text-blue-400" />
              </Button>
            </div>
          </div>
          <p className="tw-mt-8 tw-text-center tw-text-sm tw-text-gray-600">
            Not a member?{" "}
            <a
              href="#"
              className="tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signin;
