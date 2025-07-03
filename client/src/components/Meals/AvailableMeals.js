import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItems/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicken Tandoori',
      description: 'Try this tasty food',
      price: 220,
    },
    {
      id: 'm2',
      name: 'Chillie Chicken',
      description: 'Try this tasty food',
      price: 165,
    },
    {
      id: 'm3',
      name: 'Barbecue Chicken',
      description: 'Try this tasty food',
      price: 120,
    },
    {
      id: 'm4',
      name: 'Sahi Panner',
      description: 'Healthy...and green...',
      price: 180,
    },
  ];

const AvailableMeals=()=>{
    const mealList = DUMMY_MEALS.map(meal=><MealItem id={meal.id} key={meal.id} name={meal.name}price={meal.price}description={meal.description}/>)
    return(
        <section className={classes.meals}>
            <Card><ul>{mealList}</ul></Card>
        </section>
    )
}
export default AvailableMeals;