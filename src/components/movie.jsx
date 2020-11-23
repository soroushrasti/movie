import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService.js'
import Pagination from './common/Paginations'
import {Paginate} from '../utils/Paginate'
import ListGroup from './common/listGroup'
import {getGenres} from '../services/fakeGenreService.js'
import MovieTable from './movieTable'
import _ from 'lodash'

class Movie extends Component {
    state = { 
        movies: [],
        genres: [],
        pageSize:4,
        currentPage:1,
        sortColumn:{path:'title',order:'ase'}
    }

    componentDidMount(){
        const genre =[{_id:" ",name:"All Genres"},...getGenres()]
        this.setState({movies:getMovies(), genres:genre})
    }
    handleSort=(sortColumn)=>{
       this.setState({sortColumn})
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
        if(this.state.movies.length===0)
        return <p>There are no movies in Database</p>
        const {selectedGenre}=this.state
        const filtered=selectedGenre && selectedGenre._id ? this.state.movies.filter(m=>m.genre._id === selectedGenre._id) : this.state.movies;
        const sorted=_.orderBy(filtered,[this.state.sortColumn.path],[this.state.sortColumn.order]);
        const movies=Paginate(sorted,this.state.currentPage, this.state.pageSize)

        return ( <div className='row'>
         <div className="clo-3">
             <ListGroup selectedItem={selectedGenre}  items={this.state.genres} textProperty='name' valueProperty='_id'  
              onItemSelect={this.handleGenreSelect} />
         </div>
         
         <div className="col">
        <p>Showing {filtered.length} movies in the Database </p>
         <MovieTable movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} onSort={this.handleSort} sortColumn={this.sortColumn} />
         <Pagination itemsCount={filtered.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}  />
          </div>
        
        </div>)
    }
}
 
export default Movie;