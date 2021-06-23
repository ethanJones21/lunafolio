import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
    @ViewChild('circle1') circle1: SVGCircleElement;
    @ViewChild('circle1') circle2: SVGCircleElement;
    constructor() {}

    ngOnInit(): void {
        this.progress(this.circle1, 5);
        this.progress(this.circle2, 5);
    }

    progress(circle: any, percent: number) {
        let radius = circle.r.baseVal.value;
        let circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }
}
