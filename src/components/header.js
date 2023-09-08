export function header(element){
    element.innerHTML = `
    <div class="flex items-center justify-between 2xl:flex-row md:flex-row flex-col bg-white border-b-[1px] border-[#ddd] 2xl:pr-[50px] 2xl:pl-[50px] 2xl:pt-[10px] 2xl:pb-[10px] md:pr-[50px] md:pl-[50px] md:pt-[10px] md:pb-[10px] pb-[20px]">
    <div class="">
        <a class='font-semibold text-[40px]' href="/"><h1>ABRIME</h1></a>
    </div>
    <div class="flex items-center gap-2">
        <button class='
        bg-[#212121] pr-[20px] pl-[20px] pt-[5px] pb-[5px] rounded-[3px] text-white
        font-medium
        ' id='login'>Entrar</button>
        <button 
        class='
        bg-red-500 text-white pr-[20px] pl-[20px] pt-[5px] pb-[5px] rounded-[3px]
        font-medium
        '
        >Cadastro Gratuito</button>
        <button class='
        pr-[20px] pl-[20px] pt-[5px] pb-[5px] rounded-[3px] border-[1px] border-[#ddd]
        '><i class="text-black fa-solid fa-bars"></i></button>
    </div>
        <div class='shadow-lg h-auto w-auto absolute hidden border-[1px] border-gray-100 bg-white rounded-[3px] p-3 2xl:top-[70px] 2xl:right-[240px] md:right-[220px] md:top-[70px] top-[105px]' id='divLogin'>
        <div class=' w-full text-right'>
            <button id='closed'><i class="text-red-500 text-[20px] fa-solid fa-circle-xmark"></i></button>
        </div>    
        <div class='flex flex-col gap-2'>
                <h2 class='font-medium text-[20px]'>Fazer Login:</h2>
                <input class='pr-[10px] pl-[10px] pt-[5px] pb-[5px] outline-none border-[1px] border-gray-100 rounded-[3px]' type='email' name='' placeholder='Email' />
                <input class='pr-[10px] pl-[10px] pt-[5px] pb-[5px] outline-none border-[1px] border-gray-100 rounded-[3px]' type='password' name='' placeholder='****' />
                <input class='bg-black text-white rounded-[3px] text-[16px] font-semibold pt-[5px] pb-[5px] mt-[5px]' type='submit' value='Entrar'/>
            </div>
        </div>
</div>
    `

    const btnLogin = document.getElementById('login')
    const divLogin = document.getElementById('divLogin')
    const btnClosed = document.getElementById('closed')

    btnLogin.addEventListener('click',abrir)
    btnClosed.addEventListener('click',fechar)

    function abrir(){
        divLogin.classList.toggle('visible')
        divLogin.classList.toggle('hidden')
    }

    function fechar(){
        divLogin.classList.toggle('hidden')
    }

}