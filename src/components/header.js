export function header(element){
    element.innerHTML = `
    <div class="flex items-center justify-between 2xl:flex-row md:flex-row flex-col bg-white border-b-[1px] border-[#ddd] pr-[50px] pl-[50px] pt-[10px] 2xl:pb-[10px] md:pb-[10px] pb-[20px]">
    <div class="">
        <a class='font-semibold text-[40px]' href="/"><h1>ABRIME</h1></a>
    </div>
    <div class="flex items-center gap-2">
        <button class='
        bg-[#212121] pr-[20px] pl-[20px] pt-[5px] pb-[5px] rounded-[3px] text-white
        font-medium
        '>Entrar</button>
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
</div>
    `
}