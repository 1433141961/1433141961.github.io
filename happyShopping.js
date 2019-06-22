/**
 * Created by Administrator on 2018/12/16.
 */

//搜索框鼠标聚焦事件
function onFocus(a){
    if(a.value=='请输入你要搜索的商品'){
        a.value='';a.style.color='#999'};
}
//搜索框鼠标脱离事件
function onBlur(a){
    if(a.value==''){
        a.value='请输入你要搜索的商品';a.style.color='#999'};
}