if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let b={};const i=e=>a(e,d),t={module:{uri:d},exports:b,require:i};s[d]=Promise.all(c.map((e=>t[e]||i(e)))).then((e=>(r(...e),b)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"1bb7a60ac8f38d580a19bbb5318b7528"},{url:"adddescription.html",revision:"6616f4749d3b62998b85a20480562875"},{url:"archive.html",revision:"7d88b683794315ff24f30e39015c260e"},{url:"assets/404.html-e8379c56.js",revision:"54d138c547ebdf5da9205cc1742a75ba"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/adddescription.html-3e3a1deb.js",revision:"0c5229ea2202976f8a2e77faa7479fa4"},{url:"assets/adddescription.html-6ef7ea34.js",revision:"21bca06a83805088ed2ba9b509a24a68"},{url:"assets/app-73dc1a13.js",revision:"ce4840baa208fac496106f85514fa62a"},{url:"assets/archive.html-2802e2e8.js",revision:"3b5de73b0a31e08fff04c100e2978158"},{url:"assets/archive.html-ff1e6842.js",revision:"de59ca2cea4596b82f172a538ac6244d"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/banned.html-223c9e32.js",revision:"a54a3066a651b31e2ff1247275964a7e"},{url:"assets/banned.html-76cbb68d.js",revision:"9d34066c7a9300fd93a755419dd43c5c"},{url:"assets/comment.html-87ae72be.js",revision:"f4c52cd22d0e05c2d3af04931f9f4708"},{url:"assets/comment.html-ac11c93c.js",revision:"70a2c67983861226ce09e4b3f8597032"},{url:"assets/contact.html-502db459.js",revision:"14c2ff8461d15c90493d982c82c7f97a"},{url:"assets/contact.html-7276968a.js",revision:"a6f295b0a5c07d264852340df3783b0a"},{url:"assets/createchannel.html-10d78031.js",revision:"20aa84c91d6fc7c46ef60d3b31fece20"},{url:"assets/createchannel.html-1b19c54f.js",revision:"8720048a82a88850cf1d422b3d82cb49"},{url:"assets/creategroup.html-38d2acc5.js",revision:"a099e378aecacfb3bac3bbf106842651"},{url:"assets/creategroup.html-86f0bd81.js",revision:"40a7fb60f2f3397b835d63370a9b94f5"},{url:"assets/createrobot.html-257ee222.js",revision:"f724567986827aba630c5a801914e583"},{url:"assets/createrobot.html-6838d162.js",revision:"9f513dc7b93012c8d8321b6f72efc786"},{url:"assets/createsticker.html-4d22709f.js",revision:"0c3b78d40e63387e5dc8f5ed90d2001e"},{url:"assets/createsticker.html-a9bde7b6.js",revision:"a3573eae39782d9ea9cd1e2653d37a38"},{url:"assets/dc.html-e3d61326.js",revision:"add9c6c7db3f2d74946758a6f9060535"},{url:"assets/dc.html-ffa0804c.js",revision:"6c2485b2c615954f7ff646a6ad62e82e"},{url:"assets/deleteaccount.html-01dcf5be.js",revision:"d1be2ae9cee744e1229848c24b2de6a2"},{url:"assets/deleteaccount.html-0557dceb.js",revision:"84ef555001be9d3972dc1bd9838a5825"},{url:"assets/divide.html-da829452.js",revision:"d39d15a1631eb439f18b88bcaf4605d8"},{url:"assets/divide.html-f5a33004.js",revision:"066aa3aec14a741fff91bbacdaab0f11"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/download.html-45c33486.js",revision:"6e401ff62b6f1f1a7d7706605e229cbc"},{url:"assets/download.html-ded28d59.js",revision:"ebb5dec047bcae2b4c5e7abf9f29ab56"},{url:"assets/encrypt.html-a60ffa58.js",revision:"b7529301911c57e24abc6abe1450596b"},{url:"assets/encrypt.html-fa6c2b84.js",revision:"f33700f483f2b824538676b84afd0e25"},{url:"assets/faq.html-32faedd9.js",revision:"0c7da64f1b17ce126b1008ceab60c0d7"},{url:"assets/faq.html-381ffb7e.js",revision:"4e1534adfabfc88e8d15b3bb4f425c1d"},{url:"assets/favourite.html-ccb821c0.js",revision:"3efad5a87aae491e31c6861ff74a6253"},{url:"assets/favourite.html-db479436.js",revision:"23500a1010d4a84f9ec633817561580b"},{url:"assets/findadmin.html-367a88c3.js",revision:"1b8113a18da7f951d7136b1db7481162"},{url:"assets/findadmin.html-ba3bbe9d.js",revision:"f67490b5eecb62e483b149574949348f"},{url:"assets/guide.html-33ec2286.js",revision:"fba8d77d13170d8460f4a0b6f05333d6"},{url:"assets/guide.html-de9007a5.js",revision:"51d6a7c501e3ddc73d852c0ab4e8bd3d"},{url:"assets/index-82585c84.js",revision:"938526a93de840eecd804073030c5832"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-0b850663.js",revision:"a57a0fa838b77337dacb5617e0b247ef"},{url:"assets/index.html-e1c5ba7f.js",revision:"83dd81c8c68ff268477341b981d67e66"},{url:"assets/language.html-261c8d3f.js",revision:"961bb2e4c103bf324f6d152f2024cef0"},{url:"assets/language.html-75bf44a6.js",revision:"f774c3527a37f4b76383358c72633255"},{url:"assets/limit.html-2ca342e9.js",revision:"db839629390b9d4ebd3b9a96a4caf9d4"},{url:"assets/limit.html-651243ee.js",revision:"b034d5ad4f80d74e10cc0d0d683630cb"},{url:"assets/logo.png",revision:"d6a8011f08e128f9673db7ca7b560b13"},{url:"assets/managegroup.html-367f3fe1.js",revision:"6113e43e24aed99901700cf2422b9694"},{url:"assets/managegroup.html-94902309.js",revision:"478617d50a163f84e0e56fe16761f3ad"},{url:"assets/multiaccount.html-7c19b521.js",revision:"e5651d1644a0a31b776fd99543547b56"},{url:"assets/multiaccount.html-efb08bf3.js",revision:"2ebcb95c41d46261d760908a53948ba8"},{url:"assets/nearby.html-8973670e.js",revision:"245791aef1b5b558880ee77e8688591f"},{url:"assets/nearby.html-8b4752fa.js",revision:"da80c7243505b20d2b9a1fdca07c4b97"},{url:"assets/poll.html-8b89212c.js",revision:"c95d8e910da056a339eeedb66dc4cba3"},{url:"assets/poll.html-ab2ca38b.js",revision:"725cd168546bc6c82248e82c02f8e020"},{url:"assets/pornios.html-761f5ea8.js",revision:"12ec7d50ae0d91108ad3f45887bb5986"},{url:"assets/pornios.html-96dd9664.js",revision:"9992e20d10b423d3093250539993180f"},{url:"assets/premium.html-13f08b4a.js",revision:"3fc5c514e3e3888f389ed8e095a96962"},{url:"assets/premium.html-c963bd2f.js",revision:"56f0f444774d7fa4f24c71d8ab8ea47f"},{url:"assets/privacy.html-92cb77f7.js",revision:"cabd2b5d96f4cdbc17868c6e088c425d"},{url:"assets/privacy.html-ba12e2c6.js",revision:"f47f5695bde0dbf4aa727d8aa1632a33"},{url:"assets/proxy.html-15544486.js",revision:"37f233e228def85e8cbaa3a50d2a1628"},{url:"assets/proxy.html-1e1bcd26.js",revision:"1e0b2e3e1e1b48283e11e7e52e9d551e"},{url:"assets/robot.html-556119f0.js",revision:"b6d61aac54e0576b1374bbf6b05e547b"},{url:"assets/robot.html-b638ca4b.js",revision:"c19d533239a32b0114b65c39ba776a2e"},{url:"assets/scan.html-2912830d.js",revision:"bbfd943833ca52af9097707f266a9b43"},{url:"assets/scan.html-5c7f89e2.js",revision:"492f5fa99f54965e003306d388c6b5f0"},{url:"assets/search.html-6f58e1b9.js",revision:"fa130fb9f37e185ba2823d4f0bf8a1b6"},{url:"assets/search.html-af9a38b6.js",revision:"e50ff15a3ed921ee50bd245db4cf53e6"},{url:"assets/slowmode.html-938e456a.js",revision:"35a9584f50fd55a12358d4e074e29296"},{url:"assets/slowmode.html-caa3bb1b.js",revision:"a0bd24a9149751089f72442276e01e64"},{url:"assets/spam.html-936060fb.js",revision:"6162c8c82504a2061396e3e905301f60"},{url:"assets/spam.html-cbef14db.js",revision:"4cc527f1b85e1a674b455f61317afc78"},{url:"assets/speakaschannel.html-e76cede0.js",revision:"e3296da78a5b4658c63c78d3292e71eb"},{url:"assets/speakaschannel.html-e91c9f14.js",revision:"0c7a2b4cbb67baa40635a856a038855f"},{url:"assets/style-9466b0a4.css",revision:"4eb742470f05c4fbfd96ec378080183c"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/telegraph.html-c8582496.js",revision:"c88cb04fe8aa8d31ad13d0d2a2bdda6d"},{url:"assets/telegraph.html-e51fd5d4.js",revision:"b19fea81653470adbad0d8bff1bab32f"},{url:"assets/term.html-c3dad977.js",revision:"b91b24e3b754cdd6199c442180e6c747"},{url:"assets/term.html-ec8e9b40.js",revision:"ac920fdedae73130bae09d33eeafa5e5"},{url:"assets/theme.html-184cd116.js",revision:"c494dfd9a89574bbfff92929d5610c65"},{url:"assets/theme.html-db740ac2.js",revision:"78cd4193fe67cb31a2a17e072d10eda0"},{url:"assets/thirdparty.html-a14117c1.js",revision:"6cb7079091dbf271a0d76dda18f0455f"},{url:"assets/thirdparty.html-ee081111.js",revision:"c78c6788cd1cb2f908f08327d8f75a34"},{url:"assets/translate.html-a52d2c95.js",revision:"884283b3546fa727addb5afb6239b907"},{url:"assets/translate.html-d18d28f6.js",revision:"81a1b16cfc1aec9692b7011b8ec35d74"},{url:"banned.html",revision:"f45a7d6202c3cdd5dd044bc9842e765b"},{url:"comment.html",revision:"8619685408e99f2b67bbb930b1f41678"},{url:"contact.html",revision:"da07ca2a687a3f161b6ce388d9cf7dbd"},{url:"createchannel.html",revision:"90cf2ced1ff8c2346325ac4f48b358c0"},{url:"creategroup.html",revision:"eff5a74e23dc49e5fb3c9c4211b438cc"},{url:"createrobot.html",revision:"6219e9cd00bcd29e9301fffdbe87a6a8"},{url:"createsticker.html",revision:"5c034252cf9230b80ce0adb8a04c2eb0"},{url:"dc.html",revision:"e8e42d3b302ce048add9509d78a4b490"},{url:"deleteaccount.html",revision:"64206b2cea945d930ebbb0c02372dc56"},{url:"divide.html",revision:"936ce334973cae9375f98eb046e8a427"},{url:"download.html",revision:"4500149eef8f33824057e3cbe16ca57b"},{url:"encrypt.html",revision:"2152b8cf7f62fd46f2542321e11becec"},{url:"faq.html",revision:"12471d211e29206db71254b0b84e0a75"},{url:"favourite.html",revision:"49a0b25a736dde8dc9c5381992b4d071"},{url:"findadmin.html",revision:"d31849390b4d16aa1c9f9217f48d6621"},{url:"guide.html",revision:"8d1bfef9724a83dc3a6c7bfc2f38d23a"},{url:"index.html",revision:"c644674b1b3d7c4c2f5d5607676a8370"},{url:"language.html",revision:"92bcba63880d83459be3bfa32bb19c34"},{url:"limit.html",revision:"6bef3d32abbb1e88b0d436ee637bd9b4"},{url:"managegroup.html",revision:"c2e3f3ec3949cc36622af4dcde8c894a"},{url:"multiaccount.html",revision:"efb342d7d1c9d041819ac110e8002775"},{url:"nearby.html",revision:"45e98645b61bb2e25b94a05a26fb2419"},{url:"poll.html",revision:"506c7730ee2f6119befcca917766a4fa"},{url:"pornios.html",revision:"1d98d1d069044bb171fe954e005bb22d"},{url:"premium.html",revision:"a1b6b733846dc5fa45b1fd0ff8b173d1"},{url:"privacy.html",revision:"ae82629677e5770101da71ba420f21b2"},{url:"proxy.html",revision:"6c38462ca298d1ed783fe0c62133bb5a"},{url:"robot.html",revision:"13d693894a5ca7defa23d208b279e846"},{url:"scan.html",revision:"81cb73acd8e397c9de8493b6bb21a75e"},{url:"search.html",revision:"a7f1878e5fef879044c2ca1a3ccfbfab"},{url:"slowmode.html",revision:"943f35edd0f61bbb49881e49f1e82e5b"},{url:"spam.html",revision:"ee1a3358efaa9348b3e7ffbd8afbe4f7"},{url:"speakaschannel.html",revision:"48028b2a40a7dbbd7c3fc4d47c4611a3"},{url:"telegraph.html",revision:"ea8562c859074cffe41b60fc801af314"},{url:"term.html",revision:"de789a461ae72e7973c013ea7134ff0c"},{url:"theme.html",revision:"218bea1ddf33d78845ec64bc2f00e9ce"},{url:"thirdparty.html",revision:"872060b7a6af4ac1f01cd10584e47869"},{url:"translate.html",revision:"4b6f6e12f516d7ddfc65899d5ff1d61d"}],{})}));
