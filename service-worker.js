if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let f={};const b=e=>a(e,r),i={module:{uri:r},exports:f,require:b};s[r]=Promise.all(c.map((e=>i[e]||b(e)))).then((e=>(d(...e),f)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"b49fa8e025ceed9557d78d2904d8a00b"},{url:"adddescription.html",revision:"60caa77d620d243a7504912cc4068959"},{url:"archive.html",revision:"0d492b62c3ce854a1cc4dfff494c5879"},{url:"assets/404.html-52ea8acc.js",revision:"6bcfe4b74b921fbdf0d8f66df7e3b7be"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/adddescription.html-05823968.js",revision:"a1badfbd048bccc88fedac5bd56bb86c"},{url:"assets/adddescription.html-4ed88f77.js",revision:"b15124713ac92cb9cbdb6e3d9a47f70f"},{url:"assets/app-ec02ce7e.js",revision:"df96e6cc7d757bc8634027d45e831d65"},{url:"assets/archive.html-7efcc9ba.js",revision:"a2f7776eb58b8932dd2aa445762580a0"},{url:"assets/archive.html-ea80edfe.js",revision:"bf0679d4db2b85fee16d7d52acdf1935"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/banned.html-a05cebde.js",revision:"a743e8d70fe49262b4fea79acdcb941b"},{url:"assets/banned.html-a15c34d5.js",revision:"b6837d154ac4ffd38e11494d168f49ad"},{url:"assets/comment.html-181384c2.js",revision:"c1e43a467dbd5b7b98be44d0d6f24eb0"},{url:"assets/comment.html-8fb413e9.js",revision:"50b64a7143a0bc16d0bc62fe67400805"},{url:"assets/contact.html-65822cb3.js",revision:"43ac5b2fd7dc05471c8f030346ac7bcd"},{url:"assets/contact.html-9f70c2b7.js",revision:"6ca7d18523722f6c0ed0bad263c8c726"},{url:"assets/createchannel.html-83c49840.js",revision:"0203bddb0405a0de5b3b010e8ea78ee7"},{url:"assets/createchannel.html-bd0fd33f.js",revision:"4ed208fd397ae621f8f55798eeb5626e"},{url:"assets/creategroup.html-2440b6ef.js",revision:"55fdee93052f0d2f221961e321b220fe"},{url:"assets/creategroup.html-4714c1f3.js",revision:"1d5d5930b44ddea8aac9c6ffb002c15a"},{url:"assets/createrobot.html-28ea64ff.js",revision:"a77c9df3376a894715c9f2a59dd878ee"},{url:"assets/createrobot.html-ff7bed9d.js",revision:"af3551e95cc3563f3c154bc9f55a9f0c"},{url:"assets/createsticker.html-20651705.js",revision:"3af3ad26f011f809bcfedecbc60b9f22"},{url:"assets/createsticker.html-a87c42f4.js",revision:"207a29b60740bc2968764604bf18b03c"},{url:"assets/dc.html-7ea00c65.js",revision:"3eb1183345cf34a9eebcda823847c2ac"},{url:"assets/dc.html-a6e0e85c.js",revision:"3d3bbc97b158afd3c99443f8145d1c28"},{url:"assets/deleteaccount.html-5ddecf33.js",revision:"7887c3b78da6ecbba75ae16f30023819"},{url:"assets/deleteaccount.html-7e2e3c12.js",revision:"c06821c1aae766fb44bb5404ecc7d043"},{url:"assets/divide.html-b6373304.js",revision:"0eebe7ff29585bb35036cd3109dd4138"},{url:"assets/divide.html-c54acba2.js",revision:"7d69015df1d1ea386b647cc6f7caedcb"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/download.html-58aadcd0.js",revision:"0a1f18838c1c377e6a26cdb81b7d2d36"},{url:"assets/download.html-85a59ebd.js",revision:"bf094dfd1f2eae647d548110600083aa"},{url:"assets/encrypt.html-21858f1b.js",revision:"39fa9732ff6f1436f2ad5d29282206ba"},{url:"assets/encrypt.html-dcf58585.js",revision:"eaa832b365dd82f9d7344d0814dccfa1"},{url:"assets/faq.html-29e3cbd3.js",revision:"baa9e073ce0d6e6a22e603359b6fe21b"},{url:"assets/faq.html-f41b0086.js",revision:"79228291dcf38443b5bb8a602bc74a3a"},{url:"assets/favourite.html-6ef0c998.js",revision:"efebd05806dda0cb034ca2eb012c662d"},{url:"assets/favourite.html-de70591b.js",revision:"90b03c8f1fcfd592f11405545ace9364"},{url:"assets/findadmin.html-70977216.js",revision:"cf47b570096b637a7473f740fa8e1c86"},{url:"assets/findadmin.html-b27e734c.js",revision:"5e76e134978a692cea486accc938d83f"},{url:"assets/guide.html-47791aee.js",revision:"1b4d0f6a0052e0f52623f3ee4b129b85"},{url:"assets/guide.html-7a750b32.js",revision:"ed9dcfd51bbe3b24dd4d99f150a07684"},{url:"assets/index-82585c84.js",revision:"938526a93de840eecd804073030c5832"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-46d81a10.js",revision:"56a20ec71b4ed1ff40d90c88bf5ef162"},{url:"assets/index.html-df51fb65.js",revision:"ef3b2eb8098974ef96af50ad6c8fdf66"},{url:"assets/language.html-6c937e77.js",revision:"5c007cc97e3b95c09d79e0e88c577053"},{url:"assets/language.html-c27425fe.js",revision:"b7497e2bc5925aaf7e86b59a77e99744"},{url:"assets/limit.html-2e3f6692.js",revision:"0fe5dc4c7bf2e882576966db30cdd1aa"},{url:"assets/limit.html-335805e6.js",revision:"21df83cd50fb255580782d9115e76fed"},{url:"assets/logo.png",revision:"d6a8011f08e128f9673db7ca7b560b13"},{url:"assets/managegroup.html-764c1f2b.js",revision:"0b952efbb2d1f66738b1929cdaccf12e"},{url:"assets/managegroup.html-abf89cd2.js",revision:"ca0a03cbfe6e14f9e7b54a94562e018e"},{url:"assets/multiaccount.html-953e6092.js",revision:"816231e56cd3e40f594529d2851cd944"},{url:"assets/multiaccount.html-b0f1c3be.js",revision:"5f916950e3697535fb097d24688945f8"},{url:"assets/nearby.html-0d651e19.js",revision:"f9105f112aaabc4b18cf1682762a18eb"},{url:"assets/nearby.html-ca4da61e.js",revision:"1e09201626182d011110f36f23a06eb1"},{url:"assets/poll.html-72a9cc6b.js",revision:"668f8e5c09939464d44e72a644ed25a2"},{url:"assets/poll.html-c6836ffc.js",revision:"b1fb489e955e1791d2064ddca50abe27"},{url:"assets/pornios.html-6f560ba0.js",revision:"a0ccfcc35857478668772abf3d3a0b9f"},{url:"assets/pornios.html-c3a7f1f5.js",revision:"855f2ba62067533cc3a187f3ce01d858"},{url:"assets/premium.html-2333e822.js",revision:"3aec70330f55a4dd8530eb828f82b4f2"},{url:"assets/premium.html-ff14d828.js",revision:"7a504e788b43e4d8a9e92a0673e5dc6e"},{url:"assets/privacy.html-05cd4264.js",revision:"26ebf896df5f8194d25658f33aaf51d1"},{url:"assets/privacy.html-e52a4aa3.js",revision:"75fa9fabce87f4ce3badf153c9c48718"},{url:"assets/proxy.html-8fb11858.js",revision:"7a7b6ce7d72050d81990b8548f563ee8"},{url:"assets/proxy.html-d96e47d3.js",revision:"81b3e234f1ce6f3354f52b2305f42396"},{url:"assets/robot.html-320df1fe.js",revision:"6010403bd18c713595fcd782f4daa287"},{url:"assets/robot.html-92bfec5c.js",revision:"97efa055962a5207879a2d5f6aca8d0f"},{url:"assets/scan.html-87a4dcc6.js",revision:"adaffbe58b1b4e7928ec2f369e69ffda"},{url:"assets/scan.html-929a971f.js",revision:"07c262a54a16a28768f13de0f61a6196"},{url:"assets/search.html-7ba2b0ed.js",revision:"3bc055f7853f9acf6d68fb99a92b4114"},{url:"assets/search.html-bbe4cb3c.js",revision:"8f3e3f3c12926b3d2b7296fcd9932952"},{url:"assets/slowmode.html-5e259837.js",revision:"d1d2d9548bfd35bf449e6577c2c7fd9b"},{url:"assets/slowmode.html-ef54e05f.js",revision:"1128534fd0680759c08e733ecbc7a1c6"},{url:"assets/spam.html-8ed04ecf.js",revision:"53f19826e95378c9198119d77ef5d4ba"},{url:"assets/spam.html-cdbe2413.js",revision:"b750c386a8ef055cc57ec795ea07b571"},{url:"assets/speakaschannel.html-68ecfa2d.js",revision:"3044b28816fc7091bc3fa4a1263cca31"},{url:"assets/speakaschannel.html-ac87f415.js",revision:"183a108fd6024c20c85aa6a423422b6f"},{url:"assets/style-9466b0a4.css",revision:"4eb742470f05c4fbfd96ec378080183c"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/telegraph.html-6414ec64.js",revision:"9009b18747528eaba9744c7874eacf93"},{url:"assets/telegraph.html-ac9298d3.js",revision:"a046e1a5561c1fae1fe933e5a50a8e9c"},{url:"assets/term.html-50fe61ed.js",revision:"e604e6f101d3394ab6b712548c1638b7"},{url:"assets/term.html-71b0e18e.js",revision:"6ae6b55e3c46ef5787c109da4abeab68"},{url:"assets/theme.html-b3f4161f.js",revision:"f0b69483d02d31182e11b77cbb8a7f51"},{url:"assets/theme.html-b519ca30.js",revision:"29783d441b50adb097040db42971e3aa"},{url:"assets/thirdparty.html-0706ea01.js",revision:"63065ecb45080fec2bbed0513d1b2a2b"},{url:"assets/thirdparty.html-82f19545.js",revision:"692220427f48e8b2c25eac0192193cec"},{url:"assets/translate.html-10004a9d.js",revision:"6550013aaa738888e9196339f1ab7c11"},{url:"assets/translate.html-abb0a6d3.js",revision:"45b7c83ec2ea7fc1723ba9aa3a998ce0"},{url:"banned.html",revision:"f556ddb250215c0987f143795c34643d"},{url:"comment.html",revision:"e3854c8ff158b892ce5b28a283f7ec86"},{url:"contact.html",revision:"dc5022ecc93d9578ffadb7fd0ca1fdb4"},{url:"createchannel.html",revision:"1effb712ea7000cee204fe998ef8aace"},{url:"creategroup.html",revision:"80b10a55a7cf238691c21931a82dc2af"},{url:"createrobot.html",revision:"2895dfc612ffc4f53133e11861a309d4"},{url:"createsticker.html",revision:"a3006b1807dfb3a164623a0adcb5fcfd"},{url:"dc.html",revision:"d5b01cf34e64bdf6e7352e8b2ae47baa"},{url:"deleteaccount.html",revision:"f151070383f438ab0cf473a62fe5829c"},{url:"divide.html",revision:"640b2a0cdba676c09f2aa146c56f147a"},{url:"download.html",revision:"33e4366d8b2da89470f742a1f27470a1"},{url:"encrypt.html",revision:"97152b3a70a13d5e858bff22dc96c4f1"},{url:"faq.html",revision:"9a8d76f1393356383a46882458cf1ac5"},{url:"favourite.html",revision:"557918c1d2bce6ce23fbd67dbc574b1d"},{url:"findadmin.html",revision:"dc1dff0f067df269c4d7d1dd3f57cdef"},{url:"guide.html",revision:"e8c5aaae4f4b18c2522a140c8b66abda"},{url:"index.html",revision:"4fced1210820ebfcb226479ce899b3a4"},{url:"language.html",revision:"06439a24c37a72a346bccf9bacbad9b1"},{url:"limit.html",revision:"620abde08367d2194efea30f7036dbae"},{url:"managegroup.html",revision:"9c1121c3b77a384f91b50f2d056c6da9"},{url:"multiaccount.html",revision:"c8bcf66b82663bf0bac3001b738c7ded"},{url:"nearby.html",revision:"5e6e762b4119401ca340a9e92666b72b"},{url:"poll.html",revision:"d47b1668c428f5bfe5baf2ca84c0a298"},{url:"pornios.html",revision:"5df88bbb5f922534fc062185ed5b15c2"},{url:"premium.html",revision:"7740c5b283abb3bbf8e338df9b327582"},{url:"privacy.html",revision:"a6a7cb9d047eee51f631df4667ec7eee"},{url:"proxy.html",revision:"c66da50cb5d155c1eccde3500b9cd9e2"},{url:"robot.html",revision:"85b71e53cb1d99eaac91a94adfed8c79"},{url:"scan.html",revision:"cd27d3316b0ed14899effaa239f251ed"},{url:"search.html",revision:"388873ccabc4ffe2732c6ddd56a48611"},{url:"slowmode.html",revision:"19c276f7b009bbf9b3ab777821ca3fa8"},{url:"spam.html",revision:"fbd31464ea5332fc7bfd6d8bd822e941"},{url:"speakaschannel.html",revision:"59ec736c004813a813dacb5381692ae7"},{url:"telegraph.html",revision:"efdb28e405fe64e994750011433b1e2d"},{url:"term.html",revision:"c8d0a2572d0ba6d3358cdf1f45d961ba"},{url:"theme.html",revision:"4246a1eb254f8d54b5348075625c0946"},{url:"thirdparty.html",revision:"db1d356dd682cb95deefd859a513ea0b"},{url:"translate.html",revision:"00a47edc36d20748e7752a903416e660"}],{})}));
