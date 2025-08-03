async function connectToDatabase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        console.log("Conexão com o banco de Dados permitida!");
    } else {
        console.log("Não foi possível conexão com o banco de Dados!");
    }
}

export default connectToDatabase;
