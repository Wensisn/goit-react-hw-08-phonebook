import Notiflix from 'notiflix';

function ifContactDeletedAlert() {
  Notiflix.Notify.success(`
    Contact successfully removed`);
}

function ifSuccessfulAdditionAlert() {
  Notiflix.Notify.success(`Contact added`);
}
function ifDublicateNameAlert({ name }) {
  Notiflix.Notify.warning(`This ${name} is already in your contacts.`);
}

function ifDublicateNumberAlert({ number }) {
  Notiflix.Notify.warning(`This ${number} is already in your contacts.`);
}

function ifValidNameAlert() {
  Notiflix.Notify.failure('Fill in the name line.');
}

function ifValidNumberAlert() {
  Notiflix.Notify.failure('Fill in the number line.');
}

function ifValidEmailAlert() {
  Notiflix.Notify.failure('Fill in the email line.');
}

function ifValidPasswordAlert() {
  Notiflix.Notify.failure('Fill in the password line.');
}

function ifErrorLoginAlert() {
  Notiflix.Notify.failure('There is no registered account via this email.');
}

function ifErrorSigUpAlert() {
  Notiflix.Notify.failure('This email is already used.');
}

function ifErrorAlert() {
  Notiflix.Notify.failure('Error 404.');
}

export {
  ifValidNameAlert,
  ifValidNumberAlert,
  ifSuccessfulAdditionAlert,
  ifDublicateNameAlert,
  ifDublicateNumberAlert,
  ifContactDeletedAlert,
  ifErrorLoginAlert,
  ifErrorSigUpAlert,
  ifErrorAlert,
  ifValidEmailAlert,
  ifValidPasswordAlert,
};
