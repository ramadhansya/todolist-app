
import react,{useState,useRef,useEffect} from 'react'



const NavTodo =()=>{

    // state for dom Html 
    const [domHtml,setDomHtml] = useState(null);

    // state for data mode from localStorate
    const [local,setLocal] = useState(null)

    useEffect(()=>{
        // set localStorage
        // note:jika local storage sudah di jalankan sekali atau udah ada, disarankan untk menghapusnya 
        // localStorage.setItem('mode','dark')
        
        // seleksi html 
        let html = document.querySelector('html')

        //  get data localStorage
        let dataLocalStorage = localStorage.getItem('mode')
        html.dataset.colormode = dataLocalStorage;

        // set data
        setLocal(dataLocalStorage)
        // set html
        setDomHtml(html)
    },[])


    // event toggle button 
    const toggleEvent = (e)=>{
       if(domHtml.dataset.colormode === 'dark'){
           localStorage.setItem('mode','light')
        domHtml.dataset.colormode =  localStorage.getItem('mode');
        return
       }else{
        localStorage.setItem('mode','dark')
        domHtml.dataset.colormode =  localStorage.getItem('mode');
       }
    }

    return (
        <nav className="nav-todo">
          <h2 className="title-nav">TODO</h2>
          <button className="toggle-nav" onClick={toggleEvent}>
          </button>
        </nav>
    )
}
export default NavTodo;