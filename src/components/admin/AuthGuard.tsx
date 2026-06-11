"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { observer } from "mobx-react-lite";
import stores from "@/app/store/stores";
import { AUTH_TOKEN } from "@/app/config/utils/variables";
import { getAuthUser } from "@/lib/auth";

const AuthGuard = observer(function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { auth } = stores;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    auth.restoreSession();
    const hasToken = typeof window !== "undefined" && !!window.localStorage.getItem(AUTH_TOKEN);

    if (hasToken && !auth.isAuthenticated) {
      const fallbackUser = getAuthUser();
      if (fallbackUser) {
        auth.authUser = fallbackUser;
        auth.isAuthenticated = true;
      }
    }

    if (auth.isAuthenticated || hasToken) {
      setReady(true);
      return;
    }

    router.replace("/login");
  }, [auth, router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm">
          Checking your session...
        </p>
      </div>
    );
  }

  return <>{children}</>;
});

export default AuthGuard;
