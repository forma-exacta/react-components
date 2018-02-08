"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mediumTooltipLimit = 50;

var calculateTooltipSize = function calculateTooltipSize(content) {
  return mediumTooltipLimit < content.length ? "medium" : "default";
};

var Tooltip = function (_ThemedComponent) {
  (0, _inherits3.default)(Tooltip, _ThemedComponent);

  function Tooltip(props, context) {
    (0, _classCallCheck3.default)(this, Tooltip);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Tooltip",
      styles: _styles2.default
    }));
  }

  Tooltip.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        left = _props.left,
        top = _props.top,
        children = _props.children,
        position = _props.position,
        inline = _props.inline,
        size = _props.size;
    var theme = this.theme;


    var resolvedSize = size || typeof children === "string" && calculateTooltipSize(children) || "default";

    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.container, (_classNames = {}, _classNames[theme.inline] = inline, _classNames)),
        style: { left: left, top: top }
      },
      _react2.default.createElement(
        _View2.default,
        {
          className: (0, _classnames2.default)(theme.tooltip, theme[position], theme["size_" + resolvedSize])
        },
        children
      )
    );
  };

  return Tooltip;
}(_ThemedComponent3.default);

Tooltip.propTypes = {
  children: _propTypes2.default.node,
  inline: _propTypes2.default.bool,
  left: _propTypes2.default.number,
  /** For displaying a plain, independent tooltip  */
  position: _propTypes2.default.oneOf(["top", "bottom", "left", "right"]),
  size: _propTypes2.default.oneOf(["default", "medium", "large"]),
  top: _propTypes2.default.number
};
Tooltip.defaultProps = {
  top: 0,
  left: 0,
  position: "top",
  inline: false
};
exports.default = Tooltip;