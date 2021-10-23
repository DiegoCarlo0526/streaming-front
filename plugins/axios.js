export default async ({ app, $axios }, inject) => {
  $axios.onError(error => {
    const {code,message} = error.response.data 
    app.$swal({
      toast: !0,
      position: "top",
      showConfirmButton: !1,
      // background:"#c3000a",
      color:"white",
      iconColor:"red",
      timer: 3e3,
      icon: "error",
      title: code||"Algo salio mal",
      text:message||""
    });
  });
};
