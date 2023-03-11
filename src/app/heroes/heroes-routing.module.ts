import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { AuthorizationGuard } from '../auth/guards/authorization.guard';

const routes: Routes = [

  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-hero', component: NewPageComponent, canMatch:[AuthorizationGuard]},
      { path: 'search', component: SearchPageComponent, canMatch:[AuthorizationGuard]},
      { path: 'edit/:id', component: NewPageComponent, canMatch:[AuthorizationGuard]},
      { path: 'list', component: ListPageComponent, canMatch:[AuthorizationGuard]},
      { path: ':id', component: HeroPageComponent},
      { path: '**', redirectTo: 'list' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }