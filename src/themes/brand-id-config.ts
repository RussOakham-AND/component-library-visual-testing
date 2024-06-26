const brandId = import.meta.env.VITE_BRAND_ID;

console.log(`Building for brand ID: ${brandId}`);

const themeMyAppWants = require(
  `./brand-id-${brandId}/tailwind.config.js`
);

module.exports = themeMyAppWants;

// https://medium.com/koodoo/how-do-we-approach-theming-for-white-label-applications-672163019731
