if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let i={};const b=e=>a(e,d),t={module:{uri:d},exports:i,require:b};s[d]=Promise.all(c.map((e=>t[e]||b(e)))).then((e=>(r(...e),i)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"6069779925223cbea2c34065ba9cdec3"},{url:"adddescription.html",revision:"4a874f5f14b7303a5b81dc7a1ccea8d1"},{url:"archive.html",revision:"96a57b0176d7239978e5d20150f1e0c9"},{url:"assets/404.html-aac45fc4.js",revision:"d2326585f0243bfe24361ae91b0ba442"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/adddescription.html-38594ef8.js",revision:"8d766c6784e066b644c6461155f8c7c2"},{url:"assets/adddescription.html-f3cdf7ea.js",revision:"52702d39c81014576a883911f6e88e5c"},{url:"assets/app-961d0ea0.js",revision:"a95e80748a4bd4889a1a2d1bee38daf2"},{url:"assets/archive.html-16116f97.js",revision:"eaa8ac9fb9ac6b595d81e3b96faa4ada"},{url:"assets/archive.html-f0221a93.js",revision:"0e0972d5a12fad54fa1e46e16ca4acab"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/banned.html-a52c3cf0.js",revision:"ba6548a005b1f58b4e1728ac88c42d2b"},{url:"assets/banned.html-d9a280f5.js",revision:"d68f9150c58cbe36982e5825117fc99f"},{url:"assets/boost.html-2ae087d3.js",revision:"92e59a10cac5bf5e6b756fa38edae4c9"},{url:"assets/boost.html-2cb670f0.js",revision:"055508bd42ad2bc7fe8d826bdfc7c845"},{url:"assets/comment.html-09425a9d.js",revision:"7e8e443bc3411abb2975ed0ad28006b1"},{url:"assets/comment.html-e3e4acdb.js",revision:"7a6f7baf00782fedc562cb8b6c34b877"},{url:"assets/contact.html-393e0c50.js",revision:"5b4651b3fe5269d65027ae2f9b0da58d"},{url:"assets/contact.html-9aad8049.js",revision:"686d00f0114a7289c354a31eba0adace"},{url:"assets/createchannel.html-0b7cb309.js",revision:"a7aaeede0a0f1256e2ad8c73beed54b2"},{url:"assets/createchannel.html-99327176.js",revision:"153b4db44930b53ba2b6e31c2e329389"},{url:"assets/creategroup.html-1f9c66f9.js",revision:"03b7aa007a6e442741a1a93e99fe5799"},{url:"assets/creategroup.html-faca4792.js",revision:"1d9bd36c1a9bbde6b8f29ed9d369d64b"},{url:"assets/createrobot.html-5759a316.js",revision:"79c93b23631d07d4e5af1167614e6c18"},{url:"assets/createrobot.html-ae9bcfe6.js",revision:"44426924f3cf6762ee45d35ebb274616"},{url:"assets/createsticker.html-4c2a04a0.js",revision:"455e2d0136ca49efaab85bf0d1ab1a12"},{url:"assets/createsticker.html-80d79cd6.js",revision:"7d8d8b11f26d3a3985f3dc8a11f9ff43"},{url:"assets/dc.html-34001345.js",revision:"90bf37a49177c979ecc55828a40e866f"},{url:"assets/dc.html-abe30f6a.js",revision:"b93c6a8e16e513e23d4bd78a40511e0c"},{url:"assets/deleteaccount.html-03040aa3.js",revision:"6112f8e4493a0e15e55dfd8a55cd5a7c"},{url:"assets/deleteaccount.html-1992db30.js",revision:"90ad6a7bba9ed2e358a3fe3df49232b4"},{url:"assets/divide.html-1ac259d4.js",revision:"b555e0cbd36e58780aea670331ddc11b"},{url:"assets/divide.html-2d0f2e26.js",revision:"119d0e5cf598a45456dd820396cca582"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/download.html-86408e2b.js",revision:"311417c9f2ed680baee4859931673616"},{url:"assets/download.html-f0c5fd6a.js",revision:"67f50c91fdffc4ecdc1fc0db37cd928a"},{url:"assets/emaillogin.html-668db672.js",revision:"eec72eb8914c1e0717df1d162c24067f"},{url:"assets/emaillogin.html-db457cd3.js",revision:"a984909853de035eb93a8e9bff080452"},{url:"assets/encrypt.html-265740b5.js",revision:"6dce42948dead388f5d3a9cc052971b5"},{url:"assets/encrypt.html-4e06ecb6.js",revision:"021900bb68536c5218a87b1a7759a985"},{url:"assets/faq.html-1c22a4ee.js",revision:"f417903d34b92357e6eac0fa04eae214"},{url:"assets/faq.html-34484416.js",revision:"84f26af5b934ecfe968aa48478c14800"},{url:"assets/favourite.html-64bfd580.js",revision:"07187be09a1d233cb3f9d7a905c61168"},{url:"assets/favourite.html-67f7bbe8.js",revision:"57ec22740b5519b2632a75424b9a6771"},{url:"assets/findadmin.html-05eb9410.js",revision:"e42b92318a4359a4c37abf80ca7bb933"},{url:"assets/findadmin.html-25b8a6b4.js",revision:"356d036a4c716935e26e867809ebe455"},{url:"assets/guide.html-2f87d71f.js",revision:"59e42adb7be7503f7f7923c12f3e8aeb"},{url:"assets/guide.html-77e1d63c.js",revision:"489361c31c547a2d8a1386e5c3f4ce54"},{url:"assets/index-82585c84.js",revision:"938526a93de840eecd804073030c5832"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-63196dba.js",revision:"48bd07837260515cb804c485216c50d0"},{url:"assets/index.html-f9581d74.js",revision:"7b543fa2a0f6adacc007513c86ae16fb"},{url:"assets/language.html-a6c274c4.js",revision:"b4294ec5040f675d0403ce8ec4daa076"},{url:"assets/language.html-c9f3b202.js",revision:"5ca954078c3eb136432cf3a8b9ab20cf"},{url:"assets/limit.html-bd6bf411.js",revision:"70d9f8d6ab7c3cce8f931fe0812eca5f"},{url:"assets/limit.html-c80b0368.js",revision:"ea298be4384eabfb24a7698516f16f5c"},{url:"assets/logo.png",revision:"d6a8011f08e128f9673db7ca7b560b13"},{url:"assets/managegroup.html-4c36844d.js",revision:"3483d7773cc9a8de71bd214d3a856c45"},{url:"assets/managegroup.html-e47bd374.js",revision:"01603019d59eae707e2c427c000cd235"},{url:"assets/multiaccount.html-3838f97d.js",revision:"4a39d2a7973b230eb17cbf39691c7fee"},{url:"assets/multiaccount.html-6f0a37de.js",revision:"1f4871114d0e530d9d982b316618a034"},{url:"assets/nearby.html-d4fe14fd.js",revision:"a17b3f72d928c1142961af972bb1937d"},{url:"assets/nearby.html-fd804832.js",revision:"533e74663691af6717e81c8409ca5320"},{url:"assets/notcomesms.html-81ccf574.js",revision:"bceaa8f71ab52cdd66cdf0d8c208e333"},{url:"assets/notcomesms.html-ec165430.js",revision:"f60f48ee4c8aa5de1245945316751aea"},{url:"assets/poll.html-6c3a36e2.js",revision:"c04d53739ecb905e817da8a10dd12128"},{url:"assets/poll.html-7897d015.js",revision:"17534f02dfd58e3943616d00c9b3d4de"},{url:"assets/pornios.html-3f6ce372.js",revision:"bc7a1888dec5a3cba494548dfcf91a00"},{url:"assets/pornios.html-afda04e5.js",revision:"dc08080f0fa5b3bdbb600b9881dbb967"},{url:"assets/premium.html-ddebcde8.js",revision:"b91779943b816028c5ce574f2b50726f"},{url:"assets/premium.html-f81ac6c1.js",revision:"714f46f19790e761c3b364f768eaab59"},{url:"assets/privacy.html-1e4c1172.js",revision:"3179b121fc8ffc6d63e18339660bf4cb"},{url:"assets/privacy.html-ae46ca3a.js",revision:"4e563d0752f9541bf7fd6b14cfd5ae39"},{url:"assets/proxy.html-2f00e820.js",revision:"87218864e64a12f6d28f3a50b580bb88"},{url:"assets/proxy.html-fcc83907.js",revision:"6f7c7a07fdc4439996cc348a1cf2e7de"},{url:"assets/robot.html-85748351.js",revision:"973c053f5aa3c0fd014af3433dc8a3a5"},{url:"assets/robot.html-fd97105b.js",revision:"7590e33b5aa6e960801f9fbb2b69b7af"},{url:"assets/scan.html-7669f2ea.js",revision:"e259bbbaef550a039e977461d98f4165"},{url:"assets/scan.html-9a984572.js",revision:"1a136e7d11507cd06628e5175f207eb4"},{url:"assets/search.html-465a2310.js",revision:"4b1264fbc5e0deae1fd9e6263827130f"},{url:"assets/search.html-904a0bda.js",revision:"f9e463d2a4f64ebffa1dd3c7e920df26"},{url:"assets/slowmode.html-62a9fb37.js",revision:"087685d5638e5d312f86eb9d53bdb08d"},{url:"assets/slowmode.html-d6e6c37a.js",revision:"ede863e4eb2c4b931b4b5b9ed47fb493"},{url:"assets/spam.html-08f98aa4.js",revision:"92dd060e93728dea58cfc94d76b1ad5d"},{url:"assets/spam.html-f2659795.js",revision:"d83fe2cc1ac2ea358cf2b55a9d1b58b5"},{url:"assets/speakaschannel.html-67ae91f8.js",revision:"63301700a768c11a72449741b478c8a3"},{url:"assets/speakaschannel.html-9ddae719.js",revision:"eef1eaaa8936a95d3cfd8dbf892f5627"},{url:"assets/stories.html-394457a3.js",revision:"1b619d692103c54a3584dc1ba79d43ad"},{url:"assets/stories.html-704af780.js",revision:"43819c30130cacd6a2dde06d015542e7"},{url:"assets/style-9466b0a4.css",revision:"4eb742470f05c4fbfd96ec378080183c"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/telegraph.html-5343691e.js",revision:"159f243ac3bb0b52af353e093c605f03"},{url:"assets/telegraph.html-5686180f.js",revision:"b9545ed81c4acfc4fbc2b86bf4dfe7a6"},{url:"assets/term.html-62d3546f.js",revision:"b52875f157f7ef008d6de3bac5390c84"},{url:"assets/term.html-e737617f.js",revision:"b3765f63144d4de37fe5869ea185123a"},{url:"assets/theme.html-38db48e2.js",revision:"ddbaab7682573d5681d205b32ee84440"},{url:"assets/theme.html-9dfc6edb.js",revision:"e80af61ffebb99b1524051cb937b5d5c"},{url:"assets/thirdparty.html-8e8fec64.js",revision:"d887f311f6f89958d06ab9541dab92b2"},{url:"assets/thirdparty.html-f9847c99.js",revision:"e6ab2026a9cbb99e2e4fddc4ba8c1b44"},{url:"assets/translate.html-17aa4a2a.js",revision:"36c9fa27d430b48befff0a3a69184746"},{url:"assets/translate.html-52479a0d.js",revision:"626b0ac9359e1e192cc8d9800acaf9b4"},{url:"banned.html",revision:"ca37fdc6495aa1d8124c3bfb18fadd8b"},{url:"boost.html",revision:"cdcc73e21f7be985bd70325d62db3adc"},{url:"comment.html",revision:"0701ec170c1a8478e7879f0517793b9b"},{url:"contact.html",revision:"a4bb2f4277e204a2c268ab498ada6ef5"},{url:"createchannel.html",revision:"512fb74d4a3a969722212e5ff5c195a7"},{url:"creategroup.html",revision:"02572ed9e1a33cb1999bf3c4a9bab98e"},{url:"createrobot.html",revision:"be3ba123f0e31b8dbc6014a59c0483a9"},{url:"createsticker.html",revision:"838dcd2588eede203b5677f041de3123"},{url:"dc.html",revision:"4e2d6917e3836e464d5cfccc94fd882f"},{url:"deleteaccount.html",revision:"597bb969fee258d0e77bb054cfd8b5f1"},{url:"divide.html",revision:"f5dbe6d4c0113561fecc2c69d899d812"},{url:"download.html",revision:"2b86858bf48f0ee1a44a0570bc53855a"},{url:"emaillogin.html",revision:"2e21263348102ba13b8c6f45b2b7c04f"},{url:"encrypt.html",revision:"269e85dc4ec5cf14a0b8f7a524cee0c3"},{url:"faq.html",revision:"02904de6656880f95994d596835d6a6a"},{url:"favourite.html",revision:"2d7d0fb7dfcf507b0b2b04def81fb2d9"},{url:"findadmin.html",revision:"f9a7f4d6e178f1fa981b1074467bd7c5"},{url:"guide.html",revision:"6c859306747a21a3b0dd4257b762ea3d"},{url:"index.html",revision:"94e684a1bae6bd55384912b03a491cc6"},{url:"language.html",revision:"636834dea720f20809d0ef3118c52c68"},{url:"limit.html",revision:"52270a4f78191b31a13bbdf72b0dacbe"},{url:"managegroup.html",revision:"a031cd2e838598a101b9cb675ec82b70"},{url:"multiaccount.html",revision:"9c8da60ac5fda8af3110257753624ad4"},{url:"nearby.html",revision:"6a8152bd02b5103214fe74d081d3af7b"},{url:"notcomesms.html",revision:"b2e9cde77c984abee09ccf62dd0ca4cf"},{url:"poll.html",revision:"99716a8ee3b8c27555487d4004f4b290"},{url:"pornios.html",revision:"1f566f7461c89ac7e884bb54e79c48b3"},{url:"premium.html",revision:"5a533111f001e4cc62b0ebbfdc37b5c8"},{url:"privacy.html",revision:"cad35ef9842b2628691b27ffa011cbfc"},{url:"proxy.html",revision:"46caf3cda51a6b74c37df77329acdea2"},{url:"robot.html",revision:"05e47c2f1e91204486f5aa82ee2bcc76"},{url:"scan.html",revision:"93acea257e97bce1efb9c0a7b736a611"},{url:"search.html",revision:"494a7190e2dd4fa7f807d26c5516097d"},{url:"slowmode.html",revision:"1372c71d476a111d9ab0e5f3032eef0b"},{url:"spam.html",revision:"88c1350d3148f02a1ea21d41655bc2ac"},{url:"speakaschannel.html",revision:"9071955daaf35e47a45d5ee2a1cf7054"},{url:"stories.html",revision:"ee6bce78ba7413678841191cce6951ec"},{url:"telegraph.html",revision:"c35f3f3af0d90ff167798e24a6119895"},{url:"term.html",revision:"8e61469e5972647415b421d5e141c723"},{url:"theme.html",revision:"03cccdd487d1caa9367b843391fde815"},{url:"thirdparty.html",revision:"16b96da74fbf459937afca5720240a2a"},{url:"translate.html",revision:"4f38f10c85b0963e035d3d671db46541"}],{})}));
