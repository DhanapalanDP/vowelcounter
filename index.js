const text = document.querySelector('#textBox')
const submitBut = document.querySelector('button')

const show = (e) =>{
    e.preventDefault();
    //taking value
    const newText = text.value
    //split the string
    const newArray = [...newText]
    //checking the vowels
    if(newText!=""){
        let count = 0
        newArray.map((e)=>{
            if((e == "a")||(e == "e")||(e == "i")||(e == "o")||(e == "u")){
                count = count+1
            }
        })
        swal("There are"+" "+count+" "+"vowels");
        setTimeout(()=>{
            text.value = ""
        },3000)
    }else{
        swal("Please type something...")
    }
    
}

submitBut.addEventListener('click', show)