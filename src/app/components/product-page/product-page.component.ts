import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';

@Component({
  selector: 'app-product-page',
  imports: [RouterLink, MatFormField, MatInput, MatSuffix, MatDatepicker, MatDatepickerToggle, MatDatepickerInput],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {}
