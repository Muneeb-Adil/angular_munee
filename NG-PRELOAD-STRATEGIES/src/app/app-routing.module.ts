import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyService } from './core/custom-preloading-strategy.service';

const routes: Routes = [{
  path:'',
  pathMatch : 'full',
  redirectTo:'home'
},{
  path:'home',
  loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule),
  data:{
    shouldPreload : true
  }
},{
  path:'about',
  loadChildren:()=>import('./about/about.module').then((m)=>m.AboutModule),
  data:{
    shouldPreload : true
  }
},{
  path:'admin',
  loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)
}]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {preloadingStrategy : PreloadAllModules}
    {preloadingStrategy: CustomPreloadingStrategyService}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
