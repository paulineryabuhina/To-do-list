
<style scoped lang="scss">
.main {
    display: flex;
}

.content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-top-left-radius: 15px;
    background-color: #dcf2f1;
    margin-top: 15px;
}

.nav {
    height: 100vh;
    width: 250px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__logo {
        height: 31px;
        width: 90px;
    }
    &__navigation {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
    &__line {
        width: 250px;
        height: 1px;
        background: #eef2f6;
    }
    &__link {
        color: #94a3b8;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.2px;
    }
    &__button {
        background-image: url(./assets/button_to_hide.svg);
        border: none;
        outline: none;
        height: 16px;
        width: 24px;
        cursor: pointer;
    }
}

.link {
    text-decoration: none;
    padding: 15px;
    color: #000;
}

.link:hover {
    background-color: #84e5f7;
}
</style> 
<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />
        
		<!-- Content -->
        <div class="content">
            <Header />
            <RouterView />
        </div>
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import { RouterLink, RouterView } from 'vue-router';
import Home from './pages/Home.vue'
</script>

<style lang="scss">
:root {
	--primary: #fff;
	--grey: #94A3B8;
	--active-grey: #F8FAFC;
	--active-blue: #306BFF;
	--sidebar-width: 250px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Open Sans', sans-serif;
}

body {
	background: var(--primary);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>
