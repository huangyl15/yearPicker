# yearPicker
结合antd中的DatePicker组件封装的年份选择


结合ant design提供的DatePicker组件，封装一个单独的仅选择年份的时间选择

// 调用方式：

<YearPicker
   value={this.state.yearValue}
   placeholder="选择年份"
   onChange={this.onOptionChange}
/>

//onchange回调方法：
//selectA改变的回调

onOptionChange = value => {
  //console.log(value);
  this.setState({
    yearValue:value
  });
};
