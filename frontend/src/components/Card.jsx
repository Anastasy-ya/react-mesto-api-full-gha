import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { name, link, likes, id, owner } = card;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = owner.id === currentUser.id;
  const isLiked = likes.some((i) => i.id === currentUser.id);
  const cardLikeButtonClassName = `button-like ${
    isLiked && "button-like_active"
  }`;

  return (
    <li className="elements__item">
      <img
        className="elements__image"
        src={link}
        alt={name}
        onClick={() => onCardClick({ name, link })}
      />
      {isOwn && (
        <button
          className="elements__delete"
          type="button"
          aria-label="Delete"
          onClick={() => onCardDelete({ id })}
        />
      )}

      <div className="elements__die">
        <h2 className="elements__signature">{name}</h2>
        <div className="elements__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Like"
            onClick={() => onCardLike(card)}
          ></button>
          <span className="form__like-counter">{likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
