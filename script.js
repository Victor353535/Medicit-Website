// /**
//  *
//  * @param {HTMLElement} elem
//  */

// const activate = function (elem) {
//     const id = elem.getAttribute('id')
//     const anchor = document.querySelector(`a[href="#${i}]`)
//     if (anchor === null) {
//         return null
//     }

//     anchor.parentElement.querySelectorAll('.active')

//     anchor.classList.add('active')
//     .forEach(node => node.classList.remove('active'))
// }

// /**
//  *
//  * @param {IntersectionObserverEntry[]} entries
//  * @param {IntersectionObserver} observer
//  */

// const callback = function (entries, observer) {
//     entries.forEach(function (entry) {
//         if (entry.intersectionRatio > 0) {
//             activate(entry.target)
//         }
//     })
// }

// const spies = document.querySelectorAll('[data-spy]')

// if (spies.length > 0) {
//     const observer = new IntersectionObserver(callback, {})
//     spies.forEach((spy) => {
//         observer.observe(spy)
//     })
// }