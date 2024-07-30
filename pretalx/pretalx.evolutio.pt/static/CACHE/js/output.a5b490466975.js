const getLightboxDialog=()=>{const element=document.querySelector('dialog#lightbox-dialog')
if(element)return element
const lightboxDialog=document.createElement('dialog')
lightboxDialog.id='lightbox-dialog'
lightboxDialog.innerHTML='<div class="lightbox"><a target="_blank"><img /></a><button class="lightbox-close"><i class="fa fa-times"></i></button></div>'
document.body.appendChild(lightboxDialog)
lightboxDialog.addEventListener('click',()=>{lightboxDialog.close()})
lightboxDialog.querySelector('.lightbox').addEventListener('click',(event)=>{event.stopPropagation()})
lightboxDialog.querySelector('button').addEventListener('click',()=>{lightboxDialog.close()})
return lightboxDialog}
const buildLightbox=(url)=>{const lightboxDialog=getLightboxDialog()
lightboxDialog.querySelector('img').src=url
lightboxDialog.querySelector('a').href=url
lightboxDialog.showModal()}
const setupLightbox=()=>{document.querySelectorAll('a[data-lightbox], img[data-lightbox]').forEach((element)=>{element.addEventListener("click",function(event){const imageUrl=element.dataset.lightbox||element.src||element.href
if(!imageUrl){return}
event.preventDefault()
buildLightbox(imageUrl)})})}
document.addEventListener("DOMContentLoaded",setupLightbox)
if(document.readyState==='complete'||document.readyState==='loaded'){setupLightbox()};