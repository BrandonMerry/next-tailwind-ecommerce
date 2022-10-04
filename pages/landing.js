import React from 'react';
import Layout from '../components/Layout';

// components

export default function LandingPage() {
  return (
    <>
      <Layout />
      <main>
      
  <section class="hero__container h-screen flex items-center justify-center">
 
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
    <div class="flex flex-col justify-center items-center z-10">
      <h1 class="text-center text-5xl lg:text-7xl uppercase text-gray-50 font-medium">Decks Built to Last</h1>
      <p
        class="text-lg mx-4 lg:mx-0 lg:text-xl font-medium text-gray-100 mt-12 mb-16 max-w-prose lg:w-2/3 leading-relaxed text-center">
        Here you’ll want to write something super slick and succinct. Bonus points for subtle poetic prose</p>
      <div class="flex flex-col md:block">
        <a class="inline-block uppercase text-center font-semibold px-5 py-2 lg:px-10 border border-gray-500 text-gray-50 mx-2 lg:mx-8 hover:border-gray-50 hover:shadow-md focus:ring-2 focus:ring-blue-300"
          href="/get_a_quote.html">Get Quote</a>
      </div>
    </div>
  </section>

 
  <section class="relative flex flex-row gap-x-1 lg:gap-x-2 m-1 lg:m-2">

   
    <div class="composite_deck relative h-60 flex-grow-1 w-full">
      <a href="/composite_decks.html">
        <!-- Dark Overlay -->
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-60 transition-opacity duration-500 hover:opacity-20 cursor-pointer z-10">
        </div>
        <h2
          class="absolute uppercase pl-4 lg:pl-10 pb-2 lg:pb-8 bottom-0 font-medium text-lg lg:text-xl text-gray-100 z-20">
          Composite
          Decks</h2>
      </a>
    </div>

   
    <div class="hardwood_deck relative h-60 flex-grow-1 w-full">
      <a href="/hardwood_decks.html">
        <!-- Dark Overlay -->
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-60 transition-opacity duration-500 hover:opacity-20 cursor-pointer z-10">
        </div>
        <h2
          class="absolute uppercase pl-4 lg:pl-10 pb-2 lg:pb-8 bottom-0 font-medium text-lg lg:text-xl text-gray-100 z-20">
          Hardwood
          Decks</h2>
      </a>
    </div>

  </section>

  
  <section class="mx-6 lg:mx-0 py-16 lg:py-24 text-lg leading-relaxed">
    <p class="max-w-prose mx-auto mb-8">Something about a deck and how getting the right one is pretty much the most
      important thing you can do for your
      house... and your sense of purpose. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna non nec purus
      auctor
      nulla velit magna. psum odio commodo, amet, enim ornare sed eu proin. Et diam morbi fames porta
      augue aliquam. Semper dictum sed facilisis
      nulla massa eu.
    </p>
    <p class="max-w-prose mx-auto mb-8">Ipsum odio commodo, amet, enim ornare sed eu proin. Semper dictum sed facilisis
      nulla massa eu. Et diam morbi fames porta
      augue aliquam. Semper dictum sed facilisis
      nulla massa eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="max-w-prose mx-auto mb-8">Mattis porttitor consectetur malesuada sodales aliquam vivamus arcu ipsum
      convallis. Felis etiam arcu ipsum vel congue
      nibh habitant.</p>
  </section>

  
  <section class="flex flex-col lg:flex-row gap-x-2 bg-gray-900">
    <div class="get_quote h-96 lg:h-auto relative w-full flex flex-col justify-center items-center">
      <!-- Dark Overlay -->
      <div class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-40 z-10">
      </div>
      <div class="relative z-20">
        <span class="uppercase tracking-widest font-medium text-lg text-gray-100">Save today</span>
        <h2 class=" font-semibold text-5xl text-gray-50">Get a Quote</h2>
      </div>
    </div>
    <div class="lg:w-3/4">
      
      <div class="flex-grow justify-center px-8 lg:px-20 py-20 lg:py-16">
        <div class="flex justify-center">
          <div>
            <span class="mb-4 text-center text-gray-50">Fill out the form and we’ll get in touch!</span>
            
            <form name="quote" data-netlify="true" autocomplete="off" netlify-honeypot="bot-field">
              <p class="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
              </p>
              <div class="input-animated">
                <input type="text" id="name" name="name" required pattern="\S+.*" placeholder="the placeholder" />
                <label htmlFor="name" class="label-name"><span class="content-name">Name</span></label>
              </div>
              <div class="input-animated">
                <input type="email" id="email" name="email" required placeholder="the placeholder" />
                <label htmlFor="email" class="label-email"><span class="content-email">Email</span></label>
              </div>
              <div class="input-animated">
                <input type="tel" id="tel" name="tel" required placeholder="the placeholder" />
                <label htmlFor="tel" class="label-tel"><span class="content-tel">Tel.</span></label>
              </div>
              <div class="flex gap-x-4 items-center my-8">
                <span class="font-semibold text-gray-100">City: </span>
                <select name="type" id="type" required>
                  <option value="Cape Town" selected="selected">Cape Town</option>
                  <option value="moscow">Moscow</option>
                  <option value="oslo">Oslo</option>
                  <option value="prague">Prague</option>
                  <option value="shenzhen">Shenzhen</option>
                  <option value="london">London</option>
                </select>
              </div>
              <button type="submit" id="submit-button"
                class="w-full font-semibold uppercase text-center px-5 py-2 shadow-sm my-4 lg:mb-0 transition-colors duration-300 bg-green-600 text-blue-50 hover:bg-green-700 focus:ring-4 focus:ring-gray-300">Send
                Message</button>
              <span id="success"
                class="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600">Thanks!
                We'll be in touch soon.</span>
              <span id="error"
                class="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600">Whoops...
                Something went wrong.</span>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>


  
  <section class="pt-24 pb-36 lg:py-36 -mt-8 mx-6 md:mx-32 lg:mx-auto max-w-screen-xl">
    <div>
      <div class="flex flex-col lg:mx-8 lg:flex-row">
        <div class="w-full mt-8 lg:mt-0">
          <h2 class="mt-4 mb-10 font-bold text-4xl text-gray-700">Wait there's more...</h2>
          <p class="text-gray-600 leading-loose mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pretium ultrices non vel molestie et
            cras venenatis. Urna aliquam a diam venenatis vel. Nulla tristique mauris purus, pharetra etiam sagittis,
            aenean ultrices. Lacinia proin pharetra venenatis nisl dictum sit fames cursus accumsan.
          </p>
          <p class="text-gray-600 leading-loose mb-6">
            Sit quisque magna auctor eleifend.
          </p>
          <p class="text-gray-600 leading-loose mb-6">
            Risus varius in at metus lectus tincidunt. Enim tortor quisque sit at at ultrices quam massa. Elit sagittis,
            nisl, in viverra gravida. Tristique a amet, vitae sem porta aliquam facilisis. Semper non quis quis nam.
            Eget lectus vitae dignissim phasellus sit lectus in orci sed.
          </p>
          <p class="text-gray-600 leading-loose mb-6">
            Felis, elementum in convallis aliquam quis. Commodo ac purus semper viverra proin etiam erat fermentum
            volutpat. Molestie curabitur libero pharetra lectus in. Orci erat in amet interdum morbi. Diam urna ultrices
            nulla lacus, quis risus.
          </p>
        </div>
        <div class="cust_offset-border relative w-full my-8 pb-96 lg:pb-0 lg:ml-44">
          <img class="absolute w-full h-full object-cover z-20" src="./images/deck_extra.jpg"
            alt="An outdoor wooden deck with a table and chairs.">
        </div>
      </div>
    </div>
  </section>

  
  <section class="city_select relative h-full py-24 lg:h-96 flex flex-col items-center justify-center">
    <div class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70 z-10"></div>
    <div class="relative z-20">
      <h2 class="text-center mb-4 mx-4 lg:mx-0 font-semibold text-5xl text-gray-50">Select Your City</h2>
      <p class="text-xl text-center mx-4 lg:mx-auto lg:w-2/3 mb-12 text-gray-100"">Looking for decking in your city? Choose from the list below to see what's on offer!</p>
              <div class=" flex flex-wrap gap-8 justify-center">
        <a class="border-2 rounded-sm shadow-sm px-4 py-2 uppercase font-medium text-lg  text-gray-50 border-gray-100 hover:bg-gray-900 hover:text-gray-100 hover:shadow-md"
          href="/deck_installers_cape_town.html">Cape Town</a>
        <a class="border-2 rounded-sm shadow-sm px-4 py-2 uppercase font-medium text-lg  text-gray-50 border-gray-100 hover:bg-gray-900 hover:text-gray-100 hover:shadow-md"
          href="/city2">Moscow</a>
        <a class="border-2 rounded-sm shadow-sm px-4 py-2 uppercase font-medium text-lg  text-gray-50 border-gray-100 hover:bg-gray-900 hover:text-gray-100 hover:shadow-md"
          href="/city3">Oslo</a>
        <a class="border-2 rounded-sm shadow-sm px-4 py-2 uppercase font-medium text-lg  text-gray-50 border-gray-100 hover:bg-gray-900 hover:text-gray-100 hover:shadow-md"
          href="/city4">Prague</a>
        <a class="border-2 rounded-sm shadow-sm px-4 py-2 uppercase font-medium text-lg  text-gray-50 border-gray-100 hover:bg-gray-900 hover:text-gray-100 hover:shadow-md"
          href="/city5">Shenzhen</a>
        <a class="border-2 rounded-sm shadow-sm px-4 py-2 uppercase font-medium text-lg  text-gray-50 border-gray-100 hover:bg-gray-900 hover:text-gray-100 hover:shadow-md"
          href="/city6">London</a>
    </div>
  </section>

 
//   <section class="py-24 mx-8 lg:mx-0">

//     <div class="relative flex justify-center">
//       <div class="cust_offset-border relative p-20 text-center border-4 border-gray-700">
//         <h2 class="text-3xl font-bold mb-14 text-gray-900">Ready to Get Started?</h2>
//         <a class="inline-block uppercase text-center cursor-pointer font-semibold px-5 py-2 lg:px-10 border bg-gray-800 text-gray-50 mx-2 lg:mx-8 transition-all duration-300 shadow-sm hover:bg-gray-900 hover:shadow-md focus:ring-2 focus:ring-blue-300"
//           href="/get_a_quote.html">Get Free Quote</a>
//       </div>
//     </div>
//   </section>
      </main>
      <Layout />
    </>
  );
}
