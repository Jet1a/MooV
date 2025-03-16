"use client";

import React, { useState } from "react";
import Form from "./Form";
import useRegisterForm from "@/app/hooks/useRegisterForm";
import useLoginForm from "@/app/hooks/useLoginForm";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
interface RegisterFormProps {
  toggleForm: () => void;
}
const RegisterForm = ({ toggleForm }: RegisterFormProps) => {
  const loginForm = useLoginForm();
  const registerForm = useRegisterForm();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Register Success!");
        registerForm.onClose();
        loginForm.onOpen();
      })
      .catch((error) => {
        toast.error("Something went wrong");
        throw new Error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="">
      <input
        id="name"
        type="name"
        placeholder="Username"
        {...register("name", { required: "Username is required" })}
        required
      />
      {errors.name && typeof errors.name.message === "string" && (
        <p className="text-red-500">{errors.name.message}</p>
      )}

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
      Already have an account? <span onClick={toggleForm}>Login now</span>
    </p>
  );

  return (
    <Form
      title="Signup"
      body={bodyContent}
      footer={footerContent}
      actionLabel="Signup"
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
    />
  );
};

export default RegisterForm;
