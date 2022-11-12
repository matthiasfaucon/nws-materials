<template>
    <aside class="menu is-hidden-mobile">
        <ul class="menu-list">
            <li>
                <Nuxt-link to="/">
                    <p>Accueil</p>
                </Nuxt-link>

            </li>
        </ul>
        <p class="menu-label">
            Actions
        </p>
        <ul class="menu-list">
            <li>
                <Nuxt-link to="/users">
                    <p>Utitlisateurs</p>
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
    </aside>
</template>

<script setup></script>

<style scoped>

</style>