import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortersComponent } from './sorters.component';

describe('SortersComponent', () => {
  let component: SortersComponent;
  let fixture: ComponentFixture<SortersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
