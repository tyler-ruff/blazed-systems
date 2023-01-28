import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionCardComponent } from './solution-card.component';

describe('SolutionCardComponent', () => {
  let component: SolutionCardComponent;
  let fixture: ComponentFixture<SolutionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
