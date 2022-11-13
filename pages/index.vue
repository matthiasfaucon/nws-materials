<template>
  <section>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <p class="navbar-item brand-text">
            NWS Admin
          </p>
          <div class="navbar-burger burger" data-target="navMenu" @click="isActive === false ? isActive = true : isActive = false">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu" :class="{'is-active': isActive}">
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
    <!-- END NAV -->
    <div class="container">
      <div class="columns">
        <div class="column is-3 ">
          <LeftMenu />
        </div>
        <div class="column is-9">
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{{ countUsers }}</p>
                  <p class="subtitle">Utilisateurs</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{{ countMaterials }}</p>
                  <p class="subtitle">Equipements</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{{ countRentals }}</p>
                  <p class="subtitle">Locations</p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { getUsers, getMaterials, getRentals } from '../utils/api';

const countUsers = ref([])
const countMaterials = ref([])
const countRentals = ref([])

const isActive = ref(false)

onMounted(async () => {
  countUsers.value = await (await getUsers()).length
  countMaterials.value = await (await getMaterials()).length
  countRentals.value = await (await getRentals()).length
})

</script>
  
<style>

</style>
