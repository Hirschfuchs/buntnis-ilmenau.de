import { Route, Routes } from '@angular/router';
import { ComingSoonComponent } from './wartung/coming-soon/coming-soon.component';
import { pages } from './shared/types/pages';

export const routes: Routes = pages
  .map(
    (page): Route => ({
      path: page.url,
      title: page.name,
      component: page.pageComponentFrame.component,
    }),
  )
  .concat([{ path: '**', component: ComingSoonComponent }]);
