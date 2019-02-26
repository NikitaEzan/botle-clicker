import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorizontalMenuComponent } from './gorizontal-menu.component';

describe('GorizontalMenuComponent', () => {
  let component: GorizontalMenuComponent;
  let fixture: ComponentFixture<GorizontalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorizontalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorizontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
