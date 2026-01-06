import colors from "shared/styles/colors";
import styled from "styled-components";

export const FormModalWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: ${colors.black[800]};
  z-index: 100;
  padding: 20px;
  display: flex;
  overflow-y: auto;
`;

export const FormWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 50px 30px;
  border-radius: 10px;
  background-color: ${colors.black[50]};
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: auto;

  h2 {
    font-size: 30px;
    color: ${colors.white[600]};
    text-align: center;
  }
`;

export const CloseIconWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }

  path {
    fill: ${colors.white[600]};
  }
`;
