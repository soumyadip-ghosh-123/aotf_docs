import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
        <SignIn
          routing="path"
          path="/sign-in"
          forceRedirectUrl="/docs"
          fallbackRedirectUrl="/docs"
        />
      </div>
    </main>
  );
}
