import {Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ApiService } from '../api.service';
import {Animal } from '../animal';
import {CommonModule} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  standalone: true,
  imports: [
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
  animals = new Array<Animal>();
  name = new FormControl('', [Validators.required]);
  constructor(private apiService: ApiService, public dialog: MatDialog){}

  ngOnInit(): void {  
    this.apiService.getAnimals().subscribe(response => {
      this.animals = response;
      console.log(response);   
  });
  }

  getErrorMessage() {
    return this.name.hasError('required')? 'You must enter a name' : '';
  }

  openSaveDialog() {
  }

  openDeleteDialog(data: Animal) {
  }
}

