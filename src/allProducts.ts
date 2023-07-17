

import { generatedProduct } from './app/generatedProduct.model'


export class allProducts {
    public allproductlist:{ generatedProduct }[] ;
    
    constructor(allproductlist: { generatedProduct }[] ) {
      this.allproductlist = allproductlist;
    }
  }
  