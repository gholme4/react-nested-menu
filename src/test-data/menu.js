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
        id: 3,
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
    }
];

export default menu;
