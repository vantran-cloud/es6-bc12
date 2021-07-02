/**
 * Khai báo biến
 * - Kai báo biến với let và const
 * - So sánh giữa let, const, var (hoisting)
 * + var: có hoisting, function scope
 * + let & const: ko có hoisitng, block scope
 * + const: bắt buộc phải gán value khi khai báo , ko thể gán lại gía trị mới cho nó
 * - Nên dùng cái nào trong trường hợp nào:
 * + var: khi browser ko hỗ trợ let, const (IE)
 * + let: khi cần re-assign (gán lại giá trị)
 * + const: khi ko cần re-assign giá trị
 */

// 1.var (có cơ chế hoisting): nó đẩy biến đó lên trên đầu scope, khi khai báo thì sẽ có ở object window
// console.log(fullName); // work nhưng giá trị nó là undefile
// fullName = 'VMT'
// console.log(fullName); // work
// var fullName = 'TMV';
// //cho phép khai báo biến cùng tên, biến cùng tên vừa khai báo sẽ đc gán lại 1 giá trị mới khác, chứ ko báo lỗi
// var fullName = 'mvt';
// console.log(fullName);

// function showErrorWothVar() {
//     var isError = true;
//     var error = '';

//     if (isError) {
//         var error = 'Something went wrong!';
//         console.log(error);
//     };
//     console.log(error);
// }
// showErrorWothVar();

// 2.let: khi khai báo thì ko có nằm trên object window, nên khi tìm kiếm sẽ ko có (báo undefile)
// console.log(age) // ko thể truy cập biến age trc khi định nghĩa, nó (ko có cơ chế hoisting)
// let age = 20;
// age = 21; // gọi biến ra gán giá trị thì vẫn work bình thig
// console.log(age)
// let age = 22; // lỗi Identifier 'age' has already been declared

// function showErrorWothlet() {
//     let isError = true;
//     let error = '';
    
//     if (isError) {
//       let error = 'Something went wrong!';
//       console.log(error);
//     };
//     console.log(error);
// }
// showErrorWothlet();

//3.const
// console.log(namSinh); // lỗi - ko có hoisting 
// const namSinh; lỗi - bắt buộc phải gán giá trị khi khai  báo;
// const namSinh = 1991;
// namSinh = 1992; // lỗi - ko đc gán lại giá trị mới cho const;
// console.log(namSinh);

// function showErrorWothConst() {
//     const isError = true;
//     const error = '';
    
//     if (isError) {
//       const error = 'Something went wrong!';
//       console.log(error);
//     };
//     console.log(error);
// }
// showErrorWothConst();


/**
 * function
 * - Arrow function
 * - So sánh declaration, expression (normal function) VS arrow function : về cú pháp và con trỏ this
 */

//Expression function
// const tinhTuoiNormal = function(namSinh) {
//     return 2021 - namSinh;
// };

//Arrow function
//ko định nghĩa bối cảnh thực thi (this) của riêng nó
//ko quan tâm nó đc thực thi trong ngữ cảnh nào, giá trị this của arrow func = this của outer func
//nếu nó ko có outer func thì this = global object (window)
//ko dùng arrow func để làm constructor func và làm method của object
// const tinhTuoiArrow = (namSinh) => {
//     console.log(2021 - namSinh); 
// };

// tinhTuoiArrow(1991);

// //cách viết ngắn gọn
// const tinhTuoiArrowShort = (namSinh) => 2021 - namSinh;
// const tinhTuoiOneParam = namSinh => 2021 - namSinh; // đối function 1 tham số (one param)

// const Student = () => {

// }

// var van = new Student(); // lỗi - Student is not a constructor

// const student = {
//     name: 'van',
//     birthYear: 1991,

//     calcAgeNormal: function() {
//         console.log('calcAgeNormal', this);
//         console.log(2021 - this.birthYear);

//         //const _this = this;
        
//         const checkAgeNormal = function() {
//             console.log('checkAgeNormal', this.birthYear);
//             if (2021 - this.birthYear >= 18) {
//                 console.log('you are old enough');
//             } else {
//                 console.log('you are not old enough');
//             }
//         }.bind(student)

//         checkAgeNormal();
//     },

//     // ko dùng arrow func là method cho object
//     calcAgeArrow: () => {
//         // console.log(this)
//         console.log(2021  - this.birthYear);
//     },
// }
// // student.calcAgeArrow();


// /**
//  * Default parameter
//  */

// const withoutDefaultParam = (typeOfUser) => {
//     if (typeOfUser === 'user') {
//         console.log('user page');
//     } else {
//         console.log('admin page')
//     }
// }

// // withoutDefaultParam('admin);

// const withDefaultParam = (typeOfUser = 'user') => {
//     if (typeOfUser === 'user') {
//         console.log('user page');
//     } else {
//         console.log('admin page')
//     }
// }
// withDefaultParam();
// withDefaultParam('admin');

/**
 * Destructuring (phá hủy)
 *  - Destructuring Array
 *  - Destructuring Object
 */

// with Array
// without Destructuring
// const student = ['van', 'minh', 'tran'];
// const van = student[0];
// const tran = student[2];
// console.log(van, tran);


//with Destructuring
// const student = ['van', 'minh', 'tran'];
// const [van, minh, tran] = student;
// console.log(van, tran);

// with Object
//without Destructuring
// const student = {
//     name: 'van',
//     age: 30,
//     class: 'BC12',
// }

// const fullName = student.fullName;
// const age = student['age'];
// console.log(fullName, age);


//with Destructuring
// const student = {
//     fullName: 'van minh tran',
//     age: 30,
//     class: 'BC12',
// }

// const { fullName, class: className } = student;
// console.log(fullName, className);


/**
 * Template String
 */

// const fullName = 'van tran';
// const str = 'my name is' + fullName;
// const templateStr = `my name is ${fullName}`
// console.log(templateStr);

/**
 * Enhanced object literals (shorthand syntax)
 */

const age = 30;
const person = {
    fullName: 'van minh tran',
    age, // age: age
    calcAge() {
        return 2021 - this.age;
    }
}

console.log(person);