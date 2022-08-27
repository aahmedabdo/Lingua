import { MainComponent } from './Layout/main/main.component';
import { RatingListComponent } from './Department/rating-list/rating-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateComponent } from './Department/Rating/Rating.component';
import { PortfolioComponent } from './Department/portfolio/portfolio.component';
import { ContactusComponent } from './Department/contactus/contactus.component';

const routes: Routes = [
  // {path: '#RatingList', component: RatingListComponent},
  // { path: '**', redirectTo: 'sign-in', pathMatch: 'full' }
  {path: '', component: MainComponent},
  {path: 'Main', component: MainComponent},
  {path: 'Rating', component: RateComponent},
  {path: 'RatingList', component: RatingListComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contactus', component: ContactusComponent},
  { path: '**', redirectTo: 'Main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
