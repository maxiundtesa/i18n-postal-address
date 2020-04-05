const PostalAdress = require('..').default;

function formatAdress() {
    let myAddressPersonal = new PostalAdress();

    myAddressPersonal.setAddress1('Kennedy Road');
    myAddressPersonal.setAddressNumber('150');
    myAddressPersonal.setState('Kowloon');
    myAddressPersonal.setCity('Wan Chai');
    // myAddressPersonal.setPostalCode('10018');
    myAddressPersonal.setFormat({
        country: 'HK',
        type: 'default',
    });
    let result = myAddressPersonal.toString();
    result = result.replace(/\n/g, ", ");
    console.log("test");
}


formatAdress();
