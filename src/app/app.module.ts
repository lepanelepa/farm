import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { DialogAddAnimalComponent } from './dialog-add-animal/dialog-add-animal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AnimalsComponent } from './animals/animals.component';
import { CommonModule, NgFor } from '@angular/common';


import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,     
        DialogAddAnimalComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [     
        CommonModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        MatListModule,
        MatFormFieldModule,  
        MatDialogModule,
        MatButtonModule, 
        MatIconModule,
        MatInputModule,        
        FormsModule,   
        ReactiveFormsModule,  
        NgFor,   
        NoopAnimationsModule,
        AnimalsComponent,         
    ]
})
export class AppModule { }
