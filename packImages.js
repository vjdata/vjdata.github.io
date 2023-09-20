import imagemin from "imagemin";
import imageminWebp from 'imagemin-webp';

(async () => {
  const files = await imagemin(["raw/*.png"], {
    destination: "img",
    plugins: [
      imageminWebp({quality: 100})
    ]
  });
})();