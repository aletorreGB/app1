import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inicio } from '../inicio.model';
import { InicioService } from '../inicio.service';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {


inicio: Inicio


  constructor( private activatedRoute: ActivatedRoute, private inicioService : InicioService, public geolocation:Geolocation ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {


      const recipeId = paramMap.get('pickId')
      

    })
  }
  ngAfterViewInit(){
    this.geolocationNative();

  }
  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geposition : Geoposition )=> {

      console.log(geposition)
    })

  }
}
