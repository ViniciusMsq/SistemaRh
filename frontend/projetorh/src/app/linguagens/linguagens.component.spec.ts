import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagensComponent } from './linguagens.component';

describe('LinguagensComponent', () => {
  let component: LinguagensComponent;
  let fixture: ComponentFixture<LinguagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinguagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
