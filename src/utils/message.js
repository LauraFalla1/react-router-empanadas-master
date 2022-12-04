import Swal from 'sweetalert2'


const MessageSucess = ({message,title})=>{
    Swal.fire(
        title,
        message,
        'success'
      )
}


const MessageFailed = ({message,title})=>{
    Swal.fire({
        icon: 'error',
        title,
        text: message,
      })
}



export {
    MessageFailed,
    MessageSucess
}