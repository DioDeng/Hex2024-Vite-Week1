<template>
  <section class="container-lg py-5">
    <div class="list-group" id="list-tab" role="tablist">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="list" href="#list-home">WEEK1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="list" href="#list-profile">WEEK2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="list" href="#list-messages">WEEK3</a>
        </li>
      </ul>
    </div>
    <div class="tab-content py-5" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="list-home"
        role="tabpanel"
        aria-labelledby="list-home-list"
      >
        <Week1 />
      </div>
      <div
        class="tab-pane fade"
        id="list-profile"
        role="tabpanel"
        aria-labelledby="list-profile-list"
      >
        <Week2 />
      </div>
      <div
        class="tab-pane fade"
        id="list-messages"
        role="tabpanel"
        aria-labelledby="list-messages-list"
      >
        week3
      </div>
    </div>
  </section>
  <MessageTost />
</template>

<style lang="scss" scoped>
@media (max-width: 475px) {
  .rwdWidth {
    width: 100%;
  }
}
.table-dark {
  --bs-table-color: #fff;
  --bs-table-bg: #973532;
}
.table-warning {
  --bs-table-color: #973532;
  --bs-table-bg: #ece1cd;
  --bs-table-hover-color: #973532;
}
.btn-outline-secondary {
  --bs-btn-color: #508897;
  --bs-btn-border-color: #508897;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #508897;
  --bs-btn-hover-border-color: #6c757d;
  --bs-btn-focus-shadow-rgb: 108, 117, 125;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #6c757d;
  --bs-btn-active-border-color: #6c757d;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #6c757d;
  --bs-gradient: none;
}
</style>

<script setup>
import Week1 from './components/Week1View.vue'
import Week2 from './components/Week2View.vue'
import MessageTost from './components/helpers/MessageTost.vue'
</script>