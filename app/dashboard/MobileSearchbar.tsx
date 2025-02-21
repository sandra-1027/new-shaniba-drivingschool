import React from 'react'

const MobileSearchbar = () => {
  return (
   
      <>
     {/* Mobile Searchbar */}
<div className="mobile-searchbar fixed inset-0 z-[100] hidden flex-col bg-white dark:bg-navy-700">
  <div className="flex items-center space-x-2 bg-slate-100 px-3 pt-2 dark:bg-navy-800">
    <button className="mobile-searchbar-hide btn -ml-1.5 size-7 shrink-0 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25">
      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <input className="mobile-searchbar-input form-input h-8 w-full bg-transparent placeholder-slate-400 dark:placeholder-navy-300" type="text" placeholder="Search here..." />
  </div>
  <div data-active-tab="#mobile-search-all" className="mobile-search-tab-wrapper is-scrollbar-hidden flex shrink-0 overflow-x-auto bg-slate-100 px-2 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
    <button data-target="#mobile-search-all" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" className="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5">
      All
    </button>
    <button data-target="#mobile-search-files" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" className="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5">
      Files
    </button>
    <button data-target="#mobile-search-chats" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" className="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5">
      Chats
    </button>
    <button data-target="#mobile-search-emails" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" className="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5">
      Emails
    </button>
    <button data-target="#mobile-search-projects" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" className="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5">
      Projects
    </button>
    <button data-target="#mobile-search-tasks" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" className="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5">
      Tasks
    </button>
  </div>
  <div className="is-scrollbar-hidden overflow-y-auto overscroll-contain pb-2">
    <div className="is-scrollbar-hidden mt-3 flex space-x-4 overflow-x-auto px-3">
      <a href="apps-kanban.html" className="w-14 text-center">
        <div className="avatar size-12">
          <div className="is-initial rounded-full bg-success text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
          </div>
        </div>
        <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
          Kanban
        </p>
      </a>
      <a href="dashboards-crm-analytics.html" className="w-14 text-center">
        <div className="avatar size-12">
          <div className="is-initial rounded-full bg-secondary text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
        <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
          Analytics
        </p>
      </a>
      <a href="apps-chat.html" className="w-14 text-center">
        <div className="avatar size-12">
          <div className="is-initial rounded-full bg-info text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
        <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
          Chat
        </p>
      </a>
      <a href="apps-filemanager.html" className="w-14 text-center">
        <div className="avatar size-12">
          <div className="is-initial rounded-full bg-error text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
        </div>
        <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
          Files
        </p>
      </a>
      <a href="dashboards-crypto.html" className="w-14 text-center">
        <div className="avatar size-12">
          <div className="is-initial rounded-full bg-secondary text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
          Crypto
        </p>
      </a>
      <a href="dashboards-banking-1.html" className="w-14 text-center">
        <div className="avatar size-12">
          <div className="is-initial rounded-full bg-primary text-white dark:bg-accent">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
        </div>
        <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
          Banking
        </p>
      </a>
      <a href="apps-todo.html" className="w-14 text-center">
        <div className="avatar size-12">
          <div className="is-initial rounded-full bg-info text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12.5293 18L20.9999 8.40002" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 13.2L7.23529 18L17.8235 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
          Todo
        </p>
      </a>
      <a href="dashboards-orders.html" className="w-14 text-center">
        <div className="avatar size-12">
          <div className="is-initial rounded-full bg-warning text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
          Orders
        </p>
      </a>
    </div>
    <div className="mt-3 flex items-center justify-between bg-slate-100 py-1.5 px-3 dark:bg-navy-800">
      <p className="text-xs uppercase">Recent</p>
      <a href="#" className="text-tiny+ font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">
        View All
      </a>
    </div>
    <div className="mt-1 font-inter font-medium">
      <a className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="apps-chat.html">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span>Chat App</span>
      </a>
      <a className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="apps-filemanager.html">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
        <span>File Manager App</span>
      </a>
      <a className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="apps-mail.html">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Email App</span>
      </a>
      <a className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="apps-kanban.html">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
        <span>Kanban Board</span>
      </a>
      <a className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="apps-todo.html">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 13.2L7.23529 18L17.8235 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.5293 18L20.9999 8.40002" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Todo App</span>
      </a>
      <a className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="dashboards-crypto-2.html">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Crypto Dashboard</span>
      </a>
      <a className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="dashboards-banking-2.html">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
        <span>Banking Dashboard</span>
      </a>
      <a className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="dashboards-crm-analytics.html">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span>Analytics Dashboard</span>
      </a>
      <a className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" href="dashboards-influencer.html">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Influencer Dashboard</span>
      </a>
    </div>
  </div>
</div>
</>
  )
}

export default MobileSearchbar
