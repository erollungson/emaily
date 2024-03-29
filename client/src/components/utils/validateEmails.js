// eslint-disable-next-line
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

export default function validateEmails(emails) {

  const invalidEmails = emails
  .split(",")
  .map((email) => email.trim())
  .filter(email => EMAIL_REGEX.test(email) === false)

  if (invalidEmails.length) {
      return `These email is invalid: ${invalidEmails}`;
  }

  return;
}
