export function validateEmail(email:string) {
    const validationRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!validationRegex.test(email)) {
        return {
            type: "error",
            field: "email",
            message: "E-mail is not valid",
        };
    } else {
        return {
            type: "valid",
            field: 'none', message: 'Success'
        };
    }
}
export function validateName(name:string) {
    if (!name) {
        return {
            type: "error",
            field: "name",
            message: "Field must be provided",
        };
    }
    if (name.length < 4 || name.length > 500) {
        return {
            type: "error",
            field: "name",
            message: "Filed must be between 3 and 500 characters",
        };
    }
    return {
        type: "valid",
        field: 'none', message: 'Success'
    };
}

export function validateMessage(message:string) {
    if (!message) {
        return {
            type: "error",
            field: "message",
            message: "Field must be provided",
        };
    }
    if (message.length < 4 || message.length > 3500) {
        return {
            type: "error",
            field: "message",
            message: "Filed must be between 3 and 2000 characters",
        };
    }
    return {
        type: "valid",
        field: 'none', message: 'Success'
    };
}

export function validateAll(name:string, email:string, message: string ){
  const isNameValid = validateName(name)
  if(isNameValid.type==='error'){
    return isNameValid
  }
  const isEmailValid = validateEmail(email)
  if(isEmailValid.type==='error'){
    return isEmailValid
  }
  const isMessageValid = validateMessage(message)
  if(isMessageValid.type==='error'){
    return isMessageValid
  }
  return {type: 'valid', field: 'none', message: 'Success'}
}

