// in to response to post requests in case of failure;
const badRequest = (res, message) =>{
    res.status(400).send(message);
};

const resolvePromise = (promise, handler) =>{
    promise.then((result) =>{
        handler.Success(result);
    }).catch((err) =>{
        handler.Fail(err);
    });
}


module.exports = () => {
    return {
        badRequest: badRequest,
        resolvePromise: resolvePromise
    }
}