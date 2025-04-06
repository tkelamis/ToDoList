import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgComponent } from './child-ng.component';

describe('ChildNgComponent', () => {
  let component: ChildNgComponent;
  let fixture: ComponentFixture<ChildNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
