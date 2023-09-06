export const footer = (element)=>{
    element.innerHTML = `
    <div class='flex items-center justify-between pr-[20px] pl-[20px] pt-[10px] pb-[10px] bg-black'>
        <div>
            <span class='font-medium text-base text-white'>Todos os direitos reservados &copy; 2020-2025</span>
        </div>
        <div>
            <nav>
                <ul class='flex items-center gap-3 text-white text-[20px]'>
                    <li><a href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa-brands fa-square-twitter"></i></a></li>
                </ul>
            </nav>
        </div>
    </div>
    `
}