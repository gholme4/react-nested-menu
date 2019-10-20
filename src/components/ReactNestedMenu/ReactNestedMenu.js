import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

class ReactNestedMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { menu: null };
        this.isTopLevelParent = true;
    }

    componentDidMount() {
        const menu = this.buildMenu(this.props.menuData);
        this.setState({ menu: menu });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.isTopLevelParent = true;
        const menu = this.buildMenu(nextProps.menuData);
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
        let parentClassname  = null;
        if (this.isTopLevelParent)
        {
            parentClassname = `${this.props.navTopLevelParentClassname}`;
            this.isTopLevelParent = false;
        }
        else
        {
            parentClassname = `${this.props.navParentClassname}`;
        }

        const childMenuItems = menuData.map((el) => {


            const ChildTag = `${this.props.navChildElement}`;
            const childChildren = (
                <ChildTag className={this.props.navChildClassname} key={el[this.props.arrayKey] ? el[this.props.arrayKey] : uid(15)}>
                    { this.linkTransformer(el) }
                    { el[this.props.childMenuProperty] ? this.buildMenu(el[this.props.childMenuProperty]) : null }
                </ChildTag>
            );

            return childChildren;
        });

        const ParentTag = `${this.props.navParentElement}`;

        return (
            <ParentTag className={parentClassname}>
                { childMenuItems }
            </ParentTag>
        );


    }

    render() {
        return this.state.menu
    }
}


ReactNestedMenu.propTypes = {

    navParentElement: PropTypes.string,
    navChildElement: PropTypes.string,
    navParentClassname: PropTypes.string,
    navTopLevelParentClassname: PropTypes.string,
    navChildClassname: PropTypes.string,
    childMenuProperty: PropTypes.string,
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
    navTopLevelParentClassname: '',
    navChildClassname: '',
    navUrlProperty: 'url',
    childMenuProperty: 'children',
    navTitleProperty: 'title',
    arrayKey: 'id'
};

export default ReactNestedMenu;
