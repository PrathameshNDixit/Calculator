const btn = document.getElementsByClassName("div");
const ip = document.getElementById("input");
const infoParagrah = document.getElementById('info'); 
console.log(ip);
for (let index = 1; index < btn.length; index++) {
    btn[index].addEventListener("click", (e) => {
        let InputText = "";
        switch (e.target.innerHTML) {
            case "C":
                break;
            case "←":
                InputText = ip.value.slice(0, ip.value.length - 1);
                break;
            case "=":
                try{
                    InputText = eval(ip.value);
                }catch(e)
                {
                    InputText='';
                    infoParagrah.style.display = 'block';
                }

                break;
            default:
                InputText = `${ip.value}${e.target.innerHTML}`;
                break;
        }
        ip.value = InputText;

        function newFunction() {
            return 1;
        }
    });
}
