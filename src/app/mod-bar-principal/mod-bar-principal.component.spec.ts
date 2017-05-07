import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBarPrincipalComponent } from './mod-bar-principal.component';

describe('ModBarPrincipalComponent', () => {
  let component: ModBarPrincipalComponent;
  let fixture: ComponentFixture<ModBarPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModBarPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModBarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
