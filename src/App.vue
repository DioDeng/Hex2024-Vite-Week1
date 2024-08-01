<template>
  <section class="container py-5">
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in productList" :key="index">
          <td>
            {{ item.title }}
          </td>
          <td>
            <small>{{ item.describe }}</small>
          </td>
          <td>${{ item.price }}</td>
          <td>
            <button
              type="button"
              class="btn"
              :class="[item.stock === 0 ? 'btn-outline-danger' : 'btn-outline-secondary']"
              :disabled="item.stock < 1"
              @click="item.stock--"
            >
              -</button
            ><span class="mx-2">{{ item.stock }}</span
            ><button type="button" class="btn btn-outline-secondary" @click="item.stock++">
              +
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="selectProduct(item, index)"
              v-if="tempData.index !== index"
            >
              編輯名稱
            </button>
            <div class="input-group" v-else>
              <input
                type="text"
                class="form-control"
                placeholder="名稱必填"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                style="width: 1rem"
                v-model="tempData.title"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                @click="tempData = {}"
              >
                取消
              </button>
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon3"
                @click="editProduct"
                :disabled="!tempData.title"
              >
                確認修改
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="scss">
@import '@/assets/stylesheets/all';
</style>

<script setup>
import { ref } from 'vue'
const productList = ref([
  { title: '珍珠奶茶', describe: '香濃奶茶搭配QQ珍珠', price: 50, stock: 20 },
  { title: '冬瓜檸檬', describe: '清新冬瓜配上新鮮檸檬', price: 55, stock: 34 },
  { title: '翡翠檸檬', describe: '綠茶與檸檬的完美結合', price: 50, stock: 20 },
  { title: '四季春茶', describe: '香醇四季春茶，回甘無比', price: 45, stock: 0 },
  { title: '阿薩姆奶茶', describe: '阿薩姆紅茶搭配香醇鮮奶', price: 50, stock: 25 },
  { title: '檸檬冰茶', describe: '檸檬與冰茶的清新組合', price: 45, stock: 20 },
  { title: '芒果綠茶', describe: '芒果與綠茶的獨特風味', price: 55, stock: 18 },
  { title: '抹茶拿鐵', describe: '抹茶與鮮奶的絕配', price: 60, stock: 20 }
])
const tempData = ref({})
const selectProduct = (data, index) => {
  tempData.value = { ...data }
  tempData.value.index = index
}
const editProduct = () => {
  productList.value[tempData.value.index].title = tempData.value.title
  tempData.value = {}
}
</script>