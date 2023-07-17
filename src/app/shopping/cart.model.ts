



export class Cart {
  public id: string;
  public product_id: string;
  public quantity: number;
  public price: string;
  public front_image:string;
  public product:string;
  public deleted: boolean = false;
 
  
  constructor(id: string,product_id: string,quantity: number, price: string, front_image: string, product: string ,  deleted: boolean) {
    this.id = id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.price = price;
    this.front_image = front_image;
    this.product = product;
  this.deleted= deleted;
  }
}
