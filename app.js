
        document.getElementById("search").addEventListener("click",function(){
            // console.log("btn clicked")
           const foodItem =  document.getElementById("fooditem").value;
           getFoods(foodItem)
        //    console.log(foodItem);
        //    const post = {strMeal:foodItem}

        })

        // strMeal

        const getFoods = value =>{
            fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            .then(response => response.json())
            .then(data => {
                searchResult(data)
            }).catch(err =>{
                resultNotFout("Result not found")
            });
        }

    const resultNotFout = value =>{
        const searchResult = document.getElementById('search-result')
        searchResult.innerHTML = `<h3>${value}</h3>`
    }

     const searchResult = result =>{
         const searchResult = document.getElementById('search-result')
         result.meals.forEach(element => {
            searchResult.innerHTML = `
                <div id="food-view" onClick="foodDetaile(${element.idMeal})" >
                    <img class = "image" src="${element.strMealThumb}"  alt="" />
                    <h3>${element.strMeal}</h3>
                </div>
            `
         });         
     }

     const foodDetaile = maleId =>{
        console.log(maleId)
        fetch( `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${maleId}`)
        .then(response => response.json())
        .then(data => {
            veiwFoodDetails(data)
        }).catch(err =>{
            console.log(err)
        });
     }

     const veiwFoodDetails = details =>{
        const foodView = document.getElementById('food-view');
        foodView.style.display = "none";
        
        const foodDetails = document.getElementById('food-details');
        details.meals.forEach(element => {
            foodDetails.innerHTML = `
                <div onClick="foodDetaile(${element.idMeal})" >
                    <img class = "image" src="${element.strMealThumb}"  alt="" />
                    <h3>${element.strMeal}</h3>
                    <h5>Ingredients</h5>
                    <ul>
                        <li>${element.strIngredient1}</li>
                        <li>${element.strIngredient2}</li>
                        <li>${element.strIngredient3}</li>
                        <li>${element.strIngredient4}</li>
                        <li>${element.strIngredient5}</li>
                        <li>${element.strIngredient6}</li>
                    </ul>
                </div>
            `
         });   
     }

      
       
