import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import pizza from '../assets/images/pizza.jpg';
import password from '../assets/images/password.jpg';
import weights from '../assets/images/weights.jpeg';
import money from '../assets/images/money.jpg';
import busy from '../assets/images/busy.jpg';
import basketball from '../assets/images/basketball.jpg';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'PizzabytheByte',
                    subTitle: 'An app to search for pizza anywhere',
                    imgSrc: pizza,
                    link1: 'https://github.com/garizpe9/PizzabytheByte',
                    link2: 'https://garizpe9.github.io/PizzabytheByte/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Password Generator',
                    subTitle: 'A project that generates are random password based off custom parameters',
                    imgSrc: password,
                    link1: 'https://github.com/jlew2529/Password_Generator',
                    link2: 'https://jlew2529.github.io/Password_Generator/',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Daily Planner',
                    subTitle: 'A project that helps organize your daily activities',
                    imgSrc: busy,
                    link1: 'https://github.com/jlew2529/05-Homework-Weekday-Planner',
                    link2: 'https://jlew2529.github.io/05-Homework-Weekday-Planner/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Workout Tracker',
                    subTitle: 'Reach your fitness goals by tracking your workouts',
                    imgSrc: weights,
                    link1: 'https://github.com/jlew2529/Workout_Tracker',
                    link2: 'https://workouttracker25.herokuapp.com/?id=5fa398533b4a03001701ef69',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Budget Tracker',
                    subTitle: 'See how to track your spending habits',
                    imgSrc: money,
                    link1: 'https://github.com/jlew2529/Budget_Tracker',
                    link2: 'https://budgettracker25.herokuapp.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Pickups',
                    subTitle: 'App that allows you to search or create pickup sports games',
                    imgSrc: basketball,
                    link1: 'https://github.com/cramirez88/Project-3',
                    link2: 'https://pickup23.herokuapp.com/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    
    render() {
        return(
            <Container>

            </Container>
        );
    }
}

export default Carousel;