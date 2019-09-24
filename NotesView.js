import React, { Component } from "react"
import { connect } from 'react-redux'
import { Collapse } from 'react-collapse'
import FocusLock from 'react-focus-lock'

import {
    notebookSection,
    incProtocolPage,
    decProtocolPage,
    goProtocolPage,
    setPageInstructions,
    toggleNotesView
} from '../../../actions'

// Styles
import colors from 'styles/_colors.scss';
import "./NotesView.scss"

//Icons
import IconNotebook from 'components/icons/notebook-solid';
import IconHexagon from 'components/icons/hexagon-solid';
import IconStart from 'components/icons/start-solid';

class NotesView extends Component {

    renderNotes = () => {

      const currentPage = this.props.currentPage
      //Return list of tasks for rendering
      let noteCounter = 0;
      let notes = (this.props.tasks.map((page, pageIndex)=>{
        if(pageIndex != 0){
            return (<div className="notes-list">
              {page.tasks.map((task, taskIndex)=>{
                let innerCounter = 0;
                let taskComp = (<div>
                  <p className="note-task">{pageIndex+'.'+String.fromCharCode(97 + taskIndex)+' '+task.levels['l'+this.props.level].task}</p>
                  <div>
                    {task.notes.map((note, noteIndex)=>{
                      innerCounter++
                      noteCounter++
                      return (<p className="note-text">{note}</p>)
                    })}
                  </div>
                </div>)

                if(innerCounter > 0){
                  return taskComp
                }
              })}
            </div>)
          }
      }))

      console.log(notes, noteCounter);

      if(noteCounter > 0){
        return notes
      } else {
        return (
            <p className="notes-list">
              No notes found
            </p>
        )
      }
    }

    hideNotesView = () => {
      this.props.toggleNotesView(false);
    }


    render() {
        return (
          <Collapse
            isOpened={this.props.notesView}
            theme={{ collapse: 'notes-collapse', content: 'notes-content' }}
            fixedHeight={(window.innerHeight - 100)}>
              <div className="notes-view">
                <div className="notes-head">
                  <div className="back-button">
                    <span>{"< "}</span><button className="back-to-protocol" onClick={this.hideNotesView}>Back to Protocol</button>
                  </div>
                  <h3>
                    <IconNotebook
                      style={{ color: "white", height: "20px", top: "2px"}}
                    /> Notes
                  </h3>
                </div>
                <div className="notes-body">
                  {this.renderNotes()}
                </div>
              </div>
          </Collapse>
        );
    }
}


NotesView.defaultProps = {
    tasks: []
};

const mapStateToProps = (state, ownProps) => {
    return {
        sectionSelected: state.notebook.sectionSelected,
        currentPage: state.notebook.currentProtocolPage,
        totalPages: state.notebook.totalProtocolPages,
        pageInstructions: state.notebook.currentPageInstructions,
        focusedTask: state.notebook.focusedTask,
        tasks: state.notebook.taskPages,
        level: state.notebook.level,
        notesView: state.notebook.notesView
    }
}

export default connect(mapStateToProps, {
    notebookSection,
    incProtocolPage,
    decProtocolPage,
    goProtocolPage,
    setPageInstructions,
    toggleNotesView
})(NotesView);
