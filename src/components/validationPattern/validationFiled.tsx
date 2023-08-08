export const validationPatterns = {
    NAME: /^[A-Z?a-z][A-Z?a-z ,._'?-]/,
    FIRSTNAME: /^[A-Z?a-z][A-Z?a-z ,.'-]+$/,
    LASTNAME: /^[A-Z?a-z][A-Z?a-z ,.'-]+$/,
    PHONENUMBER: /^(\+374|\(?0{0,2}374\)?)(10|20|22|30|31|32|33|41|43|44|55|59|77|93|94|95|96|97|98|99)(\d{6})$/,
    EMAIL:  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#.@$!%*?&/+-])[A-Za-z\d.]{8,60}$/i  
} 