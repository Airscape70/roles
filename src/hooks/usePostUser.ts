import { useMutation } from "react-query";
import { postUser } from "../api/api";
import { queryClient } from "../App";

export const usePostUser = () => {
  const postUserMutation = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      // при успешном выполнении идет глобальное обновление по ключу для ререндера
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  // принимаем аргументы, которые передаем в mutationFn
  return postUserMutation.mutate;
};