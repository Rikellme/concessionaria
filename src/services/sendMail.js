import axios from 'axios';

// export const sendContactMail = async (name, senderMail, phone, content, subject) => {
export const sendContactMail = async (object = {}) => {
  const data = object;

  try {
    return await axios.post('/api/contato', data);
  } catch (error) {
    console.log(error);
  }
}

// export const sendServiceMail = async (name, senderMail, city, phone) => {
//   const data = {
//     name,
//     senderMail,
//     city,
//     phone,
//   }

//   try {
//     return await axios.post('/api/servicos-detalhes-contato', data);
//   } catch (error) {
//     console.log(error);
//   }
// }