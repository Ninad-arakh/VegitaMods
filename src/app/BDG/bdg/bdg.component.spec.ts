import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdgComponent } from './bdg.component';

describe('BdgComponent', () => {
  let component: BdgComponent;
  let fixture: ComponentFixture<BdgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdgComponent]
    });
    fixture = TestBed.createComponent(BdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
