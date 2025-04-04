import axios from "axios"
import { useState, useEffect } from "react"


const Meals = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    axios.get("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data.meals)
        setMeals(res.data.meals)
      }).catch(err => {
        console.log(err)
      })

  }, [])

  const itemList = meals.map((meal) => {
    return (
      <section className="flex flex-col justify-center items-center gap-2" >
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-1/3" />
          <h1>{meal.strMeal}</h1>
        </div>
      </section>
    )
  })

  return (
    <div className="size-full flex flex-row flex-wrap justify-center items-center gap-2">{itemList}</div>
  )
}

export default Meals
