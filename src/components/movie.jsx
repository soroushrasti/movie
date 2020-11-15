import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService.js'
import Like from './common/Like'
import Pagination from './common/Paginations'
import {Paginate} from '../utils/Paginate'

class Movie extends Component {
    state = { 
        movies:getMovies(),
        pageSize:4,
        currentPage:1 
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
        //this.setState({currentPage:page})
    }
    render() { 
        const movies=Paginate(this.state.movies,this.state.currentPage, this.state.pageSize)
        if(this.state.movies.length===0)
        return <p>There are no movies in Database</p>
        return  <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the Database </p>
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
            {movies.map(movie=> (
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
         <Pagination itemsCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={ ()=> this.handlePageChange()}  />
        </React.Fragment>
    }
}
 
export default Movie;