// Register at https://www.google.com/recaptcha/admin to obtain your private
// and public key needed for reCAPTCHA to function.
Meteor.startup(function() {
    reCAPTCHA.config({
        theme: 'light',  // 'light' default or 'dark'
        publickey: Meteor.settings.public.reCAPTCHApublicKey
    });
});
