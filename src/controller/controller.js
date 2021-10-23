const { FetchUserUseCase } = require('../useCase/userUseCase/fetchUserUseCase');
const { RepositoryUser } = require('../repository/sequelize/repositoryClass/repositoryUser/repositoryUser');

class Controller {
    constructor() {
        this.fetchUserUseCase = new FetchUserUseCase();
        this.users = [];
    }
    persistenceData() {
        this.users = this.fetchDataUser(5);


    }
    PersisteDataUser(maxData) {
        const data = {
            url: 'https://jsonplaceholder.typicode.com/users',
            max: maxData,
        };
        return fetchUserUseCase.execute(data);

    }



}