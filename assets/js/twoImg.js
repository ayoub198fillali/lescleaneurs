$("#slider1").on("input change", (e) => {
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $("#foreground-img1").css("width", `calc(${sliderPos}% - 4px)`);
  // Update the position of the slider button
  $("#slider-button1").css("left", `calc(${sliderPos}% - 18px)`);
});

$("#slider2").on("input change", (e) => {
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $("#foreground-img2").css("width", `calc(${sliderPos}% - 4px)`);
  // Update the position of the slider button
  $("#slider-button2").css("left", `calc(${sliderPos}% - 18px)`);
});

$("#slider3").on("input change", (e) => {
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $("#foreground-img3").css("width", `calc(${sliderPos}% - 4px)`);
  // Update the position of the slider button
  $("#slider-button3").css("left", `calc(${sliderPos}% - 18px)`);
});
