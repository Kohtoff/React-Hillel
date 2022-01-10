const inputValidation = (targetInput, targetMessage, value) => {
  if (!value) {
    targetInput.current.style.color = "red";
    targetMessage.current.textContent = " Field is required";
    targetMessage.current.style.color = "red";
  } else if (value.length < 3) {
    targetInput.current.style.border = "2px solid red";
    targetMessage.current.textContent = " Title must be at least 3 characters";
    targetMessage.current.style.color = "red";
  }
};

const fileValidation = (fileInput, fileMessage, file) => {
  if(!file){
    return;
  }
  const sizeLimit = 100000;
  const extension = file.name.split(".").reverse()[0];
  const allowedExtensions = fileInput.current.accept;
  console.log(allowedExtensions);
  if (file.size > sizeLimit) {
    fileInput.current.style.backGroundColor = "red";
    fileMessage.current.textContent = " Max size of file is 100kb";
    fileMessage.current.style.color = "red";
  } else if (!allowedExtensions.includes(extension)) {
    fileInput.current.style.backGroundColor = "red";
    fileMessage.current.textContent =
      " Disallowed Extension! Please, pick .png, .jpg or .webp";
    fileMessage.current.style.color = "red";
  }
};

const hashtagValidation = (hashtagMessage, hashtags) => {
  if (hashtags.length < 1) {
    hashtagMessage.current.textContent = " Please, select at least one hashtag";
    hashtagMessage.current.style.color = "red";

  }
};

const authorValidation = (authorInput, authorMessage, author) => {
  if (!author) {
    authorInput.current.style.border = "2px solid red";
    authorMessage.current.style.color = "red";

    authorMessage.current.textContent = " Please, select author";
  }
};

export { inputValidation, fileValidation, authorValidation, hashtagValidation };
