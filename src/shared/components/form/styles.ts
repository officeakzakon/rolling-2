import colors from "shared/styles/colors";
import styled from "styled-components";

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormUl = styled.ul`
  opacity: 1.75;
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  row-gap: 20px;
  flex-direction: column;

  li {
    display: flex;
    flex-direction: column;
  }

  input,
  .MuiSelect-select,
  .MuiInputBase-root {
    background-color: ${colors.white[900]};
    border-radius: 5px;
  }

  .workWithOther {
    display: flex;
    width: 100%;
    justify-content: center;

    .MuiFormGroup-root {
      justify-content: center;
    }

    span {
      color: ${colors.white[900]};
      text-align: center;
    }
  }

  .error-text {
    color: ${colors.red[900]};
  }

  button {
    white-space: nowrap;
    font-weight: bold;
    height: 56px;
    width: 100%;
  }
`;

export const PopupEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  row-gap: 30px;

  .pop-title {
    font-size: 25px;
    text-align: center;
  }

  .pop-description {
    font-size: 18px;
  }
`;
