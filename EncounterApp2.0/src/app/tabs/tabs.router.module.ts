import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: '../events/events.module#EventsPageModule'
          }
        ]
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: '../register/register.module#RegisterPageModule'
          }
        ]
      },
      { path: 'podcast',
        children: [
          {
            path: '',
            loadChildren: '../podcast/podcast.module#PodcastPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
