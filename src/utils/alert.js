import Swal from 'sweetalert2'

export const Success = (text) => {
    Swal.fire({
      icon: "success",
      title: text,
    });
}

export const Error = (text) => {
  Swal.fire({
    icon: "error",
    title: text,
  });
}