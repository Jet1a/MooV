"use client";

import React, { useState } from "react";
import Form from "./Form";
import useLoginForm from "@/app/hooks/useLoginForm";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
interface LoginFormProps {
  toggleForm: () => void;
}

const LoginForm = ({ toggleForm }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const loginForm = useLoginForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.ok) {
          toast.success("Logged in");
          router.push("/");
          router.refresh();
          loginForm.onClose();
        }

        if (callback?.error) {
          toast.error(callback.error);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="">
      <input
        id="email"
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
        required
      />
      {errors.email && typeof errors.email.message === "string" && (
        <p className="text-red-500">{errors.email.message}</p>
      )}
      <input
        id="password"
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
        required
      />
      {errors.password && typeof errors.password.message === "string" && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
    </div>
  );

  const footerContent = (
    <p>
      New to our platform? <a onClick={toggleForm}>Sign up now</a>
    </p>
  );

  return (
    <Form
      title="Login"
      body={bodyContent}
      footer={footerContent}
      actionLabel="Login"
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
    />
  );
};

export default LoginForm;
