import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrafComponent } from './craf.component';

describe('CrafComponent', () => {
  let component: CrafComponent;
  let fixture: ComponentFixture<CrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
