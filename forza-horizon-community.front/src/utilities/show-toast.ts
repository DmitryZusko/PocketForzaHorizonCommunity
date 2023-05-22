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

const showPromise = (promise: Promise<any>, message: string) => {
  toast.promise(promise, {
    loading: message,
    success: "Success!",
    error: "Opps, something goes wrong...",
  });
};

const showToast = { showError, showSuccess, showInfo, showPromise };

export default showToast;
