import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { code } from '../utilities';

import { CodeComponent } from './code.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({ template: '' })
class CustomHostComponent {
  title = 'Custom HostComponent';
  control = new FormControl()
}

describe('CodeComponent', () => {
  let host: SpectatorHost<CodeComponent, CustomHostComponent>;
  const createHost = createHostFactory({
    component: CodeComponent,
    host: CustomHostComponent,
    imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule]
  });

  it('should display the host component title', () => {
    host = createHost(`<control-code [formControl]="control"></control-code>`);
    host.component.ngControl.control.setValue(code())
    expect(host.component.value).toBeTruthy()
    // expect(host.query('.zippy__title')).toHaveText('Custom HostComponent');
  });
});
