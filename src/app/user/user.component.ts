import { Component, OnInit } from '@angular/core';
import { FetcherService } from '../InfoFetcher/fetcher.service';
import { User } from '../Models/models';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = {id: 0, avatar: '', first_name: '', last_name: '', email: ''};
  loaded: boolean = false;

  formName: string = '';
  formEmail: string = '';

  constructor(private fs: FetcherService, private route: ActivatedRoute, private rt: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    let sub = this.fs.GetUser(id!).subscribe({
      next: (data) => {
        this.user = data.data;
        this.loaded = true;
        sub.unsubscribe();
      },
      error: (err) => {
        this.rt.navigate(['/']);
        sub.unsubscribe();
      }
    });
  }

  onNameChange(name: KeyboardEvent) {
    this.formName = (name.target as HTMLInputElement).value;
  }

  onEmailChange(email: KeyboardEvent) {
    this.formEmail = (email.target as HTMLInputElement).value;
  }

  submitName(ev: any) {
    ev.preventDefault();
    let firstlastname = this.formName.split(' ');

    if (firstlastname.length == 2) {
      this.user.first_name = firstlastname[0];
      this.user.last_name = firstlastname[1];
    }
  }

  submitEmail(ev: any) {
    ev.preventDefault();
    this.user.email = this.formEmail;
  }
}
