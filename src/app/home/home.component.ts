import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatFormField} from '@angular/material/form-field';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatInput, MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  providers: [],
  imports: [MatInputModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
}
