import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

function ConnectionErrorToast() {
  const errors = useSelector((state: RootState) => state.errors);

  const toast = useToast();

  useEffect(() => {
    errors.forEach((error) => {
      toast({
        title: error.msg,
        status: "warning",
        duration: null,
        position: "top",
      });
    });

    if (errors.length === 0) {
      toast.closeAll();
    }
  }, [errors]);

  return null;
}

export default ConnectionErrorToast;
