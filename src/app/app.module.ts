import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SummaryAllCasesComponent } from './content/summary-all-cases/summary-all-cases.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ProvincesComponent } from './content/provinces/provinces.component';

const appRoutes: Routes = [
  { path: "", component: SummaryAllCasesComponent},
  { path: "summary", component: SummaryAllCasesComponent},
  { path: "provinces", component: ProvincesComponent},
  { path: "**", component: SummaryAllCasesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SummaryAllCasesComponent,
    ContentComponent,
    HeaderComponent,
    ProvincesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
