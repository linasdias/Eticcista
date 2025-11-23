import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Authentication will be implemented with Supabase
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Authentication will be implemented with Supabase
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ShieldAlert className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">EtiCCista</h1>
          </Link>
        </div>
      </header>

      {/* Auth Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Acesso ao Sistema</h2>
            <p className="text-muted-foreground">
              Entre com sua conta ou registre-se para participar
            </p>
          </div>

          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin">Entrar</TabsTrigger>
              <TabsTrigger value="signup">Registrar</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">E-mail Institucional</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="seu.nome@instituicao.edu.br"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Senha</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">E-mail Institucional</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="seu.nome@instituicao.edu.br"
                    required
                    disabled={isLoading}
                  />
                  <p className="text-xs text-muted-foreground">
                    Use seu e-mail institucional (.edu.br, .ac.br, etc.)
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Senha</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    required
                    disabled={isLoading}
                    minLength={6}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm">Confirmar Senha</Label>
                  <Input
                    id="signup-confirm"
                    type="password"
                    required
                    disabled={isLoading}
                    minLength={6}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Registrando..." : "Criar Conta"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Ao criar uma conta, você concorda em participar da pesquisa 
              e autoriza o uso anônimo de seus dados para fins acadêmicos, 
              conforme os termos da LGPD.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
