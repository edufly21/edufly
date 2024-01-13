type Args = {
  name: string;
  description: string;
  price: number;
  currency: string;
  unlimited: boolean;
  quantity?: number;
};

export async function createPaystackProduct(args: Args) {
  const body = JSON.stringify(args);

  const response = await fetch(`https://api.paystack.co/product`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();

  return data;
}

/*

201 CREATED RESPONSE

{
  "status": true,
  "message": "Product successfully created",
  "data": {
    "name": "Puff Puff",
    "description": "Crispy flour ball with fluffy interior",
    "currency": "NGN",
    "price": 5000,
    "quantity": 100,
    "is_shippable": true,
    "unlimited": false,
    "integration": 463433,
    "domain": "test",
    "metadata": {
      "background_color": "#F5F5F5"
    },
    "slug": "puff-puff-prqnxc",
    "product_code": "PROD_ddot3upakgl3ejt",
    "quantity_sold": 0,
    "type": "good",
    "shipping_fields": {
      "delivery_note": "disabled"
    },
    "active": true,
    "in_stock": true,
    "minimum_orderable": 1,
    "maximum_orderable": null,
    "low_stock_alert": false,
    "id": 489399,
    "createdAt": "2021-11-08T14:39:37.303Z",
    "updatedAt": "2021-11-08T14:39:37.303Z"
  }
}


400 BAD REQUEST RESPONSE

{
  "status": false,
  "message": "Product with same name already exists"
}

401 UNAUTHORIZED RESPONSE
{
  "status": false,
  "message": "Invalid Key"
}

*/
