import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOfBodyComponent } from './header-of-body.component';

describe('HeaderOfBodyComponent', () => {
  let component: HeaderOfBodyComponent;
  let fixture: ComponentFixture<HeaderOfBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOfBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOfBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
