<template >
    <div>
        
<section class=" body-font">
    <div class="container bg-white px-5 py-24 mx-auto flex flex-wrap items-center ">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <img src = '../assets/Signup.svg'/>
      </div>
      <div class="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ">
        <h2 class="text-Black-1000  font-medium title-font mb-5 text-4xl">Send Us a Message</h2>
     <form @submit="postData" method="post">
        <div class="relative mb-4">
          <input type="email" id="email" name="email" v-model="customer.email" placeholder ="Your Email*" class="border-1 border-white border-b-black placeholder-black w-full bg-white rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <input type="text" id="full-name" name="full-name" v-model="customer.name" placeholder ="Your Name*" class=" placeholder-black border-white border-b-black w-full bg-white rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <input type="text" id="number" name="number" v-model="customer.number" placeholder ="Phone Number*" class="placeholder-black  border-white border-b-black w-full bg-white rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <input type="text" id="subject" name="subject" v-model="customer.subject" placeholder ="Subject" class="placeholder-black border-white border-b-black w-full bg-white rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative  mb-4">
          <input type="text" id="message" name="message" v-model="customer.message" placeholder ="Your Message" class="placeholder-black border-white border-b-black w-full bg-white rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out pt-9">
        </div>
        <div class="flex items-center mb-5">
      <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-Black">By sending this message, you confirm that you have read and agreed to our privacy-policy.</label>
  </div>
  <div class="w-3/6">
  <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#0E77FF] border-0 py-2 px-6 focus:outline-none rounded-3xl justify-center " type="submit">Get Started
          <div class="pt-[3px]">
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </button>
      </div>
    </form>
      </div>
    </div>
  </section>
  
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "ContactUs",
    data() {
       return {
        customer: {
           email:null,
           name: null,
           number: null,
           subject: null,
           message: null
        }
       }
    },
    methods: {
      async postData(e) 
      {
        e.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        let result = await axios.post("https://formsubmit.co/ajax/koustubhmane4501@gmail.com",{
          email:this.customer.email,
          name:this.customer.name,
          number:this.customer.number,
          subject:this.customer.subject,
          message:this.customer.message
        });
       
         console.log(result);
       
        
      }
    }
}
</script>
<style >
    
</style>