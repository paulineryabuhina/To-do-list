<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="logoURL1" alt="Logo" />
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <div class="menu">
            <router-link to="/" class="button">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link to="/team" class="button">
                <span class="material-icons">group</span>
                <span class="text">My page</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/settings" class="button">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import logoURL1 from '../assets/logo1.svg';

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true');

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem('is_expanded', is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    color: var(--grey);

    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;

    transition: 0.2s ease-in-out;
    border-right: 1px solid #EEF2F6;
    .flex {
        flex: 1 1 0%;
    }

    .logo {
        margin-bottom: 1rem;
        transition: 0.2s ease-in-out;
        img {
            width: 26px;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            transition: 0.2s ease-in-out;
            .material-icons {
                font-size: 2rem;
                color: var(--grey);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--grey);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

   
    .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .menu {
        margin: 0 -1rem;
        border-top: 1px solid #EEF2F6;
        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-in-out;
            }
            .text {
                color: var(--light);
                transition: 0.2s ease-in-out;
            }

            &:hover {
                background-color: var(--active-grey);

                .material-icons,
                .text {
                    color: var(--active-blue);
                }
            }

            &.router-link-exact-active {
                background-color: var(--active-grey);
                border-right: 5px solid var(--active-blue);

                .material-icons,
                .text {
                    color: var(--active-blue);
                }
            }
        }
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }
        .logo{
            transition: 0.2s ease-in-out;
            content: url(../assets/logo.svg);
            width: 90px;
        }
        
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }

        .footer {
            opacity: 0;
        }
    }

    @media (max-width: 1024px) {
        position: absolute;
        z-index: 99;
    }
}
</style>
