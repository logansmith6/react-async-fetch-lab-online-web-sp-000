// create your App component here
import React, { Component } from 'react'


class App extends Component {

componentDidMount(){
  fetch(' http://api.open-notify.org/astros.json', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  })
}

}

export default App
