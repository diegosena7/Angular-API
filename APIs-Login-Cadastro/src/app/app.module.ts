import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderentregaComponent } from './headerentrega/headerentrega.component';
import { FooterentregaComponent } from './footerentrega/footerentrega.component';
import { BodyidentificacaoComponent } from './bodyidentificacao/bodyidentificacao.component';
import { BodyloginComponent } from './bodylogin/bodylogin.component';
import { BodyentregaComponent } from './bodyentrega/bodyentrega.component';
import { BodyminhacontaComponent } from './bodyminhaconta/bodyminhaconta.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { MenuCategoriaComponent } from './menu-categoria/menu-categoria.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DestaquesCaroselComponent } from './destaques-carosel/destaques-carosel.component';
import { CaroselComponent } from './carosel/carosel.component';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localePt, 'pt-BR')

@NgModule({
  declarations: [
    AppComponent,
    MenuCategoriaComponent,
    ProdutoDetalhesComponent,
    CadastroComponent,
    HeaderMainComponent,
    FooterMainComponent,
    HeaderentregaComponent,
    FooterentregaComponent,
    BodyidentificacaoComponent,
    BodyloginComponent,
    BodyentregaComponent,
    BodyminhacontaComponent,
    DestaquesCaroselComponent,
    CaroselComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
  ],

  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
