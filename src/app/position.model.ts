
export class Position {
  public pid: number;
  public pname: string;
  public pisselected:boolean;
  
  constructor(id: number, name: string, isselected: boolean,) {
    this.pid = id;
    this.pname = name;
    this.pisselected = isselected;
 }
}
