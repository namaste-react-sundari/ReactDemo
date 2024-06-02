import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + 'userclass constructor');
    this.state = {
      count: 0,
      count1: 0,
      userInfo: {
        name: 'default-name',
        location: 'default-location',
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + 'userclass componentDidMount');
    const data = await fetch('https://api.github.com/users/S556370');
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + 'userclass componentDidUpdate');
  }

  componentWillUnmount() {
    console.log(this.props.name + 'userclass componentWillUnmount');
  }

  render() {
    console.log(this.props.name + 'userclass render');
    // const { name, location } = this?.props;
    const { count1 } = this?.state;
    const { name, location, login } = this?.state?.userInfo;
    return (
      <div className="user-card">
        <h2>Count via this keyword:{this.state.count}</h2>
        <h2>Count1 via destructuring:{count1}</h2>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>User Id: @{login}</h3>
      </div>
    );
  }
}

export default UserClass;
