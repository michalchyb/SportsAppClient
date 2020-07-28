import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  errorMessage = '';

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactService.contact(this.form).subscribe(
      data => {
        this.isSuccessful = true;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    )
  }
}