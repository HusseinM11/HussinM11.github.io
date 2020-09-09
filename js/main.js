//SELECTORS
$.getJSON('https://type.fit/api/quotes', function(data) {

    let quote = data[index()].text
    let author = data[index()].author
    //console.log(quote)
    //console.log(author)
    $('.quote').append(quote)
    $('.author').append(author)
    $('.generate_button').click(function () {
        quote = data[index()].text
        author = data[index()].author
        $('.quote').html(quote)
        $('.author').html(author)
    })
})
//const generateButton = document.querySelector('.generate_button')
//EVENT LISTENERS



//FUNCTIONS

    function index() {
        return Math.floor(1643 * Math.random())
    }