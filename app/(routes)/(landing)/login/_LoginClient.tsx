"use client";

import React, { useEffect } from "react";
import LoginForm from "@/app/components/auth/LoginForm";
import RegisterForm from "@/app/components/auth/RegisterForm";
import useLoginForm from "@/app/hooks/useLoginForm";
import useRegisterForm from "@/app/hooks/useRegisterForm";

const LoginClient = () => {
  const loginForm = useLoginForm();
  const registerForm = useRegisterForm();

  useEffect(() => {
    loginForm.onOpen();
  }, []);

  const toggleForm = () => {
    if (loginForm.isOpen) {
      loginForm.onClose();
      registerForm.onOpen();
    } else {
      registerForm.onClose();
      loginForm.onOpen();
    }
  };

  return (
    <>
      {loginForm.isOpen && <LoginForm toggleForm={toggleForm} />}
      {registerForm.isOpen && <RegisterForm toggleForm={toggleForm} />}
    </>
  );
};

export default LoginClient;
