import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="font-mono text-2xs uppercase tracking-[0.2em] text-accent">
          404 · Not Found
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Esta ruta no existe
        </h1>
        <p className="max-w-md text-pretty text-muted">
          La página que buscas no se encuentra disponible. Puedes volver al
          inicio para seguir explorando.
        </p>
        <Link href="/" className="btn-primary mt-2">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
