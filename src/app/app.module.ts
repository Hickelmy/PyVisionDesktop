import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { ChartComponent } from "./page/chart/chart.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { FooterComponent } from "./components/footer/footer.component";
import { WidgetsComponent } from "./components/widgets/widgets.component";
import { UsuariosComponent } from "./page/usuarios/usuarios.component";
import { HistoricoComponent } from "./page/historico/historico.component";
import { AppRoutingModule } from "./routes/app-routing.module";
import { AnalyticsComponent } from './page/analytics/analytics.component';
import { TicketsComponent } from './page/tickets/tickets.component';
import { ListComponent } from './page/list/list.component';
import { ReportComponent } from './page/report/report.component';
import { ConfigsComponent } from './page/configs/configs.component';
import { RegisterComponent } from './page/register/register.component';
import { LogoutComponent } from './page/logout/logout.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent, ChartComponent, SidebarComponent, NavbarComponent, LayoutComponent, FooterComponent, WidgetsComponent, UsuariosComponent, HistoricoComponent, AnalyticsComponent, TicketsComponent, ListComponent, ReportComponent, ConfigsComponent, RegisterComponent, LogoutComponent],
  imports: [BrowserModule , AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
