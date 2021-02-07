
document.getElementById("search").addEventListener("click", function () {
    const foodItem = document.getElementById("fooditem").value;
    getFoods(foodItem)
    //    console.log(foodItem);
})

const getFoods = value => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then(response => response.json())
        .then(data => {
            searchResult(data)
        }).catch(err => {
            resultNotFound("This food item is not available.")
        });
}

const resultNotFound = value => {//for error show
    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = `<h2 class="not-found">${value}</h2>`
}

const searchResult = result => {//search result
    const searchResult = document.getElementById('search-result')
    result.meals.forEach(element => {
        searchResult.innerHTML += `
                <div id="food-view" onClick="foodDetails(${element.idMeal})" >
                    <img class = "image" src="${element.strMealThumb}"  alt="" />
                    <h3>${element.strMeal}</h3>
                </div>
            `
    });
}

const foodDetails = mailId => {
    // console.log(mailId)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mailId}`)
        .then(response => response.json())
        .then(data => {
            veiwFoodDetails(data)
        }).catch(err => {
            console.log(err)
        });
}

const veiwFoodDetails = details => {//for food item hide
    const foodView = document.getElementById('food-view');
    foodView.style.display = "none";

    const foodDetails = document.getElementById('food-details');//After clicking on food item
    details.meals.forEach(element => {
        foodDetails.innerHTML = `
                <div onClick="foodDetails(${element.idMeal})" >
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
                        <li>${element.strIngredient7}</li>
                    </ul>
                </div>
            `
    });
}



