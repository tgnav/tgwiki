if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let b={};const i=e=>a(e,r),f={module:{uri:r},exports:b,require:i};s[r]=Promise.all(c.map((e=>f[e]||i(e)))).then((e=>(d(...e),b)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"3884cc7e729e03d254c410e26d02bc2e"},{url:"adddescription.html",revision:"e3c86228eb2ad541101f486601629b78"},{url:"archive.html",revision:"9bdc25c87d2a32ef8b65efe3ce372179"},{url:"assets/404.html-dcf420ff.js",revision:"310bfc930e3e65c7234b283bd9dfa489"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/adddescription.html-59e6bdba.js",revision:"caf97863e6f2686359e575d275fd8c81"},{url:"assets/adddescription.html-b3a6169c.js",revision:"322566e0f4300ce70fffc40383816302"},{url:"assets/app-82fc188b.js",revision:"ee5de41ce2b449b37f96bdfbad850ca3"},{url:"assets/archive.html-27a3267f.js",revision:"ffc599570c0288f01949af3a7d3d3a76"},{url:"assets/archive.html-a97dc824.js",revision:"8840da5db84dc85ac8cdc80b823b7b21"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/banned.html-0e7cd5b7.js",revision:"269a8e65af19c90254ea333fd72e6c33"},{url:"assets/banned.html-808fb788.js",revision:"c749e7751d0d095a4bbfad010c9d2f16"},{url:"assets/boost.html-522f2b27.js",revision:"880fd6894207a2bbd2471596118490ef"},{url:"assets/boost.html-fb963eb4.js",revision:"0936005eb24481cee9fb52a7fca79240"},{url:"assets/comment.html-1089b777.js",revision:"3765c5172ec9161b223a5589cc98f7db"},{url:"assets/comment.html-9e36844e.js",revision:"dd32b11bb8ca4f353b05e08402ec9e41"},{url:"assets/contact.html-271bfd5f.js",revision:"d248fb6a078e6473471b59b9c8f39dfc"},{url:"assets/contact.html-52e8fd5b.js",revision:"952b8039378d81ccf20af24a0e5d3eb7"},{url:"assets/createchannel.html-27ffff5b.js",revision:"375a1fa71f2f67953d5afd5d11fb7104"},{url:"assets/createchannel.html-6f4b17cd.js",revision:"03974ae1a3120edf69bf6574e778d87d"},{url:"assets/creategroup.html-e8124176.js",revision:"a9ee21810916e4a2830be880de33cba4"},{url:"assets/creategroup.html-fa8f063c.js",revision:"bdab2b5acf1fdc17f253b803938d59f9"},{url:"assets/createrobot.html-3b0b6228.js",revision:"29743c50964f24512b9d7264c67c7ff9"},{url:"assets/createrobot.html-e3504adb.js",revision:"cf439961aad1280867fc4aae6b39e24e"},{url:"assets/createsticker.html-5366a7e8.js",revision:"8253c29601eb1b088526a75f00317710"},{url:"assets/createsticker.html-b6daf726.js",revision:"ba01b6111ba5374fa23d6ccda47b1a4f"},{url:"assets/dc.html-889ddc98.js",revision:"ab5f3612b723b62c5e53cd222f06d40b"},{url:"assets/dc.html-a72e59bd.js",revision:"2ad1290a5861327978dedcbf2c36348e"},{url:"assets/deleteaccount.html-6a3abdec.js",revision:"400d4bc1e5838a596fd19d4d7d9e5efd"},{url:"assets/deleteaccount.html-b425b540.js",revision:"134db9857d2a822e8256ef88c124dcf4"},{url:"assets/divide.html-4a398633.js",revision:"2773dbd05639f8481cd7600cc2d24e4e"},{url:"assets/divide.html-b400f2a8.js",revision:"c4bd36ec7247bf36171bfee6de953a41"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/download.html-2702f3ac.js",revision:"773ae2051bf2c822ceaa7a3159b6b2a7"},{url:"assets/download.html-95143187.js",revision:"45b5a6bd87028ad3a31bf243abea8dee"},{url:"assets/encrypt.html-0d649e7b.js",revision:"fc750e6e1590e7754d82dcf214cae810"},{url:"assets/encrypt.html-8e00edfe.js",revision:"6a993002c073b577b806909db381751a"},{url:"assets/faq.html-a1c4d163.js",revision:"66bb4dfeff5819d9dccda6e677e3ed25"},{url:"assets/faq.html-b059cc30.js",revision:"cdc94d069e1d302955f23796fb7209f5"},{url:"assets/favourite.html-335ee0d6.js",revision:"81604b55dce8d20d9fb5c2f0b7d37682"},{url:"assets/favourite.html-e99ad8c2.js",revision:"d9e0ff844a83f81a74bcd67ae102cff3"},{url:"assets/findadmin.html-9da55ddf.js",revision:"406e891e725f50cbe68b841e1d16e3ad"},{url:"assets/findadmin.html-b4a5b320.js",revision:"5590745d6a297c2f0651dfbd24ebefde"},{url:"assets/guide.html-0f070fc6.js",revision:"d427c120dbc9892ecce8037787a19d39"},{url:"assets/guide.html-b2448174.js",revision:"bc38d5fc4c47bf4fa2ca7dee43515ebc"},{url:"assets/index-82585c84.js",revision:"938526a93de840eecd804073030c5832"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-ce227b85.js",revision:"b1ee728bb1eb82928f228cdbc80f3424"},{url:"assets/index.html-f994f4d6.js",revision:"dc33cbeba7a68860c9a557fc37e176f4"},{url:"assets/language.html-70133dd0.js",revision:"ec858593bb52692ed63cdc77168321fb"},{url:"assets/language.html-f229978b.js",revision:"3aaf33d3b2339d8d28d5a1fc884d5c13"},{url:"assets/limit.html-326fd98f.js",revision:"b81fa28e99b72016eb3ceba68dc8d859"},{url:"assets/limit.html-e5475b18.js",revision:"2e730eacf2ec84944f1d8ae1244544c9"},{url:"assets/logo.png",revision:"d6a8011f08e128f9673db7ca7b560b13"},{url:"assets/managegroup.html-1a9ed94b.js",revision:"13d09e6318c6af96005342320e6708c2"},{url:"assets/managegroup.html-f452968e.js",revision:"541a7b047f051e85596450400d520ae4"},{url:"assets/multiaccount.html-ce5b4520.js",revision:"4c31d7a14c6945553a18248967b7a7de"},{url:"assets/multiaccount.html-e93e5685.js",revision:"27cc82c1f0f2ab8374bcb395a1be38e2"},{url:"assets/nearby.html-871bf02d.js",revision:"09902129d368c3c7a8b7883bad0c5c24"},{url:"assets/nearby.html-f0b8d19b.js",revision:"56e97748b19aaf174c59ea13bcd578d3"},{url:"assets/poll.html-64ec928e.js",revision:"ea0d9e758262371781ae85157823d061"},{url:"assets/poll.html-8aaf0d97.js",revision:"710343784f5ed5b0bf3488702bd71ef5"},{url:"assets/pornios.html-5744d662.js",revision:"81f75430152d613dc8d0af0ac44ea30c"},{url:"assets/pornios.html-e2cc98f4.js",revision:"4e9b27176157c7b7038dc09045fef80d"},{url:"assets/premium.html-0e0b075f.js",revision:"cc71bccedbb71e1fe2cf9cd8c258788a"},{url:"assets/premium.html-fbd3cb65.js",revision:"fc71a0a558bb59190436e06b449b30f1"},{url:"assets/privacy.html-2d591808.js",revision:"8ae1f507ccd675927c357809b4b8fe2b"},{url:"assets/privacy.html-522043dd.js",revision:"49adb22ba62c461cb82ed0c1f6ecd626"},{url:"assets/proxy.html-59a4fced.js",revision:"acde38088bb035b30ace11569a24c719"},{url:"assets/proxy.html-ac1fa9d4.js",revision:"d2593230cc96adebc0a7dac6f68e1e21"},{url:"assets/robot.html-8b99b279.js",revision:"bbe24304bcd9f156ef7fbfd2015b2e1b"},{url:"assets/robot.html-b9c750d9.js",revision:"50b91bb5c2b686464a28935977724ba8"},{url:"assets/scan.html-80981fd3.js",revision:"ef6793e3b7d341eb5d0520c4cd4a17d6"},{url:"assets/scan.html-ae8e57a8.js",revision:"9836146b8feb6383e06d9de654bc8218"},{url:"assets/search.html-4cb4c4a6.js",revision:"cff6624e4c1b17992ddcfc98a5e51c1c"},{url:"assets/search.html-853b66ef.js",revision:"9970cd8a50978f9025a74ec0203b25b5"},{url:"assets/slowmode.html-7fc1b79f.js",revision:"1b4ee8130c2ff809419b6b66148b708e"},{url:"assets/slowmode.html-da151fee.js",revision:"29aa4e993382e4a259845c401d92c8a5"},{url:"assets/spam.html-9006ec9b.js",revision:"ecd44b7982d42d7d930a10d71e0af8d4"},{url:"assets/spam.html-d4a02247.js",revision:"7ef86c960d7fba563a6764ee442b7e56"},{url:"assets/speakaschannel.html-c3efd32e.js",revision:"305dfe886191ebdebb0f0ac1eb0251d1"},{url:"assets/speakaschannel.html-c878225c.js",revision:"eeb094ed65006408f84f7c9cdd790ebd"},{url:"assets/stories.html-9d5f57f2.js",revision:"958b719baa2357092ec885bb685d8f11"},{url:"assets/stories.html-fabb524e.js",revision:"e0228fcf276d48312bb4a043d8c93def"},{url:"assets/style-9466b0a4.css",revision:"4eb742470f05c4fbfd96ec378080183c"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/telegraph.html-475875af.js",revision:"67ca3ea6c89a17692afe9128ca1d01ca"},{url:"assets/telegraph.html-a414296e.js",revision:"4b544313f39b61fa11ffd48e8be6920b"},{url:"assets/term.html-4af6f974.js",revision:"e7c3f140913b0ebb063b5ee92a3446ed"},{url:"assets/term.html-6ffdb889.js",revision:"8b7b709086fe8b5abc4375ca47551a3d"},{url:"assets/theme.html-3f47be14.js",revision:"8bf79d65e06bd61626b4070e333502e3"},{url:"assets/theme.html-63b7b209.js",revision:"dad39ab3e14671d2b18ef6194f2df277"},{url:"assets/thirdparty.html-0b79305c.js",revision:"55f52cd47a976d29d0a3ad1f03eea883"},{url:"assets/thirdparty.html-4b410c72.js",revision:"64481a42a81133b80f7d4d4abd82ae1a"},{url:"assets/translate.html-28a8bfe3.js",revision:"5f07cacf2b8d8f981d800b2e0b4c3cf9"},{url:"assets/translate.html-8e9d4890.js",revision:"0206d75c7bc08adaf3e1178eff18c408"},{url:"banned.html",revision:"f599af98ec012821dbde1be1f464229e"},{url:"boost.html",revision:"0145fb4263806e6ee305a74796f2adbf"},{url:"comment.html",revision:"7faf79c9e1aa0d6da457bb0a46f80dd1"},{url:"contact.html",revision:"a5959fbf85a15bb7e85c3b7810fc1d1a"},{url:"createchannel.html",revision:"96b33ef26c863689f832f222b3f01ae8"},{url:"creategroup.html",revision:"35e01a84c184c1e441010465f4b72afd"},{url:"createrobot.html",revision:"2a1ed836904f4c8339a4fa5155e0c903"},{url:"createsticker.html",revision:"841e5d78de7de925e2f7fcd867090e1d"},{url:"dc.html",revision:"5549add21790ae4e4349289ed74e8d18"},{url:"deleteaccount.html",revision:"f597567aff2ddd2c7c6a134bbae10314"},{url:"divide.html",revision:"916d2e6453341d59b80312ec0556ad6a"},{url:"download.html",revision:"942488333806e397b6575f051f257150"},{url:"encrypt.html",revision:"e4444319457124003881c89d750908a2"},{url:"faq.html",revision:"c4e54822e09155a76f8b09e2f460c3bf"},{url:"favourite.html",revision:"eeb5f9ff6534940071f369e2e9a16051"},{url:"findadmin.html",revision:"3216531dabc87dc1f88368cb905156db"},{url:"guide.html",revision:"733a48beb8b6144c754e68f65690386c"},{url:"index.html",revision:"150476b6072854a12d366135ae1072f8"},{url:"language.html",revision:"cbfc2ff122734bd01b4ba00f44f5a474"},{url:"limit.html",revision:"e67fa0a37c4e7f831be8d7ba1580f493"},{url:"managegroup.html",revision:"29a66ef32e36fefaea5c042b80add747"},{url:"multiaccount.html",revision:"ee9ef7ffad78e8b3fd5ff3677af67b85"},{url:"nearby.html",revision:"9f464564e9046f2196ebc7e143eec151"},{url:"poll.html",revision:"08f458f3ab7e1bfbff095c62121f3802"},{url:"pornios.html",revision:"7d94cfff7024ec8aae821192d94fc426"},{url:"premium.html",revision:"819c5d1594f02c20efbe8e4ebbe85977"},{url:"privacy.html",revision:"78bc4bd5d9ad704e9e1b279021e7b373"},{url:"proxy.html",revision:"4a835316f735a0fa9f2373dc7fa9a862"},{url:"robot.html",revision:"7a984b1c0bcb5a0e39af3ca1a1910a15"},{url:"scan.html",revision:"9c88c288119b6cabcabe31f65797587a"},{url:"search.html",revision:"f6a2ddaa5ba1761dace40d39e5c0d73a"},{url:"slowmode.html",revision:"dc5651ef33166dedb60559d231147966"},{url:"spam.html",revision:"748505ae58125590a974556442922788"},{url:"speakaschannel.html",revision:"1f401a98e7c903c510bfe7241f701747"},{url:"stories.html",revision:"1c1df4fccbda2743523ebeac6b16733b"},{url:"telegraph.html",revision:"d0301f5d091fcebb77b80d1f5a3e497d"},{url:"term.html",revision:"8437ca8751790508984b6f83cde3f57b"},{url:"theme.html",revision:"9f72a02da1d8b451c0bec3baa9f84616"},{url:"thirdparty.html",revision:"01ae7116e2a4178f2afda740f46529f2"},{url:"translate.html",revision:"37526b20a94345da50d11cadfb3b6b04"}],{})}));
