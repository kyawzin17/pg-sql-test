const cloudinary= require("cloudinary").v2;

cloudinary.config({
        cloud_name: 'dn4jczzgu', 
        api_key: '565822628877145', 
        api_secret: '_DIvfgz6ayfKDUxPq-GgC3UNgXM' // Click 'View API Keys' above to copy your API secret
});

module.exports = cloudinary;