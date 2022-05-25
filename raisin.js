const raisinAlarm = function(cookie) {
  for (let ingr of cookie) {
    if (ingr === ":grapes:") {
      //console.log("Raisin Alert");
      return "Raisin Alert";
    }
    //console.log("All Good!");
  }
  return "All Good!";
};
console.log(raisinAlarm([":chocolate_bar:", ":chocolate_bar:", ":grapes:", ":chocolate_bar:"]));
console.log(raisinAlarm([":chocolate_bar:", ":grapes:", ":chocolate_bar:", ":chocolate_bar:", ":grapes:"]));
console.log(raisinAlarm([":chocolate_bar:", ":chocolate_bar:", ":chocolate_bar:"]));