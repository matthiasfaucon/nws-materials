<template>
  <section>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <p class="navbar-item brand-text">
            NWS Admin
          </p>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
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
import { getUsers, getMaterials, getRentals} from '../utils/api';

const countUsers = ref([])
const countMaterials = ref([])
const countRentals = ref([])

onMounted(async () => {
    countUsers.value = await (await getUsers()).length
    countMaterials.value = await (await getMaterials()).length
    countRentals.value = await (await getRentals()).length
})

</script>
  
<style>

</style>
