import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Motion, spring } from 'react-motion';
import Controls from 'components/blottingPaper/Controls';

import imgCircle from './img/circle.svg';
import imgCircleOutline from './img/circle-outline.svg';

class Graphics extends Component {
  // (!Number.isInteger(solution.volume))?solution.volume.toFixed(2):
  render(){
    return(
      <div className={'graphics BlottingPaper'}>
        <ul>
          {this.props.solutions.map((solution, index)=>(
            <li className='dropTarget'
                key={index}
                style={{marginTop: '-30px', paddingTop: '30px'}}
                id={'BlottingPaper_'+this.props.id+'_'+solution.id}>
              <p className='zone-label index'>{solution.id}</p>
              <div tabIndex={0} className="indicator">
                <img
                  className={"result"+solution.id}
                  style={{ pointerEvents: "none", width: ((solution.volume / solution.maxVol) * 100)+'%' }}
                  src={imgCircle}
                  aria-label={this.props.type +' '+ solution.id}
                />
              </div>
              <p className='zone-label volume'>{(Math.round( solution.volume * 10 ) / 10).toFixed(1)}μl</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        solutions: state.blotPaper.blotPapers[ownProps.id-1].solutions,
        type: state.blotPaper.blotPapers[ownProps.id-1].type
    };
};

export default connect(mapStateToProps)(Graphics);
