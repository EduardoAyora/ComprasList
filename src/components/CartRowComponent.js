import React from 'react';

export function CartRowComponent(props) {
  const product = props.product;
  return(
    <div>
      <tr>
        <td>
          <form>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="productName" />
              <label class="form-check-label" for="productName">{product.name}</label>
            </div>
          </form>
        </td>
      </tr>
    </div>
  );
}
