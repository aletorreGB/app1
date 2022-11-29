import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  picks = []


  constructor(private inicioService : InicioService, private router : Router) { }

  ngOnInit() {
   this.picks =  this.inicioService.getPicks()
  }
  goToUser(){
    this.router.navigate(['/userlist'])
  }
}
