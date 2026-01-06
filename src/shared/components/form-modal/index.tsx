import Form from "components/form";
import React from "react";
import { CloseIconWrap, FormModalWrap, FormWrap } from "./styles";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  onCloseFrom: () => void;
  modalTitle?: string;
}

const FormModal = (props: IProps) => {
  const { modalTitle, onCloseFrom } = props;
  return (
    <FormModalWrap>
      <FormWrap>
        <CloseIconWrap>
          <CloseIcon onClick={onCloseFrom} />
        </CloseIconWrap>
        {modalTitle && <h2>{modalTitle}</h2>}
        <Form onAcceptFrom={onCloseFrom} />
      </FormWrap>
    </FormModalWrap>
  );
};

export default FormModal;
