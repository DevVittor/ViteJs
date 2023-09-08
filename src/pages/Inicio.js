import {loadingCard} from '/code.js'
export const inicio = (element)=>{
    element.innerHTML=`
        <section>
            <div class="flex items-center justify-between pr-[10px] pl-[10px] pb-[10px] pt-[20px]">
                <div class="">
                    <button class="bg-white text-black border-2 border-gray-100 font-medium 2xl:pr-[20px] 2xl:pl-[20px] 2xl:pt-[5px] 2xl:pb-[5px] md:pr-[10px] md:pl-[10px] md:pt-[5px] md:pb-[5px]  rounded-[5px] pr-[5px] pl-[5px] pt-[3px] pb-[3px]"><i class="pr-2 fa-solid fa-arrow-up-wide-short"></i>Filter</button>
                </div>
                <div class="flex items-center flex-col gap-1.5">
                    <div class="flex items-center 2xl:flex-row lg:flex-row md:flex-row flex-col gap-1.5">
                        <button class="bg-black text-white border-2 border-transparent font-medium 2xl:pr-[20px] 2xl:pl-[20px] 2xl:pt-[5px] 2xl:pb-[5px] md:p-[5px] p-[5px] rounded-[5px] ">Mulher | 17 Bi</button>
                        <button class="bg-white text-black border-2 border-gray-100 font-medium 2xl:pr-[20px] 2xl:pl-[20px] 2xl:pt-[5px] 2xl:pb-[5px] md:p-[5px] p-[5px] rounded-[5px]">Homens | 2 Mi</button>
                        <button class="bg-white text-black border-2 border-gray-100 font-medium 2xl:pr-[20px] 2xl:pl-[20px] 2xl:pt-[5px] 2xl:pb-[5px] md:p-[5px] p-[5px] rounded-[5px]">Trans | 430 Mil</button>
                    </div>
                </div>
                <div class="">
                    <select class="bg-white text-black border-2 border-gray-100 font-medium 2xl:pr-[20px] 2xl:pl-[20px] 2xl:pt-[5px] 2xl:pb-[5px] md:pr-[10px] md:pl-[10px] md:pt-[5px] md:pb-[5px] rounded-full pr-[5px] pl-[5px] pt-[3px] pb-[3px] outline-none" name="select">
                        <option value="destaques" selected>Destaques</option>
                        <option value="populares">Populares</option>
                        <option value="novidades">Novidades</option>
                    </select>
                </div>
            </div>
        </section>
        <section>
            <div class='flex flex-row justify-start flex-wrap gap-1 p-1 w-full' id='imageContainer'></div>
        </section>
    `

loadingCard(document.getElementById('imageContainer'));
}