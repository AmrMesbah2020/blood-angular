import { Blood } from './blood';
import { User } from  'src/app/models/user';
export class Request{
id:number=NaN;
phone:string='';
description:string='';
quantity:number=NaN;
date:Date=new Date(10);
city:string='';
street:string='';
state:string='';
zip:string='';
address:string='';
blood_group:string='';
rhd:string='';
owner_details=new User();
number_of_donners:number=0;
blood=new Blood();


getAddress():string{
  return this.city+' '+this.state+' '+this.street+' '+this.zip
}
}
