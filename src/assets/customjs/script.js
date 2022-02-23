(function() {
    const form    = document.getElementById('calc-form');
    const results = document.getElementById('results');
    const errors  = document.getElementById('form-error');

    /**
     * Display a form validation error
     *
     * @param   {String}  msg  The validation message
     * @return  {Boolen}       Returns false
     */
    function errorMessage(msg) {
        errors.innerHTML = msg;
        errors.style.display = '';
        return false;
    }

    /**
     * Display the calculation results
     *
     * @param   {Integer}  calories   The calories burned
     * @param   {Integer}  distance   The distance run
     * @param   {String}   unit       The distance unit (miles or kilometers)
     * @param   {Integer}  burnRate   The calories per distance burn rate
     * @param   {Integer}  calsPerHr  The calories burned per hour
     */
    function showResults(calories) {
        results.innerHTML = `<p>Your basal metabolic rate (BMR) is: <strong>${(calories).toFixed(2)} </strong> calories a day.</p><a href="#" id="rs">revise</a>`;
      results.style.display = ''
      form.style.display = 'none'
      errors.style.display = 'none'
    }
  
    /**
     * Hide the results and reset the form
     */
    function resetForm(e) {
      if(e.target.id = 'rs') {
        e.preventDefault();
        results.style.display = 'none';
        form.style.display = '';
        form.reset()
      }
    }

    /**
     * Handle form submit
     */
    function submitHandler(e) {
        e.preventDefault();

        // Age
        let age = parseFloat(form.age.value);
        //let unit = form.distance_unit.value;
        if(isNaN(age) || age < 0) {
            return errorMessage('Please enter a valid age');
        }
   
        // Height
        let heightCM = parseFloat(form.height_cm.value);
        if(isNaN(heightCM) || heightCM < 0) {
            
          let heightFeet = parseFloat(form.height_ft.value);
          if(isNaN(heightFeet) || heightFeet < 0) {
              return errorMessage('Please enter a valid Height in feet or centimeters');
          }      
         let heightInches = parseFloat(form.height_in.value);
          if(isNaN(heightInches) || heightInches < 0) {
              heightInches=0;
          }   
          heightCM = (2.54 * heightInches) + (30.4 * heightFeet)
          
        }   

          let weight = parseFloat(form.weight.value);
          if(isNaN(weight) || weight < 0) {
              return errorMessage('Please enter a valid weight');
          }   
      
        if(form.weight_unit.value == 'lb') {
            weight = 0.453592 * weight;
        }
      
       let calories = 0;
       if(form.gender.value == 'Female') {
          //females =  655.09 + 9.56 x (Weight in kg) + 1.84 x (Height in cm) - 4.67 x age   
         calories = 655.09 + (9.56 * weight) + (1.84 * heightCM) - (4.67 * age);
        }  else {
         calories = 66.47 + (13.75 * weight) + (5 * heightCM) - (6.75 * age);
        }
 
        // Display results
       showResults(calories);
    }

    // Add Event Listeners
    form.addEventListener('submit', submitHandler);
    results.addEventListener('click', resetForm, true);

})();