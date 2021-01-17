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

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({ monster: users }));
    }

    handleChange(e) {
        this.setState({ searchField: e.target.value }, console.log(this.state));
    }

    render() {
        const { monster, searchField } = this.state;
        const filteredMonsters = monster.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1> Monster Rancher</h1>
                <SearchBox
                    placeholder="search monster"
                    handleChange={this.handleChange}
                />
                <CardList monster={filteredMonsters} />
            </div>
        );
    }
}

export default App;
