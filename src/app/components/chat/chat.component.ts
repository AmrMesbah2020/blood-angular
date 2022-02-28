import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  token:any=localStorage.getItem('Token');
  headers=new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  message:string='';
  messages:any=[];
  // data:any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {

    this._httpClient.get('http://localhost:8000/api/get-messages').subscribe(
      (response:any)=>{
        console.log(response.data);

        this.messages=response.data;
      },
      (error:any)=>{
        console.log(error);
      }
    )

    // Pusher.logToConsole = true;

    const pusher = new Pusher('b1d153cd6eda8af1ca13', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {
      console.log(data);
       this.messages.splice(0,0,data);
       console.log(this.messages)
    });
  }

  send():void{
    // console.log(this.username,this.message)
  this._httpClient.post('http://localhost:8000/api/messages',{
    message:this.message
  },{headers:this.headers}).subscribe(
    (response:any)=> {this.message=''},
    (error:any)=>{console.log(error);}
  );
  }

}
