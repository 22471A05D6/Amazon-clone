import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysdealsComponent } from './todaysdeals.component';

describe('TodaysdealsComponent', () => {
  let component: TodaysdealsComponent;
  let fixture: ComponentFixture<TodaysdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysdealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodaysdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
