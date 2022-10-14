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
    this._blurService.blurImageFaces(this.fileToUpload as File).subscribe((res) => {
      console.log(res);
    }, error => {
      console.log(error.message);
    });
  }

}
