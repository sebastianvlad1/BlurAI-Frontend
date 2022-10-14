import { Component, OnInit } from '@angular/core';
import { BlurService } from 'src/app/services/blur-service/blur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fileToUpload: File | null = null;

  constructor(private _blurService: BlurService) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.fileToUpload = event.target.files[0];
    console.log("this.fileToUpload name: " + JSON.stringify(this.fileToUpload?.name));
    this.blurImageFaces();
  }

  private blurImageFaces(){
    this._blurService.blurImageFaces(this.fileToUpload as File).subscribe((res: Blob) => {
      console.log(res);
      var blob = new Blob([res], { type: 'image/jpeg' });
      var url = window.URL.createObjectURL(blob);
      var anchor = document.createElement("a");
      anchor.download = "test.jpeg";
      anchor.href = url;
      anchor.click();
    }, error => {
      console.log(error.message);
    });
  }

}
