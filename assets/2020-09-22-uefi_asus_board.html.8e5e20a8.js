import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as _,a as e}from"./app.79ad58ac.js";const n={},s=e("p",null,"电脑已经用了 5 年，这次 Win10 更新提示「硬盘布局不受 UEFI 固件支持」。本文是华硕主板的解决方案，其他主板顺序不同，但目的都是将启动模式修改为「Only Legecy」。",-1),c=e("p",null,"电脑重启，按 F2 或 DEL 进入 BIOS。选择「高级模式」>「启动」>「CSM」>「启动设备控制」，设置为「仅 Legecy OPROM」。",-1),l=e("p",null,[e("figure",null,[e("img",{src:"https://pic4.zhimg.com/v2-8a26bd62460f662caad3dba696c54efb_r.jpg",alt:"",title:"华硕主板设置截图",loading:"lazy"}),e("figcaption",null,"华硕主板设置截图")])],-1),a=e("p",null,"设置完成后，Win10 就可以正常更新了。",-1),i=e("p",null,"有人反馈「改了启动不了系统」，这是由于系统硬件与你新的设置冲突造成的，并不会造成系统破坏。只需重新进入 BIOS，将设置改回或将 BIOS 还原为默认设置，即可进入系统。",-1),r=[s,c,l,a,i];function d(u,f){return o(),_("div",null,r)}const m=t(n,[["render",d],["__file","2020-09-22-uefi_asus_board.html.vue"]]);export{m as default};
