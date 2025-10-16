import Link from 'next/link';
import { Header, Footer } from '@/components/ui/layout';

export default function RegisterPage() {
  return (
    <>
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h1 className="text-3xl font-semibold mb-6 text-center">Inscription</h1>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
              </div>

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
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+32 XXX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Minimum 8 caractères, incluant une majuscule, un chiffre et un caractère spécial
                </p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="rounded border-input h-4 w-4 text-primary focus:ring-ring mt-1"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-muted-foreground">
                  J'accepte les{' '}
                  <Link href="/terms" className="text-primary hover:underline">
                    conditions d'utilisation
                  </Link>{' '}
                  et la{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    politique de confidentialité
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 px-6 rounded-full hover:bg-primary/90 transition-colors mt-2"
              >
                Créer un compte
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground">
                Vous avez déjà un compte ?{' '}
                <Link href="/account/login" className="text-primary hover:underline">
                  Se connecter
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
