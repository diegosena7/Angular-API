import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderentregaComponent } from './headerentrega/headerentrega.component';
import { FooterentregaComponent } from './footerentrega/footerentrega.component';
import { BodyidentificacaoComponent } from './bodyidentificacao/bodyidentificacao.component';
import { BodyloginComponent } from './bodylogin/bodylogin.component';
import { CadastroComponent } from './cadastro/cadastro.component'

export const routes: Routes = [
    {
        path: 'entrega',
        component: HeaderentregaComponent
    },
    {
        path: 'identificacao',
        component: BodyidentificacaoComponent
    },
    {
        path: 'login',
        component: BodyloginComponent
    },
    {
      path: 'cadastro',
      component: CadastroComponent
  },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
