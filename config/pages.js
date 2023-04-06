const pages = {
  index: 'Home',
  gifts: 'Gifts',
  about: 'About',
  catalog: 'Catalog',
  account: 'Account',
  orders: 'Orders',
  messages: 'Messages',
}

module.exports = Object
  .assign({}, ...Object
    .entries(pages).map(([name, title]) => ({
      [name]: {
        title,
        template: 'public/index.html',
        entry: `./src/pages/${title}/index.js`,
        chunks: ['chunk-vendors', 'chunk-common', name]
      }
    })))