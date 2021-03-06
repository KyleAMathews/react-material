/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactStyle = require('react-style');

var ProgressBar = React.createClass({

  normalStyle: ReactStyle(function(){
    return {
      backgroundColor: '#c8c8c8',
      height: '4px',
      position: 'relative'
    };
  }),

  progressStyle: ReactStyle(function(){
    return {
      bottom: 0,
      left: 0,
      position: 'absolute',
      top: 0,
      transition: 'width .65s linear'
    };
  }),

  propTypes: {
    percentage: React.PropTypes.number.isRequired
  },

  render: function() {
    var props = this.props;
    var state = this.state;
    var progressBarStyles = [this.progressStyle()];
    progressBarStyles.push({width: props.percentage + '%'});
    if (props.styles) {
      progressBarStyles = progressBarStyles.concat(props.styles);
    }
    return <div ref="bar" styles={this.normalStyle()}>
        <div styles={progressBarStyles} />
      </div>
  }

});

module.exports = ProgressBar;