import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../page/dashboard/dashboard.component';
import { UsuariosComponent } from '../page/usuarios/usuarios.component';
import { HistoricoComponent } from '../page/historico/historico.component';
import { AnalyticsComponent } from '../page/analytics/analytics.component';
import { TicketsComponent } from '../page/tickets/tickets.component';
import { ListComponent } from '../page/list/list.component';
import { ConfigsComponent } from '../page/configs/configs.component';
import { RegisterComponent } from '../page/register/register.component';
import { LogoutComponent } from '../page/logout/logout.component';
import { ReportComponent } from '../page/report/report.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: 'analise', component: AnalyticsComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'lista', component: ListComponent },
  { path: 'reportar', component: ReportComponent },
  { path: 'configuracoes', component: ConfigsComponent },
  { path: 'novocadastro', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent }, 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
