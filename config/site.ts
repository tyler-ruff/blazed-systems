import { Config, Brand, Social } from "~/utils/config";

const siteConfig = {
    name: "Blazed Systems",
    description: "Blazed Systems is a cloud solution for enterprises of Blazed Labs."
} as Config;

const brandConfig = {
    logo: "https://blazed.sirv.com/logo/Beaker-Red.png",
    company: "Blazed Labs LLC",
    twitter: "@BlazedLabs",
    email: "hello@blazed.space",
    telephone: "+18557882348"
} as Brand;

const socialConfig = {
    facebook: "https://www.facebook.com/blazedlabs",
    instagram: "https://www.instagram.com/blazed_labs/",
    github: "https://github.com/blazed-labs",
    twitter: "https://twitter.com/BlazedLabs"
} as Social

export {
    siteConfig,
    brandConfig,
    socialConfig
};