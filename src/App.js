import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monster: [
                {
                    name: "frankenstei",
                    id: "aasc1",
                },
                {
                    name: "alucard",
                    id: "aa2sc1",
                },
                {
                    name: "drankula",
                    id: "aas3c1",
                },
                {
                    name: "einstein",
                    id: "a4asc1",
                },
            ],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({ monster: users }));
    }

    render() {
        return (
            <div className="App">
                <CardList>
                    {this.state.monster.map((monster) => (
                        <h1 key={monster.id}>{monster.name}</h1>
                    ))}
                </CardList>
            </div>
        );
    }
}

export default App;
