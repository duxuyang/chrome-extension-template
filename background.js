/*
 * @Author duxuyang
 * @Date 2023-06-27 16:44:46
 * @LastEditors duxuyang
 * @LastEditTime 2023-06-28 10:07:14
 */


// 定义颜色
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(function () {
  console.log("插件已被安装");
  chrome.storage.sync.set({ color });
  console.log('插件默认颜色为: %c #3aa757', `color: ${color}`);
});
