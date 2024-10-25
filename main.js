/*

>> KRITERIA SOAL <<

1) Buat Class Developer

2) Class Developer harus memiliki 3 method:
    - createUI(), untuk Frontend Developer (membangun tampilan antarmuka pengguna)

    - createDB(), untuk Backend Developer (membangun dan mengelola database)

    - createDesign(), untuk UI/UX Designer (membuat desain interface)

    - Boleh menambahkan method lain, seperti deployWebsite() atau testFunctionality().

3) Buat Minimal 2 Class Turunan (Inheritance):
    - Class FrontendDeveloper: Mewarisi class Developer dan menambahkan fitur khusus frontend, seperti animasi

    - Class BackendDeveloper: Mewarisi class Developer dan menambahkan fitur backend, seperti pengelolaan API

4) Implementasikan Seluruh Prinsip SOLID:  
    - Single Responsibility Principle (SRP): Setiap class hanya menangani satu tanggung jawab tertentu.

    - Open/Closed Principle (OCP): Kelas harus terbuka untuk ekstensi tetapi tertutup untuk modifikasi.

    - Liskov Substitution Principle (LSP): Kelas turunan harus dapat menggantikan kelas induknya tanpa memengaruhi fungsionalitas

    - Interface Segregation Principle (ISP): Jika ada fitur khusus, buat interface yang spesifik dan hanya diterapkan pada class yang membutuhkannya.

    - Dependency Inversion Principle (DIP): Class tidak boleh bergantung langsung pada class lain; gunakan dependency injection untuk menyuntikkan dependensi.

5. Kreativitas dalam Implementasi:
    - Tambahkan kelas, properti, atau metode tambahan untuk memperkaya fungsionalitas.
    - Gunakan polimorfisme untuk memperluas fungsionalitas metode jika diperlukan.

*/

console.log('<===============================================================>\n\n');

// S - Single Responsibility Principle
// Class Developer Hanya Punya satu tanggung jawab

// Superclass Developer
class Developer {
  // property private
  #name;
  #role;
  #salary;
  constructor(name, role, salary) {
    this.#name = name;
    this.#role = role;
    this.#salary = salary;
  }
  // method createUI()
  createUI() {
    console.log('Membangun tampilan antarmuka pengguna...');
  }
  // method createDB()
  createDB() {
    console.log('Membangun dan mengelola database...');
  }
  // method createDesign()
  createDesign() {
    console.log('Membuat desain interface...');
  }
  // method deployWebsite()
  deployWebsite() {
    console.log('Mengunggah website ke server...');
  }

  // method testFunctionality()
  testFunctionality() {
    console.log('Melakukan pengujian fungsionalitas...');
  }

  // method getDetails()
  getDetails() {
    return `Name: ${this.#name}, Role: ${this.#role}, Salary: Rp.${this.#salary}`;
  }
}

// O - Open-Closed Principle / Inheritance/Pewarisan
// bisa menambahkan fitur baru dari class Developer tanpa mengubah class Developer

// Subclass FrontendDeveloper
// tech stack yang digunakan: HTML, CSS, JavaScript, React, dan TypeScript
class FrontendDeveloper extends Developer {
  constructor(name, salary, feTechStack) {
    super(name, 'FEDeveloper', salary);
    this.feTechStack = feTechStack; // bentuk modifikasi dari class Developer
  }
  // method getFETechStack()
  getFETechStack() {
    return `${this.feTechStack.join(', ')}`;
  }
}

// Subclass BackendDeveloper
// tech stack yang digunakan: Node.js, Express, MongoDB, dan TypeScript
class BackendDeveloper extends Developer {
  constructor(name, salary, beTechStack) {
    super(name, 'BEDeveloper', salary);
    this.beTechStack = beTechStack; // bentuk modifikasi dari class Developer
  }
  // method getBETechStack()
  getBETechStack() {
    return `${this.beTechStack.join(', ')}`;
  }
}

// Subclass Designer
// tech stack yang digunakan: Figma, Adobe XD, dan Sketch
class Designer extends Developer {
  constructor(name, salary, designTechStack) {
    super(name, 'Designer', salary);
    this.designTechStack = designTechStack; // bentuk modifikasi dari class Developer
  }
  // method getDesignTechStack()
  getDesignTechStack() {
    return `${this.designTechStack.join(', ')}`;
  }
}

// Subclass FullstackDeveloper
// tech stack yang digunakan: HTML, CSS, JavaScript, React, TypeScript, Node.js, Express, MongoDB, dan TypeScript
class FullstackDeveloper extends Developer {
  constructor(name, salary, fsTechStack) {
    super(name, 'FullStackDeveloper', salary);
    this.fsTechStack = fsTechStack; // bentuk modifikasi dari class Developer
  }
  // method getDesignTechStack()
  getFSTechStack() {
    return `${this.fsTechStack.join(', ')}`;
  }
}

