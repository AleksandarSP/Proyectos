import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookPreviewComponent } from './admin-book-preview.component';

describe('AdminBookPreviewComponent', () => {
  let component: AdminBookPreviewComponent;
  let fixture: ComponentFixture<AdminBookPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBookPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
