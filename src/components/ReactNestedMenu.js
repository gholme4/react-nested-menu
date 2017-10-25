import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactNestedMenu extends Component {

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    buildMenu = (menuData) => {


    }

    render() {
        return (
            <div>

            </div>
        );
    }
}


ReactNestedMenu.propTypes = {

    navParentElement: PropTypes.string,
    navChildElement: PropTypes.string,
    navParentClassname: PropTypes.string,
    navChildClassname: PropTypes.string,
    arrayKey: PropsTypes.string,
    linkTransformer: PropTypes.func
};

export default ReactNestedMenu;
