import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monster: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({ monster: users }));
    }

    render() {
        const { monster, searchField } = this.state;
        const filteredMonsters = monster.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <input
                    type="search"
                    placeholder="search monster"
                    onChange={(e) => {
                        this.setState({ searchField: e.target.value });
                    }}
                />
                <CardList monster={filteredMonsters} />
            </div>
        );
    }
}

export default App;
