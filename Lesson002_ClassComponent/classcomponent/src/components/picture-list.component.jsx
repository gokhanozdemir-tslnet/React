import { Component } from "react";

class PictureList extends Component {
  constructor() {
    super();
    this.state = {
      name: "pictureList",
      pictures: [],
      searchString: "",
    };
    console.log("construtor");
  }

  changeName = (event) => {
    console.log("changeName evet");
    console.log(event.target);
    this.setState({ name: event.target.innerText });
  };

  filterPicture = (event) => {
    this.setState({ searchString: event.target.value.toLowerCase() });
  };

  componentDidMount() {
    console.log("componentdidmount");
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((pictures) =>
        this.setState({
          pictures: pictures.filter((p) =>
            p.title
              .toLowerCase()
              .includes(this.state.searchString.toLowerCase())
          ),
        })
      );
  }

  render() {
    console.log("render");
    const { name } = this.state;
    const filteredPictures = this.state.pictures.filter((p) =>
      p.title.includes(this.state.searchString)
    );
    return (
      <div>
        <h1>Hello Picture {name}</h1>
        <button onClick={this.changeName}>Change Me</button>
        <div>Search</div>
        <input
          className="search-box"
          type="search"
          placeholder="search"
          onChange={this.filterPicture}
        ></input>
        {filteredPictures.slice(0, 10).map((picture) => (
          <div key={picture.id}>
            <div>{picture.title}</div>
            <div>{picture.url}</div>
            <div>
              <img src={picture.url}></img>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default PictureList;
