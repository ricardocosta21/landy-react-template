export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Introduza o nome";
  }
  if (!values.email) {
    errors.email = "Introduza o seu endereco de email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "O endereco nao 'e valido";
  }
  return errors;
}
