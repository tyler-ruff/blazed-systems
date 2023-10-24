export interface Social {
    facebook?: string;
    instagram?: string;
    github?: string;
    twitter?: string;
    youtube?: string;
};

export interface Brand {
    logo: string;
    company?: string;
    twitter?: string;
    email?: string;
    telephone?: string;
};

export interface Config {
    name: string;
    fbAppId?: string;
    description?: string;
};

export interface MenuItem{
    label: string;
    href?: string;
};

export interface Menu {
    _id: string;
    nav: MenuItem[];
    cta?: MenuItem;
};

export interface FooterLinks {
    title: string;
    links: MenuItem[];
};
