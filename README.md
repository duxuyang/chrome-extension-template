# chrome-extension-template
谷歌扩展插件模板


## manifest.json
{
  "name": "demo", // 扩展的名称（name）
  "version": "1.0", // 插件版本号
  "description": "Build an Extension!", // 插件描述
  "manifest_version": 3, // manifest 版本，目前是必须是2或者3

  // 指定扩展在Chrome 工具栏中的图标，它定义了扩展图标文件位置（default_icon）、
  // 悬浮提示（default_title）和点击扩展图标所显示的页面位置（default_popup）
  "action": {
    "default_title": "Hello, 某SDN!",
    "default_icon": "/images/logo.png", // 浏览器右上角图标设置
    "default_popup": "popup.html"
  },
    // 128x128 的图标；它在安装期间和 Chrome 网上应用店使用
  // 48x48 图标，用于扩展程序管理页面 (chrome://extensions)
  // 16x16 图标用作扩展页面的收藏夹图标
  // 这里只写一个其实也是可以的
  "icons": {
    "128": "/images/logo.png"
  },
  // 需要直接注入页面的JS
  "content_scripts": [
    {
      //"matches": ["http://*/*", "https://*/*"],"<all_urls>" 表示匹配所有地址
      "matches": ["https://blog.csdn.net/*"],
      // 多个JS按顺序注入
      "js": ["/js/content_script.js"],
      // "css": ["css/custom.css"],
      // 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，
      // document_idle表示页面空闲时，为默认值
      "run_at": "document_start"
    }
  ],
   // 定义了扩展需要向 Chrome 申请的权限，比如通过 XMLHttpRequest 跨域请求数据、访问浏览器选项卡（tabs）
  // 获取当前活动选项卡（activeTab）、浏览器通知（notifications）、存储（storage）等，可以根据需要添加。
  "permissions": ["tabs"]

}
content_scripts
这一项来自于manifest.json的content_scripts配置项，声明了需要直接注入页面的 JS，这里的 JS 可以直接操作当前页面的 DOM 对象，所以这个文件在需要对打开的页面进行操作时会很有用。


