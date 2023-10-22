$(document).ready(function () {
    var outputTarget = $("#pb");
    var strength = -1;

    function checkPasswordStrength(password) {
        strength = 0;
        if (password.length >= 4 && password.length <= 6) {
            strength += 1;
        }
        if (password.length > 6 && password.length <= 8) {
            strength += 1;
        }
        if (password.length > 8) {
            strength += 1;
        }
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            strength += 1;
        }
        if (password.match(/([A-Z])/)) {
            strength += 1;
        }
        if (password.match(/([0-9])/)) {
            strength += 1;
        }
        if (password.match(/[!@#$%^&*?_~()-]/)) {
            strength += 1;
        }
        return strength;
    }

    $("#password").on("input", function () {
        strength = checkPasswordStrength($("#password").val());
        outputTarget.removeClass(function (index, css) {
            return (css.match(/\blevel\d\b/g) || []).join(' ');
        });
        if ($("#password").val() === "") {
            strength = -1;
        }
        outputTarget.addClass('level' + strength);
        $("#l").text("Level " + strength);
    });
});



$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
