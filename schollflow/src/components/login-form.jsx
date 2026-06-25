'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
export function LoginForm() {
// Estado dos campos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault(); // impede o comportamento padrão do form (reload da página)
    setError("");
    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Email ou senha inválidos.");
      return;
    }

    router.push("/dashboard"); // redireciona após login com sucesso
  }
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Entre na sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira seu Email e Senha para entrar na sua conta.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="mary.doe@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Senha</FieldLabel>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha aqui"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Field>
        <Field>
          <Button type="submit"  disabled={loading} >
             {loading ? "Entrando..." : "Login"}
             </Button>
        </Field>

        <Field>

          <FieldDescription className="text-center">
            Não possui uma conta?{" "}
            <Link href="/signup" className="underline underline-offset-4">
              Cadastre-se
            </Link>
          </FieldDescription>
           <FieldDescription className="px-6 text-center">
        Ao clicar em continuar, você concorda com nossos{" "}
        <a href="#">Termos de Serviços</a> e{" "}
        <a href="#">Política de Privacidade</a>.
      </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
