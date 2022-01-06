module.exports = ({ env }) => ({
  plugins: [
    env === "production" ? require("autoprefixer") : false
  ]
});
