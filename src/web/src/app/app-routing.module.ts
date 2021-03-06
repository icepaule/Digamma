import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {PreviewComponent} from "./preview/preview.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'results/:type/:query', component: ResultsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'preview/:id', component: PreviewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
