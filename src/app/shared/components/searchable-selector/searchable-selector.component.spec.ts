import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableSelectorComponent } from './searchable-selector.component';

describe('SearchableSelectorComponent', () => {
  let component: SearchableSelectorComponent;
  let fixture: ComponentFixture<SearchableSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
