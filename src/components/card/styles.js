import styled from "styled-components";
import { TYPES_COLORS } from "../../constants";

export const CardContainer = styled.li`
  width: calc(50% - 1rem);
  padding: 0;
  margin: 0 .5rem 1rem;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: 400px) {
    width: calc(33.3333% - 1rem);
  }

  @media (min-width: 600px) {
    width: calc(25% - 1rem);
  }

  @media (min-width: 800px) {
    width: calc(20% - 1rem);
  }

  @media (min-width: 1000px) {
    width: calc(16.6666% - 1rem);
  }

  figure {
    margin: 0 0 .5rem;
    line-height: 0;
  }

  img {
    width: 100%;
    max-width: 6rem;
  }

  strong {
    text-transform: capitalize;
    font-size: 1rem;
  }

  span {
    font-size: .75rem;
    color: var(--secondary);
    font-weight: 300;
  }
`;

export const TypeContainer = styled.ol`
  list-style: none;
  margin: .5rem 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TypeItem = styled.li`
  font-size: .75rem;
  padding: .25rem .5rem;
  margin: 0 .25rem;
  background-color: ${props => TYPES_COLORS[props.typeColor]};
  border-radius: .25rem;
  color: #fff;
  text-shadow: 0 .25rem .25rem rgba(0,0,0,.5);
`;

export const BGColor = styled.button`
  padding: .5rem;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 90%),
    linear-gradient(to bottom, 
      transparent 30%,
      ${props => TYPES_COLORS[props.typeColor[0].type.name]} 30%,
      ${props => props.typeColor[1] ? TYPES_COLORS[props.typeColor[1].type.name] : TYPES_COLORS[props.typeColor[0].type.name]} 40%,
      transparent 40%);
  width: 100%;
  border-radius: 0 .5rem 0 .5rem;
  border: 1px solid var(--secondary-light);
  overflow: hidden;
  background-color: #fff;
  transition: all .3s ease;
  outline: 0 none transparent;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    border-color: var(--primary);
    box-shadow: 0 .5rem .5rem rgba(0,0,0,.15);
    outline: 1px solid var(--primary);
  }
`;

export const ModalGrid = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;

  > li {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: .5rem;
    box-sizing: border-box;

    &:nth-child(2) {
      flex: 1;
    }
  }

  ol {
    justify-content: flex-start;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  text-transform: capitalize;
`;

export const TextSpecies = styled.p`
  font-size: .8rem;
  font-weight: 300;
`;

export const Statics = styled.h3`
  font-size: .8rem;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  border-top: 2px solid var(--secondary-light);
  margin-top: 2rem;

  span {
    background-color: #fff;
    padding: .5rem 1rem;
    margin: -1rem auto 0;
    display: block;
    width: min-content;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--primary);
  border: 0 none;
  cursor: pointer;
  padding: .5rem;
  box-sizing: border-box;
`;