// Subclass QA Tester
// tech stack yang digunakan: Jest, Mocha, Chai, dan Puppeteer
class QATester extends Developer {
  constructor(name, salary, qaTechStack) {
    super(name, 'QATester', salary);
    this.qaTechStack = qaTechStack; // bentuk modifikasi dari class Developer
  }
  // method getQATechStack()
  getQATechStack() {
    return `${this.qaTechStack.join(', ')}`;
  }
}

// L - Liskov Substitution Principle

// setiap subclass bisa menggantikan superclass developer tanpa masalah
function printDeveloperDetails(developer) {
  // Bentuk Abstraksi
  console.log(developer.getDetails());
}

// menampilkan detail developer

console.log('Detail Developer:\n\n');

const developer = new Developer('John', 'Internship Developer', 4000000);

const frontendDeveloper = new FrontendDeveloper('Alice', 7000000, ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript']);

const backendDeveloper = new BackendDeveloper('Bob', 7000000, ['Node.js', 'Express', 'MongoDB', 'TypeScript']);

const designer = new Designer('Eva', 5000000, ['Figma', 'Adobe XD', 'Sketch']);

const fullstackDeveloper = new FullstackDeveloper('David', 10000000, ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'TypeScript']);

const qaTester = new QATester('Frank', 6000000, ['Jest', 'Mocha', 'Chai', 'Puppeteer']);

printDeveloperDetails(developer);
printDeveloperDetails(frontendDeveloper);
printDeveloperDetails(backendDeveloper);
printDeveloperDetails(designer);
printDeveloperDetails(fullstackDeveloper);
printDeveloperDetails(qaTester);

// I - Interface Segregation Principle
// simulasi class untuk memisahkan interface dari class lain dan sesuai kebutuhan
class Tech {
  print() {
    console.log('Teknologi...');
  }
}

class FrontendTech extends Tech {
  constructor(frontend) {
    super();
    this.frontend = frontend;
  }

  // override dari superclass Tech
  print() {
    console.log(`Tech Stack yang digunakan FrontEndDeveloper adalah : ${this.frontend.getFETechStack()}`);
  }
}

class BackendTech extends Tech {
  constructor(backend) {
    super();
    this.backend = backend;
  }

  // override dari superclass Tech
  print() {
    console.log(`Tech Stack yang digunakan BackEndDeveloper adalah : ${this.backend.getBETechStack()}`);
  }
}

class DesignTech extends Tech {
  constructor(design) {
    super();
    this.design = design;
  }
  print() {
    console.log(`Tech Stack yang digunakan Design adalah : ${this.design.getDesignTechStack()}`);
  }
}

class FullstackTech extends Tech {
  constructor(fullstack) {
    super();
    this.fullstack = fullstack;
  }
  print() {
    console.log(`Tech Stack yang digunakan FullStackDeveloper adalah : ${this.fullstack.getFSTechStack()}`);
  }
}

class QATech extends Tech {
  constructor(qa) {
    super();
    this.qa = qa;
  }
  print() {
    console.log(`Tech Stack yang digunakan QATester adalah : ${this.qa.getQATechStack()}`);
  }
}

// menampilkan teknologi yang digunakan oleh setiap developer

console.log('\n\nTeknologi yang digunakan oleh setiap developer:\n\n');

const frontendTech = new FrontendTech(frontendDeveloper);
frontendTech.print();
const backendTech = new BackendTech(backendDeveloper);
backendTech.print();
const designTech = new DesignTech(designer);
designTech.print();
const fullstackTech = new FullstackTech(fullstackDeveloper);
fullstackTech.print();
const qaTech = new QATech(qaTester);
qaTech.print();

// D - Dependency Inversion Principle
// Class Project bergantung pada abstraksi (interface umum Developer), bukan pada implementasi detail (tipe developer tertentu).

class Project {
  constructor(developer) {
    this.developer = developer;
  }

  // method untuk membuat aplikasi
  createApp() {
    this.developer.createUI();
    this.developer.createDB();
    this.developer.createDesign();
    this.developer.deployWebsite();
    this.developer.testFunctionality();
  }
}

console.log('\n\nMembuat aplikasi:\n\n');

// const project = new Project(developer);
// project.createApp();
// const frontendProject = new Project(frontendDeveloper);
// frontendProject.createApp();
// const backendProject = new Project(backendDeveloper);
// backendProject.createApp();
// const designProject = new Project(designer);
// designProject.createApp();
// const fullstackProject = new Project(fullstackDeveloper);
// fullstackProject.createApp();
// const qaProject = new Project(qaTester);
// qaProject.createApp();
