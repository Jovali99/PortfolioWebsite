import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {testButton} from "./testButtonComponent";
import { AppRoutingModule } from './app-routing.module';
import {LogoComponent} from "../logo/logo.component";
import {ProjectTemplateComponent} from "../project-template/project-template.component";
import {ExternalLinksComponent} from "../external-links/external-links.component";
import {AboutComponent} from "../about/about.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        ProjectTemplateComponent,
        ExternalLinksComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
