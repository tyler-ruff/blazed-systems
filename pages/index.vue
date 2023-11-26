<script setup lang="ts">
	useHead({
		title: "Home"
	});
</script>
<template>
	<div class="bg-gray-100 text-gray-800">
		<div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-2xl">
			<h1 class="text-4xl font-bold leadi sm:text-5xl">
                Discover a new kind of
				<span class="text-red-600">server</span>.
			</h1>
			<p class="px-8 mt-8 mb-12 text-lg">
                The Blazed Systems cloud will help your business succeed, in the cloud on on-prem.
            </p>
			<div class="flex flex-wrap justify-center">
				<nuxt-link href="/solutions" class="px-8 py-3 m-2 text-lg font-semibold rounded bg-red-600 hover:bg-red-700 active:ring ring-red-400 text-gray-50">
                    Cloud Solutions
                </nuxt-link>
				<nuxt-link href="/products" class="px-8 py-3 m-2 text-lg border rounded hover:bg-gray-300 active:ring ring-red-400 text-gray-900 border-gray-300">
                    Browse Products
                </nuxt-link>
			</div>
		</div>
	</div>
</template>