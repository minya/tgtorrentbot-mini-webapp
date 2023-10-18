import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentsListItemComponent } from './torrents-list-item.component';

describe('TorrentsListItemComponent', () => {
  let component: TorrentsListItemComponent;
  let fixture: ComponentFixture<TorrentsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorrentsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorrentsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
