

export default {
  name: "focus",
  mounted(el) {
      console.log("el: ", el)
      console.timeLog("binding: ", binding)
      el.focus()
  }

}