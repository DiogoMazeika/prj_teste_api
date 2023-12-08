import {teste} from '../data/teste.db.js';

export async function testeService(){
    const data = await teste();

    return data.rows;
}