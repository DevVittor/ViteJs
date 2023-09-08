import axios from 'axios'
export function loadingCard(){

    axios.get("http://localhost:8080/")
    .then(res=>{
        const linkImage = res.data.fotos
        let count = 0;
        let texts = () => {
            for (let i = 0; i < 24; i++) {
                if (count < linkImage.length) {
                    let img = document.createElement('img');
                    img.classList.add('card');
                    //img.className = 'w-[233px] h-[350px] object-cover pointer-events-none';
                    img.setAttribute('data-src', linkImage[count]);
                    img.setAttribute('data-loaded', 'false');
                    img.alt = 'imagem';

                    document.getElementById('imageContainer').appendChild(img);
                    count++;
                }
            }
        };

        let loadImagesWhenVisible = () => {
            const images = document.querySelectorAll('img[data-src][data-loaded="false"]');
            
            images.forEach((img) => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const src = img.getAttribute('data-src');
                            img.src = src;
                            img.setAttribute('data-loaded', 'true');
                            observer.unobserve(img);
                        }
                    });
                });
                
                observer.observe(img);
            });
        };

        window.addEventListener('scroll', () => {
            if (window.scrollY + window.innerHeight + 24 > document.body.scrollHeight) {
                texts();
                loadImagesWhenVisible();
            }
        });
        texts(); 
        loadImagesWhenVisible();
    })
    .catch(error=>console.error(`Não foi possivel puxar nada ${error}`))

}