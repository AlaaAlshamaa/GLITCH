



export class Product {
  public title: string;
  public price: string;
  public front_image:string;

  
  constructor(title: string, price: string, front_image: string ) {
    this.title = title;
    this.price = price;
    this.front_image = front_image;
  }
}
