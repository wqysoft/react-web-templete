const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra')
const path = require('path')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  addLessLoader({
    javascriptEnabled: true,
    // 这里是配置antd组件的主题色
    // modifyVars: { '@primary-color': '#f39800', 'link-color': '#0066CC' }
  })
)
