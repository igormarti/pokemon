import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokefavoritelistComponent } from './pokefavoritelist.component';

describe('PokefavoritelistComponent', () => {
  let component: PokefavoritelistComponent;
  let fixture: ComponentFixture<PokefavoritelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokefavoritelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokefavoritelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
