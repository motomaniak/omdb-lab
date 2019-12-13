import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Results extends Component {
    showInfo = (id) => {
        let url = `http://www.omdbapi.com/?apikey=465cc29c&i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(res => {
                let text = '<h3>Actors </h3> ' + res.Actors + '<br /> <h3>Plot</h3>' + res.Plot
                document.getElementById(id).innerHTML = text
            })
            .catch(err => console.log(err))
    }

    render() {
        let results = this.props.data.map(ele => {
            return (
                <Card style={{width: '25rem'}}>
                    <Card.Img variant='bottom' src={ele.Poster} />
                    <Card.Body>
                        <Card.Text id={ele.imdbID}></Card.Text>
                        <Card.Title>{ele.Title}, {ele.Year}</Card.Title>
                        <Button onClick={()=> this.showInfo(ele.imdbID)} variant='primary'>Info</Button>
                    </Card.Body>
                </Card>
            )
        })
        return (
            <div className='container'>
                {results}
            </div>
        )
    }
}

export default Results