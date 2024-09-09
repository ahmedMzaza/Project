<template>
  <div class="promotion-D">
    <router-link
      v-for="prodect in Main"
      :key="prodect.id"
      :to="{
        name: 'Prodect',
        params: { id: prodect.id },
      }"
      class="card"
    >
      <a @click="isFav(prodect.id)">
        <i class="fa-regular fa-heart"></i>
      </a>
      <img class="cardImg" src="../assets/cardprodect.png" alt="Title" />
      <div class="cardBody">
        <h4 class="cardTitle">
          {{ prodect.name }}
        </h4>
        <p class="cardText">
          <del>{{ prodect.priceBefore }}</del> {{ prodect.price }} L.E
        </p>

        <div class="cardBuy">
          <div class="num">
            <v-number-input
              height="40px"
              :reverse="false"
              controlVariant="split"
              label=""
              :hideInput="false"
              :inset="false"
              :model-value="1"
              variant="outlined"
            ></v-number-input>
          </div>

          <a style="z-index: 10; cursor: pointer">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { VNumberInput } from "vuetify/labs/VNumberInput";

export default {
  components: {
    VNumberInput,
  },
  data: () => ({
    Main: null,
  }),

  mounted() {
    this.ADDPRODUCT();
  },
  methods: {
    ADDPRODUCT() {
      const token = localStorage.getItem("token");
      fetch("https://drwessamhabib.com/public/api/wishlist", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.Main = data.data.data;
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style scoped>
.promotion-D {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 0;
}
.promotion-D .card {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0px 10px;
  background-color: white;
  box-shadow: 0 0 20px #7777774d;
  border-radius: 15px;
}
.promotion-D .card .cardBody {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 10px 5px;
}
.promotion-D .card .cardImg {
  margin: 0 auto;
  max-width: 100%;
  max-height: 50%;
}
.promotion-D .card .cardBuy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.promotion-D .card .cardBody del {
  font-size: 15px;
  text-decoration: line-through;
  color: red;
}
.promotion-D .card .cardBody i {
  padding: 6px;
  background-color: var(--mainColor);
  color: white;
}
.promotion-D .card .num i {
  padding: 6px;
  color: var(--mainColor);
  background-color: white;
  border: 1px solid var(--mainColor);
}

.promotion-D .card .num {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 60%;
}
.promotion-D .card .cardText del {
  font-size: 11px;
}
.promotion-D .card .cardText {
  font-size: 14px;
}
.promotion-D .card > i {
  position: relative;
  top: 5px;
  right: 5px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  color: var(--mainColor);
  transition: 0.5s;
}
.promotion-D .card > i:hover {
  background-color: var(--mainColor);
  color: white;
}
</style>
