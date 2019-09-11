import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from 'actions'
import requireAuth from 'components/requireAuth'

class CommentBox extends Component {

    state = { comment: '' }

    handleChange = e => {
        this.setState({ comment: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ comment: ''})
        
        this.props.saveComment(this.state.comment)
        // call action creator of saving
    }
  
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Please add your comment</h4>
                    <textarea type='text' onChange={this.handleChange} value={this.state.comment}>
                    </textarea>
                    <div>
                        <button type='submit'>
                            Submit comment
                        </button>
                    </div>
                </form>
                <button id='fetch-comments-button' type='button' onClick={this.props.fetchComments}>
                    Fetch comments
                </button>
            </div>
        )
    }
}

export default connect(null, actions)(requireAuth(CommentBox)) // mapstateToProps, actioncreators
/* I'll learn hook testing later, I promise

    const [comment, setComment] = useState('')
    const [submit, setSubmit] = useState('')
  
    return (
        <div>
            <form>
                <h4>Please add your comment</h4>
                <input type='text' onChange={e => setComment(e.target.value)} value={comment} />
                <div>
                    <button 
                        type='submit' 
                        onSubmit={ e => { 
                            e.preventDefault() 
                            setComment('')
                        }}
                    >Submit comment</button>
                </div>
            </form>
        </div>
    )
*/