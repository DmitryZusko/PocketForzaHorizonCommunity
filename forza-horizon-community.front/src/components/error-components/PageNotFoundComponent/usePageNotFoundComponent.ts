import { useRouter } from "next/router";
import { useCallback } from "react";

export const usePageNotFoundComponent = () => {
  const router = useRouter();

  const handleGoHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);
  return { handleGoHomeClick };
};
