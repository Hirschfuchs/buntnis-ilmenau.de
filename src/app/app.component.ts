import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { ComingSoonComponent } from './wartung/coming-soon/coming-soon.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SharedComponentsModule, RouterOutlet, ComingSoonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'buntnis-ilmenau-de';
}
