import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users:any[];
  user = {
      id:'',
      name:'',
      email:'',
      phone:''
  }

  constructor(public dataService:DataService)
  {
      this.dataService.getUsers().subscribe(users => {
        this.users = users;
      });
  }      

  onSubmit(){
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

  ngOnInit() {
      
  }


}
