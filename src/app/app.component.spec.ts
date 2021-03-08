import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let app: AppComponent;
  let h1: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).createComponent(AppComponent);
    fixture.detectChanges();
    de = fixture.debugElement;
    app = fixture.componentInstance;
    h1 = de.query(By.css('h1'));
    return { de, app, h1 };
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Pokemon'`, () => {
    expect(app.title).toEqual('Pokemon');
  });

  it('should render title', () => {
    expect((h1.nativeElement as HTMLElement).innerText).toBe(
      `${app.title} is running!`
    );
  });
});
