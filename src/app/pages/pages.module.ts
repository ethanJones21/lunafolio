import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { WorksComponent } from './works/works.component';
import { PagesComponent } from './pages.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

@NgModule({
    declarations: [
        PagesComponent,
        CvComponent,
        HomeComponent,
        TeamComponent,
        WorksComponent,
        NotfoundpageComponent,
    ],
    imports: [CommonModule, PagesRoutingModule, RouterModule],
    exports: [
        PagesComponent,
        CvComponent,
        HomeComponent,
        TeamComponent,
        WorksComponent,
        NotfoundpageComponent,
    ],
})
export class PagesModule {}
