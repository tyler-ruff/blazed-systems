<script setup lang="ts">
	useHead({
		title: "About Our Products"
	});
</script>
<template>
    
    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div
          class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
        >
          <h1 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Revolutionizing Your Digital Landscape
          </h1>
    
          <p class="hidden text-gray-500 md:mt-4 md:block">
            In a world driven by technology, our vision is clear: to revolutionize the way businesses operate by delivering cutting-edge on-prem hardware solutions. 
            At Blazed Systems, we believe that the foundation of technological success lies in powerful, secure, and seamlessly integrated hardware
          </p>
    
          <div class="mt-4 md:mt-8">
            <a
              href="/products"
              class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    
      <img
        alt="Blazed Systems Promo #1"
        src="/images/blazed-systems-promo.png"
        class="h-56 w-full object-cover sm:h-full"
      />
    </section>
    <section class="bg-gray-900 text-white">
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="max-w-xl">
        <h2 class="text-3xl font-bold sm:text-4xl">
            Why Choose Blazed Systems On-Prem Hardware?
        </h2>
  
        <p class="mt-4 text-gray-300">
            At Blazed Systems, we understand that in today's fast-paced digital landscape, your business demands cutting-edge on-premises hardware solutions that deliver unparalleled performance, reliability, and security. 
            Introducing our range of Blazed Systems On-Prem Hardware – the backbone of your technological success.
        </p>
      </div>
  
      <div
        class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
      >
        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <Icon name="material-symbols:avg-time-outline" color="black" class="h-5 w-5" />
          </span>
  
          <div>
            <h2 class="text-lg font-bold">
                Powerful Performance
            </h2>
  
            <p class="mt-1 text-sm text-gray-300">
                Engineered for excellence, our on-prem hardware solutions are designed to handle the most demanding workloads with ease. 
                Experience blazing fast speeds and seamless multitasking, ensuring your business stays ahead of the curve.
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <Icon name="material-symbols:security-rounded" color="black" class="h-5 w-5" />
          </span>
  
          <div>
            <h2 class="text-lg font-bold">
                Fortified Security
            </h2>
  
            <p class="mt-1 text-sm text-gray-300">
                Safeguard your critical data with our state-of-the-art security features. 
                Blazed Systems On-Prem Hardware is equipped with advanced encryption and threat detection capabilities, providing you with peace of mind in an ever-evolving cybersecurity landscape.
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <Icon name="material-symbols:settings-cinematic-blur-outline-sharp" color="black" class="h-5 w-5" />
          </span>
  
          <div>
            <h2 class="text-lg font-bold">
                Tailored to Your Needs
            </h2>
  
            <p class="mt-1 text-sm text-gray-300">
                We understand that every business is unique. 
                That's why our on-prem hardware solutions are customizable to meet your specific requirements. 
                Whether you're a small startup or an enterprise giant, we have the right hardware to fuel your growth.
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <Icon name="material-symbols:event-available-outline-rounded" color="black" class="h-5 w-5" />
          </span>
  
          <div>
            <h2 class="text-lg font-bold">
                Seamless Integration
            </h2>
  
            <p class="mt-1 text-sm text-gray-300">
                Our hardware seamlessly integrates with your existing infrastructure, ensuring a smooth transition and minimal disruption to your operations. 
                Upgrade your systems without the headache of compatibility issues.
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <Icon name="material-symbols:support-agent" color="black" class="h-5 w-5" />
          </span>
  
          <div>
            <h2 class="text-lg font-bold">
                Dedicated Support
            </h2>
  
            <p class="mt-1 text-sm text-gray-300">
                At Blazed Systems, we prioritize your success. 
                Our dedicated support team is ready to assist you at every step, from initial setup to ongoing maintenance. 
                Your satisfaction is our commitment. We provide SOS support as well as guided deployments. 
            </p>
          </div>
        </div>
  
        <div class="flex items-start gap-4">
          <span class="shrink-0 rounded-lg bg-gray-800 p-4">
            <Icon name="material-symbols:enterprise" color="black" class="h-5 w-5" />
          </span>
  
          <div>
            <h2 class="text-lg font-bold">
                Enterprise Solutions
            </h2>
  
            <p class="mt-1 text-sm text-gray-300">
              Have a big business? Things get messy, we understand.
              Let us help you organize it all, we are a friendly IT
              company that will help you save money, not spend it. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>