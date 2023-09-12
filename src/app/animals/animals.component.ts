import {Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ApiService } from '../api.service';
import {Animal } from '../animal';
import {CommonModule} from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    CommonModule, 
    MatFormFieldModule,
    MatIconModule,
    MatInputModule]
})
export class AnimalsComponent implements OnInit{
  animal: Animal ={
    name:''
  }
  animals = new Array<Animal>();
  form = new FormGroup({
  name :new FormControl('', [Validators.required]),
  });
  constructor(private apiService: ApiService, public dialog: MatDialog){}

  ngOnInit(): void {  
    this.getAnimals();
  }


  getAnimals() {
    this.apiService.getAnimals().subscribe(response => {
    this.animals = response;
    console.log(response);   
});
  }

  save(): any {        
    this.animal.name = this.form.value.name!;
      this.apiService.postAnimal(this.animal).subscribe((response: any) => {
      console.log(response);
      this.getAnimals();
    });
  }

remove(name:string): any {          
    this.apiService.deleteAnimal(name).subscribe((response: any) => {
    console.log(response);
    this.getAnimals();
  });
}

}
