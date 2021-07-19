import styled from "styled-components";

export const PaginationContainer = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  margin: 0 auto 1rem;
  max-width: 1200px;
  justify-content: center;

  li:first-child button {
    border-radius: .5rem 0 0 .5rem;
  }

  li:last-child button {
    border-right: 1px solid var(--secondary-light);
    border-radius: 0 .5rem .5rem 0;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  border-color: var(--secondary-light);
  border-width: 1px 0 1px 1px;
  border-style: solid;
  font-size: 1rem;
  padding: .5rem 1rem;
  cursor: pointer;

  &.primary {
    background: linear-gradient(to bottom,var(--primary),var(--primary-side));
    color: #fff;
    text-shadow: 0 .25rem .25rem rgba(0,0,0,.25);
  }
`;