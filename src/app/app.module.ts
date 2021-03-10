import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CarouselFullDownComponent } from './components/carousel-full-down/carousel-full-down.component';
import { WorksComponent } from './pages/works/works.component';
import { TeamComponent } from './pages/team/team.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CvComponent } from './pages/cv/cv.component';
import { CircleProgressComponent } from './components/circle-progress/circle-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    CarouselFullDownComponent,
    WorksComponent,
    TeamComponent,
    NavbarComponent,
    SidebarComponent,
    TimelineComponent,
    HomeComponent,
    CvComponent,
    CircleProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
