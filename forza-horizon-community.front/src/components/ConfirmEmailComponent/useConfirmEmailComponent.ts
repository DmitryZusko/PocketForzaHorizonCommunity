import { confirmEmailAsync, useAppDispatch } from "@/redux";
import { showToast } from "@/utilities";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useConfirmEmailComponent = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("confirming");

    const query = router.query;
    const queryParams = { userId: query.u?.toString() || "", token: query.t?.toString() || "" };

    showToast.showPromise(
      dispatch(
        confirmEmailAsync({ userId: queryParams.userId, confirmationToken: queryParams.token }),
      ),
      "Confirming your email...",
    );

    router.push("/");
  });
  return {};
};
