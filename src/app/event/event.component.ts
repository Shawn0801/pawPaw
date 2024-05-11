import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {



  myForm = new FormGroup({
    myInput: new FormControl('', [Validators.required, this.customValidator])
  });




  customValidator(control: AbstractControl): ValidationErrors | null {
    // 在這裡實現你的驗證邏輯
    // 例如，檢查輸入的值是否符合特定的條件
    if (control.value === 'example') {
      return { 'customError': true };
    }
    return null;
  }

}
