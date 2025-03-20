import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelComponent } from './kel.component';

describe('KelComponent', () => {
  let component: KelComponent;
  let fixture: ComponentFixture<KelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
