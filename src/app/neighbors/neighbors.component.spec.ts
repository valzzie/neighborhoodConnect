import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborsComponent } from './neighbors.component';

describe('NeighborsComponent', () => {
  let component: NeighborsComponent;
  let fixture: ComponentFixture<NeighborsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeighborsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighborsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
