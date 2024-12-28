const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  try {
    
    const formDataFromLs = JSON.parse(
      localStorage.getItem('feedback-form-state')
      );
      
      if (formDataFromLs === null) {
      return;
    }

    formData = formDataFromLs;
    for (const key in formDataFromLs) {
      feedbackFormEl.elements[key].value = formDataFromLs[key];
    }
  } catch (error) {
    console.log(error);
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const { target: formFieldEl } = event;

  const fieldValue = formFieldEl.value.trim();
  const fieldName = formFieldEl.name;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();
    
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
  const { currentTarget: formEl } = event;

  formEl.reset();
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

