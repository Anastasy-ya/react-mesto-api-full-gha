import React from "react";
import PopupWithForm from "./PopupWithForm";

//возвращает окно для попапа "вы уверены?" при удалении карточки 
function PopupWithConfirm({ isOpen, onClose, onConfirm, isLoading }) {

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    onConfirm();
  }

  return (
    <PopupWithForm //подключить
      title={"Are you sure?"}
      formName={"delete"}
      buttonName={"Yes"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={(e) => handleSubmit(e)}
      isLoading={isLoading}
    />
  );
}

export default PopupWithConfirm;
