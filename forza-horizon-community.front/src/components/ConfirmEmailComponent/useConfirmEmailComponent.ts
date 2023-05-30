import { confirmEmailAsync, useAppDispatch } from "@/redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useConfirmEmailComponent = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const query = router.query;
    const queryParams = { userId: query.u?.toString() || "", token: query.t?.toString() || "" };

    dispatch(
      confirmEmailAsync({ userId: queryParams.userId, confirmationToken: queryParams.token }),
    );

    router.push("/");
  });
  return {};
};
