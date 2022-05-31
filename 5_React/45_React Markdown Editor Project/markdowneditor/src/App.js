import React from 'react';
import {Remarkable} from 'remarkable';

class MarkdownEditor extends React.Component{
  // constructor
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: 'Type something here !!'
    }
  }

  //handle change
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  // get raw markup
  getRawMarkup() {
    const md = new Remarkable()

    return { __html: md.render(this.state.value) }
  }

  // render
  render(){
    return (
      <div>
        <div>
          <h3>Markdown Input</h3>
          <textarea 
            onChange={this.handleChange}
            defaultValue={this.state.value}      
          />
        </div>
        <div>
          <h3>Markdown Output</h3>
          <div 
            dangerouslySetInnerHTML={this.getRawMarkup()}
          >

          </div>
        </div>
      </div>
    )
  }
}

export default MarkdownEditor;
