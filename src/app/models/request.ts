export class Request{
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

getAddress():string{
  return this.city+' '+this.state+' '+this.street+' '+this.zip
}
}
