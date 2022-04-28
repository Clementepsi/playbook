const User = require("../../app/models/user");
describe("Unit test for User class", () => {
    test('Create an user object', () => {
        const user1 = new User (125533, "Juan Programador", "Juan Antonio", "Estudiante")
        expect(user1.id).toBe(125533)
        expect(user1.username).toBe("Juan Programador")
        expect(user1.name).toBe("Juan Antonio")
        expect(user1.bio).toBe("Estudiante")
        expect(user1.dateCreated).not.toBeUndefined()
        expect(user1.lastUpdated).not.toBeUndefined()
        })
    test('Add Getters', () => {
        const user1 = new User (125533,"Juan Programador","Juan Antonio","Estudiante")
        expect(user1.getUsername).toBe("Juan Programador")
        expect(user1.getBio).toBe("Estudiante")
        expect(user1.getDateCreated).not.toBeUndefined()
        expect(user1.getlastUpdated).not.toBeUndefined()
        })
    test('Add setters',() => {
        const user1 = new User(125533,"Juan Programador","Juan Antonio","Estudiante")
        user1.setUsername ="Gilmar"
        expect(user1.username).toBe("Gilmar")

        user1.setBio ="New bio"
        expect(user1.bio).toBe("New bio")
    } )
})