



export class Type {
  public tid: string;
  public tname: string;
  public tisselected:boolean;
  
  constructor(id: string, name: string, isselected: boolean,) {
    this.tid = id;
    this.tname = name;
    this.tisselected = isselected;
 }
}
