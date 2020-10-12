import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDailyNewsComponent } from './main-daily-news.component';

describe('MainDailyNewsComponent', () => {
  let component: MainDailyNewsComponent;
  let fixture: ComponentFixture<MainDailyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDailyNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDailyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
