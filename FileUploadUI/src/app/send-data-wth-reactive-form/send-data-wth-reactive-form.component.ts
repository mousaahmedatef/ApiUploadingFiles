import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-data-wth-reactive-form',
  templateUrl: './send-data-wth-reactive-form.component.html',
  styleUrls: ['./send-data-wth-reactive-form.component.scss']
})
export class SendDataWthReactiveFormComponent implements OnInit {

  myForm:FormGroup=new FormGroup({
    'Firstname':new FormControl(null ,[Validators.required]),
    'Lastname':new FormControl(null ,[Validators.required]),
    'Image':new FormControl(null ,[Validators.required]),
  })
  SelectFile(e: any) {
    var file = e.target.files[0];
    this.myForm.patchValue({
      'Image': file
    });
  }
  constructor(private _UploadFileService: UploadFileService) { }
  res:any;
 
  register(){
    let formData = new FormData();
    formData.append('Firstname', this.myForm.controls['Firstname'].value);
    formData.append('LastName', this.myForm.controls['Lastname'].value);
    formData.append('Image', this.myForm.controls['Image'].value);
    // console.log(this.myForm.value);
    // console.log(formData);
    this._UploadFileService.AddDataWithFileProperty(formData).subscribe((data) => {
      this.res = JSON.parse(data);
      console.log(this.res);
    })
  }
  ngOnInit(): void {
  }

}
