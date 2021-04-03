import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostagemComponent } from './feed-postagem.component';

describe('FeedPostagemComponent', () => {
  let component: FeedPostagemComponent;
  let fixture: ComponentFixture<FeedPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedPostagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
