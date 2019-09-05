import React, { Component } from "react";
import shortid from "shortid";

// style
import style from "./TripList.module.css";
// MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

class TripList extends Component {
  state = {
    initialItems: this.props.content,
    items: this.props.content,
    isEmpty: false,
    sortFlag: false
  };
  toggleSort = (key) => {
    const { initialItems } = this.state;

    let newList = initialItems;
    this.setState({
      initialItems: this.state.sortFlag ? this.sortUp(key, newList) : this.sortDown(key, newList),
      sortFlag: !this.state.sortFlag
    });
  };
  sortDown = (key, newList) =>  newList.sort((a, b) =>
  a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0
  );

  sortUp = (key, newList) =>  newList.sort((a, b) =>
  a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
  );

  filterList = event => {
    let items = this.state.initialItems;
    const e = event.target.value.toLowerCase();
    items = items.filter(item => {
      return (
        item.toName.toLowerCase().includes(e) ||
        item.toName.toLowerCase().includes(e)
      );
    });
    if (items.length === 0) {
      this.setState({ isEmpty: true });
    } else {
      this.setState({ isEmpty: false });
    }
    this.setState({ items: items });
  };

  render() {
    return (
      <div>
        <div className={style.nav}>
          <Button
            onClick={
              () => this.toggleSort("fromName")
            }
            variant="contained"
            color="primary"
            style={{ margin: 20 }}
          >
            Sort by dispatch
          </Button>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            margin="normal"
            variant="outlined"
            onChange={this.filterList}
          />
          {this.state.isEmpty ? (
            <Box
              bgcolor="grey.700"
              color="white"
              p={1}
              position="absolute"
              textAlign="center"
              top="19%"
              left="43%"
              zIndex="tooltip"
              boxShadow={3}
              borderRadius={10}
            >
              <p>No results found</p>
            </Box>
          ) : null}
          <Button
            onClick={() => this.toggleSort("toName")
              
            }
            variant="contained"
            color="primary"
            style={{ margin: 20 }}
          >
            Sort by delivery
          </Button>
        </div>
        {this.state.items.map(item => {
          return (
            <Card key={shortid.generate()} className={style.card}>
              <CardContent>
                <Typography className={style.title} color="textSecondary">
                  Trip
                </Typography>
                <Typography variant="h5" component="h2">
                  From: {item.fromName}
                </Typography>
                <Typography variant="h5" component="h2">
                  To: {item.toName}
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
