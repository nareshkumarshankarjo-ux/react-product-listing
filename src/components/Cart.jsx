import React from "react";

function Cart({
  cart,
  onRemoveFromCart,
  onDecreaseQuantity,
  onClose,
}) {
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay">
      <div className="cart-panel">
        <div className="cart-header">
          <h2>Shopping Cart</h2>

          <button
            className="close-cart-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              🛒
            </div>

            <h3>Your cart is empty</h3>

            <p>
              Add some products to continue shopping.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div
                  className="cart-item"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>

                    <p>
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <div className="cart-actions">
                      <button
                        onClick={() =>
                          onDecreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className="remove-btn"
                        onClick={() =>
                          onRemoveFromCart(item.id)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <p>Total Amount</p>

              <h2>
                ₹{totalPrice.toLocaleString("en-IN")}
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;