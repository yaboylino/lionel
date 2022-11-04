import {NextApiRequest, NextApiResponse} from 'next';
const fsPromises = require('fs').promises;
const path = require('path');
const usersDB = {
    users: require("../../../data/fakeDB"),
    setUsers: (data) => { usersDB.users = data }
}

const handler = (_req: NextApiRequest, res: NextApiResponse) => {


    res.status(200).send({user: "Registered User"});
}

export default handler
