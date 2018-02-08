import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../View";
import styles from "./styles.css";

export default class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    /** Hiding advanced content within tooltips may have accessibility impacts */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** One of: 'top', 'right', 'bottom', 'left' or as array (prioritization) */
    tooltipPositioning: () => {}
  };

  render() {
    const {
      children,
      className,
      onClick,
      tabIndex,
      testId,
      title,
      tooltipPositioning,
      ...others
    } = this.props;

    return (
      <View
        className={classNames(className, styles.container)}
        testId={testId}
        onClick={onClick}
        tabIndex={tabIndex}
        title={title}
        tooltipPositioning={tooltipPositioning}
        {...others}
      >
        {children}
      </View>
    );
  }
}