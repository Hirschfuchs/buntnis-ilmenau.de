import { Component } from '@angular/core';
import {ImageBubbleComponent} from "../../shared/components/image-bubble/image-bubble.component";

@Component({
  selector: 'app-buntes-ilmenau',
  standalone: true,
  imports: [
    ImageBubbleComponent
  ],
  templateUrl: './buntes-ilmenau.component.html',
  styleUrl: './buntes-ilmenau.component.scss',
})
export class BuntesIlmenauComponent {}
