<template>
  <header class="header">
    <div class="header__container">
      <ul class="header__list">
        <li class="header__item">
          <router-link to="/my-plants" class="header__link"> MY PLANTS </router-link>
        </li>
        <li class="header__item">
          <router-link to="/" class="header__link"> DISCOVER </router-link>
        </li>
      </ul>
      <h1 class="header__title"> SHARE MY PLANTS </h1>
      <ul class="header__list">
        <li class="header__item">
          <a href="https://github.com/MrSociety404" class="header__link">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Github</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z"
              />
            </svg>
          </a>
        </li>
        <li class="header__item">
          <a href="https://twitter.com" class="header__link">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Github</title>
              <path
                d="M19.7025 2.11416C19.0067 2.4225 18.2592 2.63083 17.4733 2.725C18.2842 2.23983 18.8908 1.47622 19.18 0.576665C18.4182 1.02916 17.5844 1.34766 16.715 1.51833C16.1303 0.894052 15.3559 0.48027 14.5119 0.341226C13.668 0.202183 12.8017 0.345658 12.0477 0.749375C11.2936 1.15309 10.694 1.79447 10.3418 2.57392C9.9896 3.35337 9.9046 4.22729 10.1 5.06C8.55639 4.98249 7.04635 4.58129 5.66784 3.88242C4.28934 3.18355 3.07319 2.20263 2.09832 1.00333C1.76499 1.57833 1.57332 2.245 1.57332 2.955C1.57295 3.59416 1.73035 4.22353 2.03155 4.78728C2.33276 5.35102 2.76846 5.8317 3.29999 6.18667C2.68355 6.16705 2.08072 6.00048 1.54166 5.70083V5.75083C1.54159 6.64728 1.85168 7.51615 2.41931 8.21C2.98693 8.90384 3.77713 9.37994 4.65582 9.5575C4.08398 9.71226 3.48444 9.73506 2.90249 9.62417C3.1504 10.3955 3.63332 11.07 4.28363 11.5533C4.93394 12.0365 5.71909 12.3043 6.52916 12.3192C5.15402 13.3987 3.45573 13.9842 1.70749 13.9817C1.39781 13.9817 1.08839 13.9637 0.780823 13.9275C2.55539 15.0685 4.62111 15.674 6.73082 15.6717C13.8725 15.6717 17.7767 9.75667 17.7767 4.62666C17.7767 4.46 17.7725 4.29166 17.765 4.125C18.5244 3.57581 19.1799 2.89574 19.7008 2.11666L19.7025 2.11416Z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background-color: $light-grey;
  color: $dark;
  box-shadow: $shadow;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: $xxl;
    margin: 0 auto;
    padding: 1.5em 1em;
  }
  &__title {
    font-family: $serif;
    font-size: 2em;
  }
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__link {
    padding: 0.5em 0;
    border-bottom: 2px solid transparent;
    letter-spacing: 0.1em;
    margin: 0 0.7em;
    transition: border-color 0.2s ease, color 0.2s ease, fill 0.2s ease;
    fill: $dark;
    &:hover {
      color: $primary;
      border-color: $primary;
      fill: $primary;
    }
  }
}
</style>