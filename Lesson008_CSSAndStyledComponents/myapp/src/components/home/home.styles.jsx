import styled from "styled-components";

export const MyDiv = styled.div`
  background-color: aqua;
  width: 400px;
  border-color: bisque;
  border-width: 2px;
  border-style: solid;
  &:hover {
    background-color: #002ead;
  }
`;

export const MyButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #fce2c1;
  background: linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
  background-color: #ffc477;
  border-radius: 11px;
  border: 2px solid #eeb44f;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 18px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #cc9f52;

  &:hover {
    background-color: #002ead;
    transition: 0.7s;
    background: linear-gradient(to bottom, #002ead 5%, #fb9e25 100%);
  }
`;

export const MySecondButton = styled(MyButton)`
  border: none;
  border-radius: 12px;
  width: 80px;
  height: 30px;
  border-color: #ffb45c;
  background: linear-gradient(
      146.11deg,
      #ffdfba 20.43%,
      rgba(255, 255, 255, 0) 79.91%
    ),
    linear-gradient(202.81deg, #ff6636 38.99%, rgba(255, 255, 255, 0) 85.2%),
    #ffb45c;
`;
