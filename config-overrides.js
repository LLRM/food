const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path=require('path')
module.exports = override(
       fixBabelImports('import', {
         libraryName: 'antd-mobile',
         style: 'css',
       }),
       // 配置路径别名
       addWebpackAlias({
        assets:path.resolve(__dirname,"./src/assets"),
        "@":path.resolve(__dirname,"./src/components")
        }),
       addDecoratorsLegacy()//使用装饰器
     );