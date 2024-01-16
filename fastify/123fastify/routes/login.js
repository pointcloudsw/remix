
export default async function login (app, opts) {
    app.post('/login', async function (req, res) {
        const { username, password } = req.body;
        if(username !== 'jroll' && password !== 'password'){
            throw new error.UnauthorizedError();
        }
    });
}