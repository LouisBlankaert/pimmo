import Link from 'next/link';
import { Header, Footer } from '@/components/ui/layout';

export default function LoginPage() {
  return (
    <>
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h1 className="text-3xl font-semibold mb-6 text-center">Connexion</h1>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Mot de passe
                  </label>
                  <Link
                    href="/account/reset-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-input h-4 w-4 text-primary focus:ring-ring"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
                  Se souvenir de moi
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 px-6 rounded-full hover:bg-primary/90 transition-colors mt-2"
              >
                Se connecter
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground">
                Pas encore de compte ?{' '}
                <Link href="/account/register" className="text-primary hover:underline">
                  S'inscrire
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
