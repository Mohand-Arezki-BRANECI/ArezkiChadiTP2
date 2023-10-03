import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComponent } from './list.component';

describe('ListeComponent', () => {
  let component: ListeComponent;
  let fixture: ComponentFixture<ListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeComponent]
    });
    fixture = TestBed.createComponent(ListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
