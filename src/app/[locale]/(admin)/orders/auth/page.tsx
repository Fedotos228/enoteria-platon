"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import Container from "@/components/layout/Container";

export default function AuthPage() {
  return (
    <Container className="pt-14">
      <AuthForm />
    </Container>
  );
}
