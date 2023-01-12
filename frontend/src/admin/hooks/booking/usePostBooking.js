import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const postBooking = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/reservation`, inputs);

const usePostBooking = (options) => {
  const queryClient = useQueryClient();
  return useMutation(postBooking, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.BOOKING]);
      options?.onSuccess?.();
    },
  });
};

export default usePostBooking;
