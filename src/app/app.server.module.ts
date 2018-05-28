import { NgModule } from '@angular/core';

//Imports
import { AppModule } from './app.module';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

//Bootstrap
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ModuleMapLoaderModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
