import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemontableComponent } from './pokemontable.component';

describe('PokemontableComponent', () => {
  let component: PokemontableComponent;
  let fixture: ComponentFixture<PokemontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemontableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
