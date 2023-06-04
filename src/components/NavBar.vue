<template>
  <div>
    <div class = "firstbackground">
<header >

  <div class="container mx-auto flex flex-wrap py-[50px] px-[250px] flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl text-white font-poppins">Logo</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-white font-poppins">About</a>
      <a class="mr-5 text-white font-poppins">Services</a>
      <a class="mr-5 text-white font-poppins">Case Studies</a>
      <a class="mr-5 text-white font-poppins">Testimonials</a>
      <a class="mr-5 text-white font-poppins">Contact</a>
    </nav>
    <button class="inline-flex items-center bg-white border-0 py-3 px-9 focus:outline-none font-poppins  rounded ">Login
     
    </button>
  </div>
</header>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center ">
    <div class="lg:w-3/6 md:w-1/2 md:pr-16 lg:pr-0 pr-0 pl-[250px] ">
      <h1 class="title-font font-medium text-4xl text-white">Lorem Ipsum is simply dummy text of the printing and typesetting.</h1>
      <p class="leading-relaxed mt-4 text-white text-xs">Our products are fully custom-made, built with the latest technologies and cloud-architectures.</p>
      <div class ="pt-[24px]">
      <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none rounded-3xl justify-center ">Get Started
        <div class="pt-[3px]">
        <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </div>
      </button>
      </div>
    </div>
   
  </div>
</section>

</div>
  </div>
</template>

<script>
export default {
 name: "NavBar"
}

</script>

<style>
.firstbackground{
  background-image: url('../assets/mainbg.svg');
  height: 100vh;
  width: 100vw;
  top: 0px;
left: 0px;
background-size:cover;
background-repeat: no-repeat;
}
</style>