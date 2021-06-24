import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { WorksComponent } from './works/works.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'works', component: WorksComponent },
            { path: 'cv', component: CvComponent },
            { path: '**', component: NotfoundpageComponent, pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
