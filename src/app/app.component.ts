import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'buntnis-ilmenau-de';

  constructor(private viewportScroller: ViewportScroller) {}

  public jumpTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
