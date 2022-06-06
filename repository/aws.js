const AWS = require('aws-sdk');

AWS.config.update({region:'us-east-1'});

class imageRepository {

    constructor(){
        
        this.s3 = new AWS.S3({
            accessKeyId: "AKIA2XPRAPQQIBHIEUCR",
            secretAccessKey: "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",
        });

    }

    async uploadImage(name, imagen, type){

        const key = `${name}.${type.split('/')[1]}`;

        return new Promise((resolve, reject) =>{
            const params = {
                Bucket: 'azevaluacionnubes',
                Key: key,
                Body: imagen,
                ACL: 'public-read',
                contentType: type
            }
    
            this.s3.upload(params, (err, data) =>{
                if(err){
                    reject(err);
                }
                resolve(`https://azevaluacionnubes.s3.amazonaws.com/${key}`);
            });
    
        })
    }

    async deleteImage(key){

        const params = {
            Bucket: 'azevaluacionnubes',
            Key: key
        }

        this.s3.deleteObject(params, (err, data)=>{
            if (err) throw err;
            console.log('Objeto eliminado: ' + key);
        })

    }

}

    
module.exports = imageRepository