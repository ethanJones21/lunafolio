import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { PagesComponent } from './pages.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [
        PagesComponent,
        CvComponent,
        HomeComponent,
        WorksComponent,
        NotfoundpageComponent,
    ],
    imports: [CommonModule, PagesRoutingModule, RouterModule, ComponentsModule],
    exports: [
        PagesComponent,
        CvComponent,
        HomeComponent,
        WorksComponent,
        NotfoundpageComponent,
    ],
})
export class PagesModule {}
