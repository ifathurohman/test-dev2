import React from 'react'

const Breadcumbs = () => {
    return (
        <>
            <div class="w-full px-[108px] h-[56px] pt-[20px] pb-[21px] text-opacity-70 text-base font-normal font-Poppins leading-[15px]">
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="pt-[56px] pb-[36px] px-[108px] h-[113px]">

                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="text-blue-900 absolute inset-y-0 end-0 flex items-center px-[24px] pointer-events-none">

                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M7.97266 7.97266C7.97266 7.97266 8.14388 7.80143 8.48633 7.45898C8.82878 7.11654 9 6.46354 9 5.5C9 4.53646 8.65755 3.71224 7.97266 3.02734C7.28776 2.34245 6.46354 2 5.5 2C4.53646 2 3.71224 2.34245 3.02734 3.02734C2.34245 3.71224 2 4.53646 2 5.5C2 6.46354 2.34245 7.28776 3.02734 7.97266C3.71224 8.65755 4.53646 9 5.5 9C6.46354 9 7.28776 8.65755 7.97266 7.97266ZM13 12C13 12.2708 12.901 12.5052 12.7031 12.7031C12.5052 12.901 12.2708 13 12 13C11.7188 13 11.4844 12.901 11.2969 12.7031L8.61719 10.0312C7.6849 10.6771 6.64583 11 5.5 11C4.75521 11 4.04297 10.8555 3.36328 10.5664C2.68359 10.2773 2.09766 9.88672 1.60547 9.39453C1.11328 8.90234 0.722656 8.31641 0.433594 7.63672C0.144531 6.95703 0 6.24479 0 5.5C0 4.75521 0.144531 4.04297 0.433594 3.36328C0.722656 2.68359 1.11328 2.09766 1.60547 1.60547C2.09766 1.11328 2.68359 0.722656 3.36328 0.433594C4.04297 0.144531 4.75521 0 5.5 0C6.24479 0 6.95703 0.144531 7.63672 0.433594C8.31641 0.722656 8.90234 1.11328 9.39453 1.60547C9.88672 2.09766 10.2773 2.68359 10.5664 3.36328C10.8555 4.04297 11 4.75521 11 5.5C11 6.64583 10.6771 7.6849 10.0312 8.61719L12.7109 11.2969C12.9036 11.4896 13 11.724 13 12Z" fill="#042893" />
                            </svg>

                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full px-[24px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari Produk dan Daerah Disini?" required />
                    </div>
                </form>

            </div>
        </>
    )
}

export default Breadcumbs