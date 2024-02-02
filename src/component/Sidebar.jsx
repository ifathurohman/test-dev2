import React from "react";
import ProdukKatalog from "./page/ProdukKatalog";

const Sidebar = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container pt-[55px] px-[109px] mx-auto">
          <div class="flex flex-wrap w-full mb-[34px]">
            <div class="lg:w-1/4 w-full mb-6 lg:mb-0">
              <h1 class="text-gray-800 text-2xl ml-[20px] font-bold font-Poppins leading-[18px]">
                Product Categories
              </h1>
            </div>
            <div class="lg:w-1/4 w-full mb-6 lg:mb-0">
              <h1 class="text-gray-800 text-2xl font-bold font-Poppins leading-[18px]">
                Yang paling Banyak dicari
              </h1>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <aside
                id="sidebar-multi-level-sidebar"
                class="relative top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
              >
                <div class="h-full px-3 overflow-y-auto dark:bg-gray-800">
                  <ul class="space-y-2 font-medium w-full">
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-slate-500 text-base font-medium font-Poppins leading-tight rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <img
                          className="w-8 h-8"
                          src="./1.png"
                        />
                        <span class="ms-3">Semua Jenis Ikan</span>
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="flex items-center w-full p-2 text-slate-500 text-base font-medium font-Poppins leading-tight transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example"
                      >
                        <img
                          className="w-8 h-8"
                          src="https://via.placeholder.com/32x32"
                        />
                        <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                          Ikan Laut Segar
                        </span>
                        <img
                          className="w-8 h-8"
                          src="https://via.placeholder.com/32x32"
                        />
                      </button>
                      <ul id="dropdown-example" class="hidden py-2 space-y-2">
                        <li>
                          <a
                            href="#"
                            class="flex items-center w-full p-2 text-slate-500 text-base font-medium font-Poppins leading-tight transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Ikan Air Laut
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center w-full p-2 text-slate-500 text-base font-medium font-Poppins leading-tight transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Ikan Air Tawar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-slate-500 text-base font-medium font-Poppins leading-tight rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <img
                          className="w-8 h-8"
                          src="https://via.placeholder.com/32x32"
                        />
                        <span class="flex-1 ms-3 whitespace-nowrap">
                          Ikan Laut Cold Storage
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-slate-500 text-base font-medium font-Poppins leading-tight rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <img
                          className="w-8 h-8"
                          src="https://via.placeholder.com/32x32"
                        />
                        <span class="flex-1 ms-3 whitespace-nowrap">
                          Seafood
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div class="xl:w-3/4 md:w-1/2 p-4">
                <ProdukKatalog/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
