



export class User {
  public username: string;
  public phone: string;
  public instagram_url:string;
  public address:string;
  public password:string;
  public password_confirmation:string;
  
  constructor(username: string, phone: string, instagram_url: string, address: string, password: string , password_confirmation: string ) {
    this.username = username;
    this.phone = phone;
    this.instagram_url = instagram_url;
    this.address = address;
    this.password = password;
    this.password_confirmation = password_confirmation;
  }
}
