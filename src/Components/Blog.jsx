import React from "react";
import './Blog.css'

function Blog() {
  return (
    <>   
    <div class="services-area " id="blogSection">
  <div class="wrapper py-5">
    <div class="section-header">
      <h1 className="
      text-2xl
       font-bold
        font-sans
         md:text-2xl 
         lg:text-3xl
          xl:text-4xl 
          ExtraLarge:text-8xl
           ExtraLarge:p-5  
           ">  Recent Blogs</h1>
      <p className="
      text-sm 
      w-[85%]  
      mb-4 
      text-justify
       tracking-wider
        text-white p-2
          md:p-5 md:w-[70%]
           md:text-sm 
           lg:w-[60%] 
           lg:text-lg 
           lg:p-8  
           xl:text-2xl
            xl:mx-12
             ExtraLarge:text-7xl
              ExtraLarge:px-14">  We transform your ideas and desires into a distinctive web project
      that inspires both you and your customers.</p>
    </div>
    <div class="items">
      <div class="single-item">
        <div class="item-box">
          <div class="icon-area">
            <i class="fa fa-envelope"></i>
          </div>
          <h3>Digital Marketing</h3>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
      </div>
      <div class="single-item">
        <div class="item-box">
          <div class="icon-area">
            <i class="fa fa-adjust"></i>
          </div>
          <h3>Business Analysis</h3>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
      </div>
      <div class="single-item">
        <div class="item-box">
          <div class="icon-area">
            <i class="fab fa-facebook"></i>
          </div>
          <h3>Data Analysis</h3>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
      </div>
    </div>
  </div>

        </div>
      

    </>
  );
}

export default Blog;
