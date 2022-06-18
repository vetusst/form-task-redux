import foodBackground from "../../assets/img/food-background.jpg";
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Dishes</h1>
      </header>
      <div className={classes['main-image']}>
        <img src={foodBackground} alt="food background"></img>
      </div>
    </>
  );
};

export default Header;
