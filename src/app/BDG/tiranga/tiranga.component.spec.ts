import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirangaComponent } from './tiranga.component';

describe('TirangaComponent', () => {
  let component: TirangaComponent;
  let fixture: ComponentFixture<TirangaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TirangaComponent]
    });
    fixture = TestBed.createComponent(TirangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
