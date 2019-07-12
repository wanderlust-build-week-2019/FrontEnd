import React, { Component } from 'react'
 import dummyData from '../dummyData'
 import Place from './Place';

 

 
export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      filteredPosts: [],
      search: ''
    }
  }

  updateSearch(e) {
    this.setState({search: e.target.value})
  }

  

  onChange = e => {
    this.setState({search: e.target.value})
  }
 
// THIS ONE!!
  render() {
     let filteredPlaces =  dummyData.filter(
      (e)=> {
        return e.place.indexOf(this.state.search)!== -1;
      }
    );
    return (
      <div>

        <div className ='searchTop'>
        <h1 className ='destinations'>DESTINATIONS</h1>
            <input
                    className ='search'
                    type="search"
                    placeholder='Search'
                    value={this.state.search}
                    onKeyDown={this.state.searchPostsHandler}
                    onChange = {this.onChange}
                  />
        </div>
           

        <ul>
          {filteredPlaces.map ((e)=> {
            return<Place place ={e.place}
            img={e.thumbnailUrl}
                        country ={e.country}
                        price = {e.price}
            key = {e.img}/>
             
          })}
        </ul>
        
                   <input
                    type="search"
                    placeholder='Search'
                    value={this.state.search}
                    onKeyDown={this.state.searchPostsHandler}
                    onChange = {this.onChange}
                  />
           
       </div>
    )
  }
}




 