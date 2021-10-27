import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProvincesComponent } from "./provinces.component";

const featureRoutes: Routes = [
    { path: "", component: ProvincesComponent}
  ];

@NgModule({
    declarations: [
        ProvincesComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(featureRoutes)
    ],
  })
export class ProvincesModule{

}