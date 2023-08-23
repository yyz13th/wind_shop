const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

        imgPopup.classList.add('popup');
        workSection.appendChild(imgPopup);
        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems = 'center';
        imgPopup.style.display = 'none';

        imgPopup.appendChild(bigImage);

        workSection.addEventListener ('click', (e) => {
           e.preventDefault(); 

           let target = e.target;

           if(target && target.classList.contains('preview')){
               imgPopup.style.display = 'flex';
               imgPopup.classList.add('animated', 'fadeIn');
               bigImage.style.borderRadius = '10px';
               const path = target.parentNode.getAttribute('href');
               bigImage.setAttribute('src', path);
               document.body.style.overflow = 'hidden';
           }

           if (target && target.matches('div.popup')){
               imgPopup.style.display = 'none';
               imgPopup.classList.remove('animated', 'fadeIn');
           }
        });

};

export default images;