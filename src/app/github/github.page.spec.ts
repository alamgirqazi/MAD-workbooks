import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPage } from './github.page';

describe('GithubPage', () => {
  let component: GithubPage;
  let fixture: ComponentFixture<GithubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
