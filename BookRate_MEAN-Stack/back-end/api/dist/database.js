"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// connection with the database
function startConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect('mongodb://localhost/photo-gallery-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database is connected');
    });
}
exports.startConnection = startConnection;
/* mongoose.connect('mongodb://localhost/photo-gallery-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Conected to database'))
    .catch(err => console.log(err)); */ 
