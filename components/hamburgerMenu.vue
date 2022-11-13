<template>
    <nav class="navbar is-white is-hidden-desktop">
        <div class="container">
            <div class="navbar-brand">
                <Nuxt-link to="/">
                    <p class="navbar-item brand-text">
                        NWS Admin
                    </p>
                </Nuxt-link>
                <div class="navbar-burger burger" data-target="navMenu"
                    @click="isActive === false ? isActive = true : isActive = false">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu" :class="{ 'is-active': isActive }">
                <div class="navbar-start">
                    <ul class="menu-list">
                        <li>
                            <Nuxt-link to="/users">
                                <p>Utilisateurs</p>
                            </Nuxt-link>
                            <ul>
                                <li>
                                    <Nuxt-link to="/users/add">
                                        <p>Ajouter un utilisateur</p>
                                    </Nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Nuxt-link to="/materials">
                                <p>Equipements</p>
                            </Nuxt-link>
                            <ul>
                                <li>
                                    <Nuxt-link to="/materials/add">
                                        <p>Ajouter un équipement</p>
                                    </Nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Nuxt-link to="/rentals">
                                <p>Locations</p>
                            </Nuxt-link>
                            <ul>
                                <li>
                                    <Nuxt-link to="/rentals/add">
                                        <p>Ajouter une location</p>
                                    </Nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>
</template>

<script setup>
const isActive = ref(false)
</script>