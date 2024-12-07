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
    <>
      <div className="tw-w-full tw-max-h-dvh">
        <div className="tw-mx-auto tw-w-[350px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-mt-10 tw-space-y-5">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}imgs/logo.png`}
            className="tw-size-40 tw-rounded-full"
          />
          <div className="tw-font-bold tw-text-gray-700 tw-text-2xl">
            Sign in to Jakkash
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="tw-space-y-8 tw-w-full"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input className="" {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="tw-w-full" type="submit">
                Signin
              </Button>
            </form>{" "}
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signin;
