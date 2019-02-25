import React, { Component } from 'react';
import './write.scss';
import Navbar from '../../components/Navbar/navbar';
import ReactMarkdown from 'react-markdown';

class Write extends Component {
  constructor() {
    super();
    this.state = {
      input: '# This is a header\n\nAnd this is a paragraph'
    }
  }

  changeInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  savePost() {
    
  }

  render() {
    const { input } = this.state;

    return (
      <div>
        <Navbar />
        <div className="write-container">
          <div className="write">
            <textarea onChange={this.changeInput.bind(this)} value={input} />
          </div>
          <div className="preview">
            <ReactMarkdown source={input} escapeHtml={false}/>
          </div>
        </div>
        <button onClick={this.savePost}>保存</button>
      </div>
    );
  }
}


export default Write;