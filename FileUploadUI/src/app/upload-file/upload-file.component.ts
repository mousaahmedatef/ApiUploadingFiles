import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';
import { UploadFileService } from '../upload-file.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  file:any;
  res:any;
  constructor( private _UploadFileService:UploadFileService) { }
  // FromData:FormGroup= new FormGroup({
  //   'file':new FormControl(null),
  // });
  SelectFile(e : any){
    this.file=e.target.files[0];

    // this.FromData.get('file')?.setValue(this.file);
    // console.log(this.FromData.value);
  }
 
  Upload(){
    let formData= new FormData();
    formData.append('file' , this.file)
    console.log(formData.get('file'));
    

    this._UploadFileService.AddOneFile(formData).subscribe((data)=>{
      this.res=JSON.parse(data);
      console.log(this.res);
    })
  }

  ngOnInit(): void {
  }

}
