export function loadingCard(){
    let count = 0;
        let Foto = [
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/2180858/pexels-photo-2180858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ];

        let texts = () => {
            for (let i = 0; i < 24; i++) {
                if (count < Foto.length) {
                    let img = document.createElement('img');
                    img.className = 'w-[233px] h-[350px] object-cover';
                    img.setAttribute('data-src', Foto[count]);
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

        texts(); // Inicialmente exibe os primeiros 4 elementos
        loadImagesWhenVisible(); // Carrega as imagens visíveis
}