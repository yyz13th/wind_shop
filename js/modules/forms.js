import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
    imput = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Loading...',
        success: 'Success, thanks! we will contact you soon!',
        failure: 'Something went wrong...'
    };

    const postData = async (url, data) =>{
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInput = () =>{
            imput.forEach(item => {
                item.value = '';
        });
    }


    form.forEach(item => {
       item.addEventListener('submit', (e) => {
       e.preventDefault()
        

       let statusMessage = document.createElement('div');
       statusMessage.classList.add('status');
       item.appendChild(statusMessage);

       const formData = new FormData(item);
       if (item.getAttribute('data-calc') === 'end') {
           for (let key in state) {
               formData.append(key, state[key]);
           }
       }

        postData('assets/server.php', formData)
        .then(res => {
            console.log(res);
            statusMessage.textContent = message.success;
        })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
                item.reset();
                clearInput();
                setTimeout(() => {
                    statusMessage.remove();
                    Array.from(document.querySelectorAll('[data-modal]')).forEach(element => element.style.display = '');
                    document.body.style.overflow = '';
                }, 5000);
                
            })
        });  
    });
};

export default forms;