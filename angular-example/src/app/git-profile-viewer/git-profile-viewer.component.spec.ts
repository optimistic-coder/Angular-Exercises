import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProfileViewerComponent } from './git-profile-viewer.component';

describe('GitProfileViewerComponent', () => {
  let component: GitProfileViewerComponent;
  let fixture: ComponentFixture<GitProfileViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitProfileViewerComponent]
    });
    fixture = TestBed.createComponent(GitProfileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
