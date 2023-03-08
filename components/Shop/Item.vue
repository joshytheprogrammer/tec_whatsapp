<template>
  <div class="Qdw">
    <div class="_item">
      <img :src="product.thumbnail" :alt="'thumbnail - ' + product.slug">
      <div class="details">
        <div class="inherent">
          <h1 class="n"> {{product.name}} </h1>
          <p class="price" :title="product.name + ' costs ' + product.price">{{formatter(product.price)}}</p>
        </div>
        <a class="btn" :href="url">Order Now</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['item']);
const product = props.item[0];

const url = "https://api.whatsapp.com/send?phone=2347010718819&text=I want to order product found at - https://w.tecpastryworld.com/shop/"+product.slug

function formatter(price) {
  let currency = '₦'

  let formatter = new Intl.NumberFormat('en-US');

  price = currency + formatter.format(price)

  return price
}
</script>


<style lang="scss" scoped>
.Qdw {
  min-width: 90%;
  max-width: 90%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;

  ._item {
    padding: 1rem;
    border-radius: 10px;

    margin: auto;
    width: fit-content;
    max-width: 80%;

    max-height: 640px;

    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 1rem;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);

    img {
      width: 100%;
      height: 100%;
      max-height: 400px;
      object-fit: contain;
      border-radius: 10px 0px 0px 10px;
      transition: 0.5s all ease-in-out;
    }

    .details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;

      .inherent {
        text-align: left;

        .n {
          font-size: 36px;
          font-weight: 500;
          color: $dark;
          text-transform: capitalize;
        }

        .price {
          background: $dark;
          border-radius: 10px;
          border: 1px solid $primary;
          min-width: 150px;
          width: 150px;
          margin: 0.5rem 0;
          font-size: 24px;
          font-weight: 400;
          color: $light;
          user-select: none;
          padding: 0.6rem 1rem;
          text-align: center;
        }
      }

      .btn {
        display: block;
        min-width: 150px;
        width: 150px;
        text-align: center;
        border-radius: 10px;
        background-color: $success;
        padding: 1rem;
        font-size: 18px;
        color: $dark;
        text-decoration: none;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: $large) {
    ._item {
      img {
        object-fit: contain;
      }
    }
  }

  @media screen and (max-width: $medium) {
    padding: 1rem;

    ._item {
      max-width: 100%;
      width: 100%;
      max-height: fit-content;
      display: block;

      img {
        max-height: 400px;
        border-radius: 10px 10px 0px 0px;
      }

      .details .inherent {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .n {
          font-size: 24px;
        }

        .price {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: $s-medium) {
    min-width: 100%;
    max-width: 100%;

    ._item {
      img {
        max-height: 200px;
        object-fit: contain;
      }
    }
  }
}
</style>
