<template>
  <section>
    <div class="flex min-h-full">
      <div
        class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <div class="w-16 h-16 mx-auto">
              <LogoTwitter />
            </div>
            <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              {{ $t("sign-in-to-your-account") }}
            </h2>
            <p v-if="false" class="mt-2 text-sm text-gray-600">
              Or
              {{ " " }}
              <a href="#" class="font-medium text-dim-600 hover:text-dim-500"
                >start your 14-day free trial</a
              >
            </p>
          </div>

          <div class="mt-8">
            <div>
              <div>
                <p class="text-sm font-medium text-gray-700">Sign in with</p>

                <div class="mt-1 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="#"
                      class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span class="sr-only">Sign in with Facebook</span>
                      <svg
                        class="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span class="sr-only">Sign up with Google</span>
                      <svg 
                        class="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                    </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span class="sr-only">Sign in with GitHub</span>
                      <svg
                        class="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="relative mt-6">
                <div
                  class="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="bg-white px-2 text-gray-500"
                    >Or continue with</span
                  >
                </div>
              </div>
            </div>

            <div class="mt-6">
              <form action="#" method="POST" class="space-y-6">
                <!-- <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                  <div class="mt-1">
                    <input 
                      v-model="email" 
                      id="email" 
                      name="email" 
                      type="email" 
                      autocomplete="email" 
                      required="true" 
                      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-dim-500 focus:outline-none focus:ring-dim-500 sm:text-sm"
                    />
                  </div>
                </div> -->
                <div>
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700"
                    >Username</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="username"
                      id="username"
                      name="username"
                      type="username"
                      autocomplete="username"
                      required="true"
                      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-dim-500 focus:outline-none focus:ring-dim-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                    >Password</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="password"
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required="true"
                      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-dim-500 focus:outline-none focus:ring-dim-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-dim-600 focus:ring-dim-500"
                    />
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm text-gray-900"
                      >Remember me</label
                    >
                  </div>

                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-dim-600 hover:text-dim-500"
                      >Forgot your password?</a
                    >
                  </div>
                </div>

                <div class="flex items-center justify-between gap-3">
                  <UIButton
                    text="Sign in"
                    size="block"
                    actionColor="primary"
                    :loading="loading"
                    :disabled="disabled"
                    @click="onLogin"
                  />
                  <UIButton
                    text="Register"
                    size="block"
                    actionColor="secondary"
                    :loading="loading"
                    @click="onRegister"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="relative hidden w-0 flex-1 lg:block">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
    <UINotificationSuccess
      :username="username"
      :show="showSuccessNotification"
      @close="showSuccessNotification = false"
    />
    <UINotificationError
      :message="errorMessage"
      :show="showErrorNotification"
      @close="showErrorNotification = false"
    />
    <!-- <pre>{{ userStore.$state }}</pre>
  <pre>{{ user }}</pre> -->
  </section>
</template>
<script setup lang="ts">
import { useUser } from "~/stores/user";
import { useCustomLocaleRoute } from "~~/composables/useCustomLocaleRoute";
import { User } from "../types";

const userStore = useUser();
const user = userStore.$state.user;

definePageMeta({
  layout: "clean",
});

let loading = ref(false);
let username = ref("");
let password = ref("");
let showSuccessNotification = ref(false);
let showErrorNotification = ref(false);
let errorMessage = ref("");
let disabled = computed(() => {
  return !username.value || !password.value;
});

if (user) {
  const router = useRouter();
  const path = useCustomLocaleRoute("/");
  router.push({ path });
}

const onLogin = async () => {
  try {
    loading.value = true;

    const { data, error } = await useFetch("/api/auth/login", {
      method: "post",
      body: {
        username: username.value,
        password: password.value,
      },
    });

    if (error.value) {
      const message = await error.value?.statusMessage;
      throw new Error(message);
    }

    const user = data.value?.user as User;
    const { accessToken, refreshToken }: any = data.value;

    userStore.setUser(user);
    userStore.setAccessToken(accessToken);
    userStore.setRefreshToken(refreshToken);

    loading.value = false;
    showSuccessNotification.value = true;

    setTimeout(() => {
      const router = useRouter();
      const path = useCustomLocaleRoute("/");
      router.push({ path });
    }, 1000);
  } catch (error: any) {
    loading.value = false;
    errorMessage = error.message;
    showErrorNotification.value = true;
  }
}

const onRegister = async () => {
  const router = useRouter()
  const path = useCustomLocaleRoute("/register")
  router.push({ path })
}
</script>
