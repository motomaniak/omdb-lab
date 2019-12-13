import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'



class SearchContainer extends Component {
    state = {
        s: '',
        movies: []
    }

    search = () => {
        let url = `http://www.omdbapi.com/?apikey=465cc29c&s=${this.state.s}`
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if(res.Response == 'False')
                    alert('No movies found!')
                else
                    this.setState({movies: res.Search})
            })
            .catch(err => console.log(err))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.search()
    } 

    onInput = (e) => {
        this.setState({s: e.target.value})
    }

    render() {
        return (
            <>
            <h3><Search onInput={this.onInput} handleSubmit={this.handleSubmit}/></h3>
            <Results data={this.state.movies.length == 0 ? [] : this.state.movies}/>
            </>
        )
    }
}

export default SearchContainer