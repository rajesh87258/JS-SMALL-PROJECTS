const form = document.querySelector('form');
//This Username Will give you Empty
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
       results.innerHTML = `Please give a valid weight ${weight}`
    } else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        //Show result 
        results.innerHTML  
        if(bmi <= 18.6){
            results.innerHTML = `You are Underweight <span>${bmi}<span>`
        }else if (bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `You are Fit <span>${bmi}<span>`
        } else{
            results.innerHTML = `You are Overweight <span>${bmi}<span>`
        };
    }
    
});


