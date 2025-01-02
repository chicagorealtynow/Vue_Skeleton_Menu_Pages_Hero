<template>
      <nav>
        <div class="nav-container">
          <div class="logo">
            <img src="/logo.png" alt="Company Logo" class="company-logo"/>
          </div>
          <ul class="menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/our-work">Our Work</router-link></li>
            <li><router-link to="/faqs">FAQs</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
          <div class="phone-number">
            (630) 777-7777
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </template>

    <style scoped>
    nav {
      background-color: #f0f0f0;
      padding: 10px 0;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .logo {
      margin-right: auto;
    }

    .company-logo {
      height: 50px;
    }

    .menu {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      margin-left: 20px;
      margin-right: 20px;
    }

    .menu li {
      margin: 0 15px;
    }

    .menu a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }

    .phone-number {
      margin-left: auto;
      font-weight: bold;
    }
    </style>
