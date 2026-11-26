import HeaderFixed from "./header.js";
import "./burger.js";
import "./modal.js";
import "./search.js";
import { heroSlider } from "./hero-slider.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  heroSlider();
} catch (error) {
  console.error(error);
}
