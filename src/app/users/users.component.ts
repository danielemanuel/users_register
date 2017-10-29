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
        console.log(users)
        this.users = users;
      });
  }      

  ngOnInit() {
      
  }


}
