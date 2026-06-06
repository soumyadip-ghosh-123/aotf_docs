'use client';

import { Show, SignInButton, UserButton } from '@clerk/nextjs';

export function AuthControls() {
  return (
    <div className="flex items-center gap-3">
      <Show when="signed-out">
        <SignInButton mode="redirect">
          <span className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950">
            Sign in
          </span>
        </SignInButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
}