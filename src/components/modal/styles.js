import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255,255,255,.8);
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    padding: 2rem;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
    border-radius: .5rem;
    position: relative;
    max-width: 475px;
    width: 90%;
    box-sizing: border-box;
    background-image: url(${require("../../img/pokeball-2.png").default});
    background-repeat: no-repeat;
    background-position: center 2rem;
  }
`