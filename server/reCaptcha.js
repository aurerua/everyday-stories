// Register at https://www.google.com/recaptcha/admin to obtain your private
// and public key needed for reCAPTCHA to function.
Meteor.startup(function() {
    reCAPTCHA.config({
        privatekey: Meteor.settings.reCAPTCHAprivateKey
    });
});