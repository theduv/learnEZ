import { toast } from "react-toastify";

const displayError = (e: any, message: string) => {
  console.error(e);
  return toast.error(message);
};

export default displayError;
