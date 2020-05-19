import React from 'react';

export function CartRowComponent(props) {
  const product = props.product;
  return(
    <tr>
      <td>
        <form>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">{product.name}</label>
          </div>
        </form>
      </td>
      <td>
        {product.aisle}
      </td>
    </tr>
  );
}
