import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SummaryAllCasesComponent } from "./summary-all-cases.component";

const featureRoutes: Routes = [
    { path: "summary", component: SummaryAllCasesComponent}
  ];

@NgModule({
    declarations: [
        SummaryAllCasesComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(featureRoutes)
    ],
  })
export class SummaryAllCasesModule{

}