"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uid = _interopRequireDefault(require("uid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ReactNestedMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactNestedMenu, _Component);

  function ReactNestedMenu(props) {
    var _this;

    _classCallCheck(this, ReactNestedMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactNestedMenu).call(this, props));

    _this.linkTransformer = function (navItem) {
      if (_this.props.linkTransformer) {
        return _this.props.linkTransformer(navItem);
      } else {
        var navItemEl = _react.default.createElement("a", {
          href: navItem[_this.props.navUrlProperty]
        }, " ", navItem[_this.props.navTitleProperty], " ");

        return navItemEl;
      }
    };

    _this.buildMenu = function (menuData) {
      var parentClassname = null;

      if (_this.isTopLevelParent) {
        parentClassname = "".concat(_this.props.navTopLevelParentClassname);
        _this.isTopLevelParent = false;
      } else {
        parentClassname = "".concat(_this.props.navParentClassname);
      }

      var childMenuItems = menuData.map(function (el) {
        var ChildTag = "".concat(_this.props.navChildElement);

        var childChildren = _react.default.createElement(ChildTag, {
          className: _this.props.navChildClassname,
          key: el[_this.props.arrayKey] ? el[_this.props.arrayKey] : (0, _uid.default)(15)
        }, _this.linkTransformer(el), el[_this.props.childMenuProperty] ? _this.buildMenu(el[_this.props.childMenuProperty]) : null);

        return childChildren;
      });
      var ParentTag = "".concat(_this.props.navParentElement);
      return _react.default.createElement(ParentTag, {
        className: parentClassname
      }, childMenuItems);
    };

    _this.state = {
      menu: null
    };
    _this.isTopLevelParent = true;
    return _this;
  }

  _createClass(ReactNestedMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var menu = this.buildMenu(this.props.menuData);
      this.setState({
        menu: menu
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.isTopLevelParent = true;
      var menu = this.buildMenu(nextProps.menuData);
      this.setState({
        menu: menu
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.menu;
    }
  }]);

  return ReactNestedMenu;
}(_react.Component);

ReactNestedMenu.propTypes = {
  navParentElement: _propTypes.default.string,
  navChildElement: _propTypes.default.string,
  navParentClassname: _propTypes.default.string,
  navTopLevelParentClassname: _propTypes.default.string,
  navChildClassname: _propTypes.default.string,
  childMenuProperty: _propTypes.default.string,
  navUrlProperty: _propTypes.default.string,
  navTitleProperty: _propTypes.default.string,
  arrayKey: _propTypes.default.string,
  linkTransformer: _propTypes.default.func,
  menuData: _propTypes.default.array.isRequired
};
ReactNestedMenu.defaultProps = {
  navParentElement: 'ul',
  navChildElement: 'li',
  navParentClassname: '',
  navTopLevelParentClassname: '',
  navChildClassname: '',
  navUrlProperty: 'url',
  childMenuProperty: 'children',
  navTitleProperty: 'title',
  arrayKey: 'id'
};
var _default = ReactNestedMenu;
exports.default = _default;