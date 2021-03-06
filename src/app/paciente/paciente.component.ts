import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  form: FormGroup;
  patientAge: number;

  constructor(
    private formBuilder:FormBuilder
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      documentType : ['',[Validators.required]],
      id : ['',[Validators.required]],
      birthdate : ['',[Validators.required]],
      name : ['',[Validators.required]],
      homeAddress : ['',[Validators.required]],
      phoneNumber : ['',[Validators.required]],
      patientObservation : ['',[Validators.required]]
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

}
