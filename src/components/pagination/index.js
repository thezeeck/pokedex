import React from "react";
import { URL, LIMIT } from "../../constants";
import { Options } from "./options";
import { PaginationContainer, Button } from "./styles";

export const Pagination = ({ url, setCurrentPage, count }) => {
  const page = Math.ceil((Number(url.split("=")[2]) / LIMIT));
  let arrPages = Options(page, count);

  return (
    <footer>
      <PaginationContainer>
        {arrPages.map(btn => {
          if (btn < 0 || btn === page) {
            return (
              <li key={btn}>
                <Button disabled className={btn === page ? "primary" : ""}>{btn === page ? btn + 1 : "..."}</Button>
              </li>
            )
          }

          return (
            <li key={btn}>
              <Button onClick={() => {
                setCurrentPage(`${URL}?limit=${LIMIT}&offset=${btn * LIMIT}`);
              }}>{btn + 1}</Button>
            </li>
          )
        })}
      </PaginationContainer>
    </footer>
  )
}