import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calories-calculater',
  templateUrl: './calories-calculater.component.html',
  styleUrls: ['./calories-calculater.component.css']
})
export class CaloriesCalculaterComponent implements OnInit {

  activities = [
    {name: 'Little to no exercise', multiply: 1.2},
    {name: 'Light exercise (1–3 days per week)', multiply: 1.375}, 
    {name: 'Moderate exercise (3–5 days per week)', multiply: 1.55},
    {name: 'Heavy exercise (6–7 days per week)', multiply: 1.725},
    {name: 'Very heavy exercise (twice per day, extra heavy workouts)', multiply: 1.9}
  ];

  goals = [
    {name: 'Lose weight - 1lb per week', alt: 'tone', cals: 500}, 
    {name: 'Lose weight - 2lb per week', alt: 'tone', cals: 1000},
    {name: 'Gain weight - 1lb per week', alt: 'bulk', cals: -500},
    {name: 'Gain weight - 2lb per week', alt: 'bulk',cals: -1000},
    {name: 'Maintain weight', alt: 'tone', cals: 0}
  ];

  selectedActivity:any;
  selectedGoal:any;
  weight:any;
  age:any;
  height:any;
  gender:any
  dataForm=new FormGroup({})
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.dataForm=this._formBuilder.group({
      weight:['' , [Validators.required],],
      age:['' , [Validators.required],],
      height:['' , [Validators.required],],
      selectedActivity:['' , [Validators.required],],
      selectedGoal:['' , [Validators.required],],
      gender:['' , [Validators.required],],
    

    });

   
  }

  submit():void{
  this.selectedActivity=this.dataForm.value.selectedActivity;
  this.selectedGoal=this.dataForm.value.selectedGoal;
  console.log(this.selectedActivity)
  console.log(this.selectedGoal)
  console.log(this.breakfast[1].value)
  }

  //function to get total BMR
  bmr(weight:string,height:string,age:string,gender:string):any {
    let standard = (parseInt(weight, 10) * 10) +
          (parseInt(height) * 6.25) - 
          (parseInt(age) * 5); //both genders only differ on the last addition or subtraction
    
      if(gender === 'male'){
        return  standard + 5
      } else if (gender === 'female'){
        return standard - 161
      } else {
        return //break out and angular number validation will take care of NaN 
      }
    };

   // function to get total dailys cals
  cals():any {

    if(this.bmr(this.weight,this.height,this.age,this.gender) !== NaN && this.selectedActivity != null && this.selectedGoal != null){
      return this.bmr(this.weight,this.height,this.age,this.gender) * this.selectedActivity - this.selectedGoal
    
     
    } else {
      return
      };
  };

    //of daily cals how much should be protein
  proteinCals():any{
      return  this.cals() * .55
     };
     //as above for carbs
  carbsCals():any{
       return this.cals() * .25
     };
     //as above for fat
  fatCals():any{ 
       return this.cals() * .2
     };
     breakfast = [
      {name: 'protein', value: this.proteinCals()*0.0252 / 4}, 
      {name: 'carbs', value:this.carbsCals()*.0933 / 4},
      {name: 'fat', value:this.fatCals()*0.3467 / 8}
    ]; 
  
    snack = [
      {name: 'protein', value:this.proteinCals() * 0.0573 / 4}, 
      {name: 'carbs', value:this.carbsCals() * .1295 / 4},
      {name: 'fat', value:this.fatCals() * 0.04 / 8}
    ]; 
  
    mainMeal = [
      {name: 'protein', value: this.proteinCals() * 0.4014 / 4}, 
      {name: 'carbs', value: this.carbsCals() * .2591 / 4},
      {name: 'fat', value: this.fatCals() * 0.2666 / 8}
    ];

  

}
