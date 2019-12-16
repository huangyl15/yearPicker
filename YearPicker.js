import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

class YearPicker extends Component {
  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {})
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    const value = props.value;
    // console.log('年份选择', value, props);
    this.state = {
      open: false
    };
  }
  triggerChange = changedValue => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(changedValue);
    }
  };
  changeRender = v => {
    // console.log("changeRender_v.m", v);
    this.setState(
      {
        open: false
      },
      () => this.triggerChange(moment(v).format('YYYY'))
    );
  };
  clearValue = () => {
    this.triggerChange();
  };



  setOpenState = () => {
    this.setState({
      open: !this.state.open
    });
  };

  componentDidMount = () => {
  };

  render() {
    const { open } = this.state;
    const { value, style } = this.props;

    return (
      <DatePicker
        mode="year"
        format="YYYY"
        placeholder={this.props.placeholder}
        value={value ? moment(value) : null}
        onPanelChange={this.changeRender}
        onOpenChange={this.setOpenState}
        onChange={this.clearValue} //点击清除按钮的回调
        open={open}
        style={{ ...style }}
      />
    );
  }
}

export default YearPicker;



//调用方式：

// <YearPicker
//      value={this.state.yearValue}
//      placeholder="选择年份"
//      onChange={this.onOptionChange}
// />
// 
// 
// onchange回调方法：

// selectA改变的回调
  // onOptionChange = value => {
  //   //console.log(value);
  //   this.setState({
  //     yearValue:value
  //   });
  // };
  // 