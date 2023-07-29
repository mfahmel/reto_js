const createNavbar = (isLogged) => {
    let navHtml = `<nav class="navbar p-0 px-3 bg-white nav__container">
    <div class="container-xl p-0 justify-content-between flex-nowrap">
      <div class="d-flex">
        <button
          class="navbar-toggler mx-md-1 me-2 border-0 d-md-none px-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="#">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
            height="40"
          />
        </a>

        <div class="d-none d-md-block m-auto nav__form__container">
          <form class="d-flex form__search" role="search">
            <div class="input-group">
              <input
                type="text"
                class="form-control border-end-0"
                placeholder="Search..."
                aria-label="Buscar"
                aria-describedby="basic-addon1"
              />
              <button class="border-0 bg-white p-0 search__button">
                <span
                  class="bg-white border-1 border-start-0 rounded-0 rounded-end input-group-text search__hover"
                  id="basic-addon1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6"
                    class="crayons-icon"
                  >
                    <title id="agtkixkainaiofuhj4o3hunp3uvwl1y6">
                      Search
                    </title>
                    <path
                      d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      
                ${
                  isLogged
                    ? `<div class="d-flex">
                    <button class="btn btn-outline-primary d-none d-md-block">
                      Create Post
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6"
                      class="crayons-icon d-md-none my-auto"
                    >
                      <title id="agtkixkainaiofuhj4o3hunp3uvwl1y6">Search</title>
                      <path
                        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
                      ></path>
                    </svg>
            
                    <a href="#" class="navbar-nav mx-3 my-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="a4gcjtvbhvh6eh4ee8qmpi1l37goznso"
                        class="crayons-icon"
                      >
                        <title id="a4gcjtvbhvh6eh4ee8qmpi1l37goznso">
                          Notifications
                        </title>
                        <path
                          d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"
                        ></path>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/emiliodeleonhdz/">
                      <img
                        src="https://ca.slack-edge.com/TCRFJBKB6-U0275TN36E8-db6aee7f44f9-192"
                        alt=""
                        class="navbar-nav rounded-circle me-1"
                        height="40"
                      />
                    </a>
                  </div>
                    `
                    : `<div>
                    <button class="btn">Log In</button>
                    <button class="btn btn-outline-primary">Create Account</button>
                    </div>
                    `
                    
                }
                <div
                class="offcanvas offcanvas-start w-sm-50"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div class="offcanvas-header">
                  <h6 class="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
                    DEV Community
                  </h6>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                <div class="d-flex flex-column">
                <span><h2>DEV Community is a community of 1,108,555 amazing developers</h2></span>
                <br></br>
                <span>We're a place where coders share, stay up-to-date and grow their careers.</span>
                <br></br>
                  <button class="btn btn-outline-primary">Create Account</button>
                    <button class="btn">Log In</button>
                   
                    </div>
                



                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li>
                      <a href="/" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g class="nc-icon-wrapper">
                              <path
                                fill="#A0041E"
                                d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                              ></path>
                              <path
                                fill="#FFE8B6"
                                d="M9 20L22 7l13 13v17H9z"
                              ></path>
                              <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                              <path
                                fill="#66757F"
                                d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                              ></path>
                              <path
                                fill="#66757F"
                                d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                              ></path>
                              <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                              <path
                                fill="#55ACEE"
                                d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                              ></path>
                              <path
                                fill="#5C913B"
                                d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Home
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/listings" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g class="nc-icon-wrapper">
                              <path
                                fill="#FFD983"
                                d="M36 4H14a4 4 0 00-4 4v24H8a4 4 0 000 8h24a4 4 0 004-4V12a4 4 0 000-8z"
                              ></path>
                              <path fill="#E39F3D" d="M12 14h24v-2H14l-2-1z"></path>
                              <path
                                fill="#FFE8B6"
                                d="M14 4a4 4 0 00-4 4v24.555A3.955 3.955 0 008 32a4 4 0 104 4V11.445c.59.344 1.268.555 2 .555a4 4 0 000-8z"
                              ></path>
                              <path
                                fill="#C1694F"
                                d="M16 8a2 2 0 11-4.001-.001A2 2 0 0116 8m-6 28a2 2 0 11-4.001-.001A2 2 0 0110 36m24-17a1 1 0 01-1 1H15a1 1 0 010-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Listings
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/pod" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g class="nc-icon-wrapper">
                              <path
                                fill="#292F33"
                                d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"
                              ></path>
                              <path
                                fill="#66757F"
                                d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"
                              ></path>
                              <path
                                fill="#99AAB5"
                                d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"
                              ></path>
                              <g fill="#292F33" transform="translate(4 4)">
                                <circle cx="15.5" cy="2.5" r="1.5"></circle>
                                <circle cx="20.5" cy="2.5" r="1.5"></circle>
                                <circle cx="17.5" cy="6.5" r="1.5"></circle>
                                <circle cx="22.5" cy="6.5" r="1.5"></circle>
                                <circle cx="12.5" cy="6.5" r="1.5"></circle>
                                <circle cx="15.5" cy="10.5" r="1.5"></circle>
                                <circle cx="10.5" cy="10.5" r="1.5"></circle>
                                <circle cx="20.5" cy="10.5" r="1.5"></circle>
                                <circle cx="25.5" cy="10.5" r="1.5"></circle>
                                <circle cx="17.5" cy="14.5" r="1.5"></circle>
                                <circle cx="22.5" cy="14.5" r="1.5"></circle>
                                <circle cx="12.5" cy="14.5" r="1.5"></circle>
                              </g>
                              <path
                                fill="#66757F"
                                d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"
                              ></path>
                              <path
                                fill="#66757F"
                                d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Podcasts
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/videos" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g transform="translate(4 4)">
                              <path
                                fill="#31373D"
                                d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"
                              ></path>
                              <circle fill="#8899A6" cx="24" cy="19" r="2"></circle>
                              <circle fill="#8899A6" cx="9" cy="19" r="2"></circle>
                              <path
                                fill="#8899A6"
                                d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Videos
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/tags" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g class="nc-icon-wrapper">
                              <path
                                fill="#FFD983"
                                d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
                              ></path>
                              <path
                                fill="#D99E82"
                                d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
                              ></path>
                              <path
                                fill="#C1694F"
                                d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Tags
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/faq" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g class="nc-icon-wrapper">
                              <path
                                fill="#FFD983"
                                d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
                              ></path>
                              <path
                                fill="#CCD6DD"
                                d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
                              ></path>
                              <path
                                fill="#FFCC4D"
                                d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
                              ></path>
                              <path
                                fill="#99AAB5"
                                d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
                              ></path>
                              <path
                                fill="#CCD6DD"
                                d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        FAQ
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="https://shop.forem.com" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g class="nc-icon-wrapper">
                              <path
                                fill="#F4900C"
                                d="M15 4a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"
                              ></path>
                              <path
                                fill="#DD2E44"
                                d="M5 12l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H5z"
                              ></path>
                              <path
                                fill="#FFCC4D"
                                d="M29 9a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"
                              ></path>
                              <path
                                fill="#744EAA"
                                d="M19 17l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H19z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Forem Shop
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/sponsorships" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <path
                              fill="#DD2E44"
                              d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
                            ></path>
                          </svg>
                        </span>
                        Sponsors
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/about" class="nav-link active">
                        <span>
                          <!--?xml version="1.0" encoding="UTF-8"?-->
                          <svg
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 720 720"
                            width="24"
                            height="24"
                          >
                            <defs>
                              <style>
                                .cls-1 {
                                  fill: none;
                                }
    
                                .cls-2 {
                                  clip-path: url(#clippath);
                                }
    
                                .cls-3 {
                                  fill: #fab123;
                                }
    
                                .cls-4 {
                                  fill: #fc4747;
                                }
    
                                .cls-5 {
                                  fill: #ffff40;
                                }
    
                                .cls-6 {
                                  fill: #ffbfff;
                                }
    
                                .cls-7 {
                                  fill: #804de5;
                                }
    
                                .cls-8 {
                                  fill: #84cef9;
                                }
    
                                .cls-9 {
                                  fill: #b0df29;
                                }
    
                                .cls-10 {
                                  fill: #fff;
                                  stroke: #221f1f;
                                  stroke-linecap: round;
                                  stroke-linejoin: round;
                                  stroke-width: 8px;
                                }
                              </style>
                              <clipPath id="clippath">
                                <rect class="cls-1" width="720" height="720"></rect>
                              </clipPath>
                            </defs>
                            <g class="cls-2">
                              <g>
                                <rect
                                  class="cls-4"
                                  x="0"
                                  y=".1"
                                  width="102.86"
                                  height="719.79"
                                ></rect>
                                <rect
                                  class="cls-3"
                                  x="205.72"
                                  y=".15"
                                  width="102.86"
                                  height="719.79"
                                ></rect>
                                <rect
                                  class="cls-5"
                                  x="308.57"
                                  y=".1"
                                  width="102.86"
                                  height="719.79"
                                ></rect>
                                <rect
                                  class="cls-9"
                                  x="411.43"
                                  y=".15"
                                  width="102.86"
                                  height="719.79"
                                ></rect>
                                <rect
                                  class="cls-8"
                                  x="514.29"
                                  y=".21"
                                  width="102.86"
                                  height="719.79"
                                ></rect>
                                <rect
                                  class="cls-7"
                                  x="617.14"
                                  y=".15"
                                  width="102.86"
                                  height="719.79"
                                ></rect>
                                <rect
                                  class="cls-6"
                                  x="102.86"
                                  y=".1"
                                  width="102.86"
                                  height="719.79"
                                ></rect>
                              </g>
                              <g>
                                <path
                                  class="cls-10"
                                  d="M79.58,507.77V225.67c1.67-.28,3.36-.81,5.05-.82,28.74-.04,57.49-.52,86.22,.11,35.22,.78,69.65,33.99,70.37,69.22,.98,48.44,1.02,96.93-.02,145.36-.76,34.94-34.1,67.49-69.76,68.83-29.6,1.11-59.27,.24-88.9,.2-.83,0-1.66-.44-2.95-.81Zm50.83-50.48c10.96,0,21.13,.75,31.15-.16,18.41-1.68,28.51-11.91,28.75-30.18,.51-40.06,.43-80.13,.03-120.19-.16-16-8.24-27.27-22.38-29.33-12.18-1.78-24.82-.37-37.55-.37v180.23Z"
                                ></path>
                                <path
                                  class="cls-10"
                                  d="M443.22,224.83c17.61,0,34.94-.2,52.26,.29,1.86,.05,4.59,3.88,5.25,6.39,15.07,56.99,29.9,114.04,44.8,171.08,1.01,3.87,2.19,7.71,4.83,11.31,16.38-62.94,32.75-125.88,49.14-188.85h56.77c-4.19,16.17-8.18,31.87-12.34,47.54-17.19,64.75-34.02,129.6-52.05,194.12-3.16,11.31-9.95,22.49-17.71,31.43-13.31,15.34-35.65,15.52-49.16,.36-7.88-8.84-14.92-19.98-18.03-31.27-21.76-78.92-42.39-158.14-63.35-237.28-.37-1.4-.24-2.92-.4-5.13Z"
                                ></path>
                                <path
                                  class="cls-10"
                                  d="M324.53,341.07h55.08v51.46h-54.44v64.67h89.74v51.07c-2.72,.13-5.59,.38-8.46,.38-32.94,.03-65.88,.04-98.82,0-18.54-.02-32.37-12.51-34.15-30.92-.49-5.05-.65-10.15-.65-15.22-.04-65.57,.01-131.13-.06-196.7-.01-12.34,1.45-24.34,11.92-32.31,5.23-3.98,12.03-8.17,18.19-8.3,37.08-.77,74.19-.38,111.94-.38v50.98c-21.19,0-42.07-.08-62.96,.04-8.63,.05-20.89-2.78-24.92,1.66-4.62,5.09-2.18,16.8-2.36,25.65-.24,12.18-.06,24.38-.06,37.92Z"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                        About
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/contact" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g class="nc-icon-wrapper">
                              <path
                                fill="#FFAC33"
                                d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"
                              ></path>
                              <path
                                fill="#BE1931"
                                d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"
                              ></path>
                              <path
                                fill="#BE1931"
                                d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Contact
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/guides" class="nav-link active">
                        <span>
                          <!--?xml version="1.0" encoding="UTF-8" standalone="no"?--><svg
                            xmlns:svg="http://www.w3.org/2000/svg"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 47.5 47.5"
                            style="enable-background: new 0 0 47.5 47.5"
                            id="svg2"
                            xml:space="preserve"
                            width="24"
                            height="24"
                          >
                            <defs id="defs6">
                              <clipPath id="clipPath18">
                                <path
                                  d="M 0,38 38,38 38,0 0,0 0,38 z"
                                  id="path20"
                                ></path>
                              </clipPath>
                            </defs>
                            <g transform="matrix(1.25,0,0,-1.25,0,47.5)" id="g12">
                              <g id="g14">
                                <g clip-path="url(#clipPath18)" id="g16">
                                  <g transform="translate(33,30)" id="g22">
                                    <path
                                      d="m 0,0 -28,0 c -2.209,0 -4,-1.791 -4,-4 l 0,-15 c 0,-2.209 1.791,-4 4,-4 l 11.416,0 c 0.52,-0.596 1.477,-1 2.584,-1 1.107,0 2.064,0.404 2.584,1 L 0,-23 c 2.209,0 4,1.791 4,4 L 4,-4 C 4,-1.791 2.209,0 0,0"
                                      id="path24"
                                      style="
                                        fill: #226699;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                    ></path>
                                  </g>
                                  <g transform="translate(21,10)" id="g26">
                                    <path
                                      d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 -1.104,0 -2,0.896 -2,2 l 0,18 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2 L 0,0 z"
                                      id="path28"
                                      style="
                                        fill: #292f33;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                    ></path>
                                  </g>
                                  <g transform="translate(19,11)" id="g30">
                                    <path
                                      d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 l -12,0 c -1.104,0 -2,0.896 -2,2 l 0,18 c 0,1.104 0.896,2 2,2 l 12,0 c 1.104,0 2,-0.896 2,-2 L 0,0 z"
                                      id="path32"
                                      style="
                                        fill: #99aab5;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                    ></path>
                                  </g>
                                  <g transform="translate(19,11)" id="g34">
                                    <path
                                      d="m 0,0 c -0.999,1.998 -3.657,2 -4,2 -2,0 -5,-2 -8,-2 -1,0 -2,0.896 -2,2 l 0,16 c 0,1.104 1,2 2,2 3.255,0 6,2 8,2 3,0 4,-1.896 4,-3 L 0,0 z"
                                      id="path36"
                                      style="
                                        fill: #e1e8ed;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                    ></path>
                                  </g>
                                  <g transform="translate(35,11)" id="g38">
                                    <path
                                      d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 l -12,0 c -1.104,0 -2,0.896 -2,2 l 0,18 c 0,1.104 0.896,2 2,2 l 12,0 c 1.104,0 2,-0.896 2,-2 L 0,0 z"
                                      id="path40"
                                      style="
                                        fill: #99aab5;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                    ></path>
                                  </g>
                                  <g transform="translate(19,11)" id="g42">
                                    <path
                                      d="m 0,0 c 0.999,1.998 3.657,2 4,2 2,0 5,-2 8,-2 1,0 2,0.896 2,2 l 0,16 c 0,1.104 -1,2 -2,2 C 8.744,20 6,22 4,22 1,22 0,20.104 0,19 L 0,0 z"
                                      id="path44"
                                      style="
                                        fill: #ccd6dd;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </span>
                        Guides
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/software-comparisons" class="nav-link active">
                        <span>
                          <!--?xml version="1.0" encoding="UTF-8" standalone="no"?--><svg
                            xmlns:dc="http://purl.org/dc/elements/1.1/"
                            xmlns:cc="http://creativecommons.org/ns#"
                            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                            xmlns:svg="http://www.w3.org/2000/svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 45 45"
                            style="enable-background: new 0 0 45 45"
                            xml:space="preserve"
                            version="1.1"
                            id="svg2"
                            width="24"
                            height="24"
                          >
                            <metadata id="metadata8">
                              <rdf:rdf
                                ><cc:work rdf:about=""
                                  ><dc:format>image/svg+xml</dc:format
                                  ><dc:type
                                    rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                                  ></dc:type></cc:work
                              ></rdf:rdf>
                            </metadata>
                            <defs id="defs6">
                              <clipPath
                                id="clipPath16"
                                clipPathUnits="userSpaceOnUse"
                              >
                                <path
                                  id="path18"
                                  d="M 0,36 36,36 36,0 0,0 0,36 Z"
                                ></path>
                              </clipPath>
                            </defs>
                            <g transform="matrix(1.25,0,0,-1.25,0,45)" id="g10">
                              <g id="g12">
                                <g clip-path="url(#clipPath16)" id="g14">
                                  <g transform="translate(2,20)" id="g20">
                                    <path
                                      id="path22"
                                      style="
                                        fill: #ffcc4d;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                      d="m 0,0 c 0,-8.837 7.164,-16 16,-16 8.837,0 16,7.163 16,16 C 32,8.836 24.837,16 16,16 7.164,16 0,8.836 0,0"
                                    ></path>
                                  </g>
                                  <g transform="translate(15.4063,25.5)" id="g24">
                                    <path
                                      id="path26"
                                      style="
                                        fill: #664500;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                      d="m 0,0 c 0,-1.381 -0.896,-2.5 -2,-2.5 -1.104,0 -2,1.119 -2,2.5 0,1.38 0.896,2.5 2,2.5 1.104,0 2,-1.12 2,-2.5"
                                    ></path>
                                  </g>
                                  <g transform="translate(26,24.5)" id="g28">
                                    <path
                                      id="path30"
                                      style="
                                        fill: #664500;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                      d="m 0,0 c 0,-1.381 -0.895,-2.5 -2,-2.5 -1.104,0 -2,1.119 -2,2.5 0,1.38 0.896,2.5 2,2.5 1.105,0 2,-1.12 2,-2.5"
                                    ></path>
                                  </g>
                                  <g transform="translate(9.6709,29.667)" id="g32">
                                    <path
                                      id="path34"
                                      style="
                                        fill: #664500;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                      d="M 0,0 C -0.164,0.087 -0.303,0.223 -0.391,0.398 -0.607,0.827 -0.431,1.325 0.002,1.511 4.268,3.341 7.701,1.554 7.845,1.477 8.278,1.246 8.453,0.729 8.236,0.323 8.02,-0.082 7.496,-0.223 7.063,0.005 6.94,0.069 4.231,1.437 0.785,-0.042 0.528,-0.151 0.238,-0.127 0,0"
                                    ></path>
                                  </g>
                                  <g
                                    transform="translate(14.7427,16.4277)"
                                    id="g36"
                                  >
                                    <path
                                      id="path38"
                                      style="
                                        fill: #664500;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                      d="M 0,0 C -0.136,0.127 -0.236,0.293 -0.276,0.486 -0.375,0.955 -0.078,1.392 0.389,1.46 4.981,2.138 7.841,-0.469 7.962,-0.58 8.322,-0.914 8.357,-1.457 8.044,-1.795 7.732,-2.131 7.189,-2.133 6.83,-1.801 6.726,-1.709 4.458,0.307 0.748,-0.24 0.471,-0.281 0.197,-0.184 0,0"
                                    ></path>
                                  </g>
                                  <g transform="translate(20.4307,25.917)" id="g40">
                                    <path
                                      id="path42"
                                      style="
                                        fill: #664500;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                      d="M 0,0 C -0.156,0.098 -0.286,0.243 -0.362,0.424 -0.549,0.866 -0.339,1.352 0.105,1.508 4.486,3.044 7.79,1.028 7.929,0.941 8.344,0.681 8.483,0.154 8.24,-0.237 7.998,-0.627 7.464,-0.732 7.049,-0.475 6.929,-0.402 4.321,1.146 0.782,-0.095 0.518,-0.187 0.23,-0.143 0,0"
                                    ></path>
                                  </g>
                                  <g transform="translate(17.2764,0.8682)" id="g44">
                                    <path
                                      id="path46"
                                      style="
                                        fill: #f4900c;
                                        fill-opacity: 1;
                                        fill-rule: nonzero;
                                        stroke: none;
                                      "
                                      d="m 0,0 c 0,0 1.265,0.411 1.429,1.352 0.173,0.971 -0.624,1.167 -0.624,1.167 0,0 1.041,0.208 1.172,1.376 0.123,1.1 -0.862,1.363 -0.862,1.363 0,0 0.97,0.4 1.016,1.539 0.038,0.959 -0.995,1.428 -0.995,1.428 0,0 5.038,1.22 5.555,1.34 0.516,0.121 1.321,0.616 1.07,1.695 -0.249,1.08 -1.204,1.118 -1.698,1.003 -0.494,-0.116 -6.744,-1.567 -8.9,-2.069 -0.23,-0.053 -1.308,-0.302 -1.439,-0.334 -0.54,-0.127 -0.785,0.111 -0.405,0.512 0.509,0.536 0.833,1.129 0.947,2.113 0.119,1.036 -0.232,2.314 -0.433,2.809 -0.374,0.921 -1.005,1.649 -1.734,1.899 -1.138,0.39 -1.946,-0.321 -1.542,-1.561 0.604,-1.855 0.209,-3.375 -0.833,-4.293 -2.449,-2.157 -3.589,-3.695 -2.83,-6.973 0.827,-3.575 4.377,-5.876 7.952,-5.048 C -2.965,-0.64 0,0 0,0"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </span>
                        Software comparisons
                      </a>
                    </li>
                  </ul>
                  <h6 class="fw-bold mt-3">Other</h6>
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="mt-1">
                      <a href="/code-of-conduct" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g class="nc-icon-wrapper">
                              <path
                                fill="#FFDB5E"
                                d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"
                              ></path>
                              <path
                                fill="#EE9547"
                                d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Code of Conduct
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/privacy" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g transform="translate(4 4)">
                              <circle
                                fill="#FFCC4D"
                                cx="18"
                                cy="18"
                                r="18"
                              ></circle>
                              <path
                                fill="#664500"
                                d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.094-.628z"
                              ></path>
                              <path
                                fill="#65471B"
                                d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"
                              ></path>
                              <path
                                fill="#FFF"
                                d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"
                              ></path>
                              <path
                                fill="#65471B"
                                d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"
                              ></path>
                              <path
                                fill="#292F33"
                                d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Privacy Policy
                      </a>
                    </li>
                    <li class="mt-1">
                      <a href="/terms" class="nav-link active">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g transform="translate(4 4)">
                              <ellipse
                                fill="#F5F8FA"
                                cx="8.828"
                                cy="18"
                                rx="7.953"
                                ry="13.281"
                              ></ellipse>
                              <path
                                fill="#E1E8ED"
                                d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"
                              ></path>
                              <circle
                                fill="#8899A6"
                                cx="6.594"
                                cy="18"
                                r="4.96"
                              ></circle>
                              <circle
                                fill="#292F33"
                                cx="6.594"
                                cy="18"
                                r="3.565"
                              ></circle>
                              <circle
                                fill="#F5F8FA"
                                cx="7.911"
                                cy="15.443"
                                r="1.426"
                              ></circle>
                              <ellipse
                                fill="#F5F8FA"
                                cx="27.234"
                                cy="18"
                                rx="7.953"
                                ry="13.281"
                              ></ellipse>
                              <path
                                fill="#E1E8ED"
                                d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"
                              ></path>
                              <circle
                                fill="#8899A6"
                                cx="25"
                                cy="18"
                                r="4.96"
                              ></circle>
                              <circle
                                fill="#292F33"
                                cx="25"
                                cy="18"
                                r="3.565"
                              ></circle>
                              <circle
                                fill="#F5F8FA"
                                cx="26.317"
                                cy="15.443"
                                r="1.426"
                              ></circle>
                            </g>
                          </svg>
                        </span>
                        Terms of use
                      </a>
                    </li>
                  </ul>
    
                  <div class="d-flex justify-content-start py-0 mt-3">
                    <a
                      href="https://twitter.com/thepracticaldev"
                      target="_blank"
                      class="nav-link active"
                      rel="noopener me"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="ag8vw0hnj2gr7s8xopkntr3mkwh89of0"
                        class="crayons-icon c-link__icon"
                      >
                        <title id="ag8vw0hnj2gr7s8xopkntr3mkwh89of0">Twitter</title>
                        <path
                          d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
                          fill="#65bbf2"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/thepracticaldev"
                      target="_blank"
                      class="nav-link active ms-3"
                      rel="noopener me"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="a1z73tq7jx0h9hn7y7hongy6vzech7e1"
                        class="crayons-icon c-link__icon"
                      >
                        <title id="a1z73tq7jx0h9hn7y7hongy6vzech7e1">
                          Facebook
                        </title>
                        <path
                          d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/forem"
                      target="_blank"
                      class="nav-link active ms-3"
                      rel="noopener me"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="a7mykcfdxxhf4v7ah3zsn8b62yuawjjd"
                        class="crayons-icon c-link__icon"
                      >
                        <title id="a7mykcfdxxhf4v7ah3zsn8b62yuawjjd">Github</title>
                        <path
                          d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/thepracticaldev"
                      target="_blank"
                      class="nav-link active ms-3"
                      rel="noopener me"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="a9pr77i13ygy1y6r7yyfjtd5ut6iy0o1"
                        class="crayons-icon c-link__icon"
                      >
                        <title id="a9pr77i13ygy1y6r7yyfjtd5ut6iy0o1">
                          Instagram
                        </title>
                        <path
                          d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitch.com/thepracticaldev"
                      target="_blank"
                      class="nav-link active ms-3"
                      rel="noopener me"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="as1f7lro00kzkk7qtb7d1xcudhb69nv4"
                        class="crayons-icon c-link__icon"
                      >
                        <title id="as1f7lro00kzkk7qtb7d1xcudhb69nv4">Twitch</title>
                        <path
                          d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://fosstodon.org/@thepracticaldev"
                      target="_blank"
                      class="nav-link active ms-3"
                      rel="noopener me"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="a7jwzmrd65xr5h8qrb743k9f7rl6fnpl"
                        class="crayons-icon c-link__icon"
                      >
                        <title id="a7jwzmrd65xr5h8qrb743k9f7rl6fnpl">
                          Mastodon
                        </title>
                        <path
                          d="M21.258 13.99c-.274 1.41-2.456 2.955-4.962 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.292 2.215 2.196 2.347 4 2.41 1.82.062 3.44-.45 3.44-.45l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-3.923-1.039-4.598-5.22-4.701-9.464-.031-1.26-.012-2.447-.012-3.44 0-4.34 2.843-5.611 2.843-5.611 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.397 5.424zm-2.956-5.087c0-1.074-.273-1.927-.822-2.558-.567-.631-1.308-.955-2.229-.955-1.065 0-1.871.41-2.405 1.228l-.518.87-.519-.87C11.276 5.8 10.47 5.39 9.405 5.39c-.921 0-1.663.324-2.229.955-.549.631-.822 1.484-.822 2.558v5.253h2.081V9.057c0-1.075.452-1.62 1.357-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.358.545 1.358 1.62v5.1h2.08V8.902l.001.001z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
              `;
    return navHtml;
  };
  
  export { createNavbar };
  