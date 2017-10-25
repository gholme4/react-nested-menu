'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uid = require('uid');

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactNestedMenu = function (_Component) {
    _inherits(ReactNestedMenu, _Component);

    function ReactNestedMenu(props) {
        _classCallCheck(this, ReactNestedMenu);

        var _this = _possibleConstructorReturn(this, (ReactNestedMenu.__proto__ || Object.getPrototypeOf(ReactNestedMenu)).call(this, props));

        _this.linkTransformer = function (navItem) {
            if (_this.props.linkTransformer) {
                return _this.props.linkTransformer(navItem);
            } else {
                var navItemEl = _react2.default.createElement(
                    'a',
                    { href: navItem[_this.props.navUrlProperty] },
                    ' ',
                    navItem[_this.props.navTitleProperty],
                    ' '
                );

                return navItemEl;
            }
        };

        _this.buildMenu = function (menuData) {
            var parentClassname = null;
            if (_this.isTopLevelParent) {
                parentClassname = '' + _this.props.navTopLevelParentClassname;
                _this.isTopLevelParent = false;
            } else {
                parentClassname = '' + _this.props.navParentClassname;
            }

            var childMenuItems = menuData.map(function (el) {

                var ChildTag = '' + _this.props.navChildElement;
                var childChildren = _react2.default.createElement(
                    ChildTag,
                    { className: _this.props.navChildClassnam, key: el[_this.props.arrayKey] ? el[_this.props.arrayKey] : (0, _uid2.default)(15) },
                    _this.linkTransformer(el),
                    el[_this.props.childMenuProperty] ? _this.buildMenu(el[_this.props.childMenuProperty]) : null
                );

                return childChildren;
            });

            var ParentTag = '' + _this.props.navParentElement;

            return _react2.default.createElement(
                ParentTag,
                { className: parentClassname },
                childMenuItems
            );
        };

        _this.state = { menu: null };
        _this.isTopLevelParent = true;
        return _this;
    }

    _createClass(ReactNestedMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var menu = this.buildMenu(this.props.menuData);
            this.setState({ menu: menu });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var menu = this.buildMenu(this.nextProps.menuData);
            this.setState({ menu: menu });
            this.isTopLevelParent = true;
        }
    }, {
        key: 'render',
        value: function render() {
            return this.state.menu;
        }
    }]);

    return ReactNestedMenu;
}(_react.Component);

ReactNestedMenu.propTypes = {

    navParentElement: _propTypes2.default.string,
    navChildElement: _propTypes2.default.string,
    navParentClassname: _propTypes2.default.string,
    navTopLevelParentClassname: _propTypes2.default.string,
    navChildClassname: _propTypes2.default.string,
    childMenuProperty: _propTypes2.default.string,
    navUrlProperty: _propTypes2.default.string,
    navTitleProperty: _propTypes2.default.string,
    arrayKey: _propTypes2.default.string,
    linkTransformer: _propTypes2.default.func,
    menuData: _propTypes2.default.array.isRequired
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

exports.default = ReactNestedMenu;