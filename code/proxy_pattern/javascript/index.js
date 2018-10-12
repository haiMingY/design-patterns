/**
 * 代理模式:Provide a surrogate or placeholder for another object to control access to it
 *          (为其他对象提供一种代理以控制对这个对象的访问)
 *  
 */

// 代理模式加载图片


let imgBox = document.querySelector('#imgBox');

let img = (function (params) {
    let imgNode = document.createElement('img');
    imgBox.appendChild(imgNode)

    return {
        setSrc(src) {
            imgNode.src = src;
        }
    }
})()

let proxyImage = (function (params) {
    let image = new Image()
    image.onload = () => {
        img.setSrc(image.src)
    }
    return {
        setSrc(src) {
            img.setSrc("./img/loading.png")
            image.src = src;
        }
    }
})()

window.addEventListener('load',()=>{
    proxyImage.setSrc("http://img.ivsky.com/img/bizhi/pre/201101/26/chaodajingwu-001.jpg")
})