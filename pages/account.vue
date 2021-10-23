<template>
  <!-- component -->
  <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
    <div class="top h-64 w-full bg-blue-600 overflow-hidden relative">
      <img
        src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt=""
        class="bg w-full h-full object-cover object-center absolute z-0"
      />
      <div
        class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white"
      >
        <!-- <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          class="h-24 w-24 object-cover rounded-full"
        /> -->
        <avataaars
          class="h-24 w-24 object-cover rounded-full"
          :isCircle="false"
          :accessoriesType="'Blank'"
          :clotheType="'BlazerSweater'"
          :eyebrowType="'DefaultNatural'"
          :eyeType="'Default'"
          :mouthType="'Default'"
          :facialHairColor="'Black'"
          :facialHairType="'Blank'"
          :graphicType="'Hola'"
          :hairColor="'Black'"
        >
        </avataaars>
        <h1 class="text-2xl font-semibold">Diego Carlo</h1>
        <h4 class="text-sm font-semibold">Cliente</h4>
      </div>
    </div>
    <div class="bg-white ">
      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <div class="pt-1 md:p-2  md:text-left space-y-4 ">
          <div class=" flex md:space-x-48">
            <figcaption class="font-medium xs:text-xs  md:text-xl inline">
              <div class="text-cyan-600 inline  ">
                Estado
              </div>
              <div class="text-gray-500 inline ">
                Activo
              </div>
            </figcaption>
            <figcaption class="font-medium xs:text-xs  md:text-xl inline">
              <div class="text-cyan-600 inline  ">
                Balance
              </div>
              <div class="text-gray-500 inline ">
                $15,000
              </div>
            </figcaption>
            <figcaption class="font-medium xs:text-xs  md:text-xl inline">
              <div class="text-cyan-600 inline  ">
                Distribuidor
              </div>
              <div class="text-gray-500 inline ">
                El distri
              </div>
            </figcaption>
          </div>
        </div>
      </figure>
           <div
          id="overline"
          class="text-h5 blue--text text--darken-4 transition-swing "
          v-text="'Movimientos'"
        ></div>
      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <div class="pt-1 md:p-2 text-center md:text-left space-y-4 ">
          <div class="justify-items-center flex md:space-x-48">
            <figcaption class="font-medium xs:text-xs  md:text-xl inline">
              <div class="text-cyan-600 inline  ">
                Estado
              </div>
              <div class="text-gray-500 inline ">
                Activo
              </div>
            </figcaption>
            <figcaption class="font-medium xs:text-xs  md:text-xl inline">
              <div class="text-cyan-600 inline  ">
                Balance
              </div>
              <div class="text-gray-500 inline ">
                $15,000
              </div>
            </figcaption>
            <figcaption class="font-medium xs:text-xs  md:text-xl inline">
              <div class="text-cyan-600 inline  ">
                Distribuidor
              </div>
              <div class="text-gray-500 inline ">
                El distri
              </div>
            </figcaption>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>
<script>
import Avataaars from "vuejs-avataaars";
export default {
  components: {
    Avataaars
  }
};
</script>
<style>
#overline {
    margin-bottom: 10px !important;
    font-size: 2rem !important;
    font-weight: 100;
    line-height: 2rem;
    letter-spacing: 0.1666666667em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: uppercase !important;
}
</style>