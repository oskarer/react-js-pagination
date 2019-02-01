"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Page=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,_react.Component),_createClass(t,[{key:"handleClick",value:function(e){var t=this.props,r=t.isDisabled,n=t.pageNumber,a=t.onClick;if(a){if(e.preventDefault(),r)return;a(n)}}},{key:"render",value:function(){var e,t=this.props,r=t.pageText,n=(t.pageNumber,t.activeClass),a=t.itemClass,i=t.linkClass,s=t.activeLinkClass,o=t.disabledClass,l=t.isActive,c=t.isDisabled,u=(t.href,t.linkElement),p=t.linkProps,f=(0,_classnames2.default)(a,(_defineProperty(e={},n,l),_defineProperty(e,o,c),e)),_=(0,_classnames2.default)(i,_defineProperty({},s,l));return _react2.default.createElement("li",{className:f,onClick:this.handleClick.bind(this)},_react2.default.createElement(u,Object.assign({},p,{className:_}),r))}}]),t}();Page.defaultProps={onClick:void 0,activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"},exports.default=Page;