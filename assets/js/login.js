
var LoginPage = function (){
    
    var handleLoginForm = function () {

       jQuery('.login .forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('.login .back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });
        
    };       //  Function to handle LoginForm
    
    var handelTooltip = function() {
        $("[data-toggle=tooltip]").tooltip();        
    };        //  function to Handel Bootstrap Tooltip
    
    var handelLoginValidation = function() {

        $(".formLogin").validate({
            rules: {                
                focusInvalid: true, 
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                }                
            },
            messages: {
                email: "Please enter a valid email address",                
                password: {
                    required: "Please provide a password"
                }                
            }
        });

    };        //  function to Handel Login Form Validation
    
    var handelForgotValidation = function() {

        $(".formForgotPass").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }               
            },
            messages: {
                email: "Please enter a valid email address"
            }
        });

    };        //  function to Handel FOrgot Password Form Validation
    
    return {
        init: function() {
            handleLoginForm();
            handelTooltip();
            handelLoginValidation();
            handelForgotValidation();
        }
        
    };
}();    // Function for Handel Login Page