import { RateServiceService } from './Services/RateService.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { RateComponent } from './Department/Rating/Rating.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FocusInvalidInputDirective } from './Directives/focusInvalidInput.directive';
import { RatingListComponent } from './Department/rating-list/rating-list.component';
import { SearchNamePipe } from './Pipe/search-name.pipe';
import { ContactusComponent } from './Department/contactus/contactus.component';
import { PortfolioComponent } from './Department/portfolio/portfolio.component';
import { DxPieChartModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    RateComponent,
    FocusInvalidInputDirective,
    RatingListComponent,
    SearchNamePipe,
    ContactusComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    HttpClientModule,
    DxPieChartModule


  ],
  providers: [RateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
