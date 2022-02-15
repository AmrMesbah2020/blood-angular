export class User {
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
  wieght:number=NaN;
  avatar:string="";
  address:string="";


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
