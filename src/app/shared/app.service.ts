import { Page } from 'fire-ng/lib/interfaces/page';

import { app } from 'src/config/app';
import { site } from 'src/config/site';

import { Router } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { App } from 'fire-ng/lib/interfaces/app';


@Injectable({
    providedIn: 'root',
})

export class AppService implements App {
    loaded: boolean = false;
    config = {
        app: app,
        site: site,
        page: {} as Page
    };

    constructor(private router: Router,
        private titleService: Title,
        private metaService: Meta,
        @Inject(DOCUMENT) private document: Document) { }

    getConfig() {
        return this.config;
    }

    buildPrefetch() {
        for (let i = 0; i < this.config.app.dns.preconnect.length; i++) {
            let link: HTMLLinkElement = this.document.createElement('link');
            link.rel = "preconnect";
            link.href = this.config.app.dns.preconnect[i];
            this.document.head.appendChild(link);
        }

        for (let j = 0; j < this.config.app.dns.prefetch.length; j++) {
            let link: HTMLLinkElement = this.document.createElement('link');
            link.rel = "dns-prefetch";
            link.href = this.config.app.dns.prefetch[j];
            this.document.head.appendChild(link);
        }
    }

    buildFavicon() {
        let favicon: HTMLLinkElement = this.document.createElement('link');
        favicon.rel = "icon";
        favicon.href = this.config.app.icon;
        this.document.head.appendChild(favicon);

        let appleTouchIcon: HTMLLinkElement = this.document.createElement('link');
        appleTouchIcon.rel = "apple-touch-icon";
        appleTouchIcon.href = `${this.config.app.icon}?w=192&h=192`;
        this.document.head.appendChild(appleTouchIcon);

        let appleTouchStartup: HTMLLinkElement = this.document.createElement('link');
        appleTouchStartup.rel = "apple-touch-startup-image";
        appleTouchStartup.href = `${this.config.app.icon}?w=180&h=180`;
        this.document.head.appendChild(appleTouchStartup);
    }

    buildAttribution() {
        let author: HTMLLinkElement = this.document.createElement('link');
        author.rel = "author";
        author.href = this.config.app.author;
        this.document.head.appendChild(author);

        let contactEmail: HTMLLinkElement = this.document.createElement('link');
        contactEmail.rel = "me";
        contactEmail.href = `mailto:${this.config.app.email}`;
        this.document.head.appendChild(contactEmail);

        let license: HTMLLinkElement = this.document.createElement('link');
        license.rel = "license";
        license.href = this.config.app.license;
        this.document.head.appendChild(license);

        let manifest: HTMLLinkElement = this.document.createElement('link');
        manifest.rel = "manifest";
        manifest.href = "manifest.webmanifest";
        this.document.head.appendChild(manifest);
    }

    buildMeta() {
        if (this.config.app.browserconfig !== undefined) {
            this.metaService.addTag({
                name: 'msapplication-config',
                content: this.config.app.browserconfig
            });
        }

        this.metaService.addTags([
            { httpEquiv: "x-ua-compatible", content: "ie=edge" },
            { name: "robots", content: "index, follow" },
            { name: "googlebot", content: "index, follow" },
            { name: "theme-color", content: this.config.app.theme },
            { name: "application-name", content: this.config.app.title },
            { name: "application-name", content: this.config.app.title },
            { name: "apple-mobile-web-app-title", content: this.config.app.title },
            { name: "apple-mobile-web-app-capable", content: "yes" },
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:site", content: this.config.app.social.twitter.handle },
            { name: "twitter:url", content: this.document.location.href },
            { name: "twitter:title", content: `${this.config.app.title}: ${this.config.page.title}` },
            { name: "twitter:description", content: `${this.config.page.description ? this.config.page.description : this.config.app.description}` },
            { name: "twitter:image", content: `${this.config.app.image}?w=500&h=500` },
            { name: "twitter:image:alt", content: this.config.app.description },
            { itemprop: "name", content: this.config.app.title },
            { itemprop: "description", content: this.config.app.description },
            { itemprop: "image", content: `${this.config.app.icon}?w=180&h=180` },
            { property: "article:author", content: this.config.app.company },
            { property: "og:url", content: this.document.location.href },
            { property: "og:type", content: "website" },
            { property: "og:title", content: `${this.config.app.title}: ${this.config.page.title}` },
            { property: "og:image", content: `${this.config.app.image}?w=500&h=500` },
            { property: "og:image:alt", content: this.config.app.description },
            { property: "og:description", content: `${this.config.page.description ? this.config.page.description : this.config.app.description}` },
            { property: "og:site_name", content: this.config.app.title },
            { property: "og:locale", content: "en_US" },
        ]);
        if (this.config.app.social.facebook.app !== undefined) {
            this.metaService.addTag({
                property: 'fb:app_id',
                content: this.config.app.social.facebook.app
            });
        }
    }

    updatePage() {
        this.metaService.updateTag({ name: "twitter:url", content: this.document.location.href });
        this.metaService.updateTag({ name: "twitter:title", content: `${this.config.app.title}: ${this.config.page.title}` });
        this.metaService.updateTag({ name: "twitter:description", content: `${this.config.page.description ? this.config.page.description : this.config.app.description}` });
        this.metaService.updateTag({ property: "og:url", content: this.document.location.href });
        this.metaService.updateTag({ property: "og:title", content: `${this.config.app.title}: ${this.config.page.title}` });
        this.metaService.updateTag({ property: "og:image:alt", content: this.config.app.description });
        this.metaService.updateTag({ property: "og:description", content: `${this.config.page.description ? this.config.page.description : this.config.app.description}` });
    }

    setPage(page: Page) {
        this.config.page = page;

        // Title
        this.titleService.setTitle(`${this.config.app.title} - ${this.config.page.title}`);

        // Update page
        if (this.loaded === true) {
            this.updatePage();
        }
        // First pass
        if (this.loaded === false) {

            // Link Tags
            this.buildPrefetch();
            this.buildFavicon();
            this.buildAttribution();

            // Meta Tags
            this.buildMeta();

            // HTML5 SHIV Polyfill (IE<6)
            this.document.head.innerHTML += `<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script><![endif]-->`;


            this.loaded = true;
        }
    }

}