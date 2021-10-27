import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { SummaryAllCasesModule } from './content/summary-all-cases/summary-all-cases.module';
import { ProvincesModule } from './content/provinces/provinces.module';

const appRoutes: Routes = [
  { path: "", redirectTo:"/summary", pathMatch: "full"},
  { path: "summary", loadChildren: ()=>import('./content/summary-all-cases/summary-all-cases.module').then(m=>m.SummaryAllCasesModule)},
  { path: "provinces", loadChildren: ()=>import('./content/provinces/provinces.module').then(m=>m.ProvincesModule)},
  { path: "**", redirectTo:"/summary", pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
