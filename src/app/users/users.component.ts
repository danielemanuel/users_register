import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  users:any[];
  user = {
      id:'',
      name:'',
      email:'',
      phone:''
  }

  constructor(public dataService:DataService,
              private flashMessagesService: FlashMessagesService,
              private router: Router)
  {
      this.dataService.getUsers().subscribe(users => {
        this.users = users;
      });
  }      

  onSubmit({value, valid}: {value: any, valid: boolean}){
    
        if(!valid) {
          this.flashMessagesService.show('Please fill in all fields', {
            cssClass: 'alert-danger',
            timeout: 4000
          });
          this.router.navigate(['users'])
        } else {
            this.dataService.addUser(this.user).subscribe(user => {
              console.log(user);
              this.users.unshift(user);
              this.user = {
                  id:'',
                  name:'',
                  email:'',
                  phone:''
              }
          });
        }     
    }
}
