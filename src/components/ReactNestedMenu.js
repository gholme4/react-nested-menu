import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

class ReactNestedMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { menu: null };
    }

    componentDidMount() {
        const menu = this.buildMenu(this.props.menuData);
        this.setState({ menu: menu });
    }

    componentWillReceiveProps(nextProps) {
        const menu = this.buildMenu(this.nextProps.menuData);
        this.setState({ menu: menu });
    }

    linkTransformer = (navItem) => {
        if (this.props.linkTransformer)
        {
            return this.props.linkTransformer(navItem);
        }
        else
        {
            const navItemEl = (
                <a href={navItem[this.props.navUrlProperty]}> {navItem[this.props.navTitleProperty]} </a>
            );

            return navItemEl;
        }

    }

    buildMenu = (menuData) => {
        const parentEl = React.createFactory(this.props.navParentElement);
        const childMenuItems = menuData.map((el) => {
            return (
                <li key={el[this.props.arrayKey] ? el[this.props.arrayKey] : uid(15)} className={this.props.navChildClassname}>
                    { this.linkTransformer(el) }
                    { el.children ? this.buildMenu(el.children) : null }
                </li>
            );
        });

        const reactParentEl = parentEl({ className: this.props.navParentClassname}, childMenuItems);

        return reactParentEl;

    }

    render() {
        return this.state.menu
    }
}


ReactNestedMenu.propTypes = {

    navParentElement: PropTypes.string,
    navChildElement: PropTypes.string,
    navParentClassname: PropTypes.string,
    navChildClassname: PropTypes.string,
    navUrlProperty: PropTypes.string,
    navTitleProperty: PropTypes.string,
    arrayKey: PropTypes.string,
    linkTransformer: PropTypes.func,
    menuData: PropTypes.array.isRequired
};

ReactNestedMenu.defaultProps = {
    navParentElement: 'ul',
    navChildElement: 'li',
    navParentClassname: '',
    navChildClassname: '',
    navUrlProperty: 'url',
    navTitleProperty: 'title',
    arrayKey: 'id'
};

export default ReactNestedMenu;
