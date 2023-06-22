import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-send-form-with-file-prop',
  templateUrl: './send-form-with-file-prop.component.html',
  styleUrls: ['./send-form-with-file-prop.component.scss']
})
export class SendFormWithFilePropComponent implements OnInit {

  constructor(private _UploadFileService: UploadFileService) { }

  data = {
    firstname: '',
    lastname: ''
  };

  image: any;
  res: any;
  SelectFile(e: any) {
    this.image = e.target.files[0];
  }
  // firstname:any;
  // lastname:any;

  Upload() {
    //مش عارف لى عشان كدا حطتها ف الفورم دى null بتروح للباك بقيم  reactive form ال
    let formData = new FormData();
    formData.append('Image', this.image);
    formData.append('Firstname', JSON.stringify(this.data.firstname));
    formData.append('Lastname', JSON.stringify(this.data.lastname));
    console.log(typeof(formData.get('Image')));
    console.log(typeof( formData.get('Firstname')));
    console.log(formData.get('Lastname'));

    this._UploadFileService.AddDataWithFileProperty(formData).subscribe((data) => {
      this.res = JSON.parse(data);
      console.log(this.res);
    })
  }
  ngOnInit(): void {
  }

}
