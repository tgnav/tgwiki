if(!self.define){let e,s={};const a=(a,r)=>(a=new URL(a+".js",r).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const t=e=>a(e,i),l={module:{uri:i},exports:d,require:t};s[i]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"d0189aa99e27360f525620ab1ecfd663"},{url:"adddescription.html",revision:"c685d32561399b1da8fcd1d0dd5ffbe2"},{url:"archive.html",revision:"f2e77e2b23b240a127adc6e5fefffef4"},{url:"assets/404.html-cjtR60wQ.js",revision:"dffb39062159b6534a55e2f742561d2b"},{url:"assets/404.html-r6aI8Oiv.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/adddescription.html-6q_CgqTC.js",revision:"6212c03ddf0b26fa3700b9606e99a4b3"},{url:"assets/adddescription.html-h7dSTbCk.js",revision:"03cd431c44a6e7c8a4848d17bbc6ef25"},{url:"assets/app-ifc82t19.js",revision:"0bf2d73ccfcc0dd62ff0f17d4a38ffce"},{url:"assets/archive.html-5CLUe0B1.js",revision:"5fe670b11c7b31a3756da2e18ee7c1f7"},{url:"assets/archive.html-DUv58h78.js",revision:"77d67eaf099bbe428bbae469d9385e7f"},{url:"assets/banned.html-bjg944kJ.js",revision:"f0dc631cecd0b47758aac2744c558a42"},{url:"assets/banned.html-T1lWPhQR.js",revision:"75c42253f3c0b7e6f7f399a63563a06c"},{url:"assets/boost.html-3_VNJ329.js",revision:"3b2575c0e08c815e6296d17d8dc3d2d5"},{url:"assets/boost.html-u0dtTlQB.js",revision:"488b50032ced715a153f662162ac5d42"},{url:"assets/comment.html-Ev20vSS5.js",revision:"525fa832b082dffb6b802f4f07bf3328"},{url:"assets/comment.html-VPGzw_Or.js",revision:"cc0481940e9b1d5008539730ce1e7972"},{url:"assets/contact.html-BJwl6rdC.js",revision:"66cdc9cdd94cdd3f23bc4ec30e3552ca"},{url:"assets/contact.html-Wd8A4ms6.js",revision:"a31d55291da8409a2fa4b3ca9708bb22"},{url:"assets/createchannel.html-SKvddTxG.js",revision:"2e0a2873add27c0d1504f93a7d99363c"},{url:"assets/createchannel.html-WGgXCloB.js",revision:"e2ee153bac00a075fbccfb17fdada5bc"},{url:"assets/creategroup.html-Q5pVGdKH.js",revision:"76e18e943f243489d1737bc8cbf9a050"},{url:"assets/creategroup.html-UYLHM86I.js",revision:"d814596c786bbe1cb3d2938a084f120c"},{url:"assets/createrobot.html-NLedExz2.js",revision:"8b5f87fc1b9175d0e0fd993c118e2de9"},{url:"assets/createrobot.html-v7qB4QcB.js",revision:"210cc7f31a0b401779aa8c463bcb21b2"},{url:"assets/createsticker.html-6rpQecGx.js",revision:"ec94bd78fa1ea6e915ed6edb1b6f5159"},{url:"assets/createsticker.html-Q5mhPnV0.js",revision:"4f98f13457dcc389b25f4403541923f1"},{url:"assets/dc.html-6VSu4J55.js",revision:"126f7542ac2c919da29d08be699657d2"},{url:"assets/dc.html-lt9zEANI.js",revision:"3e2ed09f8ea36d45e781c5a1949fd238"},{url:"assets/deleteaccount.html-bmFkq882.js",revision:"5b0d11c264f825a9e251f88c0a2ecf2e"},{url:"assets/deleteaccount.html-R8j-JvCk.js",revision:"1334669874d0306bc86d6e1d4f0012e7"},{url:"assets/divide.html-J8DN3B_v.js",revision:"a101fb379f86b7ba27e561e831da292e"},{url:"assets/divide.html-lYfPOltg.js",revision:"c27becd1f832925f5c73bef2aa729cd3"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/download.html-hhiBchpj.js",revision:"b2495d58937813cac1806f04dc2765b1"},{url:"assets/download.html-s0UREd0j.js",revision:"3750595ab68e52496ab89b21994550ae"},{url:"assets/emaillogin.html-033ozGdA.js",revision:"1f01882137e694ae04a0c75221ff80d0"},{url:"assets/emaillogin.html-Eq-U1RoV.js",revision:"cb31d6291e4d3f0337cc94e139dfe24f"},{url:"assets/encrypt.html-oNn7tmpn.js",revision:"b1882957bb633d44b1b83bf829994fb2"},{url:"assets/encrypt.html-RPg_2twB.js",revision:"28ede6e49fa23b31f86acf26e4c67a9f"},{url:"assets/faq.html-LgDFavty.js",revision:"c97502f12aea7102d2732364d2673f80"},{url:"assets/faq.html-oXT__1dB.js",revision:"812d662e099a9779ce23f9622a1e3ee5"},{url:"assets/favourite.html-_DlPFORw.js",revision:"fc0f018ff8b8067ab7aa2d991a802485"},{url:"assets/favourite.html-M11U4EGL.js",revision:"8ba65edd0bdbc36cc9eec1a0f3edcecf"},{url:"assets/findadmin.html-mFH5zZVG.js",revision:"196f0224e900acc3d4bde9ed75471869"},{url:"assets/findadmin.html-U1gpa1uy.js",revision:"c9718865a72a264d78f2193b0e03aa98"},{url:"assets/guide.html-B4TjpuVY.js",revision:"45c4dacbf882d8978f195aee0860ea20"},{url:"assets/guide.html-BmXTN71M.js",revision:"b6e81f2560297c24a5a8108d9932b631"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html--Yl4xscP.js",revision:"5a2d5b2bcd4bca6cfe1b86412409d478"},{url:"assets/index.html-2TBZBYES.js",revision:"3189bb3fad03b3119dbbca977425b0e4"},{url:"assets/language.html-An0Xvih5.js",revision:"1282d86055cd49f08d7870b68ff94de8"},{url:"assets/language.html-hBmzOEyE.js",revision:"6313a5a7a0fd87253b30c54f011eb514"},{url:"assets/limit.html-cSCd0zBO.js",revision:"3204de9d4b2b61aecb031130dde419e8"},{url:"assets/limit.html-ir7oWvL2.js",revision:"596a0cc7e740420d6d488a2d8da63525"},{url:"assets/logo.png",revision:"d6a8011f08e128f9673db7ca7b560b13"},{url:"assets/managegroup.html-8C5U1_q4.js",revision:"3ff3e94d6414ff750a8ff6f84e0e49f8"},{url:"assets/managegroup.html-pvfqdj71.js",revision:"3451d1078cfb75e25e01d36ba4c37ce4"},{url:"assets/multiaccount.html-bDLeIaNB.js",revision:"8af6e8d96f034ab36380bb1596224dc7"},{url:"assets/multiaccount.html-tyTKREv1.js",revision:"69adad8727fc39119cccfdd025b8b6bc"},{url:"assets/nearby.html-a5OZ-roL.js",revision:"49048e4ce8f6f8327e1f6dd93430f4a3"},{url:"assets/nearby.html-iQIma7uk.js",revision:"6cdac26ae60821422f561357e879bc73"},{url:"assets/notcomesms.html-yBhjKmui.js",revision:"2f2a8583d14c8fc9e292af0718dd2c16"},{url:"assets/notcomesms.html-ZW58z6bl.js",revision:"53c009acc3d87784be3c36d07f3de7b0"},{url:"assets/poll.html-bXkvUVQ7.js",revision:"6e9420ee24a9be928426541c3f4e4af8"},{url:"assets/poll.html-Lh36PVGh.js",revision:"f93281f08899b4a1c136af5c0fd4a276"},{url:"assets/pornios.html-aGG84hm5.js",revision:"242f55852c0219727e884cef93e5305c"},{url:"assets/pornios.html-jHryvDLT.js",revision:"76c80ec5e1964d5c7cfa0dcd2c380a20"},{url:"assets/premium.html-1KiESoYp.js",revision:"6d549ca26e8643e938db1954aa3a9701"},{url:"assets/premium.html-9cC6ikKS.js",revision:"b56a0898a657f9517a36bb4bbfb4d511"},{url:"assets/privacy.html-hdstr253.js",revision:"38f11b9094c81c399a4f482ee06a46d3"},{url:"assets/privacy.html-rojeGwUS.js",revision:"1480e009a95a3be6dcc9a1e0906d9d3f"},{url:"assets/proxy.html-pPoRWTy5.js",revision:"229f4bf9096e7844dfbecdac0673f8d4"},{url:"assets/proxy.html-zhn2J34k.js",revision:"c5b5edc2e6edfe021585776faa778d54"},{url:"assets/robot.html-5J4dJ_uD.js",revision:"8813ae5a2688d030fafcaac3ce5ac4bd"},{url:"assets/robot.html-NnbX6g-3.js",revision:"9418d45c11f7b28f20ca312ab33634d1"},{url:"assets/scan.html-BeaZwZ9Z.js",revision:"5e430f22dd22d8c6e04085b8e2b8e894"},{url:"assets/scan.html-iDppWI80.js",revision:"0cd1e82a5e9baa03a2262a600a27afbf"},{url:"assets/search.html-9fhJMR66.js",revision:"1c893613cfb525ebb27e9e9a37ce3b7c"},{url:"assets/search.html-T-DeYIH3.js",revision:"270e684e1069e7bfa0ca7a9029b37983"},{url:"assets/slowmode.html-kziA3FDv.js",revision:"2912b7dbe4c63d9d8a804ada083aa42a"},{url:"assets/slowmode.html-YJHhBOFY.js",revision:"7f8b5e1a54748e3906f84c632a04138b"},{url:"assets/spam.html-lW3s_3mQ.js",revision:"af76e2d6f1e97cad1590db0f6c1c156b"},{url:"assets/spam.html-ZsMpU-TG.js",revision:"2b27e3e85356cc6cd0e0ed556def76d8"},{url:"assets/speakaschannel.html-CaawPx5z.js",revision:"e0e9c3984f9c025da9a1ba6fe85251a9"},{url:"assets/speakaschannel.html-qO4iuXxo.js",revision:"5070ab15760756916f797d80ad92be27"},{url:"assets/stories.html--r828qNu.js",revision:"6c8bd0f6a1710a0e6e22cec1a4af297b"},{url:"assets/stories.html-8yIyuwte.js",revision:"2c360aa7143fa6f6e77aed3b280f7343"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/style-zlK6rE-x.css",revision:"4de8277f12590f98a5d24a56b6051e40"},{url:"assets/telegraph.html-atmfijHN.js",revision:"28457c40b5c22bf609bc8fc99601868f"},{url:"assets/telegraph.html-nQzKGN7b.js",revision:"c7b298fa2e5486c9a59996a9e23e2c78"},{url:"assets/term.html-6eeEZDuZ.js",revision:"0c7c3187d167f0a1349649a1fab0b944"},{url:"assets/term.html-v3e0hpYy.js",revision:"f5f57dbd613168aeee5e27d5512f913c"},{url:"assets/tgwiki.png",revision:"eeefb9f104c86ac76972680213ce0375"},{url:"assets/theme.html-dGT_iCZO.js",revision:"84e88b79cf8f543bbc78076f68b98417"},{url:"assets/theme.html-KBIHBEwP.js",revision:"be2615efc7d3914ff2d733118e6bbeee"},{url:"assets/thirdparty.html-CygLyF9O.js",revision:"68ba97f229068ec845ac4fbffe720f48"},{url:"assets/thirdparty.html-fCGVg_5T.js",revision:"0fddd11a4ba7a391cd96c52645ad217f"},{url:"assets/translate.html-NFtDsnVU.js",revision:"fd2f2b3362695d98c023ad1a03ce2e01"},{url:"assets/translate.html-xsexAerm.js",revision:"0a3396c2fa547cebe6005eb864ded993"},{url:"banned.html",revision:"c98d153a9dc1591393a5475a307612f1"},{url:"boost.html",revision:"1f4d84c2f94772ebb776337469aef908"},{url:"comment.html",revision:"1656da1c94a6fd91dcf425e6ef5922af"},{url:"contact.html",revision:"e968ee1a9720b84b1f670c6111f8aa55"},{url:"createchannel.html",revision:"2e5c042dbd8893d99d048080afed3474"},{url:"creategroup.html",revision:"cd45b8df83d730d9d4a0cf0635a521ca"},{url:"createrobot.html",revision:"7587bfc933e2fbd2f32d4aa43577ad70"},{url:"createsticker.html",revision:"b43260f38b4f28aabbc6d56acb87637e"},{url:"dc.html",revision:"f2b892390a4f0ec45c8e7a0eae316b1f"},{url:"deleteaccount.html",revision:"498ed29371831f68f74349a9dca6401e"},{url:"divide.html",revision:"d13b6faea95c46d246f5e52e1f66e1f0"},{url:"download.html",revision:"7a5219b4b350203876084ad4567ced8e"},{url:"emaillogin.html",revision:"8c9a5c2c538239dac1307a543ea78637"},{url:"encrypt.html",revision:"e19822379d422f8245562f800a553cd3"},{url:"faq.html",revision:"16d92a5fd09f689a5e9f40eb509065a6"},{url:"favourite.html",revision:"384133e06301b74fd15ea9d1e1fcd57f"},{url:"findadmin.html",revision:"4a8d975a3a2befafc9034ceda49e420b"},{url:"guide.html",revision:"854626bfc48f61b3c6cc0ca4f6c303de"},{url:"index.html",revision:"2a2349bea583b4ed8099eefbfb7f22d7"},{url:"language.html",revision:"1004bf0cbd646729c68ab1270e31a56d"},{url:"limit.html",revision:"e1c10558fa0afa8f8031b311b6585d9d"},{url:"managegroup.html",revision:"2043884e6f3cb213650c31d9cc6cdc14"},{url:"multiaccount.html",revision:"96e0be0058517ce01242d78cdbbc60ed"},{url:"nearby.html",revision:"cfc618791efdfd849f37aef113c9ee95"},{url:"notcomesms.html",revision:"c791e086332d08dafda12c7937cc3cf1"},{url:"poll.html",revision:"07dd70092e2066e68ee82351562b43db"},{url:"pornios.html",revision:"482c6330aa2b31a2f52853fd545e229b"},{url:"premium.html",revision:"4dc7a26f5fb0293802439626248bf064"},{url:"privacy.html",revision:"0df3b71347535edb63295e41791080bb"},{url:"proxy.html",revision:"3f4e1c4558a36a1f1dccfc3668a4de1f"},{url:"robot.html",revision:"98d9abf84f191ce19baed140e793a3d7"},{url:"scan.html",revision:"ad02546a13056b8e845d57af70125645"},{url:"search.html",revision:"57598bf9da9d4ed5bf5bf44a8d46c906"},{url:"slowmode.html",revision:"a1335c792bbdf53c21f5f14f6956e3cc"},{url:"spam.html",revision:"f57e70c1c91364fbb1280796686c4d2e"},{url:"speakaschannel.html",revision:"58d7a5ba7068633d44f2d7c37dfc08a2"},{url:"stories.html",revision:"9e52a94fac6d295f3bdcbc17ff22a4b5"},{url:"telegraph.html",revision:"d481eaece226bbcfa0facf9fc9c45b9d"},{url:"term.html",revision:"b1d286bc4140a2c76bbfa235ed657fff"},{url:"theme.html",revision:"299b1dde2ba0580b7c541fea795248c3"},{url:"thirdparty.html",revision:"7d8ff2ed46f667d6cfb19a5c64010de5"},{url:"translate.html",revision:"c88d2953150c06fc2fb6f19e300e61ac"}],{})}));