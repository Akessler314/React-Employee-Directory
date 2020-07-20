import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Row from "../components/Row"
import Container from "../components/Container"
import Column from "../components/Column"


class AllEmp extends Component {
  state = {
    allResults: [],
    allResultsSorted: [],
    results: [],
  };

  componentDidMount() {
    API.findPeople().then(res => {
      this.setState({
        allResults: res.data.results,
        allResultsSorted: res.data.results,
        results: res.data.results
      });
    });
  }
  render() {
    const results = this.state.results;
    return (
      <div>
        <h1 className="text-center">Kessler Corp Employees</h1>
        <Container>
          <Row>
            {
              results.map((employees, i) => (
                <Column key={i}>
                  <Card
                    image={employees.picture.large}
                    firstName={employees.name.first}
                    lastName={employees.name.last}
                    age={employees.dob.age}
                    DOB={employees.dob.date}
                    phoneNum={employees.phone}
                    email={employees.email}
                    ssn = {employees.id.value}
                  />
                </Column>
              ))
            }
          </Row>
        </Container>

      </div>
    );
  }
}

export default AllEmp;
