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

export {
  ifSuccessfulAdditionAlert,
  ifDublicateNameAlert,
  ifDublicateNumberAlert,
  ifContactDeletedAlert,
};
