<template>
  <div class="flex h-screen bg-red-900">
    <button
      @click="isOpen = !isOpen"
      class="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md hover:bg-gray-100 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <aside
      class="w-72 bg-[#3674B5] shadow-xl transform transition-all duration-300 fixed md:relative h-full z-40 flex flex-col"
      :class="{ 'translate-x-0': isOpen, '-translate-x-full md:translate-x-0': !isOpen }"
    >
      <div class="p-6 border-b bg-[#F8FAFC] border-gray-200 flex items-center space-x-3">
        <img src="/logo1.png" class="w-10 h-10 rounded-full object-cover" alt="Mentora Logo" />
        <div>
          <h1 class="text-xl font-bold text-[#3674B5]">Mentora</h1>
          <p class="text-xs text-gray-500">Learning Platform</p>
        </div>
      </div>

      <nav class="flex-1 overflow-y-auto py-4 px-2">
        <ul class="space-y-1">
          <li>
            <router-link
              to="/dashboard"
              class="flex items-center p-3 rounded-lg transition-all group"
              active-class="bg-[#F8FAFC] font-medium"
            >
              <div class="">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M22 22L2 22"
                      :stroke="$route.path === '/dashboard' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                      :stroke="$route.path === '/dashboard' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                      :stroke="$route.path === '/dashboard' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M4 22V9.5"
                      :stroke="$route.path === '/dashboard' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M20 9.5V13.5M20 22V17.5"
                      :stroke="$route.path === '/dashboard' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                      :stroke="$route.path === '/dashboard' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                      :stroke="$route.path === '/dashboard' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                    ></path>
                  </g>
                </svg>
              </div>
              <span
                :class="{
                  'text-[#3674B5]': $route.path === '/dashboard',
                  'text-[#F8FAFC]': $route.path !== '/dashboard',
                }"
                class="ml-3"
                >Dashboard</span
              >
              <span class="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >New</span
              >
            </router-link>
          </li>

          <li>
            <router-link
              to="/my-courses"
              class="flex items-center p-3 rounded-lg transition-all group"
              active-class="bg-blue-50 font-medium"
            >
              <div class="">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7 h-7"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235"
                      :stroke="$route.path === '/my-courses' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M8 7H16"
                      :stroke="$route.path === '/my-courses' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M8 10.5H13"
                      :stroke="$route.path === '/my-courses' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12"
                      :stroke="$route.path === '/my-courses' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <span
                :class="{
                  'text-[#3674B5]': $route.path === '/my-courses',
                  'text-[#F8FAFC]': $route.path !== '/my-courses',
                }"
                class="ml-3"
                >My Courses</span
              >
            </router-link>
          </li>

          <li class="border-t border-gray-200 my-2"></li>

          <li>
            <router-link
              to="/settings"
              class="flex items-center p-3"
              active-class="bg-blue-50 font-medium"
            >
              <div class="">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7 h-7"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      :stroke="$route.path === '/settings' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                      :stroke="$route.path === '/settings' ? '#3674B5' : 'white'"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <span
                :class="{
                  'text-[#3674B5]': $route.path === '/settings',
                  'text-[#F8FAFC]': $route.path !== '/settings',
                }"
                class="ml-3"
                >Settings</span
              >
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="p-4 border-t border-gray-200">
        <div class="flex items-center space-x-3">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            class="w-10 h-10 rounded-full object-cover"
            alt="User"
          />
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">Sarah Johnson</p>
            <p class="text-xs text-gray-500 truncate">sarah@example.com</p>
          </div>
          <button
            @click="logout"
            class="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-red-500 transition-all"
            title="Logout"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l3-3a1 1 0 10-1.414-1.414L14 7.586l-2.293-2.293a1 1 0 10-1.414 1.414L12.586 9H7a1 1 0 100 2h5.586l-1.293 1.293z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)

const logout = () => {
  // Add your logout logic here
  console.log('Logging out...')
  router.push('/login')
}
</script>

<style scoped>
/* Smooth transitions for mobile menu */
.aside {
  transition: transform 0.3s ease-in-out;
}

/* Custom scrollbar for sidebar */
nav::-webkit-scrollbar {
  width: 6px;
}

nav::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

nav::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
