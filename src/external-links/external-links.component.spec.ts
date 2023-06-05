import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLinksComponent } from './external-links.component';

describe('ExternalLinksComponent', () => {
  let component: ExternalLinksComponent;
  let fixture: ComponentFixture<ExternalLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalLinksComponent]
    });
    fixture = TestBed.createComponent(ExternalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
