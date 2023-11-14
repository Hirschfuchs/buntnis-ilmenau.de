import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerSindWirComponent } from './wer-sind-wir.component';

describe('WerSindWirComponent', () => {
  let component: WerSindWirComponent;
  let fixture: ComponentFixture<WerSindWirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WerSindWirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WerSindWirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
