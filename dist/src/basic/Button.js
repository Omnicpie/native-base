Object.defineProperty(exports,"__esModule",{value:true});exports.Button=undefined;var _jsxFileName='src/basic/Button.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');var _platform=require('../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);var _commonColor=require('../theme/variables/commonColor');var _computeProps=require('../utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);var _mapPropsToStyleNames=require('../utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);var _Text=require('./Text');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Button=function(_Component){_inherits(Button,_Component);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'getInitialStyle',value:function getInitialStyle(){return{borderedBtn:{borderWidth:this.props.bordered?_platform2.default.buttonDefaultBorderWidth:undefined,borderRadius:this.props.rounded&&this.props.bordered?_platform2.default.borderRadiusLarge:_platform2.default.buttonDefaultBorderRadius}};}},{key:'prepareRootProps',value:function prepareRootProps(){var defaultProps={style:this.getInitialStyle().borderedBtn};if(Array.isArray(this.props.style)){var flattenedStyle=this.props.style.reduce(function(accumulator,currentValue){return accumulator.concat(currentValue);},[]);return(0,_computeProps2.default)(_extends({},this.props,{style:flattenedStyle}),defaultProps);}return(0,_computeProps2.default)(this.props,defaultProps);}},{key:'render',value:function render(){var _this2=this;var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform2.default;var children=_reactNative.Platform.OS===_commonColor.PLATFORM.IOS?this.props.children:_react2.default.Children.map(this.props.children,function(child){return child&&child.type===_Text.Text?_react2.default.cloneElement(child,_extends({uppercase:_this2.props.buttonUppercaseAndroidText===false?false:variables.buttonUppercaseAndroidText},child.props)):child;});if(_reactNative.Platform.OS===_commonColor.PLATFORM.IOS||_reactNative.Platform.OS===_commonColor.PLATFORM.WEB||variables.androidRipple===false||_reactNative.Platform.Version<21){return _react2.default.createElement(_reactNative.TouchableOpacity,_extends({},this.prepareRootProps(),{ref:function ref(c){return _this2._root=c;},activeOpacity:this.props.activeOpacity>0?this.props.activeOpacity:_platform2.default.buttonDefaultActiveOpacity,__source:{fileName:_jsxFileName,lineNumber:82}}),children);}if(this.props.rounded){var buttonStyle=_extends({},this.prepareRootProps().style);var buttonFlex=this.props.full||this.props.block?_platform2.default.buttonDefaultFlex:buttonStyle.flex;return _react2.default.createElement(_reactNative.View,{style:[{maxHeight:buttonStyle.height},buttonStyle,{paddingTop:undefined,paddingBottom:undefined}],__source:{fileName:_jsxFileName,lineNumber:102}},_react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({ref:function ref(c){return _this2._root=c;},background:_reactNative.TouchableNativeFeedback.Ripple(this.props.androidRippleColor||variables.androidRippleColor,true)},this.prepareRootProps(),{__source:{fileName:_jsxFileName,lineNumber:109}}),_react2.default.createElement(_reactNative.View,{style:[styles.childContainer,{paddingTop:buttonStyle.paddingTop,paddingBottom:buttonStyle.paddingBottom,height:buttonStyle.height,flexGrow:buttonFlex}],__source:{fileName:_jsxFileName,lineNumber:117}},children)));}return _react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({ref:function ref(c){return _this2._root=c;},onPress:this.props.onPress,background:this.props.transparent?_reactNative.TouchableNativeFeedback.Ripple('transparent'):_reactNative.TouchableNativeFeedback.Ripple(variables.androidRippleColor,false)},this.prepareRootProps(),{__source:{fileName:_jsxFileName,lineNumber:136}}),_react2.default.createElement(_reactNative.View,_extends({},this.prepareRootProps(),{__source:{fileName:_jsxFileName,lineNumber:149}}),children));}}]);return Button;}(_react.Component);Button.contextTypes={theme:_propTypes2.default.object};Button.propTypes=_extends({},_reactNative.TouchableOpacity.propTypes,{style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),block:_propTypes2.default.bool,primary:_propTypes2.default.bool,transparent:_propTypes2.default.bool,success:_propTypes2.default.bool,danger:_propTypes2.default.bool,warning:_propTypes2.default.bool,info:_propTypes2.default.bool,bordered:_propTypes2.default.bool,disabled:_propTypes2.default.bool,rounded:_propTypes2.default.bool,large:_propTypes2.default.bool,small:_propTypes2.default.bool,active:_propTypes2.default.bool});var styles=_reactNative.StyleSheet.create({childContainer:{flexShrink:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}});var StyledButton=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.Button',{},_mapPropsToStyleNames2.default)(Button);exports.Button=StyledButton;
//# sourceMappingURL=Button.js.map