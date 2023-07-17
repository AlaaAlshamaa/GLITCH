import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { ProductOptionsComponent } from './home/product-options/product-options.component';
import { DesignsComponent } from './home/designs/designs.component';
import { SignupComponent } from './signup/signup.component';
import { UserinfoComponent } from './signup/userinfo/userinfo.component';
import { PlaceComponent } from './place/place.component';
import { ChoiceComponent } from './place/choice/choice.component';
import { EditComponent } from './edit/edit.component';
import { OptionComponent } from './edit/option/option.component';
import { FooterComponent } from './home/footer/footer.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MycartComponent } from './shopping/mycart/mycart.component';
import { ItemComponent } from './shopping/item/item.component';
import { CardComponent } from './home/designs/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './signup/login/login.component';
import { LogininfoComponent } from './signup/login/logininfo/logininfo.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductOptionsComponent,
    DesignsComponent,
    SignupComponent,
    UserinfoComponent,
    PlaceComponent,
    ChoiceComponent,
    EditComponent,
    OptionComponent,
    FooterComponent,
    ShoppingComponent,
    MycartComponent,
    ItemComponent,
    CardComponent,
    LoginComponent,
    LogininfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    //  {path: '', component: AppComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: 'place', component: PlaceComponent},
      {path: 'edit', component: EditComponent},
      {path: 'shopping', component: ShoppingComponent},
    ]),
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
