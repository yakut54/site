const pages = {
  chat: 'Chat',
  index: 'Home',
  gifts: 'Gifts',
  about: 'About',
  orders: 'Orders',
  catalog: 'Catalog',
  account: 'Account',
  messages: 'Messages',
  message: 'MessageItem',
  questions: 'Questions',
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