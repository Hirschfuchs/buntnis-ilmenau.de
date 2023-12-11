import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuntesIlmenauComponent } from './buntes-ilmenau.component';

describe('BuntesIlmenauComponent', () => {
  let component: BuntesIlmenauComponent;
  let fixture: ComponentFixture<BuntesIlmenauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuntesIlmenauComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuntesIlmenauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
