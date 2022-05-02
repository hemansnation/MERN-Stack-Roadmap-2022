
const getUser = (firstname, lastname, title, skills) => {
    return `${firstname} ${lastname}, a ${title} developer. He knows ${skills}`
  }
  
  const skills = ['HTML', 'CSS', 'JavaScript'];
  console.log(getUser("Aabhash", "Malviya", 'Frontend', skills));
  // 'Aabhash Malviya, a Frontend developer. He knows HTML, CSS, JavaScript'
  
  
  
  // Classes in Javascript
  
  class Parent {
    constructor(firstname, lastname, country, title){
      this.firstname = firstname
      this.lastname = lastname
      this.country = country
      this.title = title
    }
    getInfo() {
      return `${this.firstname} ${this.lastname}, a ${this.title} developer. He is from ${this.country}`
    }
  }
  
  const p1 = new Parent('Abhishek', 'Yadav', 'India', 'PubG Player');
  
  class Child extends Parent {
    constructor(firstname, lastname, country, title, skills) {
      super(firstname, lastname, country, title)
      this.skills = skills
    }
    getChildInfo() {
      return `${this.firstname} ${this.lastname}, a ${this.title} developer. He is from ${this.country}. He knows ${this.skills}`
    }
  }
  
  const c1 = new Child('Gagan', 'Jain', 'India', 'Backend', 'ReactJS');
  
  
  