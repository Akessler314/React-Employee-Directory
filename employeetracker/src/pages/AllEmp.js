import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Row from "../components/Row"
import Container from "../components/Container"
import Column from "../components/Column"


class AllEmp extends Component {
  state = {
    allResults: [],
    allResultsParsed: [],
    results: [],
  };

  componentDidMount() {
    API.findPeople().then(res => {
      this.setState({
        allResults: res.data.results,
        allResultsParsed: res.data.results,
        results: res.data.results
      });
    });
  }

 

  handelSearch = (event) => {
    const query = event.target.value;
    this.sortpeople(query)
 
  }

  sortpeople = (value) => {
    let searchResults = this.state.allResults.filter((x) => { 
      return x.name.first.includes(value)
    }) 
    this.setState({
      allResultsParsed: searchResults
    })
  }

  render() {
    const results = this.state.allResultsParsed;
    console.log(results)
    return (
      <div>
        <h1 className="text-center">Kessler Corp Employees</h1>
        <form className="search-form form-inline my-2 my-lg-0">
          <div className="form-group ">

            <input className = "employeeSearch" onChange = {this.handelSearch} />

            <button type="submit" className="btn">
              Search
        </button>
          </div>
        </form>
        <Container>
          <Row>
            {
              results.map((employees, i) => (
                <Column key={i}>
                  <Card
                    image={employees.picture.large}
                    firstName={employees.name.first}
                    lastName={employees.name.last}
                    fullname = {employees.name.first + employees.name.last}
                    age={employees.dob.age}
                    DOB={employees.dob.date}
                    phoneNum={employees.phone}
                    email={employees.email}
                    ssn={employees.id.value}
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
