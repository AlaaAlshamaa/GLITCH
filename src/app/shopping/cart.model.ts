



export class Cart {
  public cart_id: string;
  public quantity: string;
  public price: string;
  public front_image:string;

  
  constructor(cart_id: string,quantity: string, price: string, front_image: string ) {
    this.cart_id = cart_id;
    this.quantity = quantity;
    this.price = price;
    this.front_image = front_image;
  }
}
