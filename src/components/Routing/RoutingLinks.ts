export interface RoutingLinks {
    id: number,
    route: string,
    displayName: any;
}

// routing links
export const routes: RoutingLinks[] = [
    // Home
    {
        id: 1,
        route: "/",
        displayName: "Home",
    },
    // Mission
    {
        id: 2,
        route: "/mission",
        displayName: "Mission",
    },
    // Camps
    {
        id: 3,
        route: "/camps",
        displayName: "Camps",
    },
    // Articles
    {
        id: 4,
        route: "/articles",
        displayName: "Articles",
    },
    // Contact
    {
        id: 5,
        route: "/contact",
        displayName: "Contact",
    },
    // Donate
    {
        id: 6,
        route: "https://www.zeffy.com/en-US/donation-form/791156d3-0d63-4a93-ba26-46047892fb7a?_gl=1*opugvz*_up*MQ..",
        displayName: "Donate"
    }
];