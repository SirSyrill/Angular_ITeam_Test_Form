import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { getTechnologies, postData } from './app.web-server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  myForm!: FormGroup;
  technologies = getTechnologies();

  tech = document.getElementById('tech');


  constructor(private fb: FormBuilder) {};

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: '',
      LastName: '',
      dateOfBirth: '',
      framework: '',
      frameworkVersion: '',
      email: '',
      hobby: ''
    });
    
    this.myForm.valueChanges.subscribe(console.log);
  }
  
  versionSelect(){
    let versions: any ={
      angular: ['1.1.1', '1.2.1', '1.3.3'],
      react: ['2.1.2', '3.2.4', '4.3.1'],
      vue: ['3.3.1', '5.2.1', '5.1.3']
    }

    const selectedTech = document.querySelector('#tech') as HTMLSelectElement;
    const version = document.querySelector('#ver');
    const versionSelect = document.querySelector('#verSel');

    if(version != null && versionSelect != null && selectedTech.value == ""){
      version.setAttribute('style', 'display: none');
    }
    else if(version != null && versionSelect != null && selectedTech.value == "Angular"){
      version.setAttribute('style', 'display: inline-block');
      versionSelect.innerHTML = '<option value=""></option>';
      for(let i=0; i<versions.angular.length; i++){
        versionSelect.innerHTML += `<option value="${versions.angular[i]}">${versions.angular[i]}`
      }      
    }
    else if(version != null && versionSelect != null && selectedTech.value == "React"){
      version.setAttribute('style', 'display: inline-block');
      versionSelect.innerHTML = '<option value=""></option>';
      for(let i=0; i<versions.react.length; i++){
        versionSelect.innerHTML += `<option value="${versions.react[i]}">${versions.react[i]}`
      }
    }
    else if(version != null && versionSelect != null && selectedTech.value == "Vue"){
      version.setAttribute('style', 'display: inline-block'); 
      versionSelect.innerHTML = '<option value=""></option>';
      for(let i=0; i<versions.vue.length; i++){
        versionSelect.innerHTML += `<option value="${versions.vue[i]}">${versions.vue[i]}`
      }
    }
  }

  submit(){
    // this.myForm.value.birthdate.slice(0, -14)
    this.myForm.value.dateOfBirth = this.myForm.value.dateOfBirth.toString().slice(4, 15);
    console.log(this.myForm.value);
    postData(this.myForm.value);
    setTimeout(()=>{
      alert('Sent!')
    }, 1500)
  }

}

function typeOf(birthDate: any): any {
  throw new Error('Function not implemented.');
}
