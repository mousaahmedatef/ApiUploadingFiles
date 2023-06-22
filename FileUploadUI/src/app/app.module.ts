import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { SendFormWithFilePropComponent } from './send-form-with-file-prop/send-form-with-file-prop.component';
import { SendDataWthReactiveFormComponent } from './send-data-wth-reactive-form/send-data-wth-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    SendFormWithFilePropComponent,
    SendDataWthReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
