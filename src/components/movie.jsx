import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService.js'
import Like from './common/Like'
import Pagination from './common/Paginations'
import {Paginate} from '../utils/Paginate'
import ListGroup from './common/listGroup'
import {getGenres} from '../services/fakeGenreService.js'

class Movie extends Component {
    state = { 
        movies: [],
        genres: [],
        pageSize:4,
        currentPage:1 
    }

    componentDidMount(){
        const genre =[{name:"All Genres"},...getGenres()]
        this.setState({movies:getMovies(), genres:genre})
    }
    
    handleLike=(movie)=>{
        const movies=[...this.state.movies]
        const index=movies.indexOf(movie)
        movies[index]={...movies[index]}
        movies[index].liked= !movies[index].liked
    }
    handleDelete=(movie)=>{
        const movies=this.state.movies.filter(c=>c._id !== movie._id);
        this.setState({movies})
    }
    handlePageChange=(page)=>{
        console.log('I am here',page)
        this.setState({currentPage:page})
    }
    handleGenreSelect=genre=>{
        this.setState({selectedGenre:genre,
        currentPage:1})
    }
    render() { 
        const movies=Paginate(this.state.movies,this.state.currentPage, this.state.pageSize)
        if(this.state.movies.length===0)
        return <p>There are no movies in Database</p>
        const {selectedGenre}=this.state
        const filtered=selectedGenre && selectedGenre._id ? movies.filter(m=>m.genre._id === selectedGenre._id) : movies;
        return ( <div className='row'>
         <div className="clo-3">
             <ListGroup selectedItem={selectedGenre}  items={this.state.genres} textProperty='name' valueProperty='_id'  
              onItemSelect={this.handleGenreSelect} />
         </div>
         
         <div className="col">
        <p>Showing {filtered.length} movies in the Database </p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {filtered.map(movie=> (
                    <tr key={movie._id}>
                        <td>{movie.title} </td>
                        <td> {movie.genre.name} </td>
                        <td> {movie.numberInStock} </td>
                        <td>{movie.dailyRentalRate}</td>
                        <td  ><Like liked={movie.liked} onClick={()=>this.handleLike(movie)} /></td>
                        <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button> </td>
                    </tr>
                    ))}
            </tbody>
        </table> 
         <Pagination itemsCount={filtered.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}  />
          </div>
        
        </div>)
    }
}
 
export default Movie;