import React from 'react';
import './Modal.css';

export default function Modal(){

    const closeModal = () => {
        document.querySelector(".modal").style.right = '-100%';
    }

  return (
    <div class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h2>Ваша корзина</h2>
      <button onClick={closeModal} class="close-button">&times;</button>
    </div>
    <div class="cart-items">
      <div class="cart-item">
        <img src="../../../public/slider/1.jpg" alt="" />
        <div class="cart-item-details">
          <h3>Торшер</h3>
          <p>2250 ₽</p>
        </div>
        <button class="remove-button">&times;</button>
      </div>
    </div>
    <div class="subtotal">
      <span>Итоговая стоимость</span>
      <span>2250 ₽</span>
    </div>
    <button class="checkout-button">Заказать</button>
  </div>
</div>

  );
};
