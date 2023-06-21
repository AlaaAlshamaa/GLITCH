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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
