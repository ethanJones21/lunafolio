import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { Info } from '../../interfaces/info';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  
  hoy: Date;
  info: Info[] = [];
  modal: any;
  isVideo: boolean = false;
  srcModal: string = '';
  
  constructor(private dataServ: DataService) {
    this.hoy = new Date();
  }
  
  ngOnInit(): void {
    this.getInfo();
  }
  
  getInfo(){
    this.dataServ.getInfo()
    .subscribe( info => this.info = info )
  }
  
  openModal(src: string, type: string){
    this.modal = document.querySelector('.vmodal');
    this.modal?.classList.add('vmodal-active');
    if (type==='video') {
      this.isVideo = true;
    } else{
      this.isVideo = false;
    }
    this.srcModal = src;
  }
  
  closeModal(){
    this.modal = document.querySelector('.vmodal');
    this.modal?.classList.remove('vmodal-active');
  }
}
