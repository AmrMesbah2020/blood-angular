import { User } from 'src/app/models/user';
export class Post{

    title:string='';
    content:string='';
    image:string='';
    owner=new User();
    rate:number=NaN;

}