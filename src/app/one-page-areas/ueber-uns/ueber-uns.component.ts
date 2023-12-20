import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ueber-uns',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './ueber-uns.component.html',
  styleUrl: './ueber-uns.component.scss',
})
export class UeberUnsComponent {}
