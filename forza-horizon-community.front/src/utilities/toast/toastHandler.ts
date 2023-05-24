import toast from "react-hot-toast";

const showError = (message?: string) => {
  toast.error(message || "Oops, something goes wrong");
};

const showSuccess = (message?: string) => {
  toast.success(message || "Operation is successful");
};

const showInfo = (message: string) => {
  toast(message, { icon: "ℹ️" });
};

const showPromise = (
  promise: Promise<any>,
  loadingMessage?: string,
  successMessage?: string,
  errorMessage?: string,
) => {
  toast.promise(
    promise.then((r) => {
      if (!r) throw new Error();
    }),
    {
      loading: loadingMessage || "Please, wait...",
      success: successMessage || "Success!",
      error: errorMessage || "Opps, something goes wrong...",
    },
  );
};

const toastHandler = { showError, showSuccess, showInfo, showPromise };

export default toastHandler;
