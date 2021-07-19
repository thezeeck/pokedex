import { LIMIT } from "../../constants";

export const Options = (page, count) => {
  const lastPage = Math.ceil(count / LIMIT) - 1;

  if (page < 3) {
    return [0, 1, 2, 3, -2, lastPage];
  } else if (page > (lastPage - 3)) {
    return [0, -1, 59, (lastPage - 2), (lastPage - 1), lastPage];
  } else {
    return [0, -1, (page - 1), page, (page + 1), -2, lastPage];
  }
}