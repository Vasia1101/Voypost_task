import React, { Component } from "react";
import shortid from "shortid";
import style from "./TripList.module.css";

// MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// Mui Icons
import SearchIcon from "@material-ui/icons/Search";

// const useStyles = makeStyles({
//   card: {
//     minWidth: 275
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

class TripList extends Component {
  state = {
    initialItems: [],
    item: [],
    isEmpty: false
  };
  toggleSortfromName = e => {
    e.preventDefault();
    const { initialItems } = this.state;
    console.log(initialItems);
    let newList = initialItems;
    this.setState({
      initialItems: newList.sort((a, b) => a.toName > b.toName)
    });
  };
  filterList = event => {
    let items = this.state.initialItems;
    items = items.filter(item => {
      return (
        item.fromName.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });
    if (items.length === 0) {
      this.setState({ isEmpty: true });
    } else {
      this.setState({ isEmpty: false });
    }
    this.setState({ items: items });
  };
  UNSAFE_componentWillMount = () => {
    this.setState({
      initialItems: this.props.content,
      items: this.props.content
    });
  };
  render() {
    return (
      <div>
        <form>
          <button onClick={this.toggleSortfromName}>Sort</button>
          <SearchIcon />
          <input
            type="text"
            placeholder="Where you need"
            onChange={this.filterList}
          />
          {this.state.isEmpty ? <div>No results found.</div> : null}
        </form>
        {this.state.items.map(item => {
          return (
            <Card key={shortid.generate()} className={style.card}>
              <CardContent>
                <Typography className={style.title} color="textSecondary">
                  Trip
                </Typography>
                <Typography variant="h5" component="h2">
                  From:{item.fromName}
                </Typography>
                <Typography variant="h5" component="h2">
                  To:{item.toName}
                </Typography>
                <Typography variant="body2" component="p">
                  Dispatch: {item.departAt}
                </Typography>
                <Typography variant="body2" component="p">
                  Vehicle: {item.vehicle}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default TripList;
