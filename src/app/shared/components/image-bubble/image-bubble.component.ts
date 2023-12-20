import {Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import module

@Component({
  selector: 'app-image-bubble',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgStyle
  ],
  templateUrl: './image-bubble.component.html',
  styleUrl: './image-bubble.component.scss'
})
export class ImageBubbleComponent implements OnChanges {
  @Input()
  imagePath: string | null = null;

  @Input()
  title: string | null = null;

  @Input()
  imgAlt: string = `Image Bubble Button für ${this.title}`;

  @Input()
  action: () => void = () => {
  }

  constructor(private readonly elementRef: ElementRef) {
    this.imagePath
  }

  ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }

    private refreshBackgroundImage(){
      this.elementRef.nativeElement.style.setProperty("--bg-image", this.imagePath);
    }

  protected readonly url = module
}
