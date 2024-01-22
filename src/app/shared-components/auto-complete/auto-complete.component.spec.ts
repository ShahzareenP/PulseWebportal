import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteComponent } from './auto-complete.component';
import { SharedComponentsModule } from '../shared-components.module';
import { MatOption } from '@angular/material/core';

describe('AutoCompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoCompleteComponent],
      imports: [SharedComponentsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;

    component.autoCompleteConfig = {
      options: [
        { name: 'option1' },
        { name: 'option2' },
        { name: 'option3' },
        { name: 'option4' },
      ],
      targetKey: 'name',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check initData method',()=>{
    component.onKeyUp('option1');
  })

  it('test selectionChange', () => {    
    // make sure the mat-select has the expected mat-options
    const options: MatOption[] = component.matSelect.options.toArray();
    expect(options.length).toBe(4);
    expect(options[0].viewValue).toBe('option1');
    expect(options[1].viewValue).toBe('option2');
    expect(options[2].viewValue).toBe('option3');
    expect(options[3].viewValue).toBe('option4');
  
    // set up a spy on the function that will be invoked via selectionChange
    const spy = jest.spyOn(component, 'selectionChange');
    expect(spy).not.toHaveBeenCalled();
  
    // select the option
    options[1]._selectViaInteraction();
    fixture.detectChanges();
  
    // selectionChange was called and the option is now selected    
    expect(spy).toHaveBeenCalledTimes(1);
    expect(options[1].selected).toBe(true);
  });
});
