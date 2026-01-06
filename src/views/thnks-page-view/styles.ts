import colors from "shared/styles/colors";
import screens from "shared/styles/screens";
import styled from "styled-components";

export const ThanksBgc = styled.div`
  background-color: ${colors.black["800"]};
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  align-items: center;
`;

export const ThanksWrap = styled.div`
  max-width: ${screens.desktop};
  margin: auto;
  padding: 0 10px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/main-page/how-work/bgc.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  padding: 150px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${screens.mobile}) {
    padding: 80px 30px;
  }

`;

export const ThanksContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  color: ${colors.white[600]};
  text-align: center;

  .thanks-btn {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    height: 50px;
  }

  @media only screen and (max-width: ${screens.mobile}) {
    margin-top: 100px;
  }
`;
