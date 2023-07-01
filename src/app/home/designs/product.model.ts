



export class Product {
  public id: string;
  public title: string;
  public price: string;
  public front_image:string;

  
  constructor(id: string,title: string, price: string, front_image: string ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.front_image = front_image;
  }
}
