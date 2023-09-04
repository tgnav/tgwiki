export const themeData = JSON.parse("{\"logo\":\"https://tgnav.github.io/assets/images/logo.png\",\"logoDark\":\"https://tgnav.github.io/assets/images/logo2.png\",\"repo\":\"https://github.com/tgnav/tgwiki\",\"docsDir\":\"docs\",\"repoLabel\":\"开源地址\",\"navbar\":[{\"text\":\"文档指南\",\"link\":\"/guide\"},{\"text\":\"隐私设置\",\"link\":\"/privacy\"},{\"text\":\"常见问题与解答\",\"link\":\"/faq\"}],\"sidebar\":[{\"text\":\"入门\",\"collapsible\":true,\"children\":[\"/guide.md\",\"/term.md\",\"/limit.md\",\"/dc.md\"]},{\"text\":\"功能\",\"collapsible\":true,\"children\":[\"/creategroup.md\",\"/managegroup.md\",\"/createchannel.md\",\"/comment.md\",\"/archive.md\",\"/favourite.md\",\"/createsticker.md\",\"/createrobot.md\",\"/slowmode.md\",\"/poll.md\",\"/scan.md\",\"/nearby.md\",\"/adddescription.md\",\"/translate.md\",\"/telegraph.md\",\"/search.md\",\"/encrypt.md\",\"/findadmin.md\",\"/speakaschannel.md\"]},{\"text\":\"设置\",\"collapsible\":true,\"children\":[\"/privacy.md\",\"/proxy.md\",\"/theme.md\",\"/download.md\",\"/divide.md\",\"/language.md\",\"/pornios.md\",\"multiaccount.md\",\"/deleteaccount.md\"]},{\"text\":\"其他\",\"collapsible\":true,\"children\":[\"/contact.md\",\"/spam.md\",\"/banned\",\"/premium.md\",\"/thirdparty.md\",\"/robot.md\",\"/faq.md\"]}],\"lastUpdated\":\"最近更新\",\"editLinkText\":\"帮助我们改善此文档\",\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
