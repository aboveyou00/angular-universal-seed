import { NgModule } from '@angular/core';

//Declarations
import { AppComponent } from './app.component';

//Imports
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule.withServerTransition({appId: 'angular-universal-seed'})],
    bootstrap: [AppComponent]
})
export class AppModule { }
