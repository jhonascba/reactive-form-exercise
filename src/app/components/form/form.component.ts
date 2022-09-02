import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  projectForm: FormGroup;
  status: string[] = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames: string[] = ['test', 'teste'];

  constructor() {}

  ngOnInit(): void {
    this._startForm();
  }

  private _startForm(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', [Validators.required, this._forbiddenNames.bind(this)]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      status: new FormControl(this.status[0]),
    });
  }

  private _forbiddenNames(control: FormControl): { [s: string]: boolean } {
    const controlValue = control.value.toString().toLowerCase();
    console.log(controlValue);
    if (this.forbiddenProjectNames.indexOf(controlValue) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}
