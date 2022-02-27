import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  username:string='username';
  message:string='';
  messages:any=[];
  // data:any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {

    // Pusher.logToConsole = true;

    const pusher = new Pusher('b1d153cd6eda8af1ca13', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {
      console.log(data);
       this.messages.push(data)
    });
  }

  submit():void{
    console.log(this.username,this.message)
  this._httpClient.post('http://localhost:8000/api/messages',{
    username:this.username,
    message:this.message
  }).subscribe(()=> this.message ='');
  }

}
