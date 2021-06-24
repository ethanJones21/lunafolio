import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [CircleProgressComponent, LoadingComponent],
    imports: [CommonModule],
    exports: [CircleProgressComponent, LoadingComponent],
})
export class ComponentsModule {}
