import React from 'react'  
import { connect } from 'react-redux'  
import { addTodo } from '../actions' 
import axios from 'axios';
  
const API = 'http://localhost:8080/author';
const AddTodo = ({ dispatch }) => {  
  let input  
  const handleSubmit = e => {  
      e.preventDefault()  
      if (!input.value.trim()) {  
        return  
      }  
      
      var abc = "av";
      var abc = "ab";
      let sx = "nv";
      const sxv = "tab";
      const data = {
    		    "name": "Marie Kondo",
    		    "code": "4444",
    		    "book": {
    		        "name": input.value,
    		        "author": "Marie Kondo",
    		        "price": 2
    		    }
      }
      axios.post(API, data)
        .then(result => {
        	 console.log(' Returned data:', result)
        })
        .catch(error => {
        	 console.log('Axios request failed: ${e}')
        });
      
      dispatch(addTodo(input.value))  
      input.value = ''   
  }
  return (  
    <div>  
      <form onSubmit={handleSubmit}>  
        <input ref={node => input = node} />  
        <button type="submit">  
          Add Todo  
        </button>  
      </form>  
    </div>  
  )  
}  
export default connect()(AddTodo) 