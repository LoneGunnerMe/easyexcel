/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory oyf this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    //  这里创建一个doc 的Sidebar https://docusaurus.io/docs/next/sidebar/autogenerated
    // 这里几个Sidebar 就是你在文档的时候 分成几块，比如我们这里需要分成 文档 API 常见问题，这些都会跟着版本走，也能国际化
    // 在导航栏的文档
    docSidebar: [
        // 这里代表 第一个需要引入： docs/index.md 这个页面
        'index',
        // 这里代表 接下来的我们要去扫描指定目录
        {
            // 类型默认 category
            type: 'category',
            // 展示的名称
            label: '快速开始',
            // 默认打开
            collapsed: false,
            // 配置去扫描指定根目录
            items: [
                {
                    // 自动扫描 固定
                    type: 'autogenerated',
                    // 扫描 docs/quickstart
                    dirName: 'quickstart',
                },
            ],
        },
    ],
    // 在导航栏的api 直接扫描 docs/api 下面所有的文件
    apiSidebar: [{
        // 自动扫描 固定
        type: 'autogenerated',
        // 扫描 docs/api
        dirName: 'api',
    },
    ],
};
