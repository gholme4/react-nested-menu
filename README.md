# React Nested Menu

React JS component for rendering nested navigation menus

#### [Example](https://github.com/gholme4/react-nested-menu/tree/master/example)

### Installation

```
npm install react-nested-menu --save
```

### Usage

React Nested Menu renders HTML of a multi-level navigation menu. The structure of the menu is generated from an array of objects
```
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ReactNestedMenu } from 'react-nested-menu';


class App extends Component {
    linkTransformer = (menuItem) => {

        return (
            <Link to={menuItem.url}>{ menuItem.title }</Link>
        )
    }

    render() {

        const menu = [
            {
                id: 1,
                title: "Home",
                url: "/"
            },
            {
                id: 2,
                title: "About Us",
                url: "/about-us"
            },
            {
                title: "Team",
                url: "/team",
                children: [
                    {
                        id: 8,
                        title: "Tim Drake",
                        url: "/tim-drake"
                    },
                    {
                        id: 9,
                        title: "Jason Todd",
                        url: "/jason-todd"
                    },
                    {
                        id: 10,
                        title: "Richard Grayson",
                        url: "/richard-grayson"
                    }
                ]
            },
            {
                title: "Services",
                url: "/services",
                children: [
                    {
                        id: 5,
                        title: "Web Development",
                        url: "/web-development"
                    },
                    {
                        id: 6,
                        title: "UI Design",
                        url: "/ui-design"
                    },
                    {
                        id: 7,
                        title: "Copywriting",
                        url: "/copywriting"
                    }
                ]
            },
            {
                id: 4,
                title: "Contact",
                url: "/contact"
            },
            {
                title: "Social",
                url: "/social",
                children: [
                    {
                        id: 11,
                        title: "Twitter",
                        url: "/twitter"
                    },
                    {
                        id: 12,
                        title: "Facebook",
                        url: "/facebook"
                    }
                ]
            },
        ];

        return (
            <div className="App">
                <ReactNestedMenu
                    navParentClassname="vertical menu nested"
                    navTopLevelParentClassname="vertical menu"
                    navChildClassname="child"
                    linkTransformer={this.linkTransformer}
                    menuData={menu}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### Props

- **navParentElement**: HTML tag name of elements that wrap nav menu elements
  - type: `string`
  - default: `ul`
- **navChildElement**: HTML tag name of elements wrapped by parent elements
  - type: `string`
  - default: `li`
- **navParentClassname**: class of nav parent elements
  - type: `string`
- **navTopLevelParentClassname**: class of top level nav parent elements
  - type: `string`
- **navChildClassname**: class of nav child elements
  - type: `string`
- **navUrlProperty**: the key name to use as the href attribute of the anchor tags
  - type: `string`
  - default: `url`
- **navTitleProperty**: the key name to use as the title wrapped by the anchor tags
  - type: `string`
  - default: `title`
- **childMenuProperty**: the key name of the array of child nav items
    - type: `string`
    - default: `children`
- **arrayKey**: the key to use as the key attribute in React array elements
  - type: `string`
  - default: `id`
- **linkTransformer**: function that accepts an object in the `menuData` array and returns a React element; this can be used to render something besides an anchor tag such as a React Router `Link` element
  - type: `function`
- **menuData**: an array of objects
  - type: `array`
