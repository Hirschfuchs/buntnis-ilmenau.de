import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxSplideModule } from 'ngx-splide';
import { ComingSoonComponent } from './coming-soon.component';

describe('ComingSoonComponent', () => {
  let component: ComingSoonComponent;
  let fixture: ComponentFixture<ComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ComingSoonComponent,
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatListModule,
        NgOptimizedImage,
        NgxSplideModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
