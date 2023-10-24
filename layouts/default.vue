<script setup lang="ts">
import { siteConfig, brandConfig, socialConfig } from "~/config/site";
useHead({
  titleTemplate: `%s - ${siteConfig.name}`,
  link: [
    { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png" },
    { rel: "icon", sizes: "32x32", href: "/icons/favicon-32x32.png" },
    { rel: "icon", sizes: "16x16", href: "/icons/favicon-16x16.png" },
    { rel: "manifest", href: "/manifest.json" },
    { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#a83238" }
  ],
  meta: [
    { name: "msapplication-TileColor", content: "#b71c1c" },
    { name: "msapplication-TileImage", content: "/icons/mstile-144x144.png" },
    { name: "theme-color", content: "#b71c1c" }
  ]
});
</script>
<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>
