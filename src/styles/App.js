import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContentInputs = styled.div`
  position: relative;
  padding: 0.75em 0 0;
  margin-top: 1.25em;
  width: 50%;
`;

export const Input = styled.input`
  width: 100%;
  color: #fff;
  font-size: 1.3rem;
  padding: 0.75em 0;
  background: transparent;

  border-bottom: 2px solid #505050;
  transition: all 0.8s ease-in-out;

  &::placeholder {
    color: #383838;
  }

  &:placeholder-shown {
    font-size: 1.3rem;
    cursor: text;
  }

  &:focus {
    padding-bottom: 6px;
    border-image: linear-gradient(to right, #f0f0f0, #0f0f0f);
    border-image-slice: 1;

    &::placeholder {
      position: relative;
      top: -20px;
      font-size: 0.5em;
    }
  }
`;

export const Button = styled.button`
  width: 96px;
  height: 48px;
  padding: 0.75em;

  border: 4px solid black;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);

  background-color: #2c3e50;
  color: #bdc3c7;

  transition: all 0.7s ease-in-out;

  &:hover {
    background-color: #bdc3c7;
    color: #2c3e50;
    border-image: linear-gradient(to left, #2c3e50, #bdc3c7);
    border-image-slice: 1;
  }
`;

export const LetterMusic = styled.div`
  background-color: rgba(250, 250, 250, 0.4);
  color: #0f0f0f;

  width: 100vw;

  padding: 2em;
  margin: 4em;
  text-align: center;
  letter-spacing: 2px;
  word-spacing: 5px;

  border-radius: 12px;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.4);
`;

export const Error404 = styled.div`
  color: red;

  > img {
    width: 56px;
    height: 56px;
  }
`;
