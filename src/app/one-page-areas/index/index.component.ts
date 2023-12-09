import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../wartung/coming-soon/coming-soon.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {}
