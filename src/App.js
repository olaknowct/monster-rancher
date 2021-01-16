import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
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
                <searchBox
                    placeholder="search monster"
                    handleChanged={(e) =>
                        this.setState({ filteredMonsters: e.target.value })
                    }
                />
                <CardList monster={filteredMonsters} />
            </div>
        );
    }
}

export default App;
