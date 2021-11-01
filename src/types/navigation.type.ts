export type NavigationType = {
    id: number;
    name: string;
    href: string;
    icon: string;
}

export type NavigationAppType = {
    title: string;
    image: string;
    description: string;
    items: NavigationType[];
}

export type NavigationEventType = {
    id: number;
    name: string;
    image: string;
    description: string;
}