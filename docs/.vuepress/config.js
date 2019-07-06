module.exports = ctx => ({
  port: 8090,
  title: 'ViolaCSS',
  description: 'ViolaCSS is a direction-agnostic and mobile-first and Functional CSS framework',
  head: [
    ['meta', {name: 'theme-color', content: '#7f2f70'}],
    ['link', {href: 'https://fonts.googleapis.com/css?family=Quicksand:400,500&display=swap', rel: 'stylesheet'}]
  ],
  themeConfig: {
    nav: [
      {text: 'Guide', link: '/guide/'},
      {text: 'Config Reference', link: '/config/'},
    ],
    repo: 'violacss/viola',
    displayAllHeaders: true,
    sidebar: 'auto'
  }
})
