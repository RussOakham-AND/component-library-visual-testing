require('dotenv').config()

const brandId = process.env.VITE_BRAND_ID ?? '1';

const themeMyAppWants = require(`./src/themes/brand-id-${brandId}/tailwind.config.js`);

module.exports = themeMyAppWants;

// https://medium.com/koodoo/how-do-we-approach-theming-for-white-label-applications-672163019731