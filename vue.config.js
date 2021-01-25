module.exports = {
  /* 保存時進行 eslint 檢測 */
  lintOnSave: false,
  /* 增加開發環境的編譯器 (打包時要改為 false) */
  runtimeCompiler: true,
  // 設置打包路徑
  /* 部署生產環境和開發環境的URL:可對當前環境進行區分 */
  // publicPath: "./",
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  /* 打包時輸出的資料夾名稱 */
  outputDir: 'docs',
  /* 放置生成的靜態資源(js、css、img、fonts),相對於 outputDir 的目錄 */
  assetsDir: "assets",
  /* 指定生成的 index.html 的輸入路徑(相對於 outputDir),也可以是絕對路徑 */
  //indexPath: "",
  /* 在 multi-page 模式下建構應用，每個 page 應該有個相對應的JavaScript 入口文件 */
  //pages: "",
  /* 是否在打包時產生 sourceMap */
  productionSourceMap: false,
  /* 默認情況下，生成的靜態資源在它們的文件名中包含了 hash 以便更好的控制緩存，你可以通過將這個選項設為 false 來關閉文件名哈希。 (false的時候就是讓原來的文件名不改變) */
  filenameHashing: false,
  /* webpack-dev-server 相關配置 */
  devServer: {
    open: process.platform === "darwin",
    /* 設置0.0.0.0為所有地址都可以訪問 */
    host: '0.0.0.0',
    port: 8787,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        /* 目標代理伺服器地址 */
        target: 'http://47.100.47.3/',
        /* 允許跨域 */
        changeOrigin: true,
      },
    },
    disableHostCheck: true,
  }

  //build url fix
  //publicPath: './',
  /*
  //jquery
  plugins: [new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery', Popper: ['popper.js', 'default'] })]
  */
}