import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from 'src/app/services/upload-files/upload-files.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;

  constructor(private uploadFilesService: UploadFilesService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadFilesService.getFiles();
  }

  selectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadFilesService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadFilesService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
}
