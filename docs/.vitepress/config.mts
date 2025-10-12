import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/DX_logo_blue.svg' }]
  ],
  markdown: {
    image: {
      lazyLoading: true
    },
    math: true
  },
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
      ], 
    }, 
  }, 
  lastUpdated: true,
  lang: 'zh-CN',
  base: '/',
  title: "RMVision-001",
  description: "西安交大视觉组教程",
  themeConfig: {
    sidebarMenuLabel:'目录', 
    returnToTopLabel:'返回顶部', 
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
    footer: { 
      message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2023-2025present XJTU-RMV', 
    }, 
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    editLink: { 
      pattern: 'https://github.com/XJTU-RMV/XJTU-RMV.github.io/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    }, 
    outline: {
      level: 'deep', // 显示2-6级标题
      label: '目录' // 文字显示
    },
    search: { 
      provider: 'local'
    }, 
    logo: {
      src: '/DX_logo_black.svg',
      alt: 'Logo: XJTU-RMV',
    },
    siteTitle: false, //标题隐藏
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前言', link: '/前言/' },
      { text: '贡献指南', link: '/前言/贡献指南' },
      { text: '任务书', link: '/任务书/' },
      { text: '快速查阅', link: '/快速查阅/' },
    ],

    sidebar: [
      {
        text: '前言',
        link: '/前言/',
        collapsed: false,
        items: [
          { text: '贡献指南', link: '/前言/贡献指南' },
        ]
      },
      {
        text: '任务书',
        link: '/任务书/',
        collapsed: false,
        items: [
          { text: '安装 Ubuntu 22.04', link: '/任务书/Ubuntu' },
          { text: '使用 OpenCV', link: '/任务书/OpenCV' },
          { text: '能量机关拟合', link: '/任务书/Windmill' },
          { text: 'DX-ROS教程', link: '/任务书/DX-ROS教程' },
          { text: 'RM Vision 5', link: '/任务书/RM_Vision_5' },
        ]
      },
      {
        text: '快速查阅',
        link: '/快速查阅/',
        collapsed: false,
        items: [
          { text: 'Windows 安装 C++ 环境', link: '/快速查阅/windows-cpp' },
          { text: '使用 GPT 转发站', link: '/快速查阅/gpt' },
          { text: '海康相机注意事项', link: '/快速查阅/hik_camera' },
          { text: '补充内容', link: '/快速查阅/backup' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XJTU-RMV/XJTU-RMV.github.io' }
    ]
  }
})
