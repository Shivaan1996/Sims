import React, { Component } from 'react'
import { connect } from 'react-redux'
import FocusLock from 'react-focus-lock'
import {
    notebookSection,
    notebookPopout,
    setTotalProtocolPages,
    toggleNotebookExpanded
} from '../../actions';
import NotebookSection from './notebookSection/NotebookSection'
import ProtocolView from './protocolView/ProtocolView'
import './Notebook.scss'

import NotebookIcon from './img/notebook-icon.svg'
import NotebookIconHover from './img/notebook-icon-hover.svg'
import NotebookIconCollapse from './img/notebook-icon-collapse.svg'

const sections = [
    "Context",
    "Materials",
    "Predictions",
    "Protocol",
    "Results",
    "Reflection",
    "Summary",
]

//This component coordinates all the Notebook logic and data flow
class Notebook extends Component {

  constructor(props) {
      super(props);

      this.state = {
        notebookIconHover: false
      }
  }

    onSectionSelect = (section) => {
        console.log(section);
        if (section.section !== "Protocol") {

            if(section.section === this.props.sectionSelected){
                this.props.notebookPopout(!this.props.sliderOpen)
            } else {

                if(this.props.sectionSelected === false || this.props.sectionSelected === null){
                    this.props.notebookPopout(!this.props.sliderOpen)
                }
            }
        } else if (section.section === "Protocol") {

          //Setting total pages in prep for rendering Protocol View
          if(this.props.taskPages.length > 0){
              this.props.setTotalProtocolPages(this.props.taskPages.length)
          }

          this.props.notebookPopout(false)
        }
        // Open the collapse
        this.props.notebookSection(section);

        // If the section is the currently open section
        if(section.section === this.props.sectionSelected){
            // Close the collapse
            this.props.notebookSection({section: false});
        }
    }

    //Render list first - then protocol if clicked
    renderSectionList = () => {
        return sections.map((text, index) => (
            <NotebookSection
                text={text}
                onSelect={this.onSectionSelect}
                focused={text === this.props.sectionSelected}
                key={text}
                index={index + 1}/>
        ))
    }

    renderProtocolView = () => {
        return (
            <ProtocolView
              key={1}
              tasks={this.props.taskPages}
              index={3}/>
        )
    }


    openSlider = () => {
        this.props.notebookPopout(!this.props.sliderOpen)
    }

    toggleExpanded = (e) => {
      this.props.toggleNotebookExpanded()
    }

    render() {
        return (
            <div tabIndex={-1} id='notebook'
              tabIndex={-1} className={((this.props.sliderOpen)?'open':'closed') +' '+ ((this.props.notebookExpanded)?'expanded':'')}>
              <div id='notebook-head'>
                <img
                src={(this.props.notebookExpanded)?(this.state.notebookIconHover)?NotebookIconHover:NotebookIcon:NotebookIconCollapse}
                className="notebook-icon"
                onClick={(e)=>{ this.toggleExpanded(e) }}
                onMouseEnter={() => {
                  this.setState({
                    notebookIconHover: true
                  })
                }}

                onMouseOut={() => {
                  this.setState({
                    notebookIconHover: false
                  })
                }}/>
                    <h6 tabIndex={-1} aria-label= "Lab notebook section heading." id='notebook-title'>Lab Notebook</h6>
                    <h5 id='notebook-sub-title'>Using a micropipette</h5>
                </div>
                <div tabIndex={-1} className='notebook-body'>
                  {/* <FocusLock disabled={this.props.sectionSelected == 'Protocol' || this.props.modalVisible}> */}
                    {(this.props.sectionSelected==="Protocol")?this.renderProtocolView():this.renderSectionList()}
                  {/* </FocusLock> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sectionSelected: state.notebook.sectionSelected,
        sliderOpen: state.notebook.sliderOpen,
        taskPages: state.notebook.taskPages,
        modalVisible: state.modal.display,
        notebookExpanded: state.scene.notebookExpanded,
    }
}

export default connect(mapStateToProps, {
    notebookSection,
    notebookPopout,
    setTotalProtocolPages,
    toggleNotebookExpanded
})(Notebook);
