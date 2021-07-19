import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 0.25rem;
    background: linear-gradient(to right, var(--primary), var(--primary-side));
    display: block;
  }

  figure {
    padding: 2rem;
    margin: 0;
    text-align: center;
  }
`;

export const Search = styled.section`
  margin: 0 auto 2rem;
  max-width: 800px;
  padding: 0 1rem;
  position: relative;

  label {
    background-color: #fff;
    border: 1px solid var(--secondary-light);
    display: flex;
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: 0 .125rem .125rem inset rgba(0,0,0,.1);
  }

  img {
    width: .75rem;
    margin: .5rem;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    border: 0 none;
    border-radius: 0.25rem;
    font-size: 1rem;
    background-color: transparent;
    color: var(--secondary-dark);

    &:focus,
    &:focus{
    outline: none;
    }
  }
`;

export const ClearSearchButton = styled.button`
	position: absolute;
	right: 1rem;
	top: 0;
	background-color: transparent;
	border: 0 none;
	height: 1.5rem;
	padding: 0;
	box-sizing: border-box;
	width: 1.5rem;
	border-radius: 50%;
	margin: .4rem;
  cursor: pointer;
  padding: .375rem;

  img {
    margin: 0;
  }

  &:hover,
  &:focus-visible {
    background-color: rgba(0,0,0,.05);
  }
`