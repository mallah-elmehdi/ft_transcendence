"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
exports.CloudinaryProvider = {
    provide: 'Cloudinary',
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: 'du8vfffcg',
            api_key: '379118446319473',
            api_secret: 'r_Di97Y3byGmWSOQC1cjfKXfp18'
        });
    },
};
//# sourceMappingURL=clodinary.provider.js.map