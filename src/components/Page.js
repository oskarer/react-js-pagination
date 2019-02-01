import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class Page extends Component {
    static propTypes = {
        pageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        pageNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func,
        isActive: PropTypes.bool.isRequired,
        isDisabled: PropTypes.bool,
        activeClass: PropTypes.string,
        activeLinkClass: PropTypes.string,
        itemClass: PropTypes.string,
        linkClass: PropTypes.string,
        disabledClass: PropTypes.string,
        href: PropTypes.string,
        linkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        linkProps: PropTypes.object.isRequired,
    };

    static defaultProps = {
        onClick: undefined,
        activeClass: "active",
        disabledClass: "disabled",
        itemClass: undefined,
        linkClass: undefined,
        activeLinkCLass: undefined,
        isActive: false,
        isDisabled: false,
        href: "#"
    };

    handleClick(e) {
        const { isDisabled, pageNumber, onClick } = this.props;
        if (onClick) {
          e.preventDefault();
          if (isDisabled) {
            return;
          }
          onClick(pageNumber);
        }
    }

    render() {
        let {
            pageText,
            pageNumber,
            activeClass,
            itemClass,
            linkClass,
            activeLinkClass,
            disabledClass,
            isActive,
            isDisabled,
            href,
            linkElement,
            linkProps,
        } = this.props;

        const css = cx(itemClass, {
            [activeClass]: isActive,
            [disabledClass]: isDisabled
        });

        const linkCss = cx(linkClass, {
            [activeLinkClass]: isActive
        });

        return (
            <li className={css} onClick={::this.handleClick}>
              {React.createElement(
                linkElement,
                Object.assign({}, linkProps, { className: linkCss }),
                pageText,
              )}
            </li>
        );
    }
}
