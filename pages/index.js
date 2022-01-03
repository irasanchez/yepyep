import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'



export default function Home() {
  const [purchaseType, setPurchaseType] = useState(false)
  const [menuVisibility, setMenuVisibility] = useState(false)
  const selectedPurchaseType = 'shadow-md bg-purple-700 rounded'
  return (
    <>

      <div>
        <section className="skewed-bottom-right">
          <nav className="relative px-6 py-6 flex justify-between items-center bg-purple-600">
            <a className="text-white text-3xl font-bold leading-none" href="#">
              <img
                className="h-12"
                src="atis-assets/logo/atis/atis-flat-white.svg"
                alt
                width="auto"
              />
            </a>
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center text-white p-3" onClick={()=>setMenuVisibility(!menuVisibility)}>
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <ul className={`${menuVisibility?'':'hidden'}  absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}>
              <li>
                <a className="text-sm text-gray-300 hover:text-white" href="#">
                  Start
            </a>
              </li>
              <li className="text-gray-800">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <a className="text-sm text-white font-bold" href="#about">
                  About Us
            </a>
              </li>
              <li className="text-gray-800">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <a className="text-sm text-gray-300 hover:text-white" href="#services">
                  Services
            </a>
              </li>
              <li className="text-gray-800">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <a className="text-sm text-gray-300 hover:text-white" href="#pricing">
                  Pricing
            </a>
              </li>
              <li className="text-gray-800">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <a className="text-sm text-gray-300 hover:text-white" href="#reviews">
                  Testimonials
            </a>
              </li>
            </ul>
            <a
              className="hidden lg:block py-2 px-6 bg-pink-600 hover:bg-pink-700 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
              href="#contact"
            >
              Contact Us
        </a>
          </nav>
          <div className="bg-purple-600 pt-12 lg:pt-20 pb-20 radius-for-skewed">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                  <div className="w-full text-center lg:text-left">
                    <div className="max-w-md mx-auto lg:mx-0">
                      <h2 className="mb-3 text-4xl lg:text-5xl text-white font-bold">
                        <span>Building your product should be</span>
                        <span className="text-yellow-400">easy</span>
                      </h2>
                    </div>
                    <div className="max-w-sm mx-auto lg:mx-0">
                      <p className="mb-6 text-gray-300 leading-loose">
                        Affordable, transparent, friendly software service. Yepyep!
                  </p>
                      <div>
                        <a
                          className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-white hover:bg-purple-100 text-purple-600 font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                          href="#"
                        >
                          Get Started
                    </a>
                        <a
                          className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-purple-600 border-2 border-purple-400 hover:border-purple-500 rounded-l-xl rounded-t-xl transition duration-200"
                          href="#features"
                        >
                        Features
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                  <div className="relative" style={{ zIndex: 0 }}>
                    <img
                      className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                      src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                      alt
                    />
                    <img
                      className="hidden md:block absolute"
                      style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                      src="atis-assets/elements/blue-up.svg"
                      alt
                    />
                    <img
                      className="hidden md:block absolute"
                      style={{ bottom: "-2rem", right: "-2rem", zIndex: -1 }}
                      src="atis-assets/elements/wing-pink-down.svg"
                      alt
                    />
                    <img
                      className="hidden md:block absolute"
                      style={{ top: "3rem", right: "-3rem", zIndex: -1 }}
                      src="atis-assets/elements/bullets-yellow-right.svg"
                      alt
                    />
                    <img
                      className="hidden md:block absolute"
                      style={{ bottom: "2.5rem", left: "-4.5rem", zIndex: -1 }}
                      src="atis-assets/elements/bullets-yellow-left.svg"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-for-radius">
            <svg
              className="h-8 md:h-12 lg:h-20 w-full text-purple-600"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 0 0 10" />
            </svg>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
            <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold leading-none" href="#">
                  <img
                    className="h-10"
                    src="atis-assets/logo/atis/atis-color-black.svg"
                    alt
                    width="auto"
                  />
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                      href="#"
                    >
                      Start
                </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                      href="#"
                    >
                      About Us
                </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                      href="#"
                    >
                      Services
                </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                      href="#"
                    >
                      Pricing
                </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                      href="#"
                    >
                      Testimonials
                </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="pt-6">
                  <a
                    className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                    href="#"
                  >
                    Sign In
              </a>
                  <a
                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-pink-600 hover:bg-pink-700 rounded-l-xl rounded-t-xl"
                    href="#"
                  >
                    Sign Up
              </a>
                </div>
                <p className="my-4 text-xs text-center text-gray-400">
                  <span>© 2020 All rights reserved.</span>
                </p>
                <div className="text-center">
                  <a className="inline-block px-1" href="#">
                    <img src="atis-assets/social/facebook-purple.svg" alt />
                  </a>
                  <a className="inline-block px-1" href="#">
                    <img src="atis-assets/social/twitter-purple.svg" alt />
                  </a>
                  <a className="inline-block px-1" href="#">
                    <img src="atis-assets/social/instagram-purple.svg" alt />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section>
          <div className="skew skew-top mr-for-radius">
            <svg
              className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 10 0 10" />
            </svg>
          </div>
          <div className="skew skew-top ml-for-radius">
            <svg
              className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 10 10 0 10 10" />
            </svg>
          </div>
          <div className="py-20 bg-gray-50 radius-for-skewed">
            <div className="container mx-auto px-4">
              <div className="mb-16 max-w-md mx-auto text-center">
                <span className="text-purple-600 font-bold">
                  We train and employ students to
            </span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                  Bring your app ideas to life
            </h2>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="mb-6 w-full lg:w-1/2 px-3">
                  <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                    <div>
                      <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-yellow-100">
                        <svg
                          className="h-8 w-8 md:w-12 md:h-12 text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                      <h3 className="mb-2 text-2xl font-bold font-heading">
                        We build it for you.
                  </h3>
                      <p className="text-gray-500">
                        No more spending hours to try and make Wordpress work for
                    your needs.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-6 w-full lg:w-1/2 px-3">
                  <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                    <div>
                      <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-pink-100">
                        <svg
                          className="h-8 w-8 md:w-12 md:h-12 text-pink-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                      <h3 className="mb-2 text-2xl font-bold font-heading">
                        Just tell us what you want.
                  </h3>
                      <p className="text-gray-500">
                        No designs or previous files needed. Take a quick quiz, and
                        we build something beautiful for you.
                  </p>
                    </div>
                  </div>
                </div>
                <div className="mb-6 lg:mb-0 w-full lg:w-1/2 px-3">
                  <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                    <div>
                      <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded bg-blue-100">
                        <svg
                          className="h-8 w-8 md:w-12 md:h-12 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                      <h3 className="mb-2 text-2xl font-bold font-heading">
                        Unlimited changes
                  </h3>
                      <p className="text-gray-500">
                        Let us know in a timely fashion what needs to change, and
                        we'll be right on it.
                  </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-3">
                  <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                    <div>
                      <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded bg-purple-100">
                        <svg
                          className="h-8 w-8 md:w-12 md:h-12 text-purple-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                      </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                      <h3 className="mb-2 text-2xl font-bold font-heading">
                        Closing the experience gap
                  </h3>
                      <p className="text-gray-500">
                        We give students paid experience to help them compete in the
                        technology sector.
                  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skew skew-bottom mr-for-radius">
            <svg
              className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 0 0 10" />
            </svg>
          </div>
          <div className="skew skew-bottom ml-for-radius">
            <svg
              className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 0 10 10" />
            </svg>
          </div>
        </section>
        <section>


          <div className="py-20 bg-purple-600 radius-for-skewed">
            <div className="container mx-auto px-4">
              <div className="mb-16 max-w-lg mx-auto text-center">
                <span className="text-purple-400 font-bold">Let us help you</span>
                <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading text-white">
                  Simplify engineering{" "}
                </h2>
                <p className="mb-6 text-gray-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
                <div className="inline-block py-1 px-1 bg-purple-500 rounded-lg">
                  <button className={`mr-1 text-sm py-2 px-4 text-white  ${!purchaseType ? selectedPurchaseType : 'hover:text-gray-200' } font-bold`} onClick={() => setPurchaseType(!purchaseType)}>
                    Single{" "}
                  </button>
                  <button className={`text-sm py-2 px-4 text-white ${purchaseType ? selectedPurchaseType : 'hover:text-gray-200' } font-bold`} onClick={() => setPurchaseType(!purchaseType)}>
                    Package
              </button>
                </div>
              </div>
              <div className="flex flex-wrap max-w-4xl mx-auto">
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                    <div className="mb-12">
                      <h3 className="mb-4 text-2xl font-bold font-heading">
                        Simple
                  </h3>
                      <p className="mb-6 text-gray-500">
                        One web or mobile project with up to 5 pages.
                  </p>
                    </div>
                    <div>
                      <span className="text-5xl lg:text-6xl font-bold">$150</span>
                      <a
                        className="inline-block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-pink-600 hover:bg-pink-700 text-white font-bold leading-loose transition duration-200"
                        href="#"
                      >
                        Get Started
                  </a>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="py-8 px-10 max-w-md mx-auto bg-white shadow rounded text-center">
                    <div className="mb-12">
                      <h3 className="mb-4 text-2xl font-bold font-heading">
                        Complex
                  </h3>
                      <p className="mb-6 text-gray-500">
                        One web or mobile project with up to 10 pages.
                  </p>
                    </div>
                    <div>
                      <span className="text-5xl lg:text-6xl font-bold">$275</span>
                      <a
                        className="inline-block mt-6 w-full py-2 px-6 rounded-l-xl rounded-t-xl bg-pink-600 hover:bg-pink-700 text-white font-bold leading-loose transition duration-200"
                        href="#"
                      >
                        Get Started
                  </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section>

          <div className="py-20 bg-purple-600 radius-for-skewed overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="pt-8 pb-16 flex flex-wrap justify-center items-center">
                <button className="mr-3 lg:mr-0 order-last lg:order-first bg-white p-4 rounded-full shadow-md text-purple-600 hover:text-purple-400 transition duration-200">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
                <div className="mb-10 max-w-lg text-center mx-auto">
                  <span className="text-purple-400 font-bold">
                    Dolor sit amet consectutar
              </span>
                  <h2 className="mt-4 text-4xl lg:text-5xl font-bold font-heading text-white">
                    What our clients think about us
              </h2>
                </div>
                <button className="order-last bg-white p-4 rounded-full shadow-md text-green-600 hover:text-green-400 transition duration-200">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex w-full relative">
                <div
                  className="hidden lg:block absolute w-1/3 px-3 opacity-50"
                  style={{ left: "-370px", top: 0 }}
                >
                  <div className="p-5 bg-white shadow rounded">
                    <svg
                      className="mb-6 text-yellow-500 h-8"
                      viewBox="0 0 32 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2418 12.749C9.45369 12.522 8.66554 12.4069 7.89887 12.4069C6.71496 12.4069 5.72709 12.6775 4.96109 13.0088C5.69957 10.3053 7.47358 5.6405 11.0075 5.11517C11.3348 5.0665 11.603 4.82986 11.6923 4.51131L12.4646 1.74875C12.5298 1.51512 12.4912 1.26505 12.3579 1.06231C12.2246 0.859563 12.0105 0.724288 11.7705 0.691393C11.5097 0.655812 11.2438 0.637686 10.9803 0.637686C6.73846 0.637686 2.53756 5.06516 0.764895 11.4046C-0.275679 15.1238 -0.580802 20.7154 1.98237 24.2349C3.41668 26.2043 5.50924 27.2559 8.20198 27.361C8.21305 27.3613 8.2238 27.3616 8.23487 27.3616C11.5573 27.3616 14.5035 25.1241 15.3997 21.9208C15.9351 20.0058 15.6931 17.9975 14.7176 16.2644C13.7526 14.5508 12.1632 13.3018 10.2418 12.749Z"
                        fill="currentColor"
                      />
                      <path
                        d="M31.0396 16.2648C30.0746 14.5508 28.4852 13.3018 26.5638 12.749C25.7757 12.522 24.9875 12.4069 24.2212 12.4069C23.0373 12.4069 22.0491 12.6775 21.2831 13.0088C22.0215 10.3053 23.7955 5.6405 27.3298 5.11517C27.6571 5.0665 27.9249 4.82986 28.0146 4.51131L28.7869 1.74875C28.8521 1.51512 28.8135 1.26505 28.6802 1.06231C28.5473 0.859563 28.3331 0.724288 28.0928 0.691393C27.8323 0.655812 27.5664 0.637686 27.3026 0.637686C23.0608 0.637686 18.8599 5.06516 17.0869 11.4046C16.0466 15.1238 15.7415 20.7154 18.305 24.2356C19.739 26.2046 21.8319 27.2566 24.5243 27.3613C24.5354 27.3616 24.5461 27.362 24.5575 27.362C27.8796 27.362 30.8261 25.1244 31.7224 21.9211C32.2571 20.0061 32.0147 17.9975 31.0396 16.2648Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="text-gray-500 leading-loose mb-4">
                      Suspendisse gravida nec erat sit amet posuere. Nam sit amet
                      nunc a nulla commodo pulvinar quis eu neque. Maecenas maximus
                      lobortis libero non dignissim. Integer quis tempor lorem.
                </p>
                    <h4 className="font-bold font-heading">Ian Brown</h4>
                    <p className="text-gray-500">Product Designer</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center mx-auto">
                  <div className="mb-4 w-full lg:w-1/3 px-3">
                    <div className="p-5 bg-white shadow rounded">
                      <svg
                        className="mb-6 text-yellow-500 h-8"
                        viewBox="0 0 32 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2418 12.749C9.45369 12.522 8.66554 12.4069 7.89887 12.4069C6.71496 12.4069 5.72709 12.6775 4.96109 13.0088C5.69957 10.3053 7.47358 5.6405 11.0075 5.11517C11.3348 5.0665 11.603 4.82986 11.6923 4.51131L12.4646 1.74875C12.5298 1.51512 12.4912 1.26505 12.3579 1.06231C12.2246 0.859563 12.0105 0.724288 11.7705 0.691393C11.5097 0.655812 11.2438 0.637686 10.9803 0.637686C6.73846 0.637686 2.53756 5.06516 0.764895 11.4046C-0.275679 15.1238 -0.580802 20.7154 1.98237 24.2349C3.41668 26.2043 5.50924 27.2559 8.20198 27.361C8.21305 27.3613 8.2238 27.3616 8.23487 27.3616C11.5573 27.3616 14.5035 25.1241 15.3997 21.9208C15.9351 20.0058 15.6931 17.9975 14.7176 16.2644C13.7526 14.5508 12.1632 13.3018 10.2418 12.749Z"
                          fill="currentColor"
                        />
                        <path
                          d="M31.0396 16.2648C30.0746 14.5508 28.4852 13.3018 26.5638 12.749C25.7757 12.522 24.9875 12.4069 24.2212 12.4069C23.0373 12.4069 22.0491 12.6775 21.2831 13.0088C22.0215 10.3053 23.7955 5.6405 27.3298 5.11517C27.6571 5.0665 27.9249 4.82986 28.0146 4.51131L28.7869 1.74875C28.8521 1.51512 28.8135 1.26505 28.6802 1.06231C28.5473 0.859563 28.3331 0.724288 28.0928 0.691393C27.8323 0.655812 27.5664 0.637686 27.3026 0.637686C23.0608 0.637686 18.8599 5.06516 17.0869 11.4046C16.0466 15.1238 15.7415 20.7154 18.305 24.2356C19.739 26.2046 21.8319 27.2566 24.5243 27.3613C24.5354 27.3616 24.5461 27.362 24.5575 27.362C27.8796 27.362 30.8261 25.1244 31.7224 21.9211C32.2571 20.0061 32.0147 17.9975 31.0396 16.2648Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-gray-500 leading-loose mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque et placerat metus. Morbi aliquet felis sit amet
                        erat finibus, ac condimentum ligula ornare.
                  </p>
                      <h4 className="font-bold font-heading">Daisy Carter</h4>
                      <p className="text-gray-500">Product Development</p>
                    </div>
                  </div>
                  <div className="mb-4 w-full lg:w-1/3 px-3">
                    <div className="p-5 bg-white shadow rounded">
                      <svg
                        className="mb-6 text-green-500 h-8"
                        viewBox="0 0 32 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2418 12.749C9.45369 12.522 8.66554 12.4069 7.89887 12.4069C6.71496 12.4069 5.72709 12.6775 4.96109 13.0088C5.69957 10.3053 7.47358 5.6405 11.0075 5.11517C11.3348 5.0665 11.603 4.82986 11.6923 4.51131L12.4646 1.74875C12.5298 1.51512 12.4912 1.26505 12.3579 1.06231C12.2246 0.859563 12.0105 0.724288 11.7705 0.691393C11.5097 0.655812 11.2438 0.637686 10.9803 0.637686C6.73846 0.637686 2.53756 5.06516 0.764895 11.4046C-0.275679 15.1238 -0.580802 20.7154 1.98237 24.2349C3.41668 26.2043 5.50924 27.2559 8.20198 27.361C8.21305 27.3613 8.2238 27.3616 8.23487 27.3616C11.5573 27.3616 14.5035 25.1241 15.3997 21.9208C15.9351 20.0058 15.6931 17.9975 14.7176 16.2644C13.7526 14.5508 12.1632 13.3018 10.2418 12.749Z"
                          fill="currentColor"
                        />
                        <path
                          d="M31.0396 16.2648C30.0746 14.5508 28.4852 13.3018 26.5638 12.749C25.7757 12.522 24.9875 12.4069 24.2212 12.4069C23.0373 12.4069 22.0491 12.6775 21.2831 13.0088C22.0215 10.3053 23.7955 5.6405 27.3298 5.11517C27.6571 5.0665 27.9249 4.82986 28.0146 4.51131L28.7869 1.74875C28.8521 1.51512 28.8135 1.26505 28.6802 1.06231C28.5473 0.859563 28.3331 0.724288 28.0928 0.691393C27.8323 0.655812 27.5664 0.637686 27.3026 0.637686C23.0608 0.637686 18.8599 5.06516 17.0869 11.4046C16.0466 15.1238 15.7415 20.7154 18.305 24.2356C19.739 26.2046 21.8319 27.2566 24.5243 27.3613C24.5354 27.3616 24.5461 27.362 24.5575 27.362C27.8796 27.362 30.8261 25.1244 31.7224 21.9211C32.2571 20.0061 32.0147 17.9975 31.0396 16.2648Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-gray-500 leading-loose mb-4">
                        Hasellus sollicitudin massa ut quam aliquam, feugiat
                        fringilla est aliquam. Phasellus tincidunt mi a pellentesque
                        fermentum. Quisque vitae erat iaculis, porttitor elit sed,
                        viverra nisl. Maecenas facilisis viverra sollicitudin.
                  </p>
                      <h4 className="font-bold font-heading">Ian Brown</h4>
                      <p className="text-gray-500">Product Designer</p>
                    </div>
                  </div>
                  <div className="mb-4 w-full lg:w-1/3 px-3">
                    <div className="p-5 bg-white shadow rounded">
                      <svg
                        className="mb-6 text-blue-500 h-8"
                        viewBox="0 0 32 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2418 12.749C9.45369 12.522 8.66554 12.4069 7.89887 12.4069C6.71496 12.4069 5.72709 12.6775 4.96109 13.0088C5.69957 10.3053 7.47358 5.6405 11.0075 5.11517C11.3348 5.0665 11.603 4.82986 11.6923 4.51131L12.4646 1.74875C12.5298 1.51512 12.4912 1.26505 12.3579 1.06231C12.2246 0.859563 12.0105 0.724288 11.7705 0.691393C11.5097 0.655812 11.2438 0.637686 10.9803 0.637686C6.73846 0.637686 2.53756 5.06516 0.764895 11.4046C-0.275679 15.1238 -0.580802 20.7154 1.98237 24.2349C3.41668 26.2043 5.50924 27.2559 8.20198 27.361C8.21305 27.3613 8.2238 27.3616 8.23487 27.3616C11.5573 27.3616 14.5035 25.1241 15.3997 21.9208C15.9351 20.0058 15.6931 17.9975 14.7176 16.2644C13.7526 14.5508 12.1632 13.3018 10.2418 12.749Z"
                          fill="currentColor"
                        />
                        <path
                          d="M31.0396 16.2648C30.0746 14.5508 28.4852 13.3018 26.5638 12.749C25.7757 12.522 24.9875 12.4069 24.2212 12.4069C23.0373 12.4069 22.0491 12.6775 21.2831 13.0088C22.0215 10.3053 23.7955 5.6405 27.3298 5.11517C27.6571 5.0665 27.9249 4.82986 28.0146 4.51131L28.7869 1.74875C28.8521 1.51512 28.8135 1.26505 28.6802 1.06231C28.5473 0.859563 28.3331 0.724288 28.0928 0.691393C27.8323 0.655812 27.5664 0.637686 27.3026 0.637686C23.0608 0.637686 18.8599 5.06516 17.0869 11.4046C16.0466 15.1238 15.7415 20.7154 18.305 24.2356C19.739 26.2046 21.8319 27.2566 24.5243 27.3613C24.5354 27.3616 24.5461 27.362 24.5575 27.362C27.8796 27.362 30.8261 25.1244 31.7224 21.9211C32.2571 20.0061 32.0147 17.9975 31.0396 16.2648Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-gray-500 leading-loose mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque et placerat metus. Morbi aliquet felis sit amet
                        erat finibus, ac condimentum ligula ornare.
                  </p>
                      <h4 className="font-bold font-heading">Daisy Carter</h4>
                      <p className="text-gray-500">Product Development</p>
                    </div>
                  </div>
                </div>
                <div
                  className="hidden lg:block absolute w-1/3 px-3 opacity-50"
                  style={{ right: "-370px", top: 0 }}
                >
                  <div className="p-5 bg-white shadow rounded">
                    <svg
                      className="mb-6 text-green-600 h-8"
                      viewBox="0 0 32 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2418 12.749C9.45369 12.522 8.66554 12.4069 7.89887 12.4069C6.71496 12.4069 5.72709 12.6775 4.96109 13.0088C5.69957 10.3053 7.47358 5.6405 11.0075 5.11517C11.3348 5.0665 11.603 4.82986 11.6923 4.51131L12.4646 1.74875C12.5298 1.51512 12.4912 1.26505 12.3579 1.06231C12.2246 0.859563 12.0105 0.724288 11.7705 0.691393C11.5097 0.655812 11.2438 0.637686 10.9803 0.637686C6.73846 0.637686 2.53756 5.06516 0.764895 11.4046C-0.275679 15.1238 -0.580802 20.7154 1.98237 24.2349C3.41668 26.2043 5.50924 27.2559 8.20198 27.361C8.21305 27.3613 8.2238 27.3616 8.23487 27.3616C11.5573 27.3616 14.5035 25.1241 15.3997 21.9208C15.9351 20.0058 15.6931 17.9975 14.7176 16.2644C13.7526 14.5508 12.1632 13.3018 10.2418 12.749Z"
                        fill="currentColor"
                      />
                      <path
                        d="M31.0396 16.2648C30.0746 14.5508 28.4852 13.3018 26.5638 12.749C25.7757 12.522 24.9875 12.4069 24.2212 12.4069C23.0373 12.4069 22.0491 12.6775 21.2831 13.0088C22.0215 10.3053 23.7955 5.6405 27.3298 5.11517C27.6571 5.0665 27.9249 4.82986 28.0146 4.51131L28.7869 1.74875C28.8521 1.51512 28.8135 1.26505 28.6802 1.06231C28.5473 0.859563 28.3331 0.724288 28.0928 0.691393C27.8323 0.655812 27.5664 0.637686 27.3026 0.637686C23.0608 0.637686 18.8599 5.06516 17.0869 11.4046C16.0466 15.1238 15.7415 20.7154 18.305 24.2356C19.739 26.2046 21.8319 27.2566 24.5243 27.3613C24.5354 27.3616 24.5461 27.362 24.5575 27.362C27.8796 27.362 30.8261 25.1244 31.7224 21.9211C32.2571 20.0061 32.0147 17.9975 31.0396 16.2648Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="text-gray-500 leading-loose mb-4">
                      Hasellus sollicitudin massa ut quam aliquam, feugiat fringilla
                      est aliquam. Phasellus tincidunt mi a pellentesque fermentum.
                      Quisque vitae erat iaculis, porttitor elit sed, viverra nisl.
                      Maecenas facilisis viverra sollicitudin.
                </p>
                    <h4 className="font-bold font-heading">Ian Brown</h4>
                    <p className="text-gray-500">Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section>


          <div className="py-20 bg-purple-600 radius-for-skewed">
            <div className="container mx-auto px-4">
              <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">
                  Contact
            </h2>
                <p className="text-gray-50 leading-loose">
                  Got any question? Let’s talk about it.
            </p>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
                  <div className="flex flex-wrap">
                    <div className="mb-12 w-full md:w-1/2 lg:w-1/2">
                      <h3 className="mb-2 text-3xl lg:text-4xl font-bold text-white">
                        Jobs
                  </h3>
                      <p className="text-gray-50">
                        Are you a student interested in working with us?
                  </p>
                      <p className="text-gray-50">
                        Use the contact form to send us your GitHub/LinkedIn.
                  </p>
                    </div>
                    <div className="mb-12 w-full md:w-1/2"></div>
                    <div className="w-full md:w-1/3 lg:w-full">
                      <h3 className="mb-2 text-3xl lg:text-4xl font-bold text-white">
                        Socials
                  </h3>
                      <div className="flex">
                        <a className="mr-3" href="#">
                          <img src="atis-assets/social/facebook-yellow.svg" alt />
                        </a>
                        <a className="mr-3" href="#">
                          <img src="atis-assets/social/twitter-yellow.svg" alt />
                        </a>
                        <a href="#">
                          <img src="atis-assets/social/instagram-yellow.svg" alt />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="max-w-md lg:mx-auto">
                    <form action>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="mb-4">
                        <textarea
                          className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-white rounded outline-none"
                          type="text"
                          placeholder="Message..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="flex px-2 bg-white rounded">
                          <input
                            className="hidden"
                            type="file"
                            placeholder="Choose file.."
                            name="Choose file"
                          />
                          <div className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-gray-500 hover:bg-gray-600 rounded cursor-pointer transition duration-200">
                            Browse
                      </div>
                        </label>


                        <button className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-pink-600 hover:bg-pink-700 text-white font-bold leading-loose transition duration-200">
                          Get Started
                    </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>

  )
}
