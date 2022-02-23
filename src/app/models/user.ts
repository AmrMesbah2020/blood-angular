import { DonnationData } from './donnationData';
export class User {
  id:number=0;
  firstName: string="";
  lastName: string="";
  name:string=this.getFullName();
  email: string="";
  password:string="";
  gender:string="";
  phone:string="";
  street:string="";
  city:string="";
  state:string="";
  birthdate:Date=new Date(10);
  wieght:number=0;
  avatar:string="";
  address:string="";
  age:number=0;
  donnation_data=new DonnationData();
  isAdmin: any;




  getFullName():string {
    return this.firstName+' '+this.lastName;
  }
  Adress():string{
    return this.street+' '+this.state+' '+this.city;
  }



}
// 'name',
//         'email',
//         'password',
//         'gender',
//         'phone',
//         'address',
//         'birthdate',
//         'wieght',
//         'avatar'
