import { User } from 'src/app/models/user';

export class Post{
    id:number=0;
    title:string='';
    content:string='';
    image:File|any=null;
    owner=new User;
    rate:number=0;
    access:number=0;
    name:string='';


}
