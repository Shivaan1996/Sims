import React, { Component } from 'react'
import Graphics from 'components/blottingPaper/Graphics';


import './BlottingPaper.scss';
import imgCircle from './img/circle.svg'

import {incPrediction,decPrediction} from '../../actions';

class BlottingPaper extends Component {

    increacsePrediction = () =>{
        this.props.incPrediction({id: this.props.id, incPrediction: true})
    }
    render()
    {
        return (
          <ul>
            <li
              style={{marginTop: '-30px', paddingTop: '30px'}}
              aria-label = "White sheet with four sections (labeled A, B, C, D)."
                tabIndex={0}
                className='BlottingPaper'>
                <p className="label">Blotting Paper</p>
                <Graphics id={this.props.id} />
            </li>
          </ul>
        )
    }
}

export default (BlottingPaper);
