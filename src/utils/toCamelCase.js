Object.defineProperty(String.prototype, "toCamelCase", {
    value: function () {
      return (
        this
          .replaceAll("'", "")
          .split(" ")
          .map((letter, index) => (
            letter.replace(
              letter.charAt(0), index === 0 ? letter.charAt(0).toLowerCase() : letter.charAt(0).toUpperCase()
            )
          ))
          .join("")
      )
    }
})