const playlistData = require('../model/user.model')

async function create(data) {
    return await playlistData.create(data)
}
async function read(filter) {
    return await playlistData.find(filter)
}

async function readOne(filter) {
    let res = await read(filter)
    return res[0]
}
async function update(id, newData) {
    return await playlistData.updateOne({ _id: id }, newData)
}
async function del(id) {
    return await update(id, { isActive: false })
}


module.exports = { create, read, update, del, readOne }