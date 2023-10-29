import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonComponent } from './coming-soon.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

describe('ComingSoonComponent', () => {
  let component: ComingSoonComponent;
  let fixture: ComponentFixture<ComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComingSoonComponent],
      imports: [
        FormsModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatListModule,
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
