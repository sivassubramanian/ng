import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheroComponent } from './myhero.component';

describe('MyheroComponent', () => {
  let component: MyheroComponent;
  let fixture: ComponentFixture<MyheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
