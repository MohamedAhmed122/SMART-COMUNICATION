import React from "react";
import { connect } from "react-redux";
import TestModal from "./TestModal";
import LoginModal from './Login';
import RegisterModal from './Register'

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal
};

const ModalManager = ( {currentModal} ) => {
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};
const mapStateToProps = (state) => ({
  //model will be equal to null(State)
  // but if we open a modal it will be equal to the props that we have in the reducer
  currentModal: state.modal,
});
export default connect(mapStateToProps)(ModalManager);
