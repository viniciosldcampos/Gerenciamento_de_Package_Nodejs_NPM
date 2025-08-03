async function connectToDatabase(user, password) {
    if(user ==="joana" && password === "123456") {
        console.log("Conexão com o banco de Dados permitida!");
    } else {
        console.log("Não foi possível conexão com o banco de Dados!");
    }
}

export default connectToDatabase;
