export class createUserPayload {
  template() {
    return {
      "id"        : 111,
      "username"  : "usertest",
      "firstName" : "John",
      "lastName"  : "Doe",
      "email"     : "test@mail.com",
      "password"  : "12345678",
      "phone"     : "812345678",
      "userStatus": 0
    }
  }

  mapping(data) {
    var payload       = this.template()
    payload.id        = parseInt(data.id)
    payload.username  = data.username
    return payload
  }
}