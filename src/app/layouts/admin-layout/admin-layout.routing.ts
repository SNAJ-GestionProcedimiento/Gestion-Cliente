import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AuxiliarProgramarProcedimientoComponent } from '../../auxiliar-programar-procedimiento/auxiliar-programar-procedimiento.component';
import { PacienteComponent } from '../../paciente/paciente.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'auxiliar-programar-procedimiento',      component: AuxiliarProgramarProcedimientoComponent },
    { path: 'paciente',      component: PacienteComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
