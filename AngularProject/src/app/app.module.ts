import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { Top3MaleComponent } from './top3-male/top3-male.component';
import { Top3FemComponent } from './top3-fem/top3-fem.component';
import { GraficoComponent } from './grafico/grafico.component';

import { HttpClientModule } from  '@angular/common/http';
import { PromedioTiempoManComponent } from './promedio-tiempo-man/promedio-tiempo-man.component';
import { PromedioTiempoFemComponent } from './promedio-tiempo-fem/promedio-tiempo-fem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    Top3MaleComponent,
    Top3FemComponent,
    GraficoComponent,
    PromedioTiempoManComponent,
    PromedioTiempoFemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //Registro de módulo importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